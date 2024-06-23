function convert() {
    var fromunit = document.getElementById("fromunit").value;
    var tounit = document.getElementById("tounit").value;
    var temprature = parseFloat(document.getElementById("temprature").value);

    var convertedvalue;
    var resultunit;
    if (isNaN(temprature)) {
        alert('Please enter a valid number for temperature.');
        return;
    }
    //building conversion logic

    switch(fromunit){
        case 'C':
            if(tounit === 'F'){
                convertedvalue = (temprature * 9/5) + 32;
                resultunit = 'F';

            }else if(tounit === 'K'){
                convertedvalue = temprature + 273.15;
                resultunit = 'K';
            }
            else{
                convertedvalue = temprature;
                resultunit = 'C';
            }
          break;

         case 'F':
            if(tounit === 'C'){
                convertedvalue = (temprature - 32) * 5/9;
                resultunit = 'C';

            }else if(tounit === 'K'){
                convertedvalue = (temprature - 32) * 5/9 + 273.15;
                resultunit = 'K';

            }
            else{
                convertedvalue = temprature;
                resultunit = 'F';
            }
          break;

         case 'K':
            if(tounit === 'C'){
                convertedvalue = temprature - 273.15;
                resultunit = 'C';

            }else if(tounit === 'F'){
                convertedvalue = (temprature - 273.15) * 9/5 + 32;
                resultunit = 'F';

            }
            else{
                convertedvalue = temprature;
                resultunit = 'K';
            }
          break;
    }
    document.getElementById('result').value = convertedvalue.toFixed(2) + ' ' + resultunit;

}