function validate() {
    document.getElementById('NameE').innerHTML = ''
    document.getElementById('EmailE').innerHTML = ''

    let isValid = true;
    if (document.getElementById('fname').value == '') {
        document.getElementById('NameE').innerHTML = 'please enter your name if you wish to be contacted'
        isValid = false;
    }
    if (document.getElementById('email').value == '') {
        document.getElementById('EmailE').innerHTML = 'please enter your email if you wish to be contacted'
        isValid = false;
    }

    if (isValid) {
        document.getElementById('fname').value = ''
        document.getElementById('email').value = ''
    }

}
function clr() {
    console.log('pls')
    document.getElementById('fname').value = ''
    document.getElementById('email').value = ''
    let ch = document.getElementsByName('rate');
    for (i in ch) {
        ch[i].checked = false;
    }
    document.getElementById('feedback').value = ''

}