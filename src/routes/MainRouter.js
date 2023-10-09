import RegisterHomePage from "../pages/register-home-page/RegisterHomePage";
import MainLayout from "../shared/components/layout/MainLayout";
import RegisterHost1 from "../pages/register-1/RegisterHost1";
import RegisterHost2 from "../pages/register-2/RegisterHost2";
import RegisterHost3 from "../pages/register-3/RegisterHost3";

const publicRoutes = [
    {
        path: '/',
        component: RegisterHomePage,
        layout: MainLayout,
    },
    {
        path: '/host',
        component: RegisterHomePage,
        layout: MainLayout,
    },
    {
        path: '/host/register-1',
        component: RegisterHost1,
        layout: MainLayout,
    },
    {
        path: '/host/register-2',
        component: RegisterHost2,
        layout: MainLayout,
    },
    {
        path: '/host/register-3',
        component: RegisterHost3,
        layout: MainLayout,
    },
  
];
const privateRoutes = [

];
export { publicRoutes, privateRoutes }