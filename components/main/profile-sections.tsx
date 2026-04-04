"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { FiEdit2 } from "react-icons/fi";

import { PROFILE_SECTIONS } from "@/constants";

export const ProfileSections = () => {
  const [activeSectionId, setActiveSectionId] = useState(PROFILE_SECTIONS[0].id);
  const activeSection =
    PROFILE_SECTIONS.find((section) => section.id === activeSectionId) ??
    PROFILE_SECTIONS[0];
  const [activeFilter, setActiveFilter] = useState(activeSection.filters[0]);

  const filteredItems = useMemo(
    () =>
      activeSection.items.filter(
        (item) => activeFilter === "All" || item.group === activeFilter
      ),
    [activeFilter, activeSection]
  );

  return (
    <section className="flex flex-col items-center justify-center py-20 px-4 md:px-8">
      <div className="w-full max-w-4xl rounded-2xl border border-[#2A0E61] bg-[#0b0f1a]/90 shadow-[0_0_35px_rgba(42,14,97,0.4)] overflow-hidden">
        <div className="px-4 md:px-6 py-4 border-b border-[#2A0E61]">
          <div className="flex flex-wrap gap-2">
            {PROFILE_SECTIONS.map((section) => {
              const isActive = activeSectionId === section.id;

              return (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSectionId(section.id);
                    setActiveFilter(section.filters[0]);
                  }}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-400 to-cyan-400 text-black"
                      : "bg-transparent border border-[#3b2b6d] text-gray-300 hover:text-white"
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="px-4 md:px-6 pt-5 pb-4">
          <h2 className="text-3xl font-semibold text-center text-gray-100">
            {activeSection.title}
          </h2>
        </div>

        <div className="px-4 md:px-6 pb-4">
          <div className="flex flex-wrap gap-2">
            {activeSection.filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-400 to-cyan-400 text-black"
                      : "bg-transparent border border-[#3b2b6d] text-gray-300 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        <div className="px-4 md:px-6 pb-6">
          <div className="divide-y divide-[#2A0E61] border-y border-[#2A0E61]">
            {filteredItems.map((item) => (
              <article
                key={item.title}
                className="py-5 flex items-start justify-between gap-3"
              >
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  {item.evidence && (
                    <div className="mt-3 flex items-start gap-3 text-gray-300">
                      {item.evidenceImage && (
                        <Image
                          src={item.evidenceImage}
                          alt={item.evidence}
                          width={28}
                          height={28}
                          className="rounded-md object-cover mt-0.5"
                        />
                      )}
                      <p className="leading-6">{item.evidence}</p>
                    </div>
                  )}
                </div>
                <FiEdit2 className="h-6 w-6 text-gray-300 shrink-0 mt-1" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
