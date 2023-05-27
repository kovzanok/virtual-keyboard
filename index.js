const keyboardRowsArray = [
  [
    {
      name: 'Backquote',
      keyInnerElements: [
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'ё',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'Ё',
        },
        {
          elementClassName: 'key-main not-letter eng',
          textContent: '`',
        },
        {
          elementClassName: 'key-shift not-letter eng hidden',
          textContent: '~',
        },
      ],
    },
    {
      name: 'Digit1',
      keyInnerElements: [
        {
          elementClassName: 'key-main not-letter eng rus',
          textContent: '1',
        },
        {
          elementClassName: 'key-shift not-letter eng rus hidden',
          textContent: '!',
        },
      ],
    },
    {
      name: 'Digit2',
      keyInnerElements: [
        {
          elementClassName: 'key-main not-letter eng rus',
          textContent: '2',
        },
        {
          elementClassName: 'key-shift not-letter eng hidden',
          textContent: '@',
        },
        {
          elementClassName: 'key-shift not-letter rus hidden',
          textContent: '"',
        },
      ],
    },
    {
      name: 'Digit3',
      keyInnerElements: [
        {
          elementClassName: 'key-main not-letter eng rus',
          textContent: '3',
        },
        {
          elementClassName: 'key-shift not-letter eng hidden',
          textContent: '#',
        },
        {
          elementClassName: 'key-shift not-letter rus hidden',
          textContent: '№',
        },
      ],
    },
    {
      name: 'Digit4',
      keyInnerElements: [
        {
          elementClassName: 'key-main not-letter eng rus',
          textContent: '4',
        },
        {
          elementClassName: 'key-shift not-letter eng hidden',
          textContent: '$',
        },
        {
          elementClassName: 'key-shift not-letter rus hidden',
          textContent: ';',
        },
      ],
    },
    {
      name: 'Digit5',
      keyInnerElements: [
        {
          elementClassName: 'key-main not-letter eng rus',
          textContent: '5',
        },
        {
          elementClassName: 'key-shift not-letter eng rus hidden',
          textContent: '%',
        },
      ],
    },
    {
      name: 'Digit6',
      keyInnerElements: [
        {
          elementClassName: 'key-main not-letter eng rus',
          textContent: '6',
        },
        {
          elementClassName: 'key-shift not-letter eng hidden',
          textContent: '^',
        },
        {
          elementClassName: 'key-shift not-letter rus hidden',
          textContent: ':',
        },
      ],
    },
    {
      name: 'Digit7',
      keyInnerElements: [
        {
          elementClassName: 'key-main not-letter eng rus',
          textContent: '7',
        },
        {
          elementClassName: 'key-shift not-letter eng hidden',
          textContent: '&',
        },
        {
          elementClassName: 'key-shift not-letter rus hidden',
          textContent: '?',
        },
      ],
    },
    {
      name: 'Digit8',
      keyInnerElements: [
        {
          elementClassName: 'key-main not-letter eng rus',
          textContent: '8',
        },
        {
          elementClassName: 'key-shift not-letter eng rus hidden',
          textContent: '*',
        },
      ],
    },
    {
      name: 'Digit9',
      keyInnerElements: [
        {
          elementClassName: 'key-main not-letter eng rus',
          textContent: '9',
        },
        {
          elementClassName: 'key-shift not-letter eng rus hidden',
          textContent: '(',
        },
      ],
    },
    {
      name: 'Digit0',
      keyInnerElements: [
        {
          elementClassName: 'key-main not-letter eng rus',
          textContent: '0',
        },
        {
          elementClassName: 'key-shift not-letter eng rus hidden',
          textContent: ')',
        },
      ],
    },
    {
      name: 'Minus',
      keyInnerElements: [
        {
          elementClassName: 'key-main not-letter eng rus',
          textContent: '-',
        },
        {
          elementClassName: 'key-shift not-letter eng rus hidden',
          textContent: '_',
        },
      ],
    },
    {
      name: 'Equal',
      keyInnerElements: [
        {
          elementClassName: 'key-main not-letter eng rus',
          textContent: '=',
        },
        {
          elementClassName: 'key-shift not-letter eng rus hidden',
          textContent: '+',
        },
      ],
    },
    {
      name: 'Backspace',
      keyInnerElements: [
        {
          elementClassName: 'key-main functional eng rus',
          textContent: '← Backspace',
        },
      ],
    },
  ],
  [
    {
      name: 'Tab',
      keyInnerElements: [
        {
          elementClassName: 'key-main functional eng rus',
          textContent: 'Tab ↹',
        },
      ],
    },
    {
      name: 'KeyQ',
      keyInnerElements: [
        {
          elementClassName: 'key-main caps eng',
          textContent: 'q',
        },
        {
          elementClassName: 'key-shift caps eng hidden',
          textContent: 'Q',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'й',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'Й',
        },
      ],
    },
    {
      name: 'KeyW',
      keyInnerElements: [
        {
          elementClassName: 'key-main caps eng',
          textContent: 'w',
        },
        {
          elementClassName: 'key-shift caps eng hidden',
          textContent: 'W',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'ц',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'Ц',
        },
      ],
    },
    {
      name: 'KeyE',
      keyInnerElements: [
        {
          elementClassName: 'key-main caps eng',
          textContent: 'e',
        },
        {
          elementClassName: 'key-shift caps eng hidden',
          textContent: 'E',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'у',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'У',
        },
      ],
    },
    {
      name: 'KeyR',
      keyInnerElements: [
        {
          elementClassName: 'key-main caps eng',
          textContent: 'r',
        },
        {
          elementClassName: 'key-shift caps eng hidden',
          textContent: 'R',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'к',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'К',
        },
      ],
    },
    {
      name: 'KeyT',
      keyInnerElements: [
        {
          elementClassName: 'key-main caps eng',
          textContent: 't',
        },
        {
          elementClassName: 'key-shift caps eng hidden',
          textContent: 'T',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'е',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'Е',
        },
      ],
    },
    {
      name: 'KeyY',
      keyInnerElements: [
        {
          elementClassName: 'key-main caps eng',
          textContent: 'y',
        },
        {
          elementClassName: 'key-shift caps eng hidden',
          textContent: 'Y',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'н',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'Н',
        },
      ],
    },
    {
      name: 'KeyU',
      keyInnerElements: [
        {
          elementClassName: 'key-main caps eng',
          textContent: 'u',
        },
        {
          elementClassName: 'key-shift caps eng hidden',
          textContent: 'U',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'г',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'Г',
        },
      ],
    },
    {
      name: 'KeyI',
      keyInnerElements: [
        {
          elementClassName: 'key-main caps eng',
          textContent: 'i',
        },
        {
          elementClassName: 'key-shift caps eng hidden',
          textContent: 'I',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'ш',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'Ш',
        },
      ],
    },
    {
      name: 'KeyO',
      keyInnerElements: [
        {
          elementClassName: 'key-main caps eng',
          textContent: 'o',
        },
        {
          elementClassName: 'key-shift caps eng hidden',
          textContent: 'O',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'щ',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'Щ',
        },
      ],
    },
    {
      name: 'KeyP',
      keyInnerElements: [
        {
          elementClassName: 'key-main caps eng',
          textContent: 'p',
        },
        {
          elementClassName: 'key-shift caps eng hidden',
          textContent: 'P',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'з',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'З',
        },
      ],
    },
    {
      name: 'BracketLeft',
      keyInnerElements: [
        {
          elementClassName: 'key-main not-letter eng',
          textContent: '[',
        },
        {
          elementClassName: 'key-shift not-letter eng hidden',
          textContent: '{',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'х',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'Х',
        },
      ],
    },
    {
      name: 'BracketRight',
      keyInnerElements: [
        {
          elementClassName: 'key-main not-letter eng',
          textContent: ']',
        },
        {
          elementClassName: 'key-shift not-letter eng hidden',
          textContent: '}',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'ъ',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'Ъ',
        },
      ],
    },
    {
      name: 'Backslash',
      keyInnerElements: [
        {
          elementClassName: 'key-main not-letter eng rus',
          textContent: '\\',
        },
        {
          elementClassName: 'key-shift not-letter eng hidden',
          textContent: '|',
        },
        {
          elementClassName: 'key-shift not-letter rus hidden',
          textContent: '/',
        },
      ],
    },
    {
      name: 'Delete',
      keyInnerElements: [
        {
          elementClassName: 'key-main functional eng rus',
          textContent: 'Delete',
        },
      ],
    },
  ],
  [
    {
      name: 'CapsLock',
      keyInnerElements: [
        {
          elementClassName: 'key-main functional eng rus',
          textContent: 'Caps Lock',
        },
      ],
    },
    {
      name: 'KeyA',
      keyInnerElements: [
        {
          elementClassName: 'key-main caps eng',
          textContent: 'a',
        },
        {
          elementClassName: 'key-shift caps eng hidden',
          textContent: 'A',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'ф',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'Ф',
        },
      ],
    },
    {
      name: 'KeyS',
      keyInnerElements: [
        {
          elementClassName: 'key-main caps eng',
          textContent: 's',
        },
        {
          elementClassName: 'key-shift caps eng hidden',
          textContent: 'S',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'ы',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'Ы',
        },
      ],
    },
    {
      name: 'KeyD',
      keyInnerElements: [
        {
          elementClassName: 'key-main caps eng',
          textContent: 'd',
        },
        {
          elementClassName: 'key-shift caps eng hidden',
          textContent: 'D',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'в',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'В',
        },
      ],
    },
    {
      name: 'KeyF',
      keyInnerElements: [
        {
          elementClassName: 'key-main caps eng',
          textContent: 'f',
        },
        {
          elementClassName: 'key-shift caps eng hidden',
          textContent: 'F',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'а',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'А',
        },
      ],
    },
    {
      name: 'KeyG',
      keyInnerElements: [
        {
          elementClassName: 'key-main caps eng',
          textContent: 'g',
        },
        {
          elementClassName: 'key-shift caps eng hidden',
          textContent: 'G',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'п',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'П',
        },
      ],
    },
    {
      name: 'KeyH',
      keyInnerElements: [
        {
          elementClassName: 'key-main caps eng',
          textContent: 'h',
        },
        {
          elementClassName: 'key-shift caps eng hidden',
          textContent: 'H',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'р',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'Р',
        },
      ],
    },
    {
      name: 'KeyJ',
      keyInnerElements: [
        {
          elementClassName: 'key-main caps eng',
          textContent: 'j',
        },
        {
          elementClassName: 'key-shift caps eng hidden',
          textContent: 'J',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'о',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'О',
        },
      ],
    },
    {
      name: 'KeyK',
      keyInnerElements: [
        {
          elementClassName: 'key-main caps eng',
          textContent: 'k',
        },
        {
          elementClassName: 'key-shift caps eng hidden',
          textContent: 'K',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'л',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'Л',
        },
      ],
    },
    {
      name: 'KeyL',
      keyInnerElements: [
        {
          elementClassName: 'key-main caps eng',
          textContent: 'l',
        },
        {
          elementClassName: 'key-shift caps eng hidden',
          textContent: 'L',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'д',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'Д',
        },
      ],
    },
    {
      name: 'Semicolon',
      keyInnerElements: [
        {
          elementClassName: 'key-main not-letter eng',
          textContent: ';',
        },
        {
          elementClassName: 'key-shift not-letter eng hidden',
          textContent: ':',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'ж',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'Ж',
        },
      ],
    },
    {
      name: 'Quote',
      keyInnerElements: [
        {
          elementClassName: 'key-main not-letter eng',
          textContent: "'",
        },
        {
          elementClassName: 'key-shift not-letter eng hidden',
          textContent: '"',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'э',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'Э',
        },
      ],
    },
    {
      name: 'Enter',
      keyInnerElements: [
        {
          elementClassName: 'key-main functional eng rus',
          textContent: '↵ Enter',
        },
      ],
    },
  ],
  [
    {
      name: 'ShiftLeft',
      keyInnerElements: [
        {
          elementClassName: 'key-main functional eng rus',
          textContent: '⇧ Shift',
        },
      ],
    },
    {
      name: 'KeyZ',
      keyInnerElements: [
        {
          elementClassName: 'key-main caps eng',
          textContent: 'z',
        },
        {
          elementClassName: 'key-shift caps eng hidden',
          textContent: 'Z',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'я',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'Я',
        },
      ],
    },
    {
      name: 'KeyX',
      keyInnerElements: [
        {
          elementClassName: 'key-main caps eng',
          textContent: 'x',
        },
        {
          elementClassName: 'key-shift caps eng hidden',
          textContent: 'X',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'ч',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'Ч',
        },
      ],
    },
    {
      name: 'KeyC',
      keyInnerElements: [
        {
          elementClassName: 'key-main caps eng',
          textContent: 'c',
        },
        {
          elementClassName: 'key-shift caps eng hidden',
          textContent: 'C',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'с',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'С',
        },
      ],
    },
    {
      name: 'KeyV',
      keyInnerElements: [
        {
          elementClassName: 'key-main caps eng',
          textContent: 'v',
        },
        {
          elementClassName: 'key-shift caps eng hidden',
          textContent: 'V',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'м',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'М',
        },
      ],
    },
    {
      name: 'KeyB',
      keyInnerElements: [
        {
          elementClassName: 'key-main caps eng',
          textContent: 'b',
        },
        {
          elementClassName: 'key-shift caps eng hidden',
          textContent: 'B',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'и',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'И',
        },
      ],
    },
    {
      name: 'KeyN',
      keyInnerElements: [
        {
          elementClassName: 'key-main caps eng',
          textContent: 'n',
        },
        {
          elementClassName: 'key-shift caps eng hidden',
          textContent: 'N',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'т',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'Т',
        },
      ],
    },
    {
      name: 'KeyM',
      keyInnerElements: [
        {
          elementClassName: 'key-main caps eng',
          textContent: 'm',
        },
        {
          elementClassName: 'key-shift caps eng hidden',
          textContent: 'M',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'ь',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'Ь',
        },
      ],
    },
    {
      name: 'Comma',
      keyInnerElements: [
        {
          elementClassName: 'key-main not-letter eng',
          textContent: ',',
        },
        {
          elementClassName: 'key-shift not-letter eng hidden',
          textContent: '<',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'б',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'Б',
        },
      ],
    },
    {
      name: 'Period',
      keyInnerElements: [
        {
          elementClassName: 'key-main not-letter eng',
          textContent: '.',
        },
        {
          elementClassName: 'key-shift not-letter eng hidden',
          textContent: '>',
        },
        {
          elementClassName: 'key-main caps rus hidden',
          textContent: 'ю',
        },
        {
          elementClassName: 'key-shift caps rus hidden',
          textContent: 'Ю',
        },
      ],
    },
    {
      name: 'Slash',
      keyInnerElements: [
        {
          elementClassName: 'key-main not-letter eng',
          textContent: '/',
        },
        {
          elementClassName: 'key-shift not-letter eng hidden',
          textContent: '?',
        },
        {
          elementClassName: 'key-main not-letter rus hidden',
          textContent: '.',
        },
        {
          elementClassName: 'key-shift not-letter rus hidden',
          textContent: ',',
        },
      ],
    },
    {
      name: 'ArrowUp',
      keyInnerElements: [
        {
          elementClassName: 'key-main eng rus',
          textContent: '↑',
        },
      ],
    },
    {
      name: 'ShiftRight',
      keyInnerElements: [
        {
          elementClassName: 'key-main functional eng rus',
          textContent: '⇧ Shift',
        },
      ],
    },
  ],
  [
    {
      name: 'ControlLeft',
      keyInnerElements: [
        {
          elementClassName: 'key-main functional eng rus',
          textContent: 'Ctrl',
        },
      ],
    },
    {
      name: 'MetaLeft',
      keyInnerElements: [
        {
          elementClassName: 'key-main functional eng rus',
          textContent: 'Win',
        },
      ],
    },
    {
      name: 'AltLeft',
      keyInnerElements: [
        {
          elementClassName: 'key-main functional eng rus',
          textContent: 'Alt',
        },
      ],
    },
    {
      name: 'Space',
      keyInnerElements: [
        {
          elementClassName: 'key-main functional eng rus',
          textContent: '',
        },
      ],
    },
    {
      name: 'AltRight',
      keyInnerElements: [
        {
          elementClassName: 'key-main functional eng rus',
          textContent: 'Alt',
        },
      ],
    },
    {
      name: 'ArrowLeft',
      keyInnerElements: [
        {
          elementClassName: 'key-main eng rus',
          textContent: '←',
        },
      ],
    },
    {
      name: 'ArrowDown',
      keyInnerElements: [
        {
          elementClassName: 'key-main eng rus',
          textContent: '↓',
        },
      ],
    },
    {
      name: 'ArrowRight',
      keyInnerElements: [
        {
          elementClassName: 'key-main eng rus',
          textContent: '→',
        },
      ],
    },
    {
      name: 'ControlRight',
      keyInnerElements: [
        {
          elementClassName: 'key-main functional eng rus',
          textContent: 'Ctrl',
        },
      ],
    },
  ],
];

