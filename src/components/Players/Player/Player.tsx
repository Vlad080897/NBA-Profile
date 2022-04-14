/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import { Box, Typography } from '@mui/material';
import { getPlayersAPI } from '../../../api/players';
import { PlayerType } from '../../../types/types';
import Loader from '../../Loader/Loader';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const Player: React.FC<IPlayerProps> = ({ firstName, lastName, id }) => {
  const [specificPlayerInfo, setSpecificPlayerInfo] = useState<PlayerType>();
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const handleOpen = () => {
    setIsLoading(true);
    const fetchData = async () => {
      const playerInfo = await getPlayersAPI.getPlayer(id);
      setSpecificPlayerInfo(playerInfo);
    };
    fetchData();
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setIsLoading(false);
  }, [specificPlayerInfo]);

  return (
    <>
      <div className="player-box" onClick={handleOpen} aria-hidden="true">
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
      <Modal
        open={open}
        onClose={handleClose}
      >
        {isLoading
          ? (
            <Box sx={style}>
              <Loader status={isLoading} />
            </Box>
          )
          : (
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {specificPlayerInfo?.last_name}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {specificPlayerInfo?.first_name}
              </Typography>
            </Box>
          )}

      </Modal>
    </>

  );
};

type IPlayerProps = {
  firstName: string
  lastName: string
  id: number
};
