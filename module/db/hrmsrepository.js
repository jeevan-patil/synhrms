var HrmsRepo = {
  findInterviewCandidates: function (userId, date, callback) {
    callback(getDummyCandidates());
  }
};

var getDummyCandidates = function () {
  var candidates = [];
  for (var i = 0; i < 5; i++) {
    var candidate = {
      email: 'intc' + i + '@golmal.com',
      job_description: 'BU6 Java Lead 00' + i,
      date: new Date().toISOString(),
    };

    candidates.push(candidate);
  }

  return candidates;
};

module.exports = HrmsRepo;