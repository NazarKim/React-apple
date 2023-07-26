import './selection2-style.css'
import {NavLink} from "react-router-dom";

const Selection2 = (props) => {
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
                    A series of all-in-one personal computers created by Apple Inc. in 1998.

                    The monitor and all system components, including the SuperDrive drive, are assembled in a compact computer case. Slot-load CD/DVD (not available since 2012, can be purchased separately as an external optical drive).
                    It remains only to connect the keyboard and mouse (both are included, but you can choose your package) - and the computer is ready to work. Speakers, photo/video camera, Bluetooth wireless connection and Wi-Fi are built into the case. Your computer came with a remote control that you can use to control music playback,
                    video and photo collections.
                </h3>
                <button className={btn}>Products</button>
            </aside>
            <img src={props.selectionData.img.photoMac} alt=""/>
        </main>
    );
};

export default Selection2