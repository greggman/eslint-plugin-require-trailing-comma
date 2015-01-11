[![Build Status](https://travis-ci.org/greggman/eslint-plugin-require-trailing-comma.svg)](https://travis-ci.org/greggman/eslint-plugin-require-trailing-comma)

# eslint-plugin-require-trailing-comma

<a href="http://eslint.org/">ESLint</a> rule for enforcing requiring trailing commas

## Why Use It

You like consistency

Here is an array and object with consistent lines endings

    var array = [
      1,
      2,
      3,
    ];

    var object = {
      a: 1,
      b: 2,
      c: 3,
    };

Here is an array and object with inconsistent lines endings

    var array = [
      1,
      2,
      3
    ];

    var object = {
      a: 1,
      b: 2,
      c: 3
    };

Having consistent line endings means each line is independent. You can sort the lines, cut, copy, and paste
the lines, add more lines, all without worrying about one line being different.

## Why Not Use It

IE8 and before will barf.

## Notes:

The default is to only require trailing comma on multi-line arrays and objects. Single line arrays and
objects are ignored. use `all` to enforce even on single line arrays and objects as in

    {
        "rules: {
            "require-trailing-comma/require-trailing-comma": [2, "all"],
        }
    }

## Further Reading

* http://eslint.org/

