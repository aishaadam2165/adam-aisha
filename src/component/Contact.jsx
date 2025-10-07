import Link from "next/link";

export default function ContactUs() {
  return (
    <>
      <div className="container">
        <div className="contact-left row">
          <div className="col-lg-4">
            <div className="card p-3">
              <a
                className="btn btn-lg btn-warning"
                href="https://wa.me/2349121452165"
                target="_blank"
                rel="noopener noreferrer"
              >
                CHAT ON WHATSAPP
              </a>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card p-3">
              <a
                className="btn btn-lg btn-primary"
                href="mailto:aishaadam3678@gmail.com?subject=hello&body=I%20would%20contact%20you"
              >
                SEND AN EMAIL
              </a>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card p-3">
              <a className="btn btn-lg btn-success" href="tel:+2349121452165">
                CALL
              </a>
            </div>
          </div>
        </div>

        <div className="contact-right mt-5">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" className="form-control mb-3" />
            <input type="email" placeholder="Your Email" className="form-control mb-3" />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="form-control mb-3"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
