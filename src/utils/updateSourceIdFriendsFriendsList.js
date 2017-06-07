// Import database.
var database = require('../database/peopleDB.js');

// Loop through the sourceId's friends list and update sourceId's friends' friends list to include sourceId.
module.exports = function (sourceId, friendsList) {
    if (!friendsList) return;
    
    return friendsList.forEach(friendId => {
        if (sourceId === friendId) return;
        database.people[friendId].friends.push(sourceId);
    });
};