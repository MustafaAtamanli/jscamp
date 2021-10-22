console.log("Merhaba dünya")

//JS type safe değildir

// değişkeni var ile tanımlarsak fonksiyonun içindekiyle karışabilir bu yüzden let ile tanımlamak daha doğrudur

let dolarBugun = 9.3
let dolarDun = 9.2

{
    let dolarDun=9.10
}
console.log(dolarDun)


const euroDun=11.2
//euroDun=11 // Const ile değişken tanımlarsak değerini değiştiremeyiz

console.log(euroDun)

//array
let konutKredileri=["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]

console.log("<ul>")

for(let i=0;i<konutKredileri.length;i++){
    console.log(konutKredileri[i])
}

console.log("</ul>")



console.log(konutKredileri)


