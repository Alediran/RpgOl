import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectSession, userValidated } from './features/session/sessionSlice';
import Login from './components/login';
import Localize from './components/localize';
import UserDto from './model/user/user.dto';
import Home from './pages/home';
import Signup from './pages/signup';
import Admin from './pages/admin';

const App = () => {
	const [showLogin, setShowLogin] = useState(false);
	const [localization, setLocalization] = useState('en-US');
	const session = useAppSelector(selectSession);
	const dispatch = useAppDispatch();

	useEffect(() => {
		Localize.setLanguage(localization);
	}, [localization]);

	useEffect(() => {
		var loggedInUser = localStorage.getItem('user');

		if (!loggedInUser) {
			loggedInUser = sessionStorage.getItem('user');
		}

		if (loggedInUser) {
			const user: UserDto = JSON.parse(loggedInUser);
			dispatch(userValidated(user));
		}
	}, [dispatch]);

	const itemsNotLogged = [{}];
	const itemsLogged = [
		{
			label: Localize['Menu:User'],
			icon: PrimeIcons.USER,
			items: [
				{ label: Localize['Menu:UserPreferences'], icon: PrimeIcons.COG },
				{ separator: true },
				{ label: Localize['Menu:Logout'], icon: PrimeIcons.SIGN_OUT },
			],
		},
	];

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
					<Route path='/admin' component={Admin} />
				</Switch>
				<Login visible={showLogin} onHide={() => setShowLogin(false)} />
			</Router>
		</div>
	);
};

export default App;
