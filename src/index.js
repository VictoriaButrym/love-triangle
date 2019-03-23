/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let total = 0;
  let countTriangles = 0;
  
  for (let i = 0; i < preferences.length; i++ ){
    let first = preferences[i];
    let second = preferences[first - 1];
    let third = preferences[second - 1];
    if (third === i + 1){
      countTriangles++;
    }
    if (countTriangles == 3){
      total++;
      countTriangles = 0;
    }
  }
  return total;
};
