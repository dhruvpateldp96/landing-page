export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='row'>
        <div className='col-md-12 section-title'>
          <h2>What we offer ?</h2>
        </div>
        </div>
        <div className='row'>
          <div className='col-md-8 section-content'>
          <p>
          We offer extensive question banks with over 4 lakh highly curated questions for all major competitive exams. Practising with us will make you leap!
          </p>
          </div>
        </div>
        <div className='row-dp'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4-dp card'>
                  {' '}
                  {/* <i className={d.icon}></i> */}
                  <img src={d.icon}/>
                  <div className='service-desc'>
                    <ul>
                      <li style={{"list-style": "url(assets/BulletDoc.svg)"}}>
                        {d.name}
                      </li>
                      <li style={{"list-style": "url(assets/BulletBoard.svg)"}}>
                        {d.text}
                      </li>
                      <li style={{"list-style": "url(assets/BulletBook.svg)"}}>
                        {d.text}
                      </li>
                    </ul>
                    
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
