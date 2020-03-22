class Control {
    private state: any
}

interface SelectableControl extends Control { // 接口继承类
    select(): void
}

class Button extends Control implements SelectableControl { // 要想实现接口接口, 必选先继承 
    select() { }
}

class TextBox extends Control { // 直接继承 是没问题的
    select() { }
}

// class ImageC implements SelectableControl { // 没继承 报错了!!!!
//     select() { }
// }