import React, { useContext } from 'react'
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

import LeftArrowIcon from '../assets/icons/left-arrow.png'
import RightArrowIcon from '../assets/icons/right-arrow.png'




function HorizontalScrollbar({data,bodyPart,setBodyPart}) {


    const Leftarrow=()=>{
        const {scrollPrev}=useContext(VisibilityContext)

        return (
            <div onClick={() => scrollPrev()} className="right-arrow">
              <img src={LeftArrowIcon} alt="right-arrow" />
            </div>
          );
        };
        
        const RightArrow = () => {
          const { scrollNext } = useContext(VisibilityContext);
        
          return (
            <div onClick={() => scrollNext()} className="left-arrow">
              <img src={RightArrowIcon} alt="right-arrow" />
            </div>
          );
        };
        
        

    
  return (
        <ScrollMenu LeftArrow={Leftarrow} RightArrow={RightArrow}>
       {data.map((item)=>(
       <div  
       key={item.id || item}
       itemID={item.id || item}
       title={item.id || item}
       
       >
        <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}> </BodyPart>
       

       </div>
       ))}
       </ScrollMenu>
  ) 
  
}

export default HorizontalScrollbar