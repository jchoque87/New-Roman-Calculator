class RomanCalculator{
    constructor(){

    }
    getRomanNumberValue(romanNumeral){
        switch(romanNumeral){
            case 1: return 'I';            
            //case 'IV': return 4;
            case 5: return 'V';
            //case 'IX': return 9;
            case 10: return 'X';
            //case 'XL': return 40;
            case 50: return 'L';
            //case 'XC': return 90;
            case 100: return 'C';
            //case 'CD': return 400;
            case 500: return 'D';
            //case 'CM': return 900;            
            case 1000: return 'M';  
            default: 
            break;
        }
    }

    getDecimalNumberValue(romanNumeral){
        switch(romanNumeral){
            case 'I': return 1;            
            //case 'IV': return 4;
            case 'V': return 5;
            //case 'IX': return 9;
            case 'X': return 10;
            //case 'XL': return 40;
            case 'L': return 50;
            //case 'XC': return 90;
            case 'C': return 100;
            //case 'CD': return 400;
            case 'D': return 500;
            //case 'CM': return 900;            
            case 'M': return 1000;  
            default: 
            break;
        }
    }
}

export {RomanCalculator}