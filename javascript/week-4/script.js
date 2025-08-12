console.log('სავარჯიშოები: IV კვირა')

// დაწერეთ ფუქნცია, სახელად sayHello, 
// რომელიც დაპრინტავს - "Hello, World".
function sayHello() {
    return 'Hello, World';
}
console.log(sayHello());

// დაწერეთ ფუნქცია, სახელად greet, 
// რომელიც პარამეტრა მიიღებს სახელს და
// დაპრინტავს - "გამარჯობა, [სახელი]"
function greet(name) {
    return console.log(`Hello ${name}`);
}
greet('Guram');

// დაწერეთ ფუნქცია, სახელად sum, 
// რომელიც არგუმენტებად მიიღებს ორ რიცხვს და
// დააბრუნებს მათ ჯამს. შედეგი გამოიტანეთ ტერმინალში.
function sum(a, b) {
    return a + b;
}
console.log(`Sum = ${sum(10, 20)}`);

// დაწერეთ ფუნქცია, სახელად calculateArea, 
// რომელიც არგუმენტად მიიღებს ოთხკუთხედის სიგრესა და სიგანეს და
// დააბრუნებს მის ფართობს. შედეგი გამოიტანეთ ტერმინალში.
function calculateArea(hight, width) {
    const area = hight * width;
    console.log(`Area = ${area}`);
}
calculateArea(3, 5);

// დაწერეთ ფუნქცია, რომელიც მიიღებს ორ არგუმენტს და 
// დააბრუნებს მათ შორის უდიდესს. გამოიყენეთ სამივე - 
// Function Declaration, Function Expression, Arrow Function.
function numDeclaration(a, b) {
    return a > b ? `Large number is: ${a}` : `Large number is: ${b}`;
}
console.log(numDeclaration(2, 3));

const numExpression = function (a, b) {
    return a > b ? `Large number is: ${a}` : `Large number is: ${b}`;
}
console.log(numExpression(2, 3));

const numArrow = (a, b) => a > b ? a : b;
console.log(`Large number is: ${numArrow(2, 3)}`)

// დაწერეთ ფუქნცია, რომელიც პარამეტრად მიიღებს იმ რაოდენობას, 
// რამდენჯერად უნდა გამოკონსოლდეს "Hello, World".
const textQuant = (quant) => {
    for (let i = 1; i <= quant; i++) {
        console.log('Hello, World');
    }
}
textQuant(2);

// დაწერეთ ფუქნცია, სახელად celsiusToFahrenheit, 
// რომელიც პარამეტრად მიიღებს ცელსიუსს და გადაიყვანს ფარენჰეიტში. 
// ფორმულა - (Celsius * 9/5) + 32
const celsiusToFahrenheit = (celsius) => {
    const fahrenheit = (celsius * 9 / 5) + 32;
    console.log(`Temperature ${fahrenheit.toFixed(2)}°F`);
}
celsiusToFahrenheit(22);

// დაწერეთ ფუნქცია სახელად sumDigits, 
// რომელიც არგუმენტად იღებს რიცხვს და აბრუნებს მისი ციფრების ჯამს.
const sumDigits = (num) => {
    let sum = 0;
    for (let i = 1; i <= num; sum += i, i++) {

    }
    console.log(`Digits sum of ${num} = ${sum}`)
}
sumDigits(2);

// დაწერეთ ფუნქცია სახელად countBs, 
// რომელიც იღებს სტრიქონს თავის ერთადერთ არგუმენტად და 
// აბრუნებს სტრიქონში დიდი "B" სიმბოლოების რაოდენობას.
const countBs = (text) => {
    let count = 0
    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'B') { count++ };
    }
    console.log(`Number of letters "B" in the word ${text} = ${count}`);
}
countBs('BumbleBee');

// დაწერეთ ფუნქცია, რომელიც მიიღებს ორ პარამეტრს და 
// დააჯამებს ყველა რიცხვს გარკვეულ შუალედში. 
// მაგალითად შეკრიბავს რიცხვებს 5-დან 100-მდე.
const sumDigitsBetween = (a, b) => {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    console.log(`Sum from (${a} - ${b}) = ${sum}`)
}
sumDigitsBetween(5, 100);

// დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს სტრინგს და 
// დააბრუნებს true-ს თუ სტრინგი არის პალინდრომი 
// (თავიდან და ბოლოდან იგივენარიად იწერება) და false-ს თუ არაა პალინდრომი.
const palindrome = (word) => {
    let lowerCase = word.toLowerCase();
    let reverseWord = '';
    for (let i = lowerCase.length - 1; i >= 0; i--) {
        reverseWord += lowerCase[i]
    }
    reverseWord === lowerCase
        ? console.log(`Yes word "${word}" is palindrome`)
        : console.log(`No word "${word}" is not palindrome`);

}
palindrome('Level')


console.group('დავალებები:')

// პროექტი 1 - Saying Hello - გამარჯობა
// შექმენით პროგრამა რომელიც გკითხავთ "რა გქვია?", 
// დაელოდება თქვენს პასუხს და გიპახუსებთ "გამარჯობა, თქვენი სახელი"

// მაგალითად:

// > What is your name? Temo
// > Hello, Temo, nice to meet you!

// მინიშნება: გამოიყენეთ console.log და prompt ფუნქციები
const sayingHello = () => {
    const name = prompt('What is your name');
    console.log(`Hello, ${name}`);
}
sayingHello();


// პროექტი 2 - Counting the Number of Characters - სიმბოლოების რაოდენობის დათვლა
// შექმენით პროგრამა, რომელიც მოგთხოვთ სიტყვის ან 
// წინადადების (string) შეყვანას და შემდეგ გიჩვენებთ, 
// თუ რამდენი სიმბოლოსგან შედგება თქვენი ჩანაწერი.

// მაგალითად:

// > What is the input string? Homer
// > Homer has 5 characters.

// მინიშნება: გამოიყენეთ console.log და prompt ფუნქციები; 
// გაიხსენეთ, რომ string-ს აქვს საკუთარი მეთოდები, რომლიდანაც შესაძლოა, 
// რომელიმე გამოგადგეთ
const characterCounter = () => {
    const character = prompt('What is the input string?')
    const count = character.length;
    console.log(`${character} has ${count} characters`);
}
// characterCounter();


// პროექტი 3 - Printing Quotes - ციტატების ბეჭდვა
// ბრჭყალები ხშირად სტრიქონის (string) დასაწყისისა და 
// დასასრულის აღსანიშნავად გამოიყენება, მაგრამ ზოგჯერ, 
// ე.წ. escape characters-ის დახმარებით, ამ წინადადებაში ციტატა ცალკე, 
// ისევ ბრჭყალებით უნდა გამოვყოთ. შექმენით პროგრამა, 
// რომელიც მოგთხოვთ ციტატისა და მისი ავტორის ჩაწერას, 
// შემდეგ კი გაჩვენებთ ორივეს ისე, როგორც მაგალითშია.

// მაგალითად:

// > What is the quote? These aren't the droids you're looking for.
// > Who said it? Obi-Wan Kenobi
// > Obi-Wan Kenobi says, "These aren't the droids you're looking for."

// მინიშნება: გამოიყენეთ console.log და prompt ფუნქციები; escape characters
const printQuotes = () => {
    const firstQuote = prompt('What is the quote?');
    const lastQuote = prompt('Whu said it?');
    console.log(`${lastQuote} says, \"${firstQuote}"`)
}
// printQuotes();


// პროექტი 4 - Indoor Voice - ჩუმი ხმა
// შექმენით პროგრამა, რომელიც მოგთხოვთ სტრიქონის ჩაწერას და 
// შემდეგ იმავე ჩანაწერს მხოლოდ პატარა ასოებით გაჩვენებთ. პუნქტუაცია და 
// სიმბოლოებს შორის სივრცეები (whitespace) უცვლელი უნდა დარჩეს.

// მაგალითად:

// > HELLO, WORLD
// > hello, world

