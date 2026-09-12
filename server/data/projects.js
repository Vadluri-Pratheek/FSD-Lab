const projectsData = [
    {
        id: 1,
        title: "BookMyCut",
        github: "https://github.com/Vadluri-Pratheek/BookMyCut",
        image: "/assets/bookmycut.png",
        techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "JavaScript"],
        desc1: "BookMyCut is a full stack web application for barber appointment booking.",
        desc2: "Customers can search nearby barber shops and book their slots easily.",
        desc3: "Barbers get a dashboard to manage and analyse their daily schedules."
    },
    {
        id: 2,
        title: "Synapse Engine",
        github: "https://github.com/Vadluri-Pratheek/Synapse-Engine",
        image: "/assets/synapse.png",
        techStack: ["React", "FastAPI", "Python", "LangChain", "Gemini", "ChromaDB"],
        desc1: "Synapse Engine is a multi-model PDF Q&A engine powered by LLMs.",
        desc2: "Uses Gemini 2.5 Flash, Llama 8b and 80b with an intent router.",
        desc3: "Extracts context from uploaded PDFs and answers queries accurately."
    },
    {
        id: 3,
        title: "SplitSmart",
        github: "https://github.com/Vadluri-Pratheek/SplitSmart",
        image: "/assets/splitsmart.png",
        techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "C++"],
        desc1: "SplitSmart splits bills and minimises total transactions in a group.",
        desc2: "Modeled as a graph — users are nodes, debts are weighted edges.",
        desc3: "Greedy heap algorithm reduces transactions from O(N²) to O(N log N)."
    }
];

export { projectsData };
