import React, { Component } from "react";
import "./Concierge.css";

class Concierge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {
        ebc: {
          recs: [
            {
              title: "recommended hotels",
              list: [
                {
                  title: "Embassy Suites by Hilton Santa Clara Silicon Valley",
                  address: "2885 Lakeside Dr. Santa Clara, CA 95054",
                  phone: "(408) 496-6400"
                },
                {
                  title: "The Plaza Suites Hotel Silicon Valley",
                  address: "3100 Lakeside Dr. Santa Clara, CA 95054 ",
                  phone: "(408) 748-9800"
                },
                {
                  title: "Santa Clara Marriott",
                  address: "2700 Mission College Blvd. Santa Clara, CA 95054",
                  phone: "(408) 988-1500"
                },
                {
                  title: "Hilton Santa Clara",
                  address: "4949 Great America Pkwy. Santa Clara, CA 95054",
                  phone: "(408) 330-0001"
                },
                {
                  title: "Embassy Suites by Hilton Santa Clara Silicon Valley",
                  address: "2885 Lakeside Dr. Santa Clara, CA 95054",
                  phone: "(408) 496-6400"
                },
                {
                  title: "Hotel Valencia Santana Row ",
                  address: "355 Santana Row San Jose, CA 95128",
                  phone: "(408) 551-0010"
                }
              ]
            },
            {
              title: "recommended restaurants",
              list: [
                {
                  title: "Birk’s Restaurant",
                  address: "3955 Freedom Circle Santa Clara, CA 95054",
                  phone: "(408) 980-6400"
                },
                {
                  title: "Fleming’s Prime Steakhouse & Wine Bar",
                  address: "2762 Augustine Dr. #110 Santa Clara, CA 95054",
                  phone: "(408) 346-4557"
                },
                {
                  title: "Il Fornaio",
                  address: "2752 Augustine Dr. #120 Santa Clara, CA 95054",
                  phone: "(408) 217-8844"
                },
                {
                  title: "Bourbon Steak Levi’s® Stadium",
                  address: "4900 Marie P. DeBartolo Way Santa Clara, CA 95054",
                  phone: "(408) 217-2490"
                },
                {
                  title: "Nemea Greek Taverna",
                  address: "96 S. First St. San Jose, CA 95113",
                  phone: "(408) 279-4225"
                }
              ]
            },
            {
              title: "recommended transportation",
              list: [
                {
                  title: "Skylark Limousine",
                  address: "(408) 980-6400"
                }
              ],
              downloadHref: {
                label: "Want to save a copy of the Concierge list?",
                href:
                  "https://paloaltonetworks.box.com/s/7pyekhymrybqq5s94qiy56e2oqv948df"
              }
            }
          ]
        },
        cbc: {
          recs: [
            {
              title: "recommended hotels",
              list: [
                {
                  title: "Jaz Amsterdam",
                  address:
                    "De Passage 90, 1101 AX Amsterdam-Zuidoost, TheNetherlands",
                  phone: "+31 (0)20 2105800"
                },
                {
                  title: "Holiday Inn Amsterdam – Arena Towers",
                  address:
                    "Hoogoorddeef 66a, 1101 BE Amsterdam, The Netherlands",
                  phone: "+31 (0)20 7979198"
                },
                {
                  title: "Courtyard Marriott Amsterdam Arena Atlas",
                  address:
                    "Hoogoorddreef 1, 1101 BA Amsterdam, The Netherlands",
                  phone: "+31(0)20 241500"
                },
                {
                  title: "Hampton by Hilton Amsterdam / ArenaBoulevard",
                  address: "Hoekenrode 1,Amsterdam,1102 BR,Netherlands",
                  phone: "+31(0)208203200"
                }
              ],
              downloadHref: {
                label: "Want to save a copy of the hotels list?",
                href:
                  "https://paloaltonetworks.app.box.com/s/74c03fr370z73weljalqt07ukdbvj6ql"
              }
            },
            {
              title: "recommended restaurants",
              list: [
                {
                  title: "Loetje – Dutch cuisine",
                  address: "Johannes Vermeerstraat 52, 1071 DT Amsterdam",
                  phone: "+31 (0)206628173"
                },
                {
                  title: "Mr Porter – Modern steakhouse and a chic lounge",
                  address:
                    "Hoogoorddeef 66a, 1101 BE Amsterdam, The Netherlands",
                  phone: "+31 (0)208113399"
                },
                {
                  title: "Café Caron – French cuisine in a cozy atmosphere",
                  address: "Frans Halsstraat 28 H, Amsterdam",
                  phone: "+31 (0)20 6758668"
                },
                {
                  title:
                    "D' Vijff Vlieghen – Mediterranean kitchen in a beautiful old Dutch monument building",
                  address: "Spuistraat 294-302, 1012 VX Amsterdam",
                  phone: "+31 (0)205304060"
                }
              ],
              downloadHref: {
                label:
                  "For more options on restaurants, bars and city entertainment, please see the file.",
                href:
                  "https://paloaltonetworks.box.com/s/e7k3y2i3enwy8me90kfdss508m5zci4j"
              }
            },
            {
              title: "transportation services",
              list: [
                {
                  title: "Taxi Marcus",
                  address: "available 24/7, accepts cash (EUR) or credit card",
                  phone: "+31(0)20-6595565"
                },
                {
                  title: "VIP Coach (for groups of 10 and above) ",
                  address: "+31(0)20-6599808"
                },
                {
                  title: "Executive Luxury Limousine Transport",
                  address: "+31(0)20-6599808"
                }
              ]
            }
          ]
        }
      }
    };
  }

  renderCatering = v => {
    if (v === "ebc") {
      return (
        <span>
          Breakfast, lunch, coffee service, etc. will be ordered for your
          briefing when the schedule includes meal times. Catering will be
          charged to your cost center number. Our catering team accommodates
          special diets, i.e. vegetarian, vegan, halal and individuals with
          dietary restriction. Please check with your customer in advance to see
          if they have any dietary requirements and let your briefing manager
          know so that he/she can order appropriately. Your briefing manager can
          answer any catering related questions you might have.
          <br />
          <br />
          <br />
          <strong>Things to keep in mind</strong>
          <br /> - For briefings that begin at 9am or later, we do not recommend
          a hot breakfast as most customers have eaten prior to their arrival.
        </span>
      );
    } else if (v === "cbc") {
      return (
        <span>
          CBC Amsterdam provides catering services for breakfast, lunch and
          coffee breaks. The catering services are organized through a catering
          vendor located in the EMEA office building. In order to ensure high
          quality service our Hospitality Manager needs to know the following
          information 3-4 days prior to the briefing:
          <br />- Number of people expected <br />- Special requests i.e. vegan,
          vegetarian, halal diets, and dietary restrictions <br />
          <br />
          Catering will be charged to your cost center number.
          <br />
          <br />
          <br />
          <strong>Restaurant & Dinner booking</strong>
          <br />
          CBC Amsterdam can make a dinner reservation for different sized
          groups. Please reach out to our Hospitality Manager and let her know
          your request. See a list of recommended restaurants{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://paloaltonetworks.box.com/s/e7k3y2i3enwy8me90kfdss508m5zci4j"
          >
            here
          </a>
        </span>
      );
    }
  };

  renderDownloads = download => {
    if (download) {
      return (
        <div className="save-copy-container">
          <span className="save-copy">{download.label}</span>
          <a target="_blank" href={download.href} rel="noopener noreferrer">
            <div className="btn-save">Download PDF</div>
          </a>
        </div>
      );
    }
  };

  render() {
    let location = this.props.match.params.id || "ebc";
    let { content } = this.state;
    return (
      <div className="ebc-field-portal-Concierge">
        <div>
          <div className="App-body">
            {content[location].recs.map(item => {
              return (
                <div key={item.title} className="concierge-content-container">
                  <div className="page-title-container">
                    <p className="page-title fancy">
                      <span>{item.title}</span>
                    </p>
                  </div>
                  <div className="list concierge">
                    <ul>
                      {item.list.map(listItem => {
                        return (
                          <li className="list-item">
                            <span className="name">
                              {listItem.title}
                              <br />
                            </span>
                            <span className="address">
                              {listItem.address}
                              <br />
                              {listItem.phone}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  {this.renderDownloads(item.downloadHref)}
                </div>
              );
            })}

            <div className="catering-container">
              <div className="page-title-container">
                <p className="page-title fancy">
                  <span>Catering</span>
                </p>
              </div>
              {this.renderCatering(location)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Concierge;
