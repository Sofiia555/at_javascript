const { expect } = require('chai');
const { describe, it, beforeEach, afterEach } = require('mocha');
const NumbersValidator = require('../../app/numbers-validator');

describe('NumbersValidator', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('isNumberEven', () => {
    it('should return true if number is even', () => {
      expect(validator.isNumberEven(4)).to.be.equal(true);
    });

    it('should return false if number is not even', () => {
      expect(validator.isNumberEven(7)).to.be.equal(false);
    });

    it('should throw an error when provided not a Number value', () => {
      const input = 'four';

      expect(() => {
        validator.isNumberEven(input);
      }).to.throw(`[${input}] is not of type "Number" it is of type "${typeof input}"`);
    });
  });

  describe('getEvenNumbersFromArray', () => {
    it('should return an array of even numbers', () => {
      expect(validator.getEvenNumbersFromArray([1, 2, 3, 4, 5, 6])).to.be.eql([2, 4, 6]);
    });

    it('should return an empty array if there are no even numbers', () => {
      expect(validator.getEvenNumbersFromArray([1, 3, 5])).to.be.eql([]);
    });

    it('should throw an error if input is not an array of numbers', () => {
      const input = [1, 'two', 3];

      expect(() => {
        validator.getEvenNumbersFromArray(input);
      }).to.throw(`[${input}] is not an array of "Numbers"`);
    });

    it('should throw an error if input is not an array', () => {
      const input = 'not an array';

      expect(() => {
        validator.getEvenNumbersFromArray(input);
      }).to.throw(`[${input}] is not an array of "Numbers"`);
    });
  });

  describe('isAllNumbers', () => {
    it('should return true if all elements in array are numbers', () => {
      expect(validator.isAllNumbers([1, 2, 3, 4])).to.be.equal(true);
    });

    it('should return false if at least one element is not a number', () => {
      expect(validator.isAllNumbers([1, '2', 3])).to.be.equal(false);
    });

    it('should throw an error if input is not an array', () => {
      const input = 123;

      expect(() => {
        validator.isAllNumbers(input);
      }).to.throw(`[${input}] is not an array`);
    });
  });

  describe('isInteger', () => {
    it('should return true if value is an integer', () => {
      expect(validator.isInteger(10)).to.be.equal(true);
    });

    it('should return false if value is a float', () => {
      expect(validator.isInteger(10.5)).to.be.equal(false);
    });

    it('should throw an error if value is not a number', () => {
      const input = '10';

      expect(() => {
        validator.isInteger(input);
      }).to.throw(`[${input}] is not a number`);
    });
  });
});
