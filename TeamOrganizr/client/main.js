import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.register.events({
	'submit form': function(event){
		event.preventDefault();
		var email = $('[name=email]').val();
		var password = $('[name=password]').val();
		Accounts.createUser({
			email: email,
			password: password
		}, function(error){
			if(error){
				console.log(error.reason);
			} else {
				Router.go("home");
			}
	}
});

Template.navigation.events({
	'click .logout': function(event){
		event.preventDefault();
		Meteor.logout();
		Router.go('login');
	}
});

Template.login.events({
	'submit form': function(event){
		event.preventDefault();
		var email = $('[name=email]').val();
		var password = $('[name=password]').val();
		Meteor.loginWithPassword(email, password);
	}
});

Meteor.loginWithPassword(email, password, function(error){
	if(error){
		console.log(error.reason);
	} else {
		Router.go("home");
	}
});

function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}