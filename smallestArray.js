let arr = [45, 12, 78, 3, 25];
let min = arr[0];

for (let i = 1; i < arr.lenngth; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log("Smallest element:", min);