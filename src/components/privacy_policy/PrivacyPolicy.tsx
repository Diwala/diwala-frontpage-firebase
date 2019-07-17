import * as React from 'react';
import * as BlockContent from '@sanity/block-content-to-react';
import { projectId, dataset } from '../../service/sanity';

import { connect } from 'react-redux';
import { loadPolicy } from '../../actions/privacy-policy';
import getPolicy from '../../api/policy';
import { SanityPrivacyPolicy } from '../../api/sanity';

interface PropsFromState {
    policy?: SanityPrivacyPolicy[];
}

interface State {
    policy?: string;
}

class PrivacyPolicy extends React.Component<PropsFromState, State> {

  constructor(props: any) {
    super(props);
    props.getPolicy(loadPolicy);
    this.state = {
      policy: '',
    };
  }

  public render() {
    const blockContent = this.props.policy.length > 0 ? this.props.policy[0].body : [];
    return (
      <div className="privacy-policy">
        <h1 className="title">Privacy Policy</h1>
        <div className="policy">
          <BlockContent
            blocks={blockContent}
            projectId={projectId}
            dataset={dataset}
          />
        </div>
      </div>
      );
  }
}

const mapApiToState = (dispatch: any) => {
  return {
    getPolicy: (action: any) => getPolicy(dispatch, action),
  };
};

const ConnectedPrivacyPolicy = connect(
  state => state,
  mapApiToState
)(PrivacyPolicy);

export default ConnectedPrivacyPolicy;
