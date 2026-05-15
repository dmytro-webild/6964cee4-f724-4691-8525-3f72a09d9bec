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
        {
          name: "Start",
          id: "#hero",
        },
        {
          name: "Über uns",
          id: "#about",
        },
        {
          name: "Leistungen",
          id: "#services",
        },
        {
          name: "Team",
          id: "#team",
        },
        {
          name: "Kontakt",
          id: "#contact",
        },
      ]}
      brandName="Respiro Care Hamburg"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Pflege, die zuhause das Leben leichter macht."
      description="Wir betreuen Menschen in Hamburg in ihrer eigenen Wohnung – mit der Ruhe, dem Respekt und der Fachkompetenz, die Familien für ihre Angehörigen suchen."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/watercolor-hospital-health-care-illustration_23-2151621096.jpg",
          imageAlt: "modern medical clinic interior",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/female-surgeon-with-surgical-mask-operating-room-using-3d-image-guided-surgery-machine_657921-1155.jpg",
          imageAlt: "nursing care patient interaction",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/group-medical-professionals-icu-ready-coronavirus-patients_53876-138953.jpg",
          imageAlt: "Group of medical professionals at the ICU ready for coronavirus patients",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-team-health-workers_23-2149112529.jpg",
          imageAlt: "Close up on team of health workers",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/multiethnic-group-three-doctors-nurses-standing-hospital-corridor-wearing-scrubs-coats-team-healthcare-workers-are-staring-camera-smiling_657921-73.jpg",
          imageAlt: "A multiethnic group of three doctors and nurses standing in a hospital corridor",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medical-assistant-consulting-senior-patient-sitting-waiting-area-using-files-report-take-notes-about-diagnosis-nurse-retired-man-with-disease-doing-examination-hospital-lobby_482257-46275.jpg",
          imageAlt: "nursing care patient interaction",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-blur-hospital-clinic-interior_1203-7891.jpg",
          imageAlt: "modern medical clinic interior",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/doctors-nurse-interacting-with-each-other_107420-84776.jpg",
          imageAlt: "Doctors and nurse interacting with each other",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/multiethnic-group-three-doctors-nurses-standing-hospital-corridor-wearing-scrubs-coats-team-healthcare-workers-are-staring-camera-smiling_657921-78.jpg",
          imageAlt: "A multiethnic group of three doctors and nurses",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/multiethnic-group-three-doctors-nurses-standing-hospital-corridor-wearing-scrubs-coats-team-healthcare-workers-are-staring-camera-smiling_657921-98.jpg",
          imageAlt: "A multiethnic group of three doctors and nurses standing in a hospital corridor",
        },
      ]}
      tag="Intensivpflege Hamburg"
      buttons={[
        {
          text: "Erstberatung vereinbaren",
          href: "#contact",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/cinematic-portrait-man-working-healthcare-system-having-care-job_23-2151237547.jpg",
          alt: "Cinematic portrait of man working in the healthcare system",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cinematic-portrait-man-working-healthcare-system-having-care-job_23-2151237644.jpg",
          alt: "Cinematic portrait of man working in the healthcare system",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cinematic-portrait-man-working-healthcare-system-having-care-job_23-2151237569.jpg",
          alt: "Cinematic portrait of man working in the healthcare system",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-woman-medic-with-arms-crossed_23-2147767288.jpg",
          alt: "Smiling woman medic with arms crossed",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-medics-team-lab_23-2147767285.jpg",
          alt: "Cheerful medics team in lab",
        },
      ]}
      marqueeItems={[
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/flat-lay-health-still-life-composition-with-copy-space_23-2148854093.jpg",
          alt: "Flat lay health still life composition",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/flat-lay-frame-with-pills_23-2148504637.jpg",
          alt: "Flat lay frame with pills",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/white-first-aid-kit-with-scissor-syringe-tweezers-blue-background_23-2147874864.jpg",
          alt: "White first aid kit",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/medical-pill-box-stethoscope-mobile-phone-medical-equipment-s-orange-background_23-2148050542.jpg",
          alt: "Medical pill box and stethoscope",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/front-view-assortment-medical-still-life-elements_23-2148854061.jpg",
          alt: "Assortment of medical still life elements",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Ihre Experten für respiratorische Pflege"
      description="Seit Jahren in Hamburg tätig, bieten wir spezialisierte ambulante und 1:1 Intensivpflegeleistungen. Unser Team aus hochqualifizierten Pflegefachkräften sorgt für medizinische Sicherheit und höchste Lebensqualität."
      bulletPoints={[
        {
          title: "1:1 Intensivpflege",
          description: "Maximale Aufmerksamkeit und individuelle Betreuung rund um die Uhr.",
        },
        {
          title: "Beatmungsexpertise",
          description: "Spezialisierte Pflege bei invasiver und nicht-invasiver Beatmung.",
        },
        {
          title: "Ambulanter Fokus",
          description: "Pflege in der vertrauten häuslichen Umgebung in ganz Hamburg.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/empty-medical-doctor-office-interior-clinic-hospital-with-wheelchair_554837-839.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Heimbeatmung",
          description: "Umfassende Unterstützung bei sämtlichen Beatmungsformen.",
          tag: "Medizinisch",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-female-doctor-having-headache-mask-yellow-background-health-virus-pandemic-covid_179666-16559.jpg",
        },
        {
          id: "f2",
          title: "24/7 Intensivbetreuung",
          description: "Rund-um-die-Uhr Überwachung durch spezialisierte Fachkräfte.",
          tag: "Sicherheit",
          imageSrc: "http://img.b2bpic.net/free-photo/view-woman-using-nebulizer-home-respiratory-health-problems_23-2150574031.jpg",
        },
        {
          id: "f3",
          title: "Individuelle Lebensqualität",
          description: "Wir integrieren medizinisches Know-how in Ihren persönlichen Alltag.",
          tag: "Lebensqualität",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-medical-assistant-looking-tablet-screen-with-information_482257-21548.jpg",
        },
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
      products={[
        {
          id: "p1",
          name: "High-End Beatmungssystem",
          price: "Beratung",
          variant: "Medizintechnik",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-empty-doctor-office-having-medical-instruments-desk-table-used-professional-examination-hospital-room-with-nobody-it-equipped-with-otoscope-infrared-thermometer_482257-35894.jpg",
        },
        {
          id: "p2",
          name: "Monitoring Dashboard",
          price: "Inklusive",
          variant: "Digital",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-dentist-nurse-holding-tablet-with-digital-radiography-while-doctor-is-working-with-patient-background-examining-teeth-problem-sitting-stomatological-chair-dental-clinic_482257-13467.jpg",
        },
        {
          id: "p3",
          name: "Respiratorisches Zubehörset",
          price: "auf Anfrage",
          variant: "Zubehör",
          imageSrc: "http://img.b2bpic.net/free-photo/expert-evaluating-diagnostic-results-with-patient-medical-cabinet_482257-124200.jpg",
        },
        {
          id: "p4",
          name: "Sicherheits-Notfallset",
          price: "auf Anfrage",
          variant: "Medizin",
          imageSrc: "http://img.b2bpic.net/free-photo/picture-old-woman-resting-bed-nursing-room-peaceful-pensioner_482257-45277.jpg",
        },
        {
          id: "p5",
          name: "Mobilitätsunterstützung",
          price: "Beratung",
          variant: "Pflege",
          imageSrc: "http://img.b2bpic.net/free-photo/collection-medical-equipments-capsules-white-background_23-2147874827.jpg",
        },
        {
          id: "p6",
          name: "Vitalwert-Sensorsystem",
          price: "auf Anfrage",
          variant: "Digital",
          imageSrc: "http://img.b2bpic.net/free-photo/measuring-body-temperature-with-contactless-body-thermometer_1153-7289.jpg",
        },
      ]}
      title="Pflege-Ausstattung & Technik"
      description="Modernste Technik für Ihren häuslichen Bedarf."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Erfolge in Zahlen"
      tag="Transparenz"
      metrics={[
        {
          id: "m1",
          value: "15+",
          description: "Jahre Erfahrung",
        },
        {
          id: "m2",
          value: "100%",
          description: "Fachpersonalquote",
        },
        {
          id: "m3",
          value: "500+",
          description: "Erfolgreiche Pflegefälle",
        },
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
        {
          id: "t1",
          name: "Dr. med. Anna Schmidt",
          role: "Chefärztin",
          imageSrc: "http://img.b2bpic.net/free-photo/young-female-doctor-posing-corridor-hospital_1303-21215.jpg",
        },
        {
          id: "t2",
          name: "Markus Weber",
          role: "Pflegedienstleitung",
          imageSrc: "http://img.b2bpic.net/free-photo/afro-american-doctor-writing-medical-expertise-clipboard_482257-6560.jpg",
        },
        {
          id: "t3",
          name: "Sabine Meyer",
          role: "Intensivfachkraft",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-female-doctor-medical-shirt-sterile-mask-yellow-desk-hospital-medic-nurse-health-covid-pandemic_179666-23799.jpg",
        },
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
        {
          id: "1",
          name: "Jürgen W.",
          handle: "@patient",
          testimonial: "Die 1:1 Betreuung ist lebensverändernd. Danke für alles.",
          imageSrc: "http://img.b2bpic.net/free-photo/doctor-taking-notes-about-patient_23-2148757365.jpg",
        },
        {
          id: "2",
          name: "Frau D.",
          handle: "@angehörige",
          testimonial: "Endlich können wir sicher sein, dass alles gut versorgt ist.",
          imageSrc: "http://img.b2bpic.net/free-photo/doctor-doing-their-work-pediatrics-office_23-2149224126.jpg",
        },
        {
          id: "3",
          name: "Klaus T.",
          handle: "@patient",
          testimonial: "Hervorragende fachliche Betreuung in gewohnter Umgebung.",
          imageSrc: "http://img.b2bpic.net/free-photo/medic-explaining-medical-information-computer-patient-while-asking-nurse-help-doctors-office-doctor-doing-healthcare-checkup-with-woman-using-monitor-technology_482257-41340.jpg",
        },
        {
          id: "4",
          name: "Maria B.",
          handle: "@patient",
          testimonial: "Ich fühle mich seit dem ersten Tag bestens aufgehoben.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-female-doctors-helping-patient_23-2149844605.jpg",
        },
        {
          id: "5",
          name: "Dieter K.",
          handle: "@patient",
          testimonial: "Großartiges Team, sehr kompetent und stets freundlich.",
          imageSrc: "http://img.b2bpic.net/free-photo/senior-couple-talking-with-their-doctor-while-he-is-showing-them-something-computer_637285-1487.jpg",
        },
      ]}
      title="Das sagen unsere Patienten"
      description="Vertrauen durch erstklassige Pflege."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Service"
      title="Kontaktieren Sie uns"
      description="Wir stehen Ihnen für ein unverbindliches Beratungsgespräch zur Verfügung."
      buttonText="Anfrage senden"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Über uns",
              href: "#about",
            },
            {
              label: "Leistungen",
              href: "#services",
            },
          ],
        },
        {
          items: [
            {
              label: "Team",
              href: "#team",
            },
            {
              label: "Kontakt",
              href: "#contact",
            },
          ],
        },
        {
          items: [
            {
              label: "Impressum",
              href: "#",
            },
            {
              label: "Datenschutz",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Respiro Care Hamburg"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
