function selectOption(){
    let isReturnProduct = document.getElementById('rb-1').checked;
    loadSelectOption(isReturnProduct);
    document.getElementsByTagName('form')[0].style.display = 'block';
}

function loadSelectOption(isReturnProduct){
    let inputDisplay = {
        'NKB' : document.getElementById('number-bank').style,
        'OU'  : document.getElementById('desc-break').style,
        'PZ'  : document.getElementById('reason-return').style
    };

    if (isReturnProduct) {
        inputDisplay['NKB'].display = 'block';
        inputDisplay['OU'].display = 'none';
        inputDisplay['PZ'].display = 'block';
    }
    else {
        inputDisplay['NKB'].display = 'none';
        inputDisplay['OU'].display = 'block';
        inputDisplay['PZ'].display = 'none';
    }
}