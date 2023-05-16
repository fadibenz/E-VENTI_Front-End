import { FC, useState } from 'react';
import SY from './Password.module.scss';
import { RiKey2Line } from 'react-icons/ri';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

interface PasswordProps {
  Placeholder: string;
  className?: string;
  change: string;
  name: string;
  setChange: any;
  original: any;
}

const Password: FC<PasswordProps> = ({
  Placeholder,
  className,
  change,
  setChange,
  original,
  name
}) => {
  const [Eye, setEye] = useState<boolean>(false);
  return (
    <div className={`${SY.AuthField__item} ${className} `}>
      <input
        className={SY.InputField}
        placeholder={Placeholder}
        type={`${Eye ? 'text' : 'password'}`}
        value={change}
        name={name}
        onChange={(e) => setChange({ ...original, [e.target.name]: e.target.value })}
      ></input>
      <div className={SY.InputField__icon}>
        <RiKey2Line />
      </div>
      <button
        className={SY.InputField__password}
        onClick={() => {
          setEye(!Eye);
        }}
      >
        <BsEye className={`${SY.ShowEye} ${!Eye ? SY.HideEye : ''} `} />
        <BsEyeSlash className={`${SY.ShowEye} ${Eye ? SY.HideEye : ''} `} />
      </button>
    </div>
  );
};

export default Password;
