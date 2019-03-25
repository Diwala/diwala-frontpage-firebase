import * as React from 'react';
import { loadTexts } from '../../actions/texts';
import getTexts, { TextData } from '../../api/texts';
import { connect } from 'react-redux';
import LandingContentStudent from './LandingContentStudent';

class Landing extends React.Component {
  public props: {
    texts: TextData[];
  };

  constructor(props: any) {
    super(props);
    props.getTexts(loadTexts);
  }

  public render() {
    return <LandingContentStudent id="landing-text-student" text={this.props.texts} />;
  }
}

const mapApiToState = (dispatch: any) => {
  return {
    getTexts: (action: any) => getTexts(dispatch, action)
  };
};

const ConnectedLanding = connect(
  state => state,
  mapApiToState
)(Landing);

export default ConnectedLanding;
