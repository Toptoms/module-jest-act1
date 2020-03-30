module.exports = {
    sum: (a, b) => a + b,
    div: (a, b) => a / b,
    multi: (a, b) => a * b,
    soust: (a, b) => a - b,

    dateTime2000: () => {
        let testTime = new Date("2000-01-01T00:00:00").getTime()
        let nowTime = Date.now()
        return Math.abs(testTime - nowTime) / 1000
    }

}

