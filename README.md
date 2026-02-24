Ans. 01:

document.getElementById(id):
  Returns: A single element
  Parameter: The exact id string (without #).
  Return type: HTMLElement or if not found gives null.

It is faster.
It is usually use to find unique element.


document.getElementsByClassName(className):
  Return: A live HTMLCollection of all elements with the given class.
  Parameter: Class name string (without .).
  Return type: HTMLCollection.

It give live collection.



document.querySelector(selector):
  Returns: First element matching the CSS selector.
  Parameter: Any CSS selector (#id, .class, tag etc.)
  Return type: Element or null.


document.querySelectorAll(selector):
  Returns: A NodeList of all elements matching the CSS selector.
  Parameter: Any CSS selector.
  Return type: NodeList.



Ans. 02:

First: Create element

document.createElement()

than Add content/attributes
div.innerText = "Hello "
div.classList.add("box")
div.innerHTML = ``

finally Insert into DOM
document.section.appendChild(div)


Ans. 03:

Definition: Event bubbling means an event  starts from the target element and moves upward to its parents. 

Works step:
1.  Triggar an event on a specific element
2. Event is target element.
3. Then it "bubbles up" to its parent, then the parent's parent, and so on, until it reaches the top of the DOM.

Ans. 04:

Definition:Event delegation  means add an event listener to a parent to handle events for its children.

1. Works for dynamic elements like I add event litener on container id in Assignment.
2. Improves performance
3.It Reduces memory usage
4. Clean code

Ans. 05:

event.preventDefault():
Purpose: Prevents the default browser action for an event from happening.


It stops the browser’s built-in behavior.
It does not stop the event from bubbling or capturing.


event.stopPropagation():
Purpose: Stops the event from bubbling up (or capturing down) the DOM tree.

It only stops the event from reaching other event listeners on ancestor elements.
It preventing parent elements from reacting to a child’s event.








