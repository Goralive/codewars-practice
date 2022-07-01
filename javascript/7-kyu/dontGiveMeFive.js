function dontGiveMeFive(start,end) {
    let count = 0;
    console.log(`Start: ${start} \nEND: ${end}`)
    for(let i = start; i <= end; i++) {
        if(!`${i}`.includes(5)) {
            count++
        }
    }
    console.log(`Count: ${count}`)
    return count
}
