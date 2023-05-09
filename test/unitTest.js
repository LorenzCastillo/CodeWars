const colors = require("./colors.js")

class TestCase {
    constructor(filePath, expectedResult, actualResult) {
        this.filePath = filePath
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    }
}

class UnitTest {
    constructor() {
        this.array = [];
    }

    insert(filePath, expectedResult, actualResult) {
        const test = new TestCase(filePath, expectedResult, actualResult);
        this.array.push(test);
    }

    run() {
        for (let i = 0; i < this.array.length; i++) {
            console.log(colors.white, "====================");
    
            console.log(colors.green, "Testing: " + this.array[i].filePath.toString());
            console.log(colors.yellow, "Expected Result: " + this.array[i].expectedResult);
            
            if (this.array[i].expectedResult === this.array[i].actualResult) {
                console.log(colors.green, "Actual Result: " + this.array[i].actualResult);
            } else {
                console.log(colors.red, "Actual Result: " + this.array[i].actualResult);
            }
        }
        console.log(colors.white, "====================");        
    }
}

module.exports = UnitTest;