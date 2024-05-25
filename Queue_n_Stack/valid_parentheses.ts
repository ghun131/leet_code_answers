function isValid(s: string): boolean {
    if (s.length === 1) return false;
    const parentheses: string[] = [];

    const arr = s.split('');

    for (const item of arr) {
        let idx = parentheses.length - 1;
        switch (item) {
            case '(':
                parentheses.push(item);
                break;
            case ')':
                idx = parentheses.length - 1;
                parentheses[idx] === '('? parentheses.pop() : parentheses.push(')');
                break;
            case '[': 
                parentheses.push(item);
                break;
            case ']':
                idx = parentheses.length - 1;
                parentheses[idx] === '[' ? parentheses.pop() : parentheses.push(']');
                break;
            case '{':
                parentheses.push(item);
                break;
            case '}':
                idx = parentheses.length - 1;
                parentheses[idx] === '{' ? parentheses.pop() : parentheses.push('}');
                break;

        }
    }
    
    return parentheses.length === 0;
};

// const s = "()";
// const s = "()[]{}";
const s = ")(){}";
// const s = "(]";

console.log(isValid(s));
