export const Offerings = ({ data, institute, student }) => {
  return (
    <div
      id="offerings"
      className={`text-center ${student ? "student" : ""} ${
        institute ? "institute" : ""
      } color-change-2x`}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-title">
            <h2>What we offer ?</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 section-content">
            <p>
              We offer extensive question banks with over 4 lakh highly curated
              questions for all major competitive exams. Practising with us will
              make you leap!
            </p>
          </div>
        </div>
        <div className="row-dp">
          {data
            ? data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-4-dp card"
                  id={`slide-${i + 1}`}
                >
                  {" "}
                  {/* <i className={d.icon}></i> */}
                  <img src={d.icon} />
                  <div className="service-desc">
                    <ul>
                      <li style={{ "list-style": "url(assets/BulletDoc.svg)" }}>
                        {d.name}
                      </li>
                      <li
                        style={{ "list-style": "url(assets/BulletBoard.svg)" }}
                      >
                        {d.text}
                      </li>
                      <li
                        style={{ "list-style": "url(assets/BulletBook.svg)" }}
                      >
                        {d.text}
                      </li>
                    </ul>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
        <div className="slider-controls">
          <a href="#slide-1"> </a>
          <a href="#slide-2"> </a>
          <a href="#slide-3"> </a>
          <a href="#slide-4"> </a>
          <a href="#slide-5"> </a>
        </div>
      </div>
    </div>
  );
};
