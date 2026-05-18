import { useState, useEffect } from "react";
import { Activity, ArrowRight, Building, Calendar, CheckCircle2, ClipboardList, Filter, LayoutDashboard, Mail, MessageSquare, MousePointerClick, Network, Paintbrush, Rocket, ShoppingBag, Store, Target, TrendingUp, Users, Workflow, Wrench, Zap, Bot, Code, Palette, FileText, PenTool, Video, MessageCircle, Cloud } from "lucide-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const PHRASES = [
  "Healthcare Virtual Assistant",
  "GoHighLevel Specialist",
  "Shopify Virtual Assistant"
];

const Index = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);

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
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">
            Donabel<span className="text-primary">.</span>
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
      <section className="pt-32 pb-20 px-6 container mx-auto">
<div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div className="relative z-10 shrink-0 -mt-8 lg:-mt-40 flex flex-col items-center">
            <div className="relative w-80 h-80 md:w-[26rem] md:h-[26rem] lg:w-[30rem] lg:h-[30rem] group flex items-end justify-center">
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
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">DONABEL TOLOMIA</h1>
              <div className="h-8 md:h-10 flex items-center justify-center lg:justify-start">
                <h2 className={`text-2xl md:text-3xl font-semibold transition-colors duration-300 ${["text-[#81a1c1]", "text-primary", "text-[#95bf47]"][loopNum % PHRASES.length]}`}>{text || "\u00A0"}<span className={`animate-[pulse_1s_ease-in-out_infinite] border-r-2 ml-1 h-6 md:h-8 inline-block align-middle transition-colors duration-300 ${["border-[#81a1c1]", "border-primary", "border-[#95bf47]"][loopNum % PHRASES.length]}`}></span></h2>
              </div>
              <div className="pt-4 max-w-2xl mx-auto lg:mx-0">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  I provide specialized support for medical practices as a <strong className="text-foreground font-semibold">Healthcare Virtual Assistant</strong>, handling patient coordination and admin tasks so you can focus entirely on care. I also leverage my expertise as a <strong className="text-foreground font-semibold">GoHighLevel & Shopify Expert</strong> to build automated CRM systems and high-converting workflows that help both clinics and e-commerce brands scale efficiently.
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
      <section className="py-24 px-6 relative bg-white/[0.02] border-y border-white/[0.05]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive support bridging healthcare administration, intelligent sales automation, and high-converting e-commerce.
            </p>
          </div>

          {/* Healthcare VA Services */}
          <div className="mb-16">
            <div className="mb-8 flex items-center gap-6">
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
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl border border-white/5 bg-card hover:border-[#81a1c1]/30 transition-all hover:shadow-[0_0_30px_-10px_rgba(129,161,193,0.1)] group flex flex-col">
                  <div className="h-14 w-14 rounded-2xl bg-[#81a1c1]/10 flex items-center justify-center text-[#81a1c1] mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-6">{item.title}</h3>
                  <div className="space-y-4 flex-grow">
                    <div>
                      <span className="text-xs font-bold text-[#81a1c1] uppercase tracking-wider block mb-2">The Service</span>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.service}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-foreground uppercase tracking-wider block mb-2">The Result</span>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GoHighLevel Services */}
          <div className="mb-16">
            <div className="mb-8 flex items-center gap-6">
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
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl border border-white/5 bg-card hover:border-primary/30 transition-all hover:shadow-[0_0_30px_-10px_rgba(var(--primary),0.1)] group flex flex-col">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-6">{item.title}</h3>
                  <div className="space-y-4 flex-grow">
                    <div>
                      <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-2">The Service</span>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.service}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-foreground uppercase tracking-wider block mb-2">The Result</span>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shopify Services */}
          <div>
            <div className="mb-8 flex items-center gap-6">
              <h3 className="text-2xl font-bold tracking-tight text-[#95bf47]">Shopify Services</h3>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-[#95bf47]/50 to-transparent"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
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
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl border border-white/5 bg-card hover:border-[#95bf47]/30 transition-all hover:shadow-[0_0_30px_-10px_rgba(149,191,71,0.1)] group flex flex-col w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                  <div className="h-14 w-14 rounded-2xl bg-[#95bf47]/10 flex items-center justify-center text-[#95bf47] mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-6">{item.title}</h3>
                  <div className="space-y-4 flex-grow">
                    <div>
                      <span className="text-xs font-bold text-[#95bf47] uppercase tracking-wider block mb-2">The Service</span>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.service}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-foreground uppercase tracking-wider block mb-2">The Result</span>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Powerful Combinations */}
          <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="p-8 md:p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-[#81a1c1]/10 via-background to-primary/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-background/50 backdrop-blur-sm -z-10"></div>
              <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                <Network className="h-6 w-6 text-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-4">Healthcare + GoHighLevel</h4>
              <p className="text-muted-foreground leading-relaxed">
                Elevate your clinic's digital presence with powerful automation. I leverage GoHighLevel to run engaging campaigns through social media to ensure people see your presence, while seamlessly automating patient intake, reminders, and follow-ups.
              </p>
            </div>
            
            <div className="p-8 md:p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-[#95bf47]/10 via-background to-primary/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-background/50 backdrop-blur-sm -z-10"></div>
              <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                <Workflow className="h-6 w-6 text-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-4">Shopify + GoHighLevel</h4>
              <p className="text-muted-foreground leading-relaxed">
                Connect your e-commerce store with an advanced CRM. Turn one-time buyers into loyal customers with automated post-purchase nurture campaigns, review requests, and VIP offers that maximize lifetime value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How I Help Section */}
      <section className="py-24 px-6 relative bg-gradient-to-b from-transparent via-white/[0.02] to-transparent border-y border-white/[0.05]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How I Help Your Business Grow</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Strategic improvements designed to increase conversions and streamline operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Store, text: "Optimize your Shopify store for conversions" },
              { icon: Target, text: "Identify gaps in your customer journey" },
              { icon: Workflow, text: "Build automated workflows in GoHighLevel" },
              { icon: Mail, text: "Implement follow-ups (email/SMS)" },
              { icon: TrendingUp, text: "Continuously improve performance" },
              { icon: Activity, text: "Streamline healthcare admin and patient coordination" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-5 p-6 rounded-3xl border border-white/5 bg-[#0a0a0a] hover:border-primary/30 transition-all group shadow-sm">
                <div className="h-14 w-14 shrink-0 rounded-2xl bg-primary/10 border border-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold leading-snug text-foreground/90">{item.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="py-24 px-6 container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How I Work</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A streamlined process tailored to your specific platform needs.
          </p>
        </div>

        {/* Healthcare Workflow */}
        <div className="mb-20">
          <div className="mb-10 flex items-center gap-6">
            <h3 className="text-2xl font-bold tracking-tight text-[#81a1c1]">Healthcare Workflow</h3>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-[#81a1c1]/50 to-transparent"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#81a1c1]/20 to-transparent -z-10"></div>
            {[
              { num: "01", icon: Activity, title: "Understand Practice", desc: "Review current admin processes and patient flow" },
              { num: "02", icon: ClipboardList, title: "Setup & Organize", desc: "Organize calendars, inbox, and communication channels" },
              { num: "03", icon: Users, title: "Implement Systems", desc: "Implement patient coordination and follow-up routines" },
              { num: "04", icon: Calendar, title: "Daily Management", desc: "Ongoing support for appointments and daily admin tasks" },
            ].map((step, i) => (
              <div key={i} className="relative p-8 rounded-3xl border border-white/5 bg-card hover:border-[#81a1c1]/30 transition-all group flex flex-col items-center text-center overflow-hidden">
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
        <div className="mb-20">
          <div className="mb-10 flex items-center gap-6">
            <h3 className="text-2xl font-bold tracking-tight text-primary">GoHighLevel Workflow</h3>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-primary/50 to-transparent"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10"></div>
            {[
              { num: "01", icon: Target, title: "Understand Your Business", desc: "I learn about your goals, target audience, and current process" },
              { num: "02", icon: Workflow, title: "Build Your System", desc: "I create your funnel, CRM pipeline, and automation inside GoHighLevel" },
              { num: "03", icon: Zap, title: "Set Up Automation", desc: "I implement follow-ups, workflows, and booking systems" },
              { num: "04", icon: Rocket, title: "Test & Optimize", desc: "I ensure everything runs smoothly and is ready for use" },
            ].map((step, i) => (
              <div key={i} className="relative p-8 rounded-3xl border border-white/5 bg-card hover:border-primary/30 transition-all group flex flex-col items-center text-center overflow-hidden">
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
        <div>
          <div className="mb-10 flex items-center gap-6">
            <h3 className="text-2xl font-bold tracking-tight text-[#95bf47]">Shopify Workflow</h3>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-[#95bf47]/50 to-transparent"></div>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#95bf47]/20 to-transparent -z-10"></div>
            {[
              { num: "01", icon: Store, title: "Review Store", desc: "Review store design and structure" },
              { num: "02", icon: Paintbrush, title: "Optimize Pages", desc: "Optimize product pages" },
              { num: "03", icon: MousePointerClick, title: "Improve UX", desc: "Improve navigation and user experience" },
              { num: "04", icon: ShoppingBag, title: "Add Elements", desc: "Add upsells, bundles, and trust elements" },
              { num: "05", icon: TrendingUp, title: "Prepare Conversions", desc: "Prepare store for higher conversions" },
            ].map((step, i) => (
              <div key={i} className="relative p-6 rounded-3xl border border-white/5 bg-card hover:border-[#95bf47]/30 transition-all group flex flex-col items-center text-center overflow-hidden">
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
      </section>

      {/* Selected Works - Reduced for brevity, showing structure */}
      <section id="work" className="py-24 px-6 relative bg-white/[0.02] border-y border-white/[0.05]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Works</h2>
          </div>

          <Tabs defaultValue="ghl" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-card border border-white/10 h-auto p-1.5 rounded-full">
                <TabsTrigger 
                  value="ghl" 
                  className="rounded-full px-8 py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                >
                  GoHighLevel
                </TabsTrigger>
                <TabsTrigger 
                  value="shopify" 
                  className="rounded-full px-8 py-3 text-base data-[state=active]:bg-[#95bf47] data-[state=active]:text-white transition-all"
                >
                  Shopify
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="ghl" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Case Study 01</div>
                  <h4 className="text-3xl md:text-4xl font-bold mb-8">Funnel/Website & Automation System</h4>
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
                      "https://assets.cdn.filesafe.space/6zd6WAGY5GB6oaHtIccb/media/6a08ad64dbe569a25d7be1ae.mp4",
                      "https://assets.cdn.filesafe.space/6zd6WAGY5GB6oaHtIccb/media/6a08ad63ea36308bcf821aa8.mp4",
                      "https://assets.cdn.filesafe.space/6zd6WAGY5GB6oaHtIccb/media/6a08ad630a69f1e766a2655a.mp4",
                      "https://assets.cdn.filesafe.space/6zd6WAGY5GB6oaHtIccb/media/6a08ad63dbe569a25d7be195.mp4",
                      "https://assets.cdn.filesafe.space/6zd6WAGY5GB6oaHtIccb/media/6a08ad630a69f1e766a2655d.mp4"
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
                {/* Case Study 02 */}
                <div className="pt-12 border-t border-white/5">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Case Study 02</div>
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
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Case Study 03</div>
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
                        <img 
                          key={i} 
                          src={media.src} 
                          alt={`Shopify Case Study 1 Preview ${i + 1}`}
                          className="rounded-xl border border-white/10 w-full h-full object-cover aspect-video bg-black/20" 
                        />
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
                        <img 
                          key={i} 
                          src={media.src} 
                          alt={`Shopify Case Study 2 Preview ${i + 1}`}
                          className="rounded-xl border border-white/10 w-full h-full object-cover aspect-video bg-black/20" 
                        />
                      )
                    ))}
                  </div>
                </div>

              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* How I Use GHL with Shopify */}
      <section className="py-24 px-6 relative bg-gradient-to-b from-transparent via-white/[0.02] to-transparent border-b border-white/[0.05]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How I Use GoHighLevel with Shopify</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I use GoHighLevel to support and enhance Shopify stores through automation:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: ShoppingBag, text: "Recover abandoned carts with email/SMS follow-ups" },
              { icon: Mail, text: "Send post-purchase messages and upsell offers" },
              { icon: Users, text: "Build customer retention workflows" },
              { icon: Target, text: "Track and manage customer interactions" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 p-8 rounded-3xl border border-white/5 bg-[#0a0a0a] hover:border-primary/30 transition-all group shadow-sm">
                <div className="h-16 w-16 shrink-0 rounded-2xl bg-primary/10 border border-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold leading-snug text-foreground/90">{item.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Expect Section */}
      <section className="py-24 px-6 relative bg-white/[0.02] border-b border-white/[0.05]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What You Can Expect</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The tangible results and experience of having a dedicated systems and administrative expert on your team.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div key={i} className={`p-8 rounded-3xl border border-white/5 bg-card transition-all group flex flex-col ${item.borderHover} ${item.shadowHover}`}>
                <div className={`h-14 w-14 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{item.desc}</p>
              </div>
            ))}
          </div>
      </div>
      </section>

      {/* My Toolkit Section */}
      <section className="py-24 px-6 relative bg-gradient-to-b from-transparent via-white/[0.02] to-transparent border-b border-white/[0.05]">
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

      {/* Client Reviews */}
      <section className="py-24 px-6 container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Client Reviews</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What people are saying about my work.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Elena V.", position: "E-commerce Founder", text: "I was struggling to get my Shopify store looking professional and actually converting. Donabel came in, cleaned up the messy design, and set up abandoned cart emails that started bringing back customers on day one. She made the whole process so easy to understand." },
            { name: "Marcus D.", position: "Agency Owner", text: "Before working with Donabel, leads were slipping through the cracks because our follow-up was all over the place. She built out a proper pipeline and automated our responses. For the first time, I actually know where every prospect is in our sales process without checking three different spreadsheets." },
            { name: "Priya K.", position: "Clinic Director", text: "I used to spend hours manually texting clients to remind them about appointments. Donabel set up a booking system that handles everything automatically. Not only do I save hours every week, but my no-show rate has basically dropped to zero. Best investment I've made for my clinic." }
          ].map((review, i) => (
            <div key={i} className="p-8 rounded-3xl border border-white/5 bg-card hover:border-primary/30 transition-all flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-primary mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic mb-8">"{review.text}"</p>
              </div>
              <div>
                <p className="font-bold text-foreground">{review.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{review.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-24 px-6 text-center border-t border-white/[0.05] bg-white/[0.02]">
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
