const map = {
    url: { keyword: 'Open Browser' },
    text: { keyword: 'Input Text', value: 'y' },
    file: { keyword: 'Choose File', value: 'y' },
    button: { keyword: 'Click Button' },
    a: { keyword: 'Click Link' },
    select: { keyword: 'Select From List By Value', value: 'y' },
    // radio:  { keyword: 'Select Radio Button', value: 'y' },
    demo: { keyword: 'Sleep    ${SLEEP}' },
    verify: { keyword: 'Wait Until Page Contains Element' },
    maximize: { keyword: 'Maximize Browser Window' },
    keys: { keyword: 'Press Key' },
    default: { keyword: 'Click Element' }
};

const translator = {
    generateOutput(list, length, demo, verify) {
        const events = this._generateEvents(list, length, demo, verify, false);

        return events.join('\n');
    },

    generateFile(list, length, demo, verify, steps) {
        //let events = this._generateEvents(list, length, demo, verify, true);
        steps = steps.replace(/(^)/gm, "    $1");
        //events = events.reduce((a, b) => `${a}    ${b}\n`, '');

        return '*** Settings ***' +
            `\nDocumentation     A test suite with a single test for ${list[0].title}` +
            "\n...               Created by hats' Robotcorder" +
            '\nLibrary           SeleniumLibrary    timeout=10' +
            '\n\n*** Variables ***' +
            '\n${BROWSER}    chrome' +
            '\n${SLEEP}    3' +
            '\n\n*** Test Cases ***' +
            `\n${list[0].title} test` +
            `\n${steps}` +
            '\n    Close Browser';
    },

    _generatePath(attr, showpass) {
        const type = map[attr.type] || map.default;
        let path = type.keyword;

        path += attr.type === 'url' ? `    ${attr.path}    \${BROWSER}` : `    ${attr.path}`;

        //path += attr.value && type.value ? `    ${attr.value}` : '';
        if (attr.ispass && !showpass) {
            path += attr.which ? '' : '   ********';
        } else {
            path += attr.value && type.value ? `    ${attr.value}` : '';
        }

        path += attr.which ? `    \\\\${attr.which}` : '';

        return path;
    },

    _generateDemo(demo) {
        return demo ? map.demo.keyword : '';
    },

    _generateVerify(attr, verify) {
        return attr.path && verify ? `${map.verify.keyword}    ${attr.path}` : '';
    },

    _generateEvents(list, length, demo, verify, showpass) {
        let event = null;
        const events = [];
        for (let i = 0; i < list.length && i < length; i++) {
            if (i > 0) {
                event = this._generateVerify(list[i], verify);
                event && events.push(event);
            }
            event = this._generatePath(list[i], showpass);
            event && events.push(event);
            if (list[i].type === 'url') {
                events.push(map.maximize.keyword);
            }
            event = this._generateDemo(demo);
            event && events.push(event);
        }
        return events;
    }
};

if (typeof exports !== 'undefined') exports.translator = translator;