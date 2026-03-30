import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Factory, PackageSearch, ShieldCheck, Truck } from 'lucide-react';
import { categories } from '../data/mock';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Производство зубчатых муфт и поставка промышленного оборудования
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl">
              Широкий ассортимент редукторов на складе в Ростове-на-Дону. Серийное производство по ГОСТ и изготовление деталей по вашим чертежам.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/catalog" className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded font-semibold text-lg transition-colors text-center flex justify-center items-center">
                Перейти в каталог <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/custom" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded font-semibold text-lg transition-colors text-center">
                Отправить чертеж / ТЗ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-surface border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-10 h-10 text-accent shrink-0" />
              <div>
                <div className="font-bold text-slate-900">С 2010 года</div>
                <div className="text-sm text-slate-500">Надежный партнер</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Factory className="w-10 h-10 text-accent shrink-0" />
              <div>
                <div className="font-bold text-slate-900">Свое производство</div>
                <div className="text-sm text-slate-500">Строго по ГОСТ</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <PackageSearch className="w-10 h-10 text-accent shrink-0" />
              <div>
                <div className="font-bold text-slate-900">Склад в Ростове</div>
                <div className="text-sm text-slate-500">Редукторы в наличии</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Truck className="w-10 h-10 text-accent shrink-0" />
              <div>
                <div className="font-bold text-slate-900">Доставка по РФ</div>
                <div className="text-sm text-slate-500">Любыми ТК</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Каталог оборудования</h2>
              <p className="text-slate-600">Основные направления поставок и производства</p>
            </div>
            <Link to="/catalog" className="hidden md:flex text-accent hover:text-accent-hover font-medium items-center">
              Смотреть все <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link key={category.id} to={`/catalog/${category.id}`} className="group block bg-white border border-slate-200 rounded-lg p-6 hover:border-accent hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors">{category.name}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{category.description}</p>
                <span className="text-accent text-sm font-medium flex items-center">
                  Перейти <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Не нашли нужное оборудование?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Пришлите нам техническое задание, опросный лист или чертеж. Наши инженеры подберут аналог или рассчитают стоимость изготовления за 2 часа.
          </p>
          <Link to="/custom" className="inline-flex items-center bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded font-semibold text-lg transition-colors">
            Прикрепить ТЗ и получить расчет
          </Link>
        </div>
      </section>
    </div>
  );
}
