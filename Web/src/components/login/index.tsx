import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import Localize from '../localize';
import { Button } from 'primereact/button';
import Signup from '../../pages/signup';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import LoginForm from './components/login';
type Props = {
	visible: boolean;
	onHide: () => void;
};

const Login = (props: Props) => {
	const { visible, onHide } = props;
	const [showPassword, setShowPassword] = useState(false);
	let history = useHistory();

	const handleLogin = () => {};

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	const signUp = () => {
		history.push('/signup');
		onHide();
	};

	return (
		<Dialog header={Localize.AccessTitle} visible={visible} onHide={onHide}>
			<div className='p-d-flex'>
				<LoginForm />
				<Divider layout='vertical' />
				<div>{Localize.NewUsers}</div>
				<div>
					<Button onClick={signUp} label={Localize.SignUp} />
				</div>
			</div>
		</Dialog>
	);
};

export default Login;
