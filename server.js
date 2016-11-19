'use strict';
// load dependencies

const express = require('express');
const app = express();

const jwt = require('express-jwt');
const cors = require('cors');
//const bodyParser = require('body-parser');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


const authCheck =jwt({
	secret: new Buffer('by27muMa4KanRODi_XPA05egyA2VQnfI9FVpi157dS-MzXK9V9wLPAVGJBH-giCr', 'base64'),
	audience: 'pwDyOusCeQTYNKMtHMgjVy8y89TQtASm'
});

app.get('/api/activities/public', (req, res)=>{

	let activities = [
	//array of public activities here 
	{
		id: 101,
		name: 'Christmas Party',
		venue: 'Stags Head',
		Price: '€50',
		date: '24/12/16',
		time: '8pm'
	},
	{
		id: 502,
		name: 'Canoing for Beginners',
		venue: 'Grand Canal Dock',
		Price: '€10',
		date: 'Every Sat',
		time: '10am'
	},
	{
		id: 403,
		name: '5 Aside',
		venue: 'Phoenix Park',
		Price: 'free',
		date: 'Tues ',
		time: '8pm'
	}
	];
	res.json(activities);
	
})

// private route

app.get('/api/activities/private', (req,res)=>{
	let activities = [
	{
		id:504,
		name: 'House Warming',
		venue: 'Morgans House',
		Price: 'bottle of wine',
		date: '24/11/16',
		time: '8pm'
	},
	{
		id:505,
		name: 'St Marys School reunion ',
		venue: 'St Marys Hall',
		Price: 'free',
		date: '21/01/17',
		time: '7pm'
	},
	{
		id:506,
		name: 'Mammies Christmas Drinks',
		venue: 'Walshes',
		Price: 'pints',
		date: '18/12/16 ',
		time: '8pm'
	},
	];
	res.json(activities);
})

app.listen(3001);
console.log('Serving activities on localhost:3001');