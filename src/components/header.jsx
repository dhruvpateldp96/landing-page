export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                {/* <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '} */}
                <button className='normal-button'>
                  Start your 7 days free trial
                </button>
                <button className='outline-button'>
                  know more
                </button>
              </div>
              <div className='col-md-6 intro-text'>
                {props.data && <img src={props.data.src}/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
