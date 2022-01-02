import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { useForm, Controller } from 'react-hook-form';
import UserLoginDto from '../../model/user/user-login.dto';
import FloatingLabelInput from '../forms/floatingLabelInput';
import Localize from '../localize';
import { classNames } from 'primereact/utils';
import { useAppDispatch } from '../../app/hooks';
import { useLazyValidateUserQuery } from '../../services/userService';
import { userValidated } from '../../features/session/sessionSlice';

type Props = {
	onHide: () => void;
};

const LoginForm: React.FC<Props> = (props: Props) => {
	const { onHide } = props;
	const dispatch = useAppDispatch();
	const [validateUser, result, lastPromiseInfo] = useLazyValidateUserQuery();

	if (result.isSuccess) {
		onHide();
		dispatch(userValidated(result.data));
	}

	const initialValues: UserLoginDto = {
		userName: '',
		password: '',
		persist: false,
	};

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<UserLoginDto>({
		defaultValues: initialValues,
	});

	const getFormErrorMessage = (name: keyof UserLoginDto) => {
		return errors[name]?.message;
	};

	const onSubmit = (data: UserLoginDto) => {
		validateUser(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>			
			<div className='fluid'>
				<div className='field form-spacing'>
					<Controller
						name='userName'
						control={control}
						rules={{required: Localize['Validation:Required']}}
						render={({ field, fieldState }) => (
							<FloatingLabelInput
								id={field.name}
								type='input'
								label={Localize.Username}
								value={field.value}
								onChange={field.onChange}
								className={classNames({ 'p-invalid': fieldState.invalid })}
								labelClassName={classNames({ 'p-error': errors[field.name] })}
								errors={getFormErrorMessage(field.name)}
							/>
						)}
					/>
				</div>
				<div className='field form-spacing'>
					<Controller
						name='password'
						control={control}
						rules={{required: Localize['Validation:Required']}}
						render={({ field, fieldState }) => (
							<FloatingLabelInput
								id={field.name}
								type='password'
								label={Localize.Password}
								feedback={false}
								value={field.value}
								onChange={field.onChange}
								className={classNames({ 'p-invalid': fieldState.invalid })}
								labelClassName={classNames({ 'p-error': errors[field.name] })}
								errors={getFormErrorMessage(field.name)}
							/>
						)}
					/>
				</div>
				<div className='field'>
					<Controller
						name='persist'
						control={control}
						render={({ field, fieldState }) => (
							<span>
								<Checkbox
									inputId={field.name}
									onChange={(e) => field.onChange(e.checked)}
									checked={field.value}
								/>
								<label htmlFor='accept'> {Localize['Login:Persist']}</label>
							</span>
						)}
					/>
				</div>
				<div className='flex flex-grow-1'>
					<Button label={Localize.Login} type='submit' className='w-full'/>
				</div>
			</div>			
		</form>
	);
};

export default LoginForm;
