/* eslint-disable react/require-default-props */
import React from 'react';
import './Team-info.css';

const TeamInfo: React.FC<TeamInfo> = ({
  name,
  abbr,
  city,
  conference = 'East',
}) => (
  <>
    <td><span>{name}</span></td>
    <td><span>{city}</span></td>
    <td><span>{abbr}</span></td>
    <td><span className={conference === 'West' ? 'west' : 'east'}>{conference}</span></td>
  </>
);

export default TeamInfo;

type TeamInfo = {
  abbr: string
  city: string
  conference?: string
  name: string
}
