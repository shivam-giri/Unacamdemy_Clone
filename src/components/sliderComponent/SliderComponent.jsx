import React, { Fragment } from 'react'
import "./SliderStyle.css";
import LeftSideContent from './LeftSideContent';
import RightSideContent from "./RightSideContent";

function SliderComponenet() {
    return (
    <Fragment>
        <section id="sliderBlock">
            <article>
             <video loop autoPlay="true">
               <source src = "intro.webm" />
            </video>
           
           <section id="contentSection">
               <div className="leftBlock">
                   <LeftSideContent />
               </div>
              
               <div className="rightBlock">
                   <RightSideContent />
               </div>
           </section>
            </article>
        </section>            
    </Fragment>
    )
}

export default SliderComponenet;