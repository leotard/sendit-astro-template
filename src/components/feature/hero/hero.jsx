import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function FeatureHero(block) {
  return (
    <section className="feature-hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="feature-hero-content">
              <h1 className="">{block.title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: md.render(block.description),
                }}
              />
              <div className="d-block mb-6">
              <a href="https://websolutionstuff.com" target="_blank" rel="noreferrer">
                <img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" width="180" height="auto" alt="Websolutionstuff logo"></img>
              </a>
              <a href="https://websolutionstuff.com" target="_blank" rel="noreferrer">
                <img src="/images/app-store-badge.svg" width="140" height="auto" alt="Websolutionstuff logo"></img>
              </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feature-hero-banner">
              <img src={block.image} alt={block.image_alt} loading="lazy" />
              <div className="shape">
                <img
                  src="/images/feature/effect-4.png"
                  alt="shape"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
