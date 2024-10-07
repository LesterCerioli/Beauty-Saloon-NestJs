class Telephone {
    telephoneNumber: string;
    telephoneRegion: string;
  
    private constructor(telephoneNumber: string, telephoneRegion: string) {
      this.telephoneNumber = telephoneNumber;
      this.telephoneRegion = telephoneRegion;
    }
  
    
    static newTelephone(telephoneNumber: string, telephoneRegion: string): Telephone | Error {
      if (!this.validateTelephone(telephoneNumber)) {
        throw new Error('Invalid telephone number');
      }
      return new Telephone(telephoneNumber, telephoneRegion);
    }
  
    // Check out telephone number// Valida o número de telefone
    private static validateTelephone(telephone: string): boolean {
      // Remove white spaes
      const cleanedNumber = telephone.trim();
  
      
      const cleanedNum = cleanedNumber.replace(/[^0-9a-zA-Z]+/g, '');
  
      
      if (cleanedNum.length === 13) {
        console.log('O número de telefone é válido');
        return true;
      }
  
      console.log('O número de telefone é inválido');
      return false;
    }
  }
  
  export default Telephone;