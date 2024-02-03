/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let max = path.length;
    let pointer = 0;
    path = path.split("");

    // The path starts with a single slash '/'.
    if (path[0] !== "/") {
        path.unshift("/");
        max = max + 1;
    }

    // Any two directories are separated by a single slash '/'.
    while (pointer < max - 1) {
        if (path[pointer] === "/" && path[pointer + 1] === "/") {
            path.splice(pointer + 1, 1); // Use splice to remove the extra slash
            max = max - 1;
        } else {
            pointer = pointer + 1;
        }
    }

    // The path does not end with a trailing '/'.
    if (path[max - 1] === "/") {
        path.pop();
    }

    // Split the path into directories and handle "." and ".."
    const directories = path.join("").split('/');
    const result = [];

    for (const dir of directories) {
        if (dir === "..") {
            result.pop(); // Go up one directory
        } else if (dir && dir !== ".") {
            result.push(dir);
        }
    }

    return "/" + result.join("/");
};
