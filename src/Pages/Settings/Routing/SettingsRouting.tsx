import React, { FC, useEffect, useState } from 'react';
import {Navbar, Footer} from '../../../Components/index';
import { PSHFBtn } from '../../../Components/PSHFBtn/PSHFBtn';
import V from '../../../../public/Assets/Icons/Vshape.svg';
import SY from './Rout.module.scss';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Following from '../Following/Following';
import Saved from '../Saved/Saved';
import Hosted from '../Hosted/Hosted';

interface SettingsRoutingInterface {
  user: any;
  // config: any;
}

export const SettingsRouting: FC<SettingsRoutingInterface> = ({user}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [currentpage, setCurrentpage] = useState('Homme');
  // Get the current location from the react-router-dom useLocation hook
  const location = useLocation();

  // Update the currentpage state variable whenever the location changes
  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case '/Following':
        setCurrentpage('Following');
        break;
      case '/Saved':
        setCurrentpage('Saved');
        break;
      case '/Hosted':
        setCurrentpage('Hosted');
        break;
      default:
        setCurrentpage('Home');
    }
  }, [location]);
  return (
    <>
      <div className={SY.MobileVersion}>
        {' '}
        {/*for the mobile version header*/}
        <p className={SY.MainTitle}>Settings</p>
        <button
          className={SY.wow}
          onClick={(e) => setOpenMenu((openMenu) => true)}
        >
          <img src={V} alt='<' />
        </button>
        <PSHFBtn
          isopen={openMenu}
          currentpage={currentpage}
          setOpen={setOpenMenu}
        />
      </div>

      <div className={SY.navbar}>
        <Navbar user={user}/>
      </div>

      <div className={SY.PSHFBtn}>
        {/*for the hosted header in md devices*/}
        <PSHFBtn
          isopen={false}
          currentpage={currentpage}
          setOpen={setOpenMenu}
        />
      </div>

      <Outlet />
      
    </>
  );
};
