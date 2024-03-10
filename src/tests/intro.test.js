import { describe, test, it, expect } from "vitest";
import { factorial, fizzBuzz, max } from '../intro';
import { getCoupons, validateUserInput } from "../core";
import { Stack } from "../core";

describe("max", () => {
  test("returns the first argument if it is greater", () => {
    // Arrange
    const a = 2;
    const b = 1;

    // Act
    const result = max(a, b);

    // Assert
    expect(result).toBe(2);

    // expect(max(2,1).toBe(2));
  });

  test("returns the second argument if it is greater", () => {
    expect(max(1, 5)).toBe(5);
  });

  test("returns the first argument if the two are equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe("fizzBuzz", () => {
  test("returns 'fizzBuzz' if it's divisible by 15", () => {
    // Arrange
    const n = 30;

    // Act
    const result = fizzBuzz(n);

    // Assert
    expect(result).toBe('FizzBuzz');
  });

  test("returns 'Fizz' if it's only divisible by 3", () => {
    expect(fizzBuzz(9)).toBe('Fizz');
  });

  test("returns 'Buzz' if it's only divisible by 5", () => {
    expect(fizzBuzz(50)).toBe('Buzz');
  });

  test("returns number as string when not divisible by 3 or 5", () => {
    expect(fizzBuzz(11)).toBe('11');
    expect(fizzBuzz(11)).toBeTypeOf('string');
  });
});

describe("factorial", () => {
  test("returns error message if number lower than 0", () => {
    const result = factorial(-1);
    expect(result).toBe("Error: number must be greater than zero");
  });

  test("returns 1 if n equals 0", () => {
    const result = factorial(0);
    expect(result).toBe(1);
  });

  test("returns 1 for n=1", () => {
    const result = factorial(1);
    expect(result).toBe(1);
  });

  test("returns 2 for n=2", () => {
    expect(factorial(2)).toBe(2);
  });

  test("returns 6 for n=3", () => {
    expect(factorial(3)).toBe(6);
  });

  test("returns 24 for n=4", () => {
    expect(factorial(4)).toBe(24);
  });

  test("returns 120 for n=5", () => {
    expect(factorial(5)).toBe(120);
  });

});

describe("getCoupons", () => {
  test("contains keys 'code' and 'discount'", () => {
    const result = getCoupons();
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty('code');
    expect(result[0]).toHaveProperty('discount');
  });
  test("length to be greater than zero", () => {
    const result = getCoupons();
    expect(result.length).toBeGreaterThan(0);
  });
});

describe("validateUserInput", () => {
  test("valid user", () => {
    expect(validateUserInput("Dan", 42)).toMatch(/successful/i);
  });
  test("username validation", () => {
    const invalidLength = validateUserInput("Da");
    expect(invalidLength).toMatch(/invalid/i);
    const invalidType = validateUserInput(123);
    expect(invalidType).toMatch(/invalid username/i);
  });
});

describe("class Stack", () => {
  let stack = new Stack();
  
  test("it can be created", () => {
    expect(stack).toHaveProperty('items');
    expect(stack).toBeDefined();
    expect(stack.items).toHaveLength(0);
  });
  test("item can be pushed", ()=>{
    stack.push("Dan");
    expect(stack.items[0]).toBe("Dan");
    stack.push(108);
    expect(stack.items[1]).toBe(108);
    stack.push(true);
    stack.push('');
    expect(stack.items).toHaveLength(4);
  });
  test("can be popped", ()=>{
    const pop = stack.pop();
    expect(pop).toBe("");
  });
  test("provides size", ()=>{
    const size = stack.size();
    expect(size).toBe(3);
  });
  test("empty and clear", ()=>{
    expect(stack.isEmpty()).toBe(false);
    stack.clear();
    expect(stack.isEmpty()).toBe(true);
  })
});
