/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import Localize from "Components/Localize/Index";
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';
import { Button } from "primereact/button";
import { useCreateThreadMutation } from "Services/Threads";
import { CreateThreadDto } from "Types/Thread";
import { useAppDispatch, useAppSelector } from "App/Hooks";
import { showToast } from "Features/notificationSlice";
import { NotificationSeverity } from "Types/Enums";

interface Props {
  boardId: string;
  onSubmit?: () => void;
}

const CreateThread: React.FC<Props> = ({boardId, onSubmit}) => {  
  const [createThread] = useCreateThreadMutation();
  const { game } = useAppSelector(state => state.game);
  const dispatch = useAppDispatch();
  const [newThread, setNewThread] = useState<CreateThreadDto>({
    name: '',
    boardId,
    groupId: '32625139-7fac-a47f-2f7d-3a058cb12f2b'
  });

  const onChange = (key: string, value: string) => {
    const updateThread: CreateThreadDto = {
      ...newThread, 
      [key]: value
    }

    setNewThread(updateThread);
  }

  const handleCreate = () => {
    createThread(newThread).unwrap()
    .then(() => {
      dispatch(showToast({
        severity: NotificationSeverity.success,
        summary: Localize["Submit:ThreadCreatedSuccess"],
        detail: ''
      }));

      if (onSubmit) onSubmit();
    })      
    .catch(() => {
      dispatch(showToast({
        severity: NotificationSeverity.error,
        summary: Localize["Submit:ThreadCreatedFail"],
        detail: ''
      }))
    })
  }  

  return <div>
    <div className="field">
      <label htmlFor="name">{Localize.Name}</label>
      <InputText id='name' onChange={(e) => onChange(e.target.id, e.target.value)} value={newThread.name}/>      
    </div>
    <div className="field">
      <label htmlFor='groupId'>{Localize.Group}</label>
      <Dropdown id='groupId' options={game.groups} optionLabel='name' optionValue='id' value={newThread.groupId} onChange={(e) => onChange(e.target.id, e.target.value)}/>
    </div>
    <div className="flex justify-content-end">
      <Button label="Create" onClick={handleCreate}/> 
    </div>
  </div>
}

export default CreateThread;