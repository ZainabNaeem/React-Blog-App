import { Col, Row, Carousel } from 'react-bootstrap'
import blogData from '../Data/Blog.json'
import { CarouselItem } from '../Components/CarouselItem'
import { CardsTiles } from '../Components/Cards'
import { useEffect, useState } from 'react'

export function Home() {
  const [blogs, setBlogs] = useState<any[]>([])

  useEffect(() => {
    fetch('http://localhost:3031/Blogs')
      .then((respone) => respone)
      .then((e) => e.json())
      .then((e) => setBlogs(e))
  }, [])

  return (
    <>
      <h1 className="text-center fw-bold p-3 my-5">Trending</h1>
      <Carousel variant="dark" className="pb-5 h-100">
        {blogs.map((blog) => (
          <Carousel.Item key={blog.id}>
            <CarouselItem {...blog} />
          </Carousel.Item>
        ))}
      </Carousel>

      <Row md={2} lg={3} xs={1} className="mt-5">
        {blogs.map((blog) => (
          <Col key={blog.id}>
            <CardsTiles {...blog} />
          </Col>
        ))}
      </Row>
    </>
  )
}
