/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result = input;
    
    //return result;
    //return input.match(/[a-zA-Z]/);
    if (input) {
      var match = /[a-zA-Z]/.exec(input);
      if (match){
        result = input.substring(0,match.index);
      }
    } else {
      result = 1;
    }
    if (!result) {
      result = 1;
    }
    var slashLoc = result.toString().indexOf("/");
    if (slashLoc > -1) {
      //console.log(parseFloat(result.substring(0, slashLoc)));
      //console.log(parseFloat(result.substring(slashLoc + 1)));
      result = parseFloat(result.substring(0, slashLoc)) / parseFloat(result.substring(slashLoc + 1));
    }

    return result;
  };
  
  this.getUnit = function(input) {
    var result = input;
    var match = /[a-zA-Z]/.exec(input);
    if (match){
      result = input.substring(match.index);
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch (initUnit) {
      case "gal":
        result = "L";
        break;
      case "L":
        result = "gal";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      default:
        result = "invalid unit";
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch (unit) {
      case "gal":
        result = "gallon";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "mi":
        result = "miles";
        break;
      case "L":
        result = "litres";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "km":
        result = "kilometres";
        break;
      default:
        result = "invalid unit";
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "L":
        console.log(1 / galToL);
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
          console.log(1 / lbsToKg);
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      default:
        return "invalid number";
    }

    return result.toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);
    return result;
  };
  
}

module.exports = ConvertHandler;
