import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Eye, EyeOff, Lock, Mail, ArrowLeft } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { generatePageSEO } from '../lib/seo';

export default function AdminLogin() {
  const { t } = useTranslation('common');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const seo = generatePageSEO({
    title: 'Admin Login',
    description: 'Panel de administración - Acceso para administradores de Almare'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Aquí iría la lógica de autenticación
    console.log('Login attempt:', formData);
    
    // Simular delay de autenticación
    setTimeout(() => {
      setIsLoading(false);
      // Redirigir al dashboard o mostrar error
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SEOHead seo={seo} />
      
      <div className="min-h-screen bg-gray-50 flex">
        {/* Left Side - Image */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 relative">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('public/banner.jpeg')`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-blue-800/80"></div>
          </div>
          
          {/* Content overlay */}
          <div className="relative z-10 flex flex-col justify-center items-center text-white p-12">
            <img 
              src="/logo-almare.jpg" 
              alt="Almare Logo" 
              className="h-16 w-auto mb-8"
            />
            <h1 className="text-4xl font-bold mb-4 text-center">
              Panel de Administración
            </h1>
            <p className="text-xl text-blue-100 text-center max-w-md">
              Gestiona y administra la plataforma de Almare de forma segura
            </p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden flex justify-center mb-8">
              <img 
                src="/logo-almare.jpg" 
                alt="Almare Logo" 
                className="h-12 w-auto"
              />
            </div>

            {/* Back to home link */}
            <Link
              to="/"
              className="flex items-center text-sm text-gray-600 hover:text-blue-600 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Link>

            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Iniciar Sesión
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Accede al panel de administración
              </p>
            </div>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-6 shadow-lg rounded-lg border border-gray-200">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Correo electrónico
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="admin@almare.org"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Contraseña
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember me & Forgot password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Recordarme
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Iniciando sesión...
                      </div>
                    ) : (
                      'Iniciar Sesión'
                    )}
                  </button>
                </div>
              </form>

              {/* Additional Info */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  Solo para administradores autorizados de Almare
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
