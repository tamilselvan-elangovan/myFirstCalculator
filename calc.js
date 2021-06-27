//This script is used to calculate the entries
document.getElementById("enter").onclick = function() {
    let field;
    let fieldArray = [];
    let fieldNumber = [];

    //assigning the input to the variable "field"
    field = document.getElementById("field").value;
    //console.log(field);
    //console.log(field.length);

    //converting the expression into array using loop
    for (let i = 0; i < field.length; i++) {
        fieldArray.push(field[i]);
    }

    //combine the seperated array number into number eg: [2,5] to [25]
    for (x = 0; x < 100000; x++) {
        for (i = 0; i < fieldArray.length; i++) {
            let j = i;
            if (fieldArray[j] !== "+" && fieldArray[j] !== "-" && fieldArray[j] !== "*" && fieldArray[j] !== "/") {
                if (fieldArray[++j] !== "+" && fieldArray[j] !== "-" && fieldArray[j] !== "*" && fieldArray[j] !== "/" && fieldArray[j] !== undefined) {
                    j--;
                    fieldArray[j] = fieldArray[j] + fieldArray[++j];
                    j--;
                    fieldArray.splice(++j,1);
                    //j--;
                    //console.log(fieldArray[j]);
                }
            }
        }
    }
    //console.log(fieldArray)
    

    //converting the expression into array of numbers and string using loop *** eg: ["256", "+"]   to   [256, "+"]
    for (let i = 0; i < fieldArray.length; i++) {
        if (fieldArray[i] === "/" || fieldArray[i] === "*" || fieldArray[i] === "+" || fieldArray[i] === "-") {
            fieldNumber.push(fieldArray[i]); 
        } else {
            let a = Number(fieldArray[i]);
            fieldNumber.push(a);
        }
    //    console.log(fieldNumber)
    }
    //console.log(fieldNumber)

    //check the expression and evaluate in DMAS procedure
     //Division
     for (x = 0; x < fieldArray.length; x++) {
        for (let i = 0; i < fieldNumber.length; i++) {
            if (fieldNumber[i] === "/") {
                //console.log("it is Division")
                let a = i
                fieldNumber[--i] = fieldNumber[i] / fieldNumber[++a];
                i++
                fieldNumber.splice(i,2)
                //console.log(fieldNumber[--i])
                //i++
                //console.log(fieldNumber)
            }
        }
    }
    //Multiplication
    for (x = 0; x < fieldArray.length; x++) {
        for (let i = 0; i < fieldNumber.length; i++) {
            if (fieldNumber[i] === "*"){
                //console.log("it is multiplication")
                let a = i
                fieldNumber[--i] = fieldNumber[i] * fieldNumber[++a];
                i++
                fieldNumber.splice(i,2)
                //console.log(fieldNumber[--i])
                //i++
                //console.log(fieldNumber)
            }
        }
    }
    //Addition
    for (x = 0; x < fieldArray.length; x++) {
        for (let i = 0; i < fieldNumber.length; i++) {
            if (fieldNumber[i] === "+"){
                //console.log("it is Addition")
                let a = i
                fieldNumber[--i] = fieldNumber[i] + fieldNumber[++a];
                i++
                fieldNumber.splice(i,2)
                //console.log(fieldNumber[--i])
                //i++
                //console.log(fieldNumber)
            }
        }
    }
    //Subtraction
    for (x = 0; x < fieldArray.length; x++) {
        for (let i = 0; i < fieldNumber.length; i++) {
            if (fieldNumber[i] === "-"){
                //console.log("it is Subtraction")
                let a = i
                fieldNumber[--i] = fieldNumber[i] - fieldNumber[++a];
                i++
                fieldNumber.splice(i,2)
                //console.log(fieldNumber[--i])
                //i++
                //console.log(fieldNumber)
            }
        }
    }
    console.log(fieldNumber)

    //print on website
    document.getElementById("result").innerHTML = "your answer is " + fieldNumber
}
