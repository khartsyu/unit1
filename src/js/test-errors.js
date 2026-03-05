// Файл с огромным количеством ошибок для демонстрации работы ESLint

// Ошибка 1: var вместо const/let
const oldVariable = 'bad';

// Ошибка 2: неиспользуемая переменная
const unusedVar = 42;

// Ошибка 3: двойные кавычки
const badQuotes = 'should be single';

// Ошибка 4: нет точки с запятой
const noSemi = 'missing semicolon';

// Ошибка 5: лишние пробелы
const extraSpaces = 'too many spaces';

// Ошибка 6: неправильные отступы (везде)
function badFunction(a, b, c, d) {
  if (a == b) {
    console.log('wrong indent');
  } else {
    console.log(b);
  }

  return {
    name: 'test',
    value: 42,
    extra: {
      nested: true,
    },
  };
}

// Ошибка 7: слишком длинная строка (больше 80 символов)
const veryLongString = 'Это очень длинная строка, которая явно превышает лимит в 80 символов и должна вызвать ошибку max-len';

// Ошибка 8: слишком много параметров (больше 3)
function tooManyParams(param1, param2, param3, param4) {
  return param1 + param2 + param3 + param4;
}

// Ошибка 9: слишком глубокая вложенность (больше 2)
function tooDeepNesting(value) {
  if (value > 0) {
    if (value > 10) {
      if (value > 20) {
        if (value > 30) {
          console.log('too deep');
        }
      }
    }
  }
}

// Ошибка 10: слишком много строк в функции (больше 30)
function tooManyLines() {
  const a = 1;
  const b = 2;
  const c = 3;
  const d = 4;
  const e = 5;
  const f = 6;
  const g = 7;
  const h = 8;
  const i = 9;
  const j = 10;
  const k = 11;
  const l = 12;
  const m = 13;
  const n = 14;
  const o = 15;
  const p = 16;
  const q = 17;
  const r = 18;
  const s = 19;
  const t = 20;
  const u = 21;
  const v = 22;
  const w = 23;
  const x = 24;
  const y = 25;
  const z = 26;
  return a + b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q + r + s + t + u + v + w + x + y + z;
}

// Ошибка 11: использование == вместо ===
if (1 == '1') {
  console.log('bad comparison');
}

// Ошибка 12: нет фигурных скобок
if (true) {
  console.log('missing curly braces');
}

// Ошибка 13: магические числа
function magicNumbers() {
  return 42 + 100; // магические числа!
}

// Ошибка 14: слишком короткие имена переменных
const a = 1;
const b = 2;

// Ошибка 15: неправильное расположение операторов
const badOperator = 1
  + 2;

// Ошибка 16: пробелы перед запятыми
const badArray = [1, 2, 3];

// Ошибка 17: объект в одну строку
const badObject = {
  a: 1, b: 2, c: 3, d: 4, e: 5,
};

// Ошибка 18: лишние пустые строки

const x = 5;

// Ошибка 19: конкатенация вместо шаблонов
const name = 'World';
const greeting = `Hello ${name}!`;

// Ошибка 20: eval
eval('console.log("bad")');

badFunction(
  1,
  2,
  3,
  4,
);
tooManyParams(
  1,
  2,
  3,
  4,
);
tooDeepNesting(50);
tooManyLines();
magicNumbers();