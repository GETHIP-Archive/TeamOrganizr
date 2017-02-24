import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './main.html';

Template.register.events({
  'submit form': function(event){
    event.preventDefault();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();

	var firstName = $('[name=firstName]').val();
	var lastName = $('[name=lastName]').val();
	var occupation = $('[name=occupation]').val();
	var zip = $('[name=zip]').val();
	var first = $('[name=first]').val();
	var second = $('[name=second]').val();
	var third = $('[name=third]').val();
	var fourth = $('[name=fourth]').val();
	var fifth = $('[name=fifth]').val();
	console.log(event);

    Accounts.createUser({
      email: email,
      password: password,
	  firstName: firstName,
	  lastName: lastName,
	  occupation: occupation,
	  zip: zip,
	  first: first,
	  second: second,
	  third: third,
	  fourth: fourth,
	  fifth: fifth
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
