"use client";

import { useState, useCallback, useRef } from "react";
import type { SiteData } from "@/data/types";
import {
  HeroSection,
  SkillsSection,
  ExperienceSection,
  AboutSection,
  ContactSection,
  CertificateAndHonorsSection,
  getClipFrom,
} from "./sections";
import { useResizablePanels, useEntryAnimation } from "./hooks";
import ExpandedOverlay from "./sections/ui/ExpandedOverlay";

type ResizableLayoutProps = {
  siteData: SiteData;
  expandedSection: "experience" | "about" | "certificates" | null;
  setExpandedSection: (section: "experience" | "about" | "certificates" | null) => void;
};

export default function ResizableLayout({
  siteData,
  expandedSection,
  setExpandedSection,
}: ResizableLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sourceRect, setSourceRect] = useState<DOMRect | null>(null);

  // Refs for panel containers (used to capture bounding rect for expansion)
  const experiencePanelRef = useRef<HTMLDivElement>(null);
  const aboutPanelRef = useRef<HTMLDivElement>(null);
  const certificatesPanelRef = useRef<HTMLDivElement>(null);

  const handleExperienceExpand = useCallback(() => {
    if (expandedSection === "experience") {
      setExpandedSection(null);
    } else {
      const rect = experiencePanelRef.current?.getBoundingClientRect();
      if (rect) setSourceRect(rect);
      setExpandedSection("experience");
    }
  }, [expandedSection, setExpandedSection]);

  const handleAboutExpand = useCallback(() => {
    if (expandedSection === "about") {
      setExpandedSection(null);
    } else {
      const rect = aboutPanelRef.current?.getBoundingClientRect();
      if (rect) setSourceRect(rect);
      setExpandedSection("about");
    }
  }, [expandedSection, setExpandedSection]);

  const handleCertificatesExpand = useCallback(() => {
    if (expandedSection === "certificates") {
      setExpandedSection(null);
    } else {
      const rect = certificatesPanelRef.current?.getBoundingClientRect();
      if (rect) setSourceRect(rect);
      setExpandedSection("certificates");
    }
  }, [expandedSection, setExpandedSection]);

  const clipFrom = getClipFrom(sourceRect);

  // Use custom hooks for animation logic
  const { sizes, isDragging, handleMouseDown } =
    useResizablePanels(containerRef);

  // Animation refs for lines
  const mainHLineRef = useRef<HTMLDivElement>(null);
  const topVLineRef = useRef<HTMLDivElement>(null);
  const bottomVLineRef = useRef<HTMLDivElement>(null);
  const bottomRightHLineRef = useRef<HTMLDivElement>(null);
  const bottomRightSecondHLineRef = useRef<HTMLDivElement>(null);

  // Animation refs for content
  const heroContentRef = useRef<HTMLDivElement>(null);
  const skillsContentRef = useRef<HTMLDivElement>(null);
  const experienceContentRef = useRef<HTMLDivElement>(null);
  const aboutContentRef = useRef<HTMLDivElement>(null);
  const certificatesContentRef = useRef<HTMLDivElement>(null);
  const contactContentRef = useRef<HTMLDivElement>(null);

  // Entry animation
  useEntryAnimation({
    lines: {
      mainHLine: mainHLineRef,
      topVLine: topVLineRef,
      bottomVLine: bottomVLineRef,
      bottomRightHLine: bottomRightHLineRef,
      bottomRightSecondHLine: bottomRightSecondHLineRef,
    },
    content: {
      hero: heroContentRef,
      skills: skillsContentRef,
      experience: experienceContentRef,
      about: aboutContentRef,
      certificates: certificatesContentRef,
      contact: contactContentRef,
    },
  });

  const bottomHeight = 100 - sizes.topHeight;

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* ===== TOP SECTION (Hero | Skills) ===== */}
      <div
        className="absolute left-0 right-0 top-0 flex"
        style={{ height: `${sizes.topHeight}%` }}
      >
        {/* Hero Section */}
        <div
          className="relative h-full overflow-auto"
          style={{ width: `${sizes.topLeftWidth}%` }}
        >
          <div ref={heroContentRef} className="h-full p-4">
            <HeroSection data={siteData.hero} />
          </div>
        </div>

        {/* Vertical Divider (Top Section) */}
        <div
          className="group relative z-10 flex h-full w-0 cursor-col-resize items-center justify-center"
          onMouseDown={handleMouseDown("vertical-top")}
        >
          <div
            ref={topVLineRef}
            className={`absolute h-full w-px origin-top bg-black ${
              isDragging === "vertical-top"
                ? "w-1 bg-gray-400"
                : "group-hover:w-1 group-hover:bg-gray-400"
            }`}
          />
        </div>

        {/* Skills Section */}
        <div
          className="relative h-full overflow-auto"
          style={{ width: `${100 - sizes.topLeftWidth}%` }}
        >
          <div ref={skillsContentRef} className="h-full p-4">
            <SkillsSection data={siteData.skills} />
          </div>
        </div>
      </div>

      {/* Horizontal Divider (Main - between Top and Bottom) */}
      <div
        className="group absolute left-0 right-0 z-10 flex h-0 cursor-row-resize items-center justify-center"
        style={{ top: `${sizes.topHeight}%` }}
        onMouseDown={handleMouseDown("horizontal-main")}
      >
        <div
          ref={mainHLineRef}
          className={`absolute h-px w-full origin-left bg-black ${
            isDragging === "horizontal-main"
              ? "h-1 bg-gray-400"
              : "group-hover:h-1 group-hover:bg-gray-400"
          }`}
        />
      </div>

      {/* ===== BOTTOM SECTION (Experience | About + Certificates + Contact) ===== */}
      <div
        className="absolute bottom-0 left-0 right-0 flex"
        style={{ height: `${bottomHeight}%` }}
      >
        {/* Experience Section (Left) */}
        <div
          ref={experiencePanelRef}
          className="relative h-full overflow-auto"
          style={{ width: `${sizes.bottomLeftWidth}%` }}
        >
          <div ref={experienceContentRef} className="h-full p-4">
            <ExperienceSection
              data={siteData.experienceCategories}
              onExpand={handleExperienceExpand}
            />
          </div>
        </div>

        {/* Vertical Divider (Bottom Section) */}
        <div
          className="group relative z-10 flex h-full w-0 cursor-col-resize items-center justify-center"
          onMouseDown={handleMouseDown("vertical-bottom")}
        >
          <div
            ref={bottomVLineRef}
            className={`absolute h-full w-px origin-top bg-black ${
              isDragging === "vertical-bottom"
                ? "w-1 bg-gray-400"
                : "group-hover:w-1 group-hover:bg-gray-400"
            }`}
          />
        </div>

        {/* Right Section (About + Certificates + Contact) */}
        <div
          className="relative h-full"
          style={{ width: `${100 - sizes.bottomLeftWidth}%` }}
        >
          {/* About Section */}
          <div
            ref={aboutPanelRef}
            className="absolute left-0 right-0 top-0 overflow-auto"
            style={{ height: `${sizes.bottomRightTopHeight}%` }}
          >
            <div ref={aboutContentRef} className="h-full p-4">
              <AboutSection
                data={siteData.about}
                onExpand={handleAboutExpand}
              />
            </div>
          </div>

          {/* Horizontal Divider (About / Certificates) */}
          <div
            className="group absolute left-0 right-0 z-10 flex h-0 cursor-row-resize items-center justify-center"
            style={{ top: `${sizes.bottomRightTopHeight}%` }}
            onMouseDown={handleMouseDown("horizontal-bottom-right")}
          >
            <div
              ref={bottomRightHLineRef}
              className={`absolute h-px w-full origin-left bg-black ${
                isDragging === "horizontal-bottom-right"
                  ? "h-1 bg-gray-400"
                  : "group-hover:h-1 group-hover:bg-gray-400"
              }`}
            />
          </div>

          {/* Certificates & Honors Section */}
          <div
            ref={certificatesPanelRef}
            className="absolute left-0 right-0 overflow-auto"
            style={{
              top: `${sizes.bottomRightTopHeight}%`,
              height: `${sizes.bottomRightMiddleHeight}%`
            }}
          >
            <div ref={certificatesContentRef} className="h-full p-4">
              <CertificateAndHonorsSection
                data={siteData.certificateCategories}
                onExpand={handleCertificatesExpand}
              />
            </div>
          </div>

          {/* Horizontal Divider (Certificates / Contact) */}
          <div
            className="group absolute left-0 right-0 z-10 flex h-0 cursor-row-resize items-center justify-center"
            style={{
              top: `${sizes.bottomRightTopHeight + sizes.bottomRightMiddleHeight}%`
            }}
            onMouseDown={handleMouseDown("horizontal-bottom-right-second")}
          >
            <div
              ref={bottomRightSecondHLineRef}
              className={`absolute h-px w-full origin-left bg-black ${
                isDragging === "horizontal-bottom-right-second"
                  ? "h-1 bg-gray-400"
                  : "group-hover:h-1 group-hover:bg-gray-400"
              }`}
            />
          </div>

          {/* Contact Section */}
          <div
            className="absolute bottom-0 left-0 right-0 overflow-auto"
            style={{
              height: `${100 - sizes.bottomRightTopHeight - sizes.bottomRightMiddleHeight}%`
            }}
          >
            <div ref={contactContentRef} className="h-full p-4">
              <ContactSection data={siteData.contact} />
            </div>
          </div>
        </div>
      </div>

      {/* Expanded overlays */}
      <ExpandedOverlay
        isOpen={expandedSection === "experience"}
        clipFrom={clipFrom}
        padding="p-8"
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
        padding="p-8"
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
        padding="p-8"
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
