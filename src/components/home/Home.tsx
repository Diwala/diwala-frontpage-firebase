import * as React from 'react';
import { TextData } from '../../api/texts';
import Hero from '../hero/Hero';
import LinkButton from '../buttons/linkNoBlank/LinkButton';
import SlackButton from '../slack_button/SlackButton';
import SocialIcons from '../social_icons/SocialIcons';

class Home extends React.Component {
  public props: {
    text: TextData;
  };

  public render() {
    const urls = [
      'http://twitter.com/diwala',
      'https://www.linkedin.com/company/18089037/',
      'https://www.instagram.com/diwala_/',
      'https://www.facebook.com/diwalaorg/',
    ];
    return (
      <>
        <Hero text={this.props.text} textId="header"/>
        <div className="website-hero__buttons">
          <div className="website-hero__social-icons">
            <SocialIcons urls={urls}/>
          </div>
          <SlackButton/>
          <LinkButton
            classes="button--invert button--collaborate"
            url="/certificates"
            text="Want to sponsor a student?"
          />
        </div>
      </>
    );
  }
}

export default Home;
