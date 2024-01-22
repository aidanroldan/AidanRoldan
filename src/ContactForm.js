import { Form, Button, Container } from 'react-bootstrap';

function ContactForm() {
  return (
    <Container>
      <h2>Contact Me</h2>
      <Form>
        {/* Form fields go here */}
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>
  );
}
export default ContactForm;