import { FC, useState } from 'react';
import SY from './Login.module.scss';
import { logMe } from '../../Services/Account';
import { AuthLayout, Password, InputField } from '../../Components/index';
import { BsPerson, BsCheckCircle, BsCheckCircleFill } from 'react-icons/bs';
import { setCookie } from 'typescript-cookie';
import { useNavigate } from 'react-router';
import {getExpirationTime} from '../../Helpers/index' 

interface LoginProps {
  setToken: (param: string) => void;
  setUser: any
}

const Login: FC<LoginProps> = ({ setToken, setUser }) => {
  const [checkMark, setcheckMark] = useState<boolean>(false);
  const [username, setUsername] = useState({ username: '' });
  const [password, setPassword] = useState({ password: '' });
  
  const navigate = useNavigate()
  
  const handleSubmit = async (
    e: React.FormEvent<EventTarget>
  ): Promise<void> => {
    e.preventDefault();
    if (!username.username || !password.password) {
      alert('Must add a Password and a Username');
    } else {
      try {
        const data = new FormData();
        data.append('Password', password.password);
        data.append('Identifier', username.username);
        data.append('RememberMe', 'true');
        const response = await logMe(data);
        console.log(response.token, response.userData);
        const expirationTime = getExpirationTime(response?.token);
        console.log(expirationTime);
        setCookie('Token', response.token, {
          expires: expirationTime ? expirationTime : 3,
        });
        setCookie('UserID', response.userData.id, {
          expires: expirationTime ? expirationTime : 3,
        });
        setToken(response.token);
        setPassword({ ...password, password: '' });
        setUsername({ ...username, username: '' });
        navigate('/Organizer/efdbd51f-8ef0-40dd-b27f-6cf6df0d16a5');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <AuthLayout Pagetitle='welcome Back!' CTA='Login'>
      <div className={SY.AuthField}>
        <form onSubmit={handleSubmit}  >
          <InputField
            Placeholder='Enter your Username'
            icon={<BsPerson />}
            type='text'
            name='username'
            change={username.username}
            setChange={setUsername}
            original={username}
          />
          <Password
            Placeholder='Password'
            change={password.password}
            setChange={setPassword}
            name='password'
            original={password}
          />
          <input className={SY.btn} type='submit' value='Login'></input>
        </form>
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
