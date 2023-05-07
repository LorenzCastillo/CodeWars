const colors = {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
};

class testCase {
    constructor(filePath, expectedResult, actualResult) {
        this.filePath = filePath
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    }
}

class test {
    constructor() {
        this.array = [];
    }

    insert(filePath, expectedResult, actualResult) {
        const testItem = new testCase(filePath, expectedResult, actualResult);
        this.array.push(testItem);
    }

    run() {
        for (let i = 0; i < this.array.length(); i++) {
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

module.exports = test;