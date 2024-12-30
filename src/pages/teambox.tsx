import React from "react";

// Reusable Team Member Component
type TeamMemberProps = {
  name: string;
  image: string;
};

const TeamMember = ({ name, image }: TeamMemberProps) => {
  return (
    <div className=" flex items-center justify-between py-2 top-[0px]  ">
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-8 h-8 rounded-full object-cover mr-2"
        />
        <span className="text-sm font-medium text-gray-800">{name}</span>
      </div>
      <button className="text-gray-400 hover:text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 10.5h9m-9 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
};

// Reusable Team List Component
export default function TeamBox() {
  const teamMembers = [
    {
      name: "Kyle Jenner",
      image: "https://github.com/Bob.png", // Replace with actual image URL
    },
    {
      name: "Robert Kale",
      image: "https://github.com/David.png", // Replace with actual image URL
    },
    {
      name: "Tyler John",
      image: "https://github.com/Charlie.png", // Replace with actual image URL
    },
  ];

  return (
    <div
      className="w-[200px] bg-white  p-4 absolute top-[150px] right-[40px]"
      style={{ border: "0px solid #E5E7EB" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Team</h2>
        <div className="flex space-x-4 text-gray-400 text-sm">
          <span className="cursor-pointer hover:text-gray-800">Project</span>
          <span className="cursor-pointer hover:text-gray-800">Uplabs</span>
        </div>
      </div>

      {/* Team Members */}
      <div>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} name={member.name} image={member.image} />
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4">
        <button className="text-sm text-gray-600 hover:text-gray-800">
          View All (5)
        </button>
      </div>
    </div>
  );
}
