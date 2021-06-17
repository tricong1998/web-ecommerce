export type Customer = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  code: string;
  accessToken?: string;
  accountAdditionalData?: AccountAdditionalData;
  type?: CustomerType;
};

export type AccountAdditionalData = {
  gender?: Gender;
  fuelAccountNumber?: string;
};

export enum CustomerType {
  personal = 'person',
  business = 'business',
}

export enum Gender {
  Male = 'male',
  Female = 'female',
}

export type RefreshTokenResponse = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number; // second
  refreshExpiresIn?: number;
};

export type CustomerLoginResponse = {
  customer?: Customer;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_expires_in: number;
  token_type: string;
  id_token: string;
  scope: string;
  session_state: string;
};