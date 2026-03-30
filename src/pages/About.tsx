import { Factory, ShieldCheck, Users, Wrench } from 'lucide-react';

export default function About() {
  return (
    <div>
      {/* Header */}
      <div className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">О компании АсГард</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Мы — производственно-инжиниринговая компания. С 2010 года производим зубчатые муфты и поставляем надежное промышленное оборудование для предприятий России и СНГ.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Наше производство</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Основная специализация нашего производства — изготовление зубчатых муфт серий МЗ и МЗП. Мы располагаем собственным парком металлообрабатывающих станков в Ростове-на-Дону.
              </p>
              <p>
                Вся продукция проходит строгий контроль качества (ОТК) и соответствует требованиям ГОСТ 5006-55 и ГОСТ 5006-94. Мы используем только сертифицированный металлопрокат (Сталь 45, 40Х).
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 font-medium text-slate-800">
                <li>Токарная и фрезерная обработка</li>
                <li>Зубофрезерные и зубодолбежные работы</li>
                <li>Термическая обработка (ТВЧ, объемная закалка)</li>
              </ul>
            </div>
          </div>
          <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
            <span className="text-slate-400">[Фото цеха / станков]</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center order-2 md:order-1">
            <span className="text-slate-400">[Фото склада редукторов]</span>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Складской комплекс</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Помимо собственного производства, мы являемся крупным поставщиком приводной техники. На нашем складе постоянно поддерживается запас востребованных позиций.
              </p>
              <p>
                Это позволяет нам отгружать цилиндрические, червячные и крановые редукторы в день оплаты, минимизируя простои оборудования на предприятиях наших заказчиков.
              </p>
            </div>
          </div>
        </div>

        {/* Stats/Facts */}
        <div className="bg-surface border border-slate-200 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">2010</div>
              <div className="text-sm text-slate-600 font-medium uppercase tracking-wide">Год основания</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm text-slate-600 font-medium uppercase tracking-wide">Лет опыта инженеров</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">1000+</div>
              <div className="text-sm text-slate-600 font-medium uppercase tracking-wide">Позиций на складе</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">ГОСТ</div>
              <div className="text-sm text-slate-600 font-medium uppercase tracking-wide">Строгое соответствие</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
