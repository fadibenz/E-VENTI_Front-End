import React, { useState } from 'react';
import SY from './Saved.module.scss';
import V from '../../../../public/Assets/Icons/Vshape.svg' ;
import Save from  '../../../../public/Assets/Icons/Saved.svg';
import Arro from '../../../../public/Assets/Icons/Arrow.svg';
import Ticket from '../../../../public/Assets/Icons/Ticket.svg' ; 
import  mainPhoto from '../../../../public/Assets/Images/EventDetails/mainPhoto.jpg' ;
import { EventCard } from '../../../Components';
import v from '../../../../public/Assets/Icons/Triangle_down.svg' ;
import { Avatar, backdropClasses, dividerClasses, Stack } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {PSHFBtn} from '../../../Components/PSHFBtn/PSHFBtn';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { Theme } from '@mui/material/styles/createTheme';
import Navbar from '../../../Components/Navbar/Navbar' ; 


 const Saved = () => {
  const theme = useTheme<any>();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('1142')) ;

  const [list , setList] = useState([
    {id:1 , img:{mainPhoto} , location:'Oran'   , date:'11/11' , title:'Esi oran Event'   , category:'category' ,price: '50$'},
    {id:2 , img:{mainPhoto} , location:'Alger'  , date:'12/12' , title:'Esi alger Event'  , category:'category' ,price: 'Free'},
    {id:3 , img:{mainPhoto} , location:'Sba'    , date:'13/13' , title:'Esi Sba Event'    , category:'category' ,price: '800DA'},
    {id:4 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:'category' ,price: '62€'},
    {id:5 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:'category' ,price: '10da'},
    {id:6 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:'category' ,price: '67DA'},
    {id:7 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:'category' ,price: 'free'},
    {id:7 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:'category' ,price: 'free'},
    {id:7 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:'category' ,price: 'free'},
    {id:7 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:'category' ,price: 'free'},
    {id:7 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:'category' ,price: 'free'},
 ])
 const [num , setNum] = useState(4) ;
 const first_list = list.slice(0 , num) ;
 const [message , setMessage] = useState<String>('')  ;

 const ShowCards = (num: number) => {
  for (let i = 1; i <= 4; i++) {
    if (num < list.length) {
      setNum((num) => num + 1);
    } else {
      setMessage((message) => 'No More Saved Events') ; 
      break;
    }
  }
};

const [value, setValue] = React.useState(0); /*for the list of categories */
const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  setValue(newValue);
};/*for the list of catigories*/

  return (
   <>
    <div className={SY.MobileVersion}> {/*for the mobile version header*/}
       <p className={SY.MainTitle}>Settings</p>
       <button className={SY.wow}>
          <img src={V} alt="<" />
       </button>
    </div>
    {/* <div className={SY.navbar}>
    </div> */}
    <div className={SY.PSHFBtn}>
          {/*for the hosted header in md devices*/}
          <PSHFBtn />
    </div>

    
    <div className={SY.container}>
    <div className={SY.hostedheader}>{/*for the header container in mobile version */}
           <div className={SY.headerrect}>
           </div>
           <img className={SY.headerticket} src={Ticket}/>
           <div className={SY.headerwhiterect}>
             <img src={Arro} alt="" />
             <div className={SY.headerminicircle}>
                 <img src={Save} alt="" />     
             </div>
             <div className={SY.arrowTr}>
                 <img src={Arro} alt="" />  
             </div>
           </div>
           <p>Saved</p> 
       </div>{/*for the hosted header mobile version*/}

       <div className={SY.title}> {/*for the phrase view or edit your events */}
          <p>View your saved events</p>
       </div>

       <Box  sx = {{ maxWidth: { xs: 320, sm: 480 , md : 800}, bgcolor: 'background.paper'  }}
       >
       <Tabs
           value={value}
           onChange={handleChange}
           variant="scrollable"
           scrollButtons={true}
           aria-label="scrollable prevent tabs example"
           orientation={isSmallScreen ? 'horizontal' : 'vertical'}
           sx={{
            "& button" : {fontFamily : 'Montserrat',
                          fontStyle: 'normal',
                          fontWeight: '600' ,
                          fontSize: '12px'  ,
                          lineHeight: '15px', 
                          color: 'black',
                         } ,                 
           }}
       >  
          <div className={SY.Categories}>
            <p>All Categories</p>
          </div>
          <Tab icon={''} iconPosition="start" label="Sport"    sx={{mb: isSmallScreen ? 0 : 2 }}/>
          <Tab icon={''} iconPosition="start" label="Health"   sx={{mb: isSmallScreen ? 0 : 2 }}/>
          <Tab icon={''} iconPosition="start" label="Business" sx={{mb: isSmallScreen ? 0 : 2 }}/>
          <Tab icon={''} iconPosition="start" label="Cultural" sx={{mb: isSmallScreen ? 0 : 2 }}/>
          <Tab icon={''} iconPosition="start" label="Music"    sx={{mb: isSmallScreen ? 0 : 2 }}/>
          <Tab icon={''} iconPosition="start" label="Historic" sx={{mb: isSmallScreen ? 0 : 2 }}/>
      </Tabs>
    </Box>

      
    
       <div className={SY.cards}>
        
       {
       
         first_list.map((card , index) => {
             return(
                <> 
                   <div className={SY.card} key={card.id} >
                      <div className={SY.headercard}>
                           <div className={SY.avatarName}>
                             <Avatar 
                               alt={'Organizer name'}
                               src={''}
                               sx={{ width:{xs:'30px' ,md:'40px'}, height: {xs:'30px' , md:'40px'} }}
                             />
                             <p>Organizer</p>
                           </div>
                           <div className={SY.Date}>
                             <p>Added 12 min ago</p>
                           </div>
                       </div>
                    <EventCard img={mainPhoto} location={card.location} date={card.date} title={card.title} category={'category'} price ={card.price} className ={`${SY.CardDesk}`} id='12' />
                   </div>
                </>
             )
             
          })
          
       } 
       {(message !== '') ? <p className={SY.NoMore}> {message}</p> 
        :<>
        <div className={SY.EventCTA}>
        <button
               onClick={() => ShowCards(num )}
               
        >
            <img className={SY.btnIcon} src={v}/>
            <div><p >View more</p></div>
       </button>
       </div>
       <button
          onClick={() => ShowCards(num )}
          className = {SY.vmbtn}
       >
         View more
       </button>
       </>
       }

      
       
       </div>
       <div className={SY.titleDesk}>
           <p className={SY.rl}>View you Saved Events</p>
       </div>
       </div>
       

    
   </>
  )
}
 export default Saved