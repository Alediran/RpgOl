import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import Localize from '../localize';
import LoginForm from './components/loginForm';
import RegisterCard from './components/register';

type Props = {
	visible: boolean;
	onHide: () => void;
};

const Login = (props: Props) => {
	const { visible, onHide } = props;

	return (
		<Dialog header={Localize.AccessTitle} visible={visible} onHide={onHide}>
			<div className='p-d-flex'>
				<LoginForm />
				<Divider layout='vertical' />
				<RegisterCard onHide={onHide} />
			</div>
		</Dialog>
	);
};

export default Login;
