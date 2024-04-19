import { css, customElement, FASTElement, html } from '@microsoft/fast-element';

const template = html<MySecondElement>`<slot></slot>`;

@customElement({
  name: 'my-second-element',
  template,
  styles: css`
    :host {
      display: block;
      height: 36px;
      width: 80px;
      background: purple;
      color: white;
    }
  `,
})
export class MySecondElement extends FASTElement {}