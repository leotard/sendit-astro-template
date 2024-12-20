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
              <div className="Row" style={{padding: "0rem", display:"flex"}}>
              <div className="p-3 float-left">
                <a href="https://flipinventory.app/" target="_blank" rel="noreferrer">
                  <img src="/images/google-play-badge.svg" width="170" height="auto" alt="PlayStore Logo"></img>
                </a>
              </div>
              <div className="p-3 float-left">
                <a href="https://apps.apple.com/ca/app/flip-inventory/id6692609544" target="_blank" rel="noreferrer">
                  <img src="/images/app-store-badge.svg" width="155" height="auto" alt="AppleStore Logo"></img>
                </a>
              </div>
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