function getLanguage() {
  const savedLanguage = window.localStorage.getItem('language');
  if (savedLanguage) {
    return savedLanguage;
  }
  return undefined;
}

let language = getLanguage() || 'eng';
let isShift = false;
let isCaps = false;
let cursorPosition = 0;
let lastClickedButton;

function reverse(direction) {
  if (direction === 'shift') {
    return 'main';
  }
  return 'shift';
}

function hidePrevious(keyboardKey) {
  const children = [...keyboardKey.children];
  const previous = children.find((child) => !child.classList.contains('hidden'));
  if (previous) {
    previous.classList.add('hidden');
  }
}

function handleLanguageWithCaps(keyboardKey) {
  if (keyboardKey.children.length === 1) {
    return;
  }
  const keyType = isShift !== isCaps ? 'shift' : 'main';
  const notLetterType = isShift ? 'shift' : 'main';
  hidePrevious(keyboardKey);
  const letter = keyboardKey.querySelector(`.key-${keyType}.caps.${language}`);
  if (letter) {
    letter.classList.remove('hidden');
  } else {
    const notLetter = keyboardKey.querySelector(`.key-${notLetterType}.not-letter.${language}`);
    if (notLetter) {
      notLetter.classList.remove('hidden');
    }
  }
}

function handleLanguage(keyboardKey) {
  if (isCaps) {
    handleLanguageWithCaps(keyboardKey);
  } else {
    const keyType = isShift ? 'shift' : 'main';
    const engKeys = keyboardKey.querySelectorAll(`.key-${keyType}.eng`);
    const rusKeys = keyboardKey.querySelectorAll(`.key-${keyType}.rus`);
    const multiLangKeys = keyboardKey.querySelectorAll(
      `.key-${keyType}.rus.eng`,
    );
    if (language === 'rus') {
      engKeys.forEach((engKey) => engKey.classList.add('hidden'));
      rusKeys.forEach((rusKey) => rusKey.classList.remove('hidden'));
    } else {
      engKeys.forEach((engKey) => engKey.classList.remove('hidden'));
      rusKeys.forEach((rusKey) => rusKey.classList.add('hidden'));
    }
    multiLangKeys.forEach((key) => key.classList.remove('hidden'));
  }
}

