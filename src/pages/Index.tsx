import { useState, useEffect, type MouseEvent, type ReactNode } from "react";
import { Activity, ArrowRight, Building, Calendar, CheckCircle2, ChevronDown, ClipboardList, Filter, LayoutDashboard, Mail, Maximize2, MessageSquare, MousePointerClick, Network, Paintbrush, Rocket, ShoppingBag, Store, Target, TrendingUp, Users, Workflow, Wrench, Zap, Bot, Code, Palette, FileText, PenTool, Video, MessageCircle, Cloud } from "lucide-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import executiveCalendarOverview from "@/assets/executive-calendar-management/overview.png";
import executiveCalendarTracker from "@/assets/executive-calendar-management/tracker.png";
import meetingPreparationTracker from "@/assets/executive-calendar-management/meeting-preparation.png";
import taskDeadlineTracker from "@/assets/executive-calendar-management/task-deadline-tracker.png";
import taskDeadlineFollowUp from "@/assets/executive-calendar-management/task-deadline-follow-up.png";
import meetingAgenda1 from "@/assets/meeting-management/meeting-agenda-1.png";
import meetingAgenda2 from "@/assets/meeting-management/meeting-agenda-2.png";
import meetingMinutes1 from "@/assets/meeting-management/meeting-minutes-1.png";
import meetingMinutes2 from "@/assets/meeting-management/meeting-minutes-2.png";
import meetingMinutes3 from "@/assets/meeting-management/meeting-minutes-3.png";
import meetingPreparations from "@/assets/meeting-management/meeting-preparations.png";
import weeklyOperations from "@/assets/meeting-management/weekly-operations.png";
import followUpSummary from "@/assets/meeting-management/follow-up-summary.png";
import fileOrganizationDocumentManagement from "@/assets/file-organization/file-organization-document-management.png";
import inboxManagement1 from "@/assets/inbox-management/1.png";
import inboxManagement2 from "@/assets/inbox-management/2.png";
import inboxManagement3 from "@/assets/inbox-management/3.png";
import inboxManagement4 from "@/assets/inbox-management/4.png";
import inboxManagement5 from "@/assets/inbox-management/5.png";
import inboxManagementGmail from "@/assets/inbox-management/gmail.png";

const PHRASES = [
  "Healthcare Virtual Assistant",
  "GoHighLevel Support",
  "Shopify Virtual Assistant",
  "Administrative/Executive Support"
];

const MediaCard = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => {
  const openFullscreen = (event: MouseEvent<HTMLButtonElement>) => {
    const image = event.currentTarget.parentElement?.querySelector("img");
    image?.requestFullscreen?.();
  };

  return (
    <figure className="group overflow-hidden rounded-3xl bg-card border border-white/5">
      <div className="relative bg-black/20 p-2">
        <img src={src} alt={alt} className="media-zoom w-full h-auto max-h-[75vh] object-contain" />
        <button type="button" onClick={openFullscreen} aria-label={`View ${alt} fullscreen`} title="View fullscreen" className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors">
          <Maximize2 className="h-4 w-4" />
        </button>
      </div>
      {caption && <figcaption className="p-6 text-muted-foreground leading-relaxed">{caption}</figcaption>}
    </figure>
  );
};

const InfoHeading = ({ icon: Icon, children }: { icon: typeof Target; children: ReactNode }) => (
  <h5 className="flex items-center gap-3 text-lg font-bold">
    <Icon className="h-5 w-5 text-primary" />
    {children}
  </h5>
);

const InfoCard = ({ icon, title, children, highlighted = false }: { icon: typeof Target; title: string; children: ReactNode; highlighted?: boolean }) => (
  <div className={`ghl-info-card p-6 md:p-8 rounded-3xl border ${highlighted ? "bg-primary/[0.02] border-primary/20" : "bg-card border-white/5"}`}>
    <InfoHeading icon={icon}>{title}</InfoHeading>
    <div className="mt-4">{children}</div>
  </div>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 text-muted-foreground">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 leading-relaxed">
        <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

type ServiceItem = {
  icon: typeof Target;
  title: string;
  service: string;
  result: string;
};

const ServiceAccordion = ({ item, color, iconBackground }: { item: ServiceItem; color: string; iconBackground: string }) => (
  <details className="group rounded-2xl border border-white/10 bg-card transition-colors hover:border-white/20 open:border-white/20">
    <summary className="flex cursor-pointer list-none items-center gap-4 p-4 md:p-5">
      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconBackground} ${color}`}>
        <item.icon className="h-5 w-5" />
      </div>
      <h3 className="min-w-0 flex-1 text-base font-semibold leading-snug text-foreground">{item.title}</h3>
      <div className="flex shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <span className="hidden sm:inline">View details</span>
        <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
      </div>
    </summary>
    <div className="border-t border-white/10 px-4 pb-5 pt-4 md:px-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <span className={`mb-1 block text-xs font-bold uppercase tracking-wider ${color}`}>The Service</span>
          <p className="text-sm leading-relaxed text-muted-foreground">{item.service}</p>
        </div>
        <div>
          <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-foreground">The Result</span>
          <p className="text-sm leading-relaxed text-muted-foreground">{item.result}</p>
        </div>
      </div>
    </div>
  </details>
);

const Index = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);
  const [activeSection, setActiveSection] = useState("services");

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const i = loopNum % PHRASES.length;
    const fullText = PHRASES[i];

    if (isDeleting) {
      if (text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      } else {
        timer = setTimeout(() => {
          setText(fullText.substring(0, text.length - 1));
          setTypingSpeed(30);
        }, typingSpeed);
      }
    } else {
      if (text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      } else {
        timer = setTimeout(() => {
          setText(fullText.substring(0, text.length + 1));
          setTypingSpeed(80);
        }, typingSpeed);
      }
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".section-reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      }),
      { threshold: 0, rootMargin: "0px" }
    );

    sections.forEach((section) => {
      observer.observe(section);
      const bounds = section.getBoundingClientRect();
      if (bounds.top < window.innerHeight && bounds.bottom > 0) {
        section.classList.add("is-visible");
      }
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = ["services", "process", "work"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      }),
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary relative overflow-hidden">
      {/* Background patterns */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-background">
        {/* Modern Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_40%,transparent_100%)]"></div>
        
        {/* Ambient Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/15 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#95bf47]/15 blur-[120px] pointer-events-none"></div>
        <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] rounded-full bg-white/5 blur-[150px] pointer-events-none"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/50 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">
            Donabel<span className="text-primary">.</span>
          </div>
          <div className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {[["services", "Services"], ["process", "Process"], ["work", "Selected work"]].map(([id, label]) => (
              <a key={id} href={`#${id}`} className={`relative py-2 transition-colors ${activeSection === id ? "text-foreground" : "hover:text-foreground"}`}>
                {label}
                <span className={`absolute inset-x-0 bottom-0 h-px origin-left bg-primary transition-transform ${activeSection === id ? "scale-x-100" : "scale-x-0"}`} />
              </a>
            ))}
          </div>
          <a
            href="https://wa.me/639368326488"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium border h-10 px-4 py-2 rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:text-white transition-all"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-reveal pt-32 pb-20 px-6 container mx-auto">
