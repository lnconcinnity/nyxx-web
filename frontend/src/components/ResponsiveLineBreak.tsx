import React from "react";

const DISPLAY = "block";

export interface ResponsiveLineBreakProps {
    sm?: boolean,
    md?: boolean,
    lg?: boolean,
}

const ResponsiveLineBreak: React.FC<ResponsiveLineBreakProps> = ({ sm, md, lg }) => {
    const classes = [
      sm || md || lg ? `d-none` : `d-${DISPLAY}`,
      sm ? `d-sm-${DISPLAY}` : "",
      md ? `d-md-${DISPLAY}` : "",
      lg ? `d-lg-${DISPLAY}` : "",
    ].join(" ").trim();
  
    return <br className={classes} />
  };
  
  export default ResponsiveLineBreak;