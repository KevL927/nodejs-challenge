// Import database.
var database = require('../database/peopleDB.js');

// Checks if any one of the sourceId's friends is friends with destinationId.
function checkChainedRelationship (sourceId, destinationId, sourceIdFriendsList) {
    // Loop through sourceId's friends' list
    for (var i = 0; i < sourceIdFriendsList.length; i++) {
        // Declare a variable to each ID in sourceId's friends list.
        var sourceFriendId = sourceIdFriendsList[i],
        // Declare a variable to each sourceId's friends' friends list.
            sourceFriendsFriendList = database.people[sourceFriendId].friends;

        // If sourceId's friends' friends list consists of destinationId, return true.
        if (sourceFriendsFriendList.indexOf(destinationId) >= 0) {
            return true;
        }
    }
    return false;
};

// Checks the relationship between sourceId and destinationId.
module.exports = function (sourceId, destinationId) {
    // Declare a variable to the sourceId's friends list.
    var sourceIdFriendsList = database.people[sourceId].friends;

    if (sourceId === destinationId) {
        return { degree: 0 };
    }
    // If destinationId is found in sourceId friends list, return degree as 1 in object.
    else if (sourceIdFriendsList.indexOf(destinationId) >= 0) {
        return { degree: 1 };
    }
    // If any one of the sourceId's friends is friends with destinationId, return degree as 2 in object.
    else if (checkChainedRelationship(sourceId, destinationId, sourceIdFriendsList)) {
        return { degree: 2 };
    }
    return { degree: -1 };
};