class Renderer {
  static renderKeyboardKey(keyboardKeyObj) {
    const keyboardKey = document.createElement('div');
    keyboardKey.className = `keyboard-key ${keyboardKeyObj.name}`;
    keyboardKey.setAttribute('data-key', keyboardKeyObj.name);

    keyboardKeyObj.keyInnerElements.forEach((innerElement) => {
      const charElement = document.createElement('div');
      charElement.className = innerElement.elementClassName;
      charElement.textContent = innerElement.textContent;

      keyboardKey.append(charElement);
    });
    handleLanguage(keyboardKey);
    return keyboardKey;
  }

  static renderKeyboardRow(keyboardRowArr) {
    const keyboardRow = document.createElement('div');
    keyboardRow.className = 'keyboard-row';

    keyboardRowArr.forEach((keyboardKey) => {
      const keyboardKeyElement = Renderer.renderKeyboardKey(keyboardKey);
      keyboardRow.append(keyboardKeyElement);
    });
    return keyboardRow;
  }

  static renderKeyboard() {
    const keyboard = document.createElement('div');
    keyboard.draggable = false;
    keyboard.className = 'keyboard';
    keyboardRowsArray.forEach((keyboardRowArr) => {
      const keyboardRow = Renderer.renderKeyboardRow(keyboardRowArr);
      keyboard.append(keyboardRow);
    });

    return keyboard;
  }

