function getInputValue(idname){
   const inputHolder = document.getElementById(idname);
   const currentInput = parseFloat(inputHolder.value);
   inputHolder.value = '';
   return currentInput;


}

function changeFieldvalue(totalField,amount){
   const previousBalance = document.getElementById(totalField);
   const previousBal = parseFloat(previousBalance.innerText);
   const newBalance = previousBal+ amount;
   previousBalance.innerText = newBalance;
}

function updateMainBalance(amount,isAdd){
   const balanceTotal = document.getElementById('balance-total');
   const balanceNum = parseFloat(balanceTotal.innerText);
  if (isAdd == true){
      const updatedBal = balanceNum+amount;
      balanceTotal.innerText = updatedBal;
  }else{
      // const updatedBal = balanceNum-amount;
      // balanceTotal.innerText = updatedBal;

      if( amount>balanceNum ){
         changeFieldvalue('total-withdraw',0);
         alert('Not Enough Credit.Transaction failed. ');
         
         
      }else{
         console.log('transaction successfull');
   
         changeFieldvalue('total-withdraw',amount);
   
         const updatedBal = balanceNum-amount;
         balanceTotal.innerText = updatedBal;
      
      }
   }

}

const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click',function(){
   const depositAmount = getInputValue('deposit-amount');
   // const previousBalance = document.getElementById('total-deposit')
   // const previousBal = parseFloat(previousBalance.innerText);
   // const newBalance = previousBal+depositAmount;
   
   // previousBalance.innerText = newBalance;
   // depositAmount.value ='';
   // balance total
   changeFieldvalue('total-deposit',depositAmount);
   // const balanceTotal = document.getElementById('balance-total');
   // const balanceNum = parseFloat(balanceTotal.innerText);
   // const updatedBal = balanceNum+depositAmount;
   // balanceTotal.innerText = updatedBal;
   updateMainBalance(depositAmount,true);
   
   
})

// widtdraw section

const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click',function(){
   // Check Current Balance
   // const mainBalance = document.getElementById('balance-total');
   // const mainBalanceValue = parseFloat(mainBalance.innerText);
   // 

   const withdrawAmount = getInputValue('withdraw-amount');
   updateMainBalance(withdrawAmount,false);

   
   // if( withdrawAmount>mainBalanceValue ){
   //    alert('Not Enough Credit.Transaction failed. ');
   //    withdrawAmount.value ='';

   // }else{
   //    console.log('transaction successfull');

   //    changeFieldvalue('total-withdraw',withdrawAmount);

   //    const updatedBal = mainBalanceValue-withdrawAmount;
   //    mainBalance.innerText = updatedBal;
   
   // }
   
   
   // const previousBalance = document.getElementById('total-withdraw');
   // const previousBal = parseFloat(previousBalance.innerText);
   
   // const newBalance = previousBal+currentBalance;
   
   // previousBalance.innerText = newBalance;
   // withdrawAmount.value ='';
   // console.log(newBalance);
   // // // balance total
   
   // balanceTotal.innerText = updatedBal;
    
})
