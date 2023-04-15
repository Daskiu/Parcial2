import { getDataCategories } from "../services/getDataCategories";
import { getDataJokes } from "../services/getDataJokes";
import { AttributeButton } from "../components/Button/Button";
import { AttributeJoke } from "../components/Joke/Joke";
import { ApiType } from "../types/apiType";
import "../components/export"

class Dashboard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    async connectedCallback(){
        const data = await getDataCategories();
        this.render(data);
    }

    render(data: any){
        if(this.shadowRoot) this.shadowRoot.innerHTML =``;

        data.forEach((e: any) =>{
            const button = this.ownerDocument.createElement('my-button');
            button.setAttribute(AttributeButton.name, e);
            this.shadowRoot?.appendChild(button);
            
            button.addEventListener('click', async () =>{
                const jokes = await getDataJokes()
                console.log(jokes);
            })

            const joke = this.ownerDocument.createElement("my-joke");
            joke.setAttribute(AttributeJoke.joke_text, e);
            this.shadowRoot?.appendChild(joke);
        })
    }
}

customElements.define('app-dashboard', Dashboard);