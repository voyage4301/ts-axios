/*  */
interface LabelValue {
    label: string
}

// function printlabel(labelObj: { label: string }) {
function printlabel(labelObj: LabelValue) {
    console.log(labelObj.label);
}

let labelObj = { label: 'hello world', size: 10 } 

printlabel(labelObj)