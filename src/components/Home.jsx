import React from 'react'
import Product from './Products'

const Home = () => {
    return (
        <div className='hero'>
            <div class="card bg-dark text-white border -0">
                <img src="/assets/bg.jpeg" class="card-img" alt="background" height="550px"></img>
                    <div class="card-img-overlay d-flex  flex-column">
                    <div className='container'>
                        <h5 class="card-title display-3 fw-bolder mb-0"> NEW ARRIVAL SEASON</h5>
                        <p class="card-text lead fs-2">CHECK OUT ALL THE NEW TRENDS</p>
                        </div>
                    </div>
            </div>
            <Product />
        </div>
    )
}

export default Home