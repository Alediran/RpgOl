import { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Checkbox } from 'primereact/checkbox';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import FloatingCalendarInput from '../../components/forms/floatingCalendarInput';
import FloatingLabelInput from '../../components/forms/floatingLabelInput';
import Localize from '../../components/localize';
import UserCreateDto from '../../model/user/user-create.dto';
import {
	useCreateUserMutation,
	useLazyMailExistsQuery,
	useLazyUserExistsQuery,
} from '../../services/userService';
import { emailPattern } from '../../utils/regex';

const Signup = () => {
	const currentDate = new Date();
	const yearRange = `1900:${currentDate.getFullYear()}`;
	const toast = useRef<Toast>(null);
	const [createUser] = useCreateUserMutation();
	const [userExists, userExistsResult] = useLazyUserExistsQuery();
	const [mailExists, mailExistsResult] = useLazyMailExistsQuery();

	const initialValues: UserCreateDto = {
		Name: '',
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
		clearErrors,
		formState: { errors, isDirty },
	} = useForm<UserCreateDto>({
		defaultValues: initialValues,
		reValidateMode: 'onChange'
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

	const onReset = () => {		
		reset();
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Toast position='top-right' ref={toast} />
			<Card title={Localize.CreateUser}>
				<div className='fluid'>
					<div className='field form-spacing'>
						<Controller
							name='Name'
							control={control}
							rules={{
								required: Localize['Validation:Required'],
								validate: {
									minLength: v => v.length >= 7 || Localize['Validation:UserName'],
									exists: () => !userExistsResult.data || Localize['Validation:UserExists'],
								}
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
					<div className='field form-spacing'>
						<Controller
							name='Email'
							control={control}
							rules={{
								required: Localize['Validation:Required'],
								validate: {									
									exists: () => !mailExistsResult.data || Localize['Validation:MailExists'],
								},
								pattern: {
									value: emailPattern,
									message: Localize['Validation:InvalidEmail']
								}
							}}
							render={({ field, fieldState }) => (
								<FloatingLabelInput
									id={field.name}
									type='input'
									label={Localize.Email}
									feedback={false}
									value={field.value}
									onChange={(e) => {
										field.onChange(e);
										mailExists(e.currentTarget.value);
									}}
									className={classNames({ 'p-invalid': fieldState.invalid })}
									labelClassName={classNames({ 'p-error': errors[field.name] })}
									errors={getFormErrorMessage(field.name)}
								/>
							)}
						/>
					</div>
					<div className='field form-spacing'>
						<Controller
							name='Password'
							control={control}
							rules={{
								required: Localize['Validation:Required']
							}}
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
					<div className='field form-spacing'>
						<Controller
							name='confirm'
							control={control}
							rules={{
								required: Localize['Validation:Required']
							}}
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
					<div className='field form-spacing'>
						<Controller
							name='Birthday'
							control={control}
							rules={{
								required: Localize['Validation:Required']
							}}
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
					<div className='field form-spacing'>
						<Controller
							name='Accept'
							control={control}
							rules={{
								required: Localize['Validation:Required']
							}}
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
					<div className='flex flex-row'>
						<div className='mr-2'>
							<Button label={Localize.Submit} type='submit' />
						</div>
						<div>
							<Button label={Localize.Reset} className="p-button-outlined p-button-secondary" onClick={onReset}/>
						</div>
					</div>
				</div>
			</Card>
		</form>
	);
};

export default Signup;
