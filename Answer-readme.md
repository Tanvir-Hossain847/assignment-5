1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

<!-- Answer to the question no 1 -->
1 . These 3 selection mathods have very different use case

getElementById is used when i need to select a specific element with it's uniqe id name. In this case it only selects a single matching id. So, multiple elements with same ID doesnt work.

for getElementByClassName it selects all the elements with the same class. it always returns more than one value, and have to uses a for loop to acces its elements.

quarrySelector always selects the first macthing elemnt with the given identifier, it could be ID or Class. In both cases it will select the first macthing element with given tag.

quarrySelectorAll selects everything with the matching id or class. it gives an array like output. Need to use loop to accese the elements. 



2 . let div = document.CreateElement('div');
    div.innerText = '<button>click</button>' 
    document.body.appendChild(div);

    this is how i would add a simple div containing a button tag. 



3 . when an event happans on any element like a click or any event it run event handler on that element then it travels upward to its containing div or parent and even further above till it reaches document. it travels through the entire DOM tree from event happaning element to document.



4 . Event Delegation is a techniqe where intead of individual event listeners on child elements, i can set a event handler on the parent. when I click on any child it will bubble back to its parent and then the parent event handler can handle that call. It's useful because with this mathod i can use the same event handler on a new appended child element. 




5 . The preventDefault() function simply prevent the element or functions default behaviours. one example is when a form submit button wants to refresh the form everytime. So, we use it to prevent this defualt behavior of form tag.
and
The stopPropagation() function stops an event from bubbuling upwards in DOM tree. it stop the event exactly where you propagated.