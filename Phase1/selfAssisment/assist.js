function CalculateAndDisplayResults() {
    validate()
    if (validate()) {

        var result = 0;
        var q1 = document.getElementById('q1').value;

        if (q1 == 'Because emotional intelligence enables clearer, more empathetic communication.') {
            result++;
        }

        var q2 = document.getElementById('op1');
        if (q2.checked) {
            result++;
        }


        var q3 = document.getElementById('o2');
        if (q3.checked) {
            result++;
        }

        var q4_op1 = document.getElementById('o-1');

        var q4_op2 = document.getElementById('o-2');
        var q4_op5 = document.getElementById('o-5');

        if (q4_op1.checked && q4_op2.checked && q4_op5.checked) {
            result++;
        }

        var q5 = document.getElementById('oo1');

        if (q5.checked) {
            result++;
        }

        document.getElementById('results').innerHTML = 'You scored ' + result + '/5 !'
    }
}


function validate() {
    document.getElementById('q1E').innerHTML = ''
    document.getElementById('q2E').innerHTML = ''
    document.getElementById('q3E').innerHTML = ''
    document.getElementById('q4E').innerHTML = ''
    document.getElementById('q5E').innerHTML = ''
    let isValid = true;

    if (document.getElementById('q1').value == '') {
        document.getElementById('q1E').innerHTML = 'please enter an answer'
        isValid = false;
    }

    if (!document.getElementById('op1').checked && !document.getElementById('op2').checked && !document.getElementById('op3').checked) {
        document.getElementById('q2E').innerHTML = 'please pick at least one option'

        isValid = false;
    }

    if (!document.getElementById('o1').checked && !document.getElementById('o2').checked) {
        document.getElementById('q3E').innerHTML = 'please pick at least one option'
        isValid = false;

    }

    let c = 0;
    let q4 = document.getElementsByName('q4');
    for (i in q4) {
        if (q4[i].checked) {
            c++;
        }
    }
    if (c > 3 || c < 3) {
        document.getElementById('q4E').innerHTML = 'please pick three options'
        isValid = false;
    }

    if (!document.getElementById('oo1').checked && !document.getElementById('oo2').checked) {
        document.getElementById('q5E').innerHTML = 'please pick at least one option'
        isValid = false;

    }

    return isValid;


}