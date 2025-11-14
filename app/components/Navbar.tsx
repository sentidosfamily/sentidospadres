'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Menu, X, Plus, Calendar, LogOut, Facebook, Instagram, Twitter, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

// ============ CONTEXT ============
interface User {
    id: string;
    name: string;
    avatar: string;
    rol: 'admin' | 'user' | 'moderator';
}

interface UserContextType {
    user: User | null;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const login = async (email: string, password: string): Promise<void> => {
        setIsLoading(true);
        setTimeout(() => {
            setUser({
                id: '1',
                name: 'María García',
                avatar: 'https://i.pravatar.cc/150?img=5',
                rol: 'user'
            });
            setIsLoading(false);
        }, 1000);
    };

    const logout = (): void => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, isLoading, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) throw new Error('useUser debe usarse dentro de UserProvider');
    return context;
};

// ============ NAVBAR ============
interface NavbarProps {
    user: User | null;
    onLogout: () => void;
    onOpenModal: (type: 'post' | 'event') => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout, onOpenModal }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-2">

                        <Link href="/">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                                <img
                                    src="/assets/Sentidoslogo.png"
                                    alt="Logo Sentidos"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </Link>

                        <span className="text-2xl font-bold text-gray-800">Sentidos</span>
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                        <a href="#conocenos" className="text-gray-700 hover:text-orange-500 transition-colors font-medium border-b-2 border-orange-500 pb-1">
                            Conocenos
                        </a>
                        <a href="#asociate" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                            Asociate
                        </a>
                        <a href="#eventos" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                            Eventos
                        </a>
                    </div>

                    <div className="hidden md:flex items-center gap-3">
                        {user ? (
                            <>
                                <button
                                    onClick={() => onOpenModal('post')}
                                    className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                                >
                                    <Plus size={18} />
                                    <span>Crear Post</span>
                                </button>
                                <button
                                    onClick={() => onOpenModal('event')}
                                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                                >
                                    <Calendar size={18} />
                                    <span>Crear Evento</span>
                                </button>
                                <div className="relative">
                                    <button
                                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                        className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
                                    >
                                        <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                                    </button>
                                    {isUserMenuOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-200">
                                            <div className="px-4 py-2 border-b border-gray-200">
                                                <p className="font-semibold text-gray-800">{user.name}</p>
                                                <p className="text-sm text-gray-500 capitalize">{user.rol}</p>
                                            </div>
                                            <button
                                                onClick={onLogout}
                                                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-red-600 w-full text-left"
                                            >
                                                <LogOut size={16} />
                                                <span>Cerrar Sesión</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <Link href="/login">
                                {/* <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium">
                                    Iniciar Sesión
                                </button> */}
                            </Link>
                        )}
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col gap-3">
                            <a href="#asociate" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Asociate</a>
                            <a href="#conocenos" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Conocenos</a>
                            <a href="#eventos" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Eventos</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
