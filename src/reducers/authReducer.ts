export interface AuthState {
  isLoggedIn: boolean;
  username: string;
}

export type AuthAction =
  | { type: 'LOGIN'; payload: { token: string; account: any; user: any } }
  | { type: 'LOGOUT' };

export const initialAuthState: AuthState = {
  isLoggedIn: false,
  username: '',
};

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN': {
      const { token, account, user } = action.payload;
      localStorage.setItem('token', token);
      localStorage.setItem('account', JSON.stringify(account));
      localStorage.setItem('user', JSON.stringify(user));

      console.log('Account:', account);
      console.log('User:', user);
      console.log('Token:', token);

      return {
        isLoggedIn: true,
        username: account.username,
      };
    }
    case 'LOGOUT': {
      localStorage.removeItem('token');
      localStorage.removeItem('account');
      localStorage.removeItem('user');

      return {
        isLoggedIn: false,
        username: '',
      };
    }
    default:
      return state;
  }
};