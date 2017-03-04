import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { testGroups } from './sorting.js';
import { Strengths } from '../Lib/strengths.js';

import './main.html';

/*
Template.profile.rendered = function() {
    if(!this._rendered) {
      this._rendered = true;
	  console.log(email);
	  document.getElementById("emailDisplay").innerHTML = Meteor.user().email;
    }
};
*/

Template.profile.onCreated(function() {
	Meteor.subscribe("Strengths");
});

Template.profile.helpers({
	profile: function() {
		return Strengths.findOne({userId: Meteor.userId()});
	},
	email: function() {
		return Meteor.user.email;
	}
});