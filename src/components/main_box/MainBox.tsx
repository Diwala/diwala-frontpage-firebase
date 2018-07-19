import * as React from 'react';
import { loadTexts } from '../../actions/texts';
import getTexts, { TextData } from '../../api/texts';
import { connect } from 'react-redux';
import Benefits from '../benefits/Benefits';
import { loadPartners } from '../../actions/partners';
import getPartners, { PartnerData } from '../../api/partners';
import { loadTeam } from '../../actions/team';
import getTeam from '../../api/team';
import { loadNews } from '../../actions/news';
import getNews, { NewsData } from '../../api/news';

import Partners from '../partners/Partners';
import News from '../news/News';
import Team from '../team/Team';

import getPictures, { PictureData } from '../../api/pictures';
import { loadPictures } from '../../actions/pictures';
import PictureFetcher from '../picture_fetcher/PictureFetcher';
import StaticPicture from '../static_picture/StaticPicture';
import Section from '../section/Section';
import Home from '../home/Home';
import TextFetcher from '../text_fetcher/TextFetcher';
import Mission from '../mission/Mission';
import Filter from '../filter/Filter';

const emptyText: TextData = { id: 'empty', value: [] };

class MainBox extends React.Component {
  public props: {
    texts: TextData[],
    partners: PartnerData[],
    pictures: PictureData[],
    team: any,
    news: NewsData[]
  };

  constructor(props: any) {
    super(props);
    props.getTexts(loadTexts);
    props.getPartners(loadPartners);
    props.getPictures(loadPictures);
    props.getTeam(loadTeam);
    props.getNews(loadNews);
  }

  public render() {
    const parentClass = 'MainBox';
    return (
      <div className={parentClass}>
        <div className="MainBox__container">
          <Section name="home" fullHeight={true} parentClass={parentClass}>
            <TextFetcher id="hero-text" texts={this.props.texts}>
              <Home text={emptyText}/>
            </TextFetcher>
          </Section>
          <Section name="benefits" parentClass={parentClass}>
            <TextFetcher id="benefits" texts={this.props.texts}>
              <Benefits text={emptyText} pictures={this.props.pictures}/>
            </TextFetcher>
          </Section>
        </div>
        <Section name="picture" fullWidth={true} parentClass={parentClass}>
          <PictureFetcher
            cropHeight={viewport => viewport.height}
            cropIf={viewport => viewport.width < 400}
            cropWidth={viewport => viewport.width}
            focalX={0.6}
            pictures={this.props.pictures}
            name="Tanzania marked">
            <StaticPicture
              height={0}
              src={'test'}
              width={0}/>
          </PictureFetcher>
        </Section>
        <div className="MainBox__container">
          <Section name="missionAndPartners" parentClass={parentClass}>
            <div id="mission">
              <TextFetcher id="frontpage-missionstatement" texts={this.props.texts}>
                <Mission  pictures={this.props.pictures} text={emptyText}/>
              </TextFetcher>
            </div>
            <div id="partners">
              <Filter if={this.props.partners}>
                <Partners partners={this.props.partners}/>
              </Filter>
            </div>
          </Section>
          <Section name="news" parentClass={parentClass}>
            <Filter if={this.props.news}>
              <News news={this.props.news}/>
            </Filter>
          </Section>
          <Section name="team" parentClass={parentClass}>
            <Filter if={this.props.team}>
              <Team team={this.props.team}/>
            </Filter>
          </Section>
        </div>
      </div>
    );
  }
}

const mapApiToState = (dispatch: any) => {
  return {
    getPictures: (action: any) => getPictures(dispatch, action),
    getTexts: (action: any) => getTexts(dispatch, action),
    getPartners: (action: any) => getPartners(dispatch, action),
    getTeam: (action: any) => getTeam(dispatch, action),
    getNews: (action: any) => getNews(dispatch, action),
  };
};

const ConnectedMainBox = connect(
  state => state,
  mapApiToState
)(MainBox);

export default ConnectedMainBox;
