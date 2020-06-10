//Listen by submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Racunanje
function calculateResults(e){
    console.log('Racunam...')
    //UI variable
    const amount = document.getElementById('amount');
    const interset = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    //pretvaranje u decimale
    const principal = parseFloat(amount.value);

    //racunanje u mjesecima
    const calculatedInterest = parseFloat(interset.value) / 100 / 12;

    //raucnanje u godine
    const calculatedPayments = parseFloat(years.value) * 12;

    //izracunavanje u mjesecima
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
    }else{
        //funkcija za error polja
        showError('Provjerite svoje brojeve');
    }
    e.preventDefault();
}

//prikazi gresku
function showError(){
    //nparavi div
    const errorDiv = document.createElement('div');

    //dodaj elemente
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //Dodaj class
    errorDiv.className = 'alert alert-danger';

    //Napravi text i dodaj u div
    errorDiv.appendChild(document.createTextNode(error));

    //napravi error iznda heading
    card.insertBefore(errorDiv, heading);
    
    setTimeout(clearError, 3000);
}

// Clear error
function clearError(){
  document.querySelector('.alert').remove();
}
