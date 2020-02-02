let currentTab = 0;
showTab(currentTab);

function showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
}

function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + 1;
    if (currentTab >= x.length) {
        document.getElementById ("regForm").submit();
        window.prescription = createDict();
        window.location.href = ('results.html');
        return false;
    }
    showTab(currentTab);
}

function validateForm() {
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    for (i = 0; i < y.length; i++) {
        if (y[i].value == "") {
        y[i].className += "invalid";
        valid = false;
        }
    }
    return valid; 
}

function showDiv() {
    document.getElementById('ask').style.display = 'none';
    document.getElementById('cyl').style.display = "inline";
}

function createDict() {
    if(document.getElementById('yes') == 1){
        hasCyl = 1;
    }
    else{
        hasCyl = 0;
    }
    var prescription = {
        "sphere": document.getElementById('sphere').value,
        "cylApplicable": hasCyl,
        "cyl": document.getElementById('cyl'),
        "axis": document.getElementById('axis')
    };
    return prescription;

}
function populate(prescription){
    document.getElementById("posneg").innerHTML = "You will need a standard polycarbonate lens because your prescription is minimal";
}
