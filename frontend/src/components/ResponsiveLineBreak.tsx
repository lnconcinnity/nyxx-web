import React from "react";

const DISPLAY = "block";

export interface ResponsiveLineBreakProps {
    sm?: boolean,
    md?: boolean,
    lg?: boolean,
    xl?: boolean,
}

const ResponsiveLineBreak: React.FC<ResponsiveLineBreakProps> = ({ sm, md, lg, xl }) => {
    const classes = [
      sm || md || lg || xl ? `d-none` : `d-${DISPLAY}`,
      sm ? `d-sm-${DISPLAY}` : "",
      md ? `d-md-${DISPLAY}` : "",
      lg ? `d-lg-${DISPLAY}` : "",
      xl ? `d-xl-${DISPLAY}` : "",
    ].join(" ").trim();
  
    return <br className={classes} />
  };
  
  export default ResponsiveLineBreak;