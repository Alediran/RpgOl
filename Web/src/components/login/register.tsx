import { Card } from 'primereact/card';
import Localize from '../localize';
import { useNavigate  } from 'react-router-dom';
import { Button } from 'primereact/button';

type Props = {
	onHide: () => void;
};

const RegisterCard = (props: Props) => {
	const { onHide } = props;
	const navigate = useNavigate();

	const signUp = () => {
		navigate('/signup');
		onHide();
	};

	return (
		<Card title={Localize.NewUsers}>
			<div style={{ width: '20rem' }}>{Localize.RegisterMessage}</div>
			<div className='p-field form-spacing'>
				<Button onClick={signUp} label={Localize.SignUp} />
			</div>
		</Card>
	);
};

export default RegisterCard;
