import React,{Component} from 'react';
import Search from '../com/Search.js';
import ReactDOM from 'react-dom';
import Carousel from '../com/Carousel';


const imgs=[
    'http://p1.music.126.net/zGvEdVsknqm7b4zwSTQqVQ==/18500382650931144.jpg',
    'http://p1.music.126.net/mKKq4wJa4RlkL6veVZghVg==/18896206835174059.jpg',
    'http://p1.music.126.net/3XPRy9LUIhBUpGz5pT5t6A==/18658712325254475.jpg'

]

    const element=(<Search/>);
    ReactDOM.render(
    	element,
    	document.getElementById('target'))

