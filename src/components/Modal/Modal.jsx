import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css'; // Make sure to create a corresponding CSS module

export default class Modal extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    tags: PropTypes.string,
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    console.log(e);
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { image, tags } = this.props;
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src={image} alt={tags} />
        </div>
      </div>
    );
  }
}