const sentence = "hello, my name is emad and i come from nowhere";

const eachCharacter = [...sentence]

const charCount = eachCharacter.reduce((acc, each) => {
    if (acc[each]) {
        acc[each]++;
    } else {
        acc[each] = 1;
    }
    return acc;
}, {});

console.log(charCount);