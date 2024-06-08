function mars(){
    let a = prompt("Ismingizni kiriting")

    console.log(a.length);
}


function randomSon(){
  let son =  Math.floor(Math.random()*100);

  if(son%2 == 0){
    console.log(`${son} -> juft son`);
  }else{
    console.log(`${son} -> toq son`);
  }

}

let arr = [];

function qushish(){
    let a = prompt("Kiriting");
    arr.push(a)
    console.log(arr);
}
