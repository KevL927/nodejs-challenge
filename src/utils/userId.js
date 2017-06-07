var generateId = {
    id: 99,
    latestId: function () {
            this.id++;
            return this.id;
    }
}

// Take in a person object without ID and create a new person object by adding the next available ID.
// * Note: Only invoke function to person object that doesn't have an ID assigned. *
module.exports.assignId = function (person) {
    var personWithId = {
        id: generateId.latestId(),
        name: person.name,
        age: person.age,
        job: person.job,
        friends: person.friends
    };

    return { data: personWithId };
}