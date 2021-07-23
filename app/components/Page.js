import React, { forwardRef, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router";
import PropTypes from "prop-types";
function track1(...args) {
  if (process.env.NODE_ENV !== "production") {
    return;
  }

  if (!window.gtag) {
    return;
  }

  window.gtag(...args);
}

function pageview(props) {
  track1("config", process.env.REACT_APP_GA_MEASUREMENT_ID, props);
}

function event(type, props) {
  track1("event", type, props);
}

let track = {
  pageview,
  event,
};

const Page = forwardRef(({ title, children, ...rest }, ref) => {
  const location = useLocation();

  const sendPageViewEvent = useCallback(() => {
    track.pageview({
      page_path: location.pathname,
    });
  }, [location]);

  useEffect(() => {
    sendPageViewEvent();
  }, [sendPageViewEvent]);

  return (
    <div ref={ref} {...rest}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
});

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Page;
