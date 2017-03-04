import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { testGroups } from './sorting.js';

import './main.html';



Template.login.events({
	'submit form': function(event){
		event.preventDefault();
		email = $('[name=email]').val();
		var password = $('[name=password]').val();
		FlowRouter.go('home');
		//Meteor.loginWithPassword(email, password);
	}
});

//Meteor.loginWithPassword(email, password, function(error){
	//if(error){
		//console.log(error.reason);
	//} else {
		//Router.go("home");
	//}
//});
