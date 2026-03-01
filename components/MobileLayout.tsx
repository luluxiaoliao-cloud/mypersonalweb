"use client";

import { useState, useRef } from "react";
import type { SiteData } from "@/data/types";
import {
  HeroSection,
  SkillsSection,
  ExperienceSection,
  AboutSection,
  ContactSection,
  CertificateAndHonorsSection,
  SectionHeading_Clickable,
  getClipFrom,
} from "./sections";
import ExpandedOverlay from "./sections/ui/ExpandedOverlay";

type MobileLayoutProps = {
  siteData: SiteData;
  expandedSection: "experience" | "about" | "certificates" | null;
  setExpandedSection: (section: "experience" | "about" | "certificates" | null) => void;
};

export default function MobileLayout({
  siteData,
  expandedSection,
  setExpandedSection,
}: MobileLayoutProps) {
  const [sourceRect, setSourceRect] = useState<DOMRect | null>(null);

  const experienceRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const certificatesRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleExperienceExpand = () => {
    if (expandedSection === "experience") {
      setExpandedSection(null);
    } else {
      const rect = experienceRef.current?.getBoundingClientRect();
      if (rect) setSourceRect(rect);
      setExpandedSection("experience");
    }
  };

  const handleAboutExpand = () => {
    if (expandedSection === "about") {
      setExpandedSection(null);
    } else {
      const rect = aboutRef.current?.getBoundingClientRect();
      if (rect) setSourceRect(rect);
      setExpandedSection("about");
    }
  };

  const handleCertificatesExpand = () => {
    if (expandedSection === "certificates") {
      setExpandedSection(null);
    } else {
      const rect = certificatesRef.current?.getBoundingClientRect();
      if (rect) setSourceRect(rect);
      setExpandedSection("certificates");
    }
  };

  const clipFrom = getClipFrom(sourceRect);

  return (
    <div ref={containerRef} className="relative h-dvh overflow-hidden">
      {/* Mobile column layout */}
      <div
        className="grid h-full"
        style={{
          gridTemplateRows:
            "minmax(0, 2.5fr) minmax(0, 2.5fr) minmax(0, 0.7fr) minmax(0, 0.7fr) minmax(0, 0.7fr) minmax(0, 1.5fr)",
        }}
      >
        {/* Hero Section */}
        <div className="overflow-hidden border-b border-black px-6 py-6">
          <HeroSection data={siteData.hero} />
        </div>

        {/* Skills Section */}
        <div className="overflow-hidden border-b border-black px-6 py-6">
          <SkillsSection data={siteData.skills} />
        </div>

        {/* Experience Section */}
        <div
          ref={experienceRef}
          className="flex cursor-pointer items-center justify-between overflow-hidden border-b border-black bg-white px-6 transition-colors duration-200 hover:bg-gray-50"
        >
          <SectionHeading_Clickable onClick={handleExperienceExpand}>
            Experience
          </SectionHeading_Clickable>
          <div onClick={handleExperienceExpand} className="text-xl">
            +
          </div>
        </div>

        {/* About Section */}
        <div
          ref={aboutRef}
          className="flex cursor-pointer items-center justify-between overflow-hidden border-b border-black bg-white px-6 transition-colors duration-200 hover:bg-gray-50"
        >
          <SectionHeading_Clickable onClick={handleAboutExpand}>
            About Me
          </SectionHeading_Clickable>
          <div onClick={handleAboutExpand} className="text-xl">
            +
          </div>
        </div>

        {/* Certificates & Honors Section */}
        <div
          ref={certificatesRef}
          className="flex cursor-pointer items-center justify-between overflow-hidden border-b border-black bg-white px-6 transition-colors duration-200 hover:bg-gray-50"
        >
          <SectionHeading_Clickable onClick={handleCertificatesExpand}>
            Certificates & Honors
          </SectionHeading_Clickable>
          <div onClick={handleCertificatesExpand} className="text-xl">
            +
          </div>
        </div>

        {/* Contact Section */}
        <div className="overflow-hidden bg-white px-6 py-6">
          <ContactSection data={siteData.contact} />
        </div>
      </div>

      {/* Expanded overlays */}
      <ExpandedOverlay
        isOpen={expandedSection === "experience"}
        clipFrom={clipFrom}
        uniqueKey="experience-expanded"
      >
        <ExperienceSection
          data={siteData.experienceCategories}
          onExpand={handleExperienceExpand}
          isExpanded={true}
        />
      </ExpandedOverlay>

      <ExpandedOverlay
        isOpen={expandedSection === "about"}
        clipFrom={clipFrom}
        uniqueKey="about-expanded"
      >
        <AboutSection
          data={siteData.about}
          onExpand={handleAboutExpand}
          isExpanded={true}
        />
      </ExpandedOverlay>

      <ExpandedOverlay
        isOpen={expandedSection === "certificates"}
        clipFrom={clipFrom}
        uniqueKey="certificates-expanded"
      >
        <CertificateAndHonorsSection
          data={siteData.certificateCategories}
          onExpand={handleCertificatesExpand}
          isExpanded={true}
        />
      </ExpandedOverlay>
    </div>
  );
}
