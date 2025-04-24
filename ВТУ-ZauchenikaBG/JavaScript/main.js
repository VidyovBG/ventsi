
//todo Функция за изчисляване на МЕРНИ ЕДИНИЦИ

var input = document.getElementById('input'),
    result = document.getElementById('result'),
    inputType = document.getElementById('inputType'),
    resultType = document.getElementById('resultType'),
    inputTypeValue, resultTypeValue;

input.addEventListener('keyup', myResult)
inputType.addEventListener('change', myResult)
resultType.addEventListener('change', myResult)

inputTypeValue = inputType.value
resultTypeValue = resultType.value

function myResult() {
    inputTypeValue = inputType.value
    resultTypeValue = resultType.value

    if (inputTypeValue === 'meter' && resultTypeValue === 'kilometer') {
        result.value = Number(input.value) * 0.001
    } else if (inputTypeValue === 'meter' && resultTypeValue === 'centimeter') {
        result.value = Number(input.value) * 100
    } else if (inputTypeValue === 'meter' && resultTypeValue === 'meter') {
        result.value = input.value
    } else if (inputTypeValue === 'meter' && resultTypeValue === 'decimeter') {
        result.value = Number(input.value) * 10
    } else if (inputTypeValue === 'meter' && resultTypeValue === 'milimeter') {
        result.value = Number(input.value) * 1000
    } else if (inputTypeValue === 'meter' && resultTypeValue === 'yard') {
        result.value = Number(input.value) * 1.09361
    } else if (inputTypeValue === 'meter' && resultTypeValue === 'mile') {
        result.value = Number(input.value) * 0.000621371
    } else if (inputTypeValue === 'meter' && resultTypeValue === 'inch') {
        result.value = Number(input.value) * 39.3701
    }

    if (inputTypeValue === 'kilometer' && resultTypeValue === 'meter') {
        result.value = Number(input.value) * 1000
    } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'centimeter') {
        result.value = Number(input.value) * 100000
    } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'kilometer') {
        result.value = input.value
    } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'decimeter') {
        result.value = Number(input.value) * 10000
    } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'milimeter') {
        result.value = Number(input.value) * 1000000
    } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'yard') {
        result.value = Number(input.value) * 1093.61
    } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'mile') {
        result.value = Number(input.value) * 0.621371
    } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'inch') {
        result.value = Number(input.value) * 39370.1
    }

    if (inputTypeValue === 'centimeter' && resultTypeValue === 'kilometer') {
        result.value = Number(input.value) * 0.00001
    } else if (inputTypeValue === 'centimeter' && resultTypeValue === 'meter') {
        result.value = Number(input.value) * 0.01
    } else if (inputTypeValue === 'centimeter' && resultTypeValue === 'centimeter') {
        result.value = input.value
    } else if (inputTypeValue === 'centimeter' && resultTypeValue === 'decimeter') {
        result.value = Number(input.value) * 0.1
    } else if (inputTypeValue === 'centimeter' && resultTypeValue === 'milimeter') {
        result.value = Number(input.value) * 10
    } else if (inputTypeValue === 'centimeter' && resultTypeValue === 'yard') {
        result.value = Number(input.value) * 0.0109361
    } else if (inputTypeValue === 'centimeter' && resultTypeValue === 'mile') {
        result.value = Number(input.value) * 0.00001
    } else if (inputTypeValue === 'centimeter' && resultTypeValue === 'inch') {
        result.value = Number(input.value) * 0.3937
    }

    if (inputTypeValue === 'decimeter' && resultTypeValue === 'kilometer') {
        result.value = Number(input.value) * 0.0001
    } else if (inputTypeValue === 'decimeter' && resultTypeValue === 'meter') {
        result.value = Number(input.value) * 0.1
    } else if (inputTypeValue === 'decimeter' && resultTypeValue === 'decimeter') {
        result.value = input.value
    } else if (inputTypeValue === 'decimeter' && resultTypeValue === 'centimeter') {
        result.value = Number(input.value) * 10
    } else if (inputTypeValue === 'decimeter' && resultTypeValue === 'milimeter') {
        result.value = Number(input.value) * 100
    } else if (inputTypeValue === 'decimeter' && resultTypeValue === 'yard') {
        result.value = Number(input.value) * 0.109361
    } else if (inputTypeValue === 'decimeter' && resultTypeValue === 'mile') {
        result.value = Number(input.value) * 0.0000621371
    } else if (inputTypeValue === 'decimeter' && resultTypeValue === 'inch') {
        result.value = Number(input.value) * 3.93701
    }

    if (inputTypeValue === 'milimeter' && resultTypeValue === 'kilometer') {
        result.value = Number(input.value) * 0.000001
    } else if (inputTypeValue === 'milimeter' && resultTypeValue === 'meter') {
        result.value = Number(input.value) * 0.001
    } else if (inputTypeValue === 'milimeter' && resultTypeValue === 'decimeter') {
        result.value = Number(input.value) * 0.01
    } else if (inputTypeValue === 'milimeter' && resultTypeValue === 'centimeter') {
        result.value = Number(input.value) * 0.1
    } else if (inputTypeValue === 'milimeter' && resultTypeValue === 'milimeter') {
        result.value = input.value
    } else if (inputTypeValue === 'milimeter' && resultTypeValue === 'yard') {
        result.value = Number(input.value) * 0.00109361
    } else if (inputTypeValue === 'milimeter' && resultTypeValue === 'mile') {
        //result.value = Number(input.value) * 0.0000621371
        result.value = "-"
    } else if (inputTypeValue === 'milimeter' && resultTypeValue === 'inch') {
        result.value = Number(input.value) * 0.0393701
    }

    if (inputTypeValue === 'yard' && resultTypeValue === 'kilometer') {
        result.value = Number(input.value) * 0.0009144
    } else if (inputTypeValue === 'yard' && resultTypeValue === 'meter') {
        result.value = Number(input.value) * 0.9144
    } else if (inputTypeValue === 'yard' && resultTypeValue === 'decimeter') {
        result.value = Number(input.value) * 9.144
    } else if (inputTypeValue === 'yard' && resultTypeValue === 'centimeter') {
        result.value = Number(input.value) * 91.44
    } else if (inputTypeValue === 'yard' && resultTypeValue === 'milimeter') {
        result.value = Number(input.value) * 914.4
    } else if (inputTypeValue === 'yard' && resultTypeValue === 'yard') {
        result.value = input.value
    } else if (inputTypeValue === 'yard' && resultTypeValue === 'mile') {
        result.value = Number(input.value) * 0.000568182
    } else if (inputTypeValue === 'yard' && resultTypeValue === 'inch') {
        result.value = Number(input.value) * 36
    }

    if (inputTypeValue === 'mile' && resultTypeValue === 'kilometer') {
        result.value = Number(input.value) * 1.609344
    } else if (inputTypeValue === 'mile' && resultTypeValue === 'meter') {
        result.value = Number(input.value) * 11609.344
    } else if (inputTypeValue === 'mile' && resultTypeValue === 'decimeter') {
        result.value = Number(input.value) * 116093.44
    } else if (inputTypeValue === 'mile' && resultTypeValue === 'centimeter') {
        result.value = Number(input.value) * 1160934.4
    } else if (inputTypeValue === 'mile' && resultTypeValue === 'milimeter') {
        result.value = Number(input.value) * 11609344
    } else if (inputTypeValue === 'mile' && resultTypeValue === 'yard') {
        result.value = Number(input.value) * 1760
    } else if (inputTypeValue === 'mile' && resultTypeValue === 'mile') {
        result.value = input.value
    } else if (inputTypeValue === 'mile' && resultTypeValue === 'inch') {
        result.value = Number(input.value) * 63360
    }

    if (inputTypeValue === 'inch' && resultTypeValue === 'kilometer') {
        result.value = Number(input.value) * 0.0000254
    } else if (inputTypeValue === 'inch' && resultTypeValue === 'meter') {
        result.value = Number(input.value) * 0.0254
    } else if (inputTypeValue === 'inch' && resultTypeValue === 'decimeter') {
        result.value = Number(input.value) * 0.254
    } else if (inputTypeValue === 'inch' && resultTypeValue === 'centimeter') {
        result.value = Number(input.value) * 2.54
    } else if (inputTypeValue === 'inch' && resultTypeValue === 'milimeter') {
        result.value = Number(input.value) * 25.4
    } else if (inputTypeValue === 'inch' && resultTypeValue === 'yard') {
        result.value = Number(input.value) * 0.0277778
    } else if (inputTypeValue === 'inch' && resultTypeValue === 'mile') {
        result.value = Number(input.value) * 0.0000157828
    } else if (inputTypeValue === 'inch' && resultTypeValue === 'inch') {
        result.value = input.value
    }
}


