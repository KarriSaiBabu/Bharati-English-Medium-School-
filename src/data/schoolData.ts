import { FacultyMember, SchoolEvent, Announcement, GalleryItem, SchoolFacility } from '../types/school';

export const DEVELOPER_DETAILS = {
  name: "Sai Babu Karri",
  role: "Web Developer",
  contact: "9347567746",
  email: "saibabukarri@gmail.com",
};

export const SCHOOL_INFO = {
  name: "Bharati English Medium School",
  tagline: "Empowering Minds, Shaping Futures with Discipline & Wisdom",
  motto: "Knowledge · Discipline · Excellence",
  establishedYear: "1998",
  affiliation: "Recognized State Board & English Medium Curriculum",
  mediumOfInstruction: "English Medium with Telugu & Hindi options",
  grades: "Pre-KG to Grade 10 (SSC)",
  phone: "+91 93475 67746",
  alternatePhone: "+91 891 2748921",
  email: "contact@bharatischool.edu.in",
  address: "Main Road, Near Vidyut Bhavan, Sector 4, Visakhapatnam, Andhra Pradesh - 530017",
  timings: "Monday - Saturday: 8:30 AM - 4:00 PM",
  assemblyTime: "8:45 AM - 9:00 AM",
  stats: [
    { label: "Enrolled Students", value: "1,250+", detail: "Nurtured across Pre-Primary to High School" },
    { label: "Dedicated Faculty", value: "58+", detail: "Certified & specialized educators" },
    { label: "Board Pass Rate", value: "99.8%", detail: "Consistent top academic standings" },
    { label: "Years of Excellence", value: "27+", detail: "Holistic student development since 1998" },
  ]
};

// Generated high-fidelity images
export const IMAGES = {
  campus: "/src/assets/images/school_campus_exterior_1794238323217.jpg",
  classroom: "/src/assets/images/smart_classroom_interior_1794238324038.jpg",
  scienceLab: "/src/assets/images/science_stem_lab_1794238324435.jpg",
  sports: "/src/assets/images/sports_and_activities_1794238325009.jpg",
};

