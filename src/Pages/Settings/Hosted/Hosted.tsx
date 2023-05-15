import { useRef, useState, useEffect, FC } from 'react';
import './Styles.css';
import { EventCard, Navbar } from '../../../Components';
import mainPhoto from '../../../../public/Assets/Images/EventDetails/mainPhoto.jpg';
import DelIcon from '../../../../public/Assets/Icons/Delete.svg';
import EditIcon from '../../../../public/Assets/Icons/Edit.svg';
import { ModelBox } from './ModelBox';
import V from '../../../../public/Assets/Icons/Vshape.svg';
import Hosedheadericon from '../../../../public/Assets/Icons/Hosed-header-icon.svg';
import Hostedrecs from '../../../../public/Assets/Icons/Rec-hosted.svg';
import Ticket from '../../../../public/Assets/Icons/Ticket.svg';
import './Styles.css';
import { PSHFBtn } from '../../../Components/PSHFBtn/PSHFBtn';
import { Avatar } from '@mui/material';
import { organizedEventList } from '../../../Services/Subscriptions';
import { cancelEvent } from '../../../Services/Event';

// interface Event {
//    id: number;
//    img: { mainPhoto: string };
//    location: string;
//    date: string;
//    title: string;
//    category: string;
//    className: string;
//    price: string;
//    ispop: boolean;
//  }

interface HostedInterface {
  user: any;
  config: any;
}

const Hosted: FC<HostedInterface> = ({ user, config }) => {
  useEffect(() => {
    const getHosted = async () => {
      const response = await organizedEventList(
        'efdbd51f-8ef0-40dd-b27f-6cf6df0d16a5',
        config
      );
      console.log(response);
      const newArray = response.map((obj: any) => {
        return {
          ...obj,
          ispop: false,
        };
      });
      setList(newArray);
    };
    getHosted();
  }, [user]);

  const [list, setList] = useState<any>([]);

  const handleRemoveItem = async (id: string) => {
    console.log(id);
    console.log(config)
    try {
      const response = await cancelEvent(id, config);
      const updatedList = list.filter((item: any) => item?.id !== id);
      setList(updatedList);
    } catch (error) {
      console.log(error)
    }
  };

  {
    /*
  const [choice , setChoice] = useState() ;
  const UserChoice = (YesOrNo) => {
     setChoice(YesOrNo) ; 
  } 



  function handelDelete( id , ind ){
     UserChoice(choice) ; 
     if (choice){
        const newList = list.filter((l) => l.id !== id);
        setList(newList);
     }else {
        handlePop(ind , false) ;
     }
     
  }
 
*/
  }
  function handlePop(ind: number, boolvalue: boolean) {
    const newList = list.map((card: any, index: number) => {
      if (index === ind) {
        return { ...card, ispop: boolvalue };
      } else {
        return card;
      }
    });
    setList(newList);
  }

  return (
    <>
      <div className='container'>
        {' '}
        {/*For all the page*/}
        <div className='hostedheader'>
          {/*for the header container in mobile version */}
          <div className='header-rect'>
            <img src={Hostedrecs} alt='' />
          </div>
          <img className='header-ticket' src={Ticket} />
          <div className='header-white-rect'>
            <img src={Hostedrecs} alt='' />
            <div className='header-mini-circle'>
              <img src={Hosedheadericon} alt='' />
            </div>
          </div>
          <p>Hosted</p>
        </div>
        {/*for the hosted header mobile version*/}
        <div className='title'>
          {' '}
          {/*for the phrase view or edit your events */}
          <p>View or edit your events</p>
        </div>
        <div className='cards'>
          {list.map((card: any, index: number) => {
            return (
              <>
                <div className='card'>
                  {/* <div className='headercard'>
                    <div className='avatarName'>
                      <Avatar
                        alt={'Organizer name'}
                        src={''}
                        sx={{
                          width: { xs: '30px', md: '40px' },
                          height: { xs: '30px', md: '40px' },
                        }}
                      />
                      <p>{}</p>
                    </div>
                    <div className='Date'>
                      <p>Added 12 min ago</p>
                    </div>
                  </div> */}
                  <EventCard
                    img={card?.coverUrl}
                    location='location'
                    date={card?.dateAndTime}
                    title={card?.title}
                    category={card?.categoryName}
                    price={card?.price}
                    className='CardDesk'
                    id={card?.id}
                  />
                  <div className='EventCTA'>
                    <button className='Edit-color'>
                      <img className='btnIcon' src={EditIcon} />
                      <div>
                        <p>Edit</p>
                      </div>
                    </button>
                    <button
                      className='Del-color'
                      onClick={() => handlePop(index, !card.ispop)}
                    >
                      <img className='btnIcon' src={DelIcon} />
                      <div>
                        <p>Delete</p>
                      </div>
                    </button>
                  </div>
                  <ModelBox
                    pop={card.ispop}
                    handleRemoveItem={handleRemoveItem}
                    ind={card?.id}
                    handlePop={handlePop}
                    index={index}
                  />
                </div>
              </>
            );
          })}
        </div>
        <div className='titleDesk'>
          <p className='rl'>View or edit your events</p>
        </div>
      </div>
    </>
  );
};
export default Hosted;
