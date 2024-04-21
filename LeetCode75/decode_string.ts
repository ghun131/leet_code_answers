function isNumeric(str: string): boolean {
    return !isNaN(Number(str));
}
function decodeString(s: string): string {
    const stack: any[]= [];
    let currStr = '';
    let currNum = 0;

    for (const char of s) {
        if (char === '[') {
            stack.push(currStr as any);
            stack.push(currNum as any);
            currStr = '';
            currNum = 0;
        } else if(char === ']') {
            const num = stack.pop();
            const prevStr = stack.pop();
            currStr = prevStr + currStr.repeat(Number(num));
        } else if (isNumeric(char)) {
            currNum = Number(char) + currNum * 10;
        } else {
            currStr += char;
        }
    }

    return currStr
}

console.log(decodeString("3[a]2[bc]"));
// console.log(decodeString('3[a2[c]]'))
// console.log(decodeString('2[abc]3[cd]ef'))
