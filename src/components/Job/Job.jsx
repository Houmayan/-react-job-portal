import { CiLocationArrow1 } from "react-icons/ci";
import { FcMoneyTransfer } from "react-icons/fc";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {id, logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description,job_responsibility,educational_requirements,experiences } = job;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">

      <figure>
        <img src={logo} alt="Shoes" />
      </figure>

      <div className="card-body">

        <h2 className="card-title">{job_title}</h2>
        <p className="text-left text-2xl mb-2">{company_name}</p>

        <div className="flex justify-start">
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4">{job_type}</button>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4">{remote_or_onsite}</button>
        </div>

        <div className="flex gap-4">
            <h2 className="flex gap-3 pt-2 pb-2">
        <CiLocationArrow1 className="text-2xl"></CiLocationArrow1>
            {location}
            </h2>

            <h2 className="flex gap-3 pt-2 pb-2"><FcMoneyTransfer className="text-2xl"></FcMoneyTransfer> {salary}</h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
          <button className="btn btn-primary">View Details</button>

          </Link>
        </div>

      </div>
    </div>
  );
};

export default Job;
