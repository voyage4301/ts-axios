function f(x: number, y?: number) {
    return x + (y || 0)
}

f(1, 2)
f(1)
f(1, undefined)
// f(1, null) // 类型“null”的参数不能赋给类型“number | undefined”的参数
/* -------------- */
class C {
    a: number = 0
    b?: number
}

let cc = new C()
cc.a = 12
// cc.a = undefined // 不能将类型“undefined”分配给类型“number”。
cc.b = undefined
// cc.b = null // 不能将类型“null”分配给类型“number | undefined”


function fx(sn: string | null): string {
    return sn! || 'default'
}

function broken(name: string | null): string {
    function postfix(epither: string) {
        return name!.charAt(0) + '. the' + epither // ! 表示肯定
    }
    name = name || 'Bob'
    return postfix(name)
}