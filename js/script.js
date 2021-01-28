

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++variables
var $ = document;
var check_box_toggle = $.querySelectorAll('.check_box');
var text = $.querySelector('#text_box');
var paste = $.querySelector('.pasteText');
var clear = $.querySelector('.clearAll');
var select = $.querySelector('.selectAll');
var copy = $.querySelector('.copyAll');
var submit = $.querySelector('.submit');
var scroll_top = $.querySelector('.scroll_top');

var number_checkbox = $.querySelector('#number_checkbox');
var symbol_checkbox = $.querySelector('#symbol_checkbox');
var EN_checkbox = $.querySelector('#EN_checkbox');
var Tanwin_checkbox = $.querySelector('#Tanwin_checkbox');

var word_data = $.querySelector('.word_data');
var Letters_data = $.querySelector('.Letters_data');
var Sentences_data = $.querySelector('.Sentences_data');
var Paragraphs_data = $.querySelector('.Paragraphs_data');
var Characters_data = $.querySelector('.Characters_data');
var number_data = $.querySelector('.number_data');
var word_nospace_data = $.querySelector('.word_nospace_data');
var remove_data = $.querySelector('.remove_data');





var remove = 0;

var confirmed = 0;

var space = 0;
var Sentences = 0;
var Paragraphs = 1;
var Characters = 0;
var Words = 0;
var Numbers = 0;
var Letters = 0;

var desiredArray = [0]
var num = [1777, 1778, 1779, 1780, 1781, 1782, 1783, 1784, 1785, 1776, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48];
var en = [81, 65, 90, 87, 83, 88, 69, 68, 67, 82, 70, 86, 84, 71, 66, 89, 72, 78, 85, 74, 77, 73, 75, 79, 76, 80, 113, 97, 122, 119, 115, 120, 101, 100, 99, 114, 102, 118, 116, 103, 98, 121, 104, 110, 117, 106, 109, 105, 107, 111, 108, 112];
var fa = [1590, 1589, 1579, 1602, 1601, 1594, 1593, 1607, 1582, 1581, 1580, 1670, 1588, 1587, 1740, 1576, 1604, 1575, 1578, 1606, 1605, 1705, 1711, 1662, 1592, 1591, 1586, 1585, 1584, 1583, 1574, 1608, 1688, 1570, 1577, 1610, 1569, 1571, 1573, 1572, 1728];
var symbol = [126, 96, 33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95, 43, 125, 123, 124, 34, 58, 63, 62, 60, 44, 47, 59, 39, 92, 93, 91, 61, 45, 215, 247];
var Tanwin = [1611, 1612, 1613, 1548, 1563, 44, 1617, 1616, 1615, 1614];


submit.addEventListener('click', () => {
    if (text.value) {
        remove = 0;
        confirmed = 0;
        space = 0;
        Sentences = 0;
        Paragraphs = 1;
        Characters = 0;
        Words = 0;
        Numbers = 0;
        Letters = 0;

        desiredArray = [];
        desiredArray = [...desiredArray, ...fa]
        if (number_checkbox.checked) { desiredArray = [...desiredArray, ...num] }
        if (symbol_checkbox.checked) { desiredArray = [...desiredArray, ...symbol] }
        if (EN_checkbox.checked) { desiredArray = [...desiredArray, ...en] }
        if (Tanwin_checkbox.checked) { desiredArray = [...desiredArray, ...Tanwin] }

        scrollTo(0, window.innerHeight);
        let TEXTINPUT = text.value.trim();
        let TEXT = [];
        for (var i = 0; i < TEXTINPUT.length; i++) {
            TEXT[TEXT.length] = TEXTINPUT.charCodeAt(i)
            console.log(TEXT);
        }

        for (var i = 0; i < TEXTINPUT.length; i++) {
            console.log(TEXTINPUT.charCodeAt(i));
            let code = TEXTINPUT.charCodeAt(i);

            if (code === 32 || code === 8204) {
                if (TEXTINPUT.charCodeAt(i + 1) === 32 || TEXTINPUT.charCodeAt(i + 1) === 8204) {
                    remove++
                } else {
                    confirmed++
                    if (code === 32) {
                        space++;
                    }
                }
            }

            if (code === 46) {
                if (TEXTINPUT.charCodeAt(i + 1) === 46 || TEXTINPUT.charCodeAt(i + 1) === 8204) {remove++}
                 else {
                    Sentences++;
                    confirmed++
                }
            }




            if (code === 10) {
                if (TEXTINPUT.charCodeAt(i + 1) === 10 || TEXTINPUT.charCodeAt(i + 1) === 46 || TEXTINPUT.charCodeAt(i + 1) === 8204) {remove++}
                else {Paragraphs++;}
            }
            desiredArray.forEach((e) => {
                if (e === TEXTINPUT.charCodeAt(i)) {Letters++}
            })
            num.forEach((e) => {
                if (e === TEXTINPUT.charCodeAt(i)) {Numbers++}
            })
        }






        Words = space + 1;
        Characters = TEXTINPUT.length;
        word_nospace_data.innerText = Letters;
        Letters = Letters + confirmed;
        number_data.innerText = Numbers;
        word_data.innerText = Words;
        Letters_data.innerText = Letters;
        Sentences_data.innerText = Sentences;
        Paragraphs_data.innerText = Paragraphs;
        Characters_data.innerText = Characters;
        remove_data.innerText = remove;
    }
})





















// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ check_box_toggle 
check_box_toggle.forEach(element => {
    element.querySelector('input').addEventListener("change", (e) => {
        let el = e.currentTarget;
        el.checked ? el.parentNode.style.backgroundColor = '#0d6efd' : el.parentNode.style.backgroundColor = ''
    })
    let el = element.querySelector('input');
    el.checked ? el.parentNode.style.backgroundColor = '#0d6efd' : el.parentNode.style.backgroundColor = ''
});
$.querySelector('#EN_checkbox').click();
$.querySelector('#number_checkbox').click();
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ scroll top
scroll_top.addEventListener("click", () => {
    scrollTo(0, 0);
    text.focus();
})
window.addEventListener('scroll', () => {
    console.log();
    if ($.scrollingElement.scrollTop > window.innerHeight - 250) {
        scroll_top.classList = 'scroll_top';
    } else {
        scroll_top.classList = 'scroll_top scroll_top_hide'
    }
})


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ ctrl btn
select.addEventListener('click', () => text.select())
clear.addEventListener('click', () => text.value = '')
copy.addEventListener('click', () => {
    text.select();
    document.execCommand("copy")
    window.getSelection().removeAllRanges();
})
paste.addEventListener('click', () => {
    text.focus();
    document.execCommand("paste")
    navigator.clipboard.readText().then(clipboard => text.value = clipboard);
})


















