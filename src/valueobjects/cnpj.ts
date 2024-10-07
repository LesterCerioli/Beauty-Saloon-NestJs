
class Cnpj {
    private cnpjNumber: string;
  
    private constructor(cnpjNumber: string) {
      this.cnpjNumber = cnpjNumber;
    }
  
    
    static newCnpj(cnpjNumber: string): Cnpj | Error {
      const cnpj = new Cnpj('');
  
      if (!cnpj.isValid(cnpjNumber)) {
        throw new Error('Invalid CNPJ number');
      }
  
      return new Cnpj(cnpjNumber);
    }
  
    
    getCnpjNumber(): string {
      return this.cnpjNumber;
    }
  
    
    private isValid(cnpjNumber: string): boolean {
      if (!cnpjNumber) {
        return false;
      }
  
      cnpjNumber = this.cleanCnpj(cnpjNumber);
  
      if (cnpjNumber.length !== 14 || this.isRepeatedDigits(cnpjNumber) || !this.isValidChecksum(cnpjNumber)) {
        return false;
      }
  
      return true;
    }
  
    
    private cleanCnpj(cnpjNumber: string): string {
      return cnpjNumber.replace(/\D/g, ''); // Substitui todos os caracteres não numéricos
    }
  
    
    private isRepeatedDigits(cnpjNumber: string): boolean {
      return cnpjNumber.split('').every(char => char === cnpjNumber[0]);
    }
  
    
    private isValidChecksum(cnpjNumber: string): boolean {
      const calculateDigit = (cnpj: string, length: number): number => {
        let sum = 0;
        let multiplier = length === 12 ? 5 : 6;
  
        for (let i = 0; i < length; i++) {
          const digit = parseInt(cnpj[i], 10);
          sum += digit * multiplier;
          multiplier--;
          if (multiplier < 2) {
            multiplier = 9;
          }
        }
  
        const remainder = sum % 11;
        return remainder >= 2 ? 11 - remainder : 0;
      };
  
      const digit1 = calculateDigit(cnpjNumber, 12);
      const digit2 = calculateDigit(cnpjNumber, 13);
  
      return (
        digit1 === parseInt(cnpjNumber[12], 10) &&
        digit2 === parseInt(cnpjNumber[13], 10)
      );
    }
  }
  
  export default Cnpj;
  