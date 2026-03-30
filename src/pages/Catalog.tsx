import { Link } from 'react-router-dom';
import { categories } from '../data/mock';
import { ChevronRight } from 'lucide-react';

export default function Catalog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="flex text-sm text-slate-500 mb-8">
        <Link to="/" className="hover:text-slate-900">Главная</Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-slate-900 font-medium">Каталог</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Каталог промышленного оборудования</h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          Выберите интересующий вас раздел. Мы поставляем оборудование со склада в Ростове-на-Дону и производим детали по индивидуальным чертежам.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            to={`/catalog/${category.id}`} 
            className="group flex flex-col bg-white border border-slate-200 rounded-lg p-6 hover:border-accent hover:shadow-md transition-all"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors">
              {category.name}
            </h2>
            <p className="text-slate-600 text-sm mb-6 flex-grow">
              {category.description}
            </p>
            <div className="mt-auto flex items-center text-accent text-sm font-medium">
              Смотреть товары <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
