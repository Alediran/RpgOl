import {
	Backdrop,
	Modal,
	Fade,
	makeStyles,
	createStyles,
	Theme,
	Button,
	Grid,
	InputAdornment,
	IconButton,
	OutlinedInput,
	FormControl,
	InputLabel,
	Card,
	CardHeader,
} from '@material-ui/core';
import clsx from 'clsx';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useState } from 'react';
import Localize from '../localize';

type Props = {
	open: boolean;
	onClose: () => void;
};

const getModalStyle = () => {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		paper: {
			position: 'absolute',
			width: 400,
			backgroundColor: theme.palette.background.paper,
			border: '0px solid #000',
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3),
		},
		root: {
			display: 'flex',
			flexWrap: 'wrap',
		},
		margin: {
			margin: theme.spacing(1),
		},
		withoutLabel: {
			marginTop: theme.spacing(3),
		},
		textField: {
			width: '25ch',
		},
		contentCenter: {
			display: 'flex',
			alignContent: 'center',
		},
	})
);

const Login = (props: Props): JSX.Element => {
	const { open, onClose } = props;
	const classes = useStyles();
	const [modalStyle] = useState(getModalStyle);
	const [showPassword, setShowPassword] = useState(false);

	const handleLogin = () => {};

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	return (
		<Modal
			open={open}
			onClose={onClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={open}>
				<div style={modalStyle} className={classes.paper}>
					<Grid container spacing={5}>
						<Grid item xs={7}>
							<Card>
								<CardHeader title={Localize.ExistingUsers} />
								<form className={classes.root} noValidate autoComplete='off'>
									<FormControl
										className={clsx(classes.margin, classes.textField)}
										variant='outlined'
									>
										<InputLabel htmlFor='user'>{Localize.Username}</InputLabel>
										<OutlinedInput
											required
											id='user'
											name='user'
											label={Localize.Username}
										/>
									</FormControl>
									<FormControl
										className={clsx(classes.margin, classes.textField)}
										variant='outlined'
									>
										<InputLabel htmlFor='password'>
											{Localize.Password}
										</InputLabel>
										<OutlinedInput
											required
											id='password'
											name='password'
											label={Localize.Password}
											type={showPassword ? 'text' : 'password'}
											endAdornment={
												<InputAdornment position='end'>
													<IconButton
														aria-label='toggle password visibility'
														onClick={handleClickShowPassword}
														onMouseDown={handleMouseDownPassword}
													>
														{showPassword ? <Visibility /> : <VisibilityOff />}
													</IconButton>
												</InputAdornment>
											}
										/>
									</FormControl>
									<FormControl
										className={clsx(classes.margin, classes.textField)}
										variant='outlined'
									>
										<Button variant='contained' color='primary' type='submit'>
											{Localize.Login}
										</Button>
									</FormControl>
								</form>
							</Card>
						</Grid>
						<Grid item xs={5}>
							Sign-up
						</Grid>
					</Grid>
				</div>
			</Fade>
		</Modal>
	);
};

export default Login;
