import React from 'react';
import { Mail, Phone, MapPin, Calendar, User, Globe, FileText, Download } from 'lucide-react';
import swrLogo from '../assets/swr-logo.png';
import profilbild from '../assets/profilbild.jpg';

export default function App() {
  const exportToPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-neutral-100 py-12 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white font-sans selection:bg-[#5c2d91] selection:text-white">
      {/* PDF Export Button */}
      <div className="max-w-5xl mx-auto mb-4 flex justify-end print:hidden">
        <button
          onClick={exportToPDF}
          className="flex items-center gap-2 bg-gradient-to-r from-[#00a2e2] to-[#5c2d91] hover:from-[#008ec6] hover:to-[#4a2475] text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95"
        >
          <Download className="w-4 h-4" />
          <span>Als PDF exportieren</span>
        </button>
      </div>
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col md:flex-row print:shadow-none print:overflow-visible">
        
        {/* Linke Spalte: Sidebar */}
        <div className="w-full md:w-[35%] bg-neutral-50 p-10 border-r border-neutral-200 flex flex-col relative print:after:content-[''] print:after:absolute print:after:top-full print:after:left-0 print:after:-right-[1px] print:after:h-[3000px] print:after:bg-neutral-50 print:after:border-r print:after:border-neutral-200 print:after:z-0">
          <div className="flex flex-col items-center mb-16">
             <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-[#5c2d91] shadow-lg">
                <img 
                  src={profilbild} 
                  alt="Lea Koch" 
                  className="w-full h-full object-cover scale-125 -translate-y-4" 
                />
             </div>
             <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight text-center uppercase">
               LEA <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00a2e2] to-[#5c2d91] inline-block">KOCH</span>
             </h1>
             <p className="text-xs font-semibold text-neutral-500 uppercase tracking-[0.2em] mt-6 text-center leading-relaxed">
               BEWERBUNG ALS PRAKTIKANTIN<br/>
               IN DER REDAKTION<br/>
               DOKUMENTATION
             </p>
          </div>

          <div className="space-y-12">
             <Section>
                <SectionHeader icon={<User className="w-5 h-5 text-[#5c2d91]" />} title="Kontakt" />
                <div className="space-y-5 text-sm text-neutral-700">
                  <ContactRow icon={<Calendar className="w-4 h-4 text-neutral-400" />} text="03. Juli 2005" />
                  <ContactRow icon={<MapPin className="w-4 h-4 text-neutral-400" />} text={<>Ober-Saulheimer-Straße 1,<br/>55286 Wörrstadt</>} />
                  <ContactRow icon={<Phone className="w-4 h-4 text-neutral-400" />} text="0159 02179402" />
                  <ContactRow icon={<Mail className="w-4 h-4 text-neutral-400" />} text="lea.woerrstadt@t-online.de" />
                </div>
             </Section>

             <Section>
                <SectionHeader icon={<FileText className="w-5 h-5 text-[#5c2d91]" />} title="Profil" />
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Ich bin eine kreative, engagierte und teamfähige Studentin mit großem Interesse an journalistischer Arbeit und Kommunikationsarbeit sowie -strategien. Ich habe eine Leidenschaft für Medien, Recherchearbeit und für die Erstellung von Beiträgen.
                </p>
             </Section>

             <Section>
                <SectionHeader icon={<Globe className="w-5 h-5 text-[#5c2d91]" />} title="Sprachen" />
                <div className="space-y-3 text-sm text-neutral-700">
                  <div className="flex justify-between items-center border-b border-neutral-200 pb-2">
                    <span className="font-medium">Deutsch</span>
                    <span className="text-[#5c2d91] font-semibold">Muttersprache</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-neutral-200 pb-2">
                    <span className="font-medium">Englisch</span>
                    <span className="text-[#5c2d91] font-semibold">B2</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <span className="font-medium">Spanisch</span>
                    <span className="text-[#5c2d91] font-semibold">B1</span>
                  </div>
                </div>
             </Section>
          </div>

          <div className="flex-grow"></div>
        </div>

        {/* Rechte Spalte: Main Content */}
        <div className="w-full md:w-[65%] p-10 md:p-16 relative">
          
          {/* SWR Logo Top Right */}
          <div className="absolute top-2 right-10 md:top-4 md:right-12 flex justify-end">
            <img 
              src={swrLogo} 
              alt="SWR Logo" 
              className="w-24 md:w-28 h-auto object-contain mix-blend-multiply opacity-90" 
            />
          </div>

          <div className="mb-14 mt-12 md:mt-14">
            <MainSectionTitle progressWidth="w-1/4">Berufserfahrung</MainSectionTitle>
            <div className="space-y-10 relative ml-3 pl-8 before:absolute before:left-0 before:top-3 before:bottom-0 before:w-px before:bg-neutral-200">
              <TimelineItem 
                period="Seit 06/2025"
                role="Studentische Hilfskraft"
                company="Zuschauerservice Südwestrundfunk Mainz"
                description={[
                  "Beantwortung von Zuschriften (E-Mails und Briefe) der Zuschauer:innen aus RLP", 
                  "Weiterleitung von ausgewählten Themenvorschlägen an die entsprechenden Fachbereiche", 
                  "Interne Kommunikation mit Redakteur:innen und Redaktionen"
                ]}
              />
              <TimelineItem 
                period="16/01/2023 – 26/01/2023"
                role="Praktikantin"
                company="Schulbetriebspraktikum Max-Planck-Institut für Chemie Mainz"
                description={[
                  "Kennenlernen des Institutes und dessen verschiedenen Abteilungen und Aufgaben", 
                  "Tätigkeit in der Kommunikations- und Öffentlichkeitsarbeit", 
                  "Erstellung eines Social-Media Beitrages für den betriebseigenen Instagram Kanal"
                ]}
              />
            </div>
          </div>

          <div>
            <MainSectionTitle progressWidth="w-2/4">Bildungsweg</MainSectionTitle>
            <div className="space-y-10 relative ml-3 pl-8 before:absolute before:left-0 before:top-3 before:bottom-0 before:w-px before:bg-neutral-200">
              <TimelineItem 
                period="10/2024 – Heute"
                role="B.A. Publizistik"
                company="Johannes Gutenberg-Universität Mainz"
                description={[
                  "4. Fachsemester", 
                  "Schwerpunkte: Einfluss der Massenmedien, Journalismus und PR, Forschung", 
                  "Zwei-Fach-Bachelor: Soziologie im Beifach"
                ]}
              />
              <TimelineItem 
                period="2015 – 2024"
                role="Allgemeine Hochschulreife"
                company="Georg-Forster-Gesamtschule Wörrstadt"
                description={[
                  "Leistungskurse: Deutsch, Sozialkunde, Biologie", 
                  "Abschlussnote: 2,1"
                ]}
              />
            </div>
          </div>

          <div className="mt-14">
            <MainSectionTitle progressWidth="w-3/4">Kenntnisse</MainSectionTitle>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Durch meine Tätigkeit im SWR konnte ich Erfahrungen in dem dort genutzten CRM sowie MS Outlook sammeln. Ebenfalls durch diverse universitäre Aufgaben bin ich mit der Nutzung von MS Word und MS PowerPoint vertraut. Auch kann ich Grundkenntnisse für MS Excel vorweisen.
            </p>
          </div>

        </div>

      </div>

      {/* === SEITE 2: ANSCHREIBEN / MOTIVATIONSSCHREIBEN === */}
      {/* Container mit print:break-before-page für den PDF Export */}
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col md:flex-row mt-8 print:mt-0 print:break-before-page print:shadow-none print:overflow-visible">
        
        {/* Linke Spalte: Sidebar */}
        <div className="w-full md:w-[35%] bg-neutral-50 p-10 border-r border-neutral-200 flex flex-col relative print:after:content-[''] print:after:absolute print:after:top-full print:after:left-0 print:after:-right-[1px] print:after:h-[3000px] print:after:bg-neutral-50 print:after:border-r print:after:border-neutral-200 print:after:z-0">
          <div className="flex flex-col items-center mb-16">
             <h1 className="text-4xl font-extrabold text-neutral-900 tracking-tight text-center uppercase mt-6">
               LEA <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00a2e2] to-[#5c2d91] inline-block">KOCH</span>
             </h1>
             <p className="text-xs font-semibold text-neutral-500 uppercase tracking-[0.2em] mt-6 text-center leading-relaxed">
               BEWERBUNG ALS PRAKTIKANTIN<br/>
               IN DER REDAKTION<br/>
               DOKUMENTATION
             </p>
          </div>

          <div className="space-y-12">
             <Section>
                <SectionHeader icon={<User className="w-5 h-5 text-[#5c2d91]" />} title="Kontakt" />
                <div className="space-y-5 text-sm text-neutral-700">
                  <ContactRow icon={<Calendar className="w-4 h-4 text-neutral-400" />} text="03. Juli 2005" />
                  <ContactRow icon={<MapPin className="w-4 h-4 text-neutral-400" />} text={<>Ober-Saulheimer-Straße 1,<br/>55286 Wörrstadt</>} />
                  <ContactRow icon={<Phone className="w-4 h-4 text-neutral-400" />} text="0159 02179402" />
                  <ContactRow icon={<Mail className="w-4 h-4 text-neutral-400" />} text="lea.woerrstadt@t-online.de" />
                </div>
             </Section>
          </div>

          <div className="flex-grow"></div>
        </div>

        {/* Rechte Spalte: Main Content */}
        <div className="w-full md:w-[65%] p-10 md:p-16 relative">
          
          {/* SWR Logo Top Right */}
          <div className="absolute top-2 right-10 md:top-4 md:right-12 flex justify-end">
            <img 
              src={swrLogo} 
              alt="SWR Logo" 
              className="w-24 md:w-28 h-auto object-contain mix-blend-multiply opacity-90" 
            />
          </div>

          <div className="mb-14 mt-12 md:mt-14 print:mt-16">
            <MainSectionTitle progressWidth="w-full">Anschreiben</MainSectionTitle>
            
            <div className="text-neutral-700 text-sm leading-relaxed space-y-5 print:text-[15px] print:leading-[1.9] print:space-y-8">
              <p>
                <strong>Zweites Deutsches Fernsehen</strong><br/>
                ZDF-Straße 1<br/>
                55127 Mainz
              </p>

              <p className="text-right text-neutral-500">
                Wörrstadt, den 13. Juni 2026
              </p>

              <p className="font-bold text-neutral-900 pt-2">
                Bewerbung als Praktikantin in der Redaktion Dokumentation
              </p>

              <p className="pt-2">Sehr geehrte Damen und Herren,</p>

              <p>
                eine große Leidenschaft für mich ist es, Geschichten durch Bücher, Podcasts oder Reisen kennenzulernen. Was hinter gesellschaftlich relevanten Themen steckt und wie man Komplexes verständlich aufbereitet, fasziniert mich dabei stark. Die Verbindung aus investigativem Journalismus, sorgfältiger Recherche und der visuellen Stärke des Dokumentationsformats macht die Redaktion Dokumentation des ZDF für mich besonders reizvoll. Daher möchte ich mein Interesse für innen- und außenpolitische Themen sowie mein Gespür für Relevanz und Sprache gerne im Rahmen eines Praktikums in Ihrer Redaktion einbringen und erweitern.
              </p>

              <p>
                Bereits in meiner schulischen Laufbahn konnte ich aufgrund meines Leistungskurses Deutsch sowie meiner aktiven Beteiligung in der Schülervertretung wertvolle Kenntnisse in der Artikulation sammeln und stärken. Ebenfalls habe ich als studentische Hilfskraft im SWR Einblicke in journalistische sowie kommunikative Prozesse gewonnen. Meine entwickelten Interessen und Begabungen für wirkungsvolle Sprache, zuverlässige Recherchearbeit und strategische Kommunikation bereiten mir nicht nur viel Freude, sondern möchte ich diese nun auch neben meines Studiengangs Publizistik weiter bei Ihnen vertiefen.
              </p>

              <p>
                Ich bin ein sehr ambitionierter und neugieriger Mensch, weswegen ich das Praktikum im Rahmen der Redaktion Dokumentation als ideale Chance sehe, meine theoretischen Kenntnisse durch praktische redaktionelle Erfahrung im ZDF zu ergänzen und zu vertiefen. 
              </p>

              <p>
                Über eine Einladung zu einem persönlichen Gespräch Ihrerseits freue ich mich sehr.
              </p>

              <p className="pt-4">
                Mit freundlichen Grüßen
              </p>
              
              <div className="mt-8 text-neutral-900 inline-block">
                Lea Koch
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

// Hilfskomponenten

function Section({ children }: { children: React.ReactNode }) {
  return <div className="space-y-5">{children}</div>;
}

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <h3 className="text-lg font-bold text-neutral-900 flex items-center gap-2 uppercase tracking-wide">
      {icon}
      {title}
    </h3>
  );
}

function ContactRow({ icon, text }: { icon: React.ReactNode; text: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white shadow-sm border border-neutral-100 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-neutral-600 font-medium leading-snug">{text}</span>
    </div>
  );
}

function SkillBar({ skill, level }: { skill: string; level: number }) {
  return (
    <div>
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-neutral-700">{skill}</span>
      </div>
      <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
        <div 
          className="bg-[#5c2d91] h-1.5 rounded-full" 
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function MainSectionTitle({ children, progressWidth = "w-12" }: { children: React.ReactNode; progressWidth?: string }) {
  return (
    <h2 className="text-2xl font-bold text-neutral-900 mb-8 flex items-center gap-4 uppercase tracking-wider">
      {children}
      <div className="h-0.5 bg-neutral-200 flex-1 rounded-full relative">
        <div className={`absolute top-0 left-0 h-full bg-gradient-to-r from-[#00a2e2] to-[#5c2d91] rounded-full ${progressWidth}`} />
      </div>
    </h2>
  );
}

function TimelineItem({ 
  period, 
  role, 
  company, 
  description 
}: { 
  period: string; 
  role: string; 
  company: string; 
  description: string[] 
}) {
  return (
    <div className="relative">
      {/* Timeline Dot */}
      <div className="absolute -left-[43px] top-1.5 w-[22px] h-[22px] rounded-full bg-purple-50 border-4 border-white shadow-sm flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-[#5c2d91]" />
      </div>

      <div className="mb-1">
        <span className="text-[#5c2d91] font-bold text-sm tracking-wide uppercase">{period}</span>
      </div>
      <h3 className="text-xl font-bold text-neutral-900 mb-1">{role}</h3>
      <h4 className="text-lg font-medium text-neutral-600 mb-4">{company}</h4>
      
      <ul className="space-y-2">
        {description.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-neutral-600">
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 mt-2 flex-shrink-0" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}