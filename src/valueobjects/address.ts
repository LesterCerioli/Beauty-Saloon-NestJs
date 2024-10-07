

class Address {
    avenueOrStreet: string;
    number: string;
  
    
    constructor(avenueOrStreet: string, number: string) {
      this.avenueOrStreet = avenueOrStreet;
      this.number = number;
    }
  
    
    static newAddress(avenueOrStreet: string, number: string): Address {
      return new Address(avenueOrStreet, number);
    }
  }
  
  export default Address;
  