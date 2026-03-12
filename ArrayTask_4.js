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
function myMax(userArray)
{
    let maxNumberInArray = userArray[0];

    for (let i = 1; i < userArray.length; i++)
    {
        if (userArray[i] > maxNumberInArray)
        {
            maxNumberInArray = userArray[i];
        }
    }

    return maxNumberInArray;
}

// function for search min number in an array
function myMin(userArray)
{
    let minNumberInArray = userArray[0];

    for (let i = 1; i < userArray.length; i++)
    {
        if (userArray[i] < minNumberInArray)
        {
            minNumberInArray = userArray[i];
        }
    }

    return minNumberInArray;
}

// function for search Arithmetic Mean in an array
function myArithmeticMean(userArray)
{
    let sumAllNumbers = 0;

    for (let i = 0; i < userArray.length; i++)
    {
        sumAllNumbers += userArray[i];
    }

    return sumAllNumbers / userArray.length;
}

// main function
function main()
{
    const sizeArray = 20;
    const userArray = new Array(sizeArray);

    createArray(userArray, -50, 50);
    printArray(userArray);

    const maxNumberInArray = myMax(userArray);
    console.log(`Max number in array => ${maxNumberInArray}`);

    const minNumberInArray = myMin(userArray);
    console.log(`Min number in array => ${minNumberInArray}`);

    const arithmeticMean = myArithmeticMean(userArray);
    console.log(`Aritmetic mean in array => ${arithmeticMean}`);
}

main();