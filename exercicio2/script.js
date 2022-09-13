let num = Number(prompt("Qual tabuada você deseja ?"));

let indice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i in indice){
    console.log(`${num} x ${Number(i)+1} = ${num * (Number(i)+1)}`)
};