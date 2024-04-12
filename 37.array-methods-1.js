// Array Method1: SLICE - cut. 
// slice(startIndex) slice the array after 'startIndex' elements.
// slice(startIndex, endIndex) slice the array after 'startIndex' elements and the sliced element count should be (endIndex - startIndex).
// startIndex is inclusive and endIndex is exclusive.
// Important ******** Original array remains intact.
let arr1 = [10, 20, 30, 40, 50];
console.log("Sliced Array is "+arr1.slice(3));
console.log("Sliced Array is "+arr1.slice(3, 4));
let slicedArr1 = arr1.slice(-2);
// If index value is negative then just add length of the array to it.
console.log(slicedArr1);
let slicedArr2 = arr1.slice(3, -4);



// Array Method2: SPLICE - modifies the original array.
// splice method is used to add or remove elements of an existing array and the return value will be removed
// elements from the array.
// splice(startIndex, optional delete count, optional items to add);
// arr2.splice(2, 2, 2, 3, 4); 2 is the startIndex 2 is the delete count, 2, 3, 4 are items to add.
// splicedArray contains the elements that were removed.
// put 0 as the delete count if you do not want to remove elements.
let arr2 = [10, 20, 30, 40, 50];
let splicedArray = arr2.splice(2, 2, 2, 3, 4);
console.log("splicedArray is "+splicedArray);
console.log("arr2 is "+arr2);

// Array Method3: SORT Modifies the original array.
// sort the elements based on the sorting comparison function definition which we provided.
let elements = [23, 101, 1, 1222, 0, 12, 34, 99, 0];
elements.sort(function(element1, element2) {
    return element1 - element2;
});
console.log("Sorted Elements are as follows "+elements);

// Array Method4: CONCAT.
let array1 = [23, 1, 0, 12];
let array2 = [4, 9, 12, 34];
let concatenatedArray = array1.concat(array2);
concatenatedArray.sort((element1, element2) => element1 - element2);
console.log("Concatenated Array is "+concatenatedArray);

// Array Method5: SPLIT.
// takes a delimeter.
let str = "Hi I am Maha";
let splittedArray = str.split(" ");
console.log("Splitted Array is "+splittedArray);

// Array Method6: JOIN - join the elements of array into string using delimeter.
let joinedStr = splittedArray.join(" ");
console.log("Joined String is "+joinedStr);