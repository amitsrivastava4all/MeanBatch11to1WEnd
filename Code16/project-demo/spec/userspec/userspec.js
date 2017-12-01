const chai = require("chai");
const chaiHttp = require('chai-http');
const server = require('../../app');
const should = chai.should();

chai.use(chaiHttp);

describe(" test suite",()=>{
	it('should test valid json', function(done) {
  chai.request(server)
    .post('/login')
    .send({'userid': 'ram', 'password': '123'})
    .end(function(err, res){
      console.log("error is ",err);
      console.log("Resposne is ",res);
      //res.should.have.status(200);
      res.should.be.json;
      
      done();
    });
});
	it('should test checkUser is Auth', function(done) {
  chai.request(server)
  .post('/login')
  .send({'userid': 'ram', 'password': '123'})
    .end(function(err, res){
      //res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.should.have.property('msg');
      res.body.msg.should.be.a('string');
      
     
      res.body.msg.should.equal("Welcome");
      
      done();
    });
});
	
})