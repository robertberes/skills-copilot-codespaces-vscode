// Create web server with express
const express = require('express');
const app = express();
// Require the comments module
const comments = require('./comments');
// Use the comments function to add a comment
comments.add('Hello');
// Get all comments
console.log(comments.getAll());
