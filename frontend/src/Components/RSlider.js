import React from 'react';
import  Carousel from 'react-bootstrap/Carousel';

const RSlider = () => {
  return (
    <>
      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.RZHbT37DNC4oQkFAjPb4UwHaEm?w=283&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="Swimming"
          id="img"
          src="https://iis.stkabirschool.com/wp-content/uploads/2019/10/Khel-Mahakumbh-5.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.8pKWzQ4J1QVJtHxeRG9u5wHaEK?pid=ImgDet&rs=1"
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default RSlider
