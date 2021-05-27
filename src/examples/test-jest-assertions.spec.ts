describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;
    const nulo = null;

    expect(number).toBeGreaterThan(9);
    expect(number).toBeGreaterThanOrEqual(10);
    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);

    expect(number).toBeCloseTo(10.001);
    expect(number).toBeCloseTo(9.996);

    expect(nulo).toBeNull();

    expect(number).toHaveProperty('toString');
  });

  it('should split tests', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);

    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Gabriel', age: 17 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
    expect(person).not.toHaveProperty('latName');
    expect(person).toHaveProperty('age', 17);

    expect(person.name).toBe('Gabriel');
  });
});
