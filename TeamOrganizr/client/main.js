import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.register.events({
	'submit form': function(event){
		event.preventDefault();
		var email = $('[name=email]').val();
		var password = $('[name=password]').val();
	}
});

function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}