function convertArea(value, fromUnit, toUnit) {
    const conversionFactors = {
        'meter2': 1,
        'kilometer2': 1e6,
        'centimeter2': 1e-4,
        'decimeter2': 1e-2,
        'milimeter2': 1e-6,
        'hectare2': 1e4,
        'dekar2': 1e2,
    };

    if (!conversionFactors.hasOwnProperty(fromUnit) || !conversionFactors.hasOwnProperty(toUnit)) {
        console.error('Невалидни квадратни мерни единици');
        return null;
    }

    const valueInSquareMeters = value * conversionFactors[fromUnit];
    const result = valueInSquareMeters / conversionFactors[toUnit];

    return result;
}

document.getElementById('input2').addEventListener('input', updateResult);

document.getElementById('inputType2').addEventListener('change', updateResult);

document.getElementById('resultType2').addEventListener('change', updateResult);

function updateResult() {
    const inputValue = parseFloat(document.getElementById('input2').value);
    const inputUnit = document.getElementById('inputType2').value;
    const resultUnit = document.getElementById('resultType2').value;

    const result = convertArea(inputValue, inputUnit, resultUnit);

    if (!isNaN(result)) {
        document.getElementById('result2').value = result;
    } else {
        document.getElementById('result2').value = '';
    }
}







