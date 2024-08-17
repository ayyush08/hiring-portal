import React from "react";
import "../CSS/middleview.css";
import jobimg from "../jobs.png";

const roles = [
    { role: "Software Developer", jobs: 38 },
    { role: "Data Scientist", jobs: 24 },
    { role: "Project Manager", jobs: 17 },
    { role: "UI/UX Designer", jobs: 12 },
    { role: "Marketing Specialist", jobs: 29 },
    { role: "Sales Manager", jobs: 22 },
    { role: "Product Manager", jobs: 14 },
    { role: "HR Specialist", jobs: 19 },
    { role: "Business Analyst", jobs: 31 },
    { role: "Customer Support", jobs: 20 }
];

const MiddleView = () => {
    return (
        <div className="middleview">
            <div className="text-part">
                <h1>Discover Jobs Across Popular Roles</h1>
                <p>Select a role and we'll show you relevant jobs for it!</p>
                <div className="roles-carousel">
                    <div className="roles-list">
                        {roles.map((item, index) => (
                            <div className="role" key={index}>
                                <span>{item.role}</span> <span className="job-count">{item.jobs} jobs  </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="jobimg">
                <img src={jobimg} alt="jobs"  loading="lazy" />
            </div>
        </div>
    );
};

export default MiddleView;
