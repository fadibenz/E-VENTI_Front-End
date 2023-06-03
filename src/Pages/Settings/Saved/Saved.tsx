import React, { FC, useEffect, useState } from 'react';
import SY from './Saved.module.scss';
import V from '../../../../public/Assets/Icons/Vshape.svg';
import Save from '../../../../public/Assets/Icons/Saved.svg';
import Arro from '../../../../public/Assets/Icons/Arrow.svg';
import Ticket from '../../../../public/Assets/Icons/Ticket.svg';
import mainPhoto from '../../../../public/Assets/Images/EventDetails/mainPhoto.jpg';
import { EventCard } from '../../../Components';
import v from '../../../../public/Assets/Icons/Triangle_down.svg';
import { Avatar } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { PSHFBtn } from '../../../Components/PSHFBtn/PSHFBtn';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { getSavedList } from '../../../Services/Subscriptions';
import { getEventDetails } from '../../../Services/Event';

interface SavedInterface {
  config: any;
}

const Saved: FC<SavedInterface> = ({ config }) => {
  useEffect(() => {
    const getSaved = async () => {
      try {
        const response = await getSavedList(config);
        setList(response);
        console.log(response);
        setCategList(response);
      } catch (error) {
        console.log(error);
      }
    };
    getSaved();
  }, []);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(1142));

  {
    /*hadi hiya list li thot fiha kolech ya3ni kamel les evenments li dayrlhom l user saved */
  }
  const [list, setList] = useState<any>([]);
  const [num, setNum] = useState(4);
  const [SeleCate, setSeleCate] = useState('');
  const [CategList, setCategList] = useState([]);
  const first_list: any = CategList?.slice(0, num);
  const [message, setMessage] = useState<String>('');

  const ShowCards = (num: number) => {
    for (let i = 1; i <= 4; i++) {
      if (num < CategList.length) {
        setNum((num) => num + 1);
      } else {
        setMessage((message) => 'No More Saved Events');
        break;
      }
    }
  };

  const [value, setValue] = React.useState(0); /*for the list of categories */

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 1:
        setCategList((CategList) =>
          list?.filter((element: any) => element?.categoryName === 'Sport')
        );
        break;
      case 2:
        setCategList((CategList) =>
          list?.filter((element: any) => element?.categoryName === 'Health')
        );
        break;
      case 3:
        setCategList((CategList) =>
          list?.filter((element: any) => element?.categoryName === 'Business')
        );
        break;
      case 4:
        setCategList((CategList) =>
          list?.filter((element: any) => element?.categoryName === 'Culture')
        );
        break;
      case 5:
        setCategList((CategList) =>
          list?.filter((element: any) => element?.categoryName === 'Music')
        );
        break;
      case 6:
        setCategList((CategList) =>
          list?.filter((element: any) => element?.categoryName === 'Historic')
        );
        break;
    }
  }; /*for the list of catigories*/
  return (
    <>
      <div className={SY.container}>
        <div className={SY.hostedheader}>
          {/*for the header container in mobile version */}
          <div className={SY.headerrect}></div>
          <img className={SY.headerticket} src={Ticket} />
          <div className={SY.headerwhiterect}>
            <img src={Arro} alt='' />
            <div className={SY.headerminicircle}>
              <img src={Save} alt='' />
            </div>
            <div className={SY.arrowTr}>
              <img src={Arro} alt='' />
            </div>
          </div>
          <p>Saved</p>
        </div>
        {/*for the hosted header mobile version*/}

        <div className={SY.title}>
          {' '}
          {/*for the phrase view or edit your events */}
          <p>View your saved events</p>
        </div>

        {/* <Box
          sx={{
            maxWidth: { xs: 320, sm: 480, md: 800 },
            bgcolor: 'background.paper',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant='scrollable'
            scrollButtons={true}
            aria-label='scrollable prevent tabs example'
            orientation={isSmallScreen ? 'horizontal' : 'vertical'}
            sx={{
              '& button': {
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: { md: '16px', xs: '12px' },
                lineHeight: '20px',
                color: 'black',
              },
            }}
          >
            <div className={SY.Categories}>
              <p>All Categories</p>
            </div>
            <Tab
              icon={''}
              iconPosition='start'
              label='Sport'
              sx={{ mb: isSmallScreen ? 0 : 5 }}
            />
            <Tab
              icon={''}
              iconPosition='start'
              label='Health'
              sx={{ mb: isSmallScreen ? 0 : 5 }}
            />
            <Tab
              icon={''}
              iconPosition='start'
              label='Business'
              sx={{ mb: isSmallScreen ? 0 : 5 }}
            />
            <Tab
              icon={''}
              iconPosition='start'
              label='Cultural'
              sx={{ mb: isSmallScreen ? 0 : 5 }}
            />
            <Tab
              icon={''}
              iconPosition='start'
              label='Music'
              sx={{ mb: isSmallScreen ? 0 : 5 }}
            />
            <Tab
              icon={''}
              iconPosition='start'
              label='Historic'
              sx={{ mb: isSmallScreen ? 0 : 5 }}
            />
          </Tabs>
        </Box> */}

        <div className={SY.cards}>
          {first_list?.map((card : any, index: number) => {
            return (
              <>
                <div className={SY.card} key={card.id}>
                  <div className={SY.headercard}>
                    <div className={SY.avatarName}>
                      <Avatar
                        alt={'Organizer name'}
                        src={card?.organizerProfilePicture}
                        sx={{
                          width: { xs: '30px', md: '50px' },
                          height: { xs: '30px', md: '50px' },
                        }}
                      />
                      <p>{card?.organizerName}</p>
                    </div>
                  </div>
                  <EventCard
                    img={card?.coverUrl}
                    location='location'
                    date={card?.dateAndTime}
                    title={card?.title}
                    category={card?.categoryName}
                    price={card?.price}
                    className={`${SY.CardDesk}`}
                    id={card?.id}
                  />
                </div>
              </>
            );
          })}

          {message !== '' ? (
            <p className={SY.NoMore}> {message}</p>
          ) : (
            <>
              <div className={SY.EventCTA}>
                {/* <button onClick={() => ShowCards(num)}>
                  <img className={SY.btnIcon} src={v} />
                  <div>
                    <p>View more</p>
                  </div>
                </button> */}
              </div>
              {/* <button onClick={() => ShowCards(num)} className={SY.vmbtn}>
                View more
              </button> */}
            </>
          )}
        </div>
        <div className={SY.titleDesk}>
          <p className={SY.rl}>View you Saved Events</p>
        </div>
      </div>
    </>
  );
};

export default Saved;
