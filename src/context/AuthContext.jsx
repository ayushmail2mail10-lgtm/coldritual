import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from './ToastContext';

const AuthContext = createContext(null);
const USER_STORAGE_KEY = 'coldritual_user_v1';

const DEFAULT_DEMO_USER = {
  name: "Arjun Verma",
  email: "arjun.verma@ritualist.in",
  phone: "+91 98765 43210",
  role: "customer",
  memberSince: "January 2026",
  tier: "RITUAL ARCHIVE // VIP",
  addresses: [
    {
      id: "addr-01",
      name: "Arjun Verma",
      phone: "+91 98765 43210",
      street: "Flat 402, Monolith Heights, 12th Main",
      landmark: "Near Sony World Signal, Koramangala 4th Block",
      city: "Bengaluru",
      state: "Karnataka",
      pincode: "560034",
      isDefault: true,
    }
  ]
};

export function AuthProvider({ children }) {
  const { showToast } = useToast();
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(USER_STORAGE_KEY);
      return saved ? JSON.parse(saved) : DEFAULT_DEMO_USER;
    } catch (e) {
      return DEFAULT_DEMO_USER;
    }
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return Boolean(user && user.email);
  });

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem(USER_STORAGE_KEY);
        setIsAuthenticated(false);
      }
    } catch (e) {
      console.error('Failed to save user', e);
    }
  }, [user]);

  const login = (email, password, remember = true) => {
    if (!email || !password) {
      showToast('PLEASE ENTER EMAIL AND PASSWORD', 'error');
      return { success: false, message: 'Missing fields' };
    }
    
    // Check if logging in as Administrator
    const cleanEmail = email.trim().toLowerCase();
    const isAdminUser = cleanEmail === 'admin@coldritual.in' || cleanEmail === 'admin' || password === 'admin' || cleanEmail.startsWith('admin');

    const loggedUser = {
      name: isAdminUser ? "COLD RITUAL ADMIN" : (email.split('@')[0].toUpperCase()),
      email: cleanEmail,
      phone: "+91 98765 43210",
      role: isAdminUser ? "admin" : "customer",
      memberSince: "October 2026",
      tier: isAdminUser ? "ARCHIVE ADMINISTRATOR" : "RITUAL ARCHIVE",
      addresses: user?.addresses?.length ? user.addresses : DEFAULT_DEMO_USER.addresses,
    };
    setUser(loggedUser);
    showToast(isAdminUser ? 'ADMINISTRATOR AUTHENTICATED' : `WELCOME BACK, ${loggedUser.name}`, 'success');
    return { success: true, isAdmin: isAdminUser };
  };

  const loginAsAdmin = () => {
    return login('admin@coldritual.in', 'coldritual-admin', true);
  };

  const register = ({ name, email, phone, password }) => {
    if (!name || !email || !password) {
      showToast('PLEASE FILL ALL REQUIRED FIELDS', 'error');
      return { success: false, message: 'Missing fields' };
    }
    const newUser = {
      name,
      email,
      phone: phone || "+91 98765 00000",
      memberSince: "October 2026",
      tier: "INITIATE // LEVEL 1",
      addresses: [],
    };
    setUser(newUser);
    showToast('ACCOUNT CREATED. WELCOME TO COLD RITUAL.', 'success');
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    showToast('LOGGED OUT SUCCESSFULLY', 'info');
  };

  const updateProfile = (updatedFields) => {
    setUser(prev => ({ ...prev, ...updatedFields }));
    showToast('PROFILE UPDATED', 'success');
  };

  const addAddress = (address) => {
    const newAddress = {
      ...address,
      id: `addr-${Date.now()}`,
      isDefault: user?.addresses?.length === 0 || address.isDefault,
    };
    setUser(prev => ({
      ...prev,
      addresses: [...(prev?.addresses || []), newAddress]
    }));
    showToast('ADDRESS SAVED', 'success');
  };

  const removeAddress = (addressId) => {
    setUser(prev => ({
      ...prev,
      addresses: (prev?.addresses || []).filter(a => a.id !== addressId)
    }));
    showToast('ADDRESS REMOVED', 'info');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isAdmin: Boolean(user && user.role === 'admin'),
        login,
        loginAsAdmin,
        register,
        logout,
        updateProfile,
        addAddress,
        removeAddress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default AuthContext;
