import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: "home",
  action: function() {
    BlazeLayout.render("content", {content: "homePage"});
  }
});

FlowRouter.route('/', {
  name: "about",
  action: function() {
    BlazeLayout.render("content", {content: "aboutPage"});
  }
});

FlowRouter.route('/', {
  name: "registration",
  action: function() {
    BlazeLayout.render("content", {content: "register"});
  }
});

FlowRouter.route('/', {
  name: "login",
  action: function() {
    BlazeLayout.render("content", {content: "login"});
  }
});
