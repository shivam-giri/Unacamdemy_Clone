import React, { Fragment } from 'react';
import "./headerStyle.css";

const HeaderComponent = () => {
    return (
        <Fragment>
   
        <section id="headerBlock">
            <article>
                <nav>
                    <div className = "logoBlock">
                        <img src="download.svg" alt="logo"  />
                    l</div>
                    
                        <div className="menuBlock">
                            <ul>
                                <li>
                                    <a href="#">Login</a>
                                </li>
                            </ul>
                        </div>
                    
                </nav>
            </article>
        </section>            

        </Fragment>
    );
};

export default HeaderComponent;
