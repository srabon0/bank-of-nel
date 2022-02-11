// This is functional based transaction 
function getInputValue(){
    const depositAmount = document.getElementById('deposit-amount');
    const currentInput = parseFloat(depositAmount.value);
    console.log("Im a new func",currentInput);


}


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
   
   getInputValue()
    
})

// widtdraw section

const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click',function(){
   // Check Current Balance
   const mainBalance = document.getElementById('balance-total');
   const mainBalanceValue = parseFloat(mainBalance.innerText);
   // 
   console.log(mainBalanceValue);
   const withdrawAmount = document.getElementById('withdraw-amount');
   const currentWitdraw = parseFloat(withdrawAmount.value);
   console.log(currentWitdraw);

   if( currentWitdraw>mainBalanceValue ){
      alert('Not Enough Credit.Transaction failed. ');
      withdrawAmount.value ='';

   }else{
      console.log('transaction successfull');
      const previousBalance = document.getElementById('total-withdraw');
      const previousBal = parseFloat(previousBalance.innerText);
   
      const newBalance = previousBal+currentWitdraw;
   
      previousBalance.innerText = newBalance;
      withdrawAmount.value ='';


      const updatedBal = mainBalanceValue-currentWitdraw;
      mainBalance.innerText = updatedBal;
   
   }
   
   
   // const previousBalance = document.getElementById('total-withdraw');
   // const previousBal = parseFloat(previousBalance.innerText);
   
   // const newBalance = previousBal+currentBalance;
   
   // previousBalance.innerText = newBalance;
   // withdrawAmount.value ='';
   // console.log(newBalance);
   // // // balance total
   
   // balanceTotal.innerText = updatedBal;
    
})
