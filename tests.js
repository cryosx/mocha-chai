var expect = chai.expect;
var should = chai.should();

describe('add()', function() {
  it('should add two numbers together', function() {
    var sum = add(4, 2);
    expect(sum).to.equal(6);
  });
  it('should be able to handle strings that are numbers', function() {
    var difference = add('5', 2);
    expect(difference).to.equal(7);
  });
  it('should be able to handle strings that are not numbers', function() {
    var result = add('potato', 2);
    expect(result).is.NaN;
  });
});

describe('subtract()', function() {
  it('should subtract the second number from the first', function() {
    var difference = subtract(2, 5);
    expect(difference).to.equal(-3);
  });
  it('should be able to handle strings that are numbers', function() {
    var difference = subtract('5', 2);
    expect(difference).to.equal(3);
  });
  it('should be able to handle strings that are not numbers', function() {
    var result = subtract('potato', 2);
    expect(result).is.NaN;
  });
});

describe('multiply()', function() {
  it('should multiply two numbers together', function() {
    var result = multiply(4, 2);
    expect(result).to.equal(8);
  });
  it('should be able to handle strings that are numbers', function() {
    var result = multiply('5', 2);
    expect(result).to.equal(10);
  });
  it('should be able to handle strings that are not numbers', function() {
    var result = multiply('potato', 2);
    expect(result).is.NaN;
  });
});

describe('divide()', function(){
  it('should divide the first number by the second', function(){
    const result = divide(8, 2);
    expect(result).to.equal(4);
  });
  it('should be able to handle strings that are numbers', function() {
    var result = divide('5', 2);
    expect(result).to.equal(2.5);
  });
  it('should be able to handle strings that are not numbers', function() {
    var result = divide('potato', 2);
    expect(result).is.NaN;
  });
})