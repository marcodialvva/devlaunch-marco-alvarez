/*

You are given an absolute path for a Unix-style file system, which always begins with a slash /'. 
Your task is to transform this absolute path into its simplified canonical path.

The rules of a Unix-style file system are as follows:
    - A single period '.' represents the current directory.
    - A double period '..' represents the previous/parent directory.
    - Multiple consecutive slashes such as '//' and '///' are treated as a single slash ' / ' .

Any sequence of periods that does not match the rules above should be treated as a valid directory or file name. 
For example, '...' and '....' are valid directory or file names.

The simplified canonical path should follow these rules:

    The path must start with a single slash '/'
    Directories within the path must be separated by exactly one slash '/*.
    The path must not end with a slash '/', unless it is the root directory.
    The path must not have any single or double periods ('.' and '..') used to denote current or parent directories.

    Return the simplified canonical path.

-path is a valid absolute Unix path.


Example 1:
Input: path = "/home/"
Output: "/home"
Explanation:
The trailing slash should be removed.

Example 2:
Input: path = "/home//foo/"
Output: "////home/foo
Explanation:
Multiple consecutive slashes are replaced by a single one.

Example 3:
Input: path = "////home/user/Documents/../Pictures"
Output: "/home/user/Pictures"
Explanation:
Double period ".." refers to the directory up a level (the parent directory).

Example 4:
Input: path = "/../"
Output: "/"
Explanation:
Going one level up from the root directory is not possible.

Example 5:
Input: path = "/ .../a/../b/c/../d/./"
Output: "/.../b/d"
Explanation:
"..." is a valid name for a directory in this problems

*/


const unixStyle_ = (path: string): string => {

    let stack: string[] = []
    const arrayPath = path.split('/')

    arrayPath.forEach(element => {
        if (element !== '') { stack.push(element) }

        if ( element === '..') {
            stack.pop()
            stack.pop()

        }
        if (element === '.'){
            stack.pop()
        }
    }
)

   // console.log (stack)
    let simplifyPath = '/' + stack.join('/')

    return simplifyPath

}

console.log(unixStyle_('///home//foo/'))
console.log(unixStyle_('/home/'))
console.log(unixStyle_('///home//foo/'))
console.log(unixStyle_('////home/user/Documents/../Pictures'))
console.log(unixStyle_('/../'))
console.log(unixStyle_("/ .../a/../b/c/../d/./"))

