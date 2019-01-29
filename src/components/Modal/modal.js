import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class ModalComponent extends Component {
  render() {
    let { showModal, hideModal, data } = this.props;
    if (data && data.subforms) {
      return (
        <Modal show={showModal} onHide={hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>{data.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="subforms">
              {data.subforms.map(form => {
                return (
                  <a target="_blank" key={form.title} href={form.href}>
                    <div className="subform">{form.title}</div>
                  </a>
                );
              })}
            </div>
          </Modal.Body>
        </Modal>
      );
    } else {
      return null;
    }
  }
}

export default ModalComponent;
