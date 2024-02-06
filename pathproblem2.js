/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {cd 
    let stack = [];
    const parts = path.split('/');

    for (const part of parts) {
        if (part === '..') {
            stack.pop();
        } else if (part && part !== '.') {
            stack.push(part);
        }
    }

    return '/' + stack.join('/');
};
