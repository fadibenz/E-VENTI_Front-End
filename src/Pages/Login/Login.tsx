import { FC, useState } from 'react';
import SY from './Login.module.scss';
import { AuthLayout, Password, InputField } from '../../Components/index';
import {
  BsPerson,
  BsCheckCircle,
  BsCheckCircleFill,
} from 'react-icons/bs';
interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const [checkMark, setcheckMark] = useState<boolean>(false);
  return (
    <AuthLayout Pagetitle='welcome Back!' CTA='Login'>
          <div className={SY.AuthField}>
            <InputField Placeholder='Enter your email' icon={<BsPerson/>} type='text'/>
            <Password Placeholder='Password'/>
            <div className={SY.LoginOptions}>
              <div className={SY.LoginOptions__Keepme}>
                <h4> Keep me logged in</h4>
                <button
                  onClick={() => {
                    setcheckMark(!checkMark);
                  }}
                >
                  {checkMark ? <BsCheckCircleFill /> : <BsCheckCircle />}
                </button>
              </div>
              <button className={SY.LoginOptions__Password}>
                Forgot Password?
              </button>
            </div>
          </div>
    </AuthLayout>
  );
};

export default Login;
