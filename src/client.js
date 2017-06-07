var http = require('http'),
    port = require('./constants').port,
    logger = require('./constants').logger,

    // We use async.waterfall to simplify asynchronous requests which depend on the results
    // of previous requests. See https://github.com/caolan/async#waterfall for more details.
    async = require('async'),

    // We use the npm package request (https://github.com/request/request) to greatly
    // simply making http requests.
    request = require('request'),

    // Objects of people in an array to add to DB using POST request.
    peopleToDb = require('../peopleToDb.js');

var encodedValue = new Buffer("this is terrible API key").toString('base64');

// Tell the server we're going to communicate using JSON.
var baseOptions = {
    headers: {
        'X-Project-Authentication': encodedValue,
        'Content-Type': 'application/json',
    }
};

// URI of the server.
var baseURI = 'http://localhost:' + port;

// Removes ID from person object to pass validation from server.
function newPersonObjectWithoutId (person) {
    var personWithoutId = {
        name: person.name,
        age: person.age,
        job: person.job,
        friends: person.friends
    };
    return personWithoutId;
}

async.waterfall(
    [
        function (done) {
            // Removes ID from person object
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[0]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            // POST http://localhost:9000/people
            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                // Handle errors
                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                // Checks if the returned response is different from the
                // person object of specific index in an array in 'peopleToDb.js' file.
                try {
                        if (body !== JSON.stringify(peopleToDb[0])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

         // Below makes same POST request as above using person objects from array
         // in 'peopleToDb.js' file up to line 1549.
        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[1]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[1])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[2]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[2])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },


        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[3]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[3])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[4]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[4])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },


        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[5]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[5])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[6]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[6])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[7]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[7])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[8]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[8])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[9]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[9])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[10]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[10])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[11]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[11])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[12]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[12])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[13]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[13])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[14]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[14])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[15]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[15])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[16]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[16])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[17]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[17])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[18]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[18])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[19]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[19])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[20]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[20])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[21]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[21])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[22]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[22])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[23]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[23])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[24]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[24])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[25]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[25])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[26]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[26])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[27]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[27])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[28]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[28])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[29]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[29])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[30]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[30])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[31]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[31])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[32]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[32])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[33]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[33])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[34]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[34])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[35]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[35])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[36]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[36])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[37]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[37])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[38]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[38])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[39]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[39])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[40]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[40])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[41]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[41])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[42]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[42])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[43]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[43])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[44]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[44])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[45]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[45])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[46]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[46])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[47]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[47])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[48]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                        if (body !== JSON.stringify(peopleToDb[48])) {
                            throw 'Test failed'
                        }
                    } catch (testErr) {
                        return done(new Error(testErr));
                    }

                    return done(null, body);
            });
        },

        function (person, done) {
            var personObjectWithoutId = newPersonObjectWithoutId(peopleToDb[49]);

            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/people' },
                { body: JSON.stringify(personObjectWithoutId) }
            );

            request.post(options, function (err, response, body) {
                var statusCode = response.statusCode;

                if (err || statusCode !== 201) {
                    return done(err || new Error('Error: ' + statusCode));
                }

                try {
                    if (body !== JSON.stringify(peopleToDb[49])) {
                        throw 'Test failed'
                    }
                } catch (testErr) {
                    return done(new Error(testErr));
                }

                    return done(null, body);
            });
        },

        function (person, done) {
            // Options for the request.
            var options = Object.assign(
                {},
                baseOptions,
                { url: baseURI + '/degrees?source=140&destination=148' }
            );

            // GET http://localhost:9000/degrees?source=140&destination=148
            request.get(options, function (err, response, body) {
                var statusCode = response.statusCode;

                // Handle errors
                if (err || statusCode !== 200)
                    return done(err || new Error('Error: ' + statusCode));

                // Parse the response.
                try {
                        if (body !== '1') {
                            throw 'Incorrect degree.'
                        }
                } catch (testErr) {
                    return done(new Error(testErr));
                }

                return done(null, body);
            });
        },

    ], function (err, degree) {
        // Handle any errors from the requests.
        if (err) {
            console.error('An error occurred while contacting the server.');
            console.log(err);
            return;
        }

        logger('All POST and GET requests and tests passed:');
        console.log('Degree between IDs 140 and 148 is ' + degree);
    }
)