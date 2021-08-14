import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Checkbox } from 'primereact/checkbox';
import { classNames } from 'primereact/utils';
import FloatingCalendarInput from '../../components/floatingCalendarInput';
import FloatingLabelInput from '../../components/floatingLabelInput';
import Localize from '../../components/localize';
import UserDto, { validationSchema } from '../../model/user.dto';

const Signup = () => {
	const [showMessage, setShowMessage] = useState(false);
	const [formData, setFormData] = useState({});
	const currentDate = new Date();
	const yearRange = `1900:${currentDate.getFullYear()}`;

	const initialValues: UserDto = {
		id: '',
		userName: '',
		email: '',
		password: '',
		confirm: '',
		birthday: new Date(),
		accept: false,
	};

	const {
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(validationSchema),
	});

	const getFormErrorMessage = (name: string) => {
		console.log(errors[name]);
		return errors[name] && errors[name].message;
	};

	return (
		<form onSubmit={handleSubmit((d) => console.log(d))}>
			<Card title={Localize.CreateUser}>
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
									labelClassName={classNames({ 'p-error': errors.name })}
									errors={getFormErrorMessage(field.name)}
								/>
							)}
						/>
						<div>{}</div>
					</div>
					<div className='p-field'>
						<Controller
							name='email'
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
									labelClassName={classNames({ 'p-error': errors.name })}
									errors={getFormErrorMessage(field.name)}
								/>
							)}
						/>
					</div>
					<div className='p-field'>
						<Controller
							name='password'
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
									labelClassName={classNames({ 'p-error': errors.name })}
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
									labelClassName={classNames({ 'p-error': errors.name })}
									errors={getFormErrorMessage(field.name)}
								/>
							)}
						/>
					</div>
					<div className='p-field'>
						<Controller
							name='birthday'
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
									labelClassName={classNames({ 'p-error': errors.name })}
									errors={getFormErrorMessage(field.name)}
								/>
							)}
						/>
					</div>
					<div>
						<Controller
							name='accept'
							control={control}
							render={({ field, fieldState }) => (
								<Checkbox
									inputId={field.name}
									onChange={(e) => field.onChange(e.checked)}
									checked={field.value}
									className={classNames({ 'p-invalid': fieldState.invalid })}
								/>
							)}
						/>
						<label
							htmlFor='accept'
							className={classNames({ 'p-error': errors.accept })}
						>
							{Localize.Agree}
						</label>
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
