import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <h3>Call: 206-949-0305</h3>
      <form>
        <label>Name</label>
        <input type="text" name="name" required />
        <label>Email</label>
        <input type="email" name="email" required />
        <label>Message</label>
        <textarea name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
