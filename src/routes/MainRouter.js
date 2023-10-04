import RegisterHomePage from "../pages/register-home-page/RegisterHomePage";
import MainLayout from "../shared/components/layout/MainLayout";
import RegisterHost1 from "../pages/register-1/RegisterHost1";

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
  
];
const privateRoutes = [

];
export { publicRoutes, privateRoutes }