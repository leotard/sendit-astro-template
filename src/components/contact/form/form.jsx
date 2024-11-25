export default function ContactForm(block) {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 me-auto order-2 order-lg-1">
            <div className="contact-form-Information">
              <div className="address">
                <div className="item">
                  {(
                    <>
                      <h3>{block.email.heading}</h3>
                      <a href={`mailto:${block.email.email}`}>
                        {block.email.email}
                        <span>
                          <img
                            src={block.email.image}
                            alt={block.email.image_alt}
                            loading="lazy"
                          />
                        </span>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
