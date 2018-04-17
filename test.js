var expect = chai.expect;
var should = chai.should();

describe('add()', function() {
  it('should add two numbers together', function() {
    var sum = add(4, 2);
    expect(sum).to.equal(6);
    add.should.be.a('function');
  });
});
