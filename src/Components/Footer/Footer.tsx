import { FC } from 'react';
import SY from './Footer.module.scss';
import { FiTwitter, FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi';
import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md'
interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <>
      <section className={SY.main}>
        <div className={SY.banner}>
          <img src='/Assets/Images/Footer/Up-Arrow.svg' alt='' />
        </div>
        <section className={SY.info}>
          <article>
            <div>
              <img src='' alt='' />
              <h3>E-VENTI</h3>
            </div>
            <p>
              E-VENTI is an online platform where you can explore the most
              exciting events and even create ones for your own
            </p>
          </article>
          <article>
            <h3>CONTACT US</h3>
            <p>hello@eventi.co</p>
            <p>24 atlantic avenue, Brooklyn, New York</p>
            <p>+213 78564734</p>
          </article>
          <article>
            <h3>FOLLOW US</h3>
            <p className={SY.social}>Yes, we are social</p>
            <div className={SY.Icon_cnt}>
              <a>
                <FiFacebook />
              </a>
              <a>
                <FiTwitter />
              </a>
              <a>
                <FiInstagram />
              </a>
            </div>
          </article>
        </section>
      </section>
    </>
  );
};

export default Footer;
