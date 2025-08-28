// function for input values
function getParseNumber(id){
    const counter = document.getElementById(id);
    const parseCounter = parseInt(counter.innerText);
    return parseCounter
}



// heart functionality
const elements = document.getElementsByClassName('heart-button');
for (let element of elements){
    element.addEventListener('click', function(){
       let newH = getParseNumber('heart-counter') + 1;
        document.getElementById('heart-counter').innerText = newH;
    })
}



// copy button functionality
const copy = document.getElementsByClassName('copy-btn');
const copyText = document.getElementsByClassName('text-to-copy');

for(let i = 0; i < copy.length; i++){
    copy[i].addEventListener('click', function(){
        let Copied = getParseNumber('copy-counter');
        let totalCopy = Copied + 1;
        document.getElementById('copy-counter').innerText = totalCopy;

        let textToCopy = copyText[i].innerText;

        navigator.clipboard.writeText(textToCopy)
        .then(function(){
            alert(`Copied ${textToCopy}`)
        })
        .catch(function(err){
            alert('Failed to copy text')
        })
    })
}





// call functionality

// button 1

const caller1 = document.getElementById('caller-id-1');
const callerButton = document.getElementById('call-btn');
const title = document.getElementById('t1')

    callerButton.addEventListener('click', function(){
             
        let fixedRate = 20
        if(getParseNumber('coin-counter') < fixedRate){
            alert('You Do Not Have Sufficient Coin 🪙')
            return
        }
        else{
           let newCount = getParseNumber('coin-counter') - fixedRate;
           document.getElementById('coin-counter').innerText = newCount;
        }

        alert(`📞....Calling ${t1.innerText} ${caller1.innerText}`)
    })

// button 2

const caller2 = document.getElementById('caller-id-2');
const callerButton2 = document.getElementById('call-btn-2');
const title2 = document.getElementById('t2')

    callerButton2.addEventListener('click', function(){
             
        let fixedRate = 20
        if(getParseNumber('coin-counter') < fixedRate){
            alert('You Do Not Have Sufficient Coin 🪙')
            return
        }
        else{
           let newCount = getParseNumber('coin-counter') - fixedRate;
           document.getElementById('coin-counter').innerText = newCount;
        }

        alert(`📞....Calling ${title2.innerText} ${caller2.innerText}`)
    })



// button 3

const caller3 = document.getElementById('caller-id-3');
const callerButton3 = document.getElementById('call-btn-3');
const title3 = document.getElementById('t3')

    callerButton3.addEventListener('click', function(){
             
        let fixedRate = 20
        if(getParseNumber('coin-counter') < fixedRate){
            alert('You Do Not Have Sufficient Coin 🪙')
            return
        }
        else{
           let newCount = getParseNumber('coin-counter') - fixedRate;
           document.getElementById('coin-counter').innerText = newCount;
        }

        alert(`📞....Calling ${title3.innerText} ${caller3.innerText}`)
    })




// button 4

const caller4 = document.getElementById('caller-id-4');
const callerButton4 = document.getElementById('call-btn-4');
const title4 = document.getElementById('t4')

    callerButton4.addEventListener('click', function(){
             
        let fixedRate = 20
        if(getParseNumber('coin-counter') < fixedRate){
            alert('You Do Not Have Sufficient Coin 🪙')
            return
        }
        else{
           let newCount = getParseNumber('coin-counter') - fixedRate;
           document.getElementById('coin-counter').innerText = newCount;
        }

        alert(`📞....Calling ${title4.innerText} ${caller4.innerText}`)
    })



    // button 5

const caller5 = document.getElementById('caller-id-5');
const callerButton5 = document.getElementById('call-btn-5');
const title5 = document.getElementById('t5')

    callerButton5.addEventListener('click', function(){
             
        let fixedRate = 20
        if(getParseNumber('coin-counter') < fixedRate){
            alert('You Do Not Have Sufficient Coin 🪙')
            return
        }
        else{
           let newCount = getParseNumber('coin-counter') - fixedRate;
           document.getElementById('coin-counter').innerText = newCount;
        }

        alert(`📞....Calling ${title5.innerText} ${caller5.innerText}`)
    })



        // button 6

const caller6 = document.getElementById('caller-id-6');
const callerButton6 = document.getElementById('call-btn-6');
const title6 = document.getElementById('t6')

    callerButton6.addEventListener('click', function(){
             
        let fixedRate = 20
        if(getParseNumber('coin-counter') < fixedRate){
            alert('You Do Not Have Sufficient Coin 🪙')
            return
        }
        else{
           let newCount = getParseNumber('coin-counter') - fixedRate;
           document.getElementById('coin-counter').innerText = newCount;
        }

        alert(`📞....Calling ${title6.innerText} ${caller6.innerText}`)
    })



            // button 7

const caller7 = document.getElementById('caller-id-7');
const callerButton7 = document.getElementById('call-btn-7');
const title7 = document.getElementById('t7')

    callerButton7.addEventListener('click', function(){
             
        let fixedRate = 20
        if(getParseNumber('coin-counter') < fixedRate){
            alert('You Do Not Have Sufficient Coin 🪙')
            return
        }
        else{
           let newCount = getParseNumber('coin-counter') - fixedRate;
           document.getElementById('coin-counter').innerText = newCount;
        }

        alert(`📞....Calling ${title7.innerText} ${caller7.innerText}`)
    })



                // button 8

const caller9 = document.getElementById('caller-id-9');
const callerButton9 = document.getElementById('call-btn-9');
const title9 = document.getElementById('t9')

    callerButton9.addEventListener('click', function(){
             
        let fixedRate = 20
        if(getParseNumber('coin-counter') < fixedRate){
            alert('You Do Not Have Sufficient Coin 🪙')
            return
        }
        else{
           let newCount = getParseNumber('coin-counter') - fixedRate;
           document.getElementById('coin-counter').innerText = newCount;
        }

        alert(`📞....Calling ${title9.innerText} ${caller9.innerText}`)
    })



    
                // button 9

const caller8 = document.getElementById('caller-id-8');
const callerButton8 = document.getElementById('call-btn-8');
const title8 = document.getElementById('t8')

    callerButton8.addEventListener('click', function(){
             
        let fixedRate = 20
        if(getParseNumber('coin-counter') < fixedRate){
            alert('You Do Not Have Sufficient Coin 🪙')
            return
        }
        else{
           let newCount = getParseNumber('coin-counter') - fixedRate;
           document.getElementById('coin-counter').innerText = newCount;
        }

        alert(`📞....Calling ${title8.innerText} ${caller8.innerText}`)
    })