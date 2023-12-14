import { Carousel } from 'bootstrap'
import React from 'react'

const Slider = () => {
  return (
    <div><div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src="https://manoharmobiles.com/wp-content/uploads/2022/02/b0c45987b5.png" alt="First slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="https://pbs.twimg.com/media/DYJTEc2WsAAXWrf.jpg" alt="Second slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="https://pbs.twimg.com/media/CFQYAbeVAAAo62w.png" alt="Third slide"/>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div></div>
//<Carousel.Item>//
   // <img/>/
     // className="d-block w-100"//
      //src="https://www.gloo.com.my/image/cache/catalog/Images/Brand%20Store/MI/202211/Web%20Banner_Xiaomi%2012T%20series%201090X450%20-1090x450.jpg"//
     // alt="First slide"
    ///
   // <Carousel.Caption>//
      //<h3>First slide label</h3>//
     // <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>//
  //  </Carousel.Caption>//
 // </Carousel.Item>//
    
  )
}

export default Slider