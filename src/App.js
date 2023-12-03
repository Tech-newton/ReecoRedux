import './App.css';
import {useEffect} from "react"
import { fetchProducts } from './APIsFunc/fetchProducts';
import {useDispatch} from "react-redux";
import { updateProductsArray } from './Redux/Features/ProductOperation/ProductSlice';
import MainPage from './Pages/MainPage/MainPage';
import Header from './Components/Header/Header';
import MainBody from './Components/MainBody/MainBody';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async()=>{
      try{
        const products = await fetchProducts();
        dispatch(updateProductsArray(products));
      }
      catch(error){
        console.error('Error while fetching products:', error.message);
      }
    }

    fetchData();
  },[])

  return (
    <div className="App">
      <MainPage/>
      <Header />
      <MainBody />
    </div>
  );
}

export default App;
