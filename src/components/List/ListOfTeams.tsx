import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { getTeamsAPI } from '../../api/teams';
import { TeamType } from '../../types/types';
import './ListOfTeams.css';
import TeamInfo from './TeamInfo/TeamInfo';

const ListOfTeams: React.FC<IListProps> = ({ teams, setTeams }) => {
  const [page, setPage] = useState<number>(1);
  const [amount, setAmount] = useState<number>(10);
  useEffect(() => {
    const fetchData = async () => {
      const allTeams = await getTeamsAPI.getTeams(page, amount);
      setTeams(allTeams.data);
    };
    fetchData();
  }, [page, amount, setTeams]);

  const addedTeams = teams && teams.map((team) => (
    <tr className="team-info" key={team.id}>
      <TeamInfo
        name={team.name}
        conference={team.conference}
        city={team.city}
        abbr={team.abbreviation}
      />
    </tr>
  ));
  return (
    <>
      <table>
        <thead />
        <tbody>
          <tr className="main-row">
            <td><span>Name</span></td>
            <td><span>City</span></td>
            <td className="big-abbrevitation"><span>Abbreviation</span></td>
            <td className="small-abrevitation"><span>Abrv</span></td>
            <td><span>Conference</span></td>
          </tr>
          {addedTeams}
        </tbody>
        <tfoot />
      </table>
      <Pagination
        current={page}
        onChange={(p) => setPage(p)}
        total={30}
        onShowSizeChange={(current, size) => setAmount(size)}
        showSizeChanger
        showQuickJumper
        pageSizeOptions={[10, 20, 30]}
      />
    </>
  );
};

export default ListOfTeams;

type IListProps = {
  teams: Array<TeamType> | null,
  setTeams: (allTeams: Array<TeamType>) => void
}
