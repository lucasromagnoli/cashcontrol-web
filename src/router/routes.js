import homePage from '@/pages/Home';
import categoryPage from '@/pages/Category';
import OriginForm from '@/pages/origins/OriginForm';
import OriginList from '@/pages/origins/OriginList';
import IncomeForm from '@/pages/incomes/IncomeForm';
import IncomeList from '@/pages/incomes/IncomeList';

const routes = [
  {
    path: '/',
    name: 'home',
    component: homePage
  },
  {
    path: '/category',
    name: 'category',
    component: categoryPage
  },
  {
    path: '/origin',
    name: 'originForm',
    component: OriginForm,
  },
  {
    path: '/origin/list',
    name: 'originList',
    component: OriginList,
  },
  {
    path: '/income',
    name: 'incomeForm',
    component: IncomeForm
  },
  {
    path: '/income/list',
    name: 'incomeList',
    component: IncomeList
  }
]

export default routes;