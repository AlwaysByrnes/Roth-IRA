


const submitBtn = document.getElementById("submit-btn")
    //Grab from local storage
   document.addEventListener("DOMContentLoaded", ()=>{
    //Check if the value is not null.
    const result = localStorage.getItem('result')
    if(result != null){
         document.getElementById('result').innerText = "Roth: $" + (Math.round(result * 100) / 100).toFixed(2);
    }
   })
   //submit button to do the calulations
   submitBtn.addEventListener("click", function(){
    //inputCheck AND inputPercentage variables
        let inputCheck = parseFloat(document.getElementById('input-check').value);
        let inputPercentage = parseFloat(document.getElementById('input-percentage').value);
        //Check if no numbers are inputed. 
        if(isNaN(inputCheck) || isNaN(inputPercentage)){
            document.getElementById('result').innerText = "Error: Please enter valid numbers"
            return
        }

        //Multiply result times the percentage
        let result = inputCheck * inputPercentage
        //Display and format the result to two decimal places
        document.getElementById('result').innerText = "Roth: $" + (Math.round(result * 100) / 100).toFixed(2);
        
        //prompt user if value is less than 0 or equal to 0
        
       if(result < 0){
        document.getElementById('result').innerText = "Can't enter negatives"
       } else if (result === 0){
        document.getElementById('result').innerText = "None"
       }
       localStorage.setItem('result', result)
    })

    const clearBtn = document.getElementById("clear-btn");

    clearBtn.addEventListener("click", function(){
        
        document.getElementById('input-check').value = 0;
        document.getElementById('input-percentage').value = 0;

        document.getElementById('result').innerText  = "Roth: $0.00";
        localStorage.clear()
    })



 