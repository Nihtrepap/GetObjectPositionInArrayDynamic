// compared with ES6 findIndex method
// not the best test were made but same data gave following numbers:
// Avarage on multiple test:
// findIndex - 0.3728... ms
// returnPositionIndexOfObject - 0.07104... ms
// My method is dynamic and you dont have to manually check all properties.
// ------------------------------------------
// Look if objects exists inside array of object. 
// If exist return position index, else return -1;
// Parameters:
// arr = An Array with objects([{}])
// find = The object to find ({})
// ------------------------------------------
function returnPositionIndexOfObject(arr, find) {
    // create array with the property names from "find"
    let props = [];
    for (let key in find) {
            props.push(key);        
    }
    for (let i = 0; i < arr.length; i++) {
        let equalityCheck = 0;
        for (let j = 0; j < props.length; j++) {
            // Check if array contains property and if it is the same as find obj.
            if (arr[i][props[j]] == find[props[j]]) {
                equalityCheck++;
                // If all properties is correct then thats the one; return position index
                if (equalityCheck >= props.length) {
                    return i;
                    break;
                }
            }
        }
    }
    return -1;
}