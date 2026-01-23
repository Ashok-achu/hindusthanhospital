import { useParams } from "react-router-dom";
import { useEffect } from "react";
import departmentsData from "./departmentsData";
import DepartmentSidebar from "../components/DepartmentSidebar";

export default function DepartmentDetail() {
  const { slug } = useParams();
  const dept = departmentsData.find((d) => d.slug === slug);

  // Always scroll to top when department changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!dept) {
    return <div className="text-center py-0 text-xl font-bold">Department Not Found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-5 py-10 flex flex-col md:flex-row gap-10">

      {/* Sidebar */}
      <DepartmentSidebar />

      {/* Content */}
      <div className="w-full md:w-3/4">

        <img
          src={dept.banner || dept.image}
          alt={dept.name}
          className="w-full h-60 md:h-72 object-cover rounded-xl shadow"
        />

        <h1 className="text-3xl md:text-4xl font-bold mt-8 text-red-600">
          {dept.name}
        </h1>

        <p className="text-gray-700 mt-4 leading-7 text-lg">
          {dept.description}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-red-600">
          Services Offered
        </h2>

        <ul className="list-disc ml-6 text-gray-700 leading-8">
          {dept.services.map((service, i) => (
            <li key={i}>{service}</li>
          ))}
        </ul>

      </div>

    </div>
  );
}