export const FACILITIES: SchoolFacility[] = [
  {
    id: "fac-1",
    title: "Smart Digital Classrooms",
    description: "Every classroom is equipped with interactive digital smart boards, ergonomic seating, and multi-media learning tools to transform concepts into engaging visual lessons.",
    features: ["Interactive 4K Smart Boards", "Well-ventilated & Natural Daylight", "Student Audio-Visual Modules", "Individual Student Lockers"],
    imageUrl: IMAGES.classroom
  },
  {
    id: "fac-2",
    title: "Advanced STEM & Computer Lab",
    description: "Comprehensive laboratories for Physics, Chemistry, Biology, and Computer Science empowering students with hands-on experiments and early coding skills.",
    features: ["Dedicated Optical Microscopes", "Robotics & Arduino Starter Kits", "1:1 Student-to-Computer Ratio", "High-speed Academic Fiber Internet"],
    imageUrl: IMAGES.scienceLab
  },
  {
    id: "fac-3",
    title: "Vibrant Sports & Athletic Field",
    description: "Sprawling grounds dedicated to athletic tracks, cricket nets, basketball courts, and indoor games to foster discipline, fitness, and team sportsmanship.",
    features: ["400m Running Track & Playfields", "Basketball & Volleyball Courts", "Trained Physical Education Coaches", "Inter-School Tournament Training"],
    imageUrl: IMAGES.sports
  },
  {
    id: "fac-4",
    title: "Campus Safety & GPS Transport",
    description: "A secure, green school environment with 24/7 CCTV surveillance, fire safety compliance, and a dedicated bus fleet with live GPS tracking for parent peace of mind.",
    features: ["24/7 Campus CCTV Monitoring", "GPS-Enabled School Bus Fleet", "Trained Attendants & First Aid Bay", "Pure RO Drinking Water Stations"],
    imageUrl: IMAGES.campus
  }
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: "fac-p1",
    name: "Dr. P. Rajeswari",
    designation: "Principal & Head of Institution",
    department: "Administration & Leadership",
    qualification: "M.Sc., M.Ed., Ph.D. in Educational Pedagogy",
    experience: "24 Years of Leadership",
    bio: "Passionate educationist dedicated to child-centric pedagogy, value-based character building, and academic distinction across Andhra Pradesh.",
    subjects: ["Educational Leadership", "Child Psychology", "Curriculum Design"],
    email: "principal@bharatischool.edu.in",
    avatarColor: "bg-amber-100 text-amber-900 border-amber-300"
  },
  {
    id: "fac-p2",
    name: "Mr. K. V. Ramanamurthy",
    designation: "Vice Principal & Academic Dean",
    department: "Mathematics",
    qualification: "M.Sc. Mathematics, B.Ed. (Gold Medalist)",
    experience: "19 Years Experience",
    bio: "Renowned for simplifying complex mathematical concepts, Olympiad coaching, and guiding students toward 100/100 board scores.",
    subjects: ["High School Mathematics", "Vedic Math", "IIT Foundation"],
    email: "ramanamurthy@bharatischool.edu.in",
    avatarColor: "bg-blue-100 text-blue-900 border-blue-300"
  },
  {
    id: "fac-p3",
    name: "Mrs. S. Lakshmi Prasanna",
    designation: "Senior Science Head & Physics Specialist",
    department: "Physical Sciences",
    qualification: "M.Sc. Physics, B.Ed.",
    experience: "15 Years Experience",
    bio: "Mentors young innovators in regional science congresses and promotes practical lab demonstrations that bring physics laws to life.",
    subjects: ["General Science", "Physics (Grades 8-10)", "STEM Projects"],
    email: "lakshmi.p@bharatischool.edu.in",
    avatarColor: "bg-emerald-100 text-emerald-900 border-emerald-300"
  },
  {
    id: "fac-p4",
    name: "Mr. T. Daniel Joseph",
    designation: "Head of English & Communication",
    department: "Languages",
    qualification: "M.A. English Literature, M.Phil., CELTA Certified",
    experience: "16 Years Experience",
    bio: "Champions spoken English fluency, creative writing, debating clubs, and international elocution competitions for Bharati students.",
    subjects: ["English Language", "Literature", "Debate & Public Speaking"],
    email: "daniel.joseph@bharatischool.edu.in",
    avatarColor: "bg-indigo-100 text-indigo-900 border-indigo-300"
  },
  {
    id: "fac-p5",
    name: "Dr. G. Srinivas Rao",
    designation: "Chemistry & Environmental Science Mentor",
    department: "Chemical Sciences",
    qualification: "M.Sc. Organic Chemistry, Ph.D.",
    experience: "14 Years Experience",
    bio: "Guides school environmental conservation drives, eco-club initiatives, and interactive laboratory experiment workshops.",
    subjects: ["Chemistry", "Environmental Studies", "Eco-Club"],
    email: "srinivas.rao@bharatischool.edu.in",
    avatarColor: "bg-teal-100 text-teal-900 border-teal-300"
  },
  {
    id: "fac-p6",
    name: "Mrs. V. Madhuri",
    designation: "Head of Biology & Life Sciences",
    department: "Natural Sciences",
    qualification: "M.Sc. Botany, B.Ed.",
    experience: "12 Years Experience",
    bio: "Inspires scientific curiosity through botany garden visits, human anatomy models, and regional health awareness workshops.",
    subjects: ["Biology", "Health & Hygiene", "Nature Club"],
    email: "madhuri.v@bharatischool.edu.in",
    avatarColor: "bg-rose-100 text-rose-900 border-rose-300"
  },
  {
    id: "fac-p7",
    name: "Ms. A. Bhavani",
    designation: "Computer Science & Robotics Lab Coordinator",
    department: "Technology",
    qualification: "B.Tech, M.Tech in Computer Science",
    experience: "9 Years Experience",
    bio: "Introduces students to Python fundamentals, AI literacy, web concepts, and robotics kits tailored for primary and high school curricula.",
    subjects: ["Computer Science", "Coding & Python", "AI & Robotics"],
    email: "bhavani.a@bharatischool.edu.in",
    avatarColor: "bg-sky-100 text-sky-900 border-sky-300"
  },
  {
    id: "fac-p8",
    name: "Mr. Ch. Appala Naidu",
    designation: "Physical Education Director & Chief Sports Coach",
    department: "Physical Education",
    qualification: "M.P.Ed., NIS Certified Athletic Coach",
    experience: "18 Years Experience",
    bio: "State-level athlete trainer who has groomed multiple district champions in sprint, cricket, kho-kho, and chess.",
    subjects: ["Athletics", "Team Sports", "Yoga & Physical Fitness"],
    email: "sports@bharatischool.edu.in",
    avatarColor: "bg-orange-100 text-orange-900 border-orange-300"
  },
  {
    id: "fac-p9",
    name: "Mrs. K. Sunitha",
    designation: "Fine Arts, Music & Cultural Coordinator",
    department: "Cultural Arts",
    qualification: "M.F.A. (Fine Arts), Classical Vocalist",
    experience: "11 Years Experience",
    bio: "Curates the annual cultural fest, classical dance troupes, painting exhibitions, and student theatrical performances.",
    subjects: ["Drawing & Painting", "Classical Music", "Drama & Cultural Arts"],
    email: "sunitha.k@bharatischool.edu.in",
    avatarColor: "bg-purple-100 text-purple-900 border-purple-300"
  }
];

