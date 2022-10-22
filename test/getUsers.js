const chai = require("chai");
var assert = chai.assert;
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var request = require("request");
chai.should();
chai.use(sinonChai);

var getUsers = require("../getUsers");

//GET USERS
// meet the requirements below
// - can call getUsers
// - Verify callback is called once
// - Verify correct URL is called
// - Verify callback returns correct data

describe("GetUsers Tests", function () {
  var spy;

  beforeEach(function() {
    spy = sinon.spy();
    sinon.stub(request, "get").callsFake(function (url, callback) {
      callback({}, { body: '{"users": ["user1", "user2"]}' });
    });
  })

  afterEach(function () {
    sinon.restore()
  })

  // it("can call getUsers", function () {
  //   getUsers();
  // });

  it("calls the callback", function () {
    getUsers(spy);
    spy.should.have.been.calledOnce;
  });

  it("calls the correct URL", function () {
    getUsers(spy);
    request.get.should.have.been.calledWith("https://www.mysite.com/api/users");
  });

  it("returns correct data", function () {
    getUsers(spy)
    spy.should.have.been.calledWith({ users: ['user1', 'user2']})
  })
});
