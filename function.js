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
        .catch(function(){
            alert('Failed to copy text')
        })
    })
}

// call history
const callerHistory = [];
// call functionality

// button 1

const caller1 = document.getElementById('callerid1');
const callerButton = document.getElementById('call-btn');
const title = document.getElementById('t1')

    callerButton.addEventListener('click', function(){
            //  coin count
        let fixedRate = 20
        if(getParseNumber('coin-counter') < fixedRate){
            alert('You Do Not Have Sufficient Coin 🪙')
            return
        }
        else{
           let newCount = getParseNumber('coin-counter') - fixedRate;
           document.getElementById('coin-counter').innerText = newCount;
        }

        // alert
        alert(`📞....Calling ${t1.innerText} ${caller1.innerText}`)
                

        // history
        let data = {
                name: `${t1.innerText}`,
                num: `${caller1.innerText}`,
                date: new Date().toLocaleTimeString()
            }
            callerHistory.push(data);
    })

       callerButton.addEventListener('click', function(){
            const history = document.getElementById('historyContainer')
            history.innerText = "";

            for(let data of callerHistory){
                const div = document.createElement('div')
                div.innerHTML = `
                       <div class="flex items-center justify-between p-4 mx-6 bg-[#FAFAFA] rounded-lg mt-3">
                    <div class="title">
                        <h1 class="inter font-semibold text-lg">${data.name}</h1>
                        <p class="hindu font-normal">${data.num}</p>
                    </div>
                    <div class="time">
                        <p class="hindi font-normal text-lg">${data.date}</p>
                    </div>
                 </div>
                `
                history.appendChild(div)
            }
        })


// button 2

const caller2 = document.getElementById('callerid2');
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


        let data = {
                name: `${title2.innerText}`,
                num: `${caller2.innerText}`,
                date: new Date().toLocaleTimeString()
            }
            callerHistory.push(data);
    })

    callerButton2.addEventListener('click', function(){
            const history = document.getElementById('historyContainer')
            history.innerText = "";

            for(let data of callerHistory){
                const div = document.createElement('div')
                div.innerHTML = `
                       <div class="flex items-center justify-between p-4 mx-6 bg-[#FAFAFA] rounded-lg mt-3">
                    <div class="title">
                        <h1 class="inter font-semibold text-lg">${data.name}</h1>
                        <p class="hindu font-normal">${data.num}</p>
                    </div>
                    <div class="time">
                        <p class="hindi font-normal text-lg">${data.date}</p>
                    </div>
                 </div>
                `
                history.appendChild(div)
            }
})


// button 3

const caller3 = document.getElementById('callerid3');
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

        let data = {
                name: `${title3.innerText}`,
                num: `${caller3.innerText}`,
                date: new Date().toLocaleTimeString()
            }
            callerHistory.push(data);
    })

// history card section
        callerButton3.addEventListener('click', function(){
            const history = document.getElementById('historyContainer')
            history.innerText = "";

            for(let data of callerHistory){
                const div = document.createElement('div')
                div.innerHTML = `
                       <div class="flex items-center justify-between p-4 mx-6 bg-[#FAFAFA] rounded-lg mt-3">
                    <div class="title">
                        <h1 class="inter font-semibold text-lg">${data.name}</h1>
                        <p class="hindu font-normal">${data.num}</p>
                    </div>
                    <div class="time">
                        <p class="hindi font-normal text-lg">${data.date}</p>
                    </div>
                 </div>
                `
                history.appendChild(div)
            }
})



// button 4

const caller4 = document.getElementById('callerid4');
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

        let data = {
        name: `${title4.innerText}`,
        num: `${caller4.innerText}`,
        date: new Date().toLocaleTimeString()
    }
    callerHistory.push(data);

        alert(`📞....Calling ${title4.innerText} ${caller4.innerText}`)
    })

// history card section
        callerButton4.addEventListener('click', function(){
            const history = document.getElementById('historyContainer')
            history.innerText = "";

            for(let data of callerHistory){
                const div = document.createElement('div')
                div.innerHTML = `
                       <div class="flex items-center justify-between p-4 mx-6 bg-[#FAFAFA] rounded-lg mt-3">
                    <div class="title">
                        <h1 class="inter font-semibold text-lg">${data.name}</h1>
                        <p class="hindu font-normal">${data.num}</p>
                    </div>
                    <div class="time">
                        <p class="hindi font-normal text-lg">${data.date}</p>
                    </div>
                 </div>
                `
                history.appendChild(div)
            }
})

    // button 5

