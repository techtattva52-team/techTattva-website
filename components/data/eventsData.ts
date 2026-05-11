export type EventStatus = "Past" | "Ongoing" | "Future";

export interface TechEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  // time: string;
  location: string;
  participants: number | string;
  type: string;
  status: EventStatus;
}

export const eventsData: TechEvent[] = [
  {
    id: "3",
    title: "AI HealthX Hack 2026",
    description: "Organised by TechVerse Nexus, AI HealthX Hack 2026 brought together innovators, developers, and healthcare enthusiasts to build AI-driven solutions for real-world healthcare challenges.",
    date: "15 MAR 2026",
    location: "Delhi Technological University, Delhi",
    participants: 1500,
    type: "Hackathon",
    status: "Past",

  },
  {
    id: "4",
    title: "AI For Everyone",
    description: "Organised by TechVerse Nexus, TechTattva backed the event as a Community Partner.",
    date: "27 FEB 2026",
    // time: "11:00 AM",
    location: "IILM University, Greater Noida",
    participants: 2000,
    type: "Symposium",
    status: "Past",
  },
  {
    id: "6",
    title: "CODE नवक्षा-II",
    description: "Organised by Code Rangers at TIPS Greater Noida, CODE नवक्षा-II featured coding challenges, innovation-driven activities, and collaborative tech experiences, with TechTattva joining as the Community Partner.",
    date: "2026",
    // time: "",
    location: "TIPS, Greater Noida",
    participants: 500,
    type: "Coding Event",
    status: "Past",
  },
  {
    id: "7",
    title: "ENFINITY Hackathon",
    description: "Organised by Cutting Edge Visionaries at Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat, ENFINITY Hackathon focused on innovation and problem-solving, with TechTattva Community supporting the event as a Community Partner.",
    date: "03-04 APR 2026",
    // time: "",
    location: "SVNIT Surat, Gujarat",
    participants: 800,
    type: "Hackathon",
    status: "Past",
  },
  {
    id: "8",
    title: "Hack Energy 2.0",
    description: "Organised by HackGyanVerse in collaboration with Unstop and Cyberyaan, Hack Energy 2.0 brought together innovators and tech enthusiasts to solve real-world challenges, with TechTattva Community supporting the event as a Community Partner.",
    date: "2026",
    // time: "",
    location: "India",
    participants: 1200,
    type: "Hackathon",
    status: "Past",
  },
];
