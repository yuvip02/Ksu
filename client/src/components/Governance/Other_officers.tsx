import React from "react";
import { ExaminationDivision, FinanceAccountsDivision, OtherOfficersAdmin } from "./facultyData";
import FacultyCard from "./FacultyCard";

const Other_officers = () => {
  return (
    <div className="">
      <h1 className="text-xl font-bold text-center">Other Officers and Support Staff</h1>
      <div className="space-y-2 py-4">
        <h2 className="text-lg font-semibold text-center">
          Administrative Division
        </h2>
        {/*Admin Division*/}
        <div
          className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-4 lg:grid-cols-5
        place-items-center"
        >
          {OtherOfficersAdmin.map((item) => (
            <FacultyCard
              key={item.id}
              name={item.name}
              designation={item.designation}
              contact={item.contact}
              //image of the faculty member
              image="https://www.koimoi.com/wp-content/new-galleries/2020/04/alvaro-morte-reveals-of-taking-inspiration-from-superheroes-for-his-role-in-money-heist-001.jpg"
            />
          ))}
        </div>
      </div>

      {/*Examination Division*/}
      <div className="py-4 space-y-2">
        <h2 className="text-lg font-semibold text-center">
        Examination Division
        </h2>
        <div
          className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-3
        place-items-center"
        >
          {ExaminationDivision.map((item) => (
            <FacultyCard
              key={item.id}
              name={item.name}
              designation={item.designation}
              contact={item.contact}
              //image of the faculty member
              image="https://www.koimoi.com/wp-content/new-galleries/2020/04/alvaro-morte-reveals-of-taking-inspiration-from-superheroes-for-his-role-in-money-heist-001.jpg"
            />
          ))}
        </div>
      </div>

      {/*Finance and Accounts Division*/}
      <div className="py-4 space-y-2">
        <h2 className="text-lg font-semibold text-center">
        Finance and Accounts Division
        </h2>
        <div
          className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-4
        place-items-center"
        >
          {FinanceAccountsDivision.map((item) => (
            <FacultyCard
              key={item.id}
              name={item.name}
              designation={item.designation}
              contact={item.contact}
              //image of the faculty member
              image="https://www.koimoi.com/wp-content/new-galleries/2020/04/alvaro-morte-reveals-of-taking-inspiration-from-superheroes-for-his-role-in-money-heist-001.jpg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Other_officers;