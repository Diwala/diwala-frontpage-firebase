import * as React from 'react';
import { SocialIcon } from 'react-social-icons';
const styles = require('../../compiled_css/components/team/Team.css');

export default function(props: any) {

  const color = styles.diwalaIconPurple;
  
  const SocialIconsSpreadOut = (urls: Array<string>) => {
    return urls.map(url => {
      return (
        <SocialIcon key={url} url={url} color={color} />
      );
    });
  };
  
  return (
      <div>
          {SocialIconsSpreadOut(props.urls)}
      </div>
      
  );
}
