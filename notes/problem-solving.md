# Introduction to Problem Solving

## Step 1: Understand the Problem
### Questions you can ask to clarify the problem
- Can I restate the problem in my own words?
- What are the inputs that go into the problem?
- What are the outputs that should come from the solution to the problem?
- Can the outputs be determined from the inputs? (Do I have enough information to solve the problem?)
- How should I label the important pieces of data that are a part of the problem?

## Step 2: Concrete Examples
Examples help you understand the problem better and provide sanity checks

Real Life Examples - User Stories and Unit Tests

1. Start with simple examples with input and output - Get more complex
2. What about Empty inputs?
3. What about invalid inputs?

### Example: Write a function which takes in a string and returns counts of each character in the string
charCount("aaaa") // {a:4}
charCount("hello") // {h:1, e:1, l:2, o: 1}

more complex examples
"my phone number is 182763"
"Hello hi"
charCount("")

understanding edge cases (empty and/or invalid inputs) may not be important in an interview, but definitely important in real world scenarios

*note: wolfy says this is close to Run Length Encoding (RLE)

## Step 3: Break It Down
comments for each small step that we can test
- do not try to do everything at once!

### Example Continued
function charCount(str){
    // make object to return at end
    //loop over string, for each char...
        //if the char is a number/letter AND is a key in obj, add one to count
        //if the char is a number/letter AND not a key in obj, add it to object and set value to 1
        //if char is something else (space, period, etc.) don't do anything
    //return obj at end
}

## Step 4: Solve or Simplify
Solve the problem - If you can't, solve a simpler problem

### Simplify
- Find the core difficulty in what you're trying to do
- Temporarily ignore that difficulty
- Write a simplified solution (most likely will gain insight into the difficult piece)
- then incorporate that difficulty back in

Write what we can, and then start a conversation with the interviewer with the next steps

## Step 5: Look Back and Refactor
Do not stop after you've solved the problem - reflect and try to optimize your solution

### Refactoring Questions
- Can you check the result?
- Can you get the result differently?
- Can you understand it at a glance? 
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?

Regular Expression for alphanumeric: /[a-z0-9]/


### Example Solution

~~~
function charCount(str){
    var obj = {};
    for(var i = 0; i < str.length; i++){
        var char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)){
            if(obj[char] > 0){
                obj[char]++;
            } else {
                obj[char] = 1;
            }
        }
    }
    return obj;
}
~~~

#### Optimization Suggestions
- change from for loop -> for of loop
- change if else to use OR operator
- update var to let/const
- is regular expression the most efficient? chrome had some issues with regex, some scenarios regex is less performant
- replace regex with comparison to CharCode ("i".charCodeAt(0)) (55% faster than regex)
    - 47-58 is numeric
    - 64-91 is upper aplha
    - 96-123 is lower alpha

### Example Solution Optimized

~~~
function charCount(str){
    var obj = {};
    for(var char of str){
        if(isAlphaNum(char)){
                var char = str[i].toLowerCase();
                 obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphNum(char){
    var code = char.charCodeAt(0);
    if(
        !(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)){
        return false;
    }
    return true;
}
~~~

## Recap Notes

create a separate function - isAlphaNumeric with char codes