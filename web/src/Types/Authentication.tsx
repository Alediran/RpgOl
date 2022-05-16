export interface AuthenticationDto {
  username: string;
  password: string;
  grant_type: string;
  client_id: string;
  redirect_uri: string;
  response_type?: string | null;
  scope: string;
}

export interface TokenResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
}