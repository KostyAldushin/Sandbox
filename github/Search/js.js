
const currencyList = 'https://api.coinmarketcap.com/v1/ticker/?limit=30';
let names =[];
fetch(currencyList)
    .then((res) => res.json())
.then((data) => names = names.concat(data));

let findCurrency = (search, currencyName) => {
    return currencyName.filter(item => {
        let reg = new RegExp(`^${search}`,'gi');
    return item.name.match(reg) || item.symbol.match(reg);

})
}

function showResult() {

    let resultArr = findCurrency(this.value, names);
    console.log(names);
    console.log(resultArr);
    console.log(this);


}
let html = resultArr.map(item => {

})
const input = document.querySelector('.search');
const conterneir = document.querySelector(".result")

input.addEventListener('input', showResult);
console.log(event);
console.log(event.target.textContent);