//todo Функция за изчисляване на СТЕПЕНИ

function calculateStepen() {
    var baseElement = document.getElementById("stepenuvane1");
    var exponentElement = document.getElementById("stepenuvane2");
    var resultElement = document.getElementById("stepenuvane3");
    var solutionText = document.getElementById("view-solution-text-stepenuvane");

    var base = parseFloat(baseElement.value);
    var exponent = parseInt(exponentElement.value);

    if (!isNaN(base) && !isNaN(exponent)) {
        if (base >= 0) {
            // Изчисляване на степенуването
            var result = Math.pow(base, exponent);
            resultElement.value = result;

            // Показване на текста "Виж решението"
            solutionText.style.display = "block";
        } else {
            resultElement.value = "";
            alert("Числото НЕ трябва да е отрицателно.");
            baseElement.value = ""; // Нулиране на стойността на input полето за числото
            exponentElement.value = ""; // Нулиране на стойността на input полето за степен
            solutionText.style.display = "none"; // Скриване на текста "Виж решението"
        }
    } else {
        resultElement.value = "";
        alert("Моля, въведете валидни числа за число и степен.");
        solutionText.style.display = "none"; // Скриване на текста "Виж решението"
    }
}

function calculateStepenNulirane() {
    var inputElement1 = document.getElementById("stepenuvane1");
    var inputElement2 = document.getElementById("stepenuvane2");
    var inputElement3 = document.getElementById("stepenuvane3");
    var solutionText = document.getElementById("view-solution-text-stepenuvane");

    // Нулиране на стойностите
    inputElement1.value = "";
    inputElement2.value = "";
    inputElement3.value = "";

    // Скриване на текста "Виж решението"
    solutionText.style.display = "none";
}

function viewSolutionStepenuvane() {
    var base = parseFloat(document.getElementById("stepenuvane1").value);
    var exponent = parseInt(document.getElementById("stepenuvane2").value);

    // Изчисляване на стъпките
    let steps = `1. Формулата за степенуване е: число^степен\n\n`;
    steps += `2. Въведените стойности са: числото = ${base}, степента = ${exponent}\n\n`;

    if (exponent === 0) {
        steps += `3. Всяко число на степен 0 е равно на 1.\n\n`;
        steps += `4. Резултат: ${base}^0 = 1\n`;
    } else {
        steps += `3. Изчисляваме стъпките:\n`;
        let intermediateSteps = [];
        let result = 1;
        let calculationSteps = [];

        for (let i = 1; i <= exponent; i++) {
            result *= base;
            intermediateSteps.push(`${result}`);
            calculationSteps.push(i === 1 ? `${base}` : `x ${base}`);
        }

        steps += `   ${base}^${exponent} = ${calculationSteps.join(" ")} = ${result}\n\n`;
        steps += `4. Резултат: ${base}^${exponent} = ${result}\n`;
    }

    // Показване на стъпките в alert
    alert(steps);
}









//todo Функция за изчисляване на ПЕРМУТАЦИЯ

