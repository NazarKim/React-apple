import './selection1-style.css'
import {NavLink} from "react-router-dom";

const Selection1 = (props) => {
    let btn = 'btn'
    let product = 'product'
    return (
        <main className='selection1-main'>
            <aside>
                <div className='name'>
                    <NavLink className={product} to='/react-apple'>Iphone</NavLink>
                    <NavLink className={product} to='/react-apple/selection1'>Ipad</NavLink>
                    <NavLink className={product} to='/react-apple/selection2'>Mac</NavLink>
                </div>
                <h3>
                    Brand of iOS and iPadOS tablet computers developed by Apple Inc. The iPad was conceived before its sister iPhone, but the iPhone 2G was developed and released first. Speculation about the development, operating system, and release of the original iPad began in 2002 before its introduction on January 20, 2010.
                    The iPad range consists of the original iPad line and the flagship products iPad Mini, iPad Air and iPad Pro.
                </h3>
                <button className={btn}>Products</button>
            </aside>
            <img src={props.selectionData.img.photoIpad} alt=""/>
        </main>
    );
};

export default Selection1
