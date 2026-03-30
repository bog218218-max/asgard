import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export default function Contacts() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-12">Контакты</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-accent" /> Офис и склад
            </h3>
            <p className="text-slate-600">
              г. Ростов-на-Дону,<br />
              ул. Промышленная, 10
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
              <Phone className="w-5 h-5 mr-2 text-accent" /> Телефоны
            </h3>
            <div className="space-y-2">
              <a href="tel:+78000000000" className="block text-slate-600 hover:text-accent font-mono text-lg">8 (800) 000-00-00</a>
              <a href="tel:+78630000000" className="block text-slate-600 hover:text-accent font-mono">8 (863) 000-00-00</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
              <Mail className="w-5 h-5 mr-2 text-accent" /> Электронная почта
            </h3>
            <div className="space-y-2">
              <a href="mailto:info@as-gard.ru" className="block text-slate-600 hover:text-accent font-mono">info@as-gard.ru</a>
              <p className="text-sm text-slate-500">Для заявок, чертежей и ТЗ</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-accent" /> Режим работы
            </h3>
            <p className="text-slate-600">
              Пн-Пт: 09:00 – 18:00<br />
              Сб-Вс: Выходной
            </p>
          </div>

          <div className="pt-8 border-t border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">Реквизиты</h3>
            <div className="text-sm text-slate-500 font-mono space-y-1">
              <p>ООО «АсГард»</p>
              <p>ИНН: 6100000000</p>
              <p>ОГРН: 1106100000000</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-surface border border-slate-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Написать нам</h2>
            <p className="text-slate-600 mb-8">
              Отправьте запрос, и наш инженер свяжется с вами в течение 30 минут в рабочее время.
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
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-accent focus:border-accent" placeholder="Для отправки КП" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Сообщение или перечень номенклатуры</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-accent focus:border-accent" placeholder="Укажите маркировки, количество или опишите задачу..."></textarea>
              </div>

              <div className="border-2 border-dashed border-slate-300 rounded-md p-6 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                <p className="text-sm text-slate-600 font-medium">Нажмите, чтобы прикрепить файл (ТЗ, чертеж, реквизиты)</p>
                <p className="text-xs text-slate-400 mt-1">PDF, DOC, XLS, DWG до 20 МБ</p>
              </div>

              <button type="submit" className="w-full bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-md font-semibold transition-colors">
                Отправить запрос
              </button>
              
              <p className="text-xs text-slate-500 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
