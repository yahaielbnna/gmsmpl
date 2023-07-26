function $(element){
    try {
        // get the element
        let el;
        if (typeof element == "string") {
            el = document.querySelector(element);
        } else if (typeof element == "object") {
            el = element;
        }
        // check if the element is exist
        if (el == null) {
            gmsmple_error_code_warn()
            console.warn(`Oh! We couldn't find --- [ ${element} ] ---- in the page, please try to check your spelling or check the existence of this element in the page`);
        } else {
            // start add some functions
            const self = {
                element: _ => { return el },
                html: code => {
                    el.innerHTML = code;
                    return self;
                },
                text: text => {
                    el.innerText = text;
                    return self;
                }
                ,
                insert: elementTag => {
                    let new_element = document.createElement(elementTag);
                    el.appendChild(new_element);
                    el = new_element;
                    return self;
                },
                parent: (order = 1) => {
                    for (let i = 1; i <= order; i++) {
                        el = el.parentElement;
                    }
                    return self;
                },
                child: querySelector => {
                    el = el.querySelector(querySelector);
                    return self;
                },
                remove: _ => {
                    let parent = el.parentElement;
                    el.remove();
                    el = parent;
                    return self;
                },
                event: (event, callBack)=>{
                    el.addEventListener(event, callBack);
                    return self;
                },
                addAttr: (name,value) => {
                    el.setAttribute(name, value);
                    return self;
                },
                getAttr: name => {
                    return el.getAttribute(name);
                },
                removeAttr: name => {
                    el.removeAttribute(name);
                    return self;
                },
                addClass: className => {
                    el.classList.add(className);
                    return self;
                },
                removeClass: className => {
                    el.classList.remove(className);
                    return self;
                },
                toggleClass: className => {
                    el.classList.toggle(className);
                    return self;
                },
                setId: Id => {
                    el.setAttribute('id', Id);
                    return self;
                },
                removeId: _ => {
                    el.removeAttribute('id');
                    return self;
                },
                getCssStyle: name => {
                    return getComputedStyle(el).getPropertyValue(name);
                },
                // styling
                width: width => {
                    if (typeof width == "number")
                        el.style.width = width + "px";
                    else
                        el.style.width = width;
                    return self
                },
                height: height => {
                    if (typeof height == "number")
                        el.style.height = height + "px";
                    else
                        el.style.height = height;
                    return self
                },
                margin: margin => {
                    el.style.margin = margin;
                    return self
                },
                padding: padding => {
                    el.style.padding = padding;
                    return self
                },
                fontWeight: weight => {
                    el.style.fontWeight = `${weight}`;
                    return self
                },
                fontFamily: family => {
                    el.style.fontFamily = family;
                    return self
                },
                fontSize: size => {
                    if (typeof size == "number")
                        el.style.fontSize = size + "px";
                    else
                        el.style.fontSize = size;
                    return self
                },
                bg: color => {
                    el.style.background = color;
                    return self
                },
                background: color => {
                    el.style.background = color;
                    return self
                },
                color: color => {
                    el.style.color = color;
                    return self
                },
                border: border => {
                    el.style.border = border;
                    return self;
                },
                radius: radius => {
                    if (typeof radius == "number")
                    el.style.borderRadius = radius + "px";
                    else
                    el.style.borderRadius = radius;
                    return self;
                },
                TLradius: radius => {
                    if (typeof radius == "number")
                    el.style.borderTopLeftRadius = radius + "px";
                    else
                    el.style.borderTopLeftRadius = radius;
                    return self;
                },
                TRradius: radius => {
                    if (typeof radius == "number")
                    el.style.borderTopRightRadius = radius + "px";
                    else
                    el.style.borderTopRightRadius = radius;
                    return self;
                },
                BLradius: radius => {
                    if (typeof radius == "number")
                    el.style.borderBottomLeftRadius = radius + "px";
                    else
                    el.style.borderBottomLeftRadius = radius;
                    return self;
                },
                BRradius: radius => {
                    if (typeof radius == "number")
                    el.style.borderBottomRightRadius = radius + "px";
                    else
                    el.style.borderBottomRightRadius = radius;
                    return self;
                },
                shadow: shadow => {
                    el.style.boxShadow = shadow;
                    return self;
                },
                position: position =>{
                    el.style.position = position;
                    return self;
                },
                top: value=>{
                    el.style.top = value;
                    return self;
                },
                bottom: value=>{
                    el.style.bottom = value;
                    return self;
                },
                left: value=>{
                    el.style.left = value;
                    return self;
                },
                right: value=>{
                    el.style.right = value;
                    return self;
                },
                transform: value=>{
                    el.style.transform = value;
                    return self;
                },
                z: value=>{
                    el.style.zIndex = value;
                    return self;
                },
                zIndex: value=>{
                    el.style.zIndex = value;
                    return self;
                },
                opacity: value=>{
                    el.style.opacity = value;
                    return self;
                },
                display: value => {
                    el.style.display = value;
                    return self;
                },
                alignItems: value => {
                    el.style.alignItems = value;
                    return self;
                },
                justify: value => {
                    el.style.justifyContent = value;
                    return self;
                },
                justifyContent: value => {
                    el.style.justifyContent = value;
                    return self;
                },
                cursor: value => {
                    el.style.cursor = value;
                    return self;
                }
            }
            return self;
        }
    } catch (error) {
        console.error(error)
    }
}


async function formRequst(form,url,responseType = 'json',header={}){
    if (typeof form == "string") {
        theform = $(form);
    } else if(typeof form == "object"){
        theform = form;
    }
    theform.event('submit', async (e)=>{
        try {
            e.preventDefault();
            let formData = await new FormData(theform.element()),
                searchParam = await new URLSearchParams();
            for (const pair of formData) {
                searchParam.append(pair[0],pair[1])
            }
            let Fet = await fetch(url, {
                method: 'post',
                body: searchParam,
                headers: header
                }),
                response = await responseType == 'json' ? Fet.json() : Fet.text();
            return response;
        } catch (e) {
            console.error(e);
        }
    })
}

async function requst(url,method = 'post',responseType = 'json',body=null,header={}){
    try {
        let Fet = await fetch(url, {
            method: method,
            body: body,
            headers: header
            }),
            response = await responseType == 'json' ? Fet.json() : Fet.text();
        return response;
    } catch (e) {
        console.error(e);
    }
}

function Num(string){
    return parseInt(string);
}
function getNum(string) {
    var numsStr = string.replace(/[^0-9]/g,'');
    return parseInt(numsStr);
}


// gmsml code functions
function gmsmple_error_code_warn() {
    return console.warn('%cgmsmpl ' + '%csay that you have an ' + '%cerror ' + '%cin your code !', 'font-weight: bold;font-size:20px', '', 'color:red;font-weight: bold;font-size:20px', '');
}
