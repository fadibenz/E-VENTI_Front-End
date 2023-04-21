import { FC, useState } from 'react';
import SY from './Register.module.scss';
import { BsPerson, BsTelephone, BsCalendar4Event, BsPen } from 'react-icons/bs';
import { AuthLayout, InputField, Password } from '../../Components/index';
interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
  return (
    <AuthLayout Pagetitle='Hello there' CTA='Register' className={SY.Register}>
      <div className={SY.AuthField}>
        <div className={SY.AuthName}>
          <InputField
            className={SY.AuthName__input}
            Placeholder='First name'
            type='text'
            icon={<BsPen />}
          />
          <InputField
            className={SY.AuthName__input}
            Placeholder='Last name'
            type='text'
            icon={<BsPen />}
          />
        </div>
        <InputField
          Placeholder='Enter your email'
          icon={<BsPerson />}
          type='text'
        />
        <InputField
          Placeholder='Phone number'
          icon={<BsTelephone />}
          type='text'
        />
        <InputField
          Placeholder='Birth date'
          icon={<BsCalendar4Event />}
          type='date'
        />
        <div className={SY.AuthName}>
          <Password Placeholder='Password' className={SY.AuthName__input} />
          <Password Placeholder='Confirm' className={SY.AuthName__input} />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
