/* global document $ chrome Clipboard */
const gaAccount = 'UA-88380525-1';
const version = '0.3.0';

const host = chrome;
const storage = host.storage.local;

/*eslint-disable */
var _gaq = _gaq || [];
_gaq.push(['_setAccount', gaAccount]);
_gaq.push(['_trackPageview']);
(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();
/*eslint-enable */

function logger(data) {
    if (debug) document.getElementById('textarea-log').value = data;
}

function analytics(data) {
    const versionData = data;
    if (gaAccount) {
        versionData[2] = `${version} ${data[2]}`;
        _gaq.push(versionData);
        logger(gaAccount && versionData);
    }
}

const clipboard = new Clipboard('#copy');

const copyStatus = (className) => {
    $('#copy').addClass(className);
    setTimeout(() => { $('#copy').removeClass(className); }, 3000);
};

clipboard.on('success', (e) => {
    copyStatus('copy-ok');
    //analytics(['_trackEvent', 'copy', 'ok']);

    e.clearSelection();
});

clipboard.on('error', (e) => {
    copyStatus('copy-fail');
    //analytics(['_trackEvent', 'copy', 'nok']);
    /* eslint-disable no-console */
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
    /* eslint-enable no-console */
});
/**
 * This funtion use to display the given message to the textarea script
 * @param {*Array} message : array contains messages to displays
 */
function display(message) {
    if (message && message.message) {
        const field = document.querySelector('#textarea-script');
        field.value = message.message || '';
    }
}
/**
 * This function use to update the message on textarea script to the storage
 */
function update() {
    let mess = document.querySelector('#textarea-script').value;
    storage.set({ message: mess });
}

/**
 * This function use to show or hidden the button elements
 * @param {*Array} array : the array of elements 
 * @param {*Boolean} visible : should it is visible
 */
function show(array, visible) {
    array.forEach((id) => {
        const element = document.getElementById(id);
        visible ? element.classList.remove('hidden') : element.classList.add('hidden');
    });
}
/**
 * This function use to enable or disable the elements
 * @param {*Array} array : the array of elements 
 * @param {*Boolean} isEnabled : should it is enabled
 */
function enable(array, isEnabled) {
    array.forEach((id) => {
        const element = document.getElementById(id);
        isEnabled ? element.classList.remove('disabled') : element.classList.add('disabled');
    });
}

function toggle(e) {
    logger(e.target.id);
    if (e.target.id === 'record') {
        host.windows.getAll({ windowTypes: ['popup'] }, function(window) {
            window.focused = false;
        });
        show(['stop', 'pause'], true);
        show(['record', 'resume', 'scan'], false);
        enable(['settings-panel'], false);

        $('#sortable').sortable('disable');
    } else if (e.target.id === 'pause') {
        show(['resume', 'stop'], true);
        show(['record', 'scan', 'pause'], false);
        enable(['settings-panel'], false);

        $('#sortable').sortable('disable');
    } else if (e.target.id === 'resume') {
        show(['pause', 'stop'], true);
        show(['record', 'scan', 'resume'], false);
        enable(['settings-panel'], false);

        $('#sortable').sortable('disable');
    } else if ((e.target.id === 'stop') || (e.target.id === 'scan')) {
        show(['record', 'scan'], true);
        show(['resume', 'stop', 'pause'], false);
        enable(['settings-panel'], true);

        $('#sortable').sortable('enable');
    }

    if ((e.canSave === false) || (e.target.id === 'record')) {
        document.getElementById('save').disabled = true;
    } else if ((e.canSave === true) || (e.target.id === 'scan') || (e.target.id === 'stop')) {
        document.getElementById('save').disabled = false;
    }
    if (e.demo) { document.getElementById('demo').checked = e.demo; }
    if (e.verify) { document.getElementById('verify').checked = e.verify; }
    if (e.editable) {
        document.getElementById('editable').checked = e.editable;
        if (e.editable) {
            $('#textarea-script').attr('readonly', false);
            initauto();
        } else {
            $('#textarea-script').attr('readonly', true);
        }
    }
    if (e.debug) {
        document.getElementById('debug').checked = e.debug;
        e.debug ? show(['textarea-log'], true) : show(['textarea-log'], false);
    }
}

function busy(e) {
    if ((e.isBusy === true) || (e.isBusy === false)) {
        ['scan', 'record', 'stop', 'save', 'save', 'resume'].forEach((id) => {
            document.getElementById(id).disabled = e.isBusy;
        });
    }
}

function operation(e) {
    toggle(e);
    const locators = $('#sortable').sortable('toArray', { attribute: 'id' });

    if (e.target.id === 'save') {
        host.runtime.sendMessage({ operation: e.target.id, steps: document.querySelector('#textarea-script').value }, display);
    } else {
        host.runtime.sendMessage({ operation: e.target.id, locators }, display);
    }
    //analytics(['_trackEvent', e.target.id, '^-^']);
}

function isChecked(locator) {
    return document.getElementById(locator).checked;
}

function settings(e) {
    if (e.target.id === 'editable') {
        if (isChecked('editable')) {
            $('#textarea-script').attr('readonly', false);
            initauto();
        } else {
            $('#textarea-script').attr('readonly', true);
        }
    } else if (e.target.id === 'debug') {
        $('#textarea-log').toggleClass('hidden');
    }
    const locators = $('#sortable').sortable('toArray', { attribute: 'id' });
    const demo = isChecked('demo');
    const verify = isChecked('verify');
    const editable = isChecked('editable');
    const debug = isChecked('debug');
    host.runtime.sendMessage({ operation: 'settings', locators, demo, verify, editable, debug });
    //analytics(['_trackEvent', 'setting', e.target.id]);
}

function info() {
    host.runtime.sendMessage({ operation: 'info' });

    //analytics(['_trackEvent', 'info', 'ℹ️']);
}

function like() {
    //analytics(['_trackEvent', 'like', '👍']);
}

function initauto() {

    var data = parse(keywords);

    $.widget("custom.catcomplete", $.ui.autocomplete, {
        _create: function() {
            this._super();
            this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
        },
        _renderMenu: function(ul, items) {
            var that = this,
                currentCategory = "";
            $.each(items, function(index, item) {
                var li;
                if (item.category != currentCategory) {
                    ul.append("<li class='ui-autocomplete-category'>" + item.category + "</li>");
                    currentCategory = item.category;
                }
                li = that._renderItemData(ul, item);
                if (item.category) {
                    li.attr("aria-label", item.category + " : " + item.label);
                }
            });
        },
        _renderItem: function(ul, item) {
            return $("<li>")
                .append("<div>" + item.label + "<br>" + item.desc + "</div>")
                .appendTo(ul);
        }

    });

    $("#textarea-script").on("keydown", function(event) {
        if (event.keyCode === $.ui.keyCode.TAB &&
            $(this).autocomplete("instance").menu.active) {
            event.preventDefault();
        }
    }).catcomplete({
        delay: 0,
        source: function(request, response) {
            // delegate back to autocomplete, but extract the last term
            response($.ui.autocomplete.filter(
                data, extractLast(request.term)));
        },
        open: function() {
            storage.get('editable', function(is) {
                if (is.editable) {
                    $('body').css('height', '350px');
                }
            });
        },
        close: function() {
            $('body').css('height', '208px');
        },
        focus: function() {
            // prevent value inserted on focus
            return false;
        },
        select: function(event, ui) {
            var terms = split(this.value);
            // remove the current input
            terms.pop();
            // add the selected item
            terms.push(ui.item.value + "   " + ui.item.argm + '\n');
            // add placeholder to get the comma-and-space at the end
            this.value = terms.join('\n');
            update();
            return false;
        },
        minlength: 0
    });
}

function split(val) {
    return val.split(/\n\s*/);
}

function extractLast(term) {
    return split(term).pop();
}

function parse(data) {
    var cats = [];
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const element = data[key];
            var cat = $.map(element, function(item) {
                return {
                    label: item.keyw,
                    category: key,
                    desc: item.desc,
                    argm: item.argm.replace(/,/g, "   ")
                };
            });

            cats = cats.concat(cat);
        }
    }

    return cats;
}

