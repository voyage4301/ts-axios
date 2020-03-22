interface Counter {
    (start: number): string // 函数
    interval: number // 对象
    reset(): void // 函数
}

function getCounter(): Counter {
    let counter = function (start: number) {
        console.log(start);
    } as Counter

    counter.interval = 123

    counter.reset = function () { }

    return counter
}

let c = getCounter()
console.log(c);

c(10)
c.reset()
c.interval = 123
