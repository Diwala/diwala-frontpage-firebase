import { combineReducers } from 'redux';
import news, { InitialNewsState } from './news';
import team, { InitialTeamState } from './team';
import partners, { InitialPartnersState } from './partners';
import pictures, { InitialPictureState } from './pictures';
import texts, { InitialTextState } from './texts';
import form, { InitialFormState } from './mailform';
import blog, { InitialBlogState } from './blog';
import policy, { InitialPolicyState } from './privacy-policy';

export const diwalaFrontpageApp = combineReducers({
  news,
  partners,
  pictures,
  team,
  texts,
  form,
  blog,
  policy
});

export const DiwalaState = {
  news: InitialNewsState,
  partners: InitialPartnersState,
  pictures: InitialPictureState,
  team: InitialTeamState,
  texts: InitialTextState,
  form: InitialFormState,
  blog: InitialBlogState,
  policy: InitialPolicyState
};
