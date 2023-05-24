/**
 * @param {Function} fn
 * @return {Function}
 */

// first return is a function that takes in any number of args
// only execute when fn has all its required args
const curry = fn => {

    // by using closure for the curried function, fn can be stored for the next recursive call
    const curried = (...args) => {
        if (args.length >= fn.length) {
            return fn(...args);
        }

        return (...nextArgs) => curried(...args, ...nextArgs);
   };

   return curried;
};



/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
