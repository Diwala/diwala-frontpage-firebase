import * as React from 'react';
import { TextData } from '../../api/texts';

const tokenImage = require('../../graphics/landing_token.svg');
const mobileImage = require('../../graphics/landing_phone.png');
const appStoreImage = require('../../graphics/app_store.png');
const googlePlayImage = require('../../graphics/google_play.png');

const android = 'Android';
const ios = 'iOS';

const getOS = () => {
  const UAParser = (window as any).UAParser;
  const parser = new UAParser();
  return parser.getResult();
};

export default function LandingContent(props: {
  text: TextData[];
  id: string;
}) {
  let filteredData = props.text.find(t => t.id === props.id);
  let renderDataObj: any = {};
  function createRenderDataObj(obj: TextData) {
    if (!obj) {
      return {};
    }
    let createdObj = {};
    obj.value.forEach(element => {
      createdObj[element.label] = element.value;
    });
    return createdObj;
  }
  renderDataObj = createRenderDataObj(filteredData);

  const data = getOS();
  const os = data.os.name;
  let downloadUrl;
  if (os === android) {
    downloadUrl = renderDataObj.googlePlayStoreLink;
  }
  if (os === ios) {
    downloadUrl = renderDataObj.appleAppStoreLink;
  }

  const getFallbackComp = () => {
    return (
      <div className="row app-button-group custom-button-group">
        <div className="google-play-btn-container">
          <a target="_blank" href={renderDataObj.googlePlayStoreLink}>
            <img className="google-play" src={googlePlayImage} />
          </a>
        </div>
        <div className="app-store-btn-container">
          <a target="_blank" href={renderDataObj.appleAppStoreLink}>
            <img className="app-store" src={appStoreImage} />
          </a>
        </div>
      </div> 
    );
  };

  const downloadButton = () => {
    return (
      <div className="join-now-btn-container">
        <a className="join-now-btn" target="_blank" href={downloadUrl}>
          Download
        </a>
      </div>
    );
  };

  const getComponent = () => {
    if (os === ios || os === android) {
      return downloadButton();
    } else {
      return getFallbackComp();
    }
  };

  return (
    <div className="landing">
      <img className="token-bg" src={tokenImage} />
      <div className="container landing-container-student">
        <div className="row landing-container-row">
          <div className="col-sm-6 col-md-6 landing-header-container">
            <div className="landing-header">
              <p>{renderDataObj.header1}</p>
              <p>{renderDataObj.header2}</p>
              <p>{renderDataObj.header3}</p>
            </div>
            <div className="landing-description">
              <p>{renderDataObj.description}</p>
            </div>
            {getComponent()}
          </div>
          <div className="col-sm-6 col-md-6 landing-secondary-container">
            <img className="mobile" src={mobileImage} />
          </div>
        </div>
      </div>
    </div>
  );
}