<div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div className="relative z-10 shrink-0 -mt-8 lg:-mt-40 flex flex-col items-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem] lg:w-[30rem] lg:h-[30rem] group flex items-end justify-center">
              {/* Enhanced Animated Glows */}
              <div className="absolute inset-0 bg-primary/40 rounded-full blur-[80px] -z-10 animate-glow"></div>
              <div className="absolute inset-[-10%] bg-[#81a1c1]/30 rounded-full blur-[100px] -z-10 translate-x-8 translate-y-8 animate-glow" style={{ animationDelay: '1.5s', animationDuration: '5s' }}></div>
              <div className="absolute inset-[10%] bg-[#95bf47]/20 rounded-full blur-[90px] -z-10 -translate-x-8 -translate-y-4 animate-glow" style={{ animationDelay: '3s', animationDuration: '6s' }}></div>
              
              {/* Headshot with smooth bottom fade */}
              <div className="relative w-full h-full z-10 flex items-end justify-center">
                <img
                  src="https://vibe.filesafe.space/1778945198587131825/attachments/be73af2f-afe9-466c-8fa2-64cb6a2fbe91.png"
                  alt="Donabel Headshot"
                  className="w-[95%] h-full object-contain object-bottom relative z-10 drop-shadow-[0_10px_40px_rgba(246,174,85,0.15)] scale-105 origin-bottom [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
                />
              </div>
            </div>
            
            {/* Badge moved back to the bottom */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background/95 text-primary border border-primary/30 text-sm font-semibold shadow-[0_0_20px_-5px_hsl(var(--primary)/0.4)] backdrop-blur-xl relative z-30 -mt-6 lg:-mt-8 whitespace-nowrap">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              Available for Freelance Work
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">Hi there. I'm</p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-foreground">DONABEL TOLOMIA</h1>
              <div className="h-8 md:h-10 flex items-center justify-center lg:justify-start">
                <h2 className={`text-2xl md:text-3xl font-semibold transition-colors duration-300 ${["text-[#81a1c1]", "text-primary", "text-[#95bf47]", "text-[#c45cff]"][loopNum % PHRASES.length]}`}>{text || "\u00A0"}<span className={`animate-[pulse_1s_ease-in-out_infinite] border-r-2 ml-1 h-6 md:h-8 inline-block align-middle transition-colors duration-300 ${["border-[#81a1c1]", "border-primary", "border-[#95bf47]", "border-[#c45cff]"][loopNum % PHRASES.length]}`}></span></h2>
              </div>
              <div className="w-full pt-4 max-w-3xl mx-auto lg:mx-0">
                <p className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
                  Dependable coordination, growth systems, and executive support that keep your business moving while you stay focused on the work that matters.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-10 w-full">
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg w-full sm:w-auto transition-colors"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://wa.me/639368326488"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium border rounded-full border-white/20 bg-transparent text-foreground hover:text-primary hover:border-primary/60 h-14 px-8 text-lg w-full sm:w-auto transition-all"
              >
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-reveal py-16 md:py-20 px-6 relative bg-white/[0.02] border-y border-white/[0.05]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Practical support that keeps operations organized, customer experiences strong, and growth systems moving.
            </p>
          </div>

          {/* Healthcare VA Services */}
          <div className="mb-10 md:mb-12">
            <div className="mb-5 flex items-center gap-6">
              <h3 className="text-2xl font-bold tracking-tight text-[#81a1c1]">Healthcare Virtual Assistant</h3>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-[#81a1c1]/50 to-transparent"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Calendar,
                  title: "Patient Appointment & Admin Support",
                  service: "Comprehensive virtual assistance encompassing appointment scheduling, calendar management, and essential medical administrative tasks.",
                  result: "Streamlined daily operations and reduced administrative burden, resulting in a seamless experience for both staff and patients."
                },
                {
                  icon: MessageSquare,
                  title: "Patient Communication & Follow-Up",
                  service: "Dedicated management of patient inquiries, automated appointment reminders, and post-visit follow-ups.",
                  result: "Enhanced patient retention and significantly reduced no-show rates through consistent, professional communication."
                },
                {
                  icon: Activity,
                  title: "Healthcare Workflow & Virtual Assistance",
                  service: "Tailored operational support including secure document organization, workflow optimization, and dedicated administrative assistance.",
                  result: "Optimized clinic workflows that empower healthcare providers to focus entirely on patient care rather than backend operations."
                },
                {
                  icon: Building,
                  title: "Medical Office Coordination Support",
                  service: "End-to-end practice support covering inbox management, secure records organization, and daily task coordination.",
                  result: "A highly organized, efficient medical office environment with consistent communication and reliable daily operations."
                }
              ].map((item) => <ServiceAccordion key={item.title} item={item} color="text-[#81a1c1]" iconBackground="bg-[#81a1c1]/10" />)}
            </div>
          </div>

          {/* GoHighLevel Services */}
          <div className="mb-10 md:mb-12">
            <div className="mb-5 flex items-center gap-6">
              <h3 className="text-2xl font-bold tracking-tight text-primary">GoHighLevel Services</h3>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-primary/50 to-transparent"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Filter,
                  title: "High-Conversion Sales Funnels",
                  service: "Strategy, design, and implementation of high-converting landing pages, lead magnets, and sales funnels within GoHighLevel.",
                  result: "I transform cold traffic into qualified leads by building seamless digital journeys that guide prospects from 'curious' to 'customer.'"
                },
                {
                  icon: Workflow,
                  title: "Intelligent Workflow Automation",
                  service: "Architecting custom GHL workflows that trigger instant SMS/Email responses, internal team alerts, and precise lead tagging.",
                  result: "Eliminate 'lead leakage' and manual grunt work with 24/7 automation that ensures every prospect is engaged within seconds."
                },
                {
                  icon: Users,
                  title: "CRM Architecture & Pipeline",
                  service: "Advanced setup of CRM pipelines, list segmentation, and automated engagement tracking.",
                  result: "Gain a 'bird's-eye view' of your sales process. I organize your data so you always know exactly which leads are ready to close."
                },
                {
                  icon: Calendar,
                  title: "Automated Appointment Systems",
                  service: "Integration of smart calendars with automated booking confirmations, 'no-show' recovery sequences, and reminder loops.",
                  result: "A hands-off booking engine that fills your calendar while eliminating back-and-forth scheduling friction."
                },
                {
                  icon: Mail,
                  title: "Multi-Channel Nurture Campaigns",
                  service: "Strategic design of Email and SMS sequences designed to build authority and maintain top-of-mind awareness.",
                  result: "Consistent, value-driven communication that warms up cold leads and increases long-term customer lifetime value."
                },
                {
                  icon: Network,
                  title: "Full-Stack System Integration",
                  service: "Seamlessly connecting GHL with payment gateways (Stripe/PayPal), third-party forms, and external tech stacks.",
                  result: "A unified, 'all-in-one' backend ecosystem where your tools actually talk to each other without technical glitches."
                }
              ].map((item) => <ServiceAccordion key={item.title} item={item} color="text-primary" iconBackground="bg-primary/10" />)}
            </div>
          </div>

          {/* Shopify Services */}
          <div>
            <div className="mb-5 flex items-center gap-6">
              <h3 className="text-2xl font-bold tracking-tight text-[#95bf47]">Shopify Services</h3>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-[#95bf47]/50 to-transparent"></div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Store,
                  title: "Shopify Store Setup & Design",
                  service: "Store creation and theme customization, homepage and collection page setup, and mobile-responsive design optimization.",
                  result: "A visually stunning, fully functional storefront that captures your brand identity and provides a flawless shopping experience on any device."
                },
                {
                  icon: ShoppingBag,
                  title: "Product Listing & Optimization",
                  service: "Product uploads and organization, SEO-friendly product descriptions, and image optimization and formatting.",
                  result: "Highly discoverable products with compelling descriptions and crisp visuals that turn browsers into buyers."
                },
                {
                  icon: TrendingUp,
                  title: "Conversion Optimization (CRO)",
                  service: "Product page improvements, trust badges, reviews, social proof setup, along with upsells, bundles, and cross-sell strategies.",
                  result: "Maximized average order value and increased trust, turning casual visitors into confident, high-paying customers."
                },
                {
                  icon: ClipboardList,
                  title: "Store Management",
                  service: "Order processing and fulfillment support, inventory updates, and app integrations and setup.",
                  result: "A smooth, error-free backend operation that saves you time and ensures your customers receive their orders promptly."
                },
                {
                  icon: MousePointerClick,
                  title: "Customer Experience Optimization",
                  service: "Navigation and user flow improvements, checkout optimization, and basic analytics review and suggestions.",
                  result: "A frictionless buying journey that reduces cart abandonment and encourages repeat purchases."
                }
              ].map((item) => <ServiceAccordion key={item.title} item={item} color="text-[#95bf47]" iconBackground="bg-[#95bf47]/10" />)}
            </div>
          </div>

          {/* Administrative & Executive Services */}
          <div className="mt-10 md:mt-12">
            <div className="mb-5 flex items-center gap-6">
              <h3 className="text-2xl font-bold tracking-tight text-[#c45cff]">Administrative/Executive Support</h3>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-[#c45cff]/50 to-transparent"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Calendar, title: "Executive Calendar & Meeting Coordination", service: "Manage schedules, prepare agendas and materials, document meetings, and keep action items visible from preparation through follow-up.", result: "Leaders stay prepared, meetings produce clear next steps, and important priorities do not slip through the cracks." },
                { icon: Mail, title: "Inbox & Communication Management", service: "Triage incoming messages, identify urgent requests, draft professional responses, and maintain a reliable follow-up queue.", result: "A clearer inbox, quicker response times, and consistent communication with clients, vendors, and internal teams." },
                { icon: ClipboardList, title: "Task, Deadline & Action-Item Tracking", service: "Organize requests, assign ownership, monitor deadlines and dependencies, and proactively follow up on outstanding work.", result: "Teams have accountability and visibility, enabling faster execution and fewer missed commitments." },
                { icon: FileText, title: "Digital File & Document Management", service: "Create organized folder structures, standardize file naming, maintain document indexes, and support version control.", result: "Information is easy to find, documentation stays current, and the business runs with greater clarity and confidence." }
              ].map((item) => <ServiceAccordion key={item.title} item={item} color="text-[#c45cff]" iconBackground="bg-[#c45cff]/10" />)}
            </div>
          </div>
        </div>
      </section>

      {/* How I Help Section */}
      <section className="section-reveal py-14 md:py-16 px-6 relative bg-gradient-to-b from-transparent via-white/[0.02] to-transparent border-y border-white/[0.05]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How I Help Your Business Grow</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Strategic improvements designed to increase conversions and streamline operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {[
              { icon: Store, text: "Optimize your Shopify store for conversions" },
              { icon: Target, text: "Identify gaps in your customer journey" },
              { icon: Workflow, text: "Build automated workflows in GoHighLevel" },
              { icon: Mail, text: "Implement follow-ups (email/SMS)" },
              { icon: TrendingUp, text: "Continuously improve performance" },
              { icon: Activity, text: "Streamline healthcare admin and patient coordination" },
              { icon: Calendar, text: "Keep executive calendars, meetings, and priorities on track", color: "text-[#c45cff]", bg: "bg-[#c45cff]/10 border border-[#c45cff]/10", hover: "hover:border-[#c45cff]/30" },
              { icon: ClipboardList, text: "Turn tasks and action items into clear ownership and follow-through", color: "text-[#c45cff]", bg: "bg-[#c45cff]/10 border border-[#c45cff]/10", hover: "hover:border-[#c45cff]/30" },
              { icon: FileText, text: "Build organized inbox and document systems that save time and reduce risk", color: "text-[#c45cff]", bg: "bg-[#c45cff]/10 border border-[#c45cff]/10", hover: "hover:border-[#c45cff]/30" }
            ].map((item, i) => (
              <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-[#0a0a0a] ${item.hover ?? "hover:border-primary/30"} transition-all group shadow-sm`}>
                <div className={`h-11 w-11 shrink-0 rounded-xl ${item.bg ?? "bg-primary/10 border border-primary/10"} flex items-center justify-center ${item.color ?? "text-primary"} group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold leading-snug text-foreground/90">{item.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section id="process" className="section-reveal py-16 md:py-20 px-6 container mx-auto max-w-6xl">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How I Work</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A streamlined process tailored to your specific platform needs.
          </p>
        </div>

        {/* Healthcare Workflow */}
        <div className="mb-12">
          <div className="mb-6 flex items-center gap-6">
            <h3 className="text-2xl font-bold tracking-tight text-[#81a1c1]">Healthcare Workflow</h3>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-[#81a1c1]/50 to-transparent"></div>
          </div>
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-4 relative">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#81a1c1]/20 to-transparent -z-10"></div>
            {[
              { num: "01", icon: Activity, title: "Understand Practice", desc: "Review current admin processes and patient flow" },
              { num: "02", icon: ClipboardList, title: "Setup & Organize", desc: "Organize calendars, inbox, and communication channels" },
              { num: "03", icon: Users, title: "Implement Systems", desc: "Implement patient coordination and follow-up routines" },
              { num: "04", icon: Calendar, title: "Daily Management", desc: "Ongoing support for appointments and daily admin tasks" },
            ].map((step, i) => (
              <div key={i} className="relative min-w-[78%] snap-start p-6 rounded-2xl border border-white/5 bg-card hover:border-[#81a1c1]/30 transition-all group flex flex-col items-center text-center overflow-hidden md:min-w-0">
                <div className="absolute -top-4 -right-2 text-8xl font-black text-white/[0.02] group-hover:text-[#81a1c1]/[0.05] transition-colors pointer-events-none">{step.num}</div>
                <div className="h-16 w-16 rounded-full bg-background border border-white/10 flex items-center justify-center text-[#81a1c1] mb-6 group-hover:scale-110 transition-transform z-10">
                  <step.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 z-10">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GHL Workflow */}
        <div className="mb-12">
          <div className="mb-6 flex items-center gap-6">
            <h3 className="text-2xl font-bold tracking-tight text-primary">GoHighLevel Workflow</h3>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-primary/50 to-transparent"></div>
          </div>
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-4 relative">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10"></div>
            {[
              { num: "01", icon: Target, title: "Understand Your Business", desc: "I learn about your goals, target audience, and current process" },
              { num: "02", icon: Workflow, title: "Build Your System", desc: "I create your funnel, CRM pipeline, and automation inside GoHighLevel" },
              { num: "03", icon: Zap, title: "Set Up Automation", desc: "I implement follow-ups, workflows, and booking systems" },
              { num: "04", icon: Rocket, title: "Test & Optimize", desc: "I ensure everything runs smoothly and is ready for use" },
            ].map((step, i) => (
              <div key={i} className="relative min-w-[78%] snap-start p-6 rounded-2xl border border-white/5 bg-card hover:border-primary/30 transition-all group flex flex-col items-center text-center overflow-hidden md:min-w-0">
                <div className="absolute -top-4 -right-2 text-8xl font-black text-white/[0.02] group-hover:text-primary/[0.05] transition-colors pointer-events-none">{step.num}</div>
                <div className="h-16 w-16 rounded-full bg-background border border-white/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform z-10">
                  <step.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 z-10">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Shopify Workflow */}
        <div className="mb-12">
          <div className="mb-6 flex items-center gap-6">
            <h3 className="text-2xl font-bold tracking-tight text-[#95bf47]">Shopify Workflow</h3>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-[#95bf47]/50 to-transparent"></div>
          </div>
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 lg:grid-cols-5 relative">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#95bf47]/20 to-transparent -z-10"></div>
            {[
              { num: "01", icon: Store, title: "Review Store", desc: "Review store design and structure" },
              { num: "02", icon: Paintbrush, title: "Optimize Pages", desc: "Optimize product pages" },
              { num: "03", icon: MousePointerClick, title: "Improve UX", desc: "Improve navigation and user experience" },
              { num: "04", icon: ShoppingBag, title: "Add Elements", desc: "Add upsells, bundles, and trust elements" },
              { num: "05", icon: TrendingUp, title: "Prepare Conversions", desc: "Prepare store for higher conversions" },
            ].map((step, i) => (
              <div key={i} className="relative min-w-[78%] snap-start p-5 rounded-2xl border border-white/5 bg-card hover:border-[#95bf47]/30 transition-all group flex flex-col items-center text-center overflow-hidden md:min-w-0">
                <div className="absolute -top-4 -right-2 text-7xl font-black text-white/[0.02] group-hover:text-[#95bf47]/[0.05] transition-colors pointer-events-none">{step.num}</div>
                <div className="h-14 w-14 rounded-full bg-background border border-white/10 flex items-center justify-center text-[#95bf47] mb-5 group-hover:scale-110 transition-transform z-10">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2 z-10">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Administrative & Executive Workflow */}
        <div>
          <div className="mb-6 flex items-center gap-6">
            <h3 className="text-2xl font-bold tracking-tight text-[#c45cff]">Administrative/Executive Workflow</h3>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-[#c45cff]/50 to-transparent"></div>
          </div>
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-4 relative">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#c45cff]/20 to-transparent -z-10"></div>
            {[
              { num: "01", icon: Target, title: "Align on Priorities", desc: "Learn your goals, preferred communication style, and the work that needs attention first" },
              { num: "02", icon: ClipboardList, title: "Create Structure", desc: "Set up clear systems for calendars, inboxes, tasks, documents, and recurring workflows" },
              { num: "03", icon: CheckCircle2, title: "Coordinate & Follow Through", desc: "Track details, manage deadlines, and keep stakeholders informed with timely follow-ups" },
              { num: "04", icon: TrendingUp, title: "Refine for Growth", desc: "Improve routines and reporting so your business gains back time and operates more smoothly" },
            ].map((step, i) => (
              <div key={i} className="relative min-w-[78%] snap-start p-6 rounded-2xl border border-white/5 bg-card hover:border-[#c45cff]/30 transition-all group flex flex-col items-center text-center overflow-hidden md:min-w-0">
                <div className="absolute -top-4 -right-2 text-8xl font-black text-white/[0.02] group-hover:text-[#c45cff]/[0.05] transition-colors pointer-events-none">{step.num}</div>
                <div className="h-16 w-16 rounded-full bg-background border border-white/10 flex items-center justify-center text-[#c45cff] mb-6 group-hover:scale-110 transition-transform z-10"><step.icon className="h-7 w-7" /></div>
                <h3 className="text-xl font-bold mb-3 z-10">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Works - Reduced for brevity, showing structure */}
      <section id="work" className="section-reveal py-24 px-6 relative bg-white/[0.02] border-y border-white/[0.05]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Works</h2>
          </div>

          <Tabs defaultValue="ghl" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="h-auto flex-wrap justify-center gap-1 bg-card border border-white/10 p-1.5 rounded-2xl shadow-[0_12px_40px_-24px_hsl(var(--primary)/0.7)]">
                <TabsTrigger 
                  value="ghl" 
                  className="relative rounded-xl px-4 sm:px-8 py-3 text-base transition-all after:absolute after:inset-x-4 after:bottom-1 after:h-0.5 after:origin-center after:scale-x-0 after:bg-current after:transition-transform data-[state=active]:-translate-y-0.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-[0_8px_18px_-10px_hsl(var(--primary))] data-[state=active]:after:scale-x-100"
                >
                  GoHighLevel
                </TabsTrigger>
                <TabsTrigger 
                  value="shopify" 
                  className="relative rounded-xl px-4 sm:px-8 py-3 text-base transition-all after:absolute after:inset-x-4 after:bottom-1 after:h-0.5 after:origin-center after:scale-x-0 after:bg-current after:transition-transform data-[state=active]:-translate-y-0.5 data-[state=active]:bg-[#95bf47] data-[state=active]:text-white data-[state=active]:shadow-[0_8px_18px_-10px_rgba(149,191,71,0.8)] data-[state=active]:after:scale-x-100"
                >
                  Shopify
                </TabsTrigger>
                <TabsTrigger 
                  value="admin" 
                  className="relative rounded-xl px-4 sm:px-8 py-3 text-base transition-all after:absolute after:inset-x-4 after:bottom-1 after:h-0.5 after:origin-center after:scale-x-0 after:bg-current after:transition-transform data-[state=active]:-translate-y-0.5 data-[state=active]:bg-[#c45cff] data-[state=active]:text-[#160d1f] data-[state=active]:shadow-[0_8px_18px_-10px_rgba(196,92,255,0.8)] data-[state=active]:after:scale-x-100"
                >
                  Administrative/Executive Support
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="ghl" className="ghl-portfolio mt-0 focus-visible:outline-none focus-visible:ring-0">
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="ghl-case-study">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Case Study 01</div>
                  <h4 className="text-3xl md:text-4xl font-bold mb-8">GHL CRM & Contact Management</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-4 flex items-center gap-3"><Target className="w-5 h-5 text-primary" /> Objective</h5>
                        <p className="text-muted-foreground leading-relaxed">Build a structured CRM system that organizes contacts, captures custom information, maintains clean records, and enables targeted segmentation.</p>
                      </div>
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-6 flex items-center gap-3"><LayoutDashboard className="w-5 h-5 text-primary" /> Skills Demonstrated</h5>
                        <ul className="space-y-4">
                          {[
                            "Contact management",
                            "Custom fields",
                            "Tags",
                            "CRM segmentation",
                            "CSV importing",
                            "Duplicate management",
                            "DND management",
                            "Multi-condition filtering"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="p-6 md:p-8 rounded-3xl bg-primary/[0.02] border border-primary/20">
                        <h5 className="text-lg font-bold mb-6 flex items-center gap-3"><Zap className="w-5 h-5 text-primary" /> Result</h5>
                        <p className="text-foreground leading-relaxed">Created a structured contact database that can be segmented by lead status, customer information, and business-specific criteria, providing a foundation for targeted campaigns and automated workflows.</p>
                      </div>
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-4 flex items-center gap-3"><Wrench className="w-5 h-5 text-primary" /> Tools</h5>
                        <p className="text-muted-foreground">GoHighLevel</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    {[
                      {
                        src: "/crm/contact-list.png",
                        title: "Contact Database Setup",
                        caption: "Created and organized a structured contact database with contact information and CRM tags."
                      },
                      {
                        src: "/crm/custom-fields.png",
                        title: "Custom CRM Fields",
                        caption: "Created custom fields to capture business-specific lead information for future segmentation and automation."
                      },
                      {
                        src: "/crm/hot-lead-filter.png",
                        title: "Lead Segmentation",
                        caption: "Created and applied lead-status tags and used CRM filtering to isolate specific lead segments for targeted follow-up."
                      },
                      {
                        src: "/crm/csv-import.png",
                        title: "CRM Data Import",
                        caption: "Imported a batch of contacts into GHL and organized the records for CRM management."
                      },
                      {
                        src: "/crm/dnd.png",
                        title: "Communication Preference Management",
                        caption: "Configured SMS Do Not Disturb settings to prevent unwanted text communication."
                      },
                      {
                        src: "/crm/dental-crm.png",
                        title: "Healthcare CRM Structure",
                        caption: "Designed a fictional dental clinic CRM structure using lifecycle stages, custom fields, and contact segmentation."
                      }
                    ].map((screenshot) => (
                      <MediaCard key={screenshot.src} src={screenshot.src} alt={screenshot.title} caption={screenshot.caption} />
                    ))}
                  </div>
                </div>
                <div className="ghl-case-study">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Case Study 02</div>
                  <h4 className="text-3xl md:text-4xl font-bold mb-8">GHL Pipelines & Opportunity Management</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <InfoCard icon={Target} title="Objective"><p className="text-muted-foreground leading-relaxed">Build and manage sales pipelines that visually represent different customer journeys, track opportunities through each stage, and monitor potential revenue.</p></InfoCard>
                    <InfoCard icon={Wrench} title="Tools"><BulletList items={["GoHighLevel"]} /></InfoCard>
                    <InfoCard icon={LayoutDashboard} title="Skills Demonstrated"><BulletList items={["Pipeline creation and customization", "Opportunity management", "Sales stage configuration", "Deal value and close date tracking", "Lost opportunity management", "Multiple pipeline design", "Pipeline segmentation", "Pipeline aging preparation"]} /></InfoCard>
                    <InfoCard icon={Zap} title="Result" highlighted><p className="text-foreground leading-relaxed">Created and managed two sales pipelines: a high-ticket Website Design process and a recurring Home Cleaning service process. Demonstrated opportunity movement, deal values, close dates, and structures matched to different sales cycles.</p></InfoCard>
                  </div>
                  <h5 className="text-2xl font-bold mt-10 mb-4">Website Design Sales</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <MediaCard src="/pipelines/pipeline-stages-1.png" alt="Screenshot 1 - Pipeline Stages" caption="Sales Pipeline Setup - Built a Website Design sales pipeline with defined stages and created opportunities with assigned deal values to represent the sales process from new lead to close. Opportunity & Pipeline Management - Managed opportunities through different sales stages, recorded a lost-deal reason, and maintained deal values to reflect the current sales pipeline." />
                    <MediaCard src="/pipelines/pipeline-stages-1-2.png" alt="Screenshot 1.2 - Pipeline Stages" />
                    <MediaCard src="/pipelines/maria-opportunity-details.png" alt="Screenshot 2 - Maria's Opportunity Details" caption="Opportunity Data Management - Configured opportunity details including pipeline stage, deal value, and expected close date for sales tracking and forecasting." />
                  </div>
                  <h5 className="text-2xl font-bold mt-10 mb-4">Home Cleaning Pipeline</h5>
                  <MediaCard src="/pipelines/home-cleaning-pipeline.png" alt="Screenshot 3 - Home Cleaning Pipeline" caption="Different Businesses Require Different Pipeline Logic. Website Design is high-ticket, has a longer sales cycle, proposal and negotiation, and is a one-time project. Home Cleaning is lower-cost, faster-moving, quote and scheduling based, and recurring. These structures match each business model's sales and service-delivery needs." />
                  <MediaCard src="/pipelines/pipeline-aging.png" alt="Screenshot 4 - Pipeline Aging" caption="Pipeline Aging Preparation - Created an intentionally aging opportunity to simulate a stalled lead and provide a test case for future automated follow-up workflows." />
                </div>
                <div className="ghl-case-study">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Case Study 03</div>
                  <h4 className="text-3xl md:text-4xl font-bold mb-8">GHL Calendars & Appointment Booking</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <InfoCard icon={Target} title="Objective"><p className="text-muted-foreground leading-relaxed">Build and manage appointment calendars that provide a professional booking experience, automate confirmations and reminders, support multiple appointment types, and prevent scheduling conflicts.</p></InfoCard>
                    <InfoCard icon={Wrench} title="Tools"><BulletList items={["GoHighLevel", "Google Calendar"]} /></InfoCard>
                    <InfoCard icon={LayoutDashboard} title="Skills Demonstrated"><BulletList items={["Calendar creation and customization", "Availability and working hours configuration", "Appointment duration and buffer settings", "Public booking page setup", "Booking confirmation and reminder automation", "Multiple calendar management", "Google Calendar synchronization", "Double-booking prevention", "Appointment testing and validation"]} /></InfoCard>
                    <InfoCard icon={Zap} title="Result" highlighted><p className="text-foreground leading-relaxed">Created and tested 30-minute Discovery Call, 60-minute Consultation, and 15-minute Follow-Up Call calendars with different availability windows, automated reminders, Google Calendar synchronization, and conflict prevention.</p></InfoCard>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"><MediaCard src="/calendar/discovery-call.png" alt="Screenshot 1 - Discovery Call" /><MediaCard src="/calendar/follow-up-call.png" alt="Screenshot 2 - Follow-up Call" /><MediaCard src="/calendar/consultation.png" alt="Screenshot 3 - Consultation" /></div>
                </div>
                <div className="ghl-case-study">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Case Study 04</div><h4 className="text-3xl md:text-4xl font-bold mb-8">GHL Forms & Surveys</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <InfoCard icon={Target} title="Objective"><p className="text-muted-foreground leading-relaxed">Create customer-facing forms and surveys that collect structured lead information and send submitted data into GHL CRM for segmentation, qualification, and automation.</p></InfoCard>
                    <InfoCard icon={Wrench} title="Tools"><BulletList items={["GoHighLevel", "GHL Forms & Surveys", "GHL CRM", "Custom Fields"]} /></InfoCard>
                    <InfoCard icon={LayoutDashboard} title="Skills Demonstrated"><BulletList items={["Form and survey creation", "Custom field mapping", "Dropdown field configuration", "CRM data capture", "Lead information collection", "Form customization and branding", "Form publishing and testing", "Lead segmentation preparation", "Multi-step survey setup"]} /></InfoCard>
                    <InfoCard icon={Zap} title="Result" highlighted><p className="text-foreground leading-relaxed">Created and tested a Website Design Intake Form capturing contact information, service interest, and budget range, mapped to CRM fields for segmentation, qualification, and workflows.</p></InfoCard>
                  </div>
                  <div className="mt-8 rounded-3xl border border-white/5 bg-card p-6 md:p-8">
                    <h5 className="mb-5 text-lg font-bold">How It Works: Form → CRM → Automation</h5>
                    <ol className="space-y-4">
                      {[
                        "Lead completes the form and provides contact details, service interest, and budget.",
                        "Data enters the CRM through mapped Service Interest and Budget fields.",
                        "Data becomes actionable for segmentation, qualification, and workflow triggers."
                      ].map((step, index) => (
                        <li key={step} className="flex items-start gap-4 text-muted-foreground leading-relaxed">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">{index + 1}</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                    <p className="mt-5 border-t border-white/10 pt-5 text-sm leading-relaxed text-muted-foreground">
                      Multiple test entries were submitted and verified on the corresponding CRM contact records.
                    </p>
                  </div>
                  <div className="mx-auto mt-8 max-w-3xl"><MediaCard src="/form/website-design-intake.png" alt="Screenshot 1 - Website Design Intake Form" /></div>
                </div>
                <div className="ghl-case-study">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Case Study 05</div>
                  <h4 className="text-3xl md:text-4xl font-bold mb-8">Workflows & Automation</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      ["1. New Lead Instant Response", "Create an automated first response whenever a new lead submits a form or enters the CRM, acknowledging the lead immediately while notifying the team.", "GoHighLevel CRM • Workflows • Forms • Email • SMS • Tags • Custom Fields", "Workflow automation • Form-to-CRM automation • Lead capture • SMS/email automation • Internal notifications • Contact tagging", "When a new lead submits the intake form, GHL creates or updates the contact, applies a lead tag, sends an SMS or email confirmation, and notifies the assigned team member. Reduces response time and prevents overlooked leads.", "/workflow/new-lead-instant-response.png"],
                      ["2. Lead Qualification", "Automatically evaluate incoming leads based on their information and route them according to qualification status.", "GoHighLevel CRM • Workflows • Forms/Surveys • If/Else Conditions • Custom Fields • Tags • Pipelines", "Conditional logic • Lead qualification • CRM segmentation • Pipeline management • Automated lead routing", "The workflow checks service interest, budget, or business needs, then routes qualified leads to the appropriate pipeline stage and others to nurture. Helps teams prioritize high-potential leads.", "/workflow/lead-qualification.png"],
                      ["3. Unresponsive Lead Nurture", "Automatically follow up with leads who have not responded, maintaining engagement without manual follow-ups.", "GoHighLevel CRM • Workflows • SMS • Email • Wait Steps • If/Else Conditions • Tags", "Multi-step automation • Lead nurturing • Conditional logic • Follow-up sequencing", "After an initial contact, the workflow waits, checks for a reply or booking, and sends additional follow-ups only when needed. Creates consistent follow-up while reducing manual chasing.", "/workflow/unresponsive-lead-nurture.png"],
                      ["5. Lost Opportunity Re-Engagement", "Reconnect with leads whose opportunities were marked as lost and give them another opportunity to engage.", "GoHighLevel CRM • Opportunities • Workflows • Tags • SMS • Email • Wait Steps • Pipeline", "Re-engagement automation • Opportunity management • Segmentation • Multi-step campaigns", "When an opportunity is marked lost, the workflow waits before sending a re-engagement message, then stops, notifies the team, or continues based on the lead response.", "/workflow/lost-opportunity-reengagement.png"],
                      ["6. Appointment Booking Confirmation", "Automatically confirm newly booked appointments and provide important appointment details.", "GoHighLevel Calendars • Workflows • SMS • Email • CRM • Custom Values", "Calendar automation • Appointment workflows • Automated confirmations • Custom values", "When a contact books, GHL sends a confirmation with the appointment date, time, and meeting details, reducing uncertainty and saving staff time.", "/workflow/appointment-confirmation.png"],
                      ["7. Appointment Reminder", "Reduce missed appointments by automatically reminding contacts before their scheduled appointment.", "GoHighLevel Calendars • Workflows • SMS • Email • Wait Steps • Custom Values", "Appointment automation • Time-based workflows • SMS/email reminders • Calendar integration", "The workflow waits until the appropriate time and sends reminders, such as one day before and a few hours before the appointment, supporting attendance.", "/workflow/appointment-reminder.png"],
                      ["8. No-Show Recovery", "Follow up with contacts who miss their appointment and encourage them to reschedule.", "GoHighLevel Calendars • Workflows • Appointment Status • If/Else Conditions • SMS • Email • Calendar • Pipeline", "Appointment-status automation • Conditional workflows • No-show recovery • Rescheduling automation • Lead nurturing", "When an appointment is marked No-Show, the workflow asks whether the contact would like to reschedule and can stop or move them back into the pipeline when they respond or book again.", "/workflow/no-show.png"]
                    ].map(([title, objective, tools, skills, howItWorks, image]) => (
                      <details key={title} className="ghl-workflow group rounded-3xl border border-white/5 bg-card">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 md:p-8">
                          <div className="flex min-w-0 items-center gap-3"><Workflow className="h-5 w-5 shrink-0 text-primary" /><span className="text-xl font-bold">{title}</span></div>
                          <ChevronDown className="ghl-workflow-chevron h-5 w-5 shrink-0 text-primary" />
                        </summary>
                        <div className="ghl-workflow-panel border-t border-white/5 px-6 pb-6 md:px-8 md:pb-8">
                          <div className="ghl-workflow-details mt-6">
                            <section className="ghl-workflow-detail"><InfoHeading icon={Target}>Objective</InfoHeading><p className="mt-3 text-muted-foreground leading-relaxed">{objective}</p></section>
                            <section className="ghl-workflow-detail"><InfoHeading icon={Wrench}>Tools</InfoHeading><div className="mt-3"><BulletList items={tools.split(" • ")} /></div></section>
                            <section className="ghl-workflow-detail"><InfoHeading icon={LayoutDashboard}>Skills Demonstrated</InfoHeading><div className="mt-3"><BulletList items={skills.split(" • ")} /></div></section>
                            <section className="ghl-workflow-detail"><InfoHeading icon={Zap}>Result</InfoHeading><p className="mt-3 text-foreground leading-relaxed">{howItWorks}</p></section>
                          </div>
                          <div className="mt-6"><MediaCard src={image} alt={`${title} workflow screenshot`} /></div>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
                <div className="ghl-case-study">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Case Study 06</div>
                  <h4 className="text-3xl md:text-4xl font-bold mb-8">Funnels & Websites</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-4 flex items-center gap-3"><Target className="w-5 h-5 text-primary" /> Objective</h5>
                        <p className="text-muted-foreground leading-relaxed">Capture leads and ensure consistent follow-up without manual work</p>
                      </div>
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-6 flex items-center gap-3"><LayoutDashboard className="w-5 h-5 text-primary" /> What I Did</h5>
                        <ul className="space-y-4">
                          {[
                            "Built landing page funnel for lead capture",
                            "Connected form submissions to CRM",
                            "Created automated workflows (email & SMS)",
                            "Set up follow-up sequences with timing logic",
                            "Integrated pipeline tracking for leads"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="p-6 md:p-8 rounded-3xl bg-primary/[0.02] border border-primary/20">
                        <h5 className="text-lg font-bold mb-6 flex items-center gap-3"><Zap className="w-5 h-5 text-primary" /> Outcome</h5>
                        <ul className="space-y-4">
                          {[
                            "Structured lead capture system",
                            "Automated follow-ups",
                            "Improved response and engagement rate",
                            "Reduced manual workload"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-4 flex items-center gap-3"><Wrench className="w-5 h-5 text-primary" /> Tools Used</h5>
                        <p className="text-muted-foreground">GoHighLevel</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
                    {[
                      "https://assets.cdn.filesafe.space/6zd6WAGY5GB6oaHtIccb/media/6a08ad630a69f1e766a2655c.mp4",
                      "https://assets.cdn.filesafe.space/6zd6WAGY5GB6oaHtIccb/media/6a08ad638d08689eb266a0ef.mp4",
                      "https://assets.cdn.filesafe.space/6zd6WAGY5GB6oaHtIccb/media/6a08ad64dbe569a25d7be1ae.mp4"
                    ].map((src, i) => (
                      <video 
                        key={i} 
                        src={src} 
                        controls 
                        controlsList="nodownload" 
                        onContextMenu={(e) => e.preventDefault()}
                        className="rounded-xl border border-white/10 w-full aspect-video object-contain bg-black/20" 
                      />
                    ))}
                  </div>
                </div>
                <div className="ghl-case-study">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Case Study 07</div>
                  <h4 className="text-3xl md:text-4xl font-bold mb-8">Social Media Content Calendar</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <InfoCard icon={Target} title="Objective"><p className="text-muted-foreground leading-relaxed">Create a structured two-week social media content calendar for a fictional consulting business, organizing posts by date, platform, caption direction, and visual concept while balancing promotional, educational, and engagement content.</p></InfoCard>
                    <InfoCard icon={Wrench} title="Tools"><BulletList items={["Google Sheets", "Microsoft Excel", "Canva"]} /></InfoCard>
                    <InfoCard icon={LayoutDashboard} title="Skills Demonstrated"><BulletList items={["Social media content planning", "Content calendar creation", "Content organization", "Promotional content planning", "Educational content planning", "Engagement content planning", "Caption idea development", "Visual content planning", "Platform-based content organization", "Spreadsheet management"]} /></InfoCard>
                    <InfoCard icon={Zap} title="Result" highlighted><p className="text-foreground leading-relaxed">Created a 2-week calendar containing 10 planned posts for Bright Path Consulting, organized by date, platform, caption idea, and visual concept so another person could understand what to post and when.</p></InfoCard>
                  </div>
                  <div className="mx-auto mt-8 max-w-4xl"><MediaCard src="/social-media/content-calendar.png" alt="Social Media Planner" caption="Social Media Content Planning - 2-Week Content Calendar. A sample content calendar created for a fictional consulting business before scheduling and publishing, with 10 posts across different purposes, platforms, caption directions, and visual ideas." /></div>
                </div>
                {false && (<>
                {/* Legacy CRM and calendar case studies retained in source for reference */}
                <div className="pt-12 border-t border-white/5">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Case Study 03</div>
                  <h4 className="text-3xl md:text-4xl font-bold mb-8">CRM & Pipeline Setup</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-4 flex items-center gap-3"><Target className="w-5 h-5 text-primary" /> Objective</h5>
                        <p className="text-muted-foreground leading-relaxed">Organize leads and create a clear sales process</p>
                      </div>
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-6 flex items-center gap-3"><LayoutDashboard className="w-5 h-5 text-primary" /> What I Did</h5>
                        <ul className="space-y-4">
                          {[
                            "Set up CRM structure in GoHighLevel",
                            "Created pipeline stages (New Lead → Contacted → Closed)",
                            "Organized lead tracking and status updates",
                            "Ensured visibility of customer journey"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="p-6 md:p-8 rounded-3xl bg-primary/[0.02] border border-primary/20">
                        <h5 className="text-lg font-bold mb-6 flex items-center gap-3"><Zap className="w-5 h-5 text-primary" /> Outcome</h5>
                        <ul className="space-y-4">
                          {[
                            "Clear and trackable sales pipeline",
                            "Better lead management",
                            "Improved organization and efficiency"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-4 flex items-center gap-3"><Wrench className="w-5 h-5 text-primary" /> Tools Used</h5>
                        <p className="text-muted-foreground">GoHighLevel</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    {[
                      "https://assets.cdn.filesafe.space/6zd6WAGY5GB6oaHtIccb/media/6a08ad632e98e28fa13e41ef.mp4",
                      "https://assets.cdn.filesafe.space/6zd6WAGY5GB6oaHtIccb/media/6a08ad630a69f1e766a2655b.mp4"
                    ].map((src, i) => (
                      <video 
                        key={i} 
                        src={src} 
                        controls 
                        controlsList="nodownload" 
                        onContextMenu={(e) => e.preventDefault()}
                        className="rounded-xl border border-white/10 w-full aspect-video object-contain bg-black/20" 
                      />
                    ))}
                  </div>
                </div>
                {/* Case Study 03 */}
                <div className="pt-12 border-t border-white/5">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Case Study 04</div>
                  <h4 className="text-3xl md:text-4xl font-bold mb-8">Calendar & Booking System</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-4 flex items-center gap-3"><Target className="w-5 h-5 text-primary" /> Objective</h5>
                        <p className="text-muted-foreground leading-relaxed">Simplify scheduling and reduce missed appointments</p>
                      </div>
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-6 flex items-center gap-3"><LayoutDashboard className="w-5 h-5 text-primary" /> What I Did</h5>
                        <ul className="space-y-4">
                          {[
                            "Set up booking calendar in GoHighLevel",
                            "Configured availability and scheduling rules",
                            "Integrated automated confirmations and reminders",
                            "Connected calendar with CRM"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="p-6 md:p-8 rounded-3xl bg-primary/[0.02] border border-primary/20">
                        <h5 className="text-lg font-bold mb-6 flex items-center gap-3"><Zap className="w-5 h-5 text-primary" /> Outcome</h5>
                        <ul className="space-y-4">
                          {[
                            "Streamlined booking process",
                            "Reduced no-shows",
                            "Improved client experience"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-4 flex items-center gap-3"><Wrench className="w-5 h-5 text-primary" /> Tools Used</h5>
                        <p className="text-muted-foreground">GoHighLevel</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    {[
                      "https://assets.cdn.filesafe.space/6zd6WAGY5GB6oaHtIccb/media/6a08af0519e1ac5f525c3bb4.png",
                      "https://assets.cdn.filesafe.space/6zd6WAGY5GB6oaHtIccb/media/6a08af0519e1ac5f525c3bb5.png"
                    ].map((src, i) => (
                      <img 
                        key={i} 
                        src={src} 
                        alt={`Calendar & Booking System Preview ${i + 1}`}
                        className="rounded-xl border border-white/10 w-full h-auto object-cover" 
                      />
                    ))}
                  </div>
                </div>
                </>)}
                {/* Other case studies would follow similarly */}
              </div>
            </TabsContent>
            
            <TabsContent value="shopify" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                  <div className="text-xs font-bold text-[#95bf47] uppercase tracking-wider mb-4">Case Study 01</div>
                  <h4 className="text-3xl md:text-4xl font-bold mb-8">Pet Store Conversion Optimization & Automation Setup</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-4 flex items-center gap-3"><Target className="w-5 h-5 text-[#95bf47]" /> Objective</h5>
                        <p className="text-muted-foreground leading-relaxed">Create a structured Shopify store and improve conversion potential while preparing for automation.</p>
                      </div>
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-6 flex items-center gap-3"><LayoutDashboard className="w-5 h-5 text-[#95bf47]" /> What I Did</h5>
                        <ul className="space-y-4">
                          {[
                            "Designed and structured the Shopify store layout",
                            "Optimized product pages for clarity and trust",
                            "Added bundle offers and upsell opportunities",
                            "Created order management system using Google Sheets",
                            "Developed customer support response templates",
                            "Designed social media posts for product promotion"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-[#95bf47] shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="p-6 md:p-8 rounded-3xl bg-[#95bf47]/[0.02] border border-[#95bf47]/20">
                        <h5 className="text-lg font-bold mb-6 flex items-center gap-3"><Zap className="w-5 h-5 text-[#95bf47]" /> Outcome</h5>
                        <ul className="space-y-4">
                          {[
                            "Clean and user-friendly store experience",
                            "Improved product presentation",
                            "Organized backend system for order tracking",
                            "Ready for scaling and automation integration"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-[#95bf47] shrink-0 mt-0.5" />
                              <span className="text-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-4 flex items-center gap-3"><Wrench className="w-5 h-5 text-[#95bf47]" /> Tools Used</h5>
                        <p className="text-muted-foreground">Shopify, Canva, Google Sheets</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                    {[
                      { type: 'video', src: "https://assets.cdn.filesafe.space/6zd6WAGY5GB6oaHtIccb/media/6a08afc319e1ac5f525c617f.mp4" },
                      { type: 'video', src: "https://assets.cdn.filesafe.space/6zd6WAGY5GB6oaHtIccb/media/6a08b0068d08689eb267261e.mp4" },
                      { type: 'video', src: "https://assets.cdn.filesafe.space/6zd6WAGY5GB6oaHtIccb/media/6a08afc32e98e28fa13ec703.mp4" },
                      { type: 'image', src: "https://assets.cdn.filesafe.space/6zd6WAGY5GB6oaHtIccb/media/6a08b0512e98e28fa13ee331.png" },
                      { type: 'image', src: "https://assets.cdn.filesafe.space/6zd6WAGY5GB6oaHtIccb/media/6a08b0510a69f1e766a30200.png" },
                      { type: 'image', src: "https://assets.cdn.filesafe.space/6zd6WAGY5GB6oaHtIccb/media/6a08b0512e98e28fa13ee330.png" },
                      { type: 'image', src: "https://assets.cdn.filesafe.space/6zd6WAGY5GB6oaHtIccb/media/6a08b05119e1ac5f525c7e28.png" },
                      { type: 'image', src: "https://vibe.filesafe.space/1778945198587131825/attachments/1727ccad-9b10-4af0-9d9e-c822ee70b99f.png" }
                    ].map((media, i) => (
                      media.type === 'video' ? (
                        <video 
                          key={i} 
                          src={media.src} 
                          controls 
                          controlsList="nodownload" 
                          onContextMenu={(e) => e.preventDefault()}
                          className="rounded-xl border border-white/10 w-full aspect-video object-contain bg-black/20" 
                        />
                      ) : (
                        <MediaCard key={i} src={media.src} alt={`Shopify Case Study 1 Preview ${i + 1}`} />
                      )
                    ))}
                  </div>
                </div>

                {/* Case Study 02 */}
                <div className="pt-12 border-t border-white/5">
                  <div className="text-xs font-bold text-[#95bf47] uppercase tracking-wider mb-4">Case Study 02</div>
                  <h4 className="text-3xl md:text-4xl font-bold mb-8">Skincare Brand Store Setup & Customer Experience Optimization</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-4 flex items-center gap-3"><Target className="w-5 h-5 text-[#95bf47]" /> Objective</h5>
                        <p className="text-muted-foreground leading-relaxed">Build a visually cohesive and trust-focused Shopify store with improved customer journey.</p>
                      </div>
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-6 flex items-center gap-3"><LayoutDashboard className="w-5 h-5 text-[#95bf47]" /> What I Did</h5>
                        <ul className="space-y-4">
                          {[
                            "Designed branded product pages and homepage",
                            "Ensured consistent visual identity across store",
                            "Improved product descriptions for clarity and appeal",
                            "Structured navigation for better browsing experience",
                            "Created social media content aligned with brand identity",
                            "Prepared store for customer retention strategies"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-[#95bf47] shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="p-6 md:p-8 rounded-3xl bg-[#95bf47]/[0.02] border border-[#95bf47]/20">
                        <h5 className="text-lg font-bold mb-6 flex items-center gap-3"><Zap className="w-5 h-5 text-[#95bf47]" /> Outcome</h5>
                        <ul className="space-y-4">
                          {[
                            "Strong and consistent brand presentation",
                            "Improved user experience and trust",
                            "More engaging product pages",
                            "Better foundation for conversion and retention"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-[#95bf47] shrink-0 mt-0.5" />
                              <span className="text-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                  <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-4 flex items-center gap-3"><Wrench className="w-5 h-5 text-[#95bf47]" /> Tools Used</h5>
                        <p className="text-muted-foreground">Shopify, Canva, Google Sheets</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                    {[
                      { type: 'video', src: "https://assets.cdn.filesafe.space/6zd6WAGY5GB6oaHtIccb/media/6a08b1b519e1ac5f525cc452.mp4" },
                      { type: 'video', src: "https://assets.cdn.filesafe.space/6zd6WAGY5GB6oaHtIccb/media/6a08b27c8d08689eb267a7da.mp4" },
                      { type: 'image', src: "https://vibe.filesafe.space/1778945198587131825/attachments/837a33e0-a237-45cc-bf62-eec5cad1a922.png" },
                      { type: 'image', src: "https://vibe.filesafe.space/1778945198587131825/attachments/62c7cb72-9efe-47e3-8277-751c3ca44e62.png" }
                    ].map((media, i) => (
                      media.type === 'video' ? (
                        <video 
                          key={i} 
                          src={media.src} 
                          controls 
                          controlsList="nodownload" 
                          onContextMenu={(e) => e.preventDefault()}
                          className="rounded-xl border border-white/10 w-full aspect-video object-contain bg-black/20" 
                        />
                      ) : (
                        <MediaCard key={i} src={media.src} alt={`Shopify Case Study 2 Preview ${i + 1}`} />
                      )
                    ))}
                  </div>
                </div>

              </div>
            </TabsContent>

            <TabsContent value="admin" className="admin-portfolio mt-0 focus-visible:outline-none focus-visible:ring-0">
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="text-xs font-bold text-[#1E3A5F] uppercase tracking-wider mb-4">Project 01</div>
                <h4 className="text-3xl md:text-4xl font-bold mb-8">Executive Calendar Management</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                      <h5 className="text-lg font-bold mb-4 flex items-center gap-3"><Target className="w-5 h-5 text-[#1E3A5F]" /> Objective</h5>
                      <p className="text-muted-foreground leading-relaxed">Organize and maintain an executive&apos;s weekly schedule while tracking priorities, preparation requirements, and follow-up actions.</p>
                    </div>
                    <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                      <h5 className="text-lg font-bold mb-4 flex items-center gap-3"><Wrench className="w-5 h-5 text-[#1E3A5F]" /> Tools</h5>
                      <p className="text-muted-foreground">Google Calendar • Google Sheets</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="p-6 md:p-8 rounded-3xl bg-[#1E3A5F]/[0.02] border border-[#1E3A5F]/20">
                      <h5 className="text-lg font-bold mb-6 flex items-center gap-3"><ClipboardList className="w-5 h-5 text-[#1E3A5F]" /> Deliverables</h5>
                      <ul className="space-y-4">
                        {["Executive Calendar", "Scheduling Tracker", "Meeting Preparation Tracker", "Executive Weekly Brief"].map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#1E3A5F] shrink-0 mt-0.5" />
                            <span className="text-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                      <h5 className="text-lg font-bold mb-4 flex items-center gap-3"><Calendar className="w-5 h-5 text-[#1E3A5F]" /> Skills Demonstrated</h5>
                      <p className="text-muted-foreground leading-relaxed">Calendar Management • Scheduling • Prioritization • Time Management • Attention to Detail • Executive Support</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                  {[
                    { src: executiveCalendarOverview, alt: "Executive Calendar Overview" },
                    { src: executiveCalendarTracker, alt: "Executive Scheduling Tracker" },
                    { src: meetingPreparationTracker, alt: "Meeting Preparation Tracker" },
                  ].map((image) => <MediaCard key={image.alt} src={image.src} alt={image.alt} caption={image.alt} />)}
                </div>

                <div className="pt-12 mt-12 border-t border-white/5">
                  <div className="text-xs font-bold text-[#1E3A5F] uppercase tracking-wider mb-4">Project 02</div>
                  <h4 className="text-3xl md:text-4xl font-bold mb-8">Task &amp; Deadline Management</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-4 flex items-center gap-3"><Target className="w-5 h-5 text-[#1E3A5F]" /> Objective</h5>
                        <p className="text-muted-foreground leading-relaxed">Created a simulated executive task management system to organize administrative requests, assign responsibilities, track deadlines, identify dependencies, and manage follow-ups.</p>
                      </div>
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-4 flex items-center gap-3"><Wrench className="w-5 h-5 text-[#1E3A5F]" /> Tools</h5>
                        <p className="text-muted-foreground">Google Sheets</p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="p-6 md:p-8 rounded-3xl bg-[#1E3A5F]/[0.02] border border-[#1E3A5F]/20">
                        <h5 className="text-lg font-bold mb-6 flex items-center gap-3"><ClipboardList className="w-5 h-5 text-[#1E3A5F]" /> Deliverables</h5>
                        <ul className="space-y-4">
                          {["Executive Task Tracker", "Priority & Status System", "Automated Days-Remaining Calculation", "Weekly Dashboard", "Follow-Up Queue"].map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-[#1E3A5F] shrink-0 mt-0.5" />
                              <span className="text-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-4 flex items-center gap-3"><Calendar className="w-5 h-5 text-[#1E3A5F]" /> Skills Demonstrated</h5>
                        <p className="text-muted-foreground leading-relaxed">Task Management • Prioritization • Deadline Tracking • Delegation • Follow-Up • Data Organization • Attention to Detail</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                    {[
                      { src: taskDeadlineTracker, alt: "Task and Deadline Tracker" },
                      { src: taskDeadlineFollowUp, alt: "Summary" },
                    ].map((image) => <MediaCard key={image.alt} src={image.src} alt={image.alt} caption={image.alt} />)}
                  </div>
                </div>

                <div className="pt-12 mt-12 border-t border-white/5">
                  <div className="text-xs font-bold text-[#1E3A5F] uppercase tracking-wider mb-4">Project 03</div>
                  <h4 className="text-3xl md:text-4xl font-bold mb-2">Meeting Management</h4>
                  <p className="text-[#1E3A5F] font-medium mb-8">Northstar Consulting Group</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-4 flex items-center gap-3"><Target className="w-5 h-5 text-[#1E3A5F]" /> Objective</h5>
                        <p className="text-muted-foreground leading-relaxed">Managed a simulated weekly executive operations meeting from preparation through post-meeting follow-up, including agenda preparation, meeting documentation, action-item tracking, and follow-up communication.</p>
                      </div>
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-4 flex items-center gap-3"><Wrench className="w-5 h-5 text-[#1E3A5F]" /> Tools</h5>
                        <p className="text-muted-foreground">Google Calendar &bull; Google Docs &bull; Google Sheets</p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="p-6 md:p-8 rounded-3xl bg-[#1E3A5F]/[0.02] border border-[#1E3A5F]/20">
                        <h5 className="text-lg font-bold mb-6 flex items-center gap-3"><ClipboardList className="w-5 h-5 text-[#1E3A5F]" /> Deliverables</h5>
                        <ul className="space-y-3">
                          {["Meeting Agenda", "Meeting Minutes", "Action Item Tracker", "Meeting Preparation Tracker", "Follow-Up Summary"].map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-[#1E3A5F] shrink-0 mt-0.5" />
                              <span className="text-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-4 flex items-center gap-3"><Calendar className="w-5 h-5 text-[#1E3A5F]" /> Skills Demonstrated</h5>
                        <p className="text-muted-foreground leading-relaxed">Meeting Coordination &bull; Agenda Preparation &bull; Note-Taking &bull; Documentation &bull; Action-Item Management &bull; Follow-Up &bull; Deadline Tracking &bull; Executive Support</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 space-y-10">
                    <div>
                      <h5 className="text-xl font-bold mb-4">Meeting Agenda</h5>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {[
                          { src: meetingAgenda1, alt: "Meeting agenda overview" },
                          { src: meetingAgenda2, alt: "Meeting agenda details" },
                          { src: meetingMinutes1, alt: "Meeting agenda document" },
                        ].map((image) => <MediaCard key={image.alt} src={image.src} alt={image.alt} caption={image.alt} />)}
                      </div>
                    </div>
                    <div>
                      <h5 className="text-xl font-bold mb-4">Meeting Minutes</h5>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {[
                          { src: meetingMinutes2, alt: "Meeting minutes" },
                          { src: meetingMinutes3, alt: "Meeting minutes action items" },
                        ].map((image) => <MediaCard key={image.alt} src={image.src} alt={image.alt} caption={image.alt} />)}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {[
                        { src: meetingPreparations, alt: "Meeting Preparation Tracker" },
                        { src: weeklyOperations, alt: "Weekly Operations Action Item Tracker" },
                        { src: followUpSummary, alt: "Follow-Up Summary" },
                      ].map((image) => <MediaCard key={image.alt} src={image.src} alt={image.alt} caption={image.alt} />)}
                    </div>
                  </div>
                </div>

                <div className="pt-12 mt-12 border-t border-white/5">
                  <div className="text-xs font-bold text-[#1E3A5F] uppercase tracking-wider mb-4">Project 04</div>
                  <h4 className="text-3xl md:text-4xl font-bold mb-2">File Organization &amp; Document Management</h4>
                  <p className="text-[#1E3A5F] font-medium mb-8">Northstar Consulting Group</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-4 flex items-center gap-3"><Target className="w-5 h-5 text-[#1E3A5F]" /> Objective</h5>
                        <p className="text-muted-foreground leading-relaxed">Designed and implemented a simulated digital filing system to organize business documents, standardize file naming, manage document versions, identify files requiring review, and improve document retrieval.</p>
                      </div>
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-4 flex items-center gap-3"><Wrench className="w-5 h-5 text-[#1E3A5F]" /> Tools</h5>
                        <p className="text-muted-foreground">Google Drive &bull; Google Docs &bull; Google Sheets</p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="p-6 md:p-8 rounded-3xl bg-[#1E3A5F]/[0.02] border border-[#1E3A5F]/20">
                        <h5 className="text-lg font-bold mb-6 flex items-center gap-3"><ClipboardList className="w-5 h-5 text-[#1E3A5F]" /> Deliverables</h5>
                        <ul className="space-y-3">
                          {["Digital Folder Structure", "File Naming Convention", "File Index", "Organization Log", "Digital File Management SOP", "Before & After Organization Demonstration"].map((item) => (
                            <li key={item} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#1E3A5F] shrink-0 mt-0.5" /><span className="text-foreground">{item}</span></li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-4 flex items-center gap-3"><Calendar className="w-5 h-5 text-[#1E3A5F]" /> Skills Demonstrated</h5>
                        <p className="text-muted-foreground leading-relaxed">Digital File Management &bull; Document Organization &bull; Naming Conventions &bull; Version Control &bull; Data Organization &bull; Administrative Systems &bull; Attention to Detail &bull; Confidentiality Awareness</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8"><MediaCard src={fileOrganizationDocumentManagement} alt="File organization and document management demonstration" caption="File Organization & Document Management" /></div>
                </div>

                <div className="pt-12 mt-12 border-t border-white/5">
                  <div className="text-xs font-bold text-[#1E3A5F] uppercase tracking-wider mb-4">Project 05</div>
                  <h4 className="text-3xl md:text-4xl font-bold mb-2">Executive Inbox Management</h4>
                  <p className="text-[#1E3A5F] font-medium mb-8">Northstar Consulting Group</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-4 flex items-center gap-3"><Target className="w-5 h-5 text-[#1E3A5F]" /> Objective</h5>
                        <p className="text-muted-foreground leading-relaxed">Created a simulated executive inbox management workflow to triage incoming communications, prioritize time-sensitive requests, identify messages requiring executive attention, draft appropriate responses, and maintain follow-up tracking.</p>
                      </div>
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-4 flex items-center gap-3"><Wrench className="w-5 h-5 text-[#1E3A5F]" /> Tools</h5>
                        <p className="text-muted-foreground">Gmail &bull; Google Sheets &bull; Google Docs</p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="p-6 md:p-8 rounded-3xl bg-[#1E3A5F]/[0.02] border border-[#1E3A5F]/20">
                        <h5 className="text-lg font-bold mb-6 flex items-center gap-3"><ClipboardList className="w-5 h-5 text-[#1E3A5F]" /> Deliverables</h5>
                        <ul className="space-y-3">
                          {["Executive Inbox Triage Tracker", "Email Response Tracker", "Draft Email Responses", "Follow-Up Queue", "Inbox Management SOP", "Simulated Gmail Labeling System"].map((item) => (
                            <li key={item} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#1E3A5F] shrink-0 mt-0.5" /><span className="text-foreground">{item}</span></li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-6 md:p-8 rounded-3xl bg-card border border-white/5">
                        <h5 className="text-lg font-bold mb-4 flex items-center gap-3"><Calendar className="w-5 h-5 text-[#1E3A5F]" /> Skills Demonstrated</h5>
                        <p className="text-muted-foreground leading-relaxed">Email Management &bull; Inbox Triage &bull; Prioritization &bull; Professional Communication &bull; Executive Support &bull; Follow-Up Management &bull; Delegation &bull; Escalation &bull; Attention to Detail</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                    {[
                      { src: inboxManagement1, alt: "Executive inbox triage tracker" },
                      { src: inboxManagement2, alt: "Email response tracker" },
                      { src: inboxManagement3, alt: "Draft email responses" },
                      { src: inboxManagement4, alt: "Inbox follow-up queue" },
                      { src: inboxManagement5, alt: "Inbox management SOP" },
                      { src: inboxManagementGmail, alt: "Gmail Labeling System" },
                    ].map((image) => <MediaCard key={image.alt} src={image.src} alt={image.alt} caption={image.alt} />)}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* How I Use GHL with Shopify */}
      <section className="section-reveal py-14 md:py-16 px-6 relative bg-gradient-to-b from-transparent via-white/[0.02] to-transparent border-b border-white/[0.05]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How I Use GoHighLevel with Shopify</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I use GoHighLevel to support and enhance Shopify stores through automation:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            {[
              { icon: ShoppingBag, text: "Recover abandoned carts with email/SMS follow-ups" },
              { icon: Mail, text: "Send post-purchase messages and upsell offers" },
              { icon: Users, text: "Build customer retention workflows" },
              { icon: Target, text: "Track and manage customer interactions" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-[#0a0a0a] hover:border-primary/30 transition-all group shadow-sm">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 border border-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base md:text-lg font-bold leading-snug text-foreground/90">{item.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Expect Section */}
      <section className="section-reveal py-14 md:py-16 px-6 relative bg-white/[0.02] border-b border-white/[0.05]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What You Can Expect</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The tangible results and experience of having a dedicated systems and administrative expert on your team.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {[
              {
                icon: Activity,
                title: "Seamless Clinic Operations",
                desc: "Reduced admin burden, zero missed appointments, and organized patient workflows so you can focus entirely on providing care.",
                color: "text-[#81a1c1]",
                bg: "bg-[#81a1c1]/10",
                borderHover: "hover:border-[#81a1c1]/30",
                shadowHover: "hover:shadow-[0_0_30px_-10px_rgba(129,161,193,0.1)]"
              },
              {
                icon: Workflow,
                title: "Intelligent Automation",
                desc: "Sales and marketing systems that work 24/7 to capture leads, nurture prospects, and close deals without manual effort.",
                color: "text-primary",
                bg: "bg-primary/10",
                borderHover: "hover:border-primary/30",
                shadowHover: "hover:shadow-[0_0_30px_-10px_rgba(var(--primary),0.1)]"
              },
              {
                icon: Store,
                title: "High-Converting Stores",
                desc: "Beautifully optimized Shopify experiences designed to reduce friction, increase average order value, and turn browsers into buyers.",
                color: "text-[#95bf47]",
                bg: "bg-[#95bf47]/10",
                borderHover: "hover:border-[#95bf47]/30",
                shadowHover: "hover:shadow-[0_0_30px_-10px_rgba(149,191,71,0.1)]"
              },
              {
                icon: CheckCircle2,
                title: "Reliability & Clarity",
                desc: "Proactive communication, transparent reporting, and a dedicated partner who treats your business growth as their own.",
                color: "text-foreground",
                bg: "bg-white/5",
                borderHover: "hover:border-white/30",
                shadowHover: "hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.05)]"
              }
            ].map((item, i) => (
              <div key={i} className={`p-5 rounded-2xl border border-white/5 bg-card transition-all group flex flex-col ${item.borderHover} ${item.shadowHover}`}>
                <div className={`h-11 w-11 rounded-xl ${item.bg} flex items-center justify-center ${item.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{item.desc}</p>
              </div>
            ))}
          </div>
      </div>
      </section>

      {/* My Toolkit Section */}
      <section className="section-reveal py-24 px-6 relative bg-gradient-to-b from-transparent via-white/[0.02] to-transparent border-b border-white/[0.05]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">My Toolkit</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The platforms and technologies I use to build, automate, and manage operations.
            </p>
          </div>
          <div className="px-12 max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                AutoScroll({
                  speed: 1,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {[
                  { name: "ChatGPT", icon: Bot },
                  { name: "Claude", icon: Bot },
                  { name: "Gemini", icon: Bot },
                  { name: "GoHighLevel", icon: Rocket },
                  { name: "HTML", icon: Code },
                  { name: "CSS", icon: Palette },
                  { name: "Notion", icon: FileText },
                  { name: "Canva", icon: PenTool },
                  { name: "Zoom", icon: Video },
                  { name: "WhatsApp", icon: MessageCircle },
                  { name: "Google Workspace", icon: Cloud },
                  { name: "Klaviyo", icon: Mail },
                  { name: "Shopify", icon: ShoppingBag }
                ].map((tool, i) => (
                  <CarouselItem key={i} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                    <div className="p-6 rounded-2xl border border-white/5 bg-card hover:border-primary/30 transition-all flex flex-col items-center justify-center h-32 gap-3 group hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.1)] relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <tool.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors relative z-10" />
                      <span className="font-bold text-sm text-muted-foreground group-hover:text-foreground transition-colors relative z-10 text-center">{tool.name}</span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-white/10 hover:bg-white/10 hover:text-white" />
              <CarouselNext className="border-white/10 hover:bg-white/10 hover:text-white" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="section-reveal py-24 px-6 text-center border-t border-white/[0.05] bg-white/[0.02]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Build Something Great Together</h2>
          <p className="text-muted-foreground mb-10 text-lg">
            If you're looking for someone who understands healthcare administration, sales, and systems, I'd love to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/639368326488"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg w-full sm:w-auto transition-colors"
            >
              Start a Project
            </a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium border rounded-full border-white/20 bg-transparent text-foreground hover:text-primary hover:border-primary/60 h-14 px-8 text-lg w-full sm:w-auto transition-all"
            >
              View Portfolio
            </a>
          </div>
          <p className="mt-16 text-sm text-muted-foreground">© 2025 Donabel Tolomia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
