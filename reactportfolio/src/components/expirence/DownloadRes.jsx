import React from "react";
import res from "../../images/Resume.pdf";

const DownloadRes = () => {
  return (
    <div className="downloadBtn">
      <a href={res} download className="btn btn-primary">
        Download CV
      </a>
    </div>
  );
};

export default DownloadRes;
