let timeLeft = 6 * 60 * 60;
var actime;
        function updateTimer() {
            // Calculate hours, minutes, and seconds
            let hours = Math.floor(timeLeft / 3600);
            let minutes = Math.floor((timeLeft % 3600) / 60);
            let seconds = timeLeft % 60;

            // Display the timer
            
             actime = (  hours + "h " + minutes + "m " + seconds + "s ");
             limitedDeal.innerText=`limitedDeal  ${actime}`;

            // Decrease time left by 1 second
            timeLeft--;
            
          
        }
    
        

        // Update the timer every second
        let timerInterval = setInterval(updateTimer, 1000);


let percentSpanrandom = Math.floor(Math.random()*20);


        
        


document.addEventListener("DOMContentLoaded", () => {
    // Get selected product from localStorage
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    let bigimg = document.getElementById("bigimg");
    let belowTitlePara = document.getElementById("belowTitlePara");
    let descSection = document.getElementById("descSection");
    let category = document.getElementById("category");
    let limitedDeal =document.getElementById("limitedDeal");
    let actpriceDel = document.getElementById("actpriceDel");
    let percentSpan = document.getElementById("percentSpan");
    let finalprice = document.getElementById("finalprice");
    let calcprice = Math.floor(selectedProduct.price)*25;




    if(selectedProduct){
        bigimg.src=selectedProduct.image;
        category.innerText=selectedProduct.category;
        descSection.innerText=selectedProduct.description.slice(0,150);
        actpriceDel.innerText =  "  ₹ "+Math.floor(selectedProduct.price)*25;
        percentSpan.innerText="-"+percentSpanrandom+"%";
        finalprice.innerText = " ₹ "+Math.floor((calcprice-calcprice*percentSpanrandom/100));
        
        
    }


})







