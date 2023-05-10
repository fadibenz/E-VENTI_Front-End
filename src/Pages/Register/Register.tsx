import { FC, useState } from 'react';
import SY from './Register.module.scss';
import { BsPerson, BsTelephone, BsCalendar4Event, BsPen } from 'react-icons/bs';
import { registerMe } from '../../Services/Account';
import { AuthLayout, InputField, Password } from '../../Components/index';
interface RegisterProps {
  setToken: (param: string) => void;
}

const Register: FC<RegisterProps> = ( {setToken}) => {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    phone: '',
    birth: '',
    password: '',
    confirmPassword: '',
  });
  const [password, setPassword] = useState({
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (
    e: React.FormEvent<EventTarget>
  ): Promise<void> => {
    e.preventDefault();
    
    const data = new FormData();
    
    data.append('firstName', formData.firstName);
    data.append('lastName', formData.lastName);
    data.append('phoneNumber', formData.phone);
    data.append('email', formData.email);
    data.append('userName', formData.username);
    data.append('birthDate', formData.birth);
    data.append('password', password.password);
    data.append('confirmPassword', password.confirmPassword);
    
    try {
      const response = await registerMe(data);
      console.log(response, response?.data)
      setToken(response?.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthLayout Pagetitle='Hello there' CTA='Register' className={SY.Register}>
      <form onSubmit={handleSubmit}>
        <div className={SY.AuthField}>
          <div className={SY.AuthName}>
            <InputField
              className={SY.AuthName__input}
              Placeholder='First name'
              type='text'
              name='firstName'
              icon={<BsPen />}
              change={formData.firstName}
              setChange={setFormData}
              original={formData}
            />
            <InputField
              className={SY.AuthName__input}
              Placeholder='Last name'
              type='text'
              name='lastName'
              icon={<BsPen />}
              change={formData.lastName}
              setChange={setFormData}
              original={formData}
            />
          </div>
          <InputField
            Placeholder='Enter your email'
            icon={<BsPerson />}
            type='text'
            name='email'
            change={formData.email}
            setChange={setFormData}
            original={formData}
          />
          <InputField
            Placeholder='Enter your Username'
            icon={<BsPerson />}
            type='text'
            name='username'
            change={formData.username}
            setChange={setFormData}
            original={formData}
          />
          <InputField
            Placeholder='Phone number'
            icon={<BsTelephone />}
            type='text'
            name='phone'
            change={formData.phone}
            setChange={setFormData}
            original={formData}
          />
          <InputField
            Placeholder='Birth date'
            icon={<BsCalendar4Event />}
            type='date'
            name='birth'
            change={formData.birth}
            setChange={setFormData}
            original={formData}
          />
          <div className={SY.AuthName}>
            <Password
              Placeholder='Password'
              className={SY.AuthName__input}
              change={password.password}
              name='password'
              setChange={setPassword}
              original={password}
            />
            <Password
              Placeholder='Confirm'
              className={SY.AuthName__input}
              name='confirmPassword'
              change={password.confirmPassword}
              setChange={setPassword}
              original={password}
            />
          </div>
        </div>
        <input type='submit' value='Register' className={SY.btn}></input>
      </form>
    </AuthLayout>
  );
};

export default Register;
