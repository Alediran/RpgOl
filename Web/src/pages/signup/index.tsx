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
import {
	useCreateUserMutation,
	useLazyUserExistsQuery,
} from '../../services/userService';

const Signup = () => {
	const currentDate = new Date();
	const yearRange = `1900:${currentDate.getFullYear()}`;
	const toast = useRef<Toast>(null);
	const [createUser] = useCreateUserMutation();
	const [userExists, userExistsResult] = useLazyUserExistsQuery();
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
		reset,
		formState: { errors, isDirty },
	} = useForm<UserCreateDto>({
		defaultValues: initialValues,
	});

	const getFormErrorMessage = (name: keyof UserCreateDto) => {
		return errors[name]?.message;
	};

	const onSubmit = (data: UserCreateDto) => {
		var severity = '';
		var summary = '';
		const life = 3000;

		createUser(data)
			.catch(() => {
				severity = 'error';
				summary = Localize['Submit:SignupError'];
			})
			.then(() => {
				severity = 'success';
				summary = Localize['Submit:SignupSuccess'];
			})
			.finally(() => {
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
							rules={{
								required: 'Is Required',
								validate: () => {
									console.log("User exists?", userExistsResult);
									return userExistsResult.data === true;},
							}}
							render={({ field, fieldState }) => (
								<FloatingLabelInput
									id={field.name}
									type='input'
									label={Localize.Username}
									value={field.value}
									onChange={(e) => {
										field.onChange(e);
										userExists(e.currentTarget.value);
									}}
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
