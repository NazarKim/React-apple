import './style-main.css';
import {NavLink} from "react-router-dom";


const Main = (props) => {
    let btn = 'btn'
    let product = 'product'
    return (
        <main>
                <aside>
                    <div className='name'>
                        <NavLink className={product} to='/react-apple'>Iphone</NavLink>
                        <NavLink className={product} to='/react-apple/selection1'>Ipad</NavLink>
                        <NavLink className={product} to='/react-apple/selection2'>Mac</NavLink>
                    </div>
                    <h3>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
                        delectus deleniti dignissimos dolor eos facere facilis labore
                        laboriosam maxime nesciunt nihil porro quam quod reiciendis saepe
                        soluta tenetur veritatis, voluptatum? Alias architecto autem deserunt
                        error eveniet fugiat harum iusto magnam neque obcaecati officia placeat
                        praesentium quaerat, quia sint temporibus voluptatibus?
                    </h3>
                    <button className={btn}>Products</button>
                </aside>
                <img src={props.mainData.img.photoIphoneSE} alt=""/>
        </main>
    );
};

export default Main;