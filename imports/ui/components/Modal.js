import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalContainer extends Component {

  state = {
    modal: false
  }

  componentDidUpdate (prevProps, prevState, snapshot) {

    if (prevProps === this.props) {
      return;
    }

    this.setState({modal: this.props.isOpen})

    // No need to update on state change
    if (prevState !== this.state) {
      return;
    }
  }

  apply () {
    this.setState({modal: false});
    this.props.apply();
  }

  cancel () {
    this.setState({modal: false});
  }

  render () {

    const {
      buttonLabel,
      title,
      children,
      bodyHeight,
      className,
    } = this.props;

    return (
      <Modal isOpen={this.state.modal} toggle={this.cancel.bind(this)} className={className}>
        <ModalHeader toggle={this.cancel.bind(this)}>{title}</ModalHeader>
        <ModalBody style={{height: bodyHeight}}>
          {children}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.apply.bind(this)}>{buttonLabel}</Button>{' '}
          <Button color="secondary" onClick={this.cancel.bind(this)}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );

  }
}

export default ModalContainer;