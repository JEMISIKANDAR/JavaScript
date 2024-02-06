const coding = ["JS", "Ruby", "Python", "Cpp"]

const values = coding.forEach( (item) => {
    return item;
} )

console.log(values)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const allNums = myNums.filter( (num)=> {
    return num > 4
})

console.log(allNums);