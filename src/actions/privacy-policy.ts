import { LOAD_POLICY } from '../reducers/privacy-policy';

export const loadPolicy = (policy: any) => {
  return {
    type: LOAD_POLICY,
    policy
  };
};
