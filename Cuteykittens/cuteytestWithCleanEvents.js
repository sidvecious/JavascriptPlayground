'use strict';
{   
    const rightColumn = $("#cutest");
    const init = () => $on($$("#candidates > li"), "click", installHandler);
    const installHandler = e => {
        const choosedOne = e.currentTarget;
        if (rightColumn.childElementCount >= 3) return;
        
        const cloned = choosedOne.cloneNode(true);
        $on(cloned, 'click', _ => {
            cloned.remove();
            $on(choosedOne, 'click', installHandler);
        });
        choosedOne.removeEventListener('click', installHandler);
        rightColumn.appendChild(cloned);
        console.log('full!!!')
    };
    init();
}