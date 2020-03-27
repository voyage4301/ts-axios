let pws = 'pws1234'

class Employee4 {
    private _fullName: string = ''
    get fullName(): string {
        return this._fullName
    }
    set fullName(newName: string) {
        if (pws && pws === 'pws134') {
            this._fullName = newName
        } else {
            console.error('Error Unauthorized update of employee!')
        }
    }
}

let employee1 = new Employee4()
employee1.fullName = 'Bob Smith'

if(employee1.fullName) {
    console.log(employee1.fullName );
}