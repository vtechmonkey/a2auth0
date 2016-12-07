'use strict';
// Load required packages
const express = require('express');
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
var Activity = require('./models/activity');
const jwt = require('express-jwt');
const cors = require('cors');
//http://scottksmith.com/blog/2014/05/02/building-restful-apis-with-node/
// Connect to the beerlocker MongoDB
mongoose.connect('mongodb://newOrder:haloRemix@ds019986.mlab.com:19986/tuttifrutti');

// Create our Express application
const app = express();

// Use the body-parser package in our application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//use cors 
app.use(cors());
// Use environment defined port or 3000
var port = process.env.PORT || 3000;

const authCheck =jwt({
 secret: new Buffer('by27muMa4KanRODi_XPA05egyA2VQnfI9FVpi157dS-MzXK9V9wLPAVGJBH-giCr', 'base64'),
 audience: 'pwDyOusCeQTYNKMtHMgjVy8y89TQtASm'
});


// Create our Express router
var router = express.Router();

// Initial dummy route for testing
// http://localhost:3000/api
router.get('/', function(req, res) {
  res.json({ message: 'You are running dangerously low on stuff to do!' }); 
});

// Create a new route with the prefix /beers
var activitiesRoute = router.route('/activities');

// Create endpoint /api/activities for POSTS
activitiesRoute.post(function(req, res) {
  // Create a new instance of the Activity model
  var activity = new Activity();

  // Set the properties that came from the POST data
  activity.name = req.body.name;
  activity.venue = req.body.venue;
  activity.date = req.body.date;
  activity.time = req.body.time;
  activity.isPrivate = req.body.isPrivate;
  activity.price = req.body.price;
  activity.category = req.body.category;
  // Save and check for errors
  activity.save(function(err) {
    if (err)
      res.send(err);
    res.json({ message: 'Stuff added to the locker!', data: activity });
  });
});

// Create endpoint /api/activities for GET
activitiesRoute.get(function(req, res) {
  // Use the Activity model to find all activity
  Activity.find(function(err, activities) {
    if (err)
      res.send(err);
    res.json(activities);
  });
});

//create private activities route
var privateActivitiesRoute = router.route('/activities/private');
//create private activities route 
privateActivitiesRoute.get(function(req,res) {
  Activity.find({ isPrivate: 'true'}, function (err, activities){
    if(err)
      res.send(error);
    res.json(activities);
  });
});
var publicActivitiesRoute = router.route('/activities/public');
publicActivitiesRoute.get(function(req, res) {
  Activity.find({ isPrivate: {$ne: 'true' }}, function (err, activities){
    if(err)
      res.send(error);
    res.json(activities);
  });
});

 // Create a new route with the /activities/:activity_id prefix
var activityRoute = router.route('/activities/:activity_id');

// Create endpoint /api/activities/:activity_id for GET
activityRoute.get(function(req, res) {
 // Use the Activity model to find a specific activity
Activity.findById(req.params.activity_id, function(err, activity) {
    if (err)
      res.send(err);

    res.json(activity);
  });
});

//  Create endpoint /api/activities/:activity_id for PUT
activityRoute.put(function (req, res){
  //use activity model to update specific activity
  Activity.findById(req.params.activity_id, function(err, activity){
    if (err)
      res.send(err);
    //update activity time 
    if (req.body.name)
      activity.name = req.body.name;
    if(req.body.venue)
      activity.venue = req.body.venue;
    if (req.body.date)
      activity.date = req.body.date;
     if(req.body.time)
      activity.time = req.body.time;
     if(req.body.category)
      activity.category = req.body.category;
    if(req.body.isPrivate)
    activity.isPrivate = req.body.isPrivate;
    

    //save update
    activity.save(function(err){
      if(err)
        res.send(err);
      res.json(activity);
    });
  });
});

// delete activity endpoint
activityRoute.delete( function (req, res){
  //find activity using Activty model
  Activity.findByIdAndRemove(req.params.activity_id, function(err, activity){
    if(err)
      res.send(err);
    //delete the activity 
      res.json({message: 'activity removed!'});
  });
});

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(port);
console.log('Insert activity on port ' + port);