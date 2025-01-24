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
              <div className="Row" style={{padding: "0rem", display:"flex"}}>
              <div className="p-3 float-left">
                <a href="https://play.google.com/store/apps/details?id=com.flipinventory.app" target="_blank" rel="noreferrer">
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
