export const Pricing = (props) => {
    return (
      <div id='team' className='text-center'>
        <div className='container'>
          <div className='col-md-12 section-title-pricing'>
            <h2>Flexible Pricing Plans</h2>
          </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem quam pellentesque amet, volutpat, pulvinar senectus. Tortor, scelerisque sed enim, eget at ante etiam. Egestas adipiscing metus, amet, justo.
            </p>
          
          <div className='row-dp'>
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className='team'>
                    <div className='thumbnail'>
                      {' '}
                      {/* <img src={d.img} alt='...' className='team-img' /> */}
                      <div className='card-pricing'>
                        <h4>For Institutes</h4>
                        <h5><span className="color-blue">30</span> / student</h5>
                        <br/>
                        <hr class="solid"></hr>
                        <ul>
                            <li key={`1`}>Boost your knowledge and skills</li>
                            <li key={`2`}>Prepare yourself for exams</li>
                            <li key={`3`}>Prepare yourself for exams</li>
                            <li key={`4`}>Prepare yourself for exams</li>
                            <li key={`5`}>Prepare yourself for exams</li>

                        </ul>
                        <div className='pricing-button-container'>
                            <button className='normal-button'>
                            Register Now
                            </button>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                ))
              : 'loading'}
          </div>
        </div>
      </div>
    )
  }
  