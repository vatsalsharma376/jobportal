import React from "react";

import "./JobCard.css";
const JobCard = () => {
  return (
    <>
      <section className="job-post">
        {/* <div className="job-post-head">All Posted Jobs</div> */}
        <div class="job-post-mid">
          <div class="job-post-content">
            <div class="mid-content">
              <b>Job Title:</b>Sde
            </div>
            <div class="mid-content">
              <b>Job Description:</b> sdadkjcsdcsdcd
            </div>
            <div class="mid-content">
              <b>Stipend:</b>20k
            </div>
            <div class="mid-content">
              <b>Skills required:</b>html css
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobCard;
