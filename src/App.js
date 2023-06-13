import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Layout from './routes/Layout';
import './app.css';
import Books from './routes/Books';
import Categories from './routes/Categories';
import store from './redux/store';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Route>,
  ),
);
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
