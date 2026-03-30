import { useParams, Link } from 'react-router-dom';
import { categories, products } from '../data/mock';
import { ChevronRight, FileText, Info, Truck, ShieldCheck } from 'lucide-react';

export default function Product() {
  const { categoryId, productId } = useParams();
  const category = categories.find(c => c.id === categoryId);
  const product = products.find(p => p.id === productId);

  if (!category || !product) {
    return <div className="p-12 text-center">Товар не найден</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="flex text-sm text-slate-500 mb-8">
        <Link to="/" className="hover:text-slate-900">Главная</Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <Link to="/catalog" className="hover:text-slate-900">Каталог</Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <Link to={`/catalog/${category.id}`} className="hover:text-slate-900">{category.name}</Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-slate-900 font-medium truncate max-w-[200px] sm:max-w-none">{product.sku}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Image/Gallery Placeholder */}
        <div>
          <div className="aspect-square bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center mb-4">
            <div className="text-center text-slate-400">
              <FileText className="w-16 h-16 mx-auto mb-2 opacity-50" />
              <p>Фото / Чертеж {product.sku}</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-square bg-slate-50 border border-slate-200 rounded cursor-pointer hover:border-accent transition-colors"></div>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div>
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-sm font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">Арт: {product.sku}</span>
              {product.status === 'in_stock' && <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full">В наличии на складе</span>}
              {product.status === 'on_order' && <span className="text-xs font-medium bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Под заказ</span>}
              {product.status === 'custom' && <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Изготовление по ТЗ</span>}
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">{product.name}</h1>
            <p className="text-slate-600 leading-relaxed">{product.description}</p>
          </div>

          {/* CTA Block */}
          <div className="bg-surface border border-slate-200 rounded-lg p-6 mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded font-semibold transition-colors text-center">
                Запросить цену и сроки
              </button>
              <button className="flex-1 bg-white border border-slate-300 hover:border-slate-400 text-slate-700 px-6 py-3 rounded font-semibold transition-colors text-center">
                Задать вопрос инженеру
              </button>
            </div>
            <div className="mt-4 flex items-center justify-center gap-6 text-sm text-slate-500">
              <span className="flex items-center"><Truck className="w-4 h-4 mr-1.5" /> Доставка по РФ</span>
              <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-1.5" /> Гарантия 12 мес</span>
            </div>
          </div>

          {/* Specs Table */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
              <Info className="w-5 h-5 mr-2 text-accent" /> Технические характеристики
            </h3>
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <tbody className="divide-y divide-slate-200">
                  {Object.entries(product.specs).map(([key, value], idx) => (
                    <tr key={key} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-4 py-3 font-medium text-slate-600 w-1/2">{key}</td>
                      <td className="px-4 py-3 font-mono text-slate-900 w-1/2">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
