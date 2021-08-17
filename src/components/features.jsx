export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='features'>
      <div className='container'>
        <div className='col-md-12 col-sm-12 section-title'>
          <h2>What do we do?</h2>
        </div>
        <div className='row'>
          <div className='col-md-12 col-sm-12 section-content'>
            <p>{props.data ? props.data.content : "Loading..."}</p>
          </div>
        </div>
        <div className='row'>
          {props.data
            ? props.data.cards.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-12 col-md-4 card-content'>
                  {' '}
                  <img src={d.icon}/>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
            
        </div>
      </div>
      </div>
    </div>
  )
}
