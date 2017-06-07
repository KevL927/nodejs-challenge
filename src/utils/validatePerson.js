// Import database.
var database = require('../database/peopleDB.js');

// Checks if ID is number and if it exists in the database.
function validateId (id) {
    if (isNaN(parseInt(id))) {
        return { error: true, message: 'Please check ID and try again. ID should be in a number format.' };
    }

    var idToNum = parseInt(id);

    if (!database.people[id]) {
        return { error: true, message: 'One or more ID does not exist in database.' };
    } 
    return { id: idToNum };
}

// Checks if each ID in person's friends list is valid.
function validateFriendsList (personId, friends) {
    for (var i = 0; i < friends.length; i++) {
        var validatedIdResponse = validateId(friends[i]);

        if (validatedIdResponse.error) {
            return { error: true, message: validatedIdResponse.message };
        }
        else if (personId === friends[i]) {
            return { error: true, message: 'You cannot be your own friend. Please remove yourself to continue.' };
        }
    }
    return { data: friends };
};

/**
 * Returns the same object if the argument passed to it is a valid person
 * Returns error if
 *      + the person is not an object
 *      + the person has an ID
 *      + the name is either missing or a number
 *      + the age is either missing or not a number
 *      + the job is missing
 *      + the friends is missing or not an array
 */    
function validatePersonObject (person) {
    var id = person.id,
        name = person.name,
        age = person.age,
        job = person.job,
        friends = person.friends;

    if (!typeof person === 'object') {
        return { error: true, message: 'Person must be an object.' };
    }
    else if (id) {
        return { error: true, message: 'Please remove ID as it\'s automatically assigned by the server.'}
    }
    else if (!name || !isNaN(parseInt(name))) {
        return { error: true, message: 'Missing/invalid field: name.' };
    }
    else if (!age || isNaN(parseInt(age))) {
        return { error: true, message: 'Missing/invalid field: age.' };
    }
    else if (!job) {
        return { error: true, message: 'Missing required field: job.' };
    }
    else if(!friends || !Array.isArray(friends)) {
        return { error: true, message: 'Missing/invalid field: friends.' };
    }
    return { data: { name, age, job, friends } }
};

// A customized function to call two functions,
// validatePersonObject and validateFriendsArray.
module.exports.validatePersonObjectAndFriendsArray =function (person) {
    var validatedPersonObjectResponse = validatePersonObject(person);

    if (validatedPersonObjectResponse.error) {
        return { error: true, message: validatedPersonObjectResponse.message };
    }
    
    var validatedFriendsListResponse = validateFriendsList(null, person.friends);

    if (validatedFriendsListResponse.error) {
        return { error: true, message: validatedFriendsListResponse.message };
    }

    return { data: person };
}

module.exports.validateId = validateId;