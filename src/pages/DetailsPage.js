import React, { Component } from "react";
import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImages from "parts/FeaturedImages";

import ItemDetails from "json/itemDetails.json";
import PageDetailDescription from "parts/PageDetailDescription";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={ItemDetails}
        ></PageDetailTitle>
        <FeaturedImages data={ItemDetails.imageUrls}></FeaturedImages>
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailDescription data={ItemDetails}></PageDetailDescription>
            </div>
            <div className="col-5">Booking form</div>
          </div>
        </section>
      </>
    );
  }
}
