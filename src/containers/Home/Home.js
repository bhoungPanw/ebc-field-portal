import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import data from "./../../assets/content/Home.json";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {
        ebc: {
          pageTitle: "Home",
          pageDescription:
            "As part of the Marketing organization, we work with Sales, Business Development and Investor Relations to plan and host briefings and customer meetings for external customer groups. We have two briefings centers: the Executive Briefing Center (EBC) at our headquarters in Santa Clara, CA, and the Customer Briefing Centre (CBC) located in Amsterdam. Both teams work closely together to ensure a quality experience, regardless of the center your customer chooses to visit.",
          whatWeDo: [
            "Grow and accelerate business",
            "Facilitate the discovery of new opportunities and expand footprint",
            "Build and strengthen long-term customer relationships",
            "Drive innovation leadership",
            "Deliver a differentiated customer experience",
            "Promote our position as the global cybersecurity leader"
          ],
          cards: [
            {
              title: "executive briefing",
              description:
                "Use this request to book briefings with customers and prospects. The request process is initiated in SFDC.",
              buttonText: "request",
              href:
                "https://paloaltonetworks.box.com/s/5qn55ghkdjyskxew7lhygbm4iace785w"
            },
            {
              title: "partner briefing",
              description:
                "Use this request to book briefings with partners. The request process is initiated in SFDC.",
              buttonText: "request",
              href:
                "https://paloaltonetworks.box.com/s/khi6ijmx1zxp5u2vpajnsg51vx1grzpo"
            },
            {
              title: "non-briefing event",
              description:
                "Use this request to book corporate meetings with attendees from external organizations, including industry and financial analysts, business development, and executive recruitment. The EBC does not host internal meetings. ",
              buttonText: "request",
              href:
                "https://paloaltonetworks.box.com/s/i4jckdnrenvb0rmi6zx1ftqspaicqxe8"
            }
          ],
          quickLinks: [
            {
              title: "POC",
              href:
                "https://loop.paloaltonetworks.com/community/sales/world-wide-se-team/poc"
            },
            {
              title: "Cyber Range",
              href:
                "https://loop.paloaltonetworks.com/community/marketing/cyber-range"
            },
            {
              title: "How to Facilitate Your Briefing",
              href:
                "https://vimeo.com/paloaltonetworks/review/222740670/1ab4416c89"
            },
            {
              title: "NDA",
              href:
                "https://paloaltonetworks.tap.thinksmart.com/prod/portal/showworkflow/showworkflowdetail/dfd213e1-95d9-4c6d-ad42-92232d7ff856"
            },
            {
              title: "Fast Facts About Rooms",
              href:
                "https://paloaltonetworks.box.com/s/shsk6rjhfcpeznfqrfng6rie4yi44llh"
            }
          ],
          virtualTour: "https://my.matterport.com/show/?m=oXAv4CorLLi&brand=0"
        },
        cbc: {
          pageTitle: "Home",
          pageDescription:
            "As part of the Marketing organization, we work with Sales, Business Development and Investor Relations to plan and host briefings and customer meetings for external customer groups. We have two briefings centers: the Executive Briefing Center (EBC) at our headquarters in Santa Clara, CA, and the Customer Briefing Centre (CBC) located in Amsterdam. Both teams work closely together to ensure a quality experience, regardless of the center your customer chooses to visit.",
          whatWeDo: [
            "Grow and accelerate business",
            "Facilitate the discovery of new opportunities and expand footprint",
            "Build and strengthen long-term customer relationships",
            "Drive innovation leadership",
            "Deliver a differentiated customer experience",
            "Promote our position as the global cybersecurity leader"
          ],
          cards: [
            {
              title: "executive briefing",
              description:
                "Use this request to book briefings with customers and prospects. The request process is initiated in SFDC.",
              buttonText: "request",
              href:
                "https://paloaltonetworks.box.com/s/5qn55ghkdjyskxew7lhygbm4iace785w"
            },
            {
              title: "partner briefing",
              description:
                "Use this request to book briefings with partners. The request process is initiated in SFDC.",
              buttonText: "request",
              href:
                "https://paloaltonetworks.box.com/s/khi6ijmx1zxp5u2vpajnsg51vx1grzpo"
            },
            {
              title: "non-briefing event",
              description:
                "Use this request to book corporate meetings with attendees from external organizations, including industry and financial analysts, business development, and executive recruitment. The EBC does not host internal meetings. ",
              buttonText: "request",
              href:
                "https://paloaltonetworks.box.com/s/i4jckdnrenvb0rmi6zx1ftqspaicqxe8"
            }
          ],
          quickLinks: [
            {
              title: "POC",
              href:
                "https://loop.paloaltonetworks.com/community/sales/world-wide-se-team/poc"
            },
            {
              title: "Cyber Range",
              href:
                "https://loop.paloaltonetworks.com/community/marketing/cyber-range"
            },
            {
              title: "How to Facilitate Your Briefing",
              href:
                "https://vimeo.com/paloaltonetworks/review/222740670/1ab4416c89"
            },
            {
              title: "NDA",
              href:
                "https://paloaltonetworks.tap.thinksmart.com/prod/portal/showworkflow/showworkflowdetail/dfd213e1-95d9-4c6d-ad42-92232d7ff856"
            },
            {
              title: "Fast Facts About Rooms",
              href:
                "https://paloaltonetworks.box.com/s/yffafjz4gbaim27pndopvppguho7kexv"
            }
          ],
          virtualTour: "https://my.matterport.com/show/?m=UGuCMYdumB9"
        }
      },
      showModal: false
    };
  }

  componentWillMount() {
    this.setState({ ...data });
  }

  openModal = card => {
    this.setState({ currentCard: card, showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  render() {
    let location = this.props.match.params.id || "ebc";
    let { content, showModal } = this.state;
    return (
      <div className="ebc-field-portal-Home">
        <div>
          <div className="App-body">
            <section id="executiveBriefing" className="cards-container">
              {content[location].cards.map(card => {
                return (
                  <div key={card.title} className="card-container">
                    <div className="card-header">
                      <div className="title">{card.title}</div>
                    </div>
                    <div className="card-body">
                      <div className="description">{card.description}</div>
                    </div>
                    <div className="btn-container">
                      <a
                        href={card.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="btn-request">{card.buttonText}</div>
                      </a>
                    </div>
                  </div>
                );
              })}
            </section>
            <section className="content-container briefing-topics">
              <div className="briefing-topics-container">
                <div className="title">Who we are</div>
                <span>{content[location].pageDescription}</span>
              </div>
            </section>
            <section className="content-container">
              <aside className="fast-facts">
                <span className="title">What we do</span>
                <ul>
                  {content[location].whatWeDo.map(fact => {
                    return (
                      <li key={fact} className="fact-item">
                        {fact}
                      </li>
                    );
                  })}
                </ul>
              </aside>
              <section className="ebc-virtual-tour">
                <span className="title">Ebc Virtual tour</span>
                <div className="virtual-tour">
                  <iframe
                    title="virtualtour"
                    src={content[location].virtualTour}
                  />
                  <button
                    className="btn btn-request"
                    onClick={this.handleShowModal}
                  >
                    View in full-screen mode
                  </button>
                </div>
              </section>
            </section>
            <section className="quicklinks-container">
              <p className="page-title fancy">
                <span>Quick Links</span>
              </p>
              <div className="links-container">
                {content[location].quickLinks.map(link => {
                  return (
                    <a
                      key={link.href}
                      target="_blank"
                      href={link.href}
                      rel="noopener noreferrer"
                    >
                      <div className="quick-link">{link.title}</div>
                    </a>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
        <Modal show={showModal} bsClass="modal" onHide={this.handleCloseModal}>
          <Modal.Body>
            <iframe title="virtualtour" src={content[location].virtualTour} />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Home;
