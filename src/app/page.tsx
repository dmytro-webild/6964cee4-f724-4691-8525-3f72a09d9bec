"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { CheckCircle2, ShieldCheck, Clock, MapPin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeLargeTitles"
        background="noise"
        cardStyle="glass-elevated"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Start", id: "#hero" },
        { name: "Über uns", id: "#about" },
        { name: "Leistungen", id: "#services" },
        { name: "Team", id: "#team" },
        { name: "Kontakt", id: "#contact" },
      ]}
      brandName="Pflegedienst "
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{ variant: "gradient-bars" }}
      title="Pflege, die zuhause das Leben leichter macht."
      description="Wir betreuen Menschen in Hamburg in ihrer eigenen Wohnung – mit der Ruhe, dem Respekt und der Fachkompetenz, die Familien für ihre Angehörigen suchen."
      leftCarouselItems={[
        { imageSrc: "https://img.b2bpic.net/free-photo/closeup-support-hands_53876-14962.jpg?id=2769160", imageAlt: "Pflege zuhause" },
        { imageSrc: "https://img.b2bpic.net/free-photo/senior-couple-seaside-medium-shot_23-2149021658.jpg?id=15725657", imageAlt: "Intensivpflege" },
      ]}
      rightCarouselItems={[
        { imageSrc: "https://img.b2bpic.net/free-photo/closeup-elderly-hands_53876-24751.jpg?id=2892728", imageAlt: "Atmungstherapie" },
        { imageSrc: "https://img.b2bpic.net/free-photo/elderly-woman-with-toothy-smile_1098-14219.jpg?id=5400238", imageAlt: "Pflegequalität" },
      ]}
      tag="Intensivpflege Hamburg"
      buttons={[
        { text: "Erstberatung vereinbaren", href: "#contact" },
      ]}
    />
    <div className="bg-[var(--card)] py-6 border-b border-[var(--accent)]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-[var(--foreground)]">
            {[ 
                { icon: CheckCircle2, text: "Anerkannt von allen gesetzlichen Krankenkassen" },
                { icon: ShieldCheck, text: "Alle Pflegegrade" },
                { icon: Clock, text: "24/7 erreichbar" },
                { icon: MapPin, text: "Seit 2025 in Hamburg" }
            ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-[var(--primary-cta)] flex-shrink-0" />
                    <span className="font-medium">{item.text}</span>
                </div>
            ))}
        </div>
    </div>
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Ihre Experten für respiratorische Pflege"
      description="Seit Jahren in Hamburg tätig, bieten wir spezialisierte ambulante und 1:1 Intensivpflegeleistungen. Unser Team aus hochqualifizierten Pflegefachkräften sorgt für medizinische Sicherheit und höchste Lebensqualität."
      bulletPoints={[
        { title: "1:1 Intensivpflege", description: "Maximale Aufmerksamkeit und individuelle Betreuung rund um die Uhr." },
        { title: "Beatmungsexpertise", description: "Spezialisierte Pflege bei invasiver und nicht-invasiver Beatmung." },
        { title: "Ambulanter Fokus", description: "Pflege in der vertrauten häuslichen Umgebung in ganz Hamburg." },
      ]}
      imageSrc="https://img.b2bpic.net/free-photo/closeup-elderly-hands_53876-24751.jpg?id=2892728"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { id: "f1", title: "Heimbeatmung", description: "Umfassende Unterstützung bei sämtlichen Beatmungsformen.", tag: "Medizinisch", imageSrc: "https://images.unsplash.com/photo-1629904853716-f0bc54cca781?auto=format&fit=crop&q=80&w=800" },
        { id: "f2", title: "24/7 Intensivbetreuung", description: "Rund-um-die-Uhr Überwachung durch spezialisierte Fachkräfte.", tag: "Sicherheit", imageSrc: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800" },
        { id: "f3", title: "Individuelle Lebensqualität", description: "Wir integrieren medizinisches Know-how in Ihren persönlichen Alltag.", tag: "Lebensqualität", imageSrc: "https://images.unsplash.com/photo-1589149098525-e24194be9f1f?auto=format&fit=crop&q=80&w=800" },
      ]}
      title="Unsere spezialisierten Dienstleistungen"
      description="Wir decken das gesamte Spektrum der respiratorischen Intensivpflege ab."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[]}
      title="Technik für den Alltag"
      description="Modernste Ausstattung für ein würdevolles Leben zuhause."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Erfolge in Zahlen"
      tag="Transparenz"
      metrics={[
        { id: "m1", value: "15+", description: "Jahre Erfahrung mit herzlicher Betreuung" },
        { id: "m2", value: "100%", description: "Fachpersonal für Ihr Zuhause" },
        { id: "m3", value: "500+", description: "Glückliche Familien unterstützt" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardSix
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      members={[
        { id: "m1", name: "Sarah M.", role: "Pflegedienstleitung", imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" },
        { id: "m2", name: "Markus K.", role: "Intensivpflegefachkraft", imageSrc: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800" },
        { id: "m3", name: "Elena V.", role: "Pflegerin", imageSrc: "https://images.unsplash.com/photo-1623847668630-10850a583e74?auto=format&fit=crop&q=80&w=800" },
      ]}
      title="Ihr Team in Hamburg"
      description="Erfahrene Hände für Ihre Gesundheit."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Familie Schmidt", handle: "@hamburg", testimonial: "Die Pflege zuhause war eine enorme Erleichterung für uns. Sehr professionell und warmherzig.", imageSrc: "https://images.unsplash.com/photo-1620336637308-410787e97f6c?auto=format&fit=crop&q=80&w=800" },
        { id: "t2", name: "Thomas L.", handle: "@patient", testimonial: "Ich fühle mich bei Respiro Care in besten Händen. Das Team ist immer da, wenn man es braucht.", imageSrc: "https://images.unsplash.com/photo-1577327315537-88951307b220?auto=format&fit=crop&q=80&w=800" }
      ]}
      title="Das sagen unsere Patienten"
      description="Vertrauen durch erstklassige Pflege."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Service"
      title="Kontaktieren Sie uns"
      description="Wir stehen Ihnen für ein unverbindliches Beratungsgespräch zur Verfügung."
      buttonText="Anfrage senden"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[ 
          { items: [{ label: "Über uns", href: "#about" }, { label: "Leistungen", href: "#services" }] },
          { items: [{ label: "Karriere", href: "#" }, { label: "Impressum", href: "#" }] }
      ]}
      logoText="Respiro Care Hamburg"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