// მინიშნება: გამოიყენეთ console.log და prompt ფუნქციები; 
// გაიხსენეთ, რომ string-ს აქვს მეთოდები, რომელიც შესაძლოა, გამოგადგეთ 
const indoorVoice = () => {
    const text = prompt('Enter Text')
    console.log(text.toLowerCase())
}
// indoorVoice();


// პროექტი 5 - Playback Speed - საუბრის სიჩქარე
// ზოგიერთი ადამიანი ლექციებს საკმაოდ სწრაფად კითხულობს; 
// მათი შენელება ან თუნდაც, სიტყვებს შორის პაუზის გაკეთება 
// კარგი იქნებოდა... შექმენით პროგრამა, რომელიც წინადადების 
// ჩაწერას მოგთხოვთ, შემდეგ კი იმავე ჩანაწერს გაჩვენებთ, 
// ოღონდ იმ განსხვავებით, რომ ამჯერად ასოებს შორის ყველა სივრცე 
// (whitespace) მრავალწერტილით (...) იქნება ჩანაცვლებული.

// მაგალითად:

// > This is AlgoUni.
// > This...is...AlgoUni.

// მინიშნება: გამოიყენეთ console.log და prompt ფუნქციები; 
// გაიხსენეთ, რომ string-ს აქვს მეთოდები, რომელიც შესაძლოა, გამოგადგეთ
const playbackSpeed = () => {
    const text = prompt('Enter Text')
    let newText = ''

    for (let i = 0; i < text.length; i++) {
        newText += text[i] === ' ' ? '...' : text[i];
    }
    console.log(newText)
}
// playbackSpeed();


// პროექტი 6 - Making Faces - სახეების მიღება
// emoji-მდე არსებობდა emoticon-ები, სადაც სიმბოლოების ერთობლიობა - ":)" 
// გაღიმებულ სახეს აღნიშნავდა, ხოლო ":(" - მოწყენილს. დღეს პროგრამებში 
// ეს სიმბოლოები emoji-დ ავტომატურად გარდაიქმნება.

// შექმენით პროგრამაში, სადაც დაწერთ ფუნქციას სახელწოდებით convert, 
// რომელიც პარამეტრად იღებს სტრიქონს (str), 
// შემდეგ კი იმავე სტრიქონს აბრუნებს, იმ განსხვავებით, 
// რომ ნებისმიერ ამგვარ ჩანაწერს - ":)" 🙂-ით, 
// ხოლო ":(" - 🙁-ით შეცვლის. დანარჩენი ტექსტი უცვლელი უნდა დარჩეს.

// იმავე პროგრამაში, დაწერეთ მეორე ფუნქცია - main, რომელიც სტრიქონის შეყვანას გთხოვთ, შემდეგ convert ფუნქციას იძახებს და ბოლოს, შედეგს გაჩვენებთ.

// მაგალითად:

// > hello :)
// > hello 🙂
// > goodbye :(
// > goodbye 🙁

// მინიშნება: გამოიყენეთ console.log და prompt ფუნქციები; გაიხსენეთ, 
// რომ string-ს აქვს მეთოდები, რომელიც შესაძლოა, გამოგადგეთ; 
// არ დაგავიწყდეთ ფუნქციის გამოძახება
const convert = () => {
    const text = prompt('Enter Text and ')
    let newText = text
        .replaceAll(':)', '🙂')
        .replaceAll(':(', '🙁')
    console.log(newText)
}
// convert();


// პროექტი 7 - თამაში Mad Libs
// Mad libs არის მარტივი თამაში, სადაც თქვენ ქმნით ამბის შაბლონს 
// ცარიელ სიტყვებთან ერთად. მოთამაშე ადგენს სიტყვების სიას და 
// მოთხრობაში განათავსებს, შედეგად კი ხშირად სულელურ ან სასაცილო ამბავს ვიღებთ.

// შექმენით მარტივი პროგრამა, რომელიც ითხოვს არსებით სახელს, 
// ზმნას, ზმნიზედას და ზედსართავ სახელს და ამ სიტყვებს თქვენივე 
// შექმნილ ისტორიაში სვამს.

