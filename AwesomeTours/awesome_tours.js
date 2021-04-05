'use strict'

{
  
    const init = () => $on($$("img"), "mouseenter", showText);
    
    const countryCode = e => e.target.dataset.countryCode
    const flagName = e => e.target.dataset.flagName
    const alt = e => e.target.alt
    const description = e => e.target.dataset.description

    const showText = e => 
        $("#info").innerHTML = 
        `<h3>
            <img src="${countryCode(e)}.png" alt="${flagName(e)}"/> <b>${alt(e)}</b>
        </h3>  
        <p>
            ${description(e)}
        </p>`


  
    init();
  }