/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import Localize from "Components/Localize/Index";
import { InputText } from "primereact/inputtext";
import { useCreateThreadMutation } from "Services/Threads";
import { CreateThreadDto } from "Types/Thread";
import { Button } from "primereact/button";

interface Props {
  boardId: string;
}

const CreateThread: React.FC<Props> = ({boardId}) => {
  const [createThread] = useCreateThreadMutation();
  
  const [newThread, setNewThread] = useState<CreateThreadDto>({
    name: '',
    boardId,
    groupId: '32625139-7fac-a47f-2f7d-3a058cb12f2b'
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updateThread: CreateThreadDto = {
      ...newThread, 
      [e.target.id]: e.currentTarget.value
    }

    setNewThread(updateThread);
  }

  const handleCreate = () => {
    createThread(newThread).unwrap()
    .then()
    .catch()
  }

  return <div>
    <div className="field">
      <label htmlFor="name">{Localize.Name}</label>
      <InputText id='name' onChange={(e) => onChange(e)} value={newThread.name}/>      
    </div>
    <div className="flex justify-content-end">
      <Button label="Create" onClick={handleCreate}/> 
    </div>
  </div>
}

export default CreateThread;