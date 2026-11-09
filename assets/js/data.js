/* ✏️ Edit site content here: projects, tools and chat answers. */
window.DATA = {
  projects: [
    {
      title: "Proposal management at Dogma Group",
      category: "Pre-Sales",
      year: "2025 — now",
      stat: "80+ proposals sent",
      desc: "Qualify leads, run discovery calls and demos, answer RFIs/RFPs and turn client requirements into tailored software proposals with cross-sell ideas.",
      tags: ["BANT", "RFP", "Demos", "Dynamics 365"]
    },
    {
      title: "Pipeline & lead qualification",
      category: "Pre-Sales",
      year: "2025",
      stat: "65% lead conversion",
      desc: "Structured BANT qualification and pipeline forecasting in Dynamics 365 Sales Hub across UK, Nepal and India teams.",
      tags: ["Dynamics 365", "Forecasting", "CRM"]
    },
    {
      title: "Requirements to process models",
      category: "Business Analysis",
      year: "2025",
      stat: "90+ client calls",
      desc: "AS-IS / TO-BE process mapping in BPMN 2.0, gap analysis and functional & non-functional requirements that delivery teams can build from.",
      tags: ["BPMN 2.0", "Gap analysis", "RACI"]
    },
    {
      title: "AI product work at DocsTribe",
      category: "Product",
      year: "2024",
      stat: "Batch'25 topper",
      desc: "Product manager internship at DocsTribe AI — user research, feature prioritisation and AI-assisted document workflows.",
      tags: ["Product", "AI", "Research"]
    },
    {
      title: "React proof-of-concepts",
      category: "Development",
      year: "2025",
      stat: "Demo-ready POCs",
      desc: "Quick React prototypes that show clients what a solution will feel like before a contract is signed.",
      tags: ["React", "Figma", "Claude"]
    },
    {
      title: "Client web builds",
      category: "Development",
      year: "2016 — 2020",
      stat: "Founder & senior developer",
      desc: "Websites and web apps in PHP, MySQL and jQuery for clients such as QniPay, QuriousCare, MyAdvo, Ubunanny and Indulge Festival.",
      tags: ["PHP", "MySQL", "jQuery"]
    }
  ],

  tools: [
    { name: "Dynamics 365", icon: "D" },
    { name: "Microsoft 365", icon: "M" },
    { name: "Excel", icon: "X" },
    { name: "Claude", icon: "✦" },
    { name: "NotebookLM", icon: "N" },
    { name: "Figma", icon: "F" },
    { name: "Canva", icon: "C" },
    { name: "React", icon: "R" },
    { name: "PHP", icon: "P" },
    { name: "MySQL", icon: "SQ" },
    { name: "Meta Ads", icon: "∞" },
    { name: "Google Ads", icon: "G" }
  ],

  /* Chat answers: the first entry whose keywords match the question wins. */
  answers: [
    { keys: ["what do you do", "do you do", "role", "job", "work as", "who are you", "who is"],
      text: "Vibhav is a pre-sales consultant: he qualifies leads, runs discovery and demos, answers RFIs/RFPs and turns client needs into clear software solutions." },
    { keys: ["experience", "years", "months", "career", "background", "worked"],
      text: "41 months in pre-sales across software sales, business analysis and proposal management — currently at Dogma Group. Before that he founded and ran a software company and worked as a senior software developer." },
    { keys: ["contact", "reach", "email", "mail", "hire", "call", "linkedin"],
      text: "Email shreshth.vibhav@gmail.com or use the “Book a Call” button at the top of the page." },
    { keys: ["skill", "stack", "tool", "tech", "know"],
      text: "BANT qualification, solution selling, BPMN 2.0, gap analysis, Dynamics 365, Advanced Excel, React POCs, Figma, Claude, Meta Ads and PHP/MySQL." },
    { keys: ["education", "mba", "study", "college", "degree", "iim", "thapar"],
      text: "MBA from IIM Bodh Gaya and a B.E. from Thapar Institute of Engineering & Technology." },
    { keys: ["brand", "portfolio", "site", "experiment"],
      text: "This site is Vibhav's branding lab — built with Claude to learn how identity, design and code come together." }
  ],
  fallback: "I'm not sure about that one. Try asking about his work, experience, skills or how to contact him."
};

window.answerQuestion = function (q) {
  const s = String(q || "").toLowerCase();
  const hit = window.DATA.answers.find(a => a.keys.some(k => s.includes(k)));
  return hit ? hit.text : window.DATA.fallback;
};
