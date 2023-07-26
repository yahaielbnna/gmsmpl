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
from this function, you can use all gmsmpl's $() functions in this way
```
$('query')
           .functionName(parameters)
           .secoundFunctionName(parameters)
           . ETC...
```

<b>But what are gmsmpl's $() functions?</b>

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
  <tr>
    <td>fontWeight()</td>
    <td>fontWeight</td>
    <td>Set a font weight to your element</td>
    <td>element.style.fontWeight = fontWeight;</td>
  </tr>
  <tr>
    <td>fontFamily()</td>
    <td>fontFamily</td>
    <td>Set a font family to your element</td>
    <td>element.style.fontFamily = fontFamily;</td>
  </tr>
  <tr>
    <td>fontSize()</td>
    <td>fontSize</td>
    <td>Set font size to your element</td>
    <td>element.style.fontSize = fontSize;</td>
  </tr>
  <tr>
    <td>bg() / background()</td>
    <td>background</td>
    <td>Set background to your element</td>
    <td>element.style.background = background;</td>
  </tr>
  <tr>
    <td>color()</td>
    <td>color</td>
    <td>Set color to your element</td>
    <td>element.style.color = color;</td>
  </tr>
  <tr>
    <td>border()</td>
    <td>border</td>
    <td>Set border to your element</td>
    <td>element.style.border = border;</td>
  </tr>
  <tr>
    <td>radius()</td>
    <td>radius</td>
    <td>Set border radius to your element</td>
    <td>element.style.borderRadius = radius;</td>
  </tr>
  <tr>
    <td>TLradius()</td>
    <td>radius</td>
    <td>Set border top left radius to your element</td>
    <td>element.style.borderTopLeftRadius = radius;</td>
  </tr>
  <tr>
    <td>TRradius()</td>
    <td>radius</td>
    <td>Set border top right radius to your element</td>
    <td>element.style.borderTopRightRadius = radius;</td>
  </tr>
  <tr>
    <td>BLradius()</td>
    <td>radius</td>
    <td>Set border bottom left radius to your element</td>
    <td>element.style.borderBottomLeftRadius = radius;</td>
  </tr>
  <tr>
    <td>BRradius()</td>
    <td>radius</td>
    <td>Set border bottom right radius to your element</td>
    <td>element.style.borderBottomRightRadius = radius;</td>
  </tr>
  <tr>
    <td>shadow()</td>
    <td>shadow</td>
    <td>Set box-shadow to your element</td>
    <td>element.style.boxShadow = shadow;</td>
  </tr>
  <tr>
    <td>position()</td>
    <td>position</td>
    <td>Set position to your element</td>
    <td>element.style.position = position;</td>
  </tr>
  <tr>
    <td>top()</td>
    <td>value</td>
    <td>Set top distance to your element</td>
    <td>element.style.top = value;</td>
  </tr>
  <tr>
    <td>bottom()</td>
    <td>value</td>
    <td>Set bottom distance to your element</td>
    <td>element.style.bottom = value;</td>
  </tr>
  <tr>
    <td>left()</td>
    <td>value</td>
    <td>Set left distance to your element</td>
    <td>element.style.left = value;</td>
  </tr>
  <tr>
    <td>right()</td>
    <td>value</td>
    <td>Set right distance to your element</td>
    <td>element.style.right = value;</td>
  </tr>
  <tr>
    <td>transform()</td>
    <td>value</td>
    <td>Set transform to your element</td>
    <td>element.style.transform = value;</td>
  </tr>
  <tr>
    <td>z() / zIndex()</td>
    <td>value</td>
    <td>Set z-index to your element</td>
    <td>element.style.zIndex = value;</td>
  </tr>
  <tr>
    <td>opacity()</td>
    <td>value</td>
    <td>Set opacity to your element</td>
    <td>element.style.opacity = value;</td>
  </tr>
  <tr>
    <td>display()</td>
    <td>value</td>
    <td>Set display to your element</td>
    <td>element.style.display = value;</td>
  </tr>
  <tr>
    <td>alignItems()</td>
    <td>value</td>
    <td>Set align to your element items</td>
    <td>element.style.alignItems = value;</td>
  </tr>
  <tr>
    <td>justify() / justifyContent()</td>
    <td>value</td>
    <td>Set justify-content to your element style</td>
    <td>element.style.justifyContent = value;</td>
  </tr>
  <tr>
    <td>cursor()</td>
    <td>value</td>
    <td>Set cursor to your element style</td>
    <td>element.style.cursor = value;</td>
  </tr>
</table>
