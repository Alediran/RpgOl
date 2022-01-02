import { Dialog } from 'primereact/dialog';
import { Link } from 'react-router-dom';
import Localize from '../localize';
import LoginForm from './loginForm';

type Props = {
	visible: boolean;
	onHide: () => void;
};

const Login = (props: Props) => {
	const { visible, onHide } = props;

	return (
		<Dialog header={Localize.SignIn} visible={visible} onHide={onHide}>
			<div className='flex'>
				<LoginForm onHide={onHide} />
			</div>
			<div className='flex'>
				<div>{Localize.NewTo}</div>&nbsp;
				<div><Link to='signup' onClick={onHide}>{Localize.SignUpNow}</Link></div>
			</div>
		</Dialog>
	);
};

export default Login;
