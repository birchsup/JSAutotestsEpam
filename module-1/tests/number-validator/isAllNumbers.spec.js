import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';

describe('isAllNumbers', ()=>{
  let validator;
  beforeEach(()=>{
    validator = new NumbersValidator();
  });
  afterEach(()=>{
    validator = null;
  });
  it('should return array of numbers', () => {
    const inputArr = [1, 2, 3, 4];
    const arrOfNumbers = validator.isAllNumbers(inputArr);
    expect(arrOfNumbers).to.be.eql(true);
  });
  it('should trow error for non array', () => {
    const inputArr = 'cat';
    expect(() => validator.isAllNumbers(inputArr)).to.throw(`[${inputArr}] is not an array`);
  });
  it('should return false for not number array', () => {
    const inputArr = ['cat', 2, 3, 4];
    const arrOfNumbers = validator.isAllNumbers(inputArr);
    expect(arrOfNumbers).to.be.eql(false);
  });
  // bug=)
  it('should return true for empty array ', () => {
    const inputArr = [];
    const arrOfNumbers = validator.isAllNumbers(inputArr);
    expect(arrOfNumbers).to.be.eql(true);
  });
  it('should return true for 1 element of array', () => {
    const inputArr = [0];
    const arrOfNumbers = validator.isAllNumbers(inputArr);
    expect(arrOfNumbers).to.be.eql(true);
  });
});
