import { css, customElement, FASTElement, html } from '@microsoft/fast-element';

const template = html<MyElement>`<slot></slot>`;

@customElement({
  name: 'my-element',
  template,
  styles: css`
    :host {
      display: block;
      height: 32px;
      width: 100px;
      background: red;
      color: white;
    }
  `,
})
export class MyElement extends FASTElement {}