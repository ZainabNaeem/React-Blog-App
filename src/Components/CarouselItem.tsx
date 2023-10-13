import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'

type CarouselItemProps = {
  id: number
  src: string
  title: string
  intro: string
  content: string
}

export function CarouselItem({
  id,
  src,
  title,
  intro,
  content,
}: CarouselItemProps) {
  return (
    <Card className="border border-0" key={id}>
      <Card.Body className="d-flex">
        <Card.Img
          src={src}
          height="350px"
          width="500px"
          variant="left"
          style={{ objectFit: 'cover' }}
          className="rounded"
        />
        <div className="d-block p-3 me-auto">
          <Card.Title className="fw-bold fs-2 p-2">{title}</Card.Title>
          <Card.Text className="text-muted fs-6">{intro}</Card.Text>
          <div className="d-flex p-3">
            <img
              src="https://media.newyorker.com/photos/590971922179605b11ad7acc/master/w_2560%2Cc_limit/100920_r20016_hr.jpg"
              className="rounded-circle me-1"
              width="50px"
              height="50px"
            />
            <div>
              <p>
                <strong>Blogger123</strong> <br /> CEO and Founder{' '}
              </p>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}
