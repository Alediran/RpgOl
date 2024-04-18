import React, { useMemo, useRef } from "react";
import { Sources, StringMap } from "quill";
import QuillImageDropAndPaste, { ImageData } from 'quill-image-drop-and-paste'
import ReactQuill, { UnprivilegedEditor, Quill } from 'react-quill';
import { useUploadPublicImageMutation } from "Services/documents";
import { readUploadedFileAsText } from "Modules/Documents/Utils";
import './quill.snow.css';

interface Props {
  value?: string;
  onChange: (value: string) => void;
}

Quill.register('modules/imageDropAndPaste', QuillImageDropAndPaste);

const Link = Quill.import('formats/link');

class MyLink extends Link {
  static create(value: string) {
    const node = super.create(value);
    const val = this.sanitize(value);
    
    node.setAttribute('href', val);
    node.setAttribute('contenteditable', false);

    return node;
  }
}

Quill.register(MyLink);

var Image = Quill.import('formats/image');
Image.className = 'ql-image';

Quill.register(Image, true);

const sanitizeHtml = (html: string) => {
  const d = document.createElement('div');
  d.innerHTML = html;
  return d.innerHTML;
}


const RichTextEditor: React.FC<Props> = ({value, onChange}) => {  
  const editorRef = useRef<ReactQuill>(null);
  const [uploadImage] = useUploadPublicImageMutation();
  
  const editorModules = useMemo<StringMap>(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown        
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons      
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme  
        [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'align': [] }],
        ['image', 'code-block', 'blockquote'],      
        
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
        
        ['clean']                                         // remove formatting button
      ],
      handlers: {
        image: () => {       
          const editor = editorRef.current?.getEditor();
          
          const input = document.createElement("input");
          input.setAttribute("type", "file");
          input.setAttribute("accept", "image/*");
          input.click();
      
          input.onchange = async () => {
            const files = Array.from(input?.files ?? []);
            
            files.forEach(async file => {
              try {

                await readUploadedFileAsText<ArrayBuffer>(file).then(async (result) => {
                  const blobFile = new Blob([result], { type: file.type });
                  const mainData = new FormData();
                
                  mainData.append("File", blobFile, file.name);
                  
                  uploadImage({fileName: file.name, data: mainData}).unwrap().then(link => {
                    editor?.insertEmbed(editor?.getSelection()?.index ?? 0, "image", link);
                  });
                })
      
              } catch (err) {
                console.log("upload err:", err);
              }
            })
          };
        },
      }
    },
    imageDropAndPaste: {
      handler: (dataUrl: string, type: string, imageData: ImageData) => {
        const editor = editorRef.current?.getEditor();

        const mainData = new FormData();                
        const extension = imageData.type.split('/')
        mainData.append("File", imageData.toBlob(), `paste.${extension[extension.length-1]}`);

        uploadImage({fileName: `paste.${extension[extension.length-1]}`, data: mainData}).unwrap().then(link => {          
          editor?.insertEmbed(editor?.getSelection()?.index ?? 0, "image", link);
        });
      },
    }, 
  }), [uploadImage])

  const handleChange = (val: string, delta: unknown, source: Sources, editor: UnprivilegedEditor) => {    
    onChange(sanitizeHtml(val));
  }

  return <ReactQuill theme="snow" ref={editorRef} value={value} onChange={handleChange} modules={editorModules} />
}

export default RichTextEditor;