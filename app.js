//section1(Date method)
//Q1
//var now = new Date();
//var year = now.getFullYear();
//var day = now.getDate();
//var hours = now.getHours();
//var minutes = now.getMinutes();
//var seconds = now.getSeconds();

//var formattedDateTime = ${month}/${day}/${year} ${hours}:${minutes}:${seconds};

//console.log(formattedDateTime);


//Q2
// var currentDate = new Date();
// var monthIndex = currentDate.getMonth();
// var months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];

// console.log(months[monthIndex]);



//Q3
//var currentDate = new Date();
//var months = [
  //  "January", "February", "March", "April", "May", "June",
   // "July", "August", "September", "October", "November", "December"
//];

//alert(months[monthIndex]);




//Q4
//var currentDate = new Date();
//var dayIndex = currentDate.getDay();
//if (dayIndex === 0 || dayIndex === 6) {
   // alert("It's Fun day");
//}




//Q5
//var currentDate = new Date();
//var day = currentDate.getDate();

//if (day < 16) {
    //console.log("First fifteen days of the month");
//} else {
    //console.log("Last days of the month");
//}


//Q6
//var currentDate = new Date();
//var minutes = Math.floor(currentDate.getTime() / 60000);

//console.log(minutes);


//Q7
//var currentDate = new Date();
//var hours = currentDate.getHours(); 

//if (hours < 12) {
   // alert("It's AM");
//} else {
    //alert("It's PM");
//}



//Q8




//Q9
//var  ramadanStartDate = new Date(2015, 5, 18);
//var today = new Date();
//var timeDiff = today - ramadanStartDate;
//var daysPast = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
//console.log(daysPast);




//Q10
//var referenceDate = new Date(2015, 0, 1);
//var today = new Date();
//var seconds = Math.floor((today - referenceDate) / 1000);
//document.write(seconds);



//Q11
//var currentDate = new Date(); 
//var hours = currentDate.getHours(); 
//currentDate.setHours(hours + 2)
//document.write(currentDate); 


//Q12
//var currentDate = new Date();
//currentDate.setFullYear(currentDate.getFullYear() - 100);
//alert(currentDate);



//Q13
//var age = prompt("Please enter your age:");
//var currentYear = new Date().getFullYear(); 
//var birthYear = currentYear - age;
//document.write("Your birth year is: " + birthYear); 


//Q14
//var customerName = "John Doe"; 
//var currentMonth = new Date().toLocaleString
//('default', { month: 'short' }); 
//var numberOfUnits = 410; 
//var chargesPerUnit = 16; 

//var netAmount = (numberOfUnits * chargesPerUnit).toFixed(2);

//var latePaymentSurcharge = 350;

//var grossAmount = (parseFloat(netAmount) + latePaymentSurcharge).toFixed(2);

//document.write(<h2>K-Electric Bill</h2>);
//document.write(Customer Name: ${customerName}<br>);
//document.write(Current Month: ${currentMonth}<br>);
//document.write(Number of Units: ${numberOfUnits}<br>);
//document.write(Charges per Unit: ${chargesPerUnit.toFixed(2)}<br>);
//document.write(Net Amount Payable (within Due Date): ${netAmount}<br>);
//document.write(Late Payment Surcharge: ${latePaymentSurcharge.toFixed(2)}<br>);
//document.write(Gross Amount Payable (after Due Date): ${grossAmount}<br>);