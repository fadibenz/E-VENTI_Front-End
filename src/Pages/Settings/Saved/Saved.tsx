import React, { useEffect, useState } from 'react';
import SY from './Saved.module.scss';
import V from '../../../../public/Assets/Icons/Vshape.svg' ;
import Save from  '../../../../public/Assets/Icons/Saved.svg';
import Arro from '../../../../public/Assets/Icons/Arrow.svg';
import Ticket from '../../../../public/Assets/Icons/Ticket.svg' ; 
import  mainPhoto from '../../../../public/Assets/Images/EventDetails/mainPhoto.jpg' ;
import { EventCard } from '../../../Components';
import v from '../../../../public/Assets/Icons/Triangle_down.svg' ;
import { Avatar} from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {PSHFBtn} from '../../../Components/PSHFBtn/PSHFBtn';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';







export const Saved = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('1142')) ;

  const [list , setList] = useState([
    {id:1 , img:{mainPhoto} , location:'Oran'   , date:'11/11' , title:'Esi oran Event'   , category:"Sport" ,price: '50$'},
    {id:2 , img:{mainPhoto} , location:'Alger'  , date:'12/12' , title:'Esi alger Event'  , category:"Health" ,price: 'Free'},
    {id:3 , img:{mainPhoto} , location:'Sba'    , date:'13/13' , title:'Esi Sba Event'    , category:"Business" ,price: '800DA'},
    {id:4 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:"Cultural" ,price: '62€'},
    {id:5 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:"Music" ,price: '10da'},
    {id:6 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:"Historic" ,price: '67DA'},
    {id:7 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:"Sport" ,price: 'free'},
    {id:8 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:"Health" ,price: 'free'},
    {id:9 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:"Business" ,price: 'free'},
    {id:10 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:"Cultural" ,price: 'free'},
    {id:11 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:"Music" ,price: 'free'},
    {id:12 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:"Historic" ,price: 'free'},
    {id:13 , img:{mainPhoto} , location:'Oran'   , date:'11/11' , title:'Esi oran Event'   , category:"Sport" ,price: '50$'},
    {id:14 , img:{mainPhoto} , location:'Alger'  , date:'12/12' , title:'Esi alger Event'  , category:"Health" ,price: 'Free'},
    {id:15 , img:{mainPhoto} , location:'Sba'    , date:'13/13' , title:'Esi Sba Event'    , category:"Business" ,price: '800DA'},
    {id:16 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:"Cultural" ,price: '62€'},
    {id:17 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:"Music" ,price: '10da'},
    {id:18 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:"Historic" ,price: '67DA'},
    {id:19 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:"Sport" ,price: 'free'},
    {id:20 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:"Health" ,price: 'free'},
    {id:21 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:"Business" ,price: 'free'},
    {id:22 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:"Cultural" ,price: 'free'},
    {id:23 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:"Music" ,price: 'free'},
    {id:24 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:"Historic" ,price: 'free'},
    {id:25 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:"Music" ,price: '10da'},
    {id:26 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:"Historic" ,price: '67DA'},
    {id:27 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:"Sport" ,price: 'free'},
    {id:28 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:"Health" ,price: 'free'},
    {id:29 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:"Business" ,price: 'free'},
    
 ])
 const [num , setNum] = useState(4) ;
 const [SeleCate , setSeleCate] = useState('') ;
 const [CategList , setCategList] = useState([...list]) ; 
 const first_list = CategList.slice(0 , num) ;
 const [message , setMessage] = useState<String>('')  ;


 const ShowCards = (num: number) => {
  for (let i = 1; i <= 4; i++) {
    if (num < CategList.length) {
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
  switch(newValue) {
    case 1 :
      setCategList(CategList => list.filter((element) => element.category === "Sport")) 
    break ;
    case 2 :
      setCategList(CategList => list.filter((element) => element.category === "Health")) 
    break ;
    case 3 :
      setCategList(CategList => list.filter((element) => element.category === "Business")) 
    break ;
    case 4 :
      setCategList(CategList => list.filter((element) => element.category === "Cultural")) 
    break ;
    case 5 :
      setCategList(CategList => list.filter((element) => element.category === "Music")) 
    break ;
    case 6 :
      setCategList(CategList => list.filter((element) => element.category === "Historic")) 
    break ;
  }

};/*for the list of catigories*/



  return (
   <>
    

    
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
                          fontSize:{md :'16px' , xs : "12px"}  ,
                          lineHeight: '20px', 
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
                    <EventCard img={mainPhoto} location={card.location} date={card.date} title={card.title} category={card.category} price ={card.price} className ={`${SY.CardDesk}`} />
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
