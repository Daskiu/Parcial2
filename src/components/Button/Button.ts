export enum AttributeButton{
    "name" = "name",
}

export default class Button extends HTMLElement{
    name?: string;

    static get observedAttributes(){
        const attrs: Record <AttributeButton, null> ={
            name: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributeButton,
        _: unknown,
        newValue: string
        ){
            switch (propName) {
                default:
                    this[propName] = newValue;
                    break;
            }
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML =``;

        const button = this.ownerDocument.createElement('button');
        button.innerText = `${this.name}`
        this.shadowRoot?.appendChild(button);
    }
}

customElements.define('my-button', Button);