import React from 'react';
import  Carousel from 'react-bootstrap/Carousel';

const RSlider = () => {
  return (
    <>
      <Carousel style={{ width:'85%', zIndex:-10}}>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 first"
          style={{height:"90vh"}}
          src="https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 first"
          style={{height:"90vh"}}
          id="img"
          src="https://images.pexels.com/photos/6203574/pexels-photo-6203574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 "
          style={{height:"90vh"}}
          src="https://images.pexels.com/photos/8688143/pexels-photo-8688143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
