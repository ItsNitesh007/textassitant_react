import PropTypes from 'prop-types'
export default function Navbar(props){

    return<div>
{/* using back tick makes something as string literal */}
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://itsnitesh007.github.io/portfolio/">{props.aboutText}</a>
        </li>

        
        
      </ul>

    </div>
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
    
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
  
</div>
  </div>
</nav>

    </div>
}

Navbar.propTypes={
  title:PropTypes.string,
  aboutText:PropTypes.string
  // isRequired = We can use title:PropTypes.string.isRequired so that if the value i s not set. it will throw error in console as reminder (Note: if we have edclared defaultProps, it will not throw any error)
}

Navbar.defaultProps={
  title:'Set Title here',
  aboutText:'Set About Here'
}