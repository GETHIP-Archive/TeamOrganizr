import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: "home",
  action: function() {
    BlazeLayout.render("content", {content: "home"});
  }
});

FlowRouter.route('/about', {
  name: "about",
  action: function() {
    BlazeLayout.render("content", {content: "about"});
  }
});

FlowRouter.route('/register', {
  name: "register",
  action: function() {
    BlazeLayout.render("content", {content: "register"});
  }
});

FlowRouter.route('/login', {
  name: "login",
  action: function() {
    BlazeLayout.render("content", {content: "login"});
  }
});

FlowRouter.route('/profile', {
  name: "profile",
  action: function() {
    BlazeLayout.render("content", {content: "profile"});
  }
});
