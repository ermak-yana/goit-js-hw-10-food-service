import data from './menu.json';
import '../css/styles.css';

import theme from './switch-theme.js';
import menuItem from '../templates/menu-items.hbs';


const menuList = document.querySelector('.js-menu');
const switchToggle = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');


const result = data.map(item => menuItem(item)).join('');
menuList.insertAdjacentHTML('beforeend', result);
