import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import UserLoginDto, {
	validationSchema,
} from '../../model/user/user-login.dto';
import FloatingLabelInput from '../floatingLabelInput';
import Localize from '../localize';
import { classNames } from 'primereact/utils';

const LoginForm = () => {
	const initialValues: UserLoginDto = {
		userName: '',
		password: '',
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

	const onSubmit = (data: UserLoginDto) => {};

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
						<FloatingLabelInput
							id='password'
							type='password'
							label={Localize.Password}
							feedback={false}
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