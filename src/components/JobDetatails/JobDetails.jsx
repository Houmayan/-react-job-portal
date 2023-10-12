import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../utitlity/localStorage";

const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job=> job.id == idInt);
    const {ogo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description,job_responsibility,educational_requirements,experiences} = job;
    
    console.log(id,jobs);
    
    const handleToaster = () =>{
        saveJobApplication(idInt);
        toast("Job Applied Succesfully");
    }
    return (
        <div>
            <h2>Job Details: {id}</h2>
            <div className="grid grid-cols-4 gap-2 ">
                <div className="grid col-span-3 border">
                    <h3 className=""><strong> Description:</strong>  {job_description}</h3>
                    <h3><strong>Job Responsibility: </strong>{job_responsibility}</h3>
                    <h3><strong>Educational Requirements</strong>: {educational_requirements}</h3>
                    <h3><strong>Experiences:</strong> {experiences}</h3>
                </div>
                <div className="grid col-span-1 border">
                    <h1>Comming Soon</h1>
                    <button onClick={handleToaster} className="btn btn-primary">Apply Job</button>
                    <ToastContainer></ToastContainer>
                </div>

            </div>

        </div>
    );
};

export default JobDetails;