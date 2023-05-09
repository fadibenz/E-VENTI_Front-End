import {useRef, useState} from 'react';
import './Styles.css' ;
import { EventCard } from '../../../Components';
import  mainPhoto from '../../../../public/Assets/Images/EventDetails/mainPhoto.jpg' ;
import DelIcon from '../../../../public/Assets/Icons/Delete.svg';
import EditIcon from '../../../../public/Assets/Icons/Edit.svg';
import { ModelBox } from './ModelBox';
import V from '../../../../public/Assets/Icons/Vshape.svg' ;
import Hosedheadericon from  '../../../../public/Assets/Icons/Hosed-header-icon.svg'; 
import Hostedrecs from '../../../../public/Assets/Icons/Rec-hosted.svg'
import Ticket from '../../../../public/Assets/Icons/Ticket.svg' ; 




interface Event {
   id: number;
   img: { mainPhoto: string };
   location: string;
   date: string;
   title: string;
   category: string;
   className: string;
   price: string;
   ispop: boolean;
 }

const Hosted = () => {
   const [list , setList] = useState<Event[]>([
      {id:1 , img:{mainPhoto} , location:'Oran' , date:'11/11' , title:'Esi oran Event' , category:'category' , className:''    ,price: '50$', ispop : false},
      {id:2 , img:{mainPhoto} , location:'Alger' , date:'12/12' , title:'Esi alger Event' , category:'category' , className:''  ,price: 'Free',ispop : false},
      {id:3 , img:{mainPhoto} , location:'Sba' , date:'13/13' , title:'Esi Sba Event' , category:'category' , className:''      ,price: '800DA', ispop : false},
      {id:4 , img:{mainPhoto} , location:'Bijaya' , date:'14/14' , title:'Esi bijaya Event' , category:'category' , className:'',price: '62€', ispop : false},
   ])



   const handleRemoveItem = (id: number) => {
      const updatedList = list.filter((item) => item.id !== id);
      setList(updatedList);
    };
 
{/*
   


  
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
 
*/}
function handlePop(ind: number, boolvalue: boolean) {
   const newList = list.map((card, index) => {
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
   
    <div className='MobileVersion'> {/*for the mobile version header*/}
      <p className='MainTitle'>Settings</p>
        <button className='wow'>
         <img src={V} alt="<" />
        </button>
    </div>
    <div>{/*for the desktop header*/}
    
    </div>
    <div className='container'> {/*For all the page*/}
       <div className='hosted-header'>{/*for the header container in mobile version */}
           <div className='header-rect'>
                <img src={Hostedrecs} alt="" /> 
           </div>
           <img className='header-ticket' src={Ticket}/>
           <div className='header-white-rect'>
           <img src={Hostedrecs} alt="" />
              <div className='header-mini-circle'>
                     <img src={Hosedheadericon} alt="" />     
              </div>
           </div>
           <p>Hosted</p> 
       </div>{/*for the hosted header mobile version*/}
       <div className='title'> {/*for the phrase view or edit your events */}
          <p>View or edit your events</p>
       </div>
       
       <div className='cards'>
       {
         list.map((card , index) => {
             return(
                <>
                   
                   <div className='card'  >
                    <EventCard img={mainPhoto} location={card.location} date={card.date} title={card.title} category={'category'} price ={card.price} className ={''} />
                      <div className='EventCTA'>
                          <button className='Edit-color'>
                             <img className='btnIcon' src={EditIcon}/>
                             <div><p>Edit</p></div>
                          </button>
                          <button className='Del-color'
                                  onClick={() => handlePop(index , !card.ispop) } 

                          >
                             <img className='btnIcon' src={DelIcon}/>
                             <div><p>Delete</p></div>
                          </button>
                      </div>  
                   </div>
                 
                   
                   <ModelBox pop={card.ispop}  handleRemoveItem={handleRemoveItem} ind = {card.id}  handlePop={handlePop} index={index} />
                   
                </>
             )
             
          })
       }

           
       </div>
     
 
    </div>


    </>
  )
}
export default Hosted ;
