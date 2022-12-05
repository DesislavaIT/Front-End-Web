const sumArrays = (arr1, arr2) => {
  let result1 = Array();
  let result2 = Array();

  const flatten = (arr, result) => {
    arr.forEach(el => {
      if (Array.isArray(el)) {
        flatten(el, result)
      } else {
        result.push(el);
      }
    })
  };

  flatten(arr1, result1);
  flatten(arr2, result2);

  let hasOneNumber = false;
  let minNum = 0;
  result1.forEach(element => {
    if (typeof element === "number") { 
      if(!hasOneNumber) {
        hasOneNumber = true;
        minNum = element;
      }
      else {
        if(minNum > element) {
          minNum = element;
        }
      }
    }
  })

  result2.forEach(element => {
    if (typeof element === "number") { 
      if(!hasOneNumber) {
        hasOneNumber = true;
        minNum = element;
      }
      else {
        if(minNum > element) {
          minNum = element;
        }
      }
    }
  })

  var answer2 = "";
  result1.forEach(element => {
    if (typeof element !== "number") { 
      if(hasOneNumber) {
        answer2 = `Min number found is ${minNum}`;
      }
      else {
        answer2 = `No number type found in input arrays`;
      }
    }
  });

  result2.forEach(element => {
    if (typeof element !== "number") { 
      if(hasOneNumber) {
        answer2 = `Min number found is ${minNum}`;
      }
      else {
        answer2 = `No number type found in input arrays`;
      }
    }
  })

  if(answer2 !== "")
  {
    return answer2;
  }

  let answer = Array();
  result1.forEach(element => {
    if(result2.includes(element) && !answer.includes(element) && element % 3 === 0) {
      answer.push(element);
    }
  })

  return answer.reduce((a, b) => a + b, 0);
};

// console.log(sumArrays([1, 2, 3, 4, 5, 6, 7, 8, 9], [7, 8, 6, 10, 11, 12, 9])); // 15
// console.log(sumArrays([1, 2, [3, [4, [5, [6]]]]], [4, [[[[[[6]]]]]]])); // 6
// console.log(sumArrays([1, 2, 3, () => {}], [3, 4])); // Min number found is 1
// console.log(sumArrays([() => {}], ["1"])); // No number type found in input arrays
// console.log(sumArrays([() => {}], [{}])); // No number type found in input arrays

const input = [
  { name: "Martin", mark: 4, course: "SI" },
  { name: "Elena", mark: 6, course: "IS" },
  { name: "Tsani", mark: 5, course: "IS" },
  { name: "Niya", mark: 2.9, course: "IS" },
  { name: "Ivo", mark: 2.5, course: "KN" }
];


const getTopStudents = students => {
  return students.filter(student => {
    if(student.mark > 5.5) {
      return student;
    }});
};
const getLowStudents = students => {
  return students.filter(student => {
    if(student.mark < 3) {
      return student;
    }});
};
const orderStudents = (students, criteria) => {
  var answer = students;
  if(!criteria) {
    answer.sort(function(a, b){return a['mark'] - b['mark']});
    return answer.map(student => {
      return {
        ...student,
        mark: student.mark < 3 ? 2 : Math.round(student.mark)
      }});
  }

  if(criteria['course']) {
    answer = students.filter(student => {
      if(student.course === criteria['course']) {
        return student;
      }});
  }

  answer.sort(function(a, b){return a['mark'] - b['mark']});

  if(criteria['type']) {
    if(criteria['type'] === 'descending') {
      answer.reverse();
    }
  }

  return answer.map(student => {
    return {
      ...student,
      mark: student.mark < 3 ? 2 : Math.round(student.mark)
    }});
};

// console.log('Top: ', getTopStudents(input));
// console.log('Low: ', getLowStudents(input));
// console.log('ascending all: ', orderStudents([...input]));
// console.log('descending all: ', orderStudents([...input], { type: "descending" }));
// console.log('ascending IS: ', orderStudents([...input], { course: "IS"}));
// console.log('descending IS: ', orderStudents([...input], { type: "descending", course: "IS" }));
// console.log('ascending: IS', orderStudents([...input], { type: "ascending", course: "IS" }));

export { sumArrays, getTopStudents, getLowStudents, orderStudents };
