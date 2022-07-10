function getCount(str) {
    let answer = 0;
    let vowels = ['a','e','i','o','u'];
    for(let i of str) {
        if(vowels.includes(i)) {
            answer++
        }
    }
    return answer;
}
