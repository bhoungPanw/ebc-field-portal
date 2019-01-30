import React, { Component } from "react";
import "./BriefingTopics.css";
import data from "./../../assets/content/BriefingTopics.json";

class BriefingTopics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: "Briefing Topics",
      content: {
        ebc: {
          downloadHref:
            "https://paloaltonetworks.app.box.com/file/343377150429",
          briefingTopics: [
            {
              category: "Corporate",
              topics: [
                "Voice of the Customer",
                "Palo Alto Networks Vision and Strategic Direction",
                "Palo Alto Networks CIO Perspective",
                "Palo Alto Networks CISO/InfoSecurity Perspective",
                "Palo Alto Networks Partner Programs",
                "Cyberthreat Trends",
                "Business Development",
                "Palo Alto Networks IT Infrastructure",
                "Third-Party Technical Partnerships (VMware, Ansible, Aruba, Splunk, etc.)"
              ]
            },
            {
              category: "Product/Technical",
              topics: [
                "Aperture",
                "App-ID",
                "Application Framework",
                "AutoFocus",
                "Cloud Security Vision & Strategy",
                "Competitive Analysis",
                "Credential Threat Prevention",
                "Data Center Segmentation",
                "GlobalProtect",
                "GlobalProtect cloud service",
                "Hardware Platforms ",
                "Logging Service",
                "Magnifier",
                "Mobile Security Vision & Strategy",
                "Networking Features Technical Overview",
                "Other",
                "PAN-OS ",
                "Panorama",
                "Platform Roadmap",
                "Proof of Concept Lab",
                "RedLock",
                "Security Operating Platform",
                "SSL Decryption",
                "Threat Prevention",
                "Traps advanced endpoint protection",
                "Unit 42 Threat Research",
                "URL Filtering",
                "User-ID ",
                "Public Cloud Security (AWS, Azure, GCS, etc.)",
                "Private Cloud Security (VMware/NSX, ACI, etc.)",
                "WildFire",
                "XDR",
                "Zero-day Threat Prevention",
                "Zero Trust"
              ]
            },
            {
              category: "Services",
              topics: [
                "Global Services & Support",
                "Customer Support",
                "Consulting Services",
                "Education",
                "Customer Success Program Overview",
                "Customer Support Case Review",
                "Prevention Posture Assessment"
              ]
            },
            {
              category: "Industry",
              topics: [
                "SCADA/ICS Security",
                "Wireless Provider Trends & Offerings",
                "Federal Government Trends & Offerings",
                "International Government Engagement",
                "Financial Services Trends & Offerings",
                "Healthcare Trends & Offerings",
                "Service Provider/Managed Security Services Provider ",
                "Palo Alto Networks Security Operations Center (SOC)",
                "Security Operations Center Best Practices (for security teams)"
              ]
            }
          ]
        },
        cbc: {
          downloadHref:
            "https://paloaltonetworks.box.com/s/ctnm774x8k6s7lnsukg8ibrzmbvcjiyt",
          briefingTopics: [
            {
              category: "Corporate",
              topics: [
                "Voice of the Customer",
                "Palo Alto Networks Vision and Strategic Direction",
                "Palo Alto Networks CIO Perspective",
                "Palo Alto Networks CISO/InfoSecurity Perspective",
                "Palo Alto Networks Partner Programs",
                "Cyberthreat Trends",
                "Business Development",
                "Palo Alto Networks IT Infrastructure",
                "Third-Party Technical Partnerships (VMware, Ansible, Aruba, Splunk, etc.)"
              ]
            },
            {
              category: "Product/Technical",
              topics: [
                "Aperture",
                "App-ID",
                "Application Framework",
                "AutoFocus",
                "Cloud Security Vision & Strategy",
                "Competitive Analysis",
                "Credential Threat Prevention",
                "Data Center Segmentation",
                "GlobalProtect",
                "GlobalProtect cloud service",
                "Hardware Platforms ",
                "Logging Service",
                "Magnifier",
                "Mobile Security Vision & Strategy",
                "Networking Features Technical Overview",
                "Other",
                "PAN-OS ",
                "Panorama",
                "Platform Roadmap",
                "Proof of Concept Lab",
                "RedLock",
                "Security Operating Platform",
                "SSL Decryption",
                "Threat Prevention",
                "Traps advanced endpoint protection",
                "Unit 42 Threat Research",
                "URL Filtering",
                "User-ID ",
                "Public Cloud Security (AWS, Azure, GCS, etc.)",
                "Private Cloud Security (VMware/NSX, ACI, etc.)",
                "WildFire",
                "XDR",
                "Zero-day Threat Prevention",
                "Zero Trust"
              ]
            },
            {
              category: "Services",
              topics: [
                "Global Services & Support",
                "Customer Support",
                "Consulting Services",
                "Education",
                "Customer Success Program Overview",
                "Customer Support Case Review",
                "Prevention Posture Assessment"
              ]
            },
            {
              category: "Industry",
              topics: [
                "SCADA/ICS Security",
                "Wireless Provider Trends & Offerings",
                "Federal Government Trends & Offerings",
                "International Government Engagement",
                "Financial Services Trends & Offerings",
                "Healthcare Trends & Offerings",
                "Service Provider/Managed Security Services Provider ",
                "Palo Alto Networks Security Operations Center (SOC)",
                "Security Operations Center Best Practices (for security teams)"
              ]
            }
          ]
        }
      }
    };
  }
  componentWillMount() {
    this.setState({ ...data });
  }
  render() {
    let location = this.props.match.params.id || "ebc";
    const { content, pageTitle } = this.state;
    return (
      <div
        className={
          location === "ebc"
            ? "ebc-field-portal-BriefingTopics"
            : "ebc-field-portal-BriefingTopics cbc-field-portal"
        }
      >
        <div>
          <div className="App-body">
            <div className="page-title-container">
              <p className="page-title fancy">
                <span>{pageTitle}</span>
              </p>
            </div>
            <section className="briefing-topics">
              {content[location].briefingTopics.map(c => {
                return (
                  <div key={c.topics} className="topics-container">
                    <h3 className="title">{c.category}</h3>
                    <ul className="topics">
                      {c.topics.map(topic => {
                        return <li key={topic}>{topic}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </section>
            <div className="save-copy-container">
              <span className="save-copy">
                Want to save a copy of the topics?
              </span>
              <a
                target="_blank"
                href={content[location].downloadHref}
                rel="noopener noreferrer"
              >
                <div className="btn-save">Download PDF</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BriefingTopics;
