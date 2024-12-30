import React from "react";

const teamMembers = [
  {
    name: "Kyle Jenner",
    email: "jenner.kyle123@gmail.com",
    image: "https://github.com/Kyle.png",
  },
  {
    name: "Robert Kale",
    email: "kale.the.robert@gmail.com",
    image: "https://github.com/Robert.png",
  },
  {
    name: "Kristin Watson",
    email: "georgia.young@example.com",
    image: "https://github.com/Kristin.png",
  },
  {
    name: "Jerome Bell",
    email: "alma.lawson@example.com",
    image: "https://github.com/Jerome.png",
  },
  {
    name: "Dianne Russell",
    email: "dianne.russel@d.russell.com",
    image: "https://github.com/Dianne.png",
  },
  {
    name: "Robert Fox",
    email: "georgia.young@example.com",
    image: "https://github.com/RobertU.png",
  },
  {
    name: "Cody Fisher",
    email: "alma.lawson@example.com",
    image: "https://github.com/Cody.png",
  },
];

const TeamPage = () => {
  return (
    <div className="absolute left-[400px] top-[100px] p-6">
      <h1 className="font-bold mb-6 text-black">Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#f6fdfb] rounded-xl shadow-md p-4 text-center relative"
          >
            <div className="absolute top-3 right-3 flex flex-col items-center space-y-1">
          <div className="w-1 h-1 bg-green-300 rounded-full"></div>
          <div className="w-1 h-1 bg-green-300 rounded-full"></div>
          <div className="w-1 h-1 bg-green-300 rounded-full"></div>
        </div>
            <img
              src={member.image}
              alt={member.name}
              className="w-20 h-20 mx-auto rounded-full mb-4 border-4 border-white shadow-md"
            />
            <h2 className="text-lg font-semibold text-black">{member.name}</h2>
            <p className="text-sm text-gray-500 mt-1">{member.email}</p>
            <button className="mt-4 px-4 py-2 text-sm font-medium text-green-500 bg-[#E7F9F0] rounded-lg hover:bg-green-300 hover:text-white">
              View Profile
            </button>
          </div>
        ))}
        <div className="flex items-center justify-center bg-[#F7FBF9] rounded-xl shadow-md p-6 ">
          <button className="flex flex-col items-center text-green-200">
          <div className="w-12 h-12 flex items-center justify-center bg-green-200 rounded-full mb-2">
            <span className="text-2xl font-bold text-white">+</span>
           </div>
            <span>Add Member</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
