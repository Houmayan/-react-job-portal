import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [jobLength,setJobLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h2 className="text-6xl">Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid grid-cols-2 gap-24">

          {jobs.slice(0,jobLength).map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}

        </div>
        <div className={jobLength === jobs.length ? 'hidden':'display'}>
          <button onClick={()=>setJobLength(jobs.length)} className="btn btn-primary">Show All Jobs</button>
         
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
