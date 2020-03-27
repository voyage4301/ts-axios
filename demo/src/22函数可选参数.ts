function fullName(firstName: string, ...restOfName: string[]): string {
    return firstName + ''

}

let res1 = fullName('BOB')
let res2 = fullName('BOB', 'KK', 'DD')
let res3 = fullName('BOB', 'KK') 