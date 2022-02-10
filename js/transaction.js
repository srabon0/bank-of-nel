const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click',function(){
   const depositAmount = document.getElementById('deposit-amount');
   const previousBalance = document.getElementById('total-deposit')
   const previousBal = parseFloat(previousBalance.innerText);
   const currentBalance = parseFloat(depositAmount.value);
   const newBalance = previousBal+currentBalance;
   
   previousBalance.innerText = newBalance;
   depositAmount.value ='';
   // balance total
   const balanceTotal = document.getElementById('balance-total');
   const balanceNum = parseFloat(balanceTotal.innerText);
   const updatedBal = balanceNum+currentBalance;
   balanceTotal.innerText = updatedBal;
    
})