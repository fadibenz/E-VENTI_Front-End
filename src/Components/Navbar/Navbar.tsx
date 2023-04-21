import { FC, useState } from 'react';
import SY from './Navbar.module.scss'
import { BiSearchAlt, BiPencil, BiUser } from 'react-icons/bi';
import {BsSignpost2} from 'react-icons/bs'
import { HiOutlineBell, HiMenuAlt2 } from 'react-icons/hi';
interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const [show, setShow] = useState(false);
    return (
      <>
        <main className={SY.main}>
          <div className={SY.LOGO}>
            <button>
              <HiMenuAlt2 className={SY.Mobile} onClick={()=> setShow(!show)}/>
            </button>
            <section>
              <p>LOGO</p>
            </section>
          </div>
          <div className={SY.Navbtn}>
            <section className={`${SY.NavbtnCnt} ${show ? SY.show : undefined}`} >
              <button className={SY.BTN}>
                <BiSearchAlt />
                <p>Search</p>
              </button>
              <button className={SY.BTN}>
                <BiPencil />
                <p>Create</p>
              </button>
              <button className={SY.BTN}>
                <BsSignpost2 />
                <p>Explore</p>
              </button>
              <button className={SY.BTN}>
                <HiOutlineBell />
                <p>Notifications</p>
              </button>
            </section>
            <button className={SY.Avatar}>
              <img src='/Assets/Images/Organizer/lost.jpg' alt='' />
              <p>Isak Danielson</p>
            </button>
          </div>
        </main>
      </>
    );
}

export default Navbar;
