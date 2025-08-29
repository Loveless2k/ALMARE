import React from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Heart, Globe, Menu, X, LogIn, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function MainLayout() {
  const { t, i18n } = useTranslation('common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { href: '/', label: t('navigation.home') },
    { href: '/about', label: t('navigation.about') },
    { href: '/services', label: t('navigation.services') },
    { href: '/transparency', label: t('navigation.transparency') },
    { href: '/donations', label: t('navigation.donations') },
    { href: '/blog', label: t('navigation.blog') },
    { href: '/contact', label: t('navigation.contact') },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-normal items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/logo-almare.jpg"
                alt="Almare Logo"
                className="h-8"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={` px-3 text-md font-medium transition-colors hover:text-blue-600 ${
                    isActive(item.href)
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4 px-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900"
              >
                <Globe className="h-4 w-4" />
                <span>{i18n.language.toUpperCase()}</span>
              </button>
              <Link
                to="/admin/login"
                className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors"
              >
                <LogIn className="h-4 w-4" />
                <span>Admin</span>
              </Link>
              <Link
                to="/donations"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                {t('buttons.donate')}
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium rounded-md ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <div className="flex items-center justify-between">
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900"
                  >
                    <Globe className="h-4 w-4" />
                    <span>{i18n.language.toUpperCase()}</span>
                  </button>
                  <Link
                    to="/admin/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors"
                  >
                    <LogIn className="h-4 w-4" />
                    <span>Admin</span>
                  </Link>
                </div>
                <Link
                  to="/donations"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  {t('buttons.donate')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Mission */}
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <img
                  src="/logo-almare.jpg"
                  alt="Almare Logo"
                  className="h-8 w-auto"
                />
              </Link>
              <p className="text-gray-300 mb-4">{t('footer.mission')}</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <div className="space-y-2">
                {navigation.slice(0, 4).map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('footer.contact.title')}</h3>
              <div className="space-y-2 text-gray-300">
                <p>{t('footer.contact.email')}</p>
                <p>{t('footer.contact.phone')}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/34123456789?text=Hola,%20me%20gustaría%20obtener%20más%20información%20sobre%20Almare"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Contáctanos por WhatsApp
        </span>
      </a>

    </div>
  );
}