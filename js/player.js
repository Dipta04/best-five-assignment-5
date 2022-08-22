const playerArray=[];
function display(players)
{
//    console.log(players);
   const playerList=document.getElementById('player-list');
   playerList.innerHTML='';
   for(let i=0;i<5;i++)
   {
       const name = players[i].playerName;
       const tr=document.createElement("tr");
       tr.innerHTML=`
       <th>${i+1}</th>
        <td>${name}</td>
       `
       playerList.appendChild(tr);
   }
   

}

function addToTable(element)
{

    const playerName=element.parentNode.children[0].innerText;
    const playerObj={
        playerName: playerName,
    }
    if(playerArray.length==5)
    {
        alert("no more player");
        return;
    }
    playerArray.push(playerObj);
    
    document.getElementById('Total-player').innerText= playerArray.length;
   
    
    display(playerArray);

   
}

document.getElementById('btn-messi').addEventListener('click',function(){
    this.disabled=true;
}) 
document.getElementById('btn-neymar').addEventListener('click',function(){
    this.disabled=true;
}) 
document.getElementById('btn-mabappe').addEventListener('click',function(){
    this.disabled=true;
}) 
document.getElementById('btn-vitor').addEventListener('click',function(){
    this.disabled=true;
}) 
document.getElementById('btn-sergio').addEventListener('click',function(){
    this.disabled=true;
}) 
document.getElementById('btn-reneto').addEventListener('click',function(){
    this.disabled=true;
}) 
