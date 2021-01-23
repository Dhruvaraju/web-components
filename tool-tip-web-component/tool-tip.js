class ToolTip extends HTMLElement {
  constructor() {
    super();
    //Initial declaration
    this._toolTipContainer;
    this._toolTipText = "Default Text";
  }

  connectedCallback() {
    if (this.hasAttribute("text")) {
      this._toolTipText = this.getAttribute("text");
    }

    const toolTipIcon = document.createElement("span");
    toolTipIcon.textContent = "(?)";
    toolTipIcon.addEventListener("mouseover", this._showToolTip.bind(this));
    toolTipIcon.addEventListener("mouseleave", this._hideToolTip.bind(this));
    toolTipIcon.style.position = "relative";
    this.appendChild(toolTipIcon);
  }

  _showToolTip() {
    this._toolTipContainer = document.createElement("div");
    this._toolTipContainer.textContent = this._toolTipText;
    this._toolTipContainer.style.backgroundColor = "orange";
    this._toolTipContainer.style.color = "white";
    this._toolTipContainer.style.position = "absolute";
    this.appendChild(this._toolTipContainer);
  }

  _hideToolTip() {
    this.removeChild(this._toolTipContainer);
  }
}

customElements.define("dc-tooltip", ToolTip);
