import * as React from 'react';
import LinkButton from '../buttons/link/LinkButton';

class SlackButton extends React.Component {
  public render() {
    const joinSlack = 'https://join.slack.com/t/';
    const slackUrl = joinSlack + 'diwala/shared_invite/enQtMzM2MDY1NjAzMTU2LTg2ZmU1YjZiZWNiYzFmNTU4M2M2ZDBiMjk3MGQ1MzBjOWIzNjViY2E5Y2U4NTc3ODEzZGJhYjIzYjY5OWRmZmI';
    return (
      <LinkButton
        classes="button button--join"
        url={slackUrl}
        text="Join our community on slack!"
      />
    );
  }
}

export default SlackButton;
