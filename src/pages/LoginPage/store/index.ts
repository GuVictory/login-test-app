import { State } from "../../../typings";
export * from './actions';
export * from './reducers';

export const initialState:State = {
    username: '',
    password: '',
    isButtonDisabled: true,
    helperText: '',
    isError: false
};