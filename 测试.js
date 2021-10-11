var isValid = function(s) {
    const stack = [],
          map = {
              "(":")",
              "[":"]",
              "{":"}"
          };
     for(const x of s) {
         if(x in map) {
             stack.push(x);
             continue;
         };
         if(map[stack.pop() !== x]) return false
     }
     return !stack.length
 };