import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>At <strong>E-Commerce</strong>, we take your privacy seriously and are committed to protecting your personal information.</p>
          <p>We collect personal information from you when you [register, make a purchase,
            subscribe to our newsletter, etc.], and we use this information only for
            the purpose for which it was collected.</p>
          <p>We will never share your personal information with third parties
            without your consent, except as required by law or as necessary
            to complete a transaction you have requested.</p>
          <p>We use cookies and other tracking technologies to improve your experience
            on our website and to personalize the content and advertisements you see.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;