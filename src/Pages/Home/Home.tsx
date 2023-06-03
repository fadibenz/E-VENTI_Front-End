import React, { FC, useEffect } from 'react' ; 
import { EventCard, Navbar } from '../../Components';
import { useState } from 'react';
import SY from './Home.module.scss' ; 
import Border from '../../../public/Assets/Icons/Border.svg';
import Borderr from '../../../public/Assets/Icons/Borderr.svg';
import CodeBar from '../../../public/Assets/Icons/CodeBar.svg' ;
import Blend from '../../../public/Assets/Icons/Blend.svg'
import { Avatar } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import mainPhoto from '../../../public/Assets/Images/EventDetails/mainPhoto.jpg';
import Footer from '../../Components/Footer/Footer' ; 
import Points from '../../../public/Assets/Icons/Poinst.svg' ;
import { getEventList, getCategoryList } from '../../Services/Event';
interface HomeProps {
user: any;
token: any;
config: any;  

}
export const Home: FC<HomeProps> = ({user, token, config}) => {

const text = "E-VENTI*E-VENTI*E-VENTI" ; 

const [list, setList] = useState<any>([
]);
const [categ, setCateg] = useState([]);
const [CategList, setCategList] = useState([]);
const [value, setValue] = React.useState(1); /*for the list of categories */
const first_list: any = CategList?.slice(0);

useEffect(() =>{
  const getEvents = async () => {
    try {
      const response = await getEventList(config);
      setList(response)
     } catch (error) {
      
    }
  }
  getEvents();
  const getList = async () => {
    try {
      const response = await getCategoryList(config);
      console.log(response);
      setCateg(response);
    } catch (error) {}
  };
  getList();
}, [user]);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0: 
        setCategList((CategList) => 
           list 
        );
        break;
      case 1:
        setCategList((CategList) =>
          list?.filter((element: any) => element?.categoryName === 'Sports')
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
  };


  return (
    <>
      <div className={SY.container}>
        <div className={SY.header}>
          {/*for the home header*/}
          <div> {/*the search bar only for small devices */}</div>
          <div className={SY.FirstRow}>
            {/*first row  */}
            <div className={SY.circle}>
              <div className={SY.text}>
                {text.split('').map((char, i) => (
                  <span style={{ transform: `rotate(${i * 8.3}deg)` }}>
                    {char}
                  </span>
                ))}
              </div>
            </div>
            <div className={SY.TextCard}>
              <div className={SY.Text}>
                <p>Highlighted</p>
                <p>Event </p>
              </div>
              <div className={SY.Card}>
                <div className={SY.border}>
                  <div className={SY.city}>
                    <p>Tlemcen</p>
                  </div>
                  <div className={SY.date}>
                    <p>18/06/2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={SY.MiddleRow}>
            {/*middel row */}
            <div className={SY.card}>
              <div className={SY.title}>
                <p className={SY.category}>Culture</p>
                <p className={SY.titre}>Islamic Calligraphy Workshop</p>
              </div>
              <div className={SY.time}>
                <div className={SY.remaining}>
                  <div className={SY.rt}>
                    <p>Remaining Time</p>
                  </div>
                  <div className={SY.xy}>
                    <p>15 days, 6 hours and 10 minutes</p>
                  </div>
                </div>
                <div className={SY.going}>
                  <p className={SY.phrase}>Going</p>
                  <p className={SY.num}>3/20</p>
                </div>
              </div>
            </div>
          </div>
          <div className={SY.LastRow}>
            {/*last row */}
            <p>
              Description of the event that I’m not going to bother myself with
              right now. This is just a wireframe after all. So how does it look
              so far? i think it looks okay... I took me a while but i finally
              made something that’s easy on the eyes.
            </p>
          </div>
        </div>

        <div className={SY.content}>
          <div className={SY.atn}>
            <button className={SY.all}>All</button>
            <button className={SY.top}>Top</button>
            <button className={SY.top}>New</button>
          </div>
          <div className={SY.blend}>
            <img src={Blend} />
          </div>

          <Box
            sx={{
              MarginTop: '100px',
              maxWidth: { xs: '100%', sm: '100%', md: '100%' },
              bgcolor: 'none',
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              variant='scrollable'
              scrollButtons={true}
              aria-label='scrollable prevent tabs example'
              orientation={'horizontal'}
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
              <Tab
                icon={''}
                iconPosition='start'
                label='All Categories'
                sx={{ mb: 0 }}
              />
              {categ?.map((category: string) => {
                return (
                  <Tab
                    icon={''}
                    iconPosition='start'
                    label={category.name}
                    sx={{ mb: 0 }}
                  />
                );
              })}
            </Tabs>
          </Box>

          <div className={SY.cards}>
            {first_list?.map((card: any, index: number) => {
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
                      <div className={SY.Date}>
                        <p>Added 12 min ago</p>
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
          </div>
        </div>

        <div className={SY.footer}>
          <div className={SY.first}>
            <div className={SY.triangle}></div>
            <div className={SY.phrase}>
              <p>Why book</p>
              <p>on</p>
              <p>E-VENTI</p>
            </div>
            <div className={SY.mid}>
              <p>
                We need the grades and our teacher is very hard to impress.
                We’re doing our best...
              </p>
            </div>
          </div>
          <div className={SY.last}></div>
        </div>
      </div>
    </>
  );
}
