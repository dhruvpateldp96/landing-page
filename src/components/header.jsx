export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
              <div className='col-md-6 col-sm-12 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                  <div className='col-md-7 col-xs-12 header-button-container'>
                    <button className='normal-button'>
                      Start your 7 days free trial
                    </button>
                    <button className='outline-button'>
                      know more
                    </button>
                  </div>
                
              </div>
              <div className='col-md-6 col-sm-12 intro-text'>
                {props.data && <img src={props.data.src}/>}
              </div>
          </div>
        </div>
      </div>
    </header>
  )
}
