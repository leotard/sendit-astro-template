import MarkdownIt from "markdown-it";
import MobileStoreButton from 'react-mobile-store-button';

const md = new MarkdownIt({ html: true });

export default function HomeHero(block) {
  const APKUrl = "https://play.google.com/store/apps/details?id=host";
  const IOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";
  return (
    <section className="hero-two">
      <div className="hero-two-shape"></div>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-two-content">
              <h1 className="mb-4">{block.title}</h1>
              <div
                className="mb-7 w-xxl-80"
                dangerouslySetInnerHTML={{
                  __html: md.render(block.description),
                }}
              />
              <a href="https://websolutionstuff.com" target="_blank" rel="noreferrer">
                <img src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png" width="180" height="auto" alt="Websolutionstuff logo"></img>
              </a>
              <a href="https://websolutionstuff.com" target="_blank" rel="noreferrer">
                <img src="/images/app-store-badge.svg" width="140" height="auto" alt="Websolutionstuff logo"></img>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-two-banner">
              <img src={block.image} alt={block.image_alt} />
              <div className="hero-two-banner-shape"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
