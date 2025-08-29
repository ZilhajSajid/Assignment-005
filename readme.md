1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   Ans: getElementById selects a single element.every id should have unique name.
   getElementsByClassName selects specific elements with class name.
   querySelector selects the first matching element.
   querySelectorAll selects all matching elements.
2. How do you **create and insert a new element into the DOM**?
   Ans: To create we use document.createElement() and to insert div.classList.add/remove,to apply styles we use div.style.color .to insert appendChild is used.
3. What is **Event Bubbling** and how does it work?
   Ans:It is used to propagate events in DOM.when a button is clicked an event triggers and bubbles to the parent div.then vody and then HTML
4. What is **Event Delegation** in JavaScript? Why is it useful?
   Ans:Event Delegation is a technique where a single event listener is attached to a parent element instead of adding separate listeners to multiple child elements. Event delegation works because of event bubbling.when a child element is clicked then it bubbles up to its parent.catching the parent level and handle its children.
5. What is the difference between **preventDefault() and stopPropagation()** methods?
   Ans:Stops the default action of an HTML element from happening.Does not stop event bubbling. and the other stops the event from bubbling up to parent elements