// მაგალითად:

// > Enter a noun: dog
// > Enter a verb: walk
// > Enter an adjective: blue
// > Enter an adverb: quickly
// > Enter an adjective: blue
// > Do you walk your blue dog quickly? That's hilarious!
const madLibs = () => {
    const noun = prompt('Enter a noun:');
    const verb = prompt('Enter a verb:');
    const adjective = prompt('Enter an adjective:');
    const adverb = prompt('Enter an adverb:');
    console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
}
// madLibs();

// პროექტი 8 - Guessing Game - გამოცნობანა
// ვფიქრობ რიცხვზე 1-დან 100-მდე... თუ გამოიცნობ, რა რიცხვია?

// დაწერეთ პროგრამა, რომელიც:

// მოუწოდებს მომხმარებელს თამაშის დონის მითითებას;. 
// თუ მომხმარებელი არ ჩაწერს დადებით მთელ რიცხვს, 
// პროგრამამ შეკითხვა კვლავ უნდა დასვას.

// შემთხვევითობის პრინციპით (randomly) ირჩევს მთელ რიცხვს 1-სა და n-ს შორის;

// მოუწოდებს მომხმარებელს, გამოიცნოს ეს მთელი რიცხვი. 
// თუ input არ არის დადებითი მთელი რიცხვი, 
// პროგრამამ კვლავ უნდა მიმართოს მომხმარებელს.

// თუ input "ჩაფიქრებულ" მთელ რიცხვზე მცირეა, პროგრამამ უნდა გამოიტანოს 
// Too small! და კვლავ დაუსვას შეკითხვა მომხმარებელს.

// პირიქით, თუ input ამ მთელ რიცხვზე დიდია, პროგრამამ უნდა გამოიტანოს 
// Too large! და ისევ დასვას კითხვა.

// თუ მომხმარებელმა რიცხვი გამოიცნო, პროგრამამ უნდა დაბეჭდოს 
// Just right! და დაასრულოს მუშაობა.

// მაგალითად:

// > Level: 1
// > Guess: 1
// > Just right!

// > Level: 10
// > Guess: 5
// > Too large!
// > Guess: 3
// > Just right!

// > Level: cat
// > Level: 10
// > Guess: cat
// > Guess: dog
// > Guess: 5
// > Too large!
// > Guess: 2
// > Too small!
// > Guess: 3
// > Just right!

const guessingGame = () => {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let inputNumber;
    let numberIsValid;

    console.log(randomNumber); //Test mode

    do {
        inputNumber = Number(prompt('Guess the secret number from 1 to 100:'));
        do {
            if (inputNumber > randomNumber) {
                inputNumber = Number(prompt('Too large!'));
            } else if (inputNumber < randomNumber) {
                inputNumber = Number(prompt('Too small!'));
            }
            numberIsValid = Number.isInteger(inputNumber) && inputNumber >= 1 && inputNumber <= 100;
        } while (numberIsValid && inputNumber !== randomNumber);

    } while (!numberIsValid || inputNumber !== randomNumber);

    console.log('Just right!');
}
// guessingGame();




// პროექტი 9 - Little Professor - პატარა პროფესორი
// https://www.youtube.com/embed/ZuJwzH9BIgs?si=niOBFdZwuDBA94vx"

// ბავშვობაში დევიდის ერთ-ერთი პირველი სათამაშო იყო "პატარა პროფესორი", 
// „კალკულატორი“, რომელიც დავითისთვის ათ სხვადასხვა მათემატიკურ ამოცანას ადგენდა.
// თუ სათამაშო 4 + 0 = აჩვენებდა, დავითი 4-ს ჩაწერდა, 4 + 1 = -ის შემთხვევაში,
// 5-ს. თუ დავითი პასუხს არასწორად გასცემდა, 
// სათამაშო EEE-ს ბეჭდავდა. საბოლოოდ, ერთი და იმავე კალკულაციაზე 
// სამი არასწორი პასუხის შემდეგ, სათამაშო უბრალოდ სწორ პასუხს აჩვენებდა 
// (მაგ., 4 + 0 = 4 ან 4 + 1 = 5).

