// function moneyBox(coint){
//     let saveCoint = 0
//     saveCoint += coint;
//     console.log(`MoneyBox: ${saveCoint}`)
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox(){
    let saveCoint = 0;
    function countCoint(coint){
        saveCoint += coint;
        console.log(`MoneyBox: ${saveCoint}`)
    }
    return countCoint;
}
const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const myMoneyBoxAlberto = moneyBox();
myMoneyBoxAlberto(10);
myMoneyBoxAlberto(20);
myMoneyBoxAlberto(30);