export type EventStatus = "Past" | "Ongoing" | "Future";

export interface TechEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  participants: number | string;
  type: string;
  status: EventStatus;
}

export const eventsData: TechEvent[] = [
  {
    id: "1",
    title: "CodeCraft Hackathon",
    description: "A 48-hour coding marathon where developers collaborate to build innovative solutions for real-world problems. Join us to push the boundaries of your coding skills.",
    date: "OCT 15, 2024",
    time: "10:00 AM",
    location: "Main Auditorium",
    participants: 500,
    type: "Hackathon",
    status: "Future",
  },
  {
    id: "2",
    title: "AI Workshop",
    description: "Learn the fundamentals of Artificial Intelligence and Machine Learning from industry experts. Hands-on sessions and real-world projects included.",
    date: "NOV 10, 2024",
    time: "2:00 PM",
    location: "Lab 4",
    participants: 120,
    type: "Workshop",
    status: "Future",
  },
  {
    id: "3",
    title: "CyberSecurity CTF",
    description: "Test your hacking skills in this Capture The Flag competition. Find vulnerabilities and secure systems before the time runs out.",
    date: "OCT 05, 2023",
    time: "9:00 AM",
    location: "Virtual",
    participants: "1000+",
    type: "Competition",
    status: "Past",
  },
  {
    id: "4",
    title: "TechTattva Main Event",
    description: "The grand symposium featuring guest lectures, project exhibitions, and tech talks from industry leaders across the globe.",
    date: "SEP 20, 2023",
    time: "11:00 AM",
    location: "Innovation Center",
    participants: 2000,
    type: "Symposium",
    status: "Past",
  },
  {
    id: "5",
    title: "RoboWars",
    description: "Design, build, and battle robots in our custom-built arena. The ultimate test of engineering and strategy.",
    date: "MAY 10, 2026",
    time: "3:00 PM",
    location: "Arena",
    participants: 50,
    type: "Competition",
    status: "Ongoing",
  }
];
