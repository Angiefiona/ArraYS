//Find the last element of the following arrays.
//arr1 = [3,7,34,90,12]
//arr2 = [true, "green", "where",12,56]
arr1 = [3,7,34,90,12];
console.log(arr1[4]);

arr2 = [true,"green","where",12,56];
console.log(arr2[4]);

//Write a JS program that will join the following array elements into a string
//myPets = ["Cow", "Bird", "Snake", "Dog"];

myPets = ["cow", "Bird", "Snake", "Dog"];
console.log(myPets.join(" "));

//Write a JS script to sort the following array items
//var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

var arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
console.log(arr3.sort());

//Write a program to remove duplicates from the following array.
//Console the array without duplicates, and console another array that only contains the duplicates
//var arr = ["apple", "mango", "apple",
        

          var arr = ["apple", "mango", "apple", 
          "orange", "mango", "mango"];


          //let removeDuplicates = (arr);{
            let result=[...new Set(arr)]
          console.log(result)
            
          
          //console.log(removeDuplicates(arr));

 //Write a JS script to search for the following word in the array.
//"way"
//If the word is present, console it else console "the search word was not found"

let arr5 = ["the", "way", "x", 4];
let ff = "way"
if (ff == "way"){
    console.log(ff)
}
else(console.log("the search was not found"))

//Write a JS script to sort the following string
//let word = "sevink"
 //Option 1

 let word = "sevink"
 let t = word.sort();
 console.log(t);
