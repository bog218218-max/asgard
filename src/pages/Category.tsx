import { useParams, Link } from 'react-router-dom';
import { categories, products } from '../data/mock';
import { ChevronRight, Filter, Search } from 'lucide-react';

export default function Category() {
  const { categoryId } = useParams();
  const category = categories.find(c => c.id === categoryId);
  const categoryProducts = products.filter(p => p.categoryId === categoryId);

  if (!category) {
    return <div className="p-12 text-center">Категория не найдена</div>;
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'in_stock':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">В наличии</span>;
      case 'on_order':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Под заказ</span>;
      case 'custom':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Изготовим</span>;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="flex text-sm text-slate-500 mb-8">
        <Link to="/" className="hover:text-slate-900">Главная</Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <Link to="/catalog" className="hover:text-slate-900">Каталог</Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-slate-900 font-medium">{category.name}</span>
      </nav>

      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{category.name}</h1>
          <p className="text-slate-600 max-w-3xl">{category.description}</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md leading-5 bg-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent sm:text-sm"
              placeholder="Поиск по артикулу..."
            />
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-slate-300 rounded-md shadow-sm text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 focus:outline-none">
            <Filter className="h-4 w-4 mr-2" />
            Фильтры
          </button>
        </div>
      </div>

      {/* Table View for B2B */}
      <div className="bg-white shadow-sm border border-slate-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Маркировка / Артикул
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Наименование
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Характеристики
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Наличие
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Действие
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {categoryProducts.map((product) => (
                <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`/catalog/${categoryId}/${product.id}`} className="font-mono text-sm font-bold text-accent hover:underline">
                      {product.sku}
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-slate-900 font-medium">{product.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-xs text-slate-500 space-y-1">
                      {Object.entries(product.specs).slice(0, 2).map(([key, value]) => (
                        <div key={key}><span className="text-slate-400">{key}:</span> {value}</div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(product.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link to={`/catalog/${categoryId}/${product.id}`} className="text-slate-600 hover:text-accent border border-slate-300 hover:border-accent px-3 py-1.5 rounded transition-colors">
                      Подробнее
                    </Link>
                  </td>
                </tr>
              ))}
              {categoryProducts.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                    В данной категории пока нет товаров.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