document.addEventListener('DOMContentLoaded', () => {
    storage.get({
        message: 'Record or Scan',
        operation: 'stop',
        canSave: false,
        isBusy: false,
        demo: false,
        verify: false,
        editable: false,
        debug: false,
        locators: []
    }, (state) => {
        display({ message: state.message });
        toggle({
            //the root operation will be stop
            target: { id: state.operation },
            canSave: state.canSave,
            isBusy: state.isBusy,
            demo: state.demo,
            verify: state.verify,
            editable: state.editable,
            debug: state.debug
        });
        setTimeout(() => {
            const sortable = document.getElementById('sortable');
            state.locators.forEach((locator) => {
                const li = document.createElement('li');
                li.appendChild(document.createTextNode(locator));
                li.setAttribute('id', locator);
                li.setAttribute('class', 'ui-state-default');
                sortable.appendChild(li);
            });
        }, 200);
    });

    //debug ? document.getElementById('textarea-log').classList.remove('hidden') : 0;
    //Add on click listener to all buttons
    ['record', 'resume', 'stop', 'pause', 'save', 'scan'].forEach((id) => {
        document.getElementById(id).addEventListener('click', operation);
    });

    ['demo', 'verify'].forEach((id) => {
        document.getElementById(id).addEventListener('change', settings);
    });

    ['editable', 'debug'].forEach((id) => {
        document.getElementById(id).addEventListener('change', settings);
    });

    document.getElementById('like').addEventListener('click', like);
    document.getElementById('info').addEventListener('click', info);
    document.getElementById('textarea-script').addEventListener('change', update);

    $('#sortable').sortable({ update: settings });
    $('#sortable').disableSelection();
}, false);

host.storage.onChanged.addListener((changes, _) => {
    for (const key in changes) {
        if (key === 'isBusy') busy({ isBusy: changes.isBusy.newValue });
        if (key === 'message') display({ message: changes.message.newValue });
    }
});