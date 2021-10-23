//console.log("Merhaba dünya");

//JS type safe değildir

// değişkeni var ile tanımlarsak fonksiyonun içindekiyle karışabilir bu yüzden let ile tanımlamak daha doğrudur

let dolarBugun = 9.3;
let dolarDun = 9.2;

{
  let dolarDun = 9.1;
}
//console.log(dolarDun);

const euroDun = 11.2;
//euroDun=11 // Const ile değişken tanımlarsak değerini değiştiremeyiz

//console.log(euroDun);

//array
let konutKredileri = [
  "Konut Kredisi",
  "Emlak Konut Kredisi",
  "Kamu Konut Kredisi",
];

//console.log("<ul>");

for (let i = 0; i < konutKredileri.length; i++) {
  //console.log(konutKredileri[i]);
}

//console.log("</ul>");

//console.log(konutKredileri);

///////////////////////

// rest

let showProducts = function name(id, ...products) {
    console.log(id);
    console.log(products);
}

//console.log(typeof showProducts);

//showProducts(10,"Elma","Armut","Karpuz")

///////////////////////////

// spread => bir arrayi parametre gibi ayırmaya yarar

let points=[1,2,3,4,5,6,7,8,9,11,2,3,23,21,312,31]

//console.log(... points)

//console.log(Math.max(...points))

//console.log(..."ABC","D",..."EFG","H")

///////////////////////////

// Destructuring => arrayin değerlerini değişkene atama yöntemidir

let populations = [10000,20000,30000,[40000,100000]]
let [small,medium,high,[a,b]]=populations

console.log(small)
console.log(medium)
console.log(high)

console.log(a)
console.log(b)

let category = {id:1,name:"İçecek"}

console.log(category.id)
console.log(category["name"])

let {id,name} = category

console.log(id)
console.log(name)

/////////////////////////////

// Redux


