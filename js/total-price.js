document.getElementById('btn-player-expense').addEventListener('click',function(){
    const TotalPlayer=document.getElementById('Total-player');
    const TotalPlayerString=TotalPlayer.innerText;
    const TotalPlayerNumber=parseInt(TotalPlayerString);
     
    const PerPlayerExpense=document.getElementById('per-player-expense');
    const perPlayer=PerPlayerExpense.value;
    const totalPlayerExpense=TotalPlayerNumber*perPlayer;

    const totalPlayerField=document.getElementById('total-player-field');
    totalPlayerField.innerText=totalPlayerExpense;
})
document.getElementById('total-expense').addEventListener('click',function(){
 
    const TotalPlayer=document.getElementById('Total-player');
    const TotalPlayerString=TotalPlayer.innerText;
    const TotalPlayerNumber=parseInt(TotalPlayerString);

    const PerPlayerExpense=document.getElementById('per-player-expense');
    const perPlayer=PerPlayerExpense.value;
    const totalPlayerExpense=TotalPlayerNumber*perPlayer;

    const totalPlayerField=document.getElementById('total-player-field');
    totalPlayerField.innerText=totalPlayerExpense;

    const managerExpense=document.getElementById('manager-expense');
    const managerTotalExpenseString=managerExpense.value;
    const managerTotalExpense=parseInt(managerTotalExpenseString);


    const coachExpense=document.getElementById('coach-expense');
    const coachTotalExpenseString=coachExpense.value;
    const coachTotalExpense=parseInt(coachTotalExpenseString);


    const Total=totalPlayerExpense+managerTotalExpense+coachTotalExpense;

    const TotalExpenseField=document.getElementById('Total-expense-field');
    TotalExpenseField.innerText=Total;
})