  static renderContainer() {
    const container = document.createElement('div');
    container.className = 'container';

    return container;
  }

  static renderTitle() {
    const title = document.createElement('h1');
    title.className = 'title';
    title.textContent = 'Virtual Keyboard';

    return title;
  }

  static renderTextArea() {
    const textArea = document.createElement('textarea');
    textArea.autofocus = true;
    textArea.className = 'textarea';
    textArea.cols = 30;
    textArea.rows = 10;

    return textArea;
  }

  static renderInfo() {
    const info = document.createElement('div');
    info.className = 'info';

    const infoTextArr = [
      'Клавиатура создана для Windows OS',
      'Для смены языка используйте левые Ctrl+Alt',
    ];
    infoTextArr.forEach((infoText) => {
      const paragraph = document.createElement('p');
      paragraph.textContent = infoText;
      info.append(paragraph);
    });

    return info;
  }
}

const container = Renderer.renderContainer();
const title = Renderer.renderTitle();
const textArea = Renderer.renderTextArea();
const keyboard = Renderer.renderKeyboard();
const info = Renderer.renderInfo();

container.append(title, textArea, keyboard, info);
document.body.prepend(container);

function hideKeys(keyShift, direction) {
  const removedType = direction === 'main' ? 'shift' : 'main';
  const keyboardKey = keyShift.closest('.keyboard-key');
  const keyMain = keyboardKey.querySelector(`.key-${removedType}.${language}`);
  if (keyMain) {
    keyMain.classList.add('hidden');
  }
}

