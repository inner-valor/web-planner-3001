import './styles.css';
import { homePageController } from './components/pageController';


const dateElement = document.getElementById('current-date');

dateElement.textContent = new Date().getFullYear();


function startApp() {
    const data = [];
    if (localStorage.getItem('storedData')) {
        data.push(...JSON.parse(localStorage.getItem('storedData')));
    }

    homePageController(data);

}

startApp();



