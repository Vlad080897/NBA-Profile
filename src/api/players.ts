import { PlayerType, TeamType, TypePlayers } from '../types/types';
import { instance } from './api';

export const getPlayersAPI = {
  getPlayers(page: number, amount: number) {
    return instance.get<GetPlayersResponse>(`players?page=${page}
    &per_page=${amount}`).then((response) => response.data);
  },
  getPlayer(id: number) {
    return instance.get<PlayerType>(`players/${id}`).then((response) => response.data);
  },
};

type GetPlayersResponse = {
  data: Array<TypePlayers>
  meta: MetaType
}

type MetaType = {
  total_count: number
}
