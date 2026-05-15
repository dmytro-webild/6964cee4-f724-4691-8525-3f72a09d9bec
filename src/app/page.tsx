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
import { Star, HandHeart, Ear, Users, FileCheck, ShieldCheck } from "lucide-react";

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
              { name: "Start", id: "hero" },
              { name: "Über uns", id: "about" },
              { name: "Leistungen", id: "services" },
              { name: "Team", id: "team" },
              { name: "Kontakt", id: "contact" },
            ]}
            brandName="Ihr Pflegedienst "
          />
        </div>

        <div id="hero" data-section="hero">
            <HeroSplitDoubleCarousel
            background={{ variant: "gradient-bars" }}
            title="Pflege, die zuhause das Leben leichter macht."
            description="Wir betreuen Menschen in Hamburg in ihrer eigenen Wohnung – mit der Ruhe, dem Respekt und der Fachkompetenz, die Familien für ihre Angehörigen suchen."
            leftCarouselItems={[
              { imageSrc: "https://img.b2bpic.net/free-photo/closeup-support-hands_53876-14962.jpg?id=2769160", imageAlt: "Pflege zuhause" },
              { imageSrc: "https://img.b2bpic.net/premium-photo/smiling-nurse-supporting-elderly-patient-hospital_495423-69918.jpg?id=367683086", imageAlt: "Intensivpflege" },
            ]}
            rightCarouselItems={[
              { imageSrc: "https://img.b2bpic.net/premium-photo/holding-hands-nurse-senior-woman-wheelchair-with-help-support-health-wellness_1176719-1023.jpg?id=237862665", imageAlt: "Atmungstherapie" },
              { imageSrc: "https://img.b2bpic.net/free-photo/african-social-worker-taking-care-senior-woman_23-2149031346.jpg?id=16137216", imageAlt: "Pflegequalität" },
            ]}
            tag="Intensivpflege {hier kann Ihre Stadt stehen}"
            buttons={[
              { text: "Erstberatung vereinbaren", href: "#contact" },
            ]}
          >
            <div className="mt-8 flex items-center gap-3 bg-[var(--card)] p-4 rounded-lg border border-[var(--accent)] border-l-4 border-l-[var(--primary-cta)] w-fit">
              <ShieldCheck className="w-6 h-6 text-[var(--primary-cta)]" />
              <div className="flex flex-col">
                <span className="font-bold text-[var(--foreground)]">DSGVO-konform</span>
                <span className="text-sm text-[var(--foreground)] opacity-70">Ihre Daten bleiben in Deutschland</span>
              </div>
            </div>
          </HeroSplitDoubleCarousel>
        </div>

        <div id="trust" data-section="trust" className="py-12 bg-[var(--card)]">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    { icon: HandHeart, title: "Entlastung für die Familie", text: "Wir schenken Angehörigen die Freiheit, sich wieder auf das Wesentliche zu konzentrieren." },
                    { icon: Ear, title: "Wir hören erst zu", text: "Ihr Bedarf und Ihre Wünsche stehen im Mittelpunkt unseres Handelns." },
                    { icon: Users, title: "Liebevolle Pflegekräfte", text: "Unser Team überzeugt durch menschliche Wärme und höchste fachliche Expertise." },
                    { icon: FileCheck, title: "Abrechnung über die Krankenkasse", text: "Wir unterstützen Sie vollumfänglich bei allen bürokratischen Prozessen." }
                ].map((item, i) => (
                    <div key={i} className="group flex flex-col items-center text-center p-6 bg-[var(--background)] rounded-xl border border-[var(--accent)] transition-transform hover:-translate-y-2 hover:shadow-lg">
                        <item.icon className="w-10 h-10 mb-4 text-[var(--primary-cta)]" />
                        <h3 className="font-semibold mb-2 text-[var(--foreground)]">{item.title}</h3>
                        <p className="text-sm text-[var(--foreground)] opacity-80">{item.text}</p>
                    </div>
                ))}
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
              { id: "f1", title: "Heimbeatmung", description: "Umfassende Unterstützung bei sämtlichen Beatmungsformen.", tag: "Medizinisch", imageSrc: "https://img.b2bpic.net/free-photo/you-are-best-grandma-world_637285-9689.jpg?id=26634137" },
              { id: "f2", title: "24/7 Intensivbetreuung", description: "Rund-um-die-Uhr Überwachung durch spezialisierte Fachkräfte.", tag: "Sicherheit", imageSrc: "https://img.b2bpic.net/free-photo/nurse-taking-care-old-woman_53876-48760.jpg?id=3295516" },
              { id: "f3", title: "Individuelle Lebensqualität", description: "Wir integrieren medizinisches Know-how in Ihren persönlichen Alltag.", tag: "Lebensqualität", imageSrc: "https://img.b2bpic.net/free-photo/cheerful-grandparents-having-fun-with-their-granddaughter-home_637285-9707.jpg?id=26634263" },
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
              { id: "m1", name: "Sarah M.", role: "Pflegedienstleitung", imageSrc: "https://img.b2bpic.net/premium-photo/nurse-portrait-black-woman-with-arms-crossed-hospital-healthcare-medical-wellness-happy-confident-proud-female-physician-professional-doctor-from-south-africa-clinic_590464-139704.jpg?id=41274616" },
              { id: "m2", name: "Markus K.", role: "Intensivpflegefachkraft", imageSrc: "https://img.b2bpic.net/free-photo/smile-happiness-nurse-medical-arab-strong_1291-31.jpg?id=1240914" },
              { id: "m3", name: "Elena V.", role: "Pflegerin", imageSrc: "https://img.b2bpic.net/free-photo/portrait-smiling-nurse-looking-camera-while-standing-clinic_637285-5031.jpg?id=26143709" },
            ]}
            title="Ihr Team von Pflegedienst"
            description="Erfahrene Hände für Ihre Gesundheit."
          />
        </div>

        <div id="testimonials" data-section="testimonials">
            <TestimonialCardSix
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            testimonials={[
              { id: "t1", name: "Familie Schmidt", handle: "@hamburg", testimonial: "Die Pflege zuhause war eine enorme Erleichterung für uns. Sehr professionell und warmherzig.", imageSrc: "https://img.b2bpic.net/free-photo/family-with-little-son-autumn-park_1303-11730.jpg?id=3395973" },
              { id: "t2", name: "Thomas L.", handle: "@patient", testimonial: "Ich fühle mich bei Respiro Care in besten Händen. Das Team ist immer da, wenn man es braucht.", imageSrc: "https://img.b2bpic.net/free-photo/happy-man-standing-beach_107420-9868.jpg?id=5194908" }
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
            logoText="Pflegedienst"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}