const caller5 = document.getElementById('callerid5');
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

        let data = {
        name: `${title5.innerText}`,
        num: `${caller5.innerText}`,
        date: new Date().toLocaleTimeString()
    }
    callerHistory.push(data);


    })


    // history card section
        callerButton5.addEventListener('click', function(){
            const history = document.getElementById('historyContainer')
            history.innerText = "";

            for(let data of callerHistory){
                const div = document.createElement('div')
                div.innerHTML = `
                       <div class="flex items-center justify-between p-4 mx-6 bg-[#FAFAFA] rounded-lg mt-3">
                    <div class="title">
                        <h1 class="inter font-semibold text-lg">${data.name}</h1>
                        <p class="hindu font-normal">${data.num}</p>
                    </div>
                    <div class="time">
                        <p class="hindi font-normal text-lg">${data.date}</p>
                    </div>
                 </div>
                `
                history.appendChild(div)
            }
})

        // button 6

const caller6 = document.getElementById('callerid6');
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

        let data = {
        name: `${title6.innerText}`,
        num: `${caller6.innerText}`,
        date: new Date().toLocaleTimeString()
    }
    callerHistory.push(data);


    })


    // history card section
        callerButton6.addEventListener('click', function(){
            const history = document.getElementById('historyContainer')
            history.innerText = "";

            for(let data of callerHistory){
                const div = document.createElement('div')
                div.innerHTML = `
                       <div class="flex items-center justify-between p-4 mx-6 bg-[#FAFAFA] rounded-lg mt-3">
                    <div class="title">
                        <h1 class="inter font-semibold text-lg">${data.name}</h1>
                        <p class="hindu font-normal">${data.num}</p>
                    </div>
                    <div class="time">
                        <p class="hindi font-normal text-lg">${data.date}</p>
                    </div>
                 </div>
                `
                history.appendChild(div)
            }
})

            // button 7

const caller7 = document.getElementById('callerid7');
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


        let data = {
        name: `${title7.innerText}`,
        num: `${caller7.innerText}`,
        date: new Date().toLocaleTimeString()
    }
    callerHistory.push(data);


    })


    // history card section
        callerButton7.addEventListener('click', function(){
            const history = document.getElementById('historyContainer')
            history.innerText = "";

            for(let data of callerHistory){
                const div = document.createElement('div')
                div.innerHTML = `
                       <div class="flex items-center justify-between p-4 mx-6 bg-[#FAFAFA] rounded-lg mt-3">
                    <div class="title">
                        <h1 class="inter font-semibold text-lg">${data.name}</h1>
                        <p class="hindu font-normal">${data.num}</p>
                    </div>
                    <div class="time">
                        <p class="hindi font-normal text-lg">${data.date}</p>
                    </div>
                 </div>
                `
                history.appendChild(div)
            }
})


    // button 8
    
    const caller8 = document.getElementById('callerid8');
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


           let data = {
        name: `${title8.innerText}`,
        num: `${caller8.innerText}`,
        date: new Date().toLocaleTimeString()
    }
    callerHistory.push(data);
    })


// history card section
        callerButton8.addEventListener('click', function(){
            const history = document.getElementById('historyContainer')
            history.innerText = "";

            for(let data of callerHistory){
                const div = document.createElement('div')
                div.innerHTML = `
                       <div class="flex items-center justify-between p-4 mx-6 bg-[#FAFAFA] rounded-lg mt-3">
                    <div class="title">
                        <h1 class="inter font-semibold text-lg">${data.name}</h1>
                        <p class="hindu font-normal">${data.num}</p>
                    </div>
                    <div class="time">
                        <p class="hindi font-normal text-lg">${data.date}</p>
                    </div>
                 </div>
                `
                history.appendChild(div)
            }
})


    // button 9

const caller9 = document.getElementById('callerid9');
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

   let data = {
        name: `${title9.innerText}`,
        num: `${caller9.innerText}`,
        date: new Date().toLocaleTimeString()
    }
    callerHistory.push(data);

})


// history card section
        callerButton9.addEventListener('click', function(){
            const history = document.getElementById('historyContainer')
            history.innerText = "";

            for(let data of callerHistory){
                const div = document.createElement('div')
                div.innerHTML = `
                       <div class="flex items-center justify-between p-4 mx-6 bg-[#FAFAFA] rounded-lg mt-3">
                    <div class="title">
                        <h1 class="inter font-semibold text-lg">${data.name}</h1>
                        <p class="hindu font-normal">${data.num}</p>
                    </div>
                    <div class="time">
                        <p class="hindi font-normal text-lg">${data.date}</p>
                    </div>
                 </div>
                `
                history.appendChild(div)
            }
})

// clear btn section
document.getElementById('clearAll').addEventListener('click', function(){
    let clean = document.getElementById('historyContainer');
    clean.innerHTML = "";
    callerHistory.length = 0;
})