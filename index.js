const keyboardRowsArray = [
  [
    {
      name: 'Backquote',
      keyInnerElements: [
        {
          elementClassName: 'key-main rus hidden',
          textContent: 'ё',
        },
        {
          elementClassName: 'key-shift rus hidden',
          textContent: 'Ё',
        },
        {
          elementClassName: 'key-main eng',
          textContent: '`',
        },
        {
          elementClassName: 'key-shift eng hidden',
          textContent: '~',
        },
      ],
    },
    {
      name: 'Digit1',
      keyInnerElements: [
        {
          elementClassName: 'key-main ',
          textContent: '1',
        },
        {
          elementClassName: 'key-shift hidden',
          textContent: '!',
        },
      ],
    },
    {
      name: 'Digit2',
      keyInnerElements: [
        {
          elementClassName: 'key-main ',
          textContent: '2',
        },
        {
          elementClassName: 'key-shift eng hidden',
          textContent: '@',
        },
        {
          elementClassName: 'key-shift rus hidden',
          textContent: '"',
        },
      ],
    },
    {
      name: 'Digit3',
      keyInnerElements: [
        {
          elementClassName: 'key-main ',
          textContent: '3',
        },
        {
          elementClassName: 'key-shift eng hidden',
          textContent: '#',
        },
        {
          elementClassName: 'key-shift rus hidden',
          textContent: '№',
        },
      ],
    },
    {
      name: 'Digit4',
      keyInnerElements: [
        {
          elementClassName: 'key-main ',
          textContent: '4',
        },
        {
          elementClassName: 'key-shift eng hidden',
          textContent: '$',
        },
        {
          elementClassName: 'key-shift rus hidden',
          textContent: ';',
        },
      ],
    },
    {
      name: 'Digit5',
      keyInnerElements: [
        {
          elementClassName: 'key-main ',
          textContent: '5',
        },
        {
          elementClassName: 'key-shift hidden',
          textContent: '%',
        },
      ],
    },
    {
      name: 'Digit6',
      keyInnerElements: [
        {
          elementClassName: 'key-main ',
          textContent: '6',
        },
        {
          elementClassName: 'key-shift eng hidden',
          textContent: '^',
        },
        {
          elementClassName: 'key-shift rus hidden',
          textContent: ':',
        },
      ],
    },
    {
      name: 'Digit7',
      keyInnerElements: [
        {
          elementClassName: 'key-main ',
          textContent: '7',
        },
        {
          elementClassName: 'key-shift eng hidden',
          textContent: '&',
        },
        {
          elementClassName: 'key-shift rus hidden',
          textContent: '?',
        },
      ],
    },
    {
      name: 'Digit8',
      keyInnerElements: [
        {
          elementClassName: 'key-main ',
          textContent: '8',
        },
        {
          elementClassName: 'key-shift hidden',
          textContent: '*',
        },
      ],
    },
    {
      name: 'Digit9',
      keyInnerElements: [
        {
          elementClassName: 'key-main ',
          textContent: '9',
        },
        {
          elementClassName: 'key-shift hidden',
          textContent: '(',
        },
      ],
    },
    {
      name: 'Digit0',
      keyInnerElements: [
        {
          elementClassName: 'key-main ',
          textContent: '0',
        },
        {
          elementClassName: 'key-shift hidden',
          textContent: ')',
        },
      ],
    },
    {
      name: 'Minus',
      keyInnerElements: [
        {
          elementClassName: 'key-main ',
          textContent: '-',
        },
        {
          elementClassName: 'key-shift hidden',
          textContent: '_',
        },
      ],
    },
    {
      name: 'Equal',
      keyInnerElements: [
        {
          elementClassName: 'key-main ',
          textContent: '=',
        },
        {
          elementClassName: 'key-shift hidden',
          textContent: '+',
        },
      ],
    },
    {
      name: 'Backspace',
      keyInnerElements: [
        {
          elementClassName: 'key-main ',
          textContent: '← Backspace',
        },
      ],
    },
  ],
];

function renderKeyboardKey(keyboardKeyObj) {
  const keyboardKey = document.createElement('div');
  keyboardKey.className = `keyboard-key ${keyboardKeyObj.name}`;

  keyboardKeyObj.keyInnerElements.forEach((innerElement) => {
    const charElement = document.createElement('div');
    charElement.className = innerElement.elementClassName;
    charElement.textContent = innerElement.textContent;

    keyboardKey.append(charElement);
  });

  return keyboardKey;
}

function renderKeyboardRow(keyboardRowArr) {
  const keyboardRow = document.createElement('div');
  keyboardRow.className = 'keyboard-row';

  keyboardRowArr.forEach((keyboardKey) => {
    const keyboardKeyElement = renderKeyboardKey(keyboardKey);
    keyboardRow.append(keyboardKeyElement);
  });
  return keyboardRow;
}

function renderKeyboard() {
  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  keyboardRowsArray.forEach((keyboardRowArr) => {
    const keyboardRow = renderKeyboardRow(keyboardRowArr);
    keyboard.append(keyboardRow);
  });

  return keyboard;
}

const container = document.querySelector('.container');
const keyboard = renderKeyboard();

container.append(keyboard);
