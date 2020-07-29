import React from "react";
import "./Info.css";

type InfoProps = { id: string, role?: string };

const Info: React.FC<InfoProps> = ({ id, role, children }) => {
  return <section id={id} role={role} className="info">{children}</section>;
};

export default Info;
