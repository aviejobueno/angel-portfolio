export type PortfolioIcon =
  | "backend"
  | "api"
  | "microservices"
  | "architecture"
  | "database"
  | "modernization"
  | "ai"
  | "leadership"
  | "delivery"
  | "analysis"
  | "contact"
  | "projects";

export type Locale = "en" | "es";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  es: "ES",
};

export const portfolioContent = {
  en: {
    seo: {
      title:
        "Ángel Viejobueno | Senior .NET Developer, .NET Architect & Semantic Kernel RAG",
      description:
        "Senior .NET Developer and .NET Architect specialized in ASP.NET Core, Microservices, Clean Architecture, Semantic Kernel and RAG in .NET for SMEs and enterprise teams.",
      jobTitle:
        "Senior .NET Developer, .NET Architect and Semantic Kernel RAG specialist",
      keywords: [
        "Senior .NET Developer",
        ".NET Developer",
        ".NET Architect",
        "Senior .NET Architect",
        "Semantic Kernel",
        "RAG in .NET",
        "RAG .NET",
        "ASP.NET Core",
        "Microservices",
        "Clean Architecture",
        "Hexagonal Architecture",
        "Modular Monoliths",
        "Vertical Slices",
        "Backend Developer",
        "Microsoft Stack Tech Lead",
        "AI-assisted software engineering",
      ],
    },
    navigationItems: [
      { label: "About", href: "#about" },
      { label: "Expertise", href: "#expertise" },
      { label: "Experience", href: "#experience" },
      { label: "Principles", href: "#principles" },
      { label: "Stack", href: "#tech-stack" },
      { label: "SMEs", href: "#pymes" },
      { label: "Contact", href: "#contact" },
    ],
    availability: {
      label: "Limited availability",
      cta: "Let’s discuss options",
    },
    profile: {
      name: "Ángel Viejobueno",
      role: "Senior .NET Developer | .NET Architect | Semantic Kernel, RAG in .NET & Microservices",
      summary:
        "Senior .NET Developer and .NET Architect with 25+ years of experience designing enterprise-grade .NET systems, leading modern backend architectures, and applying Semantic Kernel, RAG in .NET and AI-assisted workflows to accelerate code analysis, delivery and product-oriented solution building.",
      locationLabel:
        "Available for international teams, consulting and freelance collaboration",
      primaryCta: { label: "View Experience", href: "#experience" },
      skillsCta: { label: "View Skills", href: "#tech-stack" },
      secondaryCta: { label: "Download CV", href: "/Angel-CV-EN.pdf" },
      tertiaryCta: { label: "Contact Me", href: "#contact" },
    },
    hero: {
      badge: "Modern .NET Architecture, Microservices and applied AI",
      titlePrefix: "Microsoft Stack Tech Lead",
      titleMain: "Modern .NET Architecture",
      titleAccent: "Microservices & AI-Accelerated Engineering",
      metrics: [
        { value: "25+", label: "Years building on the Microsoft stack" },
        { value: "Modern Architecture", label: "Microservices, Modular Monoliths, Hexagonal Architecture and Vertical Slices" },
        { value: "AI-accelerated", label: "Workflows for code analysis and faster delivery" },
      ],
      terminalFile: "architecture-workflow.log",
      terminalLines: [
        "define service and module boundaries",
        "apply Vertical Slices and Clean Architecture where they add clarity",
        "configure Claude Code and Codex workflows for code analysis",
        "ship backend systems and AI-enabled products with business value",
      ],
      systemViewTitle: "System view",
      systemViewText: "Architecture, delivery and AI workflow perspective",
      activeSignalsTitle: "Active signals",
      systemSignals: [
        "ASP.NET Core",
        "Microservices",
        "Modular Monoliths",
        "RAG + AI workflows",
      ],
      focusTitle: "Focus",
      focusText:
        "Modern .NET backend architecture, scalable API platforms, pragmatic patterns and AI-assisted engineering that speeds up delivery without compromising technical quality.",
      trustLabel: "Core toolkit",
      trustItems: ["ASP.NET Core", "Microservices", "Clean Architecture", "OpenAI API"],
    },
    about: {
      eyebrow: "About",
      title:
        "Senior .NET Developer and .NET Architect shaped by modern architecture, enterprise rigor and practical execution.",
      description:
        "A backend-focused profile combining long-term Microsoft stack depth with strong architectural criteria around Microservices, Modular Monoliths, Vertical Slices, Hexagonal Architecture, Clean Architecture, Semantic Kernel, RAG in .NET and AI-accelerated software delivery.",
      highlights: [
        "25+ years as a Senior .NET Developer building backend systems and enterprise platforms on Microsoft technologies.",
        "Deep experience across ASP.NET Core, Web APIs, SQL Server, PostgreSQL, Entity Framework Core and scalable backend design.",
        "Strong technical leadership with a pragmatic mindset around service boundaries, maintainability, modularity and long-term evolution.",
        "Current focus on AI-assisted engineering, advanced Claude Code and Codex workflows, code analysis and RAG in .NET application patterns with Semantic Kernel and business value.",
      ],
    },
    expertise: {
      eyebrow: "Core Expertise",
      title:
        "Capabilities centered on modern backend architecture, clear system design and high-leverage engineering workflows.",
      description:
        "Positioned for CTOs, technical leaders and product teams that need senior backend judgment in architecture, delivery strategy and applied AI engineering.",
      items: [
        {
          title: "Backend Engineering",
          description:
            "Design and implementation of reliable backend services with strong attention to maintainability, performance and production-fit engineering decisions.",
          icon: "backend" as PortfolioIcon,
        },
        {
          title: "ASP.NET Core & Web APIs",
          description:
            "API platforms with clean contracts, dependable evolution paths and implementation patterns suited for long-lived enterprise systems.",
          icon: "api" as PortfolioIcon,
        },
        {
          title: "Microservices Architecture",
          description:
            "Service decomposition driven by domain boundaries, team ownership, operational clarity and realistic delivery constraints.",
          icon: "microservices" as PortfolioIcon,
        },
        {
          title: "Modular Monoliths & Vertical Slices",
          description:
            "Architecture choices that balance modularity, simplicity and speed, using Vertical Slices when they improve feature autonomy and code clarity.",
          icon: "architecture" as PortfolioIcon,
        },
        {
          title: "Clean Architecture & CQRS",
          description:
            "Pragmatic application of Layered Design and Command-Query Separation to improve structure, testability and change safety.",
          icon: "architecture" as PortfolioIcon,
        },
        {
          title: "SQL Server / PostgreSQL / EF Core",
          description:
            "Persistence strategies focused on correctness, performance and a clean relationship between domain behavior and data access.",
          icon: "database" as PortfolioIcon,
        },
        {
          title: "AI-Assisted Development",
          description:
            "Use of Claude Code, Codex and OpenAI API workflows for code analysis, implementation acceleration, refactoring, documentation and review support.",
          icon: "ai" as PortfolioIcon,
        },
        {
          title: "Technical Leadership",
          description:
            "Architecture reviews, technical guidance and engineering direction aimed at shipping dependable systems with senior-level judgment.",
          icon: "leadership" as PortfolioIcon,
        },
      ],
    },
    experience: {
      eyebrow: "Experience Highlights",
      title: "Impact described as architectural contribution, technical leadership and delivery value.",
      description:
        "A concise overview of the kind of modern backend work Ángel brings to product teams, enterprise platforms and architecture-heavy engagements.",
      items: [
        {
          title: "Modern backend architecture",
          summary:
            "Design of backend solutions around Microservices, Modular Monoliths, Vertical Slice thinking and pragmatic architectural boundaries that support real delivery needs.",
          bullets: [
            "Evaluation of when to split services and when to keep systems modular within a monolith for better simplicity and control.",
            "Emphasis on maintainable structures, clean modules and technical choices aligned with long-term product evolution.",
          ],
        },
        {
          title: "API design and enterprise integration",
          summary:
            "Implementation of ASP.NET Core and Web API solutions with clear contracts, predictable behaviors and fit-for-purpose integration strategies.",
          bullets: [
            "Attention to API consistency, validation, security boundaries and sustainable versioning decisions.",
            "Experience aligning backend interfaces with operational and business realities in enterprise environments.",
          ],
        },
        {
          title: "Clean Architecture, CQRS and modular codebases",
          summary:
            "Application of pragmatic architectural patterns to keep codebases understandable, testable and ready to evolve without unnecessary complexity.",
          bullets: [
            "Use of Layered Architecture, Vertical Slices and Command-Query Separation where they increase clarity and reduce friction.",
            "Preference for solutions that improve team productivity and structural quality rather than pattern-driven over-engineering.",
          ],
        },
        {
          title: "AI-accelerated engineering workflows",
          summary:
            "Adoption of Claude Code, Codex and OpenAI-based workflows to accelerate code understanding, implementation, review, documentation and technical analysis.",
          bullets: [
            "Definition of prompts, context rules, agent behaviors and review loops for safer and more productive AI-assisted development.",
            "Use of AI as an engineering multiplier for faster execution while preserving technical judgment and architectural control.",
          ],
        },
        {
          title: "Applied AI and RAG-oriented backend work",
          summary:
            "Exploration and implementation of backend AI patterns focused on retrieval, contextual assistance and applications that provide concrete operational value.",
          bullets: [
            "Integration thinking around vector databases, retrieval pipelines and backend orchestration for knowledge-driven use cases.",
            "Focus on turning AI capabilities into usable internal tools, product features and faster engineering workflows.",
          ],
        },
      ],
    },
    caseStudy: {
      eyebrow: "Featured Case Study",
      title: "AI-Accelerated Modern .NET Architecture & Delivery",
      intro:
        "A representative work style centered on modern .NET architecture decisions, AI-assisted code analysis and delivery workflows that improve speed, clarity and solution quality across backend platforms and product-oriented systems.",
      mapTitle: "Delivery map",
      legacyTitle: "Architecture drivers",
      legacyText:
        "Microservices, Modular Monoliths, Vertical Slices, clear API contracts and maintainable module boundaries chosen according to product and team realities.",
      targetTitle: "AI leverage",
      targetText:
        "Claude Code, Codex and OpenAI-powered workflows configured to accelerate analysis, implementation, documentation and technical validation.",
      pillars: [
        {
          label: "Architecture decision-making",
          text: "Selection of the right structural approach for each context, from Modular Monoliths to Microservices, based on complexity, scale and delivery needs.",
        },
        {
          label: "Vertical Slices and Modularity",
          text: "Feature-oriented organization and clean module boundaries to improve autonomy, readability and development flow.",
        },
        {
          label: "Advanced AI workflow configuration",
          text: "Design of prompts, context rules and usage patterns for Claude Code and Codex to speed up engineering without losing control.",
        },
        {
          label: "Code analysis and acceleration",
          text: "AI-assisted review of existing codebases to improve understanding, implementation speed, refactoring support and documentation quality.",
        },
        {
          label: "Applied AI product thinking",
          text: "Use of RAG, retrieval pipelines and backend AI integration patterns to create applications with practical business and operational value.",
        },
      ],
      valueTitle: "Value delivered",
      outcomes: [
        "Faster technical analysis and implementation through context-aware AI workflows.",
        "Clearer backend systems through pragmatic modern architecture choices and better modular boundaries.",
        "Higher delivery leverage by combining senior engineering judgment with AI-assisted execution.",
      ],
    },
    techStack: {
      eyebrow: "Skills",
      title:
        "My technical expertise",
      description:
        "A focused view of the technologies, practices and tools I use to design, modernize and ship backend systems.",
      moreLabel: "More",
      lessLabel: "Less",
      countLabel: "skills",
      viewAllLabel: "View services",
      softSkillsLabel: "Looking for delivery principles?",
      groups: [
        {
          title: "Backend & .NET",
          items: [
            "C#",
            "OOP",
            ".NET",
            ".NET Core",
            "ASP.NET",
            "ASP.NET MVC",
            "ASP.NET Core",
            "Web API",
            "RESTful Services",
            "GraphQL",
            "GraphQL HotChocolate",
            "LINQ",
            "Entity Framework",
            "Entity Framework Core",
            "NuGet Packages",
            "Visual Studio .NET",
            "Visual Studio Code",
            "Rider",
            "ReSharper",
          ],
        },
        {
          title: "Architecture & Practices",
          items: [
            "Microservices",
            "SOA",
            "Modular Monoliths",
            "Vertical Slices",
            "Clean Architecture",
            "CQRS",
            "SOLID",
            "Patterns",
            "TDD",
            "Unit Test",
            "Scrum",
            "Event Source",
            "Code Analysis Workflows",
          ],
        },
        {
          title: "Integration & Messaging",
          items: [
            "MSMQ",
            "RabbitMQ",
            "WCF",
            "WWF",
            "BizTalk Server",
            "TIBCO BW",
            "IBM API Connect",
            "OPC",
            "SCADA",
            "XML",
            "XSD",
          ],
        },
        {
          title: "Databases",
          items: [
            "SQL Server",
            "PostgreSQL",
            "Oracle Database",
            "MongoDB",
            "DynamoDB",
            "Redis",
            "Qdrant",
            "Chroma",
            "T-SQL",
            "PL/SQL",
          ],
        },
        {
          title: "Cloud / DevOps",
          items: [
            "Azure",
            "AWS",
            "Docker",
            "Kubernetes",
            "OpenShift",
            "Azure DevOps",
            "Git",
            "GitHub",
            "Bitbucket",
            "TFS",
            "Jenkins",
            "CI/CD",
            "IIS",
          ],
        },
        {
          title: "Testing & Quality",
          items: [
            "xUnit Framework",
            "Moq",
            "Serilog",
            "Autofac IoC Container",
            "Unity IoC Container",
            "Enterprise Library",
          ],
        },
        {
          title: "AI Engineering",
          items: [
            "Claude Code",
            "Codex",
            "OpenAI API",
            "Semantic Kernel",
            "RAG",
            "Prompt Engineering",
            "Vector Databases",
          ],
        },
        {
          title: "Additional Exposure",
          items: [
            "Java",
            "Spring Boot STS",
            "Python",
            "AppFabric",
            "SharePoint Server",
            "HTML",
            "JavaScript",
            "Node.js",
          ],
        },
      ],
    },
    services: {
      eyebrow: "What I Can Help With",
      title:
        "Consulting-ready services as a Senior .NET Developer, .NET Architect and applied AI engineer.",
      description:
        "Structured around the type of work international companies, product teams, SMEs and consulting clients typically need from a Senior .NET Developer, .NET Architect and Semantic Kernel RAG specialist.",
      items: [
        {
          title: "Senior .NET Developer services",
          description:
            "Implementation of robust backend services, APIs and platform components for modern .NET environments.",
          icon: "backend" as PortfolioIcon,
        },
        {
          title: "Microservices and Modular Monolith Architecture",
          description:
            "Definition of service boundaries, module design and architecture strategies that fit both product complexity and team maturity.",
          icon: "microservices" as PortfolioIcon,
        },
        {
          title: "Vertical Slice and Clean Architecture guidance",
          description:
            "Pragmatic use of Vertical Slices, Layered Architecture boundaries and CQRS to improve code clarity and delivery flow.",
          icon: "architecture" as PortfolioIcon,
        },
        {
          title: "ASP.NET Core API design",
          description:
            "Design and implementation of maintainable, secure and evolution-friendly backend APIs.",
          icon: "api" as PortfolioIcon,
        },
        {
          title: "Technical leadership for Microsoft stack teams",
          description:
            "Architecture reviews, standards definition and senior technical direction for backend-focused teams.",
          icon: "leadership" as PortfolioIcon,
        },
        {
          title: "AI-assisted development workflows",
          description:
            "Adoption and configuration of Claude Code, Codex and context-aware AI workflows to accelerate engineering processes.",
          icon: "ai" as PortfolioIcon,
        },
        {
          title: "RAG and AI-enabled backend prototypes",
          description:
            "Design of Semantic Kernel and RAG in .NET solutions that turn documents, procedures and internal knowledge into practical business value.",
          icon: "analysis" as PortfolioIcon,
        },
        {
          title: "Codebase analysis and modernization strategy",
          description:
            "Technical assessment of existing systems to identify architecture opportunities, delivery bottlenecks and pragmatic evolution paths.",
          icon: "delivery" as PortfolioIcon,
        },
      ],
    },
    principles: {
      eyebrow: "Principles",
      title: "How I design and deliver software in real-world product environments.",
      description:
        "A pragmatic set of engineering principles inspired by enterprise delivery and modern AI-assisted workflows.",
      items: [
        {
          category: "Architecture",
          title: "Pragmatic boundaries",
          text: "Service and module boundaries are shaped by team ownership, business complexity and operational reality.",
        },
        {
          category: "Code Quality",
          title: "Clarity over ceremony",
          text: "Patterns are used when they reduce friction and improve maintainability, not as architecture theater.",
        },
        {
          category: "Delivery",
          title: "Fail fast, iterate safely",
          text: "Early validation, observable releases and incremental evolution keep delivery predictable.",
        },
        {
          category: "Collaboration",
          title: "Transparent execution",
          text: "Proactive communication, explicit tradeoffs and documented decisions keep teams aligned.",
        },
      ],
    },
    toolbelt: {
      eyebrow: "Toolbelt",
      title: "Everyday tools used to ship robust backend systems faster.",
      description:
        "From architecture to delivery workflows, this stack supports velocity without sacrificing reliability.",
      items: [
        ".NET",
        "ASP.NET Core",
        "Entity Framework Core",
        "PostgreSQL",
        "SQL Server",
        "Docker",
        "Azure",
        "GitHub Actions",
        "OpenAI API",
        "Codex",
        "Claude Code",
        "RAG Pipelines",
      ],
    },
    pymes: {
      eyebrow: "AI for SMEs",
      title: "A private AI assistant that answers with your company's real knowledge.",
      description:
        "Most SMEs do not need another generic chatbot. They need a private assistant built on their business documentation, with semantic search, answers backed by sources, permission-aware access, traceability and the option to integrate with internal processes.",
      specialist:
        "Delivered as a focused pilot or a production-ready .NET solution, from document audit and secure ingestion to integrations, quality evaluation and ongoing support.",
      primaryCta: { label: "Explore a pilot project", href: "#contact" },
      secondaryCta: { label: "See technical stack", href: "#tech-stack" },
      outcomesTitle: "Business problems it reduces",
      outcomes: [
        {
          value: "Less time lost searching",
          label: "Teams find the right procedure, file or answer without digging through folders, emails and outdated copies.",
        },
        {
          value: "More consistent answers",
          label: "Sales, operations and support can respond using the same approved information instead of personal memory.",
        },
        {
          value: "AI with control",
          label: "Answers are grounded in selected company sources, with a backend designed for traceability and business rules.",
        },
      ],
      useCasesTitle: "Practical RAG use cases for SMEs",
      useCases: [
        {
          title: "Sales and support",
          text: "Answer product, pricing, warranty, delivery or client questions using approved commercial and operational documentation.",
        },
        {
          title: "Operations assistant",
          text: "Guide recurring tasks, check procedures and reduce interruptions when teams need to know how something is done.",
        },
        {
          title: "Document intelligence",
          text: "Search, compare and summarize contracts, policies, technical files, product sheets or client documentation.",
        },
        {
          title: "Onboarding and retention",
          text: "Help new employees learn internal processes faster and preserve critical knowledge when experienced people are unavailable.",
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Project entries designed to evolve into deeper architecture and AI case studies.",
      description:
        "Structured to support future expansion with repositories, demos and delivery narratives aligned with modern backend and applied AI work.",
      featuredLabel: "Featured build",
      problemTitle: "Problem",
      valueTitle: "Value",
      items: [
        {
          title: "AI-assisted code analysis workflow",
          description:
            "A structured workflow that uses Claude Code, Codex and OpenAI-based prompts to accelerate understanding of large codebases and support safer implementation decisions.",
          stack: [".NET", "Claude Code", "Codex", "OpenAI API", "Prompt Engineering"],
          problem:
            "Large codebases slow down onboarding, implementation and refactoring when architectural context is hard to surface quickly.",
          value:
            "Improves engineering speed through better technical context, faster code analysis and more consistent documentation support.",
          links: [
            { label: "GitHub", href: "https://github.com/your-handle" },
            { label: "Case Notes", href: "#case-study" },
          ],
        },
        {
          title: "Modern .NET backend architecture",
          description:
            "Reference work around Microservices, Modular Monoliths, Web APIs and Vertical Slices for maintainable backend platform design.",
          stack: [".NET", "ASP.NET Core", "Microservices", "Modular Monoliths", "CQRS"],
          problem:
            "Teams need scalable architecture without unnecessary complexity or pattern-heavy overhead.",
          value:
            "Creates clearer backend structures, better module boundaries and more predictable long-term system evolution.",
          links: [
            { label: "GitHub", href: "https://github.com/your-handle" },
            { label: "Discuss", href: "#contact" },
          ],
        },
        {
          title: "RAG-based backend application prototype",
          description:
            "Backend exploration for retrieval-based workflows and AI-assisted applications oriented toward document understanding and contextual assistance.",
          stack: ["OpenAI API", "RAG", "Qdrant", "Semantic Kernel", "ASP.NET Core"],
          problem:
            "Organizations need AI features that turn internal knowledge into usable answers and workflow support.",
          value:
            "Demonstrates how backend engineering and applied AI can combine to create tools with direct operational usefulness.",
          links: [
            { label: "GitHub", href: "https://github.com/your-handle" },
            { label: "Contact", href: "#contact" },
          ],
        },
        {
          title: "AI-accelerated portfolio platform",
          description:
            "A custom portfolio designed to present senior backend architecture expertise, modern .NET positioning and applied AI engineering capabilities.",
          stack: ["React", "TypeScript", "Tailwind CSS"],
          problem:
            "Presenting a senior technical profile requires sharper positioning than a generic developer portfolio template.",
          value:
            "Provides a strong brand foundation for architecture, backend consulting and AI-assisted engineering positioning.",
          links: [
            { label: "Live Page", href: "#top" },
            { label: "GitHub", href: "https://github.com/your-handle" },
          ],
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title:
        "Let’s discuss modern backend architecture, AI-assisted engineering or product-oriented RAG solutions.",
      description:
        "Open to conversations with recruiters, CTOs, tech leads, consulting clients and SMEs looking for strong .NET backend architecture, AI workflow acceleration, RAG applications and senior engineering judgment.",
      linkedinIntro:
        "The easiest way to start a professional conversation is through LinkedIn. Send me a message and tell me what kind of backend, AI or RAG challenge you are exploring.",
      links: [
        {
          label: "LinkedIn",
          value: "linkedin.com/in/angelviejobueno",
          href: "https://www.linkedin.com/in/angelviejobueno",
          icon: "leadership" as PortfolioIcon,
        },
      ],
    },
    footer: {
      links: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/angelviejobueno" },
      ],
    },
  },
  es: {
    seo: {
      title:
        "Ángel Viejobueno | Senior .NET Developer, Arquitecto .NET y RAG con Semantic Kernel",
      description:
        "Portfolio de Senior .NET Developer y Arquitecto .NET especializado en ASP.NET Core, Microservicios, Clean Architecture, Semantic Kernel y RAG en .NET para Pymes y equipos enterprise.",
      jobTitle:
        "Senior .NET Developer, Arquitecto .NET y especialista en RAG con Semantic Kernel",
      keywords: [
        "Senior .NET Developer",
        ".NET Developer",
        "Arquitecto .NET",
        ".NET Architect",
        "Arquitectura .NET",
        "Semantic Kernel",
        "RAG en .NET",
        "RAG con Semantic Kernel",
        "ASP.NET Core",
        "Microservicios",
        "Clean Architecture",
        "Arquitectura Hexagonal",
        "Monolitos Modulares",
        "Vertical Slices",
        "Desarrollador .NET",
        "Backend .NET",
        "Pymes IA",
        "Aplicaciones RAG a medida",
      ],
    },
    navigationItems: [
      { label: "Sobre mí", href: "#about" },
      { label: "Especialidad", href: "#expertise" },
      { label: "Experiencia", href: "#experience" },
      { label: "Principios", href: "#principles" },
      { label: "Stack", href: "#tech-stack" },
      { label: "Pymes", href: "#pymes" },
      { label: "Contacto", href: "#contact" },
    ],
    availability: {
      label: "Disponibilidad limitada",
      cta: "Veamos opciones",
    },
    profile: {
      name: "Ángel Viejobueno",
      role: "Senior .NET Developer | Arquitecto .NET | Semantic Kernel, RAG en .NET y Microservicios",
      summary:
        "Senior .NET Developer y Arquitecto .NET con más de 25 años de experiencia diseñando sistemas .NET enterprise, liderando arquitecturas backend modernas y aplicando Semantic Kernel, RAG en .NET y workflows asistidos por IA para acelerar análisis de código, entrega y creación de soluciones con valor de negocio.",
      locationLabel:
        "Disponible para equipos internacionales, consultoría y colaboración freelance",
      primaryCta: { label: "Ver experiencia", href: "#experience" },
      skillsCta: { label: "Ver skills", href: "#tech-stack" },
      secondaryCta: { label: "Descargar CV", href: "/Angel-CV-ES.pdf" },
      tertiaryCta: { label: "Contactar", href: "#contact" },
    },
    hero: {
      badge: "Arquitectura .NET Moderna, Microservicios e IA aplicada",
      titlePrefix: "Microsoft Stack Tech Lead",
      titleMain: "Arquitectura .NET moderna",
      titleAccent: "Microservicios e Ingeniería Acelerada por IA",
      metrics: [
        { value: "25+", label: "Años construyendo sobre Microsoft stack" },
        { value: "Arquitectura Moderna", label: "Microservicios, Monolitos Modulares, Arquitectura Hexagonal y Vertical Slices" },
        { value: "IA acelerando", label: "Workflows para análisis de código y delivery más rápido" },
      ],
      terminalFile: "workflow-arquitectura.log",
      terminalLines: [
        "definir límites de servicios y módulos",
        "aplicar Vertical Slices y Clean Architecture cuando aportan claridad",
        "configurar workflows avanzados de Claude Code y Codex para analizar código",
        "crear sistemas backend y aplicaciones con IA que aporten valor real",
      ],
      systemViewTitle: "Vista del sistema",
      systemViewText: "Arquitectura, entrega y perspectiva de workflows con IA",
      activeSignalsTitle: "Señales activas",
      systemSignals: [
        "ASP.NET Core",
        "Microservicios",
        "Monolitos Modulares",
        "RAG + workflows IA",
      ],
      focusTitle: "Enfoque",
      focusText:
        "Arquitectura backend moderna en .NET, plataformas API escalables, patrones pragmáticos e ingeniería asistida por IA para acelerar entrega sin comprometer calidad técnica.",
      trustLabel: "Toolkit principal",
      trustItems: ["ASP.NET Core", "Microservicios", "Clean Architecture", "OpenAI API"],
    },
    about: {
      eyebrow: "Sobre mí",
      title:
        "Senior .NET Developer y Arquitecto .NET con arquitectura moderna, rigor enterprise y ejecución pragmática.",
      description:
        "Un perfil centrado en backend que combina profundidad real sobre Microsoft stack con criterio arquitectónico en Microservicios, Monolitos Modulares, Vertical Slices, Arquitectura Hexagonal, Clean Architecture, Semantic Kernel, RAG en .NET e ingeniería acelerada por IA.",
      highlights: [
        "Más de 25 años como Senior .NET Developer construyendo sistemas backend y plataformas enterprise sobre tecnologías Microsoft.",
        "Experiencia profunda en ASP.NET Core, Web APIs, SQL Server, PostgreSQL, Entity Framework Core y diseño backend escalable.",
        "Liderazgo técnico sólido con enfoque pragmático sobre límites de servicios, modularidad, mantenibilidad y evolución a largo plazo.",
        "Foco actual en ingeniería asistida por IA, configuración avanzada de Claude Code y Codex, análisis de código y patrones RAG en .NET con Semantic Kernel orientados a soluciones con valor.",
      ],
    },
    expertise: {
      eyebrow: "Especialidad",
      title:
        "Capacidades centradas en arquitectura backend moderna, diseño claro de sistemas y workflows de ingeniería de alto apalancamiento.",
      description:
        "Pensado para CTOs, tech leads y equipos de producto que necesitan criterio senior en arquitectura, estrategia de delivery e IA aplicada a ingeniería.",
      items: [
        {
          title: "Backend Engineering",
          description:
            "Diseño e implementación de servicios backend fiables con especial atención a mantenibilidad, rendimiento y decisiones de ingeniería listas para producción.",
          icon: "backend" as PortfolioIcon,
        },
        {
          title: "ASP.NET Core y Web APIs",
          description:
            "Plataformas API con contratos limpios, rutas de evolución sostenibles y patrones adecuados para sistemas enterprise de larga vida.",
          icon: "api" as PortfolioIcon,
        },
        {
          title: "Arquitectura de Microservicios",
          description:
            "Descomposición de servicios guiada por límites de dominio, ownership de equipos, claridad operativa y restricciones reales de entrega.",
          icon: "microservices" as PortfolioIcon,
        },
        {
          title: "Monolitos Modulares y Vertical Slices",
          description:
            "Decisiones arquitectónicas que equilibran modularidad, simplicidad y velocidad, usando Vertical Slices cuando mejoran la autonomía funcional y la claridad del código.",
          icon: "architecture" as PortfolioIcon,
        },
        {
          title: "Clean Architecture y CQRS",
          description:
            "Aplicación pragmática de Diseño por Capas y Command-Query Separation para mejorar estructura, testabilidad y seguridad del cambio.",
          icon: "architecture" as PortfolioIcon,
        },
        {
          title: "SQL Server / PostgreSQL / EF Core",
          description:
            "Estrategias de persistencia centradas en corrección, rendimiento y una relación limpia entre comportamiento de dominio y acceso a datos.",
          icon: "database" as PortfolioIcon,
        },
        {
          title: "Desarrollo asistido por IA",
          description:
            "Uso de Claude Code, Codex y OpenAI API para análisis de código, aceleración de implementación, refactorización, documentación y soporte a revisión técnica.",
          icon: "ai" as PortfolioIcon,
        },
        {
          title: "Liderazgo técnico",
          description:
            "Revisión de arquitectura, guía técnica y dirección de ingeniería orientada a entregar sistemas sólidos con criterio senior.",
          icon: "leadership" as PortfolioIcon,
        },
      ],
    },
    experience: {
      eyebrow: "Experiencia destacada",
      title: "Impacto descrito como contribución arquitectónica, liderazgo técnico y valor de entrega.",
      description:
        "Una visión compacta del tipo de trabajo backend moderno que Ángel aporta a equipos de producto, plataformas enterprise y proyectos con peso arquitectónico.",
      items: [
        {
          title: "Arquitectura backend moderna",
          summary:
            "Diseño de soluciones backend alrededor de Microservicios, Monolitos Modulares, pensamiento por Vertical Slices y límites arquitectónicos pragmáticos alineados con necesidades reales de entrega.",
          bullets: [
            "Evaluación de cuándo separar servicios y cuándo mantener sistemas modulares dentro de un monolito para ganar simplicidad y control.",
            "Énfasis en estructuras mantenibles, módulos claros y decisiones técnicas alineadas con la evolución del producto a largo plazo.",
          ],
        },
        {
          title: "Diseño de APIs e integración enterprise",
          summary:
            "Implementación de soluciones ASP.NET Core y Web API con contratos claros, comportamientos previsibles y estrategias de integración adecuadas al contexto.",
          bullets: [
            "Atención a consistencia API, validación, límites de seguridad y decisiones de versionado sostenibles.",
            "Experiencia alineando interfaces backend con realidades operativas y de negocio en entornos enterprise.",
          ],
        },
        {
          title: "Clean Architecture, CQRS y codebases modulares",
          summary:
            "Aplicación de patrones arquitectónicos pragmáticos para mantener codebases comprensibles, testeables y preparadas para evolucionar sin complejidad innecesaria.",
          bullets: [
            "Uso de Arquitectura por Capas, Vertical Slices y Command-Query Separation cuando aumentan la claridad y reducen fricción.",
            "Preferencia por soluciones que mejoran productividad del equipo y calidad estructural frente a la sobreingeniería basada en patrones.",
          ],
        },
        {
          title: "Workflows de ingeniería acelerados por IA",
          summary:
            "Adopción de Claude Code, Codex y flujos basados en OpenAI para acelerar comprensión de código, implementación, revisión, documentación y análisis técnico.",
          bullets: [
            "Definición de prompts, reglas de contexto, comportamientos de agentes y ciclos de revisión para una ingeniería asistida por IA más segura y productiva.",
            "Uso de IA como multiplicador de ingeniería para ejecutar más rápido manteniendo criterio técnico y control arquitectónico.",
          ],
        },
        {
          title: "IA aplicada y trabajo backend orientado a RAG",
          summary:
            "Exploración e implementación de patrones de IA backend enfocados en retrieval, asistencia contextual y aplicaciones que aportan valor operativo concreto.",
          bullets: [
            "Pensamiento de integración alrededor de vector databases, pipelines de recuperación y orquestación backend para casos intensivos en conocimiento.",
            "Foco en convertir capacidades de IA en herramientas internas útiles, features de producto y workflows de ingeniería más rápidos.",
          ],
        },
      ],
    },
    caseStudy: {
      eyebrow: "Caso destacado",
      title: "Arquitectura .NET moderna y delivery acelerado por IA",
      intro:
        "Una forma de trabajo representativa centrada en decisiones de arquitectura .NET moderna, análisis de código asistido por IA y workflows de delivery que mejoran velocidad, claridad y calidad de solución en plataformas backend y sistemas orientados a producto.",
      mapTitle: "Mapa de delivery",
      legacyTitle: "Drivers arquitectónicos",
      legacyText:
        "Microservicios, Monolitos Modulares, Vertical Slices, contratos API claros y límites de módulos mantenibles elegidos según la realidad del producto y del equipo.",
      targetTitle: "Palanca de IA",
      targetText:
        "Workflows con Claude Code, Codex y OpenAI configurados para acelerar análisis, implementación, documentación y validación técnica.",
      pillars: [
        {
          label: "Toma de decisiones arquitectónicas",
          text: "Selección del enfoque estructural adecuado en cada contexto, desde Monolitos Modulares hasta Microservicios, según complejidad, escala y necesidades de entrega.",
        },
        {
          label: "Vertical Slices y Modularidad",
          text: "Organización por funcionalidades y límites limpios entre módulos para mejorar autonomía, legibilidad y flujo de desarrollo.",
        },
        {
          label: "Configuración avanzada de workflows IA",
          text: "Diseño de prompts, reglas de contexto y patrones de uso para Claude Code y Codex que aceleren ingeniería sin perder control.",
        },
        {
          label: "Análisis de código y aceleración",
          text: "Revisión asistida por IA de codebases para mejorar entendimiento, velocidad de implementación, apoyo a refactorización y calidad documental.",
        },
        {
          label: "Visión de producto con IA aplicada",
          text: "Uso de RAG, pipelines de recuperación y patrones de integración backend para crear aplicaciones con valor práctico para negocio y operación.",
        },
      ],
      valueTitle: "Valor aportado",
      outcomes: [
        "Análisis técnico e implementación más rápidos gracias a workflows IA sensibles al contexto.",
        "Sistemas backend más claros mediante decisiones pragmáticas de arquitectura moderna y mejores límites modulares.",
        "Mayor palanca de entrega al combinar criterio senior de ingeniería con ejecución asistida por IA.",
      ],
    },
    techStack: {
      eyebrow: "Skills",
      title:
        "Mi expertise técnico",
      description:
        "Una vista clara de las tecnologías, prácticas y herramientas que uso para diseñar, modernizar y entregar sistemas backend.",
      moreLabel: "Más",
      lessLabel: "Menos",
      countLabel: "skills",
      viewAllLabel: "Ver servicios",
      softSkillsLabel: "Ver principios de delivery",
      groups: [
        {
          title: "Backend & .NET",
          items: [
            "C#",
            "OOP",
            ".NET",
            ".NET Core",
            "ASP.NET",
            "ASP.NET MVC",
            "ASP.NET Core",
            "Web API",
            "RESTful Services",
            "GraphQL",
            "GraphQL HotChocolate",
            "LINQ",
            "Entity Framework",
            "Entity Framework Core",
            "NuGet Packages",
            "Visual Studio .NET",
            "Visual Studio Code",
            "Rider",
            "ReSharper",
          ],
        },
        {
          title: "Arquitectura y prácticas",
          items: [
            "Microservices",
            "SOA",
            "Modular Monoliths",
            "Vertical Slices",
            "Clean Architecture",
            "CQRS",
            "SOLID",
            "Patterns",
            "TDD",
            "Unit Test",
            "Scrum",
            "Event Source",
            "Code Analysis Workflows",
          ],
        },
        {
          title: "Integración y mensajería",
          items: [
            "MSMQ",
            "RabbitMQ",
            "WCF",
            "WWF",
            "BizTalk Server",
            "TIBCO BW",
            "IBM API Connect",
            "OPC",
            "SCADA",
            "XML",
            "XSD",
          ],
        },
        {
          title: "Bases de datos",
          items: [
            "SQL Server",
            "PostgreSQL",
            "Oracle Database",
            "MongoDB",
            "DynamoDB",
            "Redis",
            "Qdrant",
            "Chroma",
            "T-SQL",
            "PL/SQL",
          ],
        },
        {
          title: "Cloud / DevOps",
          items: [
            "Azure",
            "AWS",
            "Docker",
            "Kubernetes",
            "OpenShift",
            "Azure DevOps",
            "Git",
            "GitHub",
            "Bitbucket",
            "TFS",
            "Jenkins",
            "CI/CD",
            "IIS",
          ],
        },
        {
          title: "Testing y calidad",
          items: [
            "xUnit Framework",
            "Moq",
            "Serilog",
            "Autofac IoC Container",
            "Unity IoC Container",
            "Enterprise Library",
          ],
        },
        {
          title: "AI Engineering",
          items: [
            "Claude Code",
            "Codex",
            "OpenAI API",
            "Semantic Kernel",
            "RAG",
            "Prompt Engineering",
            "Vector Databases",
          ],
        },
        {
          title: "Experiencia adicional",
          items: [
            "Java",
            "Spring Boot STS",
            "Python",
            "AppFabric",
            "SharePoint Server",
            "HTML",
            "JavaScript",
            "Node.js",
          ],
        },
      ],
    },
    services: {
      eyebrow: "Cómo puedo ayudar",
      title:
        "Servicios como Senior .NET Developer, Arquitecto .NET e ingeniero de IA aplicada.",
      description:
        "Estructurados alrededor del tipo de trabajo que suelen necesitar empresas internacionales, equipos de producto, Pymes y clientes de consultoría de un Senior .NET Developer, Arquitecto .NET y especialista en RAG con Semantic Kernel.",
      items: [
        {
          title: "Servicios Senior .NET Developer",
          description:
            "Implementación de servicios backend, APIs y componentes de plataforma robustos para entornos .NET modernos.",
          icon: "backend" as PortfolioIcon,
        },
        {
          title: "Arquitectura de Microservicios y Monolitos Modulares",
          description:
            "Definición de límites de servicio, diseño modular y estrategias de arquitectura alineadas con complejidad de producto y madurez del equipo.",
          icon: "microservices" as PortfolioIcon,
        },
        {
          title: "Guía de Vertical Slices y Clean Architecture",
          description:
            "Uso pragmático de Vertical Slices, límites de Arquitectura por Capas y CQRS para mejorar claridad del código y flujo de entrega.",
          icon: "architecture" as PortfolioIcon,
        },
        {
          title: "ASP.NET Core API design",
          description:
            "Diseño e implementación de APIs backend mantenibles, seguras y preparadas para evolucionar.",
          icon: "api" as PortfolioIcon,
        },
        {
          title: "Technical leadership for Microsoft stack teams",
          description:
            "Revisión de arquitectura, definición de estándares y dirección técnica senior para equipos enfocados en backend.",
          icon: "leadership" as PortfolioIcon,
        },
        {
          title: "AI-assisted development workflows",
          description:
            "Adopción y configuración de Claude Code, Codex y workflows IA basados en contexto para acelerar procesos de ingeniería.",
          icon: "ai" as PortfolioIcon,
        },
        {
          title: "Prototipos backend con RAG e IA",
          description:
            "Diseño de soluciones con Semantic Kernel y RAG en .NET para convertir documentación, procesos y conocimiento interno en valor práctico para negocio.",
          icon: "analysis" as PortfolioIcon,
        },
        {
          title: "Codebase analysis and modernization strategy",
          description:
            "Evaluación técnica de sistemas existentes para detectar oportunidades arquitectónicas, cuellos de botella de delivery y caminos de evolución pragmáticos.",
          icon: "delivery" as PortfolioIcon,
        },
      ],
    },
    principles: {
      eyebrow: "Principios",
      title: "Cómo diseño y entrego software en entornos de producto reales.",
      description:
        "Un conjunto pragmático de principios de ingeniería inspirado en delivery enterprise y workflows modernos asistidos por IA.",
      items: [
        {
          category: "Arquitectura",
          title: "Límites pragmáticos",
          text: "Los límites de servicios y módulos se definen por ownership, complejidad de negocio y realidad operativa.",
        },
        {
          category: "Calidad",
          title: "Claridad por encima de ceremonia",
          text: "Los patrones se aplican cuando reducen fricción y mejoran mantenibilidad, no como postureo arquitectónico.",
        },
        {
          category: "Delivery",
          title: "Fallar pronto, iterar seguro",
          text: "Validación temprana, releases observables y evolución incremental para una entrega más predecible.",
        },
        {
          category: "Colaboración",
          title: "Ejecución transparente",
          text: "Comunicación proactiva, tradeoffs explícitos y decisiones documentadas para mantener al equipo alineado.",
        },
      ],
    },
    toolbelt: {
      eyebrow: "Toolbelt",
      title: "Herramientas del día a día para entregar backend robusto con más velocidad.",
      description:
        "Desde arquitectura hasta workflows de entrega, este stack maximiza velocidad sin sacrificar fiabilidad.",
      items: [
        ".NET",
        "ASP.NET Core",
        "Entity Framework Core",
        "PostgreSQL",
        "SQL Server",
        "Docker",
        "Azure",
        "GitHub Actions",
        "OpenAI API",
        "Codex",
        "Claude Code",
        "Pipelines RAG",
      ],
    },
    pymes: {
      eyebrow: "IA para Pymes",
      title: "Un asistente privado de IA que responde con el conocimiento real de tu empresa.",
      description:
        "La mayoría de Pymes no necesitan otro chatbot genérico. Necesitan un asistente privado construido sobre su documentación empresarial, con búsqueda semántica, respuestas con fuentes, control de permisos, trazabilidad y posibilidad de integrarse con procesos internos.",
      specialist:
        "Entregado como piloto acotado o solución .NET lista para producción, desde auditoría documental e ingesta segura hasta integraciones, evaluación de calidad y soporte continuo.",
      primaryCta: { label: "Explorar un piloto", href: "#contact" },
      secondaryCta: { label: "Ver stack técnico", href: "#tech-stack" },
      outcomesTitle: "Problemas de negocio que reduce",
      outcomes: [
        {
          value: "Menos tiempo buscando",
          label: "El equipo encuentra el procedimiento, archivo o respuesta correcta sin revisar carpetas, correos y copias desactualizadas.",
        },
        {
          value: "Respuestas más consistentes",
          label: "Ventas, operaciones y soporte pueden responder con la misma información aprobada, no solo con memoria personal.",
        },
        {
          value: "IA con control",
          label: "Las respuestas se basan en fuentes seleccionadas de la empresa, con un backend pensado para trazabilidad y reglas de negocio.",
        },
      ],
      useCasesTitle: "Casos RAG prácticos para Pymes",
      useCases: [
        {
          title: "Ventas y soporte",
          text: "Responder dudas de producto, precios, garantías, entregas o clientes usando documentación comercial y operativa aprobada.",
        },
        {
          title: "Asistente operativo",
          text: "Guiar tareas recurrentes, comprobar procedimientos y reducir interrupciones cuando el equipo necesita saber cómo se hace algo.",
        },
        {
          title: "Inteligencia documental",
          text: "Buscar, comparar y resumir contratos, políticas, documentos técnicos, fichas de producto o documentación de clientes.",
        },
        {
          title: "Onboarding y retención",
          text: "Ayudar a nuevas incorporaciones a aprender procesos internos más rápido y conservar conocimiento crítico cuando falta personal experto.",
        },
      ],
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Entradas de proyecto preparadas para evolucionar hacia casos de estudio más profundos en arquitectura e IA.",
      description:
        "Estructuradas para crecer con repositorios, demos y narrativas de entrega alineadas con backend moderno e IA aplicada.",
      featuredLabel: "Proyecto destacado",
      problemTitle: "Problema",
      valueTitle: "Valor",
      items: [
        {
          title: "Workflow de análisis de código asistido por IA",
          description:
            "Un flujo estructurado que usa Claude Code, Codex y prompts basados en OpenAI para acelerar el entendimiento de grandes codebases y apoyar decisiones de implementación más seguras.",
          stack: [".NET", "Claude Code", "Codex", "OpenAI API", "Prompt Engineering"],
          problem:
            "Los codebases grandes ralentizan onboarding, implementación y refactorización cuando el contexto arquitectónico cuesta de aflorar rápido.",
          value:
            "Mejora la velocidad de ingeniería mediante mejor contexto técnico, análisis de código más rápido y soporte documental más consistente.",
          links: [
            { label: "GitHub", href: "https://github.com/your-handle" },
            { label: "Notas del caso", href: "#case-study" },
          ],
        },
        {
          title: "Arquitectura backend moderna en .NET",
          description:
            "Trabajo de referencia sobre Microservicios, Monolitos Modulares, Web APIs y Vertical Slices para diseñar plataformas backend mantenibles.",
          stack: [".NET", "ASP.NET Core", "Microservices", "Modular Monoliths", "CQRS"],
          problem:
            "Los equipos necesitan arquitectura escalable sin complejidad innecesaria ni sobrecarga excesiva de patrones.",
          value:
            "Crea estructuras backend más claras, mejores límites modulares y una evolución del sistema más predecible a largo plazo.",
          links: [
            { label: "GitHub", href: "https://github.com/your-handle" },
            { label: "Hablemos", href: "#contact" },
          ],
        },
        {
          title: "Prototipo backend con RAG",
          description:
            "Exploración backend para workflows basados en recuperación y aplicaciones asistidas por IA orientadas a comprensión documental y ayuda contextual.",
          stack: ["OpenAI API", "RAG", "Qdrant", "Semantic Kernel", "ASP.NET Core"],
          problem:
            "Las organizaciones necesitan features de IA que conviertan conocimiento interno en respuestas útiles y soporte real al workflow.",
          value:
            "Demuestra cómo backend engineering e IA aplicada pueden combinarse para crear herramientas con utilidad operativa directa.",
          links: [
            { label: "GitHub", href: "https://github.com/your-handle" },
            { label: "Contacto", href: "#contact" },
          ],
        },
        {
          title: "Portfolio acelerado por IA",
          description:
            "Un portfolio a medida diseñado para presentar experiencia senior en arquitectura backend, posicionamiento .NET moderno y capacidades de ingeniería aplicada con IA.",
          stack: ["React", "TypeScript", "Tailwind CSS"],
          problem:
            "Presentar un perfil técnico senior exige un posicionamiento más fino que el de un portfolio genérico de desarrollador.",
          value:
            "Aporta una base sólida de marca personal para arquitectura, consultoría backend e ingeniería asistida por IA.",
          links: [
            { label: "Ver página", href: "#top" },
            { label: "GitHub", href: "https://github.com/your-handle" },
          ],
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title:
        "Hablemos sobre arquitectura backend moderna, ingeniería asistida por IA o soluciones RAG orientadas a producto.",
      description:
        "Abierto a conversar con recruiters, CTOs, tech leads, Pymes y clientes de consultoría que busquen arquitectura .NET sólida, aceleración con IA, aplicativos RAG y criterio senior de ingeniería.",
      linkedinIntro:
        "La forma más directa de iniciar una conversación profesional es a través de LinkedIn. Escríbeme y cuéntame qué reto backend, IA o RAG estás explorando.",
      links: [
        {
          label: "LinkedIn",
          value: "linkedin.com/in/angelviejobueno",
          href: "https://www.linkedin.com/in/angelviejobueno",
          icon: "leadership" as PortfolioIcon,
        },
      ],
    },
    footer: {
      links: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/angelviejobueno" },
      ],
    },
  },
} as const;

export type PortfolioContent = (typeof portfolioContent)[Locale];
