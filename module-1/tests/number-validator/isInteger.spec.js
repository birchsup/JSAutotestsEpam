import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';

describe('isInteger', ()=>{
  let validator;
  beforeEach(()=>{
    validator = new NumbersValidator;
  });
  afterEach(()=>{
    validator = null;
  });
  it('should validate input integer', () => {
    const input = 2;
    const result = validator.isInteger(input);
    expect(result).to.be.eql(true);
  });
  it('should trow an error for string', () => {
    const input = 'cat';
    expect(()=>validator.isInteger(input)).to.throw(`[${input}] is not a number`);
  });
  it('should trow an error fro null', () => {
    const input = null;
    expect(()=>validator.isInteger(input)).to.throw(`[${input}] is not a number`);
  });
  it('should trow an error fro boolean', () => {
    const input = true;
    expect(()=>validator.isInteger(input)).to.throw(`[${input}] is not a number`);
  });
  it('should trow an error fro array', () => {
    const input = [1, 2, 3];
    expect(()=>validator.isInteger(input)).to.throw(`[${input}] is not a number`);
  });
  it('should return false for a non-integer number', () => {
    const input = 31.5;
    const result = validator.isInteger(input);
    expect(result).to.be.eql(false);
  });
  it('should return true for negative number', () => {
    const input = -31;
    const result = validator.isInteger(input);
    expect(result).to.be.eql(true);
  });
});
