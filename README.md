# What is gmsmpl?
<ul>
  <li>gmsmpl is a JavaScript library that shortcuts the codes.</li>
  <li>gmsmpl saves your time and your coding file size.</li>
  <li>gmsmpl provide you with a feeling of comfort, as you would never confuse in your codes</li>
</ul>

# How to set up gmsmpl?
<span> It's too easy just by downloading the `gmsmpl.js` file and including it into your HTML file like
```
<script src="[your scripts file]/gmsmpl.js"></script>
```
If you wouldn't edit `gmsmpl.js` and want to save some space in your project you can use `gmsmpl.min.js`

then you can use your own script file with the power of gmsmpl
</span>

# How to start with gmsmpl?

First, you need to select an element from the page. gmsmpl made it easier. Just using this function.
``` $('query') ```
from this function, you can use all gmsmpl functions in this way
```
$('query')
           .functionName(parameters)
           .secoundFunctionName(parameters)
           . ETC...
```

<b>But what are gmsmpl functions?</b>

## gmsmpl's $() functions.

<table>
  <tr>
    <th>name</th>
    <th>Parameters</th>
    <th>Function</th>
    <th>original JS</th>
  </tr>
  <tr>
    <td>element()</td>
    <td>-</td>
    <td>that return to you the element as if you want to find it in the console</td>
    <td>return document.querySelector('method');</td>
  </tr>
  <tr>
    <td>html()</td>
    <td>code</td>
    <td> Make you able to insert anything in the HTML </td>
    <td> element.innerHTML = code;</td>
  </tr>
  <tr>
    <td>text()</td>
    <td>text</td>
    <td>It's to insert text into the element</td>
    <td>element.innerText= text;</td>
  </tr>
  <tr>
    <td>insert()</td>
    <td>elementTag</td>
    <td>It appends a child in the element.</td>
    <td>element.appendChild(document.createElement(elementTag));</td>    
  </tr>
  <tr>
    <td>parent()</td>
    <td>order</td>
    <td> It takes you back to the parent element</td>
    <td>element = element.parentElement.parentElement. Etc...;</td>
  </tr>
  <tr>
    <td>child()</td>
    <td>query</td>
    <td>that makes you select an element child you've searched in with the query</td>
    <td>element.querySelector(query);</td>
  </tr>
  <tr>
    <td>remove()</td>
    <td>-</td>
    <td>Remove the element and return you the direct parent</td>
    <td>let parent = element.parentElement;<br>
      element.remove();<br>
      element = parent;
    </td>
  </tr>
  <tr>
    <td>event()</td>
    <td>event, function</td>
    <td>When something happens it returns the function</td>
    <td>element.addEventListener(event,function(){...});</td>
  </tr>
  <tr>
    <td>addAttr()</td>
    <td>name,value</td>
    <td>It adds/edits an attribute in your element</td>
    <td>element.setAttribute(name,value);</td>
  </tr>
  <tr>
    <td>getAttr()</td>
    <td>name</td>
    <td>It returns you the value of an attribute</td>
    <td>return element.getAttribute(name);</td>
  </tr>
  <tr>
    <td>removeAtt()</td>
    <td>name</td>
    <td>It removes an attribute you selected from the element </td>
    <td>element.removeAttribute(name);</td>
  </tr>
  <tr>
    <td>addClass()</td>
    <td>className</td>
    <td>It adds class to your element</td>
    <td>element.classList.add(className);</td>
  </tr>
  <tr>
    <td>removeClass()</td>
    <td>className</td>
    <td>It removes class from your element</td>
    <td>element.classList.remove(className);</td>
  </tr>
  <tr>
    <td>toggleClass()</td>
    <td>className</td>
    <td>If the element has the className, the function removes it. <br> Also if not found, the function adds it</td>
    <td>element.classList.toggle(className);</td>
  </tr>
  <tr>
    <td>setId()</td>
    <td>ID</td>
    <td>It adds/edits id to the element</td>
    <td>element.setAttribute('id', ID);</td>
  </tr>
  <tr>
    <td>removeId()</td>
    <td>-</td>
    <td>If you didn't need more for the id, this function removes it</td>
    <td>element.removeAttribute('id');</td>
  </tr>
  <tr>
    <td>getCssStyle()</td>
    <td>styleName</td>
    <td>If you need to get a style value from the CSS file by your script, you just set the styleName by what you need like: color, background, width, etc... </td>
    <td>return getComputedStyle(element).getPropertyValue(styleName);</td>
  </tr>
  <tr>
    <td>Styling</th>
  </tr>
  <tr>
    <td>width()</td>
    <td>width</td>
    <td>Set a width to your element</td>
    <td>element.style.width = width;</td>
  </tr>
  <tr>
    <td>height()</td>
    <td>height</td>
    <td>Set a height to your element</td>
    <td>element.style.height = height;</td>
  </tr>
  <tr>
    <td>margin()</td>
    <td>margin</td>
    <td>Set a margin to your element</td>
    <td>element.style.margin = margin;</td>
  </tr>
  <tr>
    <td>padding()</td>
    <td>padding</td>
    <td>Set a padding to your element</td>
    <td>element.style.padding = padding;</td>
  </tr>
</table>
