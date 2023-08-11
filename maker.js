function sortMaker(arr) {
    let max =arr[0];
    let min =arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
          max = arr[i];
        }
        if (arr[i] < min) {
          min = arr[i];
        }
        if(arr[i] == min&&max){
            return "equal"
        }
        
      }
      let output =[max, min];
      return output; 
}
const arr = [5, 9];
const result = sortMaker(arr);

console.log(result);






