/*
const path = require('path'),
    fs = require('fs');

const dataFile = path.join(__dirname, '../db/taskdb.json')

function readData(){
    var p = new Promise(function(resolveFn, rejectFn){
        fs.readFile(dataFile, { encoding : 'utf-8'}, function(err, fileContents){
            if (err) rejectFn(err);
            let taskList = JSON.parse(fileContents);
            resolveFn(taskList);
        })
    })
	return p;
}

function saveData(taskList){
    return new Promise(function(resolveFn, rejectFn){
        fs.writeFile(dataFile, JSON.stringify(taskList), {encoding: 'utf-8'}, function(err, result){
            if (err) return rejectFn(err);
            resolveFn(result);
        })
    });
}
*/

var dbApi = require('./db');

// const MongoClient = require('mongodb').MongoClient;


async function readData(){
    db = dbApi.get();
    // let client = await MongoClient.connect('mongodb://localhost:27017');
    // let db = client.db('test');

    let tasks = await db.collection('tasks').find({}).toArray();
    return tasks;
}

async function saveData(){
}

module.exports = { readData, saveData };