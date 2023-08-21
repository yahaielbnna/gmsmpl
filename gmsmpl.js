var gmErrorInputClassName = 'gm-error';
function $(element) {
    try {
        let el;
        if (typeof element == "string") {
            el = document.querySelector(element);
        } else if (typeof element == "object") {
            el = element;
        }
        if (el == null) {
            gmsmple_error_code_warn()
            console.warn(`Oh! We couldn't find --- [ ${element} ] ---- in the page, please try to check your spelling or check the existence of this element in the page`);
        } else {
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
                createForm: (className=null, Id=null, hasValidation = false ,action=null, method=null, target=null) => {
                    let new_element = document.createElement('form');
                    el.appendChild(new_element);
                    className !== null ? new_element.classList.add(className) : '';
                    Id !== null ? new_element.setAttribute('id',Id) : '';
                    action !==null ? new_element.setAttribute('action',action) : '';
                    method !==null ? new_element.setAttribute('method',method) : '';
                    target !== null ? new_element.setAttribute('target', target) : '';
                    hasValidation ? new_element.setAttribute('gm-validate', 'true') : '';
                    hasValidation ? new_element.setAttribute('novalidate', '') : '';
                    el = new_element;
                    return self;
                },
                input: (name,Mandatory = false,type='text',placeholder=null,value=null,className=null,Id=null) => {
                    if (el.tagName.toLowerCase() == 'form') {
                        let input = document.createElement('input');
                        el.appendChild(input);
                        input.name = name;
                        value !== null ? input.value = value : '';
                        type !== null ? input.setAttribute('type', type) : '';
                        placeholder !== null ? input.setAttribute('placeholder', placeholder) : '';
                        className !== null ? input.classList.add(className) : '';
                        Id !== null ? input.setAttribute('Id', Id) : '';
                        Mandatory ? input.setAttribute('gm-mandatory', 'true') : '';
                        return self;
                    } else {
                        gmsmple_error_code_warn();
                        console.error(`you should add the input into a form not a ${el.tagName}!`);
                    }
                },
                inputContainer: (name, Mandatory = false, type = 'text', placeholder = null, containerClassName = null,inputClassName = null, labelValue = null,inputValue = null, inputId = null) => {
                    if (el.tagName.toLowerCase() == 'form') {
                        let container = document.createElement('div'),
                            label = document.createElement('label'),
                            input = document.createElement('input');
                        el.appendChild(container);
                        input.name = name;
                        inputValue !== null ? input.value = inputValue : '';
                        type !== null ? input.setAttribute('type', type) : '';
                        placeholder !== null ? input.setAttribute('placeholder', placeholder) : '';
                        inputClassName !== null ? input.classList.add(inputClassName) : '';
                        inputId !== null ? input.setAttribute('Id', inputId) : '';
                        inputId !== null ? label.setAttribute('for', inputId) : '';
                        Mandatory ? input.setAttribute('gm-mandatory', 'true') : '';
                        container.classList.add(containerClassName);
                        container.classList.add('gm-inputContainer');
                        if (labelValue !== null) {
                            container.appendChild(label);
                            label.classList.add('gm-inputLabel');
                            label.innerText = labelValue;
                        }
                        container.appendChild(input);
                        return self;
                    } else {
                        gmsmple_error_code_warn();
                        console.error(`you should add the input into a form not a ${el.tagName}!`);
                    }
                },
                button: (text, className=null, Id=null, name=null,type='submit') => {
                    if (el.tagName.toLowerCase() == 'form') {
                        let button = document.createElement('button');
                        el.appendChild(button);
                        button.innerText = text;
                        
                        name !== null ? button.name = name : '';
                        type !== null ? button.setAttribute('type', type) : '';
                        className !== null ? button.classList.add(className) : '';
                        Id !== null ? button.setAttribute('Id', Id) : '';
                        
                        return self;
                    } else {
                        gmsmple_error_code_warn();
                        console.error(`you should add the button into a form not a ${el.tagName}!`);
                    }
                },
                formRequest: (url, responseType = 'json', callBack, header = {}) => {
                    if (el.tagName.toLowerCase() == 'form') {
                        el.addEventListener('submit', async (e) => {
                            try {
                                e.preventDefault();
                                let validate = true,
                                    msg = null;
                                    inputs = el.querySelectorAll('input[gm-mandatory="true"]');
                                    inputs.forEach(input => {
                                        if (isEmpty(input.value)) {
                                            input.classList.add(gmErrorInputClassName)
                                            msg = { 'code': 302, 'massege': `${input.name} field is empty`,'name':input.name,'id':input.id,'input':input};
                                            validate = false;
                                        }
                                    });
                                    if (!validate) {
                                        return callBack(msg);
                                    }
                                    if (Boolean(el.getAttribute('gm-validate'))) {
                                        emailInputs = el.querySelectorAll('input[type="email"]');
                                        emailInputs.forEach(input => {
                                            if (!emailValidation(input.value)) {
                                                validate = false;
                                                input.classList.add(gmErrorInputClassName)
                                                msg = { 'code': 302, 'massege': `${input.name} field's value doesn't correct ! `,'name':input.name,'id':input.id,'input':input};
                                            }
                                        });
                                    }
                                    if (!validate) {
                                        return callBack(msg);
                                    }
                                let formData = await new FormData(el),
                                    searchParam = await new URLSearchParams();
                                for (const pair of formData) {
                                    searchParam.append(pair[0], pair[1])
                                }
                                let Fet = await fetch(url, {
                                    method: 'post',
                                    body: searchParam,
                                    headers: header
                                });
                                responseType == 'json' ? response = await Fet.json() : response = await Fet.text();
                                return callBack(response);
                            
                            } catch (e) {
                                console.error(e);
                            }
                        })
                        return self;
                    }else {
                        gmsmple_error_code_warn();
                        console.error(`you should add the button into a form not a ${el.tagName}!`);
                    }
                },
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
                },
            }
            return self;
        }
    } catch (error) {
        console.error(error)
    }
}


