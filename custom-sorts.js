function ageSort(users) {
  compareFn = (a, b) => {
    if (a.age < b.age) return -1;
    else if (b.age < a.age) return 1;
    return 0;
  }
  users.sort(compareFn);
  return users;
}

function oddEvenSort(arr) {
  compareFn = (a, b) => {
    if (a % 2 === 0 && b % 2 === 1) return 1;
    else if (a % 2 === 1 && b % 2 === 0) return -1;
    else return a - b;
  }

  arr.sort(compareFn)
  return arr;
}

function validAnagrams(s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("")
}

function reverseBaseSort(arr) {
  let compareFn = (a, b) => {
    if ((a).toString().length > (b).toString().length) return -1;
    else if ((a).toString().length < (b).toString().length) return 1;
    else return a - b;
  }
  arr.sort(compareFn)
  return arr;
}

function frequencySort(arr) {
  let obj = {}
  arr.forEach((ele) => {
    if (ele in obj) obj[ele]++
    else obj[ele] = 1;
  })

  let compareFn = (a,b) => {
    if (obj[a] < obj[b]) return -1;
    else if (obj[a] > obj[b]) return 1;
    else return b - a;
  }
  return arr.sort(compareFn)
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
