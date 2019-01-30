import React, { Component } from "react";
import "./Contact.css";
import data from "./../../assets/content/Contact.json";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {
        ebc: {
          contacts: [
            {
              title: "Santa Clara EBC Team",
              list: [
                {
                  name: "Pam Evans",
                  title: "Sr. Director",
                  phone: "+1-408-471-0843 ",
                  email: "pevans@paloaltonetworks.com",
                  thumbnail: "Pamela-Evans.jpg"
                },
                {
                  name: "Susie Giacomelli",
                  title: "Sr. Briefing Manager",
                  phone: "+1-408-471-0843 ",
                  email: "sgiacomell@paloaltonetworks.com",
                  thumbnail: "Susie-Giacomelli.jpg"
                },
                {
                  name: "Peggy Martinez",
                  title: "Sr. Briefing Manager",
                  phone: "+1-669-207-2245",
                  email: "pmartinez@paloaltonetworks.com",
                  thumbnail: "Peggy-Martinez.png"
                },
                {
                  name: "Elisa Roiz",
                  title: "Sr. Briefing Manager",
                  phone: "+1-650-437-6185 ",
                  email: "eroiz@paloaltonetworks.com",
                  thumbnail: "Elisa-Roiz.jpg"
                },
                {
                  name: "Marita Caldecott",
                  title: "Sr. Briefing Manager",
                  phone: "+1-408-713-3005 ",
                  email: "mcaldecott@paloaltonetworks.com",
                  thumbnail: "Marita-Caldecott.jpg"
                },
                {
                  name: "Rachel Dickinson",
                  title: "Briefing Manager",
                  phone: "+1-925-708-5640",
                  email: "rdickinson@paloaltonetworks.com",
                  thumbnail: "Rachel-Dickinson.jpg"
                },
                {
                  name: "George Martinez",
                  title: "EBC Martinez",
                  phone: "+1-408-684-0788 ",
                  email: "gmartinez@paloaltonetworks.com",
                  thumbnail: "George-Martinez.jpg"
                }
              ]
            },
            {
              title: "Amsterdam CBC team",
              list: [
                {
                  name: "Elena Drenska",
                  title: "CBC Manager",
                  phone: "+31-20-564-1091",
                  email: "edrenska@paloaltonetworks.com",
                  thumbnail: "Elena-Drenska.jpg"
                },
                {
                  name: "Aino Leppaenen",
                  title: "CBC Coordinator",
                  phone: "+358 415445394",
                  email: "aleppaenen@paloaltonetworks.com",
                  thumbnail: "Aino-Leppaenen.jpg"
                },
                {
                  name: "Cheyenne Johannes",
                  title: "Hospitality Manager",
                  phone: "+31-20-564-1091",
                  email: "cjohanns@paloaltonetworks.com",
                  thumbnail: "Cheyenne-Johannes.jpg"
                }
              ]
            }
          ]
        },
        cbc: {
          contacts: [
            {
              title: "Amsterdam CBC team",
              list: [
                {
                  name: "Elena Drenska",
                  title: "CBC Manager",
                  phone: "+31-20-564-1091",
                  email: "edrenska@paloaltonetworks.com",
                  thumbnail: "Elena-Drenska.jpg"
                },
                {
                  name: "Aino Leppaenen",
                  title: "CBC Coordinator",
                  phone: "+31-20-564-9950",
                  email: "lalonsocan@paloaltonetworks.com",
                  thumbnail: "Aino-Leppaenen.jpg"
                },
                {
                  name: "Cheyenne Johannes",
                  title: "Hospitality Manager",
                  phone: "+31-20-564-1091",
                  email: "cjohanns@paloaltonetworks.com",
                  thumbnail: "Cheyenne-Johannes.jpg"
                }
              ]
            },
            {
              title: "Santa Clara EBC Team",
              list: [
                {
                  name: "Pam Evans",
                  title: "Sr. Director",
                  phone: "+1-408-471-0843 ",
                  email: "pevans@paloaltonetworks.com",
                  thumbnail: "Pamela-Evans.jpg"
                },
                {
                  name: "Susie Giacomelli",
                  title: "Sr. Briefing Manager",
                  phone: "+1-408-471-0843 ",
                  email: "sgiacomell@paloaltonetworks.com",
                  thumbnail: "Susie-Giacomelli.jpg"
                },
                {
                  name: "Peggy Martinez",
                  title: "Sr. Briefing Manager",
                  phone: "+1-669-207-2245",
                  email: "pmartinez@paloaltonetworks.com",
                  thumbnail: "Peggy-Martinez.png"
                },
                {
                  name: "Elisa Roiz",
                  title: "Sr. Briefing Manager",
                  phone: "+1-650-437-6185 ",
                  email: "eroiz@paloaltonetworks.com",
                  thumbnail: "Elisa-Roiz.jpg"
                },
                {
                  name: "Marita Caldecott",
                  title: "Sr. Briefing Manager",
                  phone: "+1-408-713-3005 ",
                  email: "mcaldecott@paloaltonetworks.com",
                  thumbnail: "Marita-Caldecott.jpg"
                },
                {
                  name: "Rachel Dickinson",
                  title: "Briefing Manager",
                  phone: "+1-925-708-5640",
                  email: "rdickinson@paloaltonetworks.com",
                  thumbnail: "Rachel-Dickinson.jpg"
                },
                {
                  name: "George Martinez",
                  title: "EBC Martinez",
                  phone: "+1-408-684-0788 ",
                  email: "gmartinez@paloaltonetworks.com",
                  thumbnail: "George-Martinez.jpg"
                }
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

  displayProfilePic = item => {
    if (item.thumbnail) {
      const picture = require("./../../assets/img/" + item.thumbnail);
      const profileStyle = {
        backgroundImage: `url(${picture})`,
        backgroundSize: "cover",
        backgroundPosition: "0% 0%"
      };
      return <div className="profile-picture" style={profileStyle} />;
    } else {
      return <div className="profile-picture" />;
    }
  };

  render() {
    let location = this.props.match.params.id || "ebc";
    const { content } = this.state;
    return (
      <div className="ebc-field-portal-Contact">
        <div>
          <div className="App-body">
            {content[location].contacts.map(item => {
              return (
                <div key={item.title} className="contact-content-container">
                  <div className="page-title-container">
                    <p className="page-title fancy">
                      <span>{item.title}</span>
                    </p>
                  </div>
                  <div className="list">
                    <ul>
                      {item.list.map((listItem, idx) => {
                        return (
                          <li key={idx} className="list-item">
                            {this.displayProfilePic(listItem)}
                            <div className="contact-data">
                              <span className="name">{listItem.name}</span>
                              <span className="address">{listItem.title}</span>
                              <span className="phone"> {listItem.phone}</span>
                              <span className="email">
                                <a href={"mailto:" + listItem.email}>
                                  {listItem.email}
                                </a>
                              </span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
