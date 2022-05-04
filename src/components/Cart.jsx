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
          <div className='col-md-8'>
          <Skeleton height={400} />
          </div>
          <div className='col-md-6' style={{lineHeight:2}}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          
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
                        <div className='col-md-4'>
                        <h3>{product.title}</h3>
                        <p className='lead fw-bold'> 
                        {product.qty} X ${product.price} = $
                        {product.qty * product.price}
                        </p>
                        <button className="btn btn-outline-dark me-4"
                        onClick={()=> handleButton(product
                        )}
                        ><i className='fa fa-minus'></i></button>
                        <button className="btn btn-outline-dark me-4"
                        onClick={()=> handleButton(product
                        )}
                        ><i className='fa fa-plus'></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
            </React.Fragment>
      )
  }

  const handleButton = ()=>{

  }

  return (
      <div>
          <div className='container py-5'>
              <div className='row py-5'>
                  {loading ?  <ShowProduct /> : <Loading />}
              </div>
          </div>
      </div>
  )
}



export default Cart;