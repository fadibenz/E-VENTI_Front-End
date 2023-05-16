import type { FC, ReactNode } from 'react';
import { IconType } from 'react-icons/lib';
import SY from './InputField.module.scss';
interface InputFieldProps {
  Placeholder: string;
  icon?: ReactNode;
  className?: string;
  type: string;
  change: string;
  setChange: any;
  original: any;
  name:string;
}

const InputField: FC<InputFieldProps> = ({
  Placeholder,
  icon,
  className,
  type,
  change,
  setChange,
  original,
  name,
}) => {
  return (
    <div className={`${SY.AuthField__item} ${className} `}>
      <input
        className={SY.InputField}
        value={change}
        type={type}
        name={name}
        placeholder={Placeholder}
        onChange={(e) => {
          setChange({ ...original, [e.target.name]: e.target.value });
          console.log(change);
        }}
        required
      ></input>
      <div className={SY.InputField__icon}>{icon}</div>
    </div>
  );
};

export default InputField;
