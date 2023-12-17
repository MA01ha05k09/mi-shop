import React from 'react'

function Bootomslider() {
  return (
    <>
      {/* Slider */}
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        {/* Slider-imag */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://cdn.shopify.com/app-store/listing_images/50bb43331da42651a316f787225367a6/mobile_screenshot/CNikocylqYADEAE=.png?height=720&width=1280" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://cdn.shopify.com/app-store/listing_images/50bb43331da42651a316f787225367a6/desktop_screenshot/CNTj-8ulqYADEAE=.png?height=720&width=1280" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://pbs.twimg.com/media/Eug2E1qWQAIIcSo.jpg" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  )
}

export default Bootomslider