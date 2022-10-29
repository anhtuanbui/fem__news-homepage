import React, { Component } from 'react';
import main from '../../assets/images/image-web-3-desktop.jpg';
import mainMobile from '../../assets/images/image-web-3-mobile.jpg';
import './Intro.scss';
export class Intro extends Component {
    render() {
        return (
            <div className='intro'>
                <div className="intro-left">
                    <div className="intro-left__img">
                        <picture>
                            <source media="(max-width: 375px)" srcSet={mainMobile} />
                            <img src={main} alt="web 3 desktop" />
                        </picture>
                    </div>
                    <div className="intro-left__info">
                        <div className="intro-left__info--text">
                            <h1>The Bright Future of Web 3.0?</h1>
                        </div>
                        <div className="intro-left__info--info">
                            <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                                But is it really fulfilling its promise?</p>
                            <button>READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className="intro-right">
                    <h2>New</h2>
                    <div className="intro-right__cards">
                        <h3>Hydrogen VS Electric Cars</h3>
                        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                    </div>
                    <div className="intro-right__cards">
                        <h3>The Downsides of AI Artistry</h3>
                        <p>What are the possible adverse effects of on-demand AI image generation?</p>
                    </div>
                    <div className="intro-right__cards">
                        <h3>Is VC Funding Drying Up?</h3>
                        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default Intro;