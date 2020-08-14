export const ADD_USER = 'ADD_USER';

export interface IUser {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export const addUser = (newUser: IUser) => ({
  type: ADD_USER,
  payload: newUser
});
