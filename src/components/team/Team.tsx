import * as React from 'react';
import { urlFor } from '../../core/utilities/image-builder.functions';
import SocialIcons from '../social_icons/SocialIcons';

export default function Team(props: any) {
  const team: any[] = props.team;

  const getTeamByType = (listOfTypes: string[]) => {
    let accumulatorArray: any[] = [];
    if ( team.length > 0 ) {
      listOfTypes.forEach( typeOfMember => {
        accumulatorArray = accumulatorArray.concat(team.filter(teamMember => teamMember.type === typeOfMember));
      }
      );
      accumulatorArray = accumulatorArray.sort((a: any, b: any) => a.order - b.order);
    } 
    return accumulatorArray;
  };

  const socialIconsUrls = (person: any) => {
    const urls = [];
    if (person.linkedin) {
      urls.push(person.linkedin);
    }    
    if (person.email) {
      urls.push(`mailto:${person.email}`);
    }
    return urls;
  };

  const getTeam = (choosenTeam) => {
    if (choosenTeam.length > 0) {
      return choosenTeam.map((person: any, key: any) => {
        const url = person.image ? urlFor(person.image).url() : '';
        return (
          <li key={person._id} className={`team__person team__person--role-${person.type}`}>
            <img className="team__person-image" src={url}/>
            <div className="team__person-name">{person.name}</div>
            <div className="team__person-title" dangerouslySetInnerHTML={{__html: person.title}} />
            <div className="team__person-social-icons">
              <SocialIcons urls={socialIconsUrls(person)} />
            </div>
          </li>
        );
      });
    } else {
      return <span />;
    }
  };

  const WorkingTeam = () => {
    const choosenTeam = getTeamByType(['core', 'tech-team', 'contributor']);
    if (choosenTeam.length > 0) {
      return (
        <div key="team-team" className="team">
          <div className="team__title-container team__title-container">
            <h3 className="team__title team__title--team">Team</h3>
          </div>
          <ul className="team__list team__list">
            {getTeam(choosenTeam)}
          </ul>
        </div>
      );
    }
    return (<></>);
  };

  const MentorTeam = () => {
    const choosenTeam = getTeamByType(['mentor']);
    if (choosenTeam.length > 0) {
      return (
        <div key="team-mentors" className="team">
          <div className="team__title-container team__title-container">
            <h3 className="team__title team__title--mentors">Mentors &amp; Advisors</h3>
          </div>
          <ul className="team__list team__list">
            {getTeam(choosenTeam)}
          </ul>
        </div>
      );
    }
    return (<></>);
  };

  const Ambassadors = () => {
    const choosenTeam = getTeamByType(['ambassador']);
    if (choosenTeam.length > 0) {
      const TheAmbassadors = getTeam(choosenTeam);
      return (
        <div key="ambassador-comp" className="team">
          <div className="team__title-container team__title-container">
            <h3 className="team__title team__title--ambassadors">Ambassadors</h3>
          </div>
          <ul className="team__list team__list">
            <TheAmbassadors key="the-ambassadors" />
          </ul>
        </div>
      );
    }
    return (<></>);
  };

  return (
    <>
      <WorkingTeam />
      <Ambassadors key="team-ambassadors" />
      <MentorTeam />
    </>
  );
}
