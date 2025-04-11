import { html, fixture, expect } from '@open-wc/testing';
import "../hax-the-club.js";

describe("HaxTheClub test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <hax-the-club></hax-the-club>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
