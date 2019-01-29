import React, { Component } from "react";
import "./BriefingDocuments.css";
import data from "./../../assets/content/BriefingDocuments.json";

import ModalComponent from "./../../components/Modal/modal";
class BriefingDocuments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSubform: null,
      showModal: false
    };
  }

  componentWillMount() {
    this.setState({ ...data });
  }

  openModal = link => {
    this.setState({ currentSubform: link, showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    let location = this.props.match.params.id || "ebc";
    let {
      pageTitle,
      content,
      expandFirstRow,
      currentSubform,
      showModal
    } = this.state;
    return (
      <div className="ebc-field-portal-BriefingDocuments">
        <div>
          <div className="App-body">
            <div className="page-title-container">
              <p className="page-title fancy">
                <span>{pageTitle}</span>
              </p>
            </div>
            <section className="quicklinks-container">
              <div
                id="briefingDocuments"
                className={
                  expandFirstRow
                    ? "links-container expanded"
                    : "links-container"
                }
              >
                {content[location].quickLinks.map(link => {
                  if (link.href) {
                    return (
                      <a target="_blank" key={link.title} href={link.href}>
                        <div className="quick-link">{link.title}</div>
                      </a>
                    );
                  } else {
                    return (
                      <a
                        key={link.title}
                        onClick={() => {
                          this.openModal(link);
                        }}
                        target="_blank"
                      >
                        <div className="quick-link">{link.title}</div>
                      </a>
                    );
                  }
                })}
              </div>
            </section>
          </div>
        </div>
        <ModalComponent
          data={currentSubform}
          showModal={showModal}
          hideModal={this.hideModal}
        />
      </div>
    );
  }
}

export default BriefingDocuments;
