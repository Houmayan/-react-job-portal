const getStoredApplication = () => {
  const storedJob = localStorage.getItem("job-applications");
  if (storedJob) {
    return JSON.parse(storedJob);
  }
  return [];
};

const saveJobApplication = (id) => {
  const storedJobs = getStoredApplication();
  const exists = storedJobs.find((job) => job === id);
  if (!exists) {
    storedJobs.push(id);
    localStorage.setItem("job-applications", JSON.stringify(storedJobs));
  }
};

export { getStoredApplication, saveJobApplication };
