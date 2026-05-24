import "./Contact.css";

function Contact() {
  return (
    <section className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-text">This is the contact page. Feel free to reach out.</p>
        <a className="contact-cta" href="mailto:maithily@gmail.com">Email Me</a>
      </div>
    </section>
  );
}

export default Contact;