import { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Checkbox } from 'primereact/checkbox';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import FloatingCalendarInput from '../../components/forms/floatingCalendarInput';
import FloatingLabelInput from '../../components/forms/floatingLabelInput';
import Localize from '../../components/localize';
import UserCreateDto, {
	validationSchema,
} from '../../model/user/user-create.dto';
import { useAppDispatch } from '../../app/hooks';
import { createUser } from '../../features/user/userSlice';

const Signup = () => {
	const dispatch = useAppDispatch();
	const currentDate = new Date();
	const yearRange = `1900:${currentDate.getFullYear()}`;
	const toast = useRef<Toast>(null);

	const initialValues: UserCreateDto = {
		User: '',
		Email: '',
		Password: '',
		Birthday: undefined,
		confirm: '',
		Accept: false,
	};

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<UserCreateDto>({
		resolver: zodResolver(validationSchema),
		defaultValues: initialValues,
	});

	const getFormErrorMessage = (name: keyof UserCreateDto) => {
		return errors[name]?.message;
	};

	const onSubmit = (data: UserCreateDto) => {
		dispatch(createUser(data)).then((result) => {
			var severity = '';
			var summary = '';
			const life = 3000;

			if (result.meta.requestStatus === 'fulfilled') {
				severity = 'success';
				summary = Localize['Submit:SignupSuccess'];
			} else {
				severity = 'error';
				summary = Localize['Submit:SignupError'];
			}

			if (toast.current)
				toast.current.show({
					severity: severity,
					summary: summary,
					life: life,
					contentClassName: '',
				});
		});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Toast position='top-right' ref={toast} />
			<Card title={Localize.CreateUser}>
				<div className='p-fluid'>
					<div className='p-field'>
						<Controller
							name='User'
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
					<div className='p-field'>
						<Controller
							name='Email'
							control={control}
							render={({ field, fieldState }) => (
								<FloatingLabelInput
									id={field.name}
									type='input'
									label={Localize.Email}
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
					<div className='p-field'>
						<Controller
							name='Password'
							control={control}
							render={({ field, fieldState }) => (
								<FloatingLabelInput
									id={field.name}
									type='password'
									label={Localize.Password}
									feedback
									value={field.value}
									onChange={field.onChange}
									className={classNames({ 'p-invalid': fieldState.invalid })}
									labelClassName={classNames({ 'p-error': errors[field.name] })}
									errors={getFormErrorMessage(field.name)}
								/>
							)}
						/>
					</div>
					<div className='p-field'>
						<Controller
							name='confirm'
							control={control}
							render={({ field, fieldState }) => (
								<FloatingLabelInput
									id={field.name}
									type='password'
									label={Localize.ConfirmPassword}
									feedback
									value={field.value}
									onChange={field.onChange}
									className={classNames({ 'p-invalid': fieldState.invalid })}
									labelClassName={classNames({ 'p-error': errors[field.name] })}
									errors={getFormErrorMessage(field.name)}
								/>
							)}
						/>
					</div>
					<div className='p-field'>
						<Controller
							name='Birthday'
							control={control}
							render={({ field, fieldState }) => (
								<FloatingCalendarInput
									id={field.name}
									label={Localize.BirthDate}
									monthNavigator
									yearNavigator
									yearRange={yearRange}
									value={field.value}
									onChange={field.onChange}
									className={classNames({ 'p-invalid': fieldState.invalid })}
									labelClassName={classNames({ 'p-error': errors[field.name] })}
									errors={getFormErrorMessage(field.name)}
								/>
							)}
						/>
					</div>
					<div>
						<Controller
							name='Accept'
							control={control}
							render={({ field, fieldState }) => (
								<span>
									<Checkbox
										inputId={field.name}
										onChange={(e) => field.onChange(e.checked)}
										checked={field.value}
										className={classNames({ 'p-invalid': fieldState.invalid })}
									/>

									<label
										htmlFor='accept'
										className={classNames({ 'p-error': errors[field.name] })}
									>
										{Localize.Agree}
									</label>
								</span>
							)}
						/>
					</div>
					<div>
						<Button label={Localize.Submit} type='submit' />
					</div>
				</div>
			</Card>
		</form>
	);
};

export default Signup;
