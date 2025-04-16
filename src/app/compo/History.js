import Section from "@/app/compo/Section";
export default function StickyTimeline() {
  const sections = [
    {
      title: "2018~2021",
      quote: "We are making endless leaps toward becoming a solution provider...",
      timeline: [
        { year: "2021", text: "— Added 5 More Drop Hammers", image: "/tractor.jpg" },
        { year: "2019", text: "— Upgraded to CNC, VMC", image: "/tractor.jpg" },
        { year: "2018", text: "— Started with 4 Drop Hammers", image: "/tractor.jpg" },
      ]
    },
    {
      title: "2022~2023",
      quote: "We expanded global manufacturing and automation systems...",
      timeline: [
        { year: "2022", text: "— Opened new assembly plant", image: "/tractor.jpg" },
        { year: "2023", text: "— Developed robotic arm systems", image: "/tractor.jpg" },
      ]
    },
    {
      title: "2024~Future",
      quote: "Vision for the future includes AI integration and sustainability...",
      timeline: [
        { year: "2024", text: "— Integrated AI monitoring", image: "/tractor.jpg" },
        { year: "2025", text: "— Building net-zero facility", image: "/tractor.jpg" },
      ]
    }
  ];

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar">
      {sections.map((sec, i) => (
        <Section key={i} {...sec} />
      ))}
    </div>
  );
}
