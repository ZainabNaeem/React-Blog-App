import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

type CarouselItemProps={
  id: number,
  src: string,
  title: string,
  intro: string,
  content: string
}

export function  CarouselItem({id, src, title, intro, content}:CarouselItemProps ){
  return(
    
        <Card className='border border-0' >
    <Card.Body className='d-flex'>
      <Card.Img src={src} height='350px' width='500px' variant='left' style={{objectFit:'cover'}} className='rounded'/>
      <div className='d-block p-3 me-auto' >
        <Card.Title className='fw-bold fs-2 p-2' >{title}</Card.Title>
        <Card.Text className='text-muted fs-6'>{intro}</Card.Text>
        <div className='d-flex'>
          <img src='/profile.webp'/>
          <div >
            <p className='fw-bold lh-1'>Blogger123</p>
          <p >CEO and Founder</p>
          </div>
        </div>
        </div>
    </Card.Body>
  </Card>
    
  
  )
}