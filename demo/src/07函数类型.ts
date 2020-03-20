interface SearchFunc {
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc

/* 保证类型相同就行  */
mySearch = function (sou: string, sub: string): boolean {
    let result = sou.search(sub)
    return result > -1
}
/* 或者不写类型 利用定义好的函数类型接口 进行类型推断 */
let mySearch1: SearchFunc
mySearch1 = function (s, sub) {
    let result = s.search(sub)
    return result > -1
}
