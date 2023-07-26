import './style-footer.css';

const Footer = () => {
    let apple = 'apple'
    let products = 'products'
    let contacts = 'contacts'
    let menu = 'menu'
    let message = 'message'
    return (
       <footer>
           <selection>
               <div className={apple}>
                    <h4>Apple</h4>
                   <ul>
                       <li>About us</li>
                       <li>Director</li>
                       <li>Chief administrator</li>
                       <li>History</li>
                   </ul>
               </div>
               <div className={menu}>
                   <h4>Menu</h4>
                   <ul>
                       <li>Header</li>
                       <li>Main</li>
                       <li>Footer</li>
                       <li>Help</li>
                   </ul>
               </div>
               <div className={products}>
                   <h4>Products</h4>
                   <ul>
                       <li>Iphone</li>
                       <li>Ipad</li>
                       <li>AppleWatch</li>
                       <li>Mac</li>
                   </ul>
               </div>
               <div className={contacts}>
                   <h4>Contacts</h4>
                   <ul>
                       <li>Apple Fifth Avenue
                           767 5th Ave
                           New York, NY 10153</li>
                       <li>www.apple.com</li>
                       <li>+043902840294</li>
                       <li>Copyright © 2023 Apple Inc.</li>
                   </ul>
               </div>
               <div className={message}>
                    <h3>Message</h3>
                   <input type="text"/>
               </div>
           </selection>
       </footer>
    );
};

export default Footer;