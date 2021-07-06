class RomanCalculator{
    constructor(){

    }
    toRomanNumber(numberDecimal){
        switch(numberDecimal){
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