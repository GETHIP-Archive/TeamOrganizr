import { Meteor } from 'meteor/meteor';
import { Strengths } from '../Lib/strengths.js';

export const userData = new Mongo.Collection('userData');

Meteor.startup(() => {
	if (Meteor.isServer) {
	Meteor.publish('userData', function publication() {
		return userData.find();
	});
	}

	Meteor.methods({
		'insert strengths': function(firstName, lastName, occupation, zip, strengths) {
			Strengths.insert({
				userId: Meteor.userId(),
				firstName: firstName,
				lastName: lastName,
				occupation: occupation,
				zip: zip,
				strengths: strengths
			});
		}
	});

	Meteor.publish("Strengths", function() {
		return Strengths.find({});
	});
});
