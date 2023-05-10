import { FC, useState, useEffect } from 'react';
import SY from './Navbar.module.scss';
import { BiSearchAlt, BiPencil, BiUser } from 'react-icons/bi';
import { BsSignpost2 } from 'react-icons/bs';
import { HiOutlineBell, HiMenuAlt2 } from 'react-icons/hi';
import { useNavigate } from 'react-router';
interface NavbarProps {
  user: any;
}

const Navbar: FC<NavbarProps> = ({ user }) => {
  useEffect(() => {}, [user]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    if (!user) {
    } else {
      navigate('/')
    }
  };

  return (
    <>
      <main className={SY.main}>
        <div className={SY.LOGO}>
          <button>
            <HiMenuAlt2 className={SY.Mobile} onClick={() => setShow(!show)} />
          </button>
          <section>
            <p>LOGO</p>
          </section>
        </div>
        <div className={SY.Navbtn}>
          <section className={`${SY.NavbtnCnt} ${show ? SY.show : undefined}`}>
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
          <button className={SY.Avatar} onClick={handleClick}>
            {user ? (
              <>
                <img src='/Assets/Images/Organizer/lost.jpg' alt='' />
                <p>Fadi Benzaima</p>
              </>
            ) : (
              'Login / Register'
            )}
          </button>
        </div>
      </main>
    </>
  );
};

export default Navbar;
