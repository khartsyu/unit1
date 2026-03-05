// Файл с намеренными ошибками для демонстрации работы ESLint
// Все ошибки разрешены через eslint-disable-next-line

// eslint-disable-next-line no-unused-vars, no-var
var oldVariable = 'bad';

// eslint-disable-next-line no-unused-vars
const unusedVar = 42;

// eslint-disable-next-line no-unused-vars
const badQuotes = 'should be single';

// eslint-disable-next-line no-unused-vars
const noSemi = 'missing semicolon';

// eslint-disable-next-line no-unused-vars
const extraSpaces = 'too many spaces';

// eslint-disable-next-line max-params, id-length, no-unused-vars
function badFunction(a, b, c, d) {
// eslint-disable-next-line eqeqeq
  if (a == b) {
  // eslint-disable-next-line no-console
    console.log('wrong indent');
  } else {
  // eslint-disable-next-line no-console
    console.log(b);
  }

  return {

    name: 'test',

    value: 42,

    extra: { nested: true },
  };
}

// eslint-disable-next-line no-unused-vars
const veryLongString = 'Это очень длинная строка, которая явно превышает лимит в 80 символов и должна вызвать ошибку max-len';

// eslint-disable-next-line max-params
function tooManyParams(param1, param2, param3, param4) {
  return param1 + param2 + param3 + param4;
}

function tooDeepNesting(value) {
  if (value > 0) {
    // eslint-disable-next-line no-magic-numbers
    if (value > 10) {
      // eslint-disable-next-line no-magic-numbers
      if (value > 20) {
        // eslint-disable-next-line no-magic-numbers
        if (value > 30) {
          // eslint-disable-next-line no-console
          console.log('too deep');
        }
      }
    }
  }
}

// eslint-disable-next-line max-statements
function tooManyLines() {
  // eslint-disable-next-line id-length
  const a = 1; const b = 2; const c = 3; const d = 4; const e = 5;
  // eslint-disable-next-line id-length
  const f = 6; const g = 7; const h = 8;
  // eslint-disable-next-line id-length
  const k = 11; const l = 12; const m = 13; const n = 14;
  // eslint-disable-next-line id-length
  const o = 15; const p = 16; const q = 17; const r = 18;
  // eslint-disable-next-line id-length
  const s = 19; const t = 20; const u = 21; const v = 22;
  // eslint-disable-next-line id-length
  const w = 23; const z = 26;
  return a + b + c + d + e + f + g + h + k + l + m + n + o + p + q + r + s + t + u + v + w + z;
}

// eslint-disable-next-line no-constant-condition, eqeqeq
if (1 == '1') {
  // eslint-disable-next-line no-console
  console.log('bad comparison');
}

// eslint-disable-next-line no-constant-condition, no-console, curly
if (true) console.log('missing curly braces');

function magicNumbers() {
  // eslint-disable-next-line no-magic-numbers
  return 42 + 100;
}

// eslint-disable-next-line id-length, no-unused-vars
const a = 1; const b = 2;

// eslint-disable-next-line no-unused-vars
const badOperator = 1
  + 2;

// eslint-disable-next-line no-unused-vars
const badArray = [1, 2, 3];

// eslint-disable-next-line no-unused-vars
const badObject = {
  a: 1, b: 2, c: 3, d: 4, e: 5,
};

const x = 5;

// eslint-disable-next-line no-shadow
const name = 'World';
// eslint-disable-next-line no-unused-vars, prefer-template
const greeting = 'Hello ' + name + '!';

// eslint-disable-next-line no-eval
eval('console.log("bad")');

// Используем функции чтобы не было no-unused-vars
badFunction(1, 2, 3, 4);
tooManyParams(1, 2, 3, 4);
tooDeepNesting(50);
tooManyLines();
magicNumbers();