function calculatePermutaciqNulirane() {
    var inputElement6 = document.getElementById("fakturiel1");
    var resultElement = document.getElementById("fakturiel2");
    var solutionText = document.getElementById("view-solution-text-permutaciq");

    // Нулиране на стойностите
    inputElement6.value = "";
    resultElement.value = "";

    // Скриване на текста "Виж решението"
    solutionText.style.display = "none";
}

function calculatePermutation() {
    var inputElement = document.getElementById("fakturiel1");
    var resultElement = document.getElementById("fakturiel2");
    var solutionText = document.getElementById("view-solution-text-permutaciq");
    var n = parseInt(inputElement.value);

    if (!isNaN(n) && n > 0) {
        // Изчисляване на пермутацията
        var permutation = calculateFactorial(n);

        // Показване на резултата
        resultElement.value = permutation;

        // Показване на текста "Виж решението"
        solutionText.style.display = "block";
    } else {
        // Нулиране на резултата и скриване на текста за решението
        resultElement.value = "";
        alert("Моля, въведете положително число.");
        inputElement.value = ""; // Нулиране на стойността на input полето
        solutionText.style.display = "none";
    }
}

function calculateFactorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * calculateFactorial(n - 1);
    }
}

function factorialSteps(n) {
    if (n === 0) return "1";

    let steps = [];
    for (let i = 1; i <= n; i++) {
        steps.push(i);
    }
    return steps.join(" × "); // Превръщаме в низ с умножение между числата
}

function viewSolutionPermutaciq() {
    var n = parseInt(document.getElementById("fakturiel1").value);

    let steps = `1. Формулата за пермутация е: P(n) = n!\n\n`;
    steps += `2. Въведената стойност е: n = ${n}\n\n`;
    steps += `3. Изчисляваме факториела:\n`;
    steps += `   ${factorialSteps(n)} = ${calculateFactorial(n)}\n\n`;
    steps += `4. Резултатът е:\n`;
    steps += `   P(${n}) = ${calculateFactorial(n)}\n`;

    // Показване на стъпките в alert
    alert(steps);
}





//todo Функция за изчисляване на КОМБИНАЦИЯ

function calculateKombinaciq() {
    const n = parseInt(document.getElementById("kombinaciq1").value);
    const k = parseInt(document.getElementById("kombinaciq2").value);
    const resultContainer = document.getElementById("kombinaciq3");
    const solutionText = document.getElementById("view-solution-text-kombinaciq");

    // Проверки за валидност на входните стойности
    if (n < 0 || k < 0) {
        alert("Моля, въведете положителни стойности за n и k.");
        document.getElementById("kombinaciq1").value = "";
        document.getElementById("kombinaciq2").value = "";
        resultContainer.value = "";
        solutionText.style.display = "none";
        return;
    }

    if (k > n) {
        alert("Стойността на k не може да бъде по-голяма от n.");
        resultContainer.value = "";
        solutionText.style.display = "none";
        return;
    }

    // Изчисляване на комбинацията
    const kombinaciqResult = calculateCombination(n, k);
    resultContainer.value = kombinaciqResult;

    // Показване на текста "Виж решението"
    solutionText.style.display = "block";
}

// Функция за нулиране на полетата
function calculateKombinaciqNulirane() {
    document.getElementById("kombinaciq1").value = "";
    document.getElementById("kombinaciq2").value = "";
    document.getElementById("kombinaciq3").value = "";
    document.getElementById("view-solution-text-kombinaciq").style.display = "none";
}

// Функция за изчисляване на комбинацията C(n, k)
function calculateCombination(n, k) {
    return factorial(n) / (factorial(k) * factorial(n - k));
}

// Функция за изчисляване на факториел
function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}

// Функция за показване на решението (стъпките)
function viewSolutionKombinaciq() {
    const n = parseInt(document.getElementById("kombinaciq1").value);
    const k = parseInt(document.getElementById("kombinaciq2").value);

    let steps = `1. Формулата за комбинация е:\n C(n, k) = n! / (k! * (n - k)!)\n\n`;
    steps += `2. Въведените стойности са:\n n = ${n}, k = ${k}\n\n`;
    steps += `3. Изчисляваме (n - k):\n ${n} - ${k} = ${n - k}\n\n`;
    steps += `4. Изчисляваме факториелите:\n`;
    steps += `   n! = ${factorial(n)}\n`;
    steps += `   k! = ${factorial(k)}\n`;
    steps += `   (n - k)! = ${factorial(n - k)}\n\n`;
    steps += `5. Изчисляваме комбинацията:\n`;
    steps += `   C(${n}, ${k}) = ${factorial(n)} / (${factorial(k)} * ${factorial(n - k)}) = ${calculateCombination(n, k)}\n`;

    // Показване на стъпките в alert
    alert(steps);
}











