/* eslint-disable react/function-component-definition */
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Dialog } from "primereact/dialog";
import { useCreateMutation } from "Services/BoardCategories";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import Localize from "Components/Localize/Index";
import { CreateBoardCategoryDto } from "Types/BoardCategories";
import LeftLabelInput from "Components/FormInputs/LeftLabelInput";
import { useAppDispatch } from "App/Hooks";
import { showToast } from "Features/notificationSlice";
import { NotificationSeverity } from "Types/Enums";
import styles from "./index.module.css";

interface BoardCategoriesAddDialogProps {
  visible: boolean;
  onHide: () => void;
}

const BoardCategoriesAddDialog: React.FC<BoardCategoriesAddDialogProps> = ({visible, onHide}) => {
  const [createCategory ] = useCreateMutation();  
  const {handleSubmit, control} = useForm<CreateBoardCategoryDto>({defaultValues: {name: '', description: ''}});
  const dispatch = useAppDispatch();
  
  const onSubmit = handleSubmit((data) => {
    createCategory(data).unwrap()
      .then(() => dispatch(showToast({severity: NotificationSeverity.success, summary: Localize["Submit:BoardCategoryCreatedSuccess"], detail: ''})))
      .catch(() => dispatch(showToast({severity: NotificationSeverity.error, summary: Localize["Submit:BoardCategoryCreatedFail"], detail: ''})));
    onHide();
  });

  return <Dialog visible={visible} header='Add Board Category' onHide={onHide}>  
    <form onSubmit={onSubmit}>      
      <Controller 
        control={control} 
        name='name'
        rules={{required: true}} 
        render={({field}) => (
          <LeftLabelInput name={field.name} label={Localize.Name}>
            <InputText id={field.name} name={field.name} value={field.value} onChange={field.onChange} />
          </LeftLabelInput>
        )}
      />
      
      <Controller
        control={control}
        name='description'
        render={({field}) => (
          <LeftLabelInput name={field.name} label={Localize.Description}>
            <InputText id='description' name={field.name} value={field.value} onChange={field.onChange} />
          </LeftLabelInput>
        )}
      />
      <div className="p-dialog-footer">
        <Button type="submit" label={Localize.Save}/>
        <Button type="button" className="p-button-secondary" label={Localize.Cancel} onClick={onHide}/>
      </div>
    </form>
  </Dialog> 
}

export default BoardCategoriesAddDialog;