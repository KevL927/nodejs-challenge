// Remove friends' ID that are larger than the person.id.
// This function was only used to avoid errors from server
// when a method was chosen to send JSONs in people.json file
// in ascending order. (people.json => peopleToDb.js)
function removeFriendsIdGreaterThanSelfId (person) {
    for (var i = 0; i < person.length; i++) {
        var newFixedFriendsList = person[i].friends.filter(function (friend){
        return person[i].id > friend;
        });
        person[i].friends = newFixedFriendsList;
    }
    return person;
};