//todo Функция за изчисляване на ВАРИАЦИЯ

function calculateVariation(n, k) {
    function factorial(num) {
        if (num <= 1) return 1;
        return num * factorial(num - 1);
    }

    return factorial(n) / factorial(n - k);
}

function calculateVariation(n, k) {
    function factorial(num) {
        if (num <= 1) return 1;
        return num * factorial(num - 1);
    }

    if (k > n) {
        return "Грешка: k по-голямо от n";
    }

    return factorial(n) / factorial(n - k);
}



function calculateVariaciq() {
    const n = parseInt(document.getElementById("variaciq1").value);
    const k = parseInt(document.getElementById("variaciq2").value);
    const resultContainer = document.getElementById("variaciq3");
    const solutionText = document.getElementById("view-solution-text-variaciq");

    if (n < 0 || k < 0) {
        alert("Моля, въведете положителни стойности за n и k.");
        document.getElementById("variaciq1").value = "";
        document.getElementById("variaciq2").value = "";
        resultContainer.value = "";
        solutionText.style.display = "none"; // Скриваме решението при грешка
        return;
    }

    if (n < k) {
        alert("Стойността на n трябва да е по-голяма или равна на k.");
        resultContainer.value = "";
        solutionText.style.display = "none"; // Скриваме решението при грешка
        return;
    }

    // Изчисляване на вариацията
    const variaciqResult = calculateVariation(n, k);

    // Показваме резултата в полето
    resultContainer.value = variaciqResult;

    // Показваме текста за "Виж решението"
    solutionText.style.display = "block";
}

function calculateVariaciqNulirane() {
    document.getElementById("variaciq1").value = "";
    document.getElementById("variaciq2").value = "";
    document.getElementById("variaciq3").value = "";
    document.getElementById("view-solution-text-variaciq").style.display = "none"; // Скриваме текста за решението
}

// Функция за изчисление на вариация
function calculateVariation(n, k) {
    return factorial(n) / factorial(n - k);
}

// Функция за изчисление на факториел
function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}

// Функция за показване на решението (стъпките)
function showSolutionVariacia() {
    const n = parseInt(document.getElementById("variaciq1").value);
    const k = parseInt(document.getElementById("variaciq2").value);

    let steps = `1. Формулата за вариация е:\n V(n, k) = n! / (n - k)!\n\n`;
    steps += `2. Въведените стойности са:\n n = ${n},\n k = ${k}\n\n`;
    steps += `3. Изчисляваме (n - k):\n ${n} - ${k} = ${n - k}\n\n`;
    steps += `4. Изчисляваме факториелите:\n`;
    steps += `   n! = ${factorial(n)}\n`;
    steps += `   (n - k)! = ${factorial(n - k)}\n\n`;
    steps += `5. Изчисляваме вариацията:\n`;
    steps += `   V(${n}, ${k}) = ${factorial(n)} / ${factorial(n - k)} = ${calculateVariation(n, k)}\n`;

    // Показване на стъпките в alert
    alert(steps);
}











//todo Функция за изчисляване на КВАДРАТНО УРАВНЕНИЕ


