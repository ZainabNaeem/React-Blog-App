import { Form,Button } from 'react-bootstrap'

export function CraeteBlog() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title to your Blog" />
        </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Intro</Form.Label>
        <Form.Control type="text" placeholder="Enter a brief intro to your Blog" />
        </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Content</Form.Label>
        <Form.Control as="textarea" aria-label="With textarea" />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant='secondary' size='lg'>Create a Blog</Button>
        </div>
    </Form>
  )
}

