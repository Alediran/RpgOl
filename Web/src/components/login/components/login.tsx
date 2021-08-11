import { Card } from 'primereact/card';
import FloatingLabelInput from '../../floatingLabelInput';
import Localize from '../../localize';
import './login.css';

const LoginForm = () => {
	return (
		<Card title={Localize.ExistingUsers}>
			<div className='p-fluid'>
				<div className='p-field'>
					<FloatingLabelInput id='userName' label={Localize.Username} />
				</div>
				<div className='p-field form-spacing'>
					<FloatingLabelInput id='password' label={Localize.Password} />
				</div>
			</div>
		</Card>
	);
};

export default LoginForm;
