import axios from 'axios';
import AuthenticationToken from '../model/authentication/authenticationToken.dto';

export default class AuthenticationService {
	apiUrl = process.env.REACT_APP_AUTHENTICATION_URL;
	client_id = process.env.REACT_APP_CLIENT_ID;
	client_secret = process.env.REACT_APP_CLIENT_SECRET;

	GetAuthenticationToken = async () => {
		const result = await axios.get<AuthenticationToken>(
			`${this.apiUrl}/oauth2/default/v1/token?grant_type=client_credentials&scope=api_access&client_id=${this.client_id}&client_secret=${this.client_secret}`
		);

		return result;
	};
}
