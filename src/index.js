import './styles.css';
import { homePageController } from './components/pageController';
import { v4 as uuidv4 } from 'uuid';


function startApp() {
    const data = [
        {
            name: 'first list',
            id: uuidv4(),
            favorite: true,
            listData: [{text: 'cheese', checked: false}, {text: 'mushroom', checked: true}, {text: 'cake', checked: true}],
            date: new Date('1995'),
    
        },
        {
            name: 'list for me',
            id: uuidv4(),
            favorite: false,
            listData: [{text: 'clean the floor', checked: false}, {text: 'cut the pumpkin', checked: false}, {text: 'fix the car', checked: true}],
            date: new Date('1995'),
        },
        {
            name: 'last list',
            id: uuidv4(),
            favorite: true,
            listData: [{text: 'cheese', checked: false}, {text: 'loramLorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio cum, laudantium labore numquam ea ratione aspernatur quisquam dolorem quasi eos! Debitis, voluptatibus? Fugit porro, maxime id libero necessitatibus modi.', checked: true}, {text: 'cake', checked: true}],
            date: new Date('1995'),
        },
    ];

    homePageController(data);
    
}

startApp();



