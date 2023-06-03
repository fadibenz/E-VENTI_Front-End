import { Stack, Box, Tabs, Tab, Avatar, useMediaQuery } from '@mui/material';
import Navbar from '../../../Components/Navbar/Navbar';
import './Styles.css';
import { Margin } from '@mui/icons-material';
import V from '../../../../public/Assets/Icons/Vshape.svg';
import SY from './Following.module.scss';
import mainPhoto from '../../../../public/Assets/Images/EventDetails/mainPhoto.jpg';
import { EventCard } from '../../../Components';
import { useState, useEffect, FC } from 'react';
import Ticket from '../../../../public/Assets/Icons/Ticket.svg';
import FollowPlus from '../../../../public/Assets/Icons/FollowPlus.svg';
import Follow from '../../../../public/Assets/Icons/Follow.svg';
import { PSHFBtn } from '../../../Components/PSHFBtn/PSHFBtn';
import { useTheme } from '@mui/material/styles';
import { Theme } from '@mui/material/styles/createTheme';
import { getFollowingList } from '../../../Services/Users';
import { organizedEventList } from '../../../Services/Subscriptions';

interface FollowingInterface {
  user: any;
  config: any;
}

const Following: FC<FollowingInterface> = ({ user, config }) => {
  useEffect(() => {
    const getFollowing = async () => {
      try {
        const response = await getFollowingList(user, config);
        console.log('Organizer', response);
        setOrganizer(response);
      } catch (error) {}
    };
    getFollowing();
  }, [user]);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1142));
  const [organizer, setOrganizer] = useState<any>();
  const [list, setList] = useState<any>([]);

  const [value, setValue] = useState(0); /*for the list of categories */
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }; /*for the list of catigories*/

  interface OrganizerAvatarProps {
    name: string;
    img: string;
    id: string;
  }

  const handleClick = async (id: string) => {
    try {
      console.log(id)
      const response = await organizedEventList(id, config);
      console.log("LOOOOOOK", response)
      setList(response);
    } catch (error) {
      console.log(error)
    }
  };

  const OrganizeAvatar = ({ name, img, id }: OrganizerAvatarProps) => {
    return (
      <>
        <button onClick={() => handleClick(id)} className={SY.AvatarOrg}>
          <Avatar alt={`${name}`} src={`${img}`} />
          <div>
            <p>{name}</p>
          </div>
        </button>
      </>
    );
  };

  return (
    <>
      <div className={SY.container}>
        <div className={SY.followingheader}>
          {/*for the header container in mobile version */}
          <div className={SY.headerrect}></div>
          <img className={SY.headerticket} src={Ticket} />
          <div className={SY.headerwhiterect}>
            <img src={FollowPlus} alt='' />
            <div className={SY.headerminicircle}>
              <img src={Follow} alt='' />
            </div>
          </div>
          <p>Following</p>
        </div>
        {/*for the hosted header mobile version*/}
        <div>{/*for the categories*/}</div>
        <div className={SY.title}>
          {' '}
          {/*for the phrase view or edit your events */}
          <p>Stay up to date !</p>
        </div>

        <Box
          sx={{
            maxWidth: { xs: 320, sm: 480, md: 800 },
            bgcolor: 'background.paper',
            overflow: 'auto',
          }}
        >
          <Tabs
            orientation={isSmallScreen ? 'horizontal' : 'vertical'}
            value={value}
            onChange={handleChange}
            variant='scrollable'
            scrollButtons={true}
            aria-label='scrollable prevent tabs example'
            sx={{
              '& button': {
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '9px',
                lineHeight: '11px',
                letterSpacing: '0.2em',
                color: 'black',
              },
              '@media (min-width: 1142px)': {
                '& button': {
                  marginRight: '16px',
                },
              },
              maxHeight: 'calc(100vh - 250px)',
            }}
          >
            {organizer?.map((obj: any) => {
              return (
                <Tab
                  icon={''}
                  iconPosition='start'
                  label={
                    <OrganizeAvatar
                      name={obj?.userName}
                      img={obj?.profilePictureUrl}
                      id={obj?.id}
                    />
                  }
                />
              );
            })}
          </Tabs>
        </Box>

        <div className={SY.cards}>
          {list?.map((card: any, index: number) => {
            return (
              <>
                <div className={SY.card} key={card.id}>
                  {/* <div className={SY.headercard}>
                    <div className={SY.avatarName}>
                      <Avatar
                        alt={'Organizer name'}
                        src={''}
                        sx={{
                          width: { xs: '30px', md: '40px' },
                          height: { xs: '30px', md: '40px' },
                        }}
                      />
                      <p>Organizer</p>
                    </div>
                    <div className={SY.Date}>
                      <p>Added 12 min ago</p>
                    </div>
                  </div> */}
                  <EventCard
                    img={card?.coverUrl}
                    location='Location'
                    date={card?.dateAndTime}
                    title={card?.title}
                    category={'category'}
                    price={card?.price}
                    className={`${SY.CardDesk}`}
                    id={card?.id}
                  />
                </div>
              </>
            );
          })}
        </div>
        <div className={SY.titleDesk}>
          <p className={SY.rl}>Stay up to date !</p>
        </div>
      </div>
    </>
  );
};

export default Following;