function calculateKvUravnenie() {
    const a = parseFloat(document.getElementById("kvUravnenie1").value);
    const b = parseFloat(document.getElementById("kvUravnenie2").value);
    const c = parseFloat(document.getElementById("kvUravnenie3").value);

    const solutionText = document.getElementById("view-solution-text");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Моля, въведете валидни стойности за a, b и c.");
        solutionText.style.display = "none";
        return;
    }

    // Формулата за дискриминанта
    const D = b * b - 4 * a * c;
    let steps = `Дадено квадратно уравнение:\n ${a}x² + ${b}x + ${c} = 0\n`;
    steps += `\n1. Изчисляваме дискриминантата (D):\n`;
    steps += `   D = b² - 4ac\n`;
    steps += `   D = (${b})² - 4 * (${a}) * (${c})\n`;
    steps += `   D = ${D}\n`;

    if (D < 0) {
        document.getElementById("kvUravnenie4").value = "Няма решение";
        document.getElementById("kvUravnenie5").value = "Няма решение";
        document.getElementById("kvUravnenie6").value = `D = ${D}`;
        steps += `\n2. Тъй като D < 0, уравнението няма реални корени.\n`;
    } else if (D === 0) {
        const x1 = ((-b) / (2 * a)).toFixed(2);
        document.getElementById("kvUravnenie4").value = `x1 = ${x1}`;
        document.getElementById("kvUravnenie5").value = "Няма втори корен";
        document.getElementById("kvUravnenie6").value = `D = ${D}`;
        steps += `\n2. Тъй като D = 0, имаме един реален корен:\n`;
        steps += `   x = -b / (2a)\n`;
        steps += `   x = -(${b}) / (2 * ${a})\n`;
        steps += `   x = ${x1}\n`;
    } else {
        const x1 = ((-b + Math.sqrt(D)) / (2 * a)).toFixed(2);
        const x2 = ((-b - Math.sqrt(D)) / (2 * a)).toFixed(2);
        document.getElementById("kvUravnenie4").value = `x1 = ${x1}`;
        document.getElementById("kvUravnenie5").value = `x2 = ${x2}`;
        document.getElementById("kvUravnenie6").value = `D = ${D}`;
        steps += `\n2. Тъй като D > 0, уравнението има два реални корена:\n`;
        steps += `   x1 = (-b + √D) / (2a)\n`;
        steps += `   x2 = (-b - √D) / (2a)\n`;
        steps += `\n3. Изчисляваме корените:\n`;
        steps += `   x1 = (-(${b}) + √${D}) / (2 * ${a})\n`;
        steps += `   x1 = ${x1}\n\n`;

        steps += `   x2 = (-(${b}) - √${D}) / (2 * ${a})\n`;
        steps += `   x2 = ${x2}\n`;
    }

    // Показване на текста "Виж решението"
    solutionText.style.display = "block";

    // Записваме стъпките за пресмятането в alert
    solutionText.onclick = () => alert(steps);
}

function calculateKvUravnenieNulirane() {
    document.getElementById("kvUravnenie1").value = "";
    document.getElementById("kvUravnenie2").value = "";
    document.getElementById("kvUravnenie3").value = "";
    document.getElementById("kvUravnenie4").value = "";
    document.getElementById("kvUravnenie5").value = "";
    document.getElementById("kvUravnenie6").value = "";

    // Скриване на текста "Виж решението"
    document.getElementById("view-solution-text").style.display = "none";
}











//todo Функция за изчисляване на КОРЕН ОТ КОРЕН КВАДРАТЕН!


function calculateRadikalNulirane() {
    var inputElement4 = document.getElementById("radikal1");
    var inputElement5 = document.getElementById("radikal2");

    inputElement4.value = "";
    inputElement5.value = "";
}



inputElement.value = "";
function calculateRoot() {
    var inputElement = document.getElementById("radikal1");
    var numberUnderRoot = parseFloat(inputElement.value);

    if (!isNaN(numberUnderRoot) && numberUnderRoot >= 0) {
        var resultElement = document.getElementById("radikal2");
        var simplifiedRoot = simplifyRoot(numberUnderRoot);

        resultElement.value = simplifiedRoot;
    } else {
        var resultElement = document.getElementById("radikal2");
        resultElement.value = "";
        alert("Моля, въведете валидно неотрицателно число под радикала.");
        inputElement.value = "";
    }
}





//! З А К Р Ъ Г Л Я Н Е     Н А      Ч И С Л А Т А


function simplifyRoot(number) {
    var sqrt = Math.sqrt(number);
    var largestSquare = 1;

    for (var divisor = 2; divisor <= sqrt; divisor++) {
        if (number % (divisor * divisor) === 0) {
            largestSquare = divisor * divisor;
        }
    }

    var simplifiedNumber = number / largestSquare;

    if (largestSquare === 1) {
        return "√" + simplifiedNumber;
    } else {
        return Math.sqrt(largestSquare) + "√" + simplifiedNumber;
    }
}










//todo Функция за изчисляване на КООРДИТНА СИСТЕМА


function calculateNanesi1() {
    // Get the value of the input field
    var equation = document.getElementById("nanesi1").value;

    // Open a new window and send the equation to Wolfram Alpha
    window.open(`https://www.wolframalpha.com/input/?i=${encodeURIComponent(equation)}`);
}

function calculateNanesi1Nulirane() {
    // Reset the input field to the original equation
    document.getElementById("nanesi1").value = "x^3 + 2x = 0";
}