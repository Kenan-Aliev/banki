import { RootState } from '../store';

export const selectSendApplicationStatus = (state: RootState) => state.users.sendRequest.status