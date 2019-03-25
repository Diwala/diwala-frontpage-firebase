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

  const getTeam = (listOfTypes: string[]) => {
    const choosenTeam = getTeamByType(listOfTypes);
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

  const TeamTeam = getTeam(['core', 'tech-team', 'contributor']);
  const TeamAmbassador = getTeam(['ambassador']);
  const TeamMentor = getTeam(['mentor']);

  return (
    <>
      <div key="team-team" className="team">
        <div className="team__title-container team__title-container">
          <h3 className="team__title team__title--team">Team</h3>
        </div>
        <ul className="team__list team__list">
        {TeamTeam}
        </ul>
      </div>
      <div key="team-ambassadors" className="team">
        <div className="team__title-container team__title-container">
          <h3 className="team__title team__title--ambassadors">Ambassadors</h3>
        </div>
        <ul className="team__list team__list">
          {TeamAmbassador}
        </ul>
      </div>
      <div key="team-mentors" className="team">
        <div className="team__title-container team__title-container">
          <h3 className="team__title team__title--mentors">Mentors &amp; Advisors</h3>
        </div>
        <ul className="team__list team__list">
          {TeamMentor}
        </ul>
      </div>
    </>
  );
}
