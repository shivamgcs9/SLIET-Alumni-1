// import logo from '../../public/img/testimonials/logo.png';

import { Link } from "react-router-dom"


export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      {/* <div>
        HI
      </div> */}
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            {/* <img src={logo} alt='slietlogo' /> */}SLIET ALUMNI
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='/#features' className='page-scroll'>
                Features
              </a>
            </li>
            <li>
              <a href='/#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='/#portfolio' className='page-scroll'>
                Gallery
              </a>
            </li>
            <li>
              <a href='/#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li>
            <li>
              {/* <a href='#team' className='page-scroll'>
                Team
              </a> */}
              <Link to="/team" className='page-scroll'>Teams</Link>
              
            </li>
            <li>
              {/* <a href='#services' className='page-scroll'>
                Alumni
              </a> */}
               <Link to="/dashboard" className='page-scroll'>Dashboard</Link>
            </li>
            <li>
              <a href='/#contact' className='page-scroll'>
                Contact
              </a>
            </li>
            <li>
              {/* <a href='#faq' className='page-scroll'>
                FAQ
              </a> */}
               {/* <Link to="/faq" className='page-scroll'>FAQ</Link> */}
            </li>
            <li>
              {/* <a href='#register' className='page-scroll'>
                REGISTER
              </a> */}
               <Link to="/register" className='page-scroll'>Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
