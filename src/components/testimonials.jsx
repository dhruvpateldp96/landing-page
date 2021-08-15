export const Testimonials = (props) => {
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>What they are saying about us ....</h2>
        </div>
        
        <div className='row-dp'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-xs-4-dp card'>
                  {/* <div className='testimonial'> */}
                  <div className='testimonial-image-dp'>
                    <img src={d.img} alt='' />{' '}
                    <div className='testimonial-meta'> - {d.name} </div>
                  </div>
                    <div className='service-desc'>
                      {' '}
                    </div>
                    <div className='service-description'>
                      <p>"{d.text}"</p>
                    </div>
                  </div>
                // </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
