import { ADD_USER, IUser } from './action';

interface IState {
  users: IUser[];
}

interface IAction {
  type: string;
  payload: IUser;
}

const initialState = {
  users: []
};

export default (state: IState = initialState, action: IAction): IState => {
  switch (action.type) {
    case ADD_USER:
      return { users: state.users.concat(action.payload) };
    default:
      return state;
  }
};
