import { ComponentsEnum } from "../utils";

export const Features = ({ data, changeState }) => {
  const Card = ({ title, i, icon, text }) => (
    <div
      key={`${title}-${i}`}
      className="col-sm-12 col-md-4 card-content puff-in-center"
    >
      {" "}
      <img src={icon} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );

  return (
    <div id="features" className="text-center">
      <div className="features">
        <div className="container">
          <div className="col-md-12 col-sm-12 section-title">
            <div className="container">
              <div className="col-md-12 col-sm-12 section-title">
                <button
                  className="toggle-button-green"
                  onClick={() =>
                    changeState([ComponentsEnum.InstituteComponent])
                  }
                >
                  For Institutes
                </button>
                <button
                  className="toggle-button-orange"
                  onClick={() => changeState([ComponentsEnum.StudentComponent])}
                >
                  For Students
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12 section-title">
                <img src="assets/Arrow.svg" className="features-arrow" />
                <h2>What do we do?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 section-content">
              <p>{data ? data.content : "Loading..."}</p>
            </div>
          </div>
          <div className="row">
            {data
              ? data.cards.map((d, i) => (
                  <Card title={d.title} i={i} icon={d.icon} text={d.text} />
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
