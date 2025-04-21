import {
    MonitorSmartphone,
    PenTool,
    LayoutDashboard,
    Database,
    Smartphone,
    CloudCog,
  } from "lucide-react";
  
  const services = [
    {
      icon: <MonitorSmartphone className="w-12 h-12 text-lynq-yellow mb-4" />,
      title: "Web & Mobile App Development",
      desc: "We develop scalable and secure web and mobile applications tailored to your business needs.",
    },
    {
      icon: <PenTool className="w-12 h-12 text-lynq-yellow mb-4" />,
      title: "UI/UX Design",
      desc: "Crafting intuitive user experiences and beautiful interfaces for your digital products.",
    },
    {
      icon: <LayoutDashboard className="w-12 h-12 text-lynq-yellow mb-4" />,
      title: "Front-end Development",
      desc: "Modern and responsive UI built with React, Vue, and the latest frontend technologies.",
    },
    {
      icon: <Database className="w-12 h-12 text-lynq-yellow mb-4" />,
      title: "Backend Integration",
      desc: "Robust APIs and server-side logic using Node.js, C#, and secure database systems.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-lynq-yellow mb-4" />,
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile solutions for iOS and Android.",
    },
    {
      icon: <CloudCog className="w-12 h-12 text-lynq-yellow mb-4" />,
      title: "DevOps & Cloud Solution",
      desc: "CI/CD pipelines, cloud deployment, and infrastructure automation for scalable systems.",
    },
  ];
  
  const ServicesSection = () => {
    return (
      <section id="services" className="grd-bg py-20 font-poppins">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-normal text-center text-black mb-12">Our Services</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="relative bg-white p-6 rounded-lg shadow hover:shadow-lg transition overflow-hidden"
              >
                {/* Bottom gradient border */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-lynq-yellow to-black rounded-b-lg" />
                {service.icon}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesSection;
  