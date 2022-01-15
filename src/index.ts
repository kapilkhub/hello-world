import {Main} from "./app/Main";
import {defaultState} from "./defaultState";

const renderApp = ()=>{

    const rendered : string = new Main(defaultState).render();
    const element = document.getElementById("App")
    if(element){
        element.innerHTML = rendered;
    }

}

renderApp();