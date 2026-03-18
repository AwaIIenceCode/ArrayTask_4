const prompt = require("prompt-sync")();

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

// A custom map method written using callbacks 
function myMap(userArray, callback)
{
    let result = new Array(userArray.length);

    for (let i = 0; i < userArray.length; i++)
    {
        result[i] = callback(userArray[i]);
    }

    return result;
}

// A custom filter method written using callbacks
function myFilter(userArray, callback)
{
    let result = [];

    for (let i = 0; i < userArray.length; i++)
    {
        if (callback(userArray[i]))
        {
            result.push(userArray[i]);
        }
    }

    return result;
}

// A custom reduce method written using callbacks 
function myReduce(userArray, callback, initialValue)
{
    let accumulator = initialValue !== undefined ? initialValue : 0;

    for (let i = 0; i < userArray.length; i++)
    {
        accumulator = callback(accumulator, userArray[i]);
    }

    return accumulator;
}

// A custom FindElement method written using callbacks 
function myFindElement(userArray, callback)
{
    for (let i = 0; i < userArray.length; i++)
    {
        if (callback(userArray[i]))
        {
            return userArray[i];
        }
    }

    return undefined;
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
function runAction(action)
{
    action.handler();
}
 
// main function 
function main()
{
    const sizeArray = 20;
    const userArray = new Array(sizeArray);
    createArray(userArray, -50, 50);

    const actions = 
    {
        1: { name: "myMax", handler: () => console.log(myMax(userArray)) },
        2: { name: "myMin", handler: () => console.log(myMin(userArray)) },
        3: { name: "myArithmeticMean", handler: () => console.log(myArithmeticMean(userArray)) },
        4: { name: "myBubbleSort", handler: () => console.log(myBubbleSort(userArray)) },
        5: { name: "myMax", handler: () => 
            {
                let multiplier = Number(prompt("Enter multiplier -> "));
                let result = myMap(userArray, element => element * multiplier);
                console.log(`Result: ${result.join(", ")}`); 
            }},
        6: { name: "myFilter", handler: () => 
            {
                let threshold = Number(prompt("Enter threshold -> "));
                let result = myFilter(userArray, element => element > threshold);
                console.log(`Result: ${result.join(", ")}`);
            }},
        7: { name: "myReduce", handler: () =>
            { 
                let initialUserValue = Number(prompt("Enter initial value -> ")); 
                let result = myReduce(userArray, (accumulator, element) => accumulator + element, initialUserValue);
                console.log(`Result: ${result.join(", ")}`);
            }},
        8: { name: "myFindElement", handler: () =>
            {
                let userNumberFound = Number(prompt("Enter your number that you want to find ->"));
                let result = myFindElement(userArray, element => element > userNumberFound);
                console.log(`Result: ${result.join(", ")}`);
            }},
        9: { name: "print array", handler: () => (printArray(userArray)) }
    };

    let userChoice;

    while (true)
    {
        console.log(
            "\nPress \"1\" for find max number" +
            "\nPress \"2\" for find min number" +
            "\nPress \"3\" for find arithmetic mean" +
            "\nPress \"4\" for bubble sort" +
            "\nPress \"5\" for map (multiply by 2, for example" +
            "\nPress \"6\" for filter (positive numbers, for example" +
            "\nPress \"7\" for reduce (sum of all elements, for example" +
            "\nPress \"8\" for find first element > your number" +
            "\nPress \"9\" for print your array" +
            "\nPress \"10\" for exit"
        );

    userChoice = Number(prompt("\nEnter your choice -> "));

    if (userChoice === 10) return;

    const action = actions[userChoice];

    if (!action) 
    {
        console.log("Invalid choice");
        continue;
    }

    runAction(action);

    }
}

main();