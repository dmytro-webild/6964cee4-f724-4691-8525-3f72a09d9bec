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
      brandName="Respiro Care Hamburg"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{ variant: "gradient-bars" }}
      title="Pflege, die zuhause das Leben leichter macht."
      description="Wir betreuen Menschen in Hamburg in ihrer eigenen Wohnung – mit der Ruhe, dem Respekt und der Fachkompetenz, die Familien für ihre Angehörigen suchen."
      leftCarouselItems={[
        { imageSrc: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800&_wi=1", imageAlt: "Pflege zuhause" },
        { imageSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800", imageAlt: "Intensivpflege" },
      ]}
      rightCarouselItems={[
        { imageSrc: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800&_wi=1", imageAlt: "Atmungstherapie" },
        { imageSrc: "https://images.unsplash.com/photo-1586773860418-d37222d8dfde?auto=format&fit=crop&q=80&w=800", imageAlt: "Pflegequalität" },
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
      imageSrc="https://images.unsplash.com/photo-1579684385127-1ecd15d5bfbcc?auto=format&fit=crop&q=80&w=800"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { id: "f1", title: "Heimbeatmung", description: "Umfassende Unterstützung bei sämtlichen Beatmungsformen.", tag: "Medizinisch", imageSrc: "https://images.unsplash.com/photo-1516574637775-80277353f86e?auto=format&fit=crop&q=80&w=800" },
        { id: "f2", title: "24/7 Intensivbetreuung", description: "Rund-um-die-Uhr Überwachung durch spezialisierte Fachkräfte.", tag: "Sicherheit", imageSrc: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800&_wi=2" },
        { id: "f3", title: "Individuelle Lebensqualität", description: "Wir integrieren medizinisches Know-how in Ihren persönlichen Alltag.", tag: "Lebensqualität", imageSrc: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800&_wi=2" },
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
        { id: "m1", value: "15+", description: "Jahre Erfahrung" },
        { id: "m2", value: "100%", description: "Fachpersonalquote" },
        { id: "m3", value: "500+", description: "Erfolgreiche Pflegefälle" },
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
      members={[]}
      title="Ihr Team in Hamburg"
      description="Erfahrene Hände für Ihre Gesundheit."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[]}
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
      columns={[]}
      logoText="Respiro Care Hamburg"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}