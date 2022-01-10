let to_seconds = (hours) => {
    let result = hours * 60 * 60;
    return result;
}
console.log(to_seconds(2));
console.log(to_seconds(10));
console.log(to_seconds(24));