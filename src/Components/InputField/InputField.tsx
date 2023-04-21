import type { FC, ReactNode } from 'react';
import { IconType } from 'react-icons/lib';
import SY from './InputField.module.scss';
interface InputFieldProps {
  Placeholder: string;
  icon?: ReactNode;
  className?: string; 
  type: string;
}

const InputField: FC<InputFieldProps> = ({ Placeholder, icon, className, type }) => {
  return (
    <div className={`${SY.AuthField__item} ${className} `}>
      <input className={SY.InputField} placeholder={Placeholder} type={type}></input>
      <div className={SY.InputField__icon}>{icon}</div>
    </div>
  );
};

export default InputField;
