'use client'

import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';

const LoginComponent = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (isLogin) {
            console.log('Login:', { email: formData.email, password: formData.password });
        } else {
            console.log('Register:', formData);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 flex items-center justify-center px-4 py-12 min-h-[calc(100vh-theme(spacing.32))]">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
                    {/* Logo/Title */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            Sentidos
                        </h1>
                        <p className="text-gray-600">
                            {isLogin ? 'Bienvenido de vuelta' : 'Crea tu cuenta'}
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-2 mb-8 bg-gray-100 p-1 rounded-xl">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 py-2.5 rounded-lg font-semibold transition-all ${isLogin
                                    ? 'bg-white text-orange-600 shadow-md'
                                    : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Ingresar
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 py-2.5 rounded-lg font-semibold transition-all ${!isLogin
                                    ? 'bg-white text-orange-600 shadow-md'
                                    : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Registrarse
                        </button>
                    </div>

                    {/* Form */}
                    <div className="space-y-5">
                        {/* Name Field - Only for Register */}
                        {!isLogin && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Nombre completo
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Tu nombre"
                                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Correo electrónico
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="tu@email.com"
                                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Contraseña
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password - Only for Register */}
                        {!isLogin && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Confirmar contraseña
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Forgot Password - Only for Login */}
                        {isLogin && (
                            <div className="text-right">
                                <button
                                    type="button"
                                    className="text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors"
                                >
                                    ¿Olvidaste tu contraseña?
                                </button>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            onClick={handleSubmit}
                            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-[1.02] shadow-lg"
                        >
                            {isLogin ? 'Ingresar' : 'Crear cuenta'}
                        </button>
                    </div>

                    {/* Social Login Divider */}
                    <div className="mt-8 mb-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Text */}
                <p className="text-center text-white text-sm mt-6">
                    {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}{' '}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="font-semibold underline hover:text-orange-100 transition-colors"
                    >
                        {isLogin ? 'Regístrate aquí' : 'Inicia sesión'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default LoginComponent;