import * as React from 'react';
const diwalaIcon = require('../../graphics/Diwala_Logo-08.png');
import NewsletterSignup from '../newsletter_signup/NewsletterSignup';
import LinkButton from '../buttons/link/LinkButton';

export default function CuriousToLearnMore(props: any) {

  return (
      <div className="Curious" id="curious">
        <img src={diwalaIcon} className="Footer__diwala-icon"/>
        <h2 className="Footer__title">Curious to learn more? </h2>
        <div className="Curious__buttons flex-btn-group">
          <LinkButton
            classes="button invert-button"
            url="mailto:hello@diwala.io"
            text="Send us an email"
          />
          <LinkButton
            classes="button"
            url="https://medium.com/diwala"
            text="Follow our journey!"
          />
          <NewsletterSignup />
        </div>
      </div>
  );
}
