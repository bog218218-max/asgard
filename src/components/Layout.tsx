import { Link, Outlet } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900">
      {/* Top Bar - Contacts */}
      <div className="bg-slate-900 text-slate-300 py-2 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-accent" /> г. Ростов-на-Дону, ул. Промышленная, 10</span>
            <a href="mailto:info@as-gard.ru" className="flex items-center hover:text-white transition-colors"><Mail className="w-4 h-4 mr-2 text-accent" /> info@as-gard.ru</a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xs text-slate-400">Отвечаем за 30 минут</span>
            <a href="tel:+78000000000" className="flex items-center font-mono font-bold text-white hover:text-accent transition-colors">
              <Phone className="w-4 h-4 mr-2 text-accent" />
              8 (800) 000-00-00
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Sticky */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-3xl tracking-tighter text-slate-900 uppercase">Ас<span className="text-accent">Гард</span></span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/catalog" className="text-slate-700 hover:text-accent font-medium transition-colors">Каталог</Link>
              <Link to="/custom" className="text-slate-700 hover:text-accent font-medium transition-colors">Изготовление по чертежам</Link>
              <Link to="/about" className="text-slate-700 hover:text-accent font-medium transition-colors">О компании</Link>
              <Link to="/contacts" className="text-slate-700 hover:text-accent font-medium transition-colors">Контакты</Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <Link to="/contacts" className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded font-medium transition-colors flex items-center">
                Оставить заявку
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-slate-900">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/catalog" className="block px-3 py-2 text-base font-medium text-slate-900 hover:bg-slate-50" onClick={() => setIsMenuOpen(false)}>Каталог</Link>
              <Link to="/custom" className="block px-3 py-2 text-base font-medium text-slate-900 hover:bg-slate-50" onClick={() => setIsMenuOpen(false)}>Изготовление по чертежам</Link>
              <Link to="/about" className="block px-3 py-2 text-base font-medium text-slate-900 hover:bg-slate-50" onClick={() => setIsMenuOpen(false)}>О компании</Link>
              <Link to="/contacts" className="block px-3 py-2 text-base font-medium text-slate-900 hover:bg-slate-50" onClick={() => setIsMenuOpen(false)}>Контакты</Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="font-bold text-2xl tracking-tighter text-white uppercase mb-4 block">Ас<span className="text-accent">Гард</span></span>
            <p className="text-sm text-slate-400 mb-4">
              Производство зубчатых муфт и надежный поставщик промышленного оборудования с 2010 года.
            </p>
            <div className="text-xs text-slate-500 font-mono">
              ИНН: 6100000000<br/>
              ОГРН: 1106100000000
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Каталог</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/catalog/mufty" className="hover:text-accent transition-colors">Муфты зубчатые</Link></li>
              <li><Link to="/catalog/reduktory" className="hover:text-accent transition-colors">Редукторы</Link></li>
              <li><Link to="/catalog/konveyery" className="hover:text-accent transition-colors">Конвейерное оборудование</Link></li>
              <li><Link to="/catalog/gidravlika" className="hover:text-accent transition-colors">Гидравлика</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Информация</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-accent transition-colors">О компании</Link></li>
              <li><Link to="/custom" className="hover:text-accent transition-colors">Изготовление по чертежам</Link></li>
              <li><Link to="/contacts" className="hover:text-accent transition-colors">Доставка и оплата</Link></li>
              <li><Link to="/contacts" className="hover:text-accent transition-colors">Контакты</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-slate-500 shrink-0" />
                <span>г. Ростов-на-Дону,<br/>ул. Промышленная, 10</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-slate-500 shrink-0" />
                <a href="tel:+78000000000" className="hover:text-white font-mono">8 (800) 000-00-00</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-slate-500 shrink-0" />
                <a href="mailto:info@as-gard.ru" className="hover:text-white font-mono">info@as-gard.ru</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>© 2010-{new Date().getFullYear()} ООО «АсГард». Все права защищены.</p>
          <p className="mt-2 md:mt-0">Промышленное оборудование и комплектующие</p>
        </div>
      </footer>
    </div>
  );
}
