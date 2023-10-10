import {Col, Row, Carousel} from 'react-bootstrap'
import blogData from '../Data/Blog.json'
import { CarouselItem } from '../Components/CarouselItem'

export function Home() {
  
  return (
    <>
    <h1 className='text-center fw-bold p-3'>Trending</h1>
      <Carousel variant='dark' className='pb-5'>
        {blogData.map(blog => (
          <Carousel.Item>
          <CarouselItem {...blog}/>
          </Carousel.Item>
       
      ))}
      </Carousel>
    </>
  )
}

