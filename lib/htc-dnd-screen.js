/**
 * Copyright 2025 btopro
 * @license Apache-2.0, see LICENSE for full text.
 */
import { html, css } from "lit";
import { HTCScreen } from "./htc-screen.js";
/**
 * `example-htc-screen`
 * This provides a 'screen' as far as sizing and some base requirements discussed in meeting
 * 
 * @demo index.html
 * @element htc-screen
 */
export class HTCDndScreen extends HTCScreen {

  static get tag() {
    return "htc-dnd-screen";
  }

  constructor() {
    super();
    this.title = null; 
  }

  static get properties() 
  {
    return {
      title: { type: String }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host
      {
        background-color: #d5c293;
      }

      .wrapper
      {
      }

      .dice{

      }

      
    `];
  }

  render(){
    return html`
    <div class="wrapper">
      <div class="dice">
        
      </div>  
    <slot></slot>
    </div>
    `;
  }

}

globalThis.customElements.define(HTCDndScreen.tag, HTCDndScreen);