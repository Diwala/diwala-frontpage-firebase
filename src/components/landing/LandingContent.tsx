import * as React from 'react';
import { TextData } from '../../api/texts';

const tokenImage = require('../../graphics/landing_token.svg');
const mobileImage = require('../../graphics/landing_phone.png');

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
  console.log(renderDataObj);

  return (
    <div className="landing">
      <img className="token-bg" src={tokenImage} />
      <div className="container landing-container">
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
            <div className="join-now-btn-container">
              <a className="join-now-btn" href={renderDataObj.joinBtnLink}>
                {renderDataObj.joinBtnTxt}
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 landing-secondary-container">
            <img className="mobile" src={mobileImage} />
          </div>
        </div>
      </div>
    </div>
  );
}
