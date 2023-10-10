import {Col, Row, Carousel} from 'react-bootstrap'
import blogData from '../Data/Blog.json'
import { CarouselItem } from '../Components/CarouselItem'
import { CardsTiles } from '../Components/Cards'

export function Home() {
  
  return (
    <>
    <h1 className='text-center fw-bold p-3 my-5'>Trending</h1>
      <Carousel variant='dark' className='pb-5 h-100' >
        {blogData.map(blog => (
          <Carousel.Item>
          <CarouselItem {...blog}/>
          </Carousel.Item>
       
      ))}
      </Carousel>

      <Row md={2} lg={3} xs={1} className='mt-5'>
        {blogData.map(blog => (
          <Col>
          <CardsTiles{...blog}/>
          </Col>
        ))}
      </Row>
    </>
  )
}

