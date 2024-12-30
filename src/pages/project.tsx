
import React from "react";

// Reusable Project Card Component
type ProjectCardProps = {
  title: string;
  members: { image: string }[];
};

const ProjectCard = ({ title, members }: ProjectCardProps) => {
  return (

    <div className="bg-green-50  p-4 w-[100px] left-[50px] flex-shrink-0">
    
      {/* Title */}
      <h3 className="text-md font-semibold text-green-300 mb-4">{title}</h3>
      {/* Members */}
      <div className="flex items-center space-x-2">
        <div className="flex -space-x-2">
          {members.map((member, index) => (
            <img
              key={index}
              src={member.image}
              alt="Member"
              className="w-6 h-6 rounded-full border-2 border-white"
            />
          ))}
        </div>
        <div className="w-12 h-12 flex items-center justify-center bg-green-200 rounded-full mb-2">
            <span className="text-2xl font-bold text-white">+</span>
           </div>
      </div>
    </div>
  );
};

// Scrollable Projects Component
export default function Projects() {
  const projects = [
    {
      title: "Analytics Design",
      icon: <span>📈</span>, // Replace with proper SVGs if needed
      members: [
        { image: "https://github.com/david.png" },
        { image: "https://github.com/charlie.png" },
      ],
    },
    {
      title: "Design System",
      icon: <span>🛠️</span>,
      members: [
        { image: "https://github.com/David.png" },
        { image: "https://github.com/Robert.png" },
      ],
    },
    {
      title: "Virtual Community",
      icon: <span>🌐</span>,
      members: [
        { image: "https://github.com/Charlie.png" },
      ],
    },
    {
      title: "Fitness App",
      icon: <span>🧘</span>,
      members: [
        { image: "https://github.com/Charlie.png" },
        { image: "https://github.com/Robert.png" },
      ],
    },
    {
      title: "Add Project",
      icon: <span>➕</span>,
      members: [],
    },
  ];

  return (
    <div className="absolute top-[420px] h-[250px] left-[680px] bg-white  p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-sm font-bold text-gray-800">Projects</h2>
        <span className="text-sm font-medium text-gray-600">Month October</span>
      </div>

      {/* Scrollable Section */}
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            members={project.members}
          />
        ))}
      </div>
    </div>
  );
}
