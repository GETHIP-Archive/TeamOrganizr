import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { testGroups } from './sorting.js';

import './main.html';

Template.register.events({
  'submit form': function(event){
    event.preventDefault();
	//var email = event.target.email;
	var email = ($('[name=email]').val());
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
      password: password
    }, function(error){
		strengths = [first, second, third, fourth, fifth];
		Meteor.call('insert strengths', firstName, lastName, occupation, zip, strengths);
		if(error){
			console.log(error.reason);
		} else {
			FlowRouter.go('home');
		}
	});
    }
  });