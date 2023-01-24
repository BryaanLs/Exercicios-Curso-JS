function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

let rand = random(1, 50);
console.log(rand);

while (rand !== 50) {
    rand = random(1, 51);
    console.log(rand);
}