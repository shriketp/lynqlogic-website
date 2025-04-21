import parth from "../images/parth.jpg"; 
import cd from "../images/cd.jpg";   
import teamimg from "../images/bg-1.jpg"; 

const teamMembers = [
  {
    name: "Parth Patel",
    title: "Co-Founder, Project Manager, Front-End Developer",
    experience: "3.5+ years experience leading frontend development & strategy.",
    image: parth,
    linkedin: "https://linkedin.com/in/your-parth-link",
  },
  {
    name: "Dhruv Chauhan",
    title: "Co-Founder & Lead UI/UX Designer",
    experience: "8+ years creating seamless, user-first digital experiences.",
    image: cd,
    linkedin: "https://linkedin.com/in/your-dhruv-link",
  },
];

const TeamSection = () => {
  return (
    <section
      id="ourteam"
      className="relative h-screen flex flex-col justify-center py-20 px-6 font-poppins bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${teamimg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Heading */}
      <h2 className="text-4xl font-semibold text-center text-white z-10 mb-[50px]">
        Our Team
      </h2>

      {/* Team Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-6 hover:shadow-xl transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 object-cover rounded-full border-4 border-blue-100 shadow"
              loading="lazy"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-black font-medium mb-2">{member.title}</p>
              <p className="text-gray-600 text-sm">{member.experience}</p>
              <a
                href={member.linkedin}
                className="text-sm text-blue-500 mt-2 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
