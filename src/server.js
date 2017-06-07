// Import database.
var database = require('./database/peopleDB.js');

// Import the logger from constants.
var logger = require('./constants').logger;

// Import validator for Authentication key.
var validateAuthHeader = require('./utils/validateHeader').validateAuth;

// Import validator for Content-Type.
var validateContentType = require('./utils/validateHeader').validateContentType;

// Import validator for person object and friends array.
var validatePersonObjectAndFriendsArray = require('./utils/validatePerson').validatePersonObjectAndFriendsArray;

// Import validator for person ID.
var validateId = require('./utils/validatePerson').validateId;

// Import function to update Source Person's Friends' friends list to add Source Person's ID.
var updateSourceIdFriendsFriendsList = require('./utils/updateSourceIdFriendsFriendsList');

// Import function to check person-to-person relationship.
var degrees = require('./utils/degrees');

// Import ID generator.
var assignIdToPerson = require('./utils/userId').assignId;

/**
 * Returns true if the argument passed to it is a valid person.
 * Does not require the id field to be present.
 *
 * Note: you don't have to use this function, but it may be helpful.
 */
function isPerson (person) {
    return (
        typeof person === 'object' &&
        'name' in person &&
        'age' in person &&
        'job' in person &&
        'friends' in person
    );
}

/**
 * Adds a new person to the database.
 * Throws if
 *      + the person is invalid
 *      + the person doesn't have an id
 *      + the id is already being used in the db
 *
 * Note: you don't have to use this function, but it may be helpful.
 */
// function addPersonToDatabase (person) {
//     if (!isPerson(person)) {
//         throw new Error('Expected person to be a valid person, but got ' + JSON.stringify(person));
//     }

//     if (!('id' in person)) {
//         throw new Error('You must supply an id to add a new person to the database.');
//     }

//     if (person.id in database.people) {
//         throw new Error('A person already exists with id ' + person.id);
//     }

//     database.people[person.id] = person;
// }

// Modified addPersonToDatabase function where isPerson validation
// check is removed because validatePersonObject and validateFriendsArray
// functions in validatePerson.js file handles it.
function addPersonToDatabase (person) {
    if (!('id' in person)) {
        throw new Error('You must supply an id to add a new person to the database.');
    }

    if (person.id in database.people) {
        throw new Error('A person already exists with id ' + person.id);
    }

    database.people[person.id] = person;
}

// Load the express library and the body parsing middleware, body-parser
var express = require('express'),
    bodyParser = require('body-parser');

// The server application is an instance of express.
var app = express();

// Add body parsing middleware so JSON request bodies will be understood.
app.use(bodyParser.json());

// Logging middleware.
app.use(function (request, response, next) {
    // The HTTP method, request URL, and originating IP.
    var method = request.method,
        URL = request.originalUrl,
        ip = request.ip;

    // Log the info to console.
    logger(method + ' ' + URL + ', ' + ip);

    // Pass control to the next middleware.
    return next();
});

// Middleware to validate client's authentication.
app.use('/',function (request, response, next) {
    var hashedString = request.headers['x-project-authentication'],
          validatedResponse = validateAuthHeader(hashedString);

    // Return 401 with error message if authentication fails.
    if (validatedResponse.error) 
        return response.status(401).send(validatedResponse.message);

    return next();
});

/**
 * GET /people/
 * Returns a list of all of the people in the database.
 */
app.get('/people', function (request, response) {
    return response.json(
        Object.keys(database.people).map(function (id) {
            return database.people[id]
        })
    );
});

/**
 * GET /people/:id
 * Returns the person specified by id.
 */
app.get('/people/:id', function (request, response) {
    var id = request.params.id;
    var person = database.people[id];

    // Return 404 if the person isn't in the database.
    if (person === null || person === undefined)
        return response.status(404).send("Sorry, a person with that id isn't in the database.");

    // Otherwise, return the person.
    return response.json(person);
});

/**
 * POST /people/
 * Add a new person to the database and return the newly created entity.
 */
 app.post('/people', function (request, response) {
    // Validate to only accept request body sent as content-type: 'application/json'.
    var contentType = request.headers['content-type'],
        validatedContentTypeResponse = validateContentType(contentType);
    
    // Return 400 with an error message if the header doesn't include content-type: 'application/json'.
    if (validatedContentTypeResponse.error) 
        return response.status(400).send(validatedContentTypeResponse.message);

    // Else, pass request.body, which is expected to be a person object,
    // to validate Person and Friends objects.
    var validatedPersonAndFriendsResponse = validatePersonObjectAndFriendsArray(request.body);

    // Return 400 with an error message if person object or friends list validation fails.
    if (validatedPersonAndFriendsResponse.error)
        return response.status(400).send(validatedPersonAndFriendsResponse.message);

    // Else, pass person object to assignIdToPerson function to assign ID to person object
    // and assign a variable name.
    var assignedIdResponse = assignIdToPerson(validatedPersonAndFriendsResponse.data),
        newPersonId = assignedIdResponse.data.id;

    // Pass response, which is a person object with ID.
    addPersonToDatabase(assignedIdResponse.data);
    // Note: Read comment in updateSourceIdFriendsFriendsList.js file for more info.
    updateSourceIdFriendsFriendsList(newPersonId, assignedIdResponse.data.friends);

    // Return 201 with the newly created entity from database as a response.
    return response.status(201).json(database.people[newPersonId]);
 });

/**
 * GET /degrees?source=$id&destination=$id
 * Check person-to-person relationship and return degree in number.
 */
app.get('/degrees', function (request, response) {
    var sourceId = request.query.source,
        destinationId = request.query.destination,
        // Validate sourceId and destinationId to make sure it exists in database.
        validatedSourceIdResponse = validateId(sourceId),
        validatedDestinationIdResponse = validateId(destinationId);

    // Return 400 with error message if validation fails.
    if (validatedSourceIdResponse.error || validatedDestinationIdResponse.error) 
        return response.status(400).send(validatedSourceIdResponse.message || validatedDestinationIdResponse.message);

    // Else, pass sourceId and destinationId to check degree and assign a variable name.
    var validatedDegreeResponse = degrees(validatedSourceIdResponse.id, validatedDestinationIdResponse.id);

    // Return 200 with degree.
    return response.status(200).json(validatedDegreeResponse.degree);
});

// Middleware to catch any 404s
app.use(function (request, response, next) {
    var error404 = new Error('Not Found');
    error404.status = 404;
    error404.message = 'The endpoint ' + request.originalUrl + ' does not exist.';
    return next(error404);
});

// Error handling middleware
app.use(function (error, request, response, next) {
    var status = error.status || 500,
        message = error.message || 'Error';
    logger(request.method, request.originalUrl, status, message);

    return response.status(status).send();
});

// Start an http server on port 9000 which runs the application
var http = require('http'),
    port = require('./constants').port;
http.createServer(app).listen(port);
logger('Server started on port ' + port + '.');