function handleCaps() {
  const keysCaps = document.querySelectorAll(`.caps.${language}`);
  keysCaps.forEach((keyCaps) => {
    if (keyCaps.classList.contains('hidden')) {
      keyCaps.classList.remove('hidden');
    } else {
      keyCaps.classList.add('hidden');
    }
  });
}

function handleShift(direction) {
  if (isCaps) {
    const newDirection = reverse(direction);
    const keysShift = document.querySelectorAll(
      `.key-${newDirection}.caps.${language}`,
    );
    const keysNotLetter = document.querySelectorAll(
      `.key-${direction}.not-letter.${language}`,
    );
    keysNotLetter.forEach((keyShift) => {
      keyShift.classList.remove('hidden');
      hideKeys(keyShift, direction);
    });
    keysShift.forEach((keyShift) => {
      keyShift.classList.remove('hidden');
      hideKeys(keyShift, newDirection);
    });
  } else {
    const keysShift = document.querySelectorAll(
      `.key-${direction}.${language}`,
    );
    keysShift.forEach((keyShift) => {
      keyShift.classList.remove('hidden');
      hideKeys(keyShift, direction);
    });
  }
}

function toggleLanguage() {
  if (language === 'rus') {
    language = 'eng';
  } else {
    language = 'rus';
  }
}

