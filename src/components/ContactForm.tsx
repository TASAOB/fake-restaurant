import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";

const ContactForm: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data); // You can handle form submission here
  };

  return (
    <section>
      <h2>Contact Us</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" {...register("name", { required: true })} />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            {...register("email", { required: true })}
          />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            {...register("message", { required: true })}
          />
        </Form.Group>
        <Button type="submit">Send Message</Button>
      </Form>
    </section>
  );
};

export default ContactForm;
