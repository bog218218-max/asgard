import { Link } from 'react-router-dom';
import { ChevronRight, FileText, Settings, PenTool, CheckCircle2 } from 'lucide-react';

export default function Custom() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="flex text-sm text-slate-500 mb-8">
        <Link to="/" className="hover:text-slate-900">Главная</Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-slate-900 font-medium">Изготовление по чертежам</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Изготовление промышленных деталей по чертежам и образцам</h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Мы принимаем заказы на серийное и мелкосерийное производство деталей любой сложности. Наш парк оборудования позволяет выполнять полный цикл металлообработки.
          </p>
          
          <div className="space-y-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-100 text-accent">
                  <Settings className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-slate-900">Токарно-фрезерные работы</h3>
                <p className="mt-2 text-slate-600">Обработка на станках с ЧПУ. Высокая точность и повторяемость деталей.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-100 text-accent">
                  <PenTool className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-slate-900">Зуборезные работы</h3>
                <p className="mt-2 text-slate-600">Нарезка прямозубых, косозубых и конических шестерен, зубчатых венцов.</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-100 text-accent">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-slate-900">Термообработка и ОТК</h3>
                <p className="mt-2 text-slate-600">Объемная закалка, ТВЧ, цементация. 100% контроль качества готовой продукции.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Form */}
        <div className="bg-surface border border-slate-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Отправить чертеж на расчет</h2>
          <p className="text-slate-600 mb-8">
            Прикрепите чертеж, эскиз или ТЗ. Инженер-технолог рассчитает стоимость и сроки изготовления в течение 2 часов.
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Имя / Организация *</label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-accent focus:border-accent" placeholder="Иван Иванов, ООО 'Завод'" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Телефон *</label>
                <input type="tel" id="phone" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-accent focus:border-accent" placeholder="+7 (___) ___-__-__" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-accent focus:border-accent" placeholder="Для отправки расчета" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Комментарий (материал, тираж)</label>
              <textarea id="message" rows={3} className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-accent focus:border-accent" placeholder="Укажите требуемый материал, количество деталей, сроки..."></textarea>
            </div>

            <div className="border-2 border-dashed border-slate-300 rounded-md p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer bg-white">
              <FileText className="mx-auto h-10 w-10 text-slate-400 mb-3" />
              <p className="text-sm text-slate-600 font-medium">Перетащите файлы сюда или нажмите для выбора</p>
              <p className="text-xs text-slate-400 mt-1">Поддерживаемые форматы: PDF, DWG, DXF, DOC, XLS, JPG, PNG. Макс. размер: 20 МБ.</p>
            </div>

            <button type="submit" className="w-full bg-accent hover:bg-accent-hover text-white px-6 py-4 rounded-md font-semibold text-lg transition-colors">
              Получить расчет стоимости
            </button>
            
            <p className="text-xs text-slate-500 text-center">
              Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
