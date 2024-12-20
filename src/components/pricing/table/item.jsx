export default function PricingTier({ tier }) {
  let pricing = "";
  let billedAnnuallyText = "Billed Annually";
  let billedMontlyText = "Billed Monthly";
  if (tier.has_discount) {
    pricing = (
      <>
        <div className="price">
          <div className="col-lg-8">
            <p className="pricingtable">
              {tier.currency_symbol}
              {tier.discount_price}
            </p>
            <h5>{billedAnnuallyText}</h5>
          </div>
          <div className="discount">
          <div className="col-lg-12">
            <p>
              {tier.currency_symbol}
              {tier.price}
            </p>
            <h5>{billedMontlyText}</h5>
            </div>
          </div>
          <div className="shape-two top-0"></div>
        </div>
      </>
    );
  } else {
    pricing = (
      <>
        <div className="price">
          <p>
            <span>
              {tier.currency_symbol}
              {tier.price}
            </span>
          </p>
          <div className="shape-one"></div>
        </div>
      </>
    );
  }
  return (
    <div className="col-lg-4">
      <div
        className={`card pricing-item ${tier.highlight_tier ? "active" : ""}`}
      >
        <h5 className="card-title">{tier.tier}</h5>
        <p className="card-text">{tier.description}</p>
        {pricing}
        <div className="card-body">
          <ul className="list-unstyled">
            {tier.features.map((feature, i) => (
              <li key={i} className={feature.active_feature ? "" : "deactive"}>
                <i
                  className={`ph-check ${
                    feature.active_feature ? "" : "deactive"
                  }`}
                ></i>
                {feature.item}
              </li>
            ))}
          </ul>
          
          <div className="d-block mb-6">
          <div className="Row" style={{padding: "0rem", display:"flex"}}>
              <div className="p-3 float-left">
                <a href="https://flipinventory.app/" target="_blank" rel="noreferrer">
                  <img src="/images/google-play-badge.svg" width="120" height="auto" alt="PlayStore Logo"></img>
                </a>
              </div>
              <div className="p-3 float-left">
                <a href="https://apps.apple.com/ca/app/flip-inventory/id6692609544" target="_blank" rel="noreferrer">
                  <img src="/images/app-store-badge.svg" width="110" height="auto" alt="AppleStore Logo"></img>
                </a>
              </div>
            </div>       
              </div>
        </div>
      </div>
    </div>
  );
}
