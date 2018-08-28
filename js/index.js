

function startCalc(target){
  document.getElementById(target).innerHTML = promptCalculator();
}

function promptCalculator(){
  var num1 = parseFloat(prompt("Input number 1"));
  var op = prompt("Input operator");
  var num2 = parseFloat(prompt("Input number 2"));

  if(isNaN(num1)|| isNaN(num2)) return "Invalid number input.";

  switch(op){
    case "+": {return num1+num2; break;}
    case "-": {return num1-num2; break;}
    case "*": {return num1*num2; break;}
    case "/": {return num1/num2; break;}
    case "%": {return num1*num2*0.01; break;}
    case "^": {return Math.pow(num1,num2); break;}
    case "_": {return Math.log10(num1)/Math.log10(num2); break;}
    case "$": {return Math.pow(num1,1/num2); break;}

    default: return "Invalid operator.";
  }
}
