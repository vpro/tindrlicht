import React from 'react';

import tinderlicht from '../../assets/icons/tinderlicht.svg';


class NavBar extends React.Component{
    render() {
    	return (
    		<nav>
    			<div className="nav__like"><span className="icon-user"></span></div>
    			<div className="nav__logo">
                    <img className="nav__tinderlichtlogo" src={tinderlicht} />
    			</div>
    			<div className="nav__loves"><span className="icon-heart-header"></span></div>
    		</nav>
		);
	}
}

export default NavBar;
