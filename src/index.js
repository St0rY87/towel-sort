// You should implement your task here.
/* function towelSort(matrix) {

} */

module.exports = function towelSort (matrix = []) {
  let result = [];
  let lengthElementOfmatrix= 0;
    for(let i = 0; i < matrix.length; i++) {
        lengthElementOfmatrix = matrix[i].length;
        for(let j = 0; j < lengthElementOfmatrix; j++) {
            if(i % 2 === 0) {
                result.push(matrix[i][j]); 
            }
            else {
                result.push(matrix[i][lengthElementOfmatrix - j - 1]);
            }
        }
    }
    return result;
}
