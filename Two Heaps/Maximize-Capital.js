/**
 *  想法：
 *      1. 用我的方法可以解出來，但去leetcode看完之後，發現沒考慮到「投資過不能投資」
 *      2. 用min-Heap建立[capital[index], index]，root就一直會是最可能的解。 max-heap放當下最適合解
 * 
 */

// const find_maximum_capital = function(capital, profits, numberOfProjects, initialCapital) {

//     let result = profits[initialCapital] + capital[initialCapital];

//     for (let i = 0; i < numberOfProjects - 1; i++) {
//         if (result <= capital.length-1) {
//           result = profits[result] + capital[result];
//         } else {
//           result += profits[capital.length-1];
//         }
//     }
//     return result;
//   };

const Heap = require('collections/heap');

const find_maximum_capital = function(capital, profits, numberOfProjects, initialCapital) {
  const minCapitalHeap = new Heap([], null, (a,b) => b[0] - a[0]);
  const maxProfitHeap = new Heap([], null, (a,b) => a[0] - b[0]);

  // insert all project captials to min-heap
  for (let i = 0; i < profits.length; i++) {
    minCapitalHeap.push([capital[i], i]);
  }

  //console.log('minCapitalHeap: ', minCapitalHeap);
  // try to find a total of 'numberOfProjects' best projects
  let availableCapital = initialCapital;
  for (let i = 0; i < numberOfProjects; i++) {
    while(minCapitalHeap.length > 0 && minCapitalHeap.peek()[0] <= availableCapital) {
      const [capital, index] = minCapitalHeap.pop();
      maxProfitHeap.push([profits[index], index]);
    }

    if(maxProfitHeap.length === 0) {
      break;
    }

    availableCapital += maxProfitHeap.pop()[0];
  }
  return availableCapital;
}

  
  console.log(`Maximum capital: ${find_maximum_capital([0, 1, 2], [1, 2, 3], 2, 1)}`)
  console.log(`Maximum capital: ${find_maximum_capital([0, 1, 2, 3], [1, 2, 3, 5], 3, 0)}`)