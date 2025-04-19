const productDetails = [
  {
    id: "hydraulic-thread-rolling",
    title: "Hydraulic Thread Rolling Machine",
    description:
      "A powerful and precise machine designed for efficient and high-quality thread rolling operations.",
    para1:
      "The Hydraulic Thread Rolling Machine is designed to provide precision threading with superior surface finish.",
    para2:
      "It features a robust construction that allows deep forming of threads, worms, serrations, and knurls.",
    para3:
      "The machine is engineered for rigidity and simplicity, making it easy to operate even for unskilled laborers.",
    para4:
      "Ideal for mass production, this machine ensures high efficiency and long-term durability.",
    image: "/Machine1.png",
    pdfLink: "/pdfs/hydraulic-thread-rolling-brochure.pdf",
    // technicalSpecifications: {
    //   headers: [
    //     "MODEL",
    //     "R.I. - 25",
    //     "R.I. - 25 HEAVY",
    //     "THREAD BAR",
    //     "R.I. - 40",
    //     "R.I. - 50",
    //     "R.I. - 80",
    //     "R.I. - 80 Heavy",
    //   ],
    //   rows: [
    //     {
    //       name: "Max Pinch can be called",
    //       unit: "mm",
    //       values: ["2.5", "3", "1.75", "3.5", "4", "5.5", "5.5"],
    //     },
    //     {
    //       name: "Max. Dia can be Rolled infeed",
    //       unit: "mm",
    //       values: ["25", "25", "-", "40", "50", "80", "80"],
    //     },
    //     {
    //       name: "Though Feed",
    //       unit: "mm",
    //       values: ["12", "16", "12", "25", "30", "60", "60"],
    //     },
    //     {
    //       name: "Max. Rolling Length infeed",
    //       unit: "mm",
    //       values: ["80", "80", "80", "125/150", "150", "180/200", "180/200"],
    //     },
    //     {
    //       name: "Though Feed",
    //       unit: "-",
    //       values: [
    //         "Indefinite",
    //         "Indefinite",
    //         "Indefinite",
    //         "Indefinite",
    //         "Indefinite",
    //         "Indefinite",
    //         "Indefinite",
    //       ],
    //     },
    //     {
    //       name: "Max. Outer Dia. T. Rolls",
    //       unit: "mm",
    //       values: ["120", "160", "160", "180", "200", "200/220", "200/220"],
    //     },
    //     {
    //       name: "Spindle Dia (Bore Dia)",
    //       unit: "mm",
    //       values: ["40", "54", "54", "54", "69.85", "69.85", "69.85"],
    //     },
    //     {
    //       name: "Max. Width T. Rolls",
    //       unit: "mm",
    //       values: ["80", "80", "80", "125/150", "150", "180/200", "180/200"],
    //     },
    //     {
    //       name: "Maximum Rolling Force",
    //       unit: "Tons",
    //       values: ["8", "8", "8", "12", "15", "24", "30"],
    //     },
    //     {
    //       name: "For Roll Spindles",
    //       unit: "Hp/1440 RPM",
    //       values: ["3", "5", "5", "5", "7.5", "10", "10"],
    //     },
    //     {
    //       name: "For Hyd. Spindles",
    //       unit: "Hp/1440 RPM",
    //       values: ["3", "5", "5", "5", "5", "5", "5"],
    //     },
    //     {
    //       name: "For Coolant Pump",
    //       unit: "Hp/3000 RPM",
    //       values: ["0.25", "0.25", "0.25", "0.25", "0.25", "0.25", "0.25"],
    //     },
    //   ],
    // },
    technicalSpecifications: {
      headers: [
        "Model",
        "R.I. - 25",
        "R.I. - 25 Heavy",
        "R.I. - Thread Bar",
        "R.I. - 40",
        "R.I. - 40 Heavy",
        "R.I. - 50 Heavy",
        "R.I. - 80 Heavy",
        "R.I. - 100 Heavy",
        "R.I. - 125 Heavy",
      ],
      rows: [
        {
          name: "Pitch can be called",
          unit: "mm",
          values: [
            "2.5",
            "2.5",
            "1.0 to 2.0",
            "3.0",
            "3.5",
            "4",
            "6.0",
            "6.0",
            "6.0",
          ],
        },
        {
          name: "Max. Dia can be Rolled infeed",
          unit: "mm",
          values: ["25", "25", "16", "40", "40", "50", "80", "100", "125"],
        },
        {
          name: "Though Feed",
          unit: "mm",
          values: ["16", "24", "16", "25", "30", "36", "64", "76", "90"],
        },
        {
          name: "Max. Rolling Length infeed",
          unit: "mm",
          values: [
            "80",
            "80",
            "80",
            "150",
            "150",
            "150/200",
            "200",
            "230/250",
            "250/300",
          ],
        },
        {
          name: "Though Feed",
          unit: "-",
          values: [
            "Indefinite",
            "Indefinite",
            "Indefinite",
            "Indefinite",
            "Indefinite",
            "Indefinite",
            "Indefinite",
            "Indefinite",
            "Indefinite",
          ],
        },
        {
          name: "Max. Outer Dia. T. Rolls",
          unit: "mm",
          values: [
            "120",
            "160",
            "160",
            "200",
            "200",
            "220",
            "230/235",
            "250",
            "300",
          ],
        },
        {
          name: "Spindle Dia (Bore Dia)",
          unit: "mm",
          values: [
            "40",
            "54",
            "54",
            "54",
            "54",
            "69.85",
            "69.85/76.2",
            "76.2/80",
            "100",
          ],
        },
        {
          name: "Max. Width T. Rolls",
          unit: "mm",
          values: [
            "80",
            "80",
            "80",
            "150",
            "150",
            "150/200",
            "200",
            "250",
            "300",
          ],
        },
        {
          name: "Maximum Rolling Force",
          unit: "Tons",
          values: ["6", "6", "8", "12", "16", "20", "30", "45", "60"],
        },
        {
          name: "For Roll Spindle",
          unit: "Hp/1440 RPM",
          values: ["3", "3", "5", "5", "7.5", "10", "15", "20", "25"],
        },
        {
          name: "For Hyd.",
          unit: "Hp/1440 RPM",
          values: ["3", "3", "3", "3", "3", "7.5", "7.5", "10", "15"],
        },
        {
          name: "For Coolant Pump",
          unit: "Hp/3000 RPM",
          values: [
            "0.25",
            "0.25",
            "0.25",
            "0.25",
            "0.25",
            "0.25",
            "0.25",
            "0.25",
            "0.25",
          ],
        },
      ],
    },
  },
  {
    id: "thread-rolling",
    title: "Hydraulic Thread Rolling Machine",
    description:
      "A powerful and precise machine designed for efficient and high-quality thread rolling operations.",
    para1:
      "The Hydraulic Thread Rolling Machine is designed to provide precision threading with superior surface finish.",
    para2:
      "It features a robust construction that allows deep forming of threads, worms, serrations, and knurls.",
    para3:
      "The machine is engineered for rigidity and simplicity, making it easy to operate even for unskilled laborers.",
    para4:
      "Ideal for mass production, this machine ensures high efficiency and long-term durability.",
    image: "/Machine2.png",
    pdfLink: "/pdfs/design-brochure.pdf",
    technicalSpecifications: {
      headers: [
        "Model",
        "R.I. - 50 Heavy",
        "R.I. - 80 Heavy",
        "R.I. - 100 Heavy",
        "R.I. - 125 Heavy",
      ],
      rows: [
        {
          name: "Pitch can be called",
          unit: "mm",
          values: ["4", "6.0", "6.0", "6.0"],
        },
        {
          name: "Max. Dia can be Rolled infeed",
          unit: "mm",
          values: ["50", "80", "100", "125"],
        },
        { name: "Though Feed", unit: "mm", values: ["36", "64", "76", "90"] },
        {
          name: "Max. Rolling Length infeed",
          unit: "mm",
          values: ["150/200", "200", "230/250", "250/300"],
        },
        {
          name: "Though Feed",
          unit: "-",
          values: ["Indefinite", "Indefinite", "Indefinite", "Indefinite"],
        },
        {
          name: "Max. Outer Dia. T. Rolls",
          unit: "mm",
          values: ["220", "230/235", "250", "300"],
        },
        {
          name: "Spindle Dia (Bore Dia)",
          unit: "mm",
          values: ["69.85", "69.85/76.2", "76.2/80", "100"],
        },
        {
          name: "Max. Width T. Rolls",
          unit: "mm",
          values: ["150/200", "200", "250", "300"],
        },
        {
          name: "Maximum Rolling Force",
          unit: "Tons",
          values: ["20", "30", "45", "60"],
        },
        {
          name: "For Roll Spindle",
          unit: "Hp/1440 RPM",
          values: ["10", "15", "20", "25"],
        },
        {
          name: "For Hyd.",
          unit: "Hp/1440 RPM",
          values: ["7.5", "7.5", "10", "15"],
        },
        {
          name: "For Coolant Pump",
          unit: "Hp/3000 RPM",
          values: ["0.25", "0.25", "0.25", "0.25"],
        },
      ],
    },
  },
  {
    id: "hydraulic-rolling",
    title: "Hydraulic Thread Rolling Machine",
    description:
      "A powerful and precise machine designed for efficient and high-quality thread rolling operations.",
    para1:
      "The Hydraulic Thread Rolling Machine is designed to provide precision threading with superior surface finish.",
    para2:
      "It features a robust construction that allows deep forming of threads, worms, serrations, and knurls.",
    para3:
      "The machine is engineered for rigidity and simplicity, making it easy to operate even for unskilled laborers.",
    para4:
      "Ideal for mass production, this machine ensures high efficiency and long-term durability.",
    image: "/Machine3.png",
    pdfLink: "/pdfs/quality-brochure.pdf",
    technicalSpecifications: {
      headers: [
        "Model",
        "R.I. - 25",
        "R.I. - 25 Heavy",
        "R.I. - Thread Bar",
        "R.I. - 40",
        "R.I. - 40 Heavy",
        "R.I. - 50 Heavy",
        "R.I. - 80 Heavy",
        "R.I. - 100 Heavy",
        "R.I. - 125 Heavy",
      ],
      rows: [
        {
          name: "Pitch can be called",
          unit: "mm",
          values: [
            "2.5",
            "2.5",
            "1.0 to 2.0",
            "3.0",
            "3.5",
            "4",
            "6.0",
            "6.0",
            "6.0",
          ],
        },
        {
          name: "Max. Dia can be Rolled infeed",
          unit: "mm",
          values: ["25", "25", "16", "40", "40", "50", "80", "100", "125"],
        },
        {
          name: "Though Feed",
          unit: "mm",
          values: ["16", "24", "16", "25", "30", "36", "64", "76", "90"],
        },
        {
          name: "Max. Rolling Length infeed",
          unit: "mm",
          values: [
            "80",
            "80",
            "80",
            "150",
            "150",
            "150/200",
            "200",
            "230/250",
            "250/300",
          ],
        },
        {
          name: "Though Feed",
          unit: "-",
          values: [
            "Indefinite",
            "Indefinite",
            "Indefinite",
            "Indefinite",
            "Indefinite",
            "Indefinite",
            "Indefinite",
            "Indefinite",
            "Indefinite",
          ],
        },
        {
          name: "Max. Outer Dia. T. Rolls",
          unit: "mm",
          values: [
            "120",
            "160",
            "160",
            "200",
            "200",
            "220",
            "230/235",
            "250",
            "300",
          ],
        },
        {
          name: "Spindle Dia (Bore Dia)",
          unit: "mm",
          values: [
            "40",
            "54",
            "54",
            "54",
            "54",
            "69.85",
            "69.85/76.2",
            "76.2/80",
            "100",
          ],
        },
        {
          name: "Max. Width T. Rolls",
          unit: "mm",
          values: [
            "80",
            "80",
            "80",
            "150",
            "150",
            "150/200",
            "200",
            "250",
            "300",
          ],
        },
        {
          name: "Maximum Rolling Force",
          unit: "Tons",
          values: ["6", "6", "8", "12", "16", "20", "30", "45", "60"],
        },
        {
          name: "For Roll Spindle",
          unit: "Hp/1440 RPM",
          values: ["3", "3", "5", "5", "7.5", "10", "15", "20", "25"],
        },
        {
          name: "For Hyd.",
          unit: "Hp/1440 RPM",
          values: ["3", "3", "3", "3", "3", "7.5", "7.5", "10", "15"],
        },
        {
          name: "For Coolant Pump",
          unit: "Hp/3000 RPM",
          values: [
            "0.25",
            "0.25",
            "0.25",
            "0.25",
            "0.25",
            "0.25",
            "0.25",
            "0.25",
            "0.25",
          ],
        },
      ],
    },
  },
  {
    id: "Taps",
    title: "Thread Taps",
    description: "Leading the way in eco-friendly manufacturing and practices.",
    para1: "H.S.S Ground  Thread Taps",
    para2: "Set of 2 and 3 pieces Left and Right hand",
    para3: "BSW, BSF, UNC, UNF, BSP, ISO, BSCY Metric Threads",
    para4:
      "We actively participate in green initiatives and encourage responsible manufacturing.",
    image: "/Taps.png",
    pdfLink: "/pdfs/sustainability-brochure.pdf",
  },
  {
    id: "Threading",
    title: "Threading & Tap Tools",
    description: "Driving breakthroughs through teamwork and new technologies.",
    para1:
      "These thread rolls are used on thread rolling machines and come in sets of two pieces.",
    para2:
      "They are manufactured from D2, D3, and M2 materials to suit any type of machine.",
    para3:
      "The rolls are compatible with various threading specifications including ISO metric, DIN, and Whiteworth America.",
    para4:
      "They also support thread types such as Trapozodical and ACME, offering broad application flexibility.",

    image: "/Products.png",
    pdfLink: "/pdfs/innovation-brochure.pdf",
  },
];

export default productDetails;
