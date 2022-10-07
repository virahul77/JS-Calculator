let display = document.getElementById('display');
let buttons = document.querySelector('.buttons');

let inpStr = ''
buttons.addEventListener('click',function(e){
    if(!e.target.id) return;
    if(e.target.id === 'equal'){
        try{
            if(!inpStr) return;
            display.textContent = inpStr = eval(inpStr);
        }
        catch(err){
            console.log(err);
            display.textContent = 'Invalid Input'
            inpStr = '';
        }
        return;
    }
    if(e.target.id === 'clear'){
        display.textContent = inpStr = '';
        return;
    }
    if(e.target.id === 'del'){
        display.textContent = inpStr = inpStr.substring(0,inpStr.length-1);
        return;
    }
    if(e.target.id == 'sqrt'){
        try{
            if(!inpStr) return;
            display.textContent = inpStr = Math.sqrt(+eval(inpStr));
        }
        catch(err){
            console.log(err);
            display.textContent = 'Invalid Input'
            inpStr = '';
        }
        return;
    }

    inpStr += e.target.id;
    display.textContent = inpStr;
    console.log(inpStr);
})

document.addEventListener('keydown',function(e){
    e.preventDefault();
    console.log(e.key);
    if(e.key === "Enter") {
        try{
            if(!inpStr) return;
            display.textContent = inpStr = eval(inpStr);
        }
        catch(err){
            console.log(err);
            display.textContent = 'Invalid Input'
            inpStr = '';
        }
        return;
    }
    if(e.key === 'r'){
        try{
            if(!inpStr) return;
            display.textContent = inpStr = Math.sqrt(+eval(inpStr));
        }
        catch(err){
            console.log(err);
            display.textContent = 'Invalid Input'
            inpStr = '';
        }
        return;
    }
    switch(e.key){
        case '1': inpStr += '1';
            break;
        case '2': inpStr += '2';
            break;
        case '3': inpStr += '3';
            break;
        case '4': inpStr += '4';
            break;
        case '5': inpStr += '5';
            break;
        case '6': inpStr += '6';
            break;
        case '7': inpStr += '7';
            break;
        case '8': inpStr += '8';
            break;
        case '9': inpStr += '9';
            break;
        case '0': inpStr += '0';
            break;
        case '+': inpStr += '+'
            break
        case '-': inpStr += '-'
            break
        case '*' : inpStr += '*';
            break;
        case '/' :inpStr += '/';
            break;
        case 'Backspace' : display.textContent = inpStr = String(inpStr).substring(0,inpStr.length-1);
        return;
        case 'Delete' : inpStr = '';
            break;
        case 'p' : inpStr += "**";
            break;
        case '(' : inpStr += '(';
            break;
        case ')' : inpStr += ')';
            break; 
        case '.' : inpStr += '.';
            break;
        case 'r': inpStr += 'Math.sqrt(';
            break;
        default : return;
    }
    display.textContent = inpStr;
})