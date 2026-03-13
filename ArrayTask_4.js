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
function myMap(userArray, callback)
{
    let result = new Array(userArray.length);

    for (let i = 0; i < userArray.length; i++)
    {
        result[i] = callback(userArray[i]);
    }

    return result;
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

// method for sorting an array using the bubble sort algorithm
function myBubbleSort(userArray)
{
    let swapped = false;

    for (let i = 0; i < userArray.length; i++)
    {
        for (let j = 0; j < userArray.length - (i + 1); j++)
        {
            if (userArray[j] < userArray[j + 1])
                {
                    let tempNumber = userArray[j];
                    userArray[j] = userArray[j + 1];
                    userArray[j + 1] = tempNumber;
                    
                    swapped = true;
                }
        }

        if (!swapped) break;
        swapped = false;
    }
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

// for start methods
function runAction()
{

}
 
// main function 
function main()
{
    const sizeArray = 20;
    const userArray = new Array(sizeArray);
    createArray(userArray, -50, 50);

    console.log("Welcome to my program on working with arrays");
    console.log("Select the action with the array that you need =>");
    console.log
                (
                "\nPress "/1/"" +
                "\nPress "/2/"" +
                "\nPress "/3/"" +
                "\nPress "/4/"" +
                "\nPress "/5/"" +
                "\nPress "/7/"" +
                "\nPress "/8/"" +
                "\nPress "/9/""
                );
    
    printArray(userArray);

    const maxNumberInArray = myMax(userArray);
    console.log(`Max number in array => ${maxNumberInArray}`);

    const minNumberInArray = myMin(userArray);
    console.log(`Min number in array => ${minNumberInArray}`);

    const arithmeticMean = myArithmeticMean(userArray);
    console.log(`Aritmetic mean in array => ${arithmeticMean}`);

    myBubbleSort(userArray);
    printArray(userArray);

    let doubled = myMap(userArray, element => element * 2);
    console.log(`\nYour full array with map => ${doubled.join(", ")}`);
}

main();