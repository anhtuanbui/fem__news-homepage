import React, { Component } from 'react';
import retro from '../../assets/images/image-retro-pcs.jpg';
import laptop from '../../assets/images/image-top-laptops.jpg';
import gaming from '../../assets/images/image-gaming-growth.jpg';
import './TopArticles.scss';

export default class TopArticles extends Component {

    render() {
        return (
            <div className='top-articles'>
                <div className="top-articles__cards">
                    <div className="top-articles__cards--img">
                        <img src={retro} alt="top articles img" />
                    </div>
                    <div className="top-articles__cards--info">
                        <h2>01</h2>
                        <h3>Reviving Retro PCs</h3>
                        <p>What happens when old PCs are given modern upgrades?</p>
                    </div>
                </div>
                <div className="top-articles__cards">
                    <div className="top-articles__cards--img">
                        <img src={laptop} alt="top articles img" />
                    </div>
                    <div className="top-articles__cards--info">
                        <h2>02</h2>
                        <h3>Top 10 Laptops of 2022</h3>
                        <p>Our best picks for various needs and budgets.</p>
                    </div>
                </div>
                <div className="top-articles__cards">
                    <div className="top-articles__cards--img">
                        <img src={gaming} alt="top articles img" />
                    </div>
                    <div className="top-articles__cards--info">
                        <h2>03</h2>
                        <h3>The Growth of Gaming</h3>
                        <p>How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </div>
            </div>
        )
    }
}
