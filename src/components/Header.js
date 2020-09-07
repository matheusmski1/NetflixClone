import React from 'react';
import './Header.css';

export default ({black}) => {
   return(
   
   <header className={black ? 'black' : '' }>
        <div className="header--logo">
            <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png">
                    
                </img>
            </a>
        </div>
        <div className="header--user">
            <a href="/">
                <img src="https://instagram.ffln1-1.fna.fbcdn.net/v/t51.2885-15/e35/39361069_552160665216222_1911911293179133952_n.jpg?_nc_ht=instagram.ffln1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=RrZoL5g6F-YAX8-rcQm&oh=bdc7af97ad2d2700ae0a66fb62f3c856&oe=5F80BA95"></img>
            </a>
        </div>    
    </header>
   )
}
