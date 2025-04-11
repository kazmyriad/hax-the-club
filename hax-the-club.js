/**
 * Copyright 2025 btopro
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `hax-the-club`
 * 
 * @demo index.html
 * @element hax-the-club
 */
export class HaxTheClub extends I18NMixin(LitElement) {

  static get tag() {
    return "hax-the-club";
  }

  constructor() {
    super();
    this.t = this.t || {};
    this.t = {
      ...this.t,
      haxTheClub: "HAX The Club",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/hax-the-club.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      screen: { type: Number },
      screens: { type: Array },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      css`
      :host {
        display: block;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <slot></slot>
</div>`;
  }
}

globalThis.customElements.define(HaxTheClub.tag, HaxTheClub);