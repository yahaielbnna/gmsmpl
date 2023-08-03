// console.log($('h1').element());
// $('h1').html('I have edit it from the script file!')
// $('h1').html(`
//     <h1>hello there</h1>
//     <h5>hello there</h5>
// `)
// $('h1').insert('p').text('I have made this element from the script file');
// console.log($('h1').insert('p').text('Get the parent of this new element').parent().element());
// console.log($('h1').child('h5').element());
// console.log($('h1').child('h5').remove().element());
// $('h1').event('click', _ => {
//     console.log("Wow! it's work");
// });
// $('h1').addAttr('data-test', 'we added this attribute from the script file')
// console.log($('h1').getAttr('data-test'));
// console.log($('h1').removeAttr('data-test'));
// $('h1').addClass('7mra')
// $('h1').toggleClass('sfra')
// $('h1').setId('sfra')
// $('h1').removeId()
// console.log($('body').getCssStyle('background'));
console.log($('h1'));
console.log($('h1').element());

$('h1').event('click', _ => {

    $('.container')
        .position('relative')
            .insert('div')
                .position('absolute')
                .width('50%')
                .height('50%')
                .bg('rgb(255 255 255 / 100%)')
                .radius(15)
                .shadow('0 5px 7px #cccccc7a')
                .display('flex')
                .alignItems('center')
                .justify('center')
                .padding('40px')
                .setId('pop-form')
                // .opacity(.5)
                .insert('p')
                .text('X')
                .position('absolute')
                .top('0')
                .left('20px')
                .cursor('pointer')
                .fontWeight('900')
                .color('red')
                .event('click', _ => {
                    $('.container div#pop-form').remove();
                })
                .parent()
                .insert('form')
                    .setId('requstForm')
                    .width('100%')

                    .insert('h2')
                    .text('test form')
                    .parent()

                    .insert('input')
                    .addAttr('type','text')
                    .addAttr('name','name')
                    .addAttr('placeholder','Type your name here')
                    .addClass('input')
                    .parent()

                    .insert('input')
                    .addAttr('type','text')
                    .addAttr('name','phone')
                    .addAttr('placeholder','Type your phone number here')
                    .addClass('input')
                    .parent()

                    .insert('button')
                    .text('Click me !')
                    .addClass('blue-btn');

    // formRequst('.container form#requstForm','test/url')
    // formRequst($('.container form#requstForm'),'test/url')
    // $('.container div#pop-form').remove();
});
// requst('https://dummyjson.com/products/1', 'GET', 'json').then(Response=> {
//     console.log(Response);
// });

console.log(Num('712'));