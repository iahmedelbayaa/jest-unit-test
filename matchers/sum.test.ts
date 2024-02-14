import {sum} from './sum'; // Assuming sum is an ES6 module

describe('Sum function', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('Object assignment', () => {
  it('should have properties one and two with values 1 and 2', () => {
    const data: { [key: string]: number } = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });
});

describe('Adding positive numbers', () => {
  it('should not result in zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });
});

// TRUTHY AND FALSEY

describe('Null', () => {
  it('should be null and not undefined, truthy, or falsy', () => {
    const n: null = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
});

describe('Zero', () => {
  it('should not be null, undefined, truthy, or falsy', () => {
    const z: number = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });
});

// NUMBERS

describe('Two plus two', () => {
  it('should be greater than 3, greater than or equal to 3.5, less than 5, less than or equal to 4.5', () => {
    const value: number = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });
});

describe('Adding floating point numbers', () => {
  it('should be close to 0.3', () => {
    const value: number = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3); // This works.
  });
});

// STRINGS //

describe('There is no I in team', () => {
  it('should not match /I/', () => {
    expect('team').not.toMatch(/I/);
  });
});

describe('There is a "stop" in Christoph', () => {
  it('should match /stop/', () => {
    expect('Christoph').toMatch(/stop/);
  });
});

// ARRAYS //

describe('Shopping list', () => {
  const shoppingList: string[] = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];

  it('should contain milk', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  });
});

// EXCEPTIONS //

describe('Compiling Android code', () => {
  function compileAndroidCode(): never {
    throw new Error('you are using the wrong JDK');
  }

  it('should throw an error', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
  });
});
