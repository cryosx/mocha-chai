var expect = chai.expect;
var should = chai.should();

describe('add()', function() {
  it('should add two numbers together', function(){
    var sum = add(4, 2);
    expect(sum).to.equal(6);
  });
});

describe("subtract()", function(){
  it("should subtract the second number from the first", function(){
    var difference = subtract(2, 5);
    expect(difference).to.equal(-3);
  })
  it("should be able to handle strings as if they were numbers", function(){
    var difference = subtract("5", 2);
    expect(difference).to.equal(3);
  })
})