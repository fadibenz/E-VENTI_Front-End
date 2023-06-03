import { FC, useEffect, useState } from 'react';
import SY from './Profile.module.scss';
import { InputField } from '../../../Components';
import { updateUser } from '../../../Services/Users';
interface ProfileProps {
  config: any;
  user: any;
}

const Profile: FC<ProfileProps> = ({ user, config }) => {
  const [data, setData] = useState<any>({
    bio: '',
    firstname: '',
    lastname: '',
    username: '',
  });

  useEffect(() => {
    setData({
      bio: user?.biography,
      firstname: user?.firstName,
      lastname: user?.lastName,
      username: user?.userName,
    });
  }, [user]);
  const handleSubmit =async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('UserName', data?.username );
    formData.append('FirstName', data?.firstname);
    formData.append('LastName', data?.Lastname);
    formData.append('Biography', data?.biography);
    try {
      const response = await updateUser(config, formData);
      console.log(response);
    } catch (error) {
      
    }
  }
  return (
    <div className={SY.container}>
        <main className={SY.Main}>
      <form onSubmit={handleSubmit}>
          <div>
            <h3>Bio</h3>
            <textarea placeholder='Bio' cols='30' rows='3'></textarea>
          </div>
          <div>
            <h3>Firstname</h3>
            <InputField
              type='text'
              Placeholder='Firstname'
              className={SY.Input}
              change={data?.firstname}
              setChange={setData}
              original={user}
              name='firstname'
            />
          </div>
          <div>
            <h3>Lastname</h3>
            <InputField
              type='text'
              Placeholder='Lastname'
              className={SY.Input}
              change={data?.lastname}
              setChange={setData}
              original={user}
              name='lastname'
            />
          </div>
          <div>
            <h3>username</h3>
            <InputField
              type='text'
              Placeholder='username'
              className={SY.Input}
              change={data?.username}
              setChange={setData}
              original={user}
              name='username'
            />
          </div>
          <input type='submit' value='Save Changes' className={SY.btn} />
      </form>
        </main>
      <div className={SY.titleDesk}>
        <p className={SY.rl}>view or edit your information</p>
      </div>
    </div>
  );
};

export default Profile;
