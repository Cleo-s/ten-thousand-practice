//-----------------------------------------------------TASK 1-----------------------------------------------------//

type color = ('red' | 'yellow' | 'blue');

//const currentLight: color = 'blue';

//-----------------------------------------------------TASK 2-----------------------------------------------------//

function nextLight(currentLight: color): color {
    switch (currentLight) {
        case 'blue': return 'yellow';
        case 'yellow': return 'red';
        case 'red': return 'blue';
        default: return 'blue';
    }
}

console.log(nextLight("blue"));

//-----------------------------------------------------TASK 3-----------------------------------------------------//

enum Language {
    JS,
    TS,
    CSS
}

// function LogLang(lang: Language): string {
//     switch (lang) {
//         case Language.TS: return 'You chose TS';
//         case Language.CSS: return 'You chose CSS';
//         case Language.JS: return 'You chose JS';
//         default: 'Choose Your Language';
//     }
// }

// console.log(LogLang(Language.TS));

function LogLang(lang: Language): string {
    if (lang === Language.TS)
        return 'You chose TS!';
    else if (lang === Language.CSS) 
        return 'You chose CSS';
    else if (lang === Language.JS)
        return 'Your default language is JS';
    else 
        return '1';
}

console.log(LogLang(Language.JS));