
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes/MainRouter';
import initStore from './redux/store';
import "./Common.scss";
const store = initStore()

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Routes>
            {
              publicRoutes.map((route, index) => {
                const Page = route.component;
                const Layout = route.layout;
                return <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              })
            }
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
