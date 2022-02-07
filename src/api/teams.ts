/* eslint-disable no-debugger */
import { instance } from './api';

export const getTeamsAPI = {
  getTeams(page: number, amount: number) {
    return instance.get<GetTeamsResponse>(`teams?page=${page}
    &per_page=${amount}`).then((response) => response.data);
  },
};

type GetTeamsResponse = {
  data: Array<getTeamsResponseType>
}
type getTeamsResponseType = {
  abbreviation: string
  city: string
  conference: string
  id: number
  name: string
}
