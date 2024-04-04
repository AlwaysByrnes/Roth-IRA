


    const inputBtn = document.getElementById("input-btn")

    inputBtn.addEventListener("click", function(){
   
        let inputCheck = parseFloat(document.getElementById('input-check').value);
        let inputPercentage = parseFloat(document.getElementById('input-percentage').value);
        let result = inputCheck * inputPercentage;
        document.getElementById('result').innerText = "Roth: $" + (Math.round(result * 100) / 100).toFixed(2);
    
        if(result < 0){
            document.getElementById('result').innerText = "Error"
        }else if (result === 0){
            document.getElementById('result').innerText = "None"
        }
       
    })

    const inputClear = document.getElementById("input-clear-btn");

    inputClear.addEventListener("click", function(){
        
        document.getElementById('input-check').value = 0;
        document.getElementById('input-percentage').value = 0;

        document.getElementById('result').innerText  = "Roth: $" + 0;
    })



 




/* document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('link');
    // onClick's logic below:
    link.addEventListener('click', function() {
        hellYeah('xxx');
    });
}); */
