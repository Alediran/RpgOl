export interface AuthenticationDto {
  username: string;
  password: string;
  grant_type: string;
  client_id: string;
  redirect_uri: string;
  response_type?: string | null;
  scope: string;
}

export interface SessionTokenDto {
  access_token: string;
  expires_at?: number;
  id_token?: string;
  scope?: string;
  session_state: string | null;
  token_type: string;
  expired?: boolean;
  expires_in?: number;
}

export interface UserDetailsDto {
  id: string;
  userName: string;
  name: string;
  surname: string;
  email: string;
  emailConfirmed: boolean
}