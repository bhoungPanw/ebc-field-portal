import React, { Component } from "react";
import "./Concierge.css";
import data from "./../../assets/content/Concierge.json";

class Concierge extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.setState({ ...data });
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
            {content[location].recs.map((item, idx) => {
              return (
                <div key={idx} className="concierge-content-container">
                  <div className="page-title-container">
                    <p className="page-title fancy">
                      <span>{item.title}</span>
                    </p>
                  </div>
                  <div className="list concierge">
                    <ul>
                      {item.list.map((listItem, idx) => {
                        return (
                          <li key={idx} className="list-item">
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
