import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';

describe('getEvenNumberFromArray', ()=>{
  let validator;
  beforeEach(()=>{
    validator = new NumbersValidator();
  });
  afterEach(()=>{
    validator = null;
  });
  it('should return an array of even numbers', () => {
    const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 121];
    const evenNumbersArray = validator.getEvenNumbersFromArray(arrayOfNumbers);
    expect(evenNumbersArray).to.be.eql([2, 4, 6]);
  });
  it('should throw an error for an array containing non-number elements', () => {
    const inputArray = [1, 2, '3', 4, 5];
    expect(() => validator.getEvenNumbersFromArray(inputArray)).to.throw(`[${inputArray}] is not an array of "Numbers"`);
  });
  it('should validate empty array', () => {
    const emptyArray = [];
    const expectedOutput = [];
    const result = validator.getEvenNumbersFromArray(emptyArray);
    expect(result).to.be.eql(expectedOutput);
  });
  it('should validate non even number array', () => {
    const nonEvenNumbersArray = [1, 3, 5];
    const expectedOutput = [];
    const result = validator.getEvenNumbersFromArray(nonEvenNumbersArray);
    expect(result).to.be.eql(expectedOutput);
  });
  it('should validate non array input', () => {
    const nonArrayInput = 'not a array';
    expect(() => validator.getEvenNumbersFromArray(nonArrayInput)).to.throw(`[${nonArrayInput}] is not an array of "Numbers"`);
  });
});
