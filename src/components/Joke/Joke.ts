export enum AttributeJoke{
    "joke_text" = "joke_text",
}

export default class Joke extends HTMLElement{
    joke_text?: string;

    static get observedAttributes(){
        const attrs: Record <AttributeJoke, null> ={
            joke_text: null,
        }
        return Object.keys(attrs);
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML =`
        <section>
            <p>${this.joke_text}</p>
        </section>
        `;
    }
}

customElements.define('my-joke', Joke);