import { FC, useState, ReactNode } from 'react';
import SY from './AuthLayout.module.scss';
import {  RiCloseFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
interface AuthLayoutProps {
  children: ReactNode;
  Pagetitle: String;
  CTA: String;
  className?: string;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children, Pagetitle, CTA, className }) => {
  const [activeBtn, setactiveBtn] = useState<boolean>(true);

  return (
    <main className={`${SY.LoginMain} ${className}`}>
      <section className={SY.LoginPhoto}>
        {/* <img src='./Assets/Images/Graphic.svg' className={SY.Desktop} /> */}
        <div className={SY.Desktop}>
          <img
            src='/Assets/Images/AuthLayout/+.png'
            alt=''
            className={SY.plus}
          />
          <div className={SY.Excursion}>
            <div className={SY.Excursion__triangle}></div>
            <div className={SY.Excursion__outline}></div>
            <img src='/Assets/Images/AuthLayout/bus 1.png' alt='' />
            <p>Excursions</p>
          </div>
          <div className={SY.LetsGO}>
            <img
              src='/Assets/Images/AuthLayout/arrows.png'
              alt=''
              className={SY.LetsGO__Arr}
            />
            <h1>Let's get</h1>
            <h1 className={SY.LetsGO__Pur}>you</h1>
            <h1 className={SY.LetsGO__Yellow}>
              out<span className={SY.LetsGO__Green}>side</span>
              <span className={SY.LetsGO__qst}>!</span>
            </h1>
            <img
              src='/Assets/Images/AuthLayout/Group.png'
              alt=''
              className={SY.LetsGO__Lines}
            />
          </div>
          <div className={SY.Confrences}>
            <div className={SY.Confrences__Circle}></div>
            <div className={SY.Confrences__outline}></div>
            <img src='/Assets/Images/AuthLayout/Podiumbw 1.png' alt='' />
            {/* <p>Confrences</p> */}
          </div>
          <div className={SY.Concerts}>
            <div className={SY.Concerts__Square}></div>
            <div className={SY.Concerts__outline}></div>
            <img src='/Assets/Images/AuthLayout/guitarbw 1.png' alt='' />
            <p>Concerts</p>
          </div>
          <img
            src='/Assets/Images/AuthLayout/Vector.png'
            alt=''
            className={SY.Vector}
          />
        </div>
        <div className={SY.LoginPhoto__Btn}>
          <button
            onClick={() => {
              setactiveBtn(true);
            }}
            className={`${SY.Restbtn} ${activeBtn ? SY.Activebtn : ''}`}
          >
            New
          </button>
          <button
            onClick={() => {
              setactiveBtn(false);
            }}
            className={`${SY.Restbtn} ${activeBtn ? '' : SY.Activebtn}`}
          >
            Existing
          </button>
        </div>
      </section>
      <section className={SY.LoginForm}>
        <button className={SY.LoginForm__Quitbtn}>
          <RiCloseFill className={SY.icon} />
        </button>
        <article className={SY.LoginForm__main}>
          <h1>{Pagetitle}</h1>
          {children}
          <button className={SY.btn}>{CTA}</button>
          <div className={SY.Or}>
            <h4>or</h4>
          </div>
          <div className={SY.LoginField__Feat}>
            <button>{<FcGoogle />}</button>
            <button>{<BsFacebook />}</button>
          </div>
        </article>
      </section>
    </main>
  );
};

export default AuthLayout;