export const SCHOOL_EVENTS: SchoolEvent[] = [
  {
    id: "evt-1",
    title: "Annual Science & Innovation Expo 2026",
    date: "November 28, 2026",
    time: "9:30 AM - 3:30 PM",
    category: "Academic",
    location: "Main Auditorium & STEM Labs",
    description: "Students from Grades 4 through 10 showcase working prototypes, robotics demonstrations, and solar energy models. Parents and alumni cordially invited.",
    badge: "Open to Parents",
    circularNo: "CIR/2026/ACAD-44"
  },
  {
    id: "evt-2",
    title: "Inter-House Sports Meet & Track Championships",
    date: "December 12 - 14, 2026",
    time: "8:00 AM - 4:00 PM",
    category: "Sports",
    location: "School Sports Ground & Athletics Arena",
    description: "Three-day athletic showdown featuring sprint races, relay, long jump, badminton, and house march-past. Chief Guest: District Sports Officer.",
    badge: "Flagship Event",
    circularNo: "CIR/2026/SPORTS-18"
  },
  {
    id: "evt-3",
    title: "Mid-Term Assessment & Parent-Teacher Meeting (PTM)",
    date: "December 20, 2026",
    time: "9:00 AM - 1:00 PM",
    category: "Exams",
    location: "Individual Classrooms",
    description: "Distribution of progress reports for Term-2, one-on-one academic consultation with class mentors and remedial guidance for board aspirants.",
    badge: "Mandatory Attendance",
    circularNo: "CIR/2026/EVAL-31"
  },
  {
    id: "evt-4",
    title: "National Mathematics Day Celebration",
    date: "December 22, 2026",
    time: "10:00 AM - 1:00 PM",
    category: "Academic",
    location: "Mathematics Activity Hall",
    description: "Commemorating Srinivasa Ramanujan's birth anniversary with mathematical puzzles, origami geometry, and rapid-fire quiz competitions.",
    badge: "Inter-School Quiz",
    circularNo: "CIR/2026/MATH-07"
  },
  {
    id: "evt-5",
    title: "Sankranti Sambaralu & Cultural Folk Festival",
    date: "January 10, 2027",
    time: "9:00 AM - 2:00 PM",
    category: "Cultural",
    location: "Campus Courtyard & Open Amphitheater",
    description: "Traditional festival celebration with kite crafting workshops, Rangoli competitions, traditional attire day, and cultural dance performances.",
    badge: "Festival Fest",
    circularNo: "CIR/2027/CULT-02"
  },
  {
    id: "evt-6",
    title: "Grade 10 Board Pre-Final Examinations",
    date: "January 22 - February 02, 2027",
    time: "9:30 AM - 12:45 PM",
    category: "Exams",
    location: "Examination Hall Wing B",
    description: "Rigorous preparatory examinations modeled strictly after official state board patterns with detailed faculty answer review sessions.",
    badge: "Board Aspirants",
    circularNo: "CIR/2027/EXAM-15"
  }
];

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "ann-1",
    title: "Admissions Open for Academic Year 2027-2028 (Pre-KG to Grade 9)",
    date: "November 08, 2026",
    category: "Urgent",
    pinned: true,
    summary: "Registration forms are now available online and at the school administrative counter. Limited seats for pre-primary and foundation batches.",
    content: "Bharati English Medium School welcomes applications for the upcoming academic year. We offer holistic English medium instruction backed by modern digital learning, sports facilities, and individual student care. Parents can submit the online inquiry form or visit the school reception between 9:00 AM and 3:00 PM.",
    docUrl: "ADMISSIONS_PROSPECTUS_2027.pdf"
  },
  {
    id: "ann-2",
    title: "Winter Uniform & Assembly Timings Update",
    date: "November 05, 2026",
    category: "Administrative",
    pinned: true,
    summary: "Starting November 15, students must wear the designated navy blue school blazer/sweater during morning assembly.",
    content: "All students from Grade 1 to 10 are requested to strictly adhere to the winter uniform code. The morning bell rings at 8:30 AM with assembly commencement at 8:45 AM. School buses will follow the standard scheduled timings.",
    docUrl: "CIRCULAR_WINTER_UNIFORM.pdf"
  },
  {
    id: "ann-3",
    title: "District Level Science Fair Winners Announced",
    date: "October 29, 2026",
    category: "Academic",
    pinned: false,
    summary: "Bharati school students bagged 1st prize in the Renewable Energy category at the Visakhapatnam District Science Exhibition.",
    content: "Hearty congratulations to Master K. Tarun (Grade 9) and Miss P. Sneha (Grade 9) for securing the First Prize with their working Smart Irrigation & Solar Desalination Project. The school management commends their dedication and guide teacher Mrs. S. Lakshmi Prasanna.",
    docUrl: "DISTRICT_SCIENCE_MERIT.pdf"
  },
  {
    id: "ann-4",
    title: "Olympiad Foundation Classes Schedule for High School",
    date: "October 20, 2026",
    category: "Academic",
    pinned: false,
    summary: "Special Saturday morning sessions for National Science and Math Olympiad registered candidates from 8:30 AM to 11:30 AM.",
    content: "Weekend coaching modules targeting advanced analytical thinking, mental ability, and speed solving are conducted by senior subject faculty. Attendance is strongly advised for all registered students.",
    docUrl: "OLYMPIAD_SCHEDULE.pdf"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Grand School Campus & Morning Assembly Courtyard",
    category: "Campus",
    imageUrl: IMAGES.campus,
    caption: "Our serene school building with lush lawns, wide arches, and vibrant student community during a bright morning.",
    year: "Academic Year 2026-27",
    highlight: "Campus Infrastructure"
  },
  {
    id: "gal-2",
    title: "Interactive Smart Digital Learning in Session",
    category: "Classrooms",
    imageUrl: IMAGES.classroom,
    caption: "Young learners exploring astronomy and mathematics through ultra-HD interactive smart boards and modular desks.",
    year: "Academic Year 2026-27",
    highlight: "Smart Classrooms"
  },
  {
    id: "gal-3",
    title: "Junior Robotics & Advanced Physics Experiments",
    category: "Science & STEM",
    imageUrl: IMAGES.scienceLab,
    caption: "High school students collaborating on robotic arm circuitry, optical microscopy, and chemical analysis in the STEM lab.",
    year: "Academic Year 2026-27",
    highlight: "STEM Innovation Lab"
  },
  {
    id: "gal-4",
    title: "Annual Track Athletics & Inter-House Sports Championship",
    category: "Sports",
    imageUrl: IMAGES.sports,
    caption: "Students competing in 400m sprint, basketball drills, and relay races on the school athletic grounds.",
    year: "Academic Year 2026-27",
    highlight: "Annual Sports Meet"
  },
  {
    id: "gal-5",
    title: "District Science Congress First Prize Winners",
    category: "Achievements",
    imageUrl: IMAGES.scienceLab,
    caption: "Student innovators presenting their renewable energy filtration model which secured 1st prize across 40 district schools.",
    year: "Academic Year 2026-27",
    highlight: "District 1st Prize"
  },
  {
    id: "gal-6",
    title: "Cultural Heritage & Folk Dance Celebration",
    category: "Cultural",
    imageUrl: IMAGES.campus,
    caption: "Traditional folk dances, classical music performances, and drama presented by middle and high school students.",
    year: "Academic Year 2026-27",
    highlight: "Annual Cultural Day"
  }
];

export const TESTIMONIALS = [
  {
    quote: "Bharati English Medium School has provided my daughter with not just textbook knowledge, but strong moral values, spoken English fluency, and confidence in public speaking. The teachers give individual attention to every child.",
    parentName: "Mr. G. Venkata Rao",
    relation: "Father of P. Divya (Grade 8)",
    city: "Visakhapatnam"
  },
  {
    quote: "The combination of smart classrooms, science labs, and dedicated sports coaching makes Bharati School stand out. My son scored 98% in Grade 10 board exams thanks to the faculty's constant mentorship.",
    parentName: "Mrs. K. Annapurna",
    relation: "Mother of K. Karthik (Alumnus, 2025)",
    city: "Visakhapatnam"
  },
  {
    quote: "As working parents, safety and quality education were our top priorities. The school's GPS-enabled transport, caring staff, and proactive communication have given us immense peace of mind.",
    parentName: "Mr. & Mrs. S. N. Murthy",
    relation: "Parents of S. Ananya (Grade 4)",
    city: "Visakhapatnam"
  }
];
