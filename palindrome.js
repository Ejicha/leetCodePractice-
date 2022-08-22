var isPalindrome = function(s) {
    let a = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
    let b= a.split("").reverse().join("");
    return a === b;
};
