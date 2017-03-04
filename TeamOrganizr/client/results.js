import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { testGroups } from './sorting.js';
import { Strengths } from '../Lib/strengths.js';
import { assignGroups } from './sorting.js';

Template.results.onCreated(function() {
	Meteor.subscribe("Strengths");
});

Template.results.helpers({
	groups: function() {
		var groups = Strengths.find().fetch();
		return assignGroups(groups, 7);
	}
});