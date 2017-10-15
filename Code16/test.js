const chai = require("chai");
const chaiHttp = require('chai-http');
const server = require('./index');
const should = chai.should();

chai.use(chaiHttp);

describe(" test suite",()=>{
	it('should test welcome json', function(done) {
  chai.request(server)
    .get('/welcome')
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      
      done();
    });
});
	it('should test POST', function(done) {
  chai.request(server)
    .post('/hello')
    .send({'name': 'Ram', 'lastName': 'Kumar'})
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.should.have.property('id');
      res.body.id.should.be.a('number');
      
     
      res.body.id.should.equal(1001);
      
      done();
    });
});
	
})