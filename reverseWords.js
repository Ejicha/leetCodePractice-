var reverseWords = function(s) {
    const split = s.split(" ");
    for (let i in split){
     let splitWord = split[i].split("");
     let reverse = splitWord.reverse();
     let newWord = reverse.join("");
     split[i]= newWord;
    }
    return split.join(" ");
};
