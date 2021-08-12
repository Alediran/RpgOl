import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import FloatingLabelInput from '../floatingLabelInput';
import Localize from '../localize';

const LoginForm = () => {
	const handleLogin = () => {};
	return (
		<Card title={Localize.ExistingUsers}>
			<div className='p-fluid'>
				<div className='p-field'>
					<FloatingLabelInput
						id='userName'
						type='input'
						label={Localize.Username}
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
					<Button onClick={handleLogin} label={Localize.Login} />
				</div>
			</div>
		</Card>
	);
};

export default LoginForm;
