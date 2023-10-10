import Card from 'react-bootstrap/Card';

type CardsTilesProps={
  id: number,
  src: string,
  title: string,
  intro: string,
  content: string
}

export function  CardsTiles({id, src, title, intro, content}:CardsTilesProps ){
  return(
    <Card className='mt-3 border border-0'>
      <Card.Img 
       variant='top' src={src} height='200px' style={{objectFit: 'cover'}}/>
       <Card.Body className='d-flex flex-column'>
    <Card.Title className='d-flex justify-content-between align-items-baseline mb-4 fw-bold'>
      {title}
    </Card.Title>
    <Card.Text>
      {intro}
    </Card.Text>
    <div className='d-flex p-3'>
          <img 
          src='https://media.newyorker.com/photos/590971922179605b11ad7acc/master/w_2560%2Cc_limit/100920_r20016_hr.jpg' 
          className='rounded-circle me-1' 
          width='50px' height='50px'/>
          <div >
            <p><strong>Blogger123</strong> <br /> CEO and Founder </p>
          </div>
        </div>
    </Card.Body>
    </Card>
  )
}
    