## Answers to Questions
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

    Ans: getElementById is used for select an html element by id, getElementsByClassName is used for select an html element by classname & querySelector / querySelectorAll is a CSS selector in DOM .

---
 2. How do you create and insert a new element into the DOM?

    Ans: I create an element by using document.createElement() method & for  insert element by using appendChild() method.
    <br> Example : 
    ``` base 
    let div = document.createElement("div");

    div.innerHTML = "<p> This a example for insert element </p>"

    document.body.appendChild(div);
    ```
---

3. What is Event Bubbling? And how does it work?
    
    Ans: Event Bubbling is when an event starts from the target element and then propagates (moves) upward to its parent elements in the DOM.

    Suppose, I have Box of Container. In the container added 1 button. When I clicked on the button select the parent element.
    ```base 
    
    <div id="container">
        <button> Clicked Me </button>
    </div>

    document.getElementById("container").addEventListener("click", function() {
        console.log("Container clicked");
    });

    document.querySelector("button").addEventListener("click", function() {
        console.log("Button clicked");
    });
    ``` 

---
4. What is Event Delegation in JavaScript? Why is it useful?

    Ans: Event Delegation is a technique where a parent element handles events for its child elements using event bubbling. It improves performance and works for dynamically added elements.

---
5. What is the difference between preventDefault() and stopPropagation() methods?

    Ans : preventDefault() is stops the browser’s default behavior  & stopPropagation is stops the event from bubbling up