document.addEventListener("DOMContentLoaded", () => {
    const resTasks = [
        document.getElementById("res1"),
        document.getElementById("res2"),
        document.getElementById("res3"),
        document.getElementById("res4"),
        document.getElementById("res5"),
        document.getElementById("res6"),
    ];

    //Task 1
    {
        function countVowels(inputString) {
            const vowels = "aeiouyAEIOUY";
            return `Vowels: ${inputString.split('').filter(char => vowels.includes(char)).length}`
        };
    }
    //Task 2
    {
        function moveOver(arr, direction) {
            direction === 'end' ? arr.push(arr.shift()) : arr.unshift(arr.pop());
            return `[${arr}]`;
        };  
    }
    // Task 3
    {
        function findLongestWord(inputString) {
            const words = inputString.split(' ');

            const longestWord = words.reduce((longest, current) => (current.length > longest.length ? current : longest), "");
            const shortestWord = words.reduce((shortest, current) => (current.length < shortest.length ? current : shortest), words[0]);

            return `Longest: ${longestWord}, Shortest: ${shortestWord}`;
        };
    }
    // Render results
    {
        function renderResults(elements, functions) {
            functions.forEach((func, index) => {
                const result = func();
                elements[index].innerText = result;
            });
        }
    
        const functions = [
            () => countVowels("Hello World"),
            () => countVowels("My dear WATSON!"),
            () => moveOver([1, 2, 3, 4], 'end'),
            () => moveOver([1, 2, 3, 4], 'start'),
            () => findLongestWord("The quick brown fox jumped over the lazy dog"),
            () => findLongestWord("eu volutpat odio facilisis mauris sit amet massa vitae tortor"),
        ];
    
        renderResults(resTasks, functions);
    }
});
