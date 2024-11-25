

var balance = 0;
var risk=0;
var reward=0;
var riskDollar=0;
var rewardDollar=0;
var riskReward=0;
var commision=0;
var sumCommision=0;
var startBalance=0;
var pnl=0;
var pnl_2=0;
var sumWin=0;
var sumLoss=0;  
var profitFaktor=0
var winarray=[];
var lossarray=[];

function inital() {
  balance = parseFloat(document.getElementById('balance').value);
  risk = parseFloat(document.getElementById('risk').value);
  reward = parseFloat(document.getElementById('reward').value);
  commision = parseFloat(document.getElementById('commision').value);
  startBalance=parseFloat(document.getElementById('balance').value);
  
  var balance_display=document.getElementById('balance_display')
  balance_display.innerText="Balance: "+balance.toFixed(1)+"$";

  
}



function update() {
var winrate_display=document.getElementById('winrate_display')
winrate_display.innerText="Winrate: "+winrate.toFixed(1)+"%"	

var balance_display=document.getElementById('balance_display')
balance_display.innerText="Balance: "+balance.toFixed(1)+"$";

var score_display=document.getElementById('score_display')
score_display.innerText="Total Trades: "+score.toFixed(0);

var commision_display=document.getElementById('commision_display')
commision_display.innerText="Commision: "+sumCommision.toFixed(1)+"$";

var winloss_display=document.getElementById('winloss_display')
winloss_display.innerText="Win: "+win.toFixed(0)+" Loss: "+loss.toFixed(0);

var pnl_display=document.getElementById('pnl_display')
pnl = balance-startBalance+sumCommision;
pnl_display.innerText="PnL: "+pnl.toFixed(1)+"$";

var pnl_2_display=document.getElementById('pnl_2_display')
pnl_2 = balance*100/startBalance-100;
pnl_2_display.innerText="PnL: "+pnl_2.toFixed(1)+"%";


var pf_display=document.getElementById('pf_display');

pf_display.innerText="Profit Faktor: "+profitFaktor.toFixed(1);
sumWin = 0;
sumLoss = 0;




}




var score = 0;
var win=0;
var loss=0;
var winrate=0;



document.getElementById('win').addEventListener('click', function calculateWinrate() {
  win ++;
  score ++;
  sumCommision= sumCommision+commision;

  rewardDollar = balance * reward/100;
  balance += rewardDollar-sumCommision;
  winrate = win/score*100;

 
winarray.push(rewardDollar);

console.log(winarray);
for (let i = 0; i < winarray.length; i++) {
  sumWin += winarray[i];
 
  profitFaktor=(sumWin||1)/(sumLoss||1);

  
 
}


 
update();



});

 
console.log(sumWin);


document.getElementById('loss').addEventListener('click', function calculateLossrate() {
  loss ++;
  score ++;
  sumCommision= sumCommision+commision
  riskDollar = balance * risk/100;
  
  balance -= riskDollar-sumCommision;  
  winrate = win/score*100;
 
 lossarray.push(riskDollar);
  console.log(lossarray);
  
  for (var i = 0; i < lossarray.length; i++) {
    sumLoss += lossarray[i];

    profitFaktor=(sumWin||1)/(sumLoss||1);
  
    
  }
 
update ()




}); 





document.getElementById('reset').addEventListener('click', function reset() {

balance = 0;
winrate = 0;
score = 0;
sumCommision = 0;

win=0;
loss=0;
winarray.length=0;
lossarray.length=0;
profitFaktor=0;

update();
  
});
