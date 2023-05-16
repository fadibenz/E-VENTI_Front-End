import { Menu, MenuItem, Stack } from '@mui/material';
import { Component, useState } from 'react';
import './Pshfbtn.css';
import { Link } from 'react-router-dom';

interface PSHFBtnProps {
  isopen: boolean;
  currentpage: string;
  setOpen: (open: boolean) => void;
}

interface CustomLinkProps {
  to: string;
  children: string;
}

export const PSHFBtn = ({ isopen, currentpage, setOpen }: PSHFBtnProps) => {
  const Pages = [
    { page: 'Following', to: '/Dashboard/Following' },
    { page: 'Hosted', to: '/Dashboard/Hosted' },
    { page: 'Profile', to: '/Dashboard/Profile' },
    { page: 'Saved', to: '/Dashboard/Saved' },
  ];

  const ShowPages = Pages.filter((element) => element.page !== currentpage);
  console.log(ShowPages);
  return (
    <>
      <div className='DeskTop'>
        <Stack direction='row' spacing={0}>
          <Link to='/Dashboard/Profile'>
            <button className={'btn Profile'}>Profile</button>
          </Link>
          <Link to='/Dashboard/Following'>
            <button className={'btn Saved'}> Following</button>
          </Link>
          <Link to='/Dashboard/Hosted'>
            <button className={'btn Hosted'}> Hosted</button>
          </Link>
          <Link to='/Dashboard/Saved'>
            <button className={'btn Following'}>Saved </button>
          </Link>
        </Stack>
      </div>

      {/*for the mobile version */}

      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={isopen}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        className='Mobile'
      >
        {ShowPages.map((index) => {
          return (
            <Link to={`${index.to}`}>
              {' '}
              <MenuItem onClick={(e) => setOpen(false)}>{index.page}</MenuItem>
            </Link>
          );
        })}
      </Menu>
    </>
  );
};
