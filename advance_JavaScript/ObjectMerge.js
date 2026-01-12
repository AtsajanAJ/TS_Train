// get many object
function objectMerge(...objects) {
    //ใช้ Object.assign
    return Object.assign({}, ...objects);
    
    // ใช้ spread operator
    // return { ...objects[0], ...objects[1], ...objects[2] };
}

const obj1 = { name: 'John', age: 25 };
const obj2 = { hasCar: true };
const obj3 = { isAdmin: false };

const mergedObj1 = objectMerge(obj1, obj2);
console.log("mergedObj1:", mergedObj1);
// mergedObj1 = {name: 'John', age: 25, hasCar: true }

const mergedObj2 = objectMerge(obj1, obj2, obj3);
console.log("mergedObj2:", mergedObj2);
// mergedObj2 = {name: 'John', age: 25, hasCar: true, isAdmin: false }
