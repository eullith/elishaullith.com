$('body').click((event) => {
    const pointer = $('.pointer');
    pointer.css('left', event.screenX + 'px')
    pointer.css('top', event.screenY + 'px')
})
