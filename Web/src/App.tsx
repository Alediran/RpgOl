import { useState } from 'react';
import './App.css';
import 'primeflex/primeflex.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import Home from './pages/home';
import Login from './components/login';
import Localize from './components/localize';
import { useEffect } from 'react';
import { useAppSelector } from './app/hooks';
import { selectSession } from './features/session/sessionSlice';
import Signup from './pages/signup';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const App = () => {
	const [showLogin, setShowLogin] = useState(false);
	const [localization, setLocalization] = useState('en-US');
	const session = useAppSelector(selectSession);

	useEffect(() => {
		Localize.setLanguage(localization);
	}, [localization]);

	const itemsNotLogged = [{}];
	const itemsLogged = [{}];

	return (
		<div>
			<Router>
				<Menubar
					model={session.isLogged ? itemsLogged : itemsNotLogged}
					start={
						<img
							alt='logo'
							src='/images/logo.jpg'
							height='40'
							className='p-mr-2'
						/>
					}
					end={
						session.isLogged ? (
							session.user.userName
						) : (
							<Button
								onClick={() => setShowLogin(true)}
								hidden={session.isLogged}
								label={Localize.Login}
							/>
						)
					}
				/>

				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/signup' component={Signup} />
				</Switch>
				<Login visible={showLogin} onHide={() => setShowLogin(false)} />
			</Router>
		</div>
	);
};

export default App;
