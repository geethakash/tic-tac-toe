import React, { Component } from 'react';

export default class Icon extends Component {
  render() {
    return (
      <div className="Square">
        {this.props.value === 'cross' ? (
          <div className="grid-item">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              viewBox="0 0 32 32"
              fill='#7c7c7c'
              // fill='#10e0c5'
            >
              <title>remove</title>
              <path d="M27.314 6.019l-1.333-1.333-9.98 9.981-9.981-9.981-1.333 1.333 9.981 9.981-9.981 9.98 1.333 1.333 9.981-9.98 9.98 9.98 1.333-1.333-9.98-9.98 9.98-9.981z"></path>
            </svg>
          </div>
        ) : this.props.value === 'circle' ? (
          <div className="grid-item">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              viewBox="0 0 32 32"
              fill='#a6d2d3'
            >
              <title>chevron-down-circle</title>
              <path d="M16 32c-8.822 0-16-7.178-16-16s7.178-16 16-16c8.822 0 16 7.178 16 16s-7.178 16-16 16zM16 2c-7.72 0-14 6.28-14 14s6.28 14 14 14c7.72 0 14-6.28 14-14s-6.28-14-14-14z"></path>
            </svg>
          </div>
        ) : (
          <div className="grid-item">
            <div style={{ height: '55px' }}></div>
          </div>
        )}
      </div>
    );
  }
}
