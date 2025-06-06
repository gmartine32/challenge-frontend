import React from "react";
import { getSeverityColor } from "../../../utils/color";

const CveCard: React.FC<{
  id: string;
  description: string;
  severity: string;
  link?: string;
}> = ({ description, id, severity, link }) => {
  return (
    <div
      key={id+severity}
      className={`border rounded-xl shadow p-4 ${getSeverityColor(severity)}`}
    >
      <h3 className="font-bold text-lg mb-1">{id}</h3>
      <p className="text-sm mb-2">{description}</p>
      <div className={"text-xs font-medium italic mb-2 "}>
        Severity: <span className="font-bold ">{severity}</span>
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:underline text-sm"
        >
          More info
        </a>
      )}
    </div>
  );
};

export default CveCard;
