import {Stack , Box ,Tabs, Tab, Avatar, useMediaQuery } from "@mui/material" ; 
import Navbar from '../../../Components/Navbar/Navbar' ; 
import  './Styles.css';
import { Margin } from '@mui/icons-material';
import V from '../../../../public/Assets/Icons/Vshape.svg' ;
import SY from './Following.module.scss'; 
import  mainPhoto from '../../../../public/Assets/Images/EventDetails/mainPhoto.jpg' ;
import { EventCard } from '../../../Components';
import { useState } from "react";
import Ticket from '../../../../public/Assets/Icons/Ticket.svg' ;
import FollowPlus from '../../../../public/Assets/Icons/FollowPlus.svg';
import Follow from '../../../../public/Assets/Icons/Follow.svg' ;
import { PSHFBtn } from "../../../Components/PSHFBtn/PSHFBtn";
import { useTheme } from '@mui/material/styles';
import { Theme } from '@mui/material/styles/createTheme';





const Following = () => {

  const theme = useTheme<any>();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('1142')) ;
  
  const [list , setList] = useState([
    {id:1 , img:{mainPhoto} , location:'Oran' , date:'11/11' , title:'Esi oran Event' , category:'category' , className:''    ,price: '50$'  },
    {id:2 , img:{mainPhoto} , location:'Alger' , date:'12/12' , title:'Esi alger Event' , category:'category' , className:''  ,price: 'Free' },
    {id:3 , img:{mainPhoto} , location:'Sba' , date:'13/13' , title:'Esi Sba Event' , category:'category' , className:''      ,price: '800DA'},
    {id:4 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:'category' , className:'',price: '62€'  },
    {id:5 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:'category' , className:'',price: '10da' },
    {id:6 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:'category' , className:'',price: '67DA' },
    {id:7 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:'category' , className:'',price: 'free' },
 ]) ;

  const [value, setValue] = useState(0); /*for the list of categories */
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };/*for the list of catigories*/ 


interface OrganizerAvatarProps{
  name : string ; 
  img : String ; 
}

  const OrganizeAvatar = ({name  , img }  : OrganizerAvatarProps ) =>{
    return (
      <>
      <div className={SY.AvatarOrg}>
         <Avatar
           alt = {`${name}`}
           src = {`${img}`}
         />
         <div>
             <p>{name}</p>
         </div> 
      </div>
      </>
    )
  }


  return (
    <>
    <div className={SY.MobileVersion}> {/*for the mobile version header*/}
       <p className={SY.MainTitle}>Settings</p>
       <button className={SY.wow}>
          <img src={V} alt="<" />
       </button>
    </div>
  
    <div className={SY.PSHFBtn}>
          {/*for the hosted header in md devices*/}
          <PSHFBtn />
    </div>

    <div className={SY.container}>
    <div className={SY.followingheader}>{/*for the header container in mobile version */}
           <div className={SY.headerrect}>
           </div>
           <img className={SY.headerticket} src={Ticket}/>
           <div className={SY.headerwhiterect}>
             <img src={FollowPlus} alt="" />
             <div className={SY.headerminicircle}>
                 <img src={Follow} alt="" />     
             </div>
           </div>
           <p>Following</p> 
       </div>{/*for the hosted header mobile version*/}
       <div>
          {/*for the categories*/}
       </div>
       <div className={SY.title}> {/*for the phrase view or edit your events */}
          <p>Stay up to date !</p>
       </div>

       <Box sx = {{ maxWidth: { xs: 320, sm: 480 , md : 800 }, bgcolor: 'background.paper' ,overflow: 'auto',}}>
       <Tabs
           orientation={isSmallScreen ? 'horizontal' : 'vertical'}
           value={value}
           onChange={handleChange}
           variant="scrollable"
           scrollButtons={true}
           aria-label="scrollable prevent tabs example"
           sx={{
            "& button" : {fontFamily : 'Montserrat',
                          fontStyle: 'normal',
                          fontWeight: '600' ,
                          fontSize: '9px'  ,
                          lineHeight: '11px', 
                          letterSpacing: '0.2em',
                          color : 'black',
                         } , 
             "@media (min-width: 1142px)": {
                "& button": {
                    marginRight: '16px',
                },
              },
              maxHeight: 'calc(100vh - 250px)' 
              }}
               
           
       >  
         
          <Tab icon={''} iconPosition="start" label={<OrganizeAvatar name={'Organizer'} img={''}/>} />
          <Tab icon={''} iconPosition="start" label={<OrganizeAvatar name={'Organizer'} img={''}/>} />
          <Tab icon={''} iconPosition="start" label={<OrganizeAvatar name={'Organizer'} img={''}/>} />
          <Tab icon={''} iconPosition="start" label={<OrganizeAvatar name={'Organizer'} img={''}/>} />
          <Tab icon={''} iconPosition="start" label={<OrganizeAvatar name={'Organizer'} img={''}/>} />
          <Tab icon={''} iconPosition="start" label={<OrganizeAvatar name={'Organizer'} img={''}/>} />
          <Tab icon={''} iconPosition="start" label={<OrganizeAvatar name={'Organizer'} img={''}/>} />
          <Tab icon={''} iconPosition="start" label={<OrganizeAvatar name={'Organizer'} img={''}/>} />
          <Tab icon={''} iconPosition="start" label={<OrganizeAvatar name={'Organizer'} img={''}/>} />
          <Tab icon={''} iconPosition="start" label={<OrganizeAvatar name={'Organizer'} img={''}/>} />
          <Tab icon={''} iconPosition="start" label={<OrganizeAvatar name={'Organizer'} img={''}/>} />
          <Tab icon={''} iconPosition="start" label={<OrganizeAvatar name={'Organizer'} img={''}/>} />
          <Tab icon={''} iconPosition="start" label={<OrganizeAvatar name={'Organizer'} img={''}/>} />
          <Tab icon={''} iconPosition="start" label={<OrganizeAvatar name={'Organizer'} img={''}/>} />
      </Tabs>
    </Box>

      

       <div className={SY.cards}>
        
       {
       
         list.map((card , index) => {
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
                      <EventCard img={mainPhoto} location={card.location} date={card.date} title={card.title} category={'category'} price ={card.price} className ={`${SY.CardDesk}`} id="12" />
                   </div>
                </>
             )
             
          })
          
       }       
       </div>
       <div className={SY.titleDesk}>
           <p className={SY.rl}>Stay up to date !</p>
       </div>

    </div> 


    </>
  );
};

export default Following;
