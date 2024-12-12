import React from "react";

export interface ResponsiveParagraphProps {
    text: string,
    sm?: boolean,
    md?: boolean,
    lg?: boolean,
    className?: string,
    display?: string,
}

const ResponsiveParagraph: React.FC<ResponsiveParagraphProps> = ({ text, sm, md, lg, className, display="block" }) => {
    const classes = [
        sm || md || lg ? `d-none` : `d-${display}`,
        sm ? `d-sm-${display}` : "",
        md ? `d-md-${display}` : "",
        lg ? `d-lg-${display}` : "",
        className ? className : ""
    ].join(" ").trim();
  
    return <p className={classes}>{text}</p>;
};
  
export default ResponsiveParagraph;