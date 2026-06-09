"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Award, Compass, Grid, Link, Monitor, Shield, Star, Target, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="largeSmallSizeLargeTitles"
        background="fluid"
        cardStyle="soft-shadow"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Process",
          id: "#process",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Pricing",
          id: "#pricing",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Eu7XtVoAq5aQNPhSuBTtJ7PQYQ/uploaded-1781017061711-viofnidk.png"
      logoAlt="OpsPilot AI Logo"
      brandName="OpsPilot AI"
      button={{
        text: "Book A Call",
        href: "#contact",
      }}
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated",
      }}
      title="From Chaos To Clarity."
      description="We build AI-powered systems that automate operations, capture more leads, streamline workflows and help businesses scale without increasing overhead."
      tag="OpsPilot AI"
      buttons={[
        {
          text: "Book A Free Strategy Call",
          href: "#contact",
        },
        {
          text: "View Services",
          href: "#services",
        },
      ]}
      carouselItems={[
        {
          id: "carousel-item-1",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Eu7XtVoAq5aQNPhSuBTtJ7PQYQ/uploaded-1781017061711-viofnidk.png",
          imageAlt: "OpsPilot AI Logo - The central system",
        },
        {
          id: "carousel-item-2",
          imageSrc: "http://img.b2bpic.net/free-photo/specialist-using-laptop-troubleshooting-data-center-mainframes-with-high-computing-power-enabling-hyperscale-server-hub-support-demanding-applications-such-as-machine-learning-workloads_482257-67945.jpg",
          imageAlt: "AI CRM System Dashboard",
        },
        {
          id: "carousel-item-3",
          imageSrc: "https://img.b2bpic.net/premium-photo/multicultural-team-is-working-start-up-project-boardroom-they-are-brainstorming_232070-13901.jpg?id=37090890",
          imageAlt: "AI Lead Capture Funnel",
        },
        {
          id: "carousel-item-4",
          imageSrc: "http://img.b2bpic.net/free-photo/email-messages-network-circuit-board-link-connection-technology_1379-885.jpg",
          imageAlt: "AI Email Automation Flow",
        },
        {
          id: "carousel-item-5",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-luxury-car-dashboard-with-big-display_93675-128629.jpg",
          imageAlt: "AI Calendar Integration Interface",
        },
        {
          id: "carousel-item-6",
          imageSrc: "https://img.b2bpic.net/free-photo/close-up-office-desk-with-business-team-discussting-work-project_1423-90.jpg?id=1202213",
          imageAlt: "AI Document Management System",
        },
        {
          id: "carousel-item-7",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-network-communications-background-with-low-poly-plexus-design_1048-15687.jpg",
          imageAlt: "AI Business Integrations",
        },
      ]}
      autoPlay={true}
      autoPlayInterval={5000}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureHoverPattern
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: Zap,
          title: "AI Automation Systems",
          description: "We design and deploy intelligent systems that automate repetitive tasks, freeing up your team for strategic initiatives.",
        },
        {
          icon: Target,
          title: "Lead Capture & Follow-Up",
          description: "Implement advanced AI-driven funnels to capture high-quality leads and automate personalized follow-up sequences.",
        },
        {
          icon: Grid,
          title: "CRM & Pipeline Setup",
          description: "Configure powerful CRM platforms and optimize sales pipelines to manage customer relationships and drive conversions.",
        },
        {
          icon: Monitor,
          title: "Website Design & Development",
          description: "Craft premium, high-performing websites integrated with AI tools for seamless user experience and lead generation.",
        },
        {
          icon: Compass,
          title: "Business Process Automation",
          description: "Streamline complex business processes through AI, reducing manual errors and boosting operational efficiency.",
        },
        {
          icon: Link,
          title: "Integrations & Operational Systems",
          description: "Connect disparate systems and build a unified operational ecosystem for a truly intelligent and cohesive business.",
        },
      ]}
      title="Our Expert Services"
      description="Unlock efficiency and growth with our bespoke AI automation solutions designed to transform your business operations."
    />
  </div>

  <div id="process" data-section="process">
      <MetricCardSeven
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "step-1",
          value: "01",
          title: "Strategy Call",
          items: [
            "Discover your challenges and goals. We'll outline a roadmap for AI automation tailored to your business.",
          ],
        },
        {
          id: "step-2",
          value: "02",
          title: "System Design",
          items: [
            "Our experts design custom AI systems and workflows, ensuring alignment with your objectives and seamless integration.",
          ],
        },
        {
          id: "step-3",
          value: "03",
          title: "Build & Implementation",
          items: [
            "We meticulously build and implement your AI automation systems, ensuring robust functionality and peak performance.",
          ],
        },
        {
          id: "step-4",
          value: "04",
          title: "Launch & Optimisation",
          items: [
            "Your new systems go live. We provide ongoing support and optimisation to maximize efficiency and results.",
          ],
        },
      ]}
      title="Our Streamlined Process"
      description="We guide you through a clear, effective process to implement AI automation tailored to your unique business needs."
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Your Trusted AI Automation Partner"
      description="OpsPilot AI empowers businesses to transcend manual limitations, reduce operational overhead, and achieve remarkable scalability through intelligent AI systems. We focus on delivering tangible outcomes: freeing your team from repetitive tasks, boosting efficiency across every department, and ensuring sustainable growth without compromise. Partner with us to revolutionize your operations and navigate the future with clarity."
      imageSrc="https://img.b2bpic.net/free-photo/businessman-pointing-his-presentation-futuristic-digital-screen_53876-102617.jpg?id=15556741"
      imageAlt="OpsPilot AI Team working on automation systems"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "package-1",
          tag: "Website First",
          tagIcon: Star,
          price: "£899",
          period: "Fixed Price",
          description: "Launch a high-converting website, integrated with essential lead capture tools and optimized for performance.",
          button: {
            text: "Get Started",
            href: "#contact",
          },
          featuresTitle: "Includes:",
          features: [
            "Premium website design",
            "Mobile optimisation",
            "Contact forms",
            "Lead capture integration",
            "Fast loading pages",
            "Professional deployment",
          ],
        },
        {
          id: "package-2",
          tag: "Most Popular",
          tagIcon: Award,
          price: "From £1,500",
          period: "Project-based",
          description: "Accelerate your efficiency with a focused AI automation sprint, building custom workflows and CRM setups.",
          button: {
            text: "Learn More",
            href: "#contact",
          },
          featuresTitle: "Includes:",
          features: [
            "Workflow implementation",
            "CRM setup",
            "Lead capture systems",
            "AI automations",
            "Business process optimisation",
            "Integrations",
          ],
        },
        {
          id: "package-3",
          tag: "Full Support",
          tagIcon: Shield,
          price: "£350",
          period: "/month",
          description: "Ensure long-term success with ongoing operational support, maintenance, and strategic consulting.",
          button: {
            text: "Contact Us",
            href: "#contact",
          },
          featuresTitle: "Includes:",
          features: [
            "Ongoing optimisation",
            "Support",
            "New workflows",
            "Automation maintenance",
            "Operational consulting",
          ],
        },
      ]}
      title="Flexible Automation Packages"
      description="Choose the perfect plan to streamline your operations, capture more leads, and scale your business with confidence."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="OpsPilot AI completely transformed our lead generation and customer follow-up. Their AI systems are incredibly powerful and have allowed us to scale without adding overhead. The professionalism and expertise are truly top-tier."
      rating={5}
      author=""
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/young-beautiful-african-woman-student-resting-relaxing-sitting-cafe-smiling-drinking-coffee_176420-12323.jpg",
          alt: "Sarah Chen",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-posing-with-cup-coffee_23-2149330971.jpg",
          alt: "Michael Rodriguez",
        },
        {
          src: "http://img.b2bpic.net/free-photo/closeup-portrait-successful-confident-young-woman-start-career-look-determined-get-job-waiting-interview-lean-glass-wall-business-center-smiling-looking-away-satisfied_197531-30572.jpg",
          alt: "Emily Watson",
        },
        {
          src: "http://img.b2bpic.net/free-photo/blond-business-woman-blue-shirt_23-2148095792.jpg",
          alt: "David Kim",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-male-executive-smiling_1170-758.jpg",
          alt: "Mark Johnson",
        },
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Book Your Free Strategy Call"
      description="Ready to transform your business with AI automation? Contact us today to schedule a free strategy call and discover how OpsPilot AI can help you scale efficiently."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Your Message",
        rows: 5,
        required: false,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/lifestyle-concept-portrait-cheerful-happy-ginger-red-hair-girl-enjoy-listening-music-with-head_1258-119112.jpg"
      imageAlt="AI-powered contact and support system"
      mediaAnimation="blur-reveal"
      mediaPosition="right"
      buttonText="Send Message"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Eu7XtVoAq5aQNPhSuBTtJ7PQYQ/uploaded-1781017061711-viofnidk.png"
      logoAlt="OpsPilot AI Logo"
      logoText="OpsPilot AI"
      columns={[
        {
          title: "Solutions",
          items: [
            {
              label: "AI Automation Systems",
              href: "#services",
            },
            {
              label: "Lead Capture",
              href: "#services",
            },
            {
              label: "CRM & Pipeline",
              href: "#services",
            },
            {
              label: "Website Development",
              href: "#services",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Our Process",
              href: "#process",
            },
            {
              label: "Pricing",
              href: "#pricing",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 OpsPilot AI. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
