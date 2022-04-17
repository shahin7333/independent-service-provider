import React from 'react'
import './Banner.css'
import { Carousel } from 'react-bootstrap'
import banner1 from '../../../img/slide/slide-3.png'
import banner2 from '../../../img/slide/slide-2.png'
import banner3 from '../../../img/slide/slide-1.png'

const Banner = () => {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h1 className="page-name text-white">THE MEMORY MAKER</h1>
            <p className='text-white'>
              Yesterday is but today's memory, and tomorrow is today's dream
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
          <Carousel.Caption>
            <h1 className="page-name text-white">THE MEMORY MAKER</h1>
            <p className='text-white'>
              Yesterday is but today's memory, and tomorrow is today's dream
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />
          <Carousel.Caption>
            <h1 className="page-name text-white">THE MEMORY MAKER</h1>
            <p className='text-white'>
              Yesterday is but today's memory, and tomorrow is today's dream
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Banner
