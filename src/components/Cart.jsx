import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux';
import { addCart } from '../redux/action';
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux'

const Cart = () => {

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);


  const dispatch= useDispatch();
  const addProduct = (product) =>{
      dispatch(addCart(product));
  }

  useEffect(() => {
      const getProduct = async () => {
          setLoading(true);
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          setProduct(await response.json());
          setLoading(false);
      }
      getProduct();
  }, [])

  const Loading = () => {
      return (
          <React.Fragment>
              <div className='col-md-6'>
              ...
              </div>
          </React.Fragment>
      )
  }

  const ShowProduct = () => {
      return (
          <React.Fragment>
                  <div className='container' style={{backgroundColor:"grey"}}>
                    <div>
                      <div className='row'>
                        <div className='col-md-4'>
                          <img src={product.image} alt={product.title} height="200px" width="180px" />
                        </div>
                      </div>
                    </div>
                  </div>
                
  
          </React.Fragment>
      )
  }

  return (
      <div>
          <div className='container py-5'>
              <div className='row py-5'>
                  {loading ? <Loading /> : <ShowProduct />}
              </div>
          </div>
      </div>
  )
}



export default Cart;