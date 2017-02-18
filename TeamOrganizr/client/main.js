import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}
