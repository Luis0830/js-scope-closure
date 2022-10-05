function moneyBox(){
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(150);
myMoneyBox(200);