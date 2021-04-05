'use strict';

{
    
const rightColumn = $("#cutest");    
const init = () => $on($$("#candidates > li"), "click", e => {

    const choosedOne = e.currentTarget
    const top3 = $$("#cutest > li")
    
    if (rightColumn.childElementCount < 3 && top3.every(el => 
        el.textContent != choosedOne.textContent)) {

            const cloned = choosedOne.cloneNode(true);

            $on(cloned, 'click', e => e.currentTarget.remove());
            
            rightColumn.appendChild(cloned);
        }
    
    });

init();

}