class District {
    districtName: string;
  
    constructor(districtName: string) {
      this.districtName = districtName;
    }
  
    static newDistrict(districtName: string): District {
      return new District(districtName);
    }
  }
  
  export default District;