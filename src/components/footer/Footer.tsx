import * as React from 'react';
import SocialIcons from '../social_icons/SocialIcons';
const logo = require('../../graphics/Diwala_Logo_258x108px_1.png');
import { withRouter } from 'react-router';

const Footer = function(props: any) {
  const urls = [
    'http://twitter.com/diwala',
    'https://www.linkedin.com/company/18089037/',
    'https://www.instagram.com/diwala_/',
    'https://www.facebook.com/diwalaorg/',
  ];

  const path = props.location.pathname.replace('/', '');
  
  return (
      <div className={`Footer__container ${path}`}>
        <footer className="Footer" id="footer">
          {props.children}
          <div className="Footer__bottom">
            <div className="Footer__social-icons">
              <SocialIcons urls={urls}/>
            </div>
            <img className="Footer__logo" src={logo} alt="Diwala"/>
            <div className="Footer__copyright">
              Copyright © by Diwala. All rights reserved
            </div>
          </div>
        </footer>
      </div>
      
  );
};

export default withRouter(Footer);
