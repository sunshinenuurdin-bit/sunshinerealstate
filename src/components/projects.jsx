import React from 'react';
import { MapPin, Calendar, TrendingUp, ArrowRight } from 'lucide-react';

const OurProjects = () => {
  const projects = [
  {
    title: "Sunshine Heights Phase II",
    loc: "Kilimani, Nairobi",
    progress: 75,
    status: "Under Construction",
    completion: "Dec 2026",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800"
  },
  {
    title: "The Gold Terrace",
    loc: "Westlands, Nairobi",
    progress: 40,
    status: "Structural Phase",
    completion: "Aug 2027",
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800"
  },
  {
    title: "Orbit Place Residency",
    loc: "Parklands, Nairobi",
    progress: 90,
    status: "Finishing Touches",
    completion: "Sept 2026",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"
  },
  {
    title: "Lavington Green Villas",
    loc: "Lavington, Nairobi",
    progress: 15,
    status: "Groundbreaking",
    completion: "Jan 2028",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800"
  }
];

  return (
    <section id="projects" className="bg-[#FAF9F6] py-20 px-6 lg:px-16 scroll-mt-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Centered Top Title - Consistent with Products Section */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center space-x-2 text-[#D4AF37] font-bold text-sm tracking-widest uppercase">
            <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
            <span>Our Projects</span>
            <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
          </div>
        </div>

        {/* Heading and Button Row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-12 space-y-6 md:space-y-0">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A110B]">
            Developments In Progress
          </h2>
          <button className="border-2 border-[#D4AF37] text-[#1A110B] hover:bg-[#D4AF37] hover:text-white px-6 py-3 rounded-lg font-bold flex items-center text-sm transition-all shrink-0">
            View All Projects <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border border-gray-100 flex flex-col">
              
              {/* Image Section */}
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-[#1A110B] text-[#D4AF37] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {project.status}
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6 flex-grow">
                <h3 className="font-bold text-lg mb-2 text-[#1A110B] group-hover:text-[#D4AF37] transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center text-gray-500 text-xs mb-6">
                  <MapPin className="w-3 h-3 mr-1 text-[#D4AF37]" /> {project.loc}
                </div>
                
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Construction Progress</span>
                    <span className="text-sm font-bold text-[#D4AF37]">{project.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#D4AF37] transition-all duration-1000 ease-out"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Footer Details */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                  <div className="flex items-center text-gray-600 text-[11px] font-semibold">
                    <Calendar className="w-4 h-4 mr-2 text-[#D4AF37]" />
                    Est. {project.completion}
                  </div>
                  <div className="flex items-center text-gray-600 text-[11px] font-semibold">
                    <TrendingUp className="w-4 h-4 mr-2 text-[#D4AF37]" />
                    Phase {project.progress > 50 ? '2' : '1'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;