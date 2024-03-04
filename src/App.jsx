import Header from './components/Header';
import ProductList from './components/ProductList';
import MainLayout from './components/layouts/MainLayout'
const App = () => {
  return (
  <MainLayout>
      <Header/> 
      <ProductList/>   
  </MainLayout>
    
  )
}

export default App;
