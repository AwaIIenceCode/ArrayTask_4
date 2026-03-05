// function for generation array
function createArray(userArray, min, max)
{
    for (let i = 0; i < userArray.length; i++)
    {
        userArray[i] = Math.floor(Math.random()* (max - min + 1)) + min;
    }
}

// function for print array
function printArray(userArray)
{
    console.log(`\nYour full array => ${userArray.join(", ")}`);
}

//
function myMap()
{
    
}

//
function myFilter()
{

}

//
function myReduce()
{

}

//
function myFindElement()
{

}

//
function myBubbleSort()
{

}

// function for search max number in an array
function myMax()
{

}

// function for search min number in an array
function myMin()
{

}

// function for search Arithmetic Mean in an array
function myArithmeticMean()
{

}

// main function
function main()
{
    const sizeArray = 20;
    const userArray = new Array(sizeArray);

    createArray(userArray, -50, 50);
    printArray(userArray);

}

main();