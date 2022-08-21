// Code your solution in this file!
const returnFirstTwoDrivers=(drivers) =>
{
    return [...drivers].slice(0, 2);
};
const returnLastTwoDrivers= (drivers) =>{
    return [...drivers].slice(-2)
};
const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers];
const createFareMultiplier= (inputValue) => {
    return (fare)=>{return inputValue*fare;};
};
let fareDoubler = createFareMultiplier(2);
let fareTripler = createFareMultiplier(3);
const selectDifferentDrivers=(driversArray, driversToReturn) =>{
    return driversToReturn(driversArray)
};