function findActiveKey(pressedButton) {
  const children = [...pressedButton.children];
  const activeKey = children.find((child) => !child.classList.contains('hidden'));
  return activeKey;
}

function insertSubstringIntoString(substring, string, position) {
  return string.slice(0, position) + substring + string.slice(position);
}

function insertChar(pressedButton) {
  const activeKey = findActiveKey(pressedButton);
  const char = activeKey.textContent;
  textArea.value = insertSubstringIntoString(char, textArea.value, cursorPosition);
}

function removeChar(direction) {
  const textAreaValueArr = textArea.value.split('');
  if (direction === 'Backspace') {
    if (cursorPosition !== 0) {
      textAreaValueArr.splice(cursorPosition - 1, 1);
      cursorPosition -= 1;
      textArea.value = textAreaValueArr.join('');
      textArea.selectionStart = cursorPosition;
      textArea.selectionEnd = cursorPosition;
    }
  } else if (cursorPosition !== textArea.value.length) {
    textAreaValueArr.splice(cursorPosition, 1);
    textArea.value = textAreaValueArr.join('');
    textArea.selectionStart = cursorPosition;
    textArea.selectionEnd = cursorPosition;
  }
}

function buttonDownHandler(e, code, button) {
  const textAreaInputEvent = new Event('textAreaInput');
  button.classList.add('pressed');
  const isFunctional = Boolean(button.querySelector('.functional'));
  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    isShift = true;
    handleShift('shift');
  } else if (e.ctrlKey && e.altKey) {
    toggleLanguage();
    const keyboardKeys = document.querySelectorAll('.keyboard-key');
    keyboardKeys.forEach((keyboardKey) => {
      handleLanguage(keyboardKey);
    });
  } else if (code === 'CapsLock') {
    if (!isCaps) {
      isCaps = true;
      handleCaps();
    } else {
      isCaps = false;
      handleCaps();
    }
  } else if (!isFunctional) {
    insertChar(button);
    textArea.dispatchEvent(textAreaInputEvent);
  } else if (code === 'Enter') {
    textArea.value = insertSubstringIntoString('\n', textArea.value, cursorPosition);
    textArea.dispatchEvent(textAreaInputEvent);
  } else if (code === 'Tab') {
    textArea.value = insertSubstringIntoString('\t', textArea.value, cursorPosition);
    textArea.dispatchEvent(textAreaInputEvent);
  } else if (code === 'Space') {
    textArea.value = insertSubstringIntoString(' ', textArea.value, cursorPosition);
    textArea.dispatchEvent(textAreaInputEvent);
  } else if (code === 'Backspace' || code === 'Delete') {
    removeChar(code);
  }
}