// დაწერეთ პროგრამა, რომელიც:

// მოუწოდებს მომხმარებელს, აირჩიოს თამაშის დონე,

// . თუ მომხმარებელი არ ჩაწერს 1, 2 ან 3-ს, 
// პროგრამამ იგივე შეკითხვა კვლავ უნდა დასვას.

// შემთხვევითობის პრინციპით წარმოქმნის ათ (10) მათემატიკურ ამოცანას, 
// ფორმატირებულს, როგორც X + Y = , სადაც თითოეული X და Y არის დადებითი მთელი რიცხვი.

// სთხოვს მომხმარებელს, გადაჭრას თითოეული ეს პრობლემა.
// თუ პასუხი არ არის სწორი (ან საერთოდ, რიცხვი არაა), 
// პროგრამამ უნდა დაწეროს EEE და კვლავ იგივე ამოცანა დაუბეჭდოს მომხმარებელს, 
// რაც მომხმარებელს საშუალებას მისცემს, ამ პრობლემის გადასაჭრელად 
// სულ სამი ცდა გამოიყენოს. თუ მომხმარებელი სწორ პასუხს 
// სამი ცდის შემდეგაც ვერ დაწერს, პროგრამამ სწორი პასუხი თვითონ უნდა დაუწეროს.

// საბოლოო ჯამში, პროგრამამ უნდა დაბეჭდოს მომხმარებლის ქულა: 
// სწორი პასუხების რაოდენობა 10-დან.

// შექმენით თქვენი პროგრამა შემდეგნაირად, 
// სადაც ერთი ფუნქცია მოუწოდებს (და საჭიროების შემთხვევაში ხელახლა ეკითხება) 
// მომხმარებელს თამაშის დონის არჩევისკენ და აბრუნებს 1, 2 ან 3-ს; 
// მეორე ფუნქცია - აბრუნებს შემთხვევით გენერირებულ დადებით მთელ რიცხვს, 
// დონის ციფრების გათვალისწინებით, 
// ან ბეჭდავს შეცდომის შეტყობინებას (error message), 
// თუ დონე არ არის 1, 2 ან 3.

// მაგალითად:

// > Level: 1
// > 2 + 8 = 10
// > 3 + 7 = 10
// > 9 + 4 = 10
// > EEE
// > 9 + 4 = 11
// > EEE
// > 9 + 4 = 12
// > EEE
// > 9 + 4 = 13
// > 4 + 7 = 11

// > 1 + 4 = cat
// > EEE
// > 1 + 4 = dog
// > EEE
// > 1 + 4 = bird
// > EEE
// > 1 + 4 = 5
// > 9 + 3 = 12
// > 2 + 2 = 4
// > 0 + 0 = 0
// > Score: 8

const littleProfessor = () => {
    let exerciseCount = 10;
    let level;
    let score = exerciseCount;
    let digitCount;

    do {
        level = Number(prompt('Enter level 1, 2 or 3'));
    } while (level !== 1 && level !== 2 && level !== 3)

    switch (level) {
        case 1: digitCount = 10; break;
        case 2: digitCount = 100; break;
        case 3: digitCount = 1000; break;
    };


    while (exerciseCount > 0) {
        --exerciseCount;
        let x = Math.floor(Math.random() * digitCount) + 0;
        let y = Math.floor(Math.random() * digitCount) + 0;
        let trueAnswer = x + y;
        let answer;
        let attempts = 0;

        while (true) {
            ++attempts;
            let inputAnswer = prompt(`Enter answer: ${x}+${y}=`);
            inputAnswer == trueAnswer ? answer = true : answer = false;
            if (answer) {
                console.log(`${x}+${y}=${trueAnswer}`);
                break;
            } else if (attempts === 3) {
                console.log(`${x}+${y}=${trueAnswer}`);
                --score;
                break;
            } else {
                console.log(`${x}+${y}=${inputAnswer}`);
                console.log('EEE')
            }
        }
    }
    console.log(`Score: ${score}`)
}
// littleProfessor()




