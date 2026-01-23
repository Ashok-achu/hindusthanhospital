import { NavLink } from "react-router-dom";
import { useState } from "react";
import departmentsData from "../departments/departmentsData";

export default function DepartmentSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full md:w-1/4">

      {/* ======================
          MOBILE DROPDOWN
      ====================== */}
      <div className="md:hidden mt-[180px]">
        <button
          onClick={() => setOpen(!open)}
          className="w-full bg-red-600 text-white px-4 py-3 rounded-lg font-semibold flex justify-between items-center"
        >
          <span>Our Specialities</span>
          <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
            ▼
          </span>
        </button>

        {open && (
          <ul className="mt-2 bg-white shadow-lg rounded-lg overflow-hidden">
            {departmentsData.map((dept) => (
              <li key={dept.slug}>
                <NavLink
                  to={`/departments/${dept.slug}`}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-gray-700 border-b last:border-none hover:bg-gray-100"
                >
                  {dept.name}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ======================
          DESKTOP SIDEBAR
      ====================== */}
      <div className="hidden md:block bg-white shadow-lg rounded-lg p-5 sticky top-[180px] z-20">
        <h2 className="text-2xl font-bold mb-4 text-red-600">
          Our Specialities
        </h2>

        <ul className="space-y-2">
          {departmentsData.map((dept) => (
            <li key={dept.slug}>
              <NavLink
                to={`/departments/${dept.slug}`}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-md font-medium transition ${
                    isActive
                      ? "bg-red-600 text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }`
                }
              >
                {dept.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
