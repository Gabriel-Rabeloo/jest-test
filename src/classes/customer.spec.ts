import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName, cpf', () => {
    const sut = createIndividualCustomer('Gabriel', 'Rabelo', '111.111');
    expect(sut).toHaveProperty('firstName', 'Gabriel');
    expect(sut).toHaveProperty('lastName', 'Rabelo');
    expect(sut).toHaveProperty('cpf', '111.111');
  });

  it('should have methods to get name and idn for individual customer', () => {
    const sut = createIndividualCustomer('Gabriel', 'Rabelo', '111.111');
    expect(sut.getName()).toBe('Gabriel Rabelo');
    expect(sut.getIDN()).toBe('111.111');
  });

  describe('EnterpriseCustomer', () => {
    it('should have firstName, cnpj', () => {
      const sut = createEnterpriseCustomer('Udemy', '111.222');
      expect(sut).toHaveProperty('name', 'Udemy');
      expect(sut).toHaveProperty('cnpj', '111.222');
    });

    it('should have methods to get name and idn for enterprise customers', () => {
      const sut = createEnterpriseCustomer('Udemy', '111.222');
      expect(sut.getName()).toBe('Udemy');
      expect(sut.getIDN()).toBe('111.222');
    });
  });
});
