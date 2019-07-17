export const LOAD_POLICY = 'LOAD_POLICY';

const policy = (state = [], action: any) => {
  switch (action.type) {
    case LOAD_POLICY:
      if (!action.policy) {
        return state;
      }
      return action.policy;
    default:
      return state;
  }
};

export default policy;

export const InitialPolicyState = [];
