import { createContext, useContext, useState } from 'react';

interface AuthContextProps {
  isLoggedIn: boolean;
  username: string;
  login: (token: string, account: any, user: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const login = (token: string, account: any, user: any) => {
    localStorage.setItem('token', token);
    localStorage.setItem('account', JSON.stringify(account));
    localStorage.setItem('user', JSON.stringify(user));

    // Print the values to the browser console for debugging
    console.log('Account:', account);
    console.log('User:', user);
    console.log('Token:', token);

    setIsLoggedIn(true);
    setUsername(account.username);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('account');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};