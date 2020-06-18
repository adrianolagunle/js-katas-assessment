let bodyElement = document.querySelector("body")
let currentArray = []

for (let index = 1; index <= 20; index = index + 1) {
    currentArray.push(index)
}


createAppend("kata 1")

function createAppend(header) {
    let newHead = document.createElement("h1")
    newHead.append(header)
    bodyElement.append(newHead)
}

function newDiv(body) {
    let newDiv = document.createElement("div")
    newDiv.append(body)
    bodyElement.append(newDiv)
}

newDiv(currentArray.join(", "))

createAppend("kata 2")
currentArray = []
for (let index2 = 2; index2 <= 20; index2 = index2 + 2) {
    currentArray.push(index2)

}
newDiv(currentArray.join(", "))

createAppend("kata 3")
currentArray = []
for (let index3 = 1; index3 <= 19; index3 = index3 + 2) {
    currentArray.push(index3)

}
newDiv(currentArray.join(", "))

createAppend("kata 4")
currentArray = []
for (let index4 = 5; index4 <= 100; index4 = index4 + 5) {
    currentArray.push(index4)

}
newDiv(currentArray.join(", "))

createAppend("kata 5")
currentArray = []
for (let index5 = 1; index5 <= 10; index5 = index5 + 1) {
    currentArray.push(index5 * index5)

}
newDiv(currentArray.join(", "))

createAppend("kata 6")
currentArray = []
for (let index6 = 20; index6 >= 1; index6 = index6 - 1) {
    currentArray.push(index6)

}
newDiv(currentArray.join(", "))

createAppend("kata 7")
currentArray = []
for (let index7 = 20; index7 >= 2; index7 = index7 - 2) {
    currentArray.push(index7)

}
newDiv(currentArray.join(", "))

createAppend("kata 8")
currentArray = []
for (let index8 = 19; index8 >= 1; index8 = index8 - 2) {
    currentArray.push(index8)

}
newDiv(currentArray.join(", "))

createAppend("kata 9")
currentArray = []
for (let index9 = 100; index9 >= 5; index9 = index9 - 5) {
    currentArray.push(index9)

}
newDiv(currentArray.join(", "))

createAppend("kata 10")
currentArray = []
for (let index10 = 10; index10 >= 1; index10 = index10 - 1) {
    currentArray.push(index10 * index10)

}
newDiv(currentArray.join(", "))

let sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];
createAppend("kata 11")
newDiv(sampleArray.join(", "))

createAppend("kata 12")
currentArray = []

for (let index12 = 2; index12 < sampleArray.length; index12 = index12 + 1) {
    if (sampleArray[index12] % 2 === 0) {

        currentArray.push(sampleArray[index12])
    }

}
newDiv(currentArray.join(", "))

createAppend("kata 13")
currentArray = []

for (let index13 = 0; index13 < sampleArray.length; index13 = index13 + 1) {
    if (sampleArray[index13] % 2 === 1) {

        currentArray.push(sampleArray[index13])
    }

}
newDiv(currentArray.join(", "))

createAppend("kata 14")
currentArray = []

for (let index14 = 0; index14 < sampleArray.length; index14 = index14 + 1) {
    currentArray.push(sampleArray[index14] * sampleArray[index14])

}
newDiv(currentArray.join(", "))

createAppend("kata 15")

let sumVar = 0
for (let index15 = 1; index15 <= 20; index15 = index15 + 1) {
    sumVar = sumVar + index15
}
newDiv (sumVar)

createAppend("kata 16")
sumVar = 0
for (let index16 = 0; index16 < sampleArray.length; index16 = index16 + 1) {
    sumVar = sumVar + sampleArray[index16]
}
newDiv(sumVar)

createAppend("kata 17")
let lowestNumVar = sampleArray[0]
for (let index17 = 0; index17 < sampleArray.length; index17 = index17 + 1) {
    if (lowestNumVar > sampleArray[index17]) {
        lowestNumVar = sampleArray[index17]
    }
    
}
newDiv(lowestNumVar)

createAppend("kata 18")
let highestNumVar = sampleArray[0]
for (let index18 = 0; index18 < sampleArray.length; index18 = index18 + 1) {
    if (highestNumVar < sampleArray[index18]) {
        highestNumVar = sampleArray[index18]
    }
    
}
newDiv(highestNumVar)