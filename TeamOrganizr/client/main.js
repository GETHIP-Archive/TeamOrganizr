import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './main.html';

Template.register.events({
  'submit form': function(event){
    event.preventDefault();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
	console.log(event);
	console.log($('[name=email]').val());
    Accounts.createUser({
      email: email,
      password: password
    }, function(error){
      if(error){
        console.log(error.reason);
      } else {
        FlowRouter.go('home');
      }
    }
  )}
});

Template.nav.events({
	'click .logout': function(event){
		event.preventDefault();
		Meteor.logout();
		FlowRouter.go('login');
	}
});

Template.login.events({
	'submit form': function(event){
		event.preventDefault();
		var email = $('[name=email]').val();
		var password = $('[name=password]').val();
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
