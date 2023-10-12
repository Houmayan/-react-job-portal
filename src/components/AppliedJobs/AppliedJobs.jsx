import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../utitlity/localStorage";
import { useEffect, useState } from "react";

const AppliedJobs = () => {

    const jobs = useLoaderData();
    const [jobsApplied, setJobsApplied] = useState([]);
    const [filterJobs, setFilterJobs] = useState([]);

    const handleFilter = (filter)=>{
        if(filter === 'all'){
            setFilterJobs(jobsApplied);
        }
        else if(filter === 'remote')
        {
            const remoteJobs = jobsApplied.filter(job => job.remote_or_onsite ==="Remote");
            setFilterJobs(remoteJobs);
            console.log(filterJobs);
        }
        else if( filter == 'onsite'){
            const onsiteJob = jobsApplied.filter(job => job.remote_or_onsite == 'Onsite')
            setFilterJobs(onsiteJob);
        }

    }
    useEffect(()=>{
        const storedJobsId = getStoredApplication();
        if(jobs.length>0){
            const appliedJobs = jobs.filter(job=> storedJobsId.includes(job.id))
            // console.log(appliedJobs);
            setJobsApplied(appliedJobs);
            setFilterJobs(appliedJobs);
        }
    },[jobs])
    
    return (
        <div>
            <h1>Applied Jobs: {jobsApplied.length}</h1>
            <details className="dropdown mb-32">
  <summary className="m-1 btn">open or close</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li onClick={()=>handleFilter('all')}><a>all</a></li>
    <li onClick={()=>handleFilter('onsite')}><a>onsite</a></li>
    <li onClick={()=>handleFilter('remote')}><a>remote</a></li>
  </ul>
</details>
            <ul>
                {
                    filterJobs.map(job => <li key={job.id}>{job.job_title}{job.company_name} : {job.remote_or_onsite}</li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;