/* eslint-disable react/function-component-definition */
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { Button } from "primereact/button";
import Localize from "Components/Localize/Index";
import { CreateBoardDto, NewCreateBoardDto } from "Types/Board";
import { GameSystem, NotificationSeverity } from "Types/Enums";
import { mapEnumToLocalizedLookup } from "Utils/ToLookup";
import { useGetAllQuery } from "Services/BoardCategories";
import { useCreateBoardMutation } from "Services/Boards";
import { useAppDispatch } from "App/Hooks";
import { setShowCreateGameSidePanel } from "Features/gameSlice";
import { showToast } from "Features/notificationSlice";

const CreateGame: React.FC = () => {
  const dispatch = useAppDispatch();
  const {data: categories } = useGetAllQuery();
  const [createGame] = useCreateBoardMutation()
  
  const { control, handleSubmit, reset } = useForm({
    defaultValues: NewCreateBoardDto()
  });
  
  
  const onSubmit = (data: CreateBoardDto) => {
    createGame(data).unwrap()
    .then(() => {
      dispatch(setShowCreateGameSidePanel(false)); 
      dispatch(showToast({severity: NotificationSeverity.success, summary: Localize['Submit:BoardCreatedSuccess'], detail: ''}))
    })
    .catch(() => dispatch(showToast({severity: NotificationSeverity.error, summary: Localize['Submit:BoardCreatedFail'], detail: ''})));
  }

  return <div className='card'>
    <h5>{Localize.CreateNewGame}</h5>
    <form onSubmit={handleSubmit(onSubmit, (e) => console.log(e))}>
      <Controller 
        name='name' 
        control={control}
        rules={{required: true}}
        render={({field}) => <div className='field'>
            <label htmlFor={field.name}>{Localize.GameName}</label>
            <InputText id={field.name} name={field.name} className='w-full' value={field.value} onChange={field.onChange} onBlur={field.onBlur} ref={field.ref} />
          </div>
        }
      />
      <Controller 
        name='gameSystem' 
        control={control}
        rules={{required: true}}
        render={({field}) => <div className='field'>
            <label htmlFor={field.name}>{Localize.GameSystem}</label>
            <Dropdown id={field.name} name={field.name} className='w-full' value={field.value} onChange={field.onChange} onBlur={field.onBlur} ref={field.ref} options={mapEnumToLocalizedLookup(GameSystem)} />
          </div>
        }
      />
      <Controller 
        name='boardCategories' 
        control={control}
        rules={{required: false}}
        render={({field}) => <div className='field'>
            <label htmlFor={field.name}>{Localize.Categories}</label>
            <MultiSelect id={field.name} name={field.name} className='w-full' display="chip" panelHeaderTemplate={<span />}
              value={field.value} 
              onChange={field.onChange} onBlur={field.onBlur} ref={field.ref} options={categories} optionLabel='name' optionValue='id' />
          </div>
        }
      />
      <div>
        <Button type="submit" className='mr-2' label={Localize.CreateGame} />
        <Button type='button' label={Localize.Reset} className="p-button-secondary" onClick={() => reset()}/>
      </div>
    </form>
  </div>
}

export default CreateGame;