import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function GlobalFeature(block) {
  let content = "";
  if (block.reversed) {
    content = (
      <>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="feature-item-banner mb-sm-8 mb-lg-10 mb-xxl-15 mb-7">
              <div className="card-image">
                <img src={block.image} alt={block.image_alt} loading="lazy" />
              </div>
              <div className="effect-one"></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feature-item-content mb-xl-15 mb-md-10 mb-7 ps-xxl-8 ps-0">
              <h2>{block.title}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: md.render(block.description),
                }}
              />
              <div className="Learn-more">
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
          </div>
        </div>
      </>
    );
  } else {
    content = (
      <>
        <div className="row align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="feature-item-content mb-xl-15 mb-md-10 mb-7 ps-xxl-8 ps-0">
              <h2 className="pe-xl-0">{block.title}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: md.render(block.description),
                }}
              />
              <div className="Learn-more">
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
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="feature-item-banner mb-sm-8 mb-lg-10 mb-xxl-15 mb-7">
              <div className="card-image">
                <img src={block.image} alt={block.image_alt} loading="lazy" />
              </div>
              <div className="effect-two"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <section className="feature pt-sm-10 pt-5 pb-4">
      <div className="container">{content}</div>
    </section>
  );
}
