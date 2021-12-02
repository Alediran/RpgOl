import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import UserLoginDto, {
	validationSchema,
} from '../../model/user/user-login.dto';
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
		resolver: zodResolver(validationSchema),
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
			<Card title={Localize.ExistingUsers}>
				<div className='p-fluid'>
					<div className='p-field'>
						<Controller
							name='userName'
							control={control}
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
					<div className='p-field form-spacing'>
						<Controller
							name='password'
							control={control}
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
					<div className='p-field form-spacing'>
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
									<label htmlFor='accept'>{Localize['Login:Persist']}</label>
								</span>
							)}
						/>
					</div>
					<div className='p-field form-spacing'>
						<Button label={Localize.Login} type='submit' />
					</div>
				</div>
			</Card>
		</form>
	);
};

export default LoginForm;
