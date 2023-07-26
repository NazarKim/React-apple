import './style-header.css';
import Navbar from './navbar/Navbar';

const Header = (props) => {
    let title = 'title';
    return (
        <header>
            <Navbar nav = {props.headerData.nav}/>
            <div className={title}>
                <h1>Apple</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dignissimos dolor est excepturi hic iusto natus neque quasi rem reprehenderit.</p>
            </div>
            <img src={props.headerData.photo} alt=""/>
        </header>
    );
}

export default Header;

