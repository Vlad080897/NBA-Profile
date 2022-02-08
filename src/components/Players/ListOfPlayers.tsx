import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { getPlayersAPI } from '../../api/players';
import { TypePlayers } from '../../types/types';
import { Player } from './Player/Player';
import './Player/Player.scss';

export const ListOfPlayers = () => {
  const [players, setPlayers] = useState<Array<TypePlayers>>([]);
  const [page, setPage] = useState<number>(1);
  const [amount, setAmount] = useState<number>(8);
  const [totalCount, setTotalCount] = useState<number>(0);
  useEffect(() => {
    const fetchData = async () => {
      const allPlayers = await getPlayersAPI.getPlayers(page, amount);
      setPlayers(allPlayers.data);
      setTotalCount(allPlayers.meta.total_count);
    };
    fetchData();
  }, [page, totalCount, amount]);

  const allPlayers = players && players.map((player) => (
    <div key={player.id}>
      <Player
        firstName={player.first_name}
        lastName={player.last_name}
      />
    </div>
  ));
  return (
    <>
      <h2>Players</h2>
      <div className="player-container">
        {allPlayers}
      </div>
      <Pagination
        current={page}
        total={totalCount}
        onChange={(p) => setPage(p)}
        pageSize={amount}
        pageSizeOptions={[8, 20, 30]}
        showQuickJumper
        onShowSizeChange={(current, size) => setAmount(size)}
      />
    </>
  );
};
