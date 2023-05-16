import React from 'react';
import { useState } from 'react';
import YesIcon from '../../../../public/Assets/Icons/Yes.svg';
import NoIcon from '../../../../public/Assets/Icons/No.svg';




interface ModelBoxProps{
  pop : boolean ;
  handleRemoveItem : (id : string) => void ; 
  ind : string ;
  handlePop : (ind : number , boolvalue : boolean ) => void ;
  index : number ;  
}
export const ModelBox = ({pop , handleRemoveItem , ind , handlePop , index } : ModelBoxProps) => {
  return (pop)? (
    <>
      <div className='SurContainer'    
      >
          <div className='triangle'>
          </div>
          <div className='SurHeader'>
              <p>Are you sure</p>
          </div>
          <div className='SurContent'>
              <div>
                 <p>This action can't be undone</p>
              </div>
              <div>
              <div className='EventCTA'>
                   <button className='Yes-color'
                      onClick={
                        () => handleRemoveItem(ind)
                      }   
                            
                   >
                      <img className='btnIcon' src={YesIcon}/>
                      <div><p>Yes</p></div>
                   </button>
                   <button className='No-color'
                      onClick={
                        () => {handlePop(index , false)}
                      }
                    >
                     <img className='btnIcon' src={NoIcon}/>
                      <div><p>No</p></div>
                   </button>
              </div>  
              </div>
          </div>
      </div>
    </>
  ): null ;
}
