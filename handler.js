'use strict';

const hrmsRepo = require('./module/db/hrmsrepository');

module.exports.findInterviewCandidates = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  const userId = 2342;
  const date = new Date();
  hrmsRepo.findInterviewCandidates(userId, date, function (candidates) {
    callback(null, candidates);
  });
};