async function formRequest(form,url,responseType = 'json',callBack,header={}){
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
            });
            responseType == 'json'? response = await Fet.json() : response = await Fet.text();
            return callBack(response);
        } catch (e) {
            console.error(e);
        }
    })
}


// async function request(url,method = 'post',responseType = 'json',body=null,header={}){
//     try {
//         // let Fet = await fetch(url, {
//         //     method: method,
//         //     body: body,
//         //     headers: header
//         // });
//         // responseType == 'json'? response = await Fet.json() : response = await Fet.text();
//         // console.log(response);
//         // return response;


//         let Fet = await fetch(url, {
//             method: method,
//             body: body,
//             header: header
//         });
//         responseType == 'json' ? response = await Fet.json() : response = await Fet.text();
//         console.log(response);
//         return reponse


//     } catch (e) {
//         console.error(e);
//     }
// }
// Gm smpl functions
function num(string){
    return parseInt(string);
}
function getNum(string) {
    var numsStr = string.replace(/[^0-9]/g,'');
    return parseInt(numsStr);
}
function isEmpty(string) {
    return string == "" ? true : false;
}
function emailValidation(email) {
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}
function phoneValidation(phone) {
    return phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
}

// source: w3schools 
function setCookie(name, value, expiryDate) {
    const day = new Date();
    day.setTime(day.getTime() + (expiryDate * 24 * 60 * 60 * 1000));
    let expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(cookieName) {
    let name = cookieName + "=";
    let cookie = document.cookie.split(';');
    for (let i = 0; i < cookie.length; i++) {
        let c = cookie[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function removeCookie(name) {
    document.cookie = name + "=;expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
}

// gmsml code functions
function gmsmple_error_code_warn() {
    return console.warn('%cgmsmpl ' + '%csay that you have an ' + '%cerror ' + '%cin your code !', 'font-weight: bold;font-size:20px', '', 'color:red;font-weight: bold;font-size:20px', '');
}
