import React, { useState, useEffect } from "react";

import "./Home.css";
import Header2 from "../Home/Header2";
import JobCard from "./JobCard";
const Home = (props) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <>
      <Header2 />
      <div class="home">
        <div class="jobposted">
          <div className="all-posted">
            <h2>All Posted Jobs</h2>
          </div>
          <JobCard />
          <JobCard />
          <JobCard />
        </div>

        <div class="jobform">
          <div className="full-form">
            <div class="job-form-head">
              <h2>Create a job post</h2>
            </div>
            <div class="job-form-mid">
              <form>
                <div class="form-field">
                  Job Title:
                  <br />
                  <input
                    class="form-input"
                    type="text"
                    placeholder="Enter the title of the job"
                  />
                </div>

                <div class="form-field">
                  Job Description:
                  <textarea
                    class="form-input"
                    name="Job-desc"
                    id="JD"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div class="form-field">
                  Stipend:{" "}
                  <input
                    class="form-input"
                    type="text"
                    placeholder="Enter the Stipend"
                  />
                </div>
                <div class="form-field">
                  Skills Required:{" "}
                  <input
                    class="form-input"
                    type="text"
                    placeholder="Enter the required Skills"
                  />
                </div>
                <button class="Form-Button">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
