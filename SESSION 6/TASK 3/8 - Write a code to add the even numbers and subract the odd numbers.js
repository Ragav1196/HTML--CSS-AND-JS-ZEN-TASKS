var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
var sub = 0;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2 == 0)
 {
 sum += numsArr[i]
 }
 else
 {
 sub += numsArr[i]
 }
}
ans = 100 + (sum - sub);
console.log(ans);