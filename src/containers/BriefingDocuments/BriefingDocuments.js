import React, { Component } from "react";
import "./BriefingDocuments.css";

import ModalComponent from "./../../components/Modal/modal";
class BriefingDocuments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: "Briefing Documents",
      content: {
        ebc: {
          quickLinks: [
            {
              title: "HQ EBC Brochure",
              href:
                "https://paloaltonetworks.box.com/s/crzs4ijvks7fjdjgpraz9if1ggd8scob"
            },
            {
              title: "Partner Flyer",
              href:
                "https://paloaltonetworks.box.com/s/64umj3yp4gt0md76c0lkx80a9e8qr9ya"
            },
            {
              title: "Newsletters",
              href:
                "https://paloaltonetworks.app.box.com/s/hpjnvycmyvjgntli9bcdg9u7ndbn980j"
            },
            {
              title: "EBC Process",
              href:
                "https://paloaltonetworks.box.com/s/81oejeccfzw23f7icc09r5ox4z2iyst7"
            },
            {
              title: "Sample Agendas",
              href:
                "https://paloaltonetworks.app.box.com/s/i391aea27at35rj1pxlcdokakizf0a0k"
            },
            {
              title: "Pre-Brief Call Checklist",
              href:
                "https://paloaltonetworks.box.com/s/qcxho1189pn51jtixp48jl6qp1nherax"
            },
            {
              title: "Executive Request Summary Form",
              href: "https://paloaltonetworks.app.box.com/file/344492333528"
            },
            {
              title: "Customer Invite Outlook Template (Mac)",
              href:
                "https://paloaltonetworks.box.com/s/ecgdivnrfylgdofkz40d78a40a9ee8n2"
            },
            {
              title: "Customer Invite Outlook Template (Windows)",
              href:
                "https://paloaltonetworks.box.com/s/o5pi9lulvw65bf8kznflnqbz4s0ufjbw"
            }
          ]
        },
        cbc: {
          quickLinks: [
            {
              title: "Request & Planning Process",
              href:
                "https://paloaltonetworks.box.com/s/ekf6d62n4tzj8a8y3fg313th1zx2jkea"
            },
            {
              title: "Sample Agendas",
              href:
                "https://paloaltonetworks.app.box.com/s/i391aea27at35rj1pxlcdokakizf0a0k"
            },
            {
              title: "Pre-brief call checklist",
              href:
                "https://paloaltonetworks.box.com/s/qcxho1189pn51jtixp48jl6qp1nherax"
            },
            {
              title: "Request Guidelines",
              href:
                "https://paloaltonetworks.box.com/s/30od6pbelsz0o951kyuej2pi5d6ermmb"
            },
            {
              title: "Executive Briefing Document",
              href:
                "https://paloaltonetworks.box.com/s/njnqdv6f9jbqhhx8ch3qdzffojtk7l45"
            },
            {
              title: "Customer Invite Outlook Template (Mac)",
              href:
                "https://paloaltonetworks.box.com/s/doaap68ojshyop7oer7dh0bfs1povihm"
            },
            {
              title: "CBC Brochure",
              href:
                "https://paloaltonetworks.box.com/s/v5bnwtp5gjo2ie54as53grnf7s3r5aqf"
            },

            {
              title: "Partner Flyer",
              href:
                "https://paloaltonetworks.box.com/s/4x5778om551puo51a5touy9sagkz33z6"
            },
            {
              title: "Customer Invite Outlook Template (Windows)",
              href:
                "https://paloaltonetworks.box.com/s/o5pi9lulvw65bf8kznflnqbz4s0ufjbw"
            }
          ]
        }
      },
      currentSubform: null,
      showModal: false
    };
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
