/**
 * Copyright 2025 btopro
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";

/**
 * `htc-screen`
 * This provides a 'screen' as far as sizing and some base requirements discussed in meeting
 * 
 * @demo index.html
 * @element htc-screen
 */
export class HTCScreen extends LitElement {

  static get tag() {
    return "htc-screen";
  }
  constructor() {
    super();
    this.sid = null; // id of the screen needs to be set in dom
    this.title = null; // used to present as to where it's going next
    this.isScreen = true; // helps w/ selection
    this.active = false;
  }

  static get styles() {
    return [css`
      :host {
        display: flex;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        position: relative;
        align-items: center;
        justify-content: center;
        background-color: var(--htc-screen-background-color, black);
      }
    `];
  }

  // Lit reactive properties
  static get properties() {
    return {
      sid: { type: Number }, // id of the screen
      title: { type: String }, // title of the screen
      isScreen: { type: Boolean, reflect: true, attribute: "is-screen" }, // is this a screen
      active: { type: Boolean, reflect: true }, // is this screen active
    };
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.dispatchEvent(
      new CustomEvent("screen-ready", {
        bubbles: true,
        detail: {
          screen: this,
        },
      })
    );
  }

  render() {
    return html`
      <div class="wrapper">
        <slot></slot>
      </div>`;
  }
}

globalThis.customElements.define(HTCScreen.tag, HTCScreen);