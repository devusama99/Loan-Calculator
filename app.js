// Listen for submit
document.getElementById('loan-form').addEventListener('submit' , function(e)
{
    // Hide Results
    document.getElementById('results').style.display= 'none'
    // show loader
    document.getElementById('loading').style.display= 'block'

    setTimeout(calcLoan , 500)

    e.preventDefault()
})

// calculate results
function calcLoan()
{
    console.log('calculating')
    // Ui variables
    const amount = document.getElementById('amount')
    const interest = document.getElementById('interest')
    const monthlyPayment = document.getElementById('monthly-payment')
    const totalPayment = document.getElementById('total-payment')
    const totalInterest = document.getElementById('total-interest')

    const principle = parseFloat(amount.value)
    const calculatedInterest= parseFloat(interest.value) / 100 / 12
    const calculatedPayments = parseFloat(years.value)*12

    // compute monthly payments
    const x = Math.pow(1 + calculatedInterest , calculatedPayments)
    const monthly = (principle*x*calculatedInterest)/(x-1)

    if(isFinite(monthly))
    {
        monthlyPayment.value = monthly.toFixed(2)
        totalPayment.value = (monthly * calculatedPayments).toFixed(2)
        totalInterest.value=((monthly * calculatedPayments) - principle).toFixed(2)
        // hide spinner
        document.getElementById('loading').style.display= 'none'
        // show results
        document.getElementById('results').style.display= 'block'
    }
    else
    {
        showError('Please Check Your Numbers')
    }


   
}

// function showerror
function showError(message)
{
    // create a div
    document.getElementById('loading').style.display= 'none'

    const errorDiv = document.createElement('div')    
    errorDiv.className = 'alert alert-danger'

    errorDiv.appendChild(document.createTextNode(message))

    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')
    

    card.insertBefore(errorDiv , heading)

    // clear error after three sec
    setTimeout(clearError , 3000)

    function clearError()
    {
        document.querySelector('.alert').remove()
    }
    
}
