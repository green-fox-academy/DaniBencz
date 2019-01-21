
let Count: number = 4;
let x :string = "";
let y :string = "";

for (let i :number = 1; i <= Count; i++){

    for (let j :number = 0; j <= Count-i; j++){
        x = x + " ";
    }

    for (let k :number = 0; k < i + (i - 1); k++){
        y = y + "*";
    }

    console.log(x + y);
    x = "";
    y = "";
}
