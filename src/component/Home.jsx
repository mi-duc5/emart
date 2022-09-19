import React from 'react'
import Products from './Products'

function Home() {
  return (
    <div>
        <div className="hero">
        <div className="card bg-dark text-white border-0">
            <img src="https://drscdn.500px.org/photo/1054182471/q%3D80_m%3D2000/v2?sig=53cb77db209d433d6d3fa2d0cd640f0169475454974b0711a0ed4a6bf31d8e57" className="card-img" alt="background" height="600px" />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
              <div className="container">
                <h5 className="card-title display-3 fw-border mb-0">NEW SEASON ARRIVALS</h5>
                <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
              </div>
            </div>
        </div>
        </div>
        <Products/>
    </div>
  )
}

export default Home