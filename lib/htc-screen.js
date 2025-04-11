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
    this.id = 0;
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
      }
    `];
  }

  // Lit reactive properties
  static get properties() {
    return {
      id: { type: Number }, // id of the screen
    };
  }

  render() {
    return html`
      <div class="wrapper">
        <slot></slot>
      </div>`;
  }
}

globalThis.customElements.define(HTCScreen.tag, HTCScreen);