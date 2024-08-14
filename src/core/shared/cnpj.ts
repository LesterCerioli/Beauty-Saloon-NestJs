// src/validators/cnpj.ts

export class Cnpj {
    private readonly cnpj: string;
  
    constructor(cnpj: string) {
      this.cnpj = this.validateCnpj(cnpj);
    }

    private validateCnpj(cnpj: string): string {
      const cleanedCnpj = cnpj.replace(/\D/g, '');
  
      if (cleanedCnpj.length !== 14) {
        throw new Error('CNPJ must have 14 digits');
      }
  
      // Basic validation (length and all digits the same)
      if (/^(\d)\1{13}$/.test(cleanedCnpj)) {
        throw new Error('CNPJ cannot have all the same digits');
      }
  
      // Validate CNPJ digits
      const calculateDigit = (base: string, length: number): number => {
        let sum = 0;
        for (let i = 0; i < length; i++) {
          sum += Number(base[i]) * ((length + 1) - i);
        }
        const remainder = (sum % 11);
        return remainder < 2 ? 0 : 11 - remainder;
      };
  
      const base = cleanedCnpj.slice(0, 12);
      const digit1 = calculateDigit(base, 12);
      const digit2 = calculateDigit(base + digit1, 13);
  
      if (cleanedCnpj !== base + digit1 + digit2) {
        throw new Error('Invalid CNPJ');
      }
  
      return cleanedCnpj;
    }
  
    getValue(): string {
      return this.cnpj;
    }
  }
