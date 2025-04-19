import Section from "@/app/compo/Section";
export default function StickyTimeline() {
  const sections = [
    {
      title: "1968~1984",
      quote: "Our legacy of engineering excellence started in 1968...", 
      timeline: [
        {
          year: "1968",
          text: "— Established Rekofa India",
          image: "/tractor.jpg",
        },
        {
          year: "1984",
          text: "— Started Manufacturing Thread Rolling Machines & Thread Rolls",
          image: "/tractor.jpg",
        },
      ],
    },
    {
      title: "1993~2011",
      quote: "Started manufacturing of various parts...",
      timeline: [
        {
          year: "1993",
          text: "— Started Manufacturing Taps, Cutting Tools & Chasers",
          image: "/tractor.jpg",
        },
        {
          year: "2011",
          text: "— Started Manufacturing Friction Press Forging Parts",
          image: "/tractor.jpg",
        },
      ],
    },
    {
      title: "2018~2021",
      quote:
        "Introduced new technologies and expanded our product range...",
      timeline: [
        {
          year: "2018",
          text: "— Started Manufacturing CNC Machined Components",
          image: "/tractor.jpg",
        },
        {
          year: "2021",
          text: "— Started Manufacturing CNC Turned Components",
          image: "/tractor.jpg",
        },
      ],
    },
  ];
  
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar mt-10 max-w-7xl mx-auto">
      {sections.map((sec, i) => (
        <Section key={i} {...sec} />
      ))}
    </div>
  );
}
