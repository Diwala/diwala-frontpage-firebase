import * as React from 'react';
import { TextData } from '../../api/texts';
import Hero from '../hero/Hero';
import ScrollToButton from '../buttons/scrollToButton/ScrollToButton';

class Home extends React.Component {
  public props: {
    text: TextData;
  };

  public render() {
    return (
      <>
        <Hero text={this.props.text} textId="hero" tokenVersion="purple"/>
        <div className="website-hero__buttons">
          <ScrollToButton id="#signup" text={this.props.text} offset={-500} textId="sign_up"/>
          <ScrollToButton id="#footer" text={this.props.text} textId="question" invert/>
        </div>
      </>
    );
  }
}

export default Home;
