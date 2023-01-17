import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import Create from './screens/Create/Create';
import ProductDisplay from './screens/ProductDisplay/ProductDisplay';
import Modify from './screens/Modify/Modify';

function App () {
  return(
    <>
          <Header />
          <main> 
            <Routes>
              <Route path='/'element= {<LandingPage/>} exact/>
              <Route path='/create'element= {<Create/>} />
              <Route path='/products/id'element= {<ProductDisplay/>} />
              <Route path='/edit/id'element= {<Modify/>} />
            </Routes>
          </main>
      <Footer />
    </>
  )
}
export default App;