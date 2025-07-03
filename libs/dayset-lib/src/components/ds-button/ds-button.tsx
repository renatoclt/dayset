import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ds-button',
  styleUrl: 'ds-button.css',
  shadow: true,
})
export class DsButton {
  @Prop() label: string;
  @Prop() variant: 'primary' | 'secondary' = 'primary';
  @Prop() disabled: boolean = false;

  @Event() buttonClick: EventEmitter<void>;

  private handleClick = () => {
    if (!this.disabled) {
      this.buttonClick.emit();
    }
  };

  render() {
    return (
      <button
        class={`btn ${this.variant}`}
        onClick={this.handleClick}
        disabled={this.disabled}
      >
        {this.label}
      </button>
    );
  }
}
