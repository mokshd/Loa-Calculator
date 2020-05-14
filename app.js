
document.querySelector('#loan-form').addEventListener('submit',function(e){
    //show loader
    document.querySelector('#loading').style.display = 'block';
    //hide result
    document.querySelector('#results').style.display = 'none';

    // setTimeout
    setTimeout(calculateResults,2000);

    e.preventDefault();

});



//Calculate results
function calculateResults(){
    

    //ui variables
    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');
    const monthlyPayment = document.querySelector('#monthly-payment');
    const totalInterest = document.querySelector('#total-interest');
    const totalPayment = document.querySelector('#total-payment');

    const principal =parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value)/100/12;
    const calculatedPayments = parseFloat(years.value) * 12;


    //monthly payments
    const x =Math.pow(1+calculatedInterest,calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly*calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly*calculatedPayments)-principal).toFixed(2);
        //show result
        document.querySelector('#results').style.display = 'block';
        //hide loader
        document.querySelector('#loading').style.display = 'none';
    }
    else{
        sh0wError('Please check your number');
    }
//show error
function sh0wError(error){
    //create a div
    const errorDiv = document.createElement('div');
     //class name
     errorDiv.className='alert alert-danger';

    //get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
     
    //create text node to append to div
    errorDiv.appendChild(document.createTextNode(error));

    //insert above heading
    card.insertBefore(errorDiv,heading);

    //clearerror after 3 sec
    setTimeout(clearError,3000);
    //hide loader
    document.querySelector('#loading').style.display = 'none';
}

    
}
function clearError(){
    document.querySelector('.alert').remove();
}