function buttonUpHandler(code, button) {
  button.classList.remove('pressed');
  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    isShift = false;
    handleShift('main');
  } else if (code === 'CapsLock') {
    if (isCaps) {
      button.classList.add('pressed');
    }
  }
}

function keydownHandler(e) {
  const pressedButton = document.querySelector(`.${e.code}`);
  e.preventDefault();
  if (pressedButton) {
    buttonDownHandler(e, e.code, pressedButton);
  }
}

function keyupHandler(e) {
  const pressedButton = document.querySelector(`.${e.code}`);
  if (pressedButton) {
    buttonUpHandler(e.code, pressedButton);
  }
}

function saveLanguage() {
  window.localStorage.setItem('language', language);
}

document.addEventListener('keydown', keydownHandler);
document.addEventListener('keyup', keyupHandler);

function handleKeyboardDown(e) {
  const { target } = e;
  if (target.classList.contains('keyboard-key') || target.closest('.keyboard-key')) {
    const pressedButton = target.closest('.keyboard-key') || target;
    lastClickedButton = pressedButton;
    buttonDownHandler(e, pressedButton.dataset.key, pressedButton);
  }
}

function handleKeyboardUp(e) {
  const { target } = e;
  if (lastClickedButton) {
    if ((!lastClickedButton.classList.contains('CapsLock'))) {
      lastClickedButton.classList.remove('pressed');
    }
    if (lastClickedButton.classList.contains('ShiftLeft') || lastClickedButton.classList.contains('ShiftRight')) {
      buttonUpHandler(lastClickedButton.dataset.key, lastClickedButton);
    }
    if (target.classList.contains('keyboard-key') || target.closest('.keyboard-key')) {
      const pressedButton = target.closest('.keyboard-key') || target;
      buttonUpHandler(pressedButton.dataset.key, pressedButton);
    }
  }
}

document.addEventListener('mousedown', handleKeyboardDown);
document.addEventListener('mouseup', handleKeyboardUp);

window.onunload = () => {
  saveLanguage();
};

textArea.onfocus = () => {
  setTimeout(() => {
    cursorPosition = textArea.selectionStart;
  });
};

textArea.onblur = () => {
  setTimeout(() => {
    textArea.focus();
    cursorPosition = textArea.selectionStart;
  });
};

textArea.addEventListener('textAreaInput', () => {
  cursorPosition += 1;
  textArea.selectionStart = cursorPosition;
  textArea.selectionEnd = cursorPosition;
});

textArea.onclick = () => {
  cursorPosition = textArea.selectionStart;
  textArea.selectionEnd = cursorPosition;
};
