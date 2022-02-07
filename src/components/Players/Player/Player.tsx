/* eslint-disable arrow-body-style */
import React from 'react';

export const Player: React.FC<IPlayerProps> = ({ firstName, lastName }) => {
  return (
    <div className="player-box">
      <div className="player-initials">
        <div>
          <span>{firstName[0]}</span>
          <span>{lastName[0]}</span>
        </div>
      </div>
      <div>
        <span>{firstName}</span>
        <span>{lastName}</span>
      </div>
    </div>

  );
};

type IPlayerProps = {
  firstName: string
  lastName: string
};
