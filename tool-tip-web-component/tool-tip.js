class ToolTip extends HTMLElement {
    constructor() {
        super();
        console.log('Initiating constructor');
    }
}

customElements.define('dc-tooltip', ToolTip);