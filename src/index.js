import './styles.css';
import { homePageController } from './components/pageController';


function startApp() {
    const data = [];
    if (localStorage.getItem('storedData')) {
        data.push(...JSON.parse(localStorage.getItem('storedData')));
    }

    homePageController(data);

}

startApp();



