// Code your solution in this file!

//slice method
//The slice() method returns a shallow copy of a portion of an array into a new array object
//selected from start to end (end not included) where start and end represent the index
//of items in that array. The original array will not be modified.

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}; 

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}; 

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function(multiplyValue) {

    return function(value) {
        return multiplyValue * value; 
    };
};

const fareDoubler = createFareMultiplier(2); 

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, firstOrLastDriversFunction) {
    return firstOrLastDriversFunction(drivers); 
}; 
