
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Head from './componets/Head';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
  return (
    <div className='App'>
      <Provider store={store}>
      <BrowserRouter>
      <Head />
        <Routes>
          <Route path='/' element={<Home />} exact>
          </Route>
          <Route path='/cart' element={<Cart />} exact>

          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
      

    </div>


  );
}

export default App;
