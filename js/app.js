let budget = prompt('Please tell us your weelky budget')

while (!/^[0-9]+$/.test(budget)) {
    alert("You did not enter a number.");
    budget = prompt("Enter a number: ");
}
alert("You entered a number.");
let left = document.querySelector('#left')

if(budget !== ''){
    document.querySelector('#total').textContent = budget;
    left.textContent = budget;
}else{
    while(budget == ''){
        budget = prompt('Enter your budget');
        if(budget !== ''){
            document.querySelector('#total').textContent = budget;
            left.textContent = budget
        }
    }
}

const btn = document.querySelector('.btn-primary');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let expense = document.querySelector('#expense').value;
    let amount = document.querySelector('#amount').value;
    let numberAmount = Number(amount);
    let leftNumber = Number(left.textContent);
    if(expense == '' || amount == ''){
        alert('تمامی فیلدها را پر کنید');
    }else{
        const ul = document.querySelector('.list-group');
        const li = document.createElement('li');
        const span = document.createElement('span');
        const span2 = document.createElement('span');
        span.textContent = expense;
        span2.textContent = amount;
        li.appendChild(span);
        li.appendChild(span2);
        ul.appendChild(li);
        left.textContent = leftNumber - numberAmount;
        expense = '';
        amount = '';
    }
  
   
})