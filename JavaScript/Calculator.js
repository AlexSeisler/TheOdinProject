var keep = false;
function appendToDisplay(item)
{
    
    const display = document.getElementById("display");
    if(keep)
    {
        display.textContent = "";
        keep = false;
    }
    display.textContent += item;
}

function calculateResult()
{
    keep = true;
    const display = document.getElementById("display");
    const problem = display.textContent;
    display.textContent ="";
    display.textContent = Math(problem);
}

function Math(problem)
{
    const operators = "+-*/";
    let currentNumber = "";
    let total = 0;
    let lastOperator = "+";
    let lastValue = 0;

    for (let i = 0; i < problem.length; i++) {
        const char = problem[i];

        if (!operators.includes(char)) {
            currentNumber += char;  // Building the current number
        }

        // If an operator is found or we've reached the end of the string
        if (operators.includes(char) || i === problem.length - 1) {
            const num = Number(currentNumber);

            if (lastOperator === "+" || lastOperator === "-") {
                // Add/subtract any previous operations first
                total += lastValue;
                lastValue = (lastOperator === "+") ? num : -num;
            } else if (lastOperator === "*") {
                lastValue *= num;
            } else if (lastOperator === "/") {
                lastValue /= num;
            }

            lastOperator = char;  // Update to the new operator
            currentNumber = "";   // Reset the current number
        }
    }

    // Add the last accumulated value
    total += lastValue;

    return total;
}
function clearDisplay()
{
    const display = document.getElementById("display");
    keep = true;
    display.textContent = " ";
}
