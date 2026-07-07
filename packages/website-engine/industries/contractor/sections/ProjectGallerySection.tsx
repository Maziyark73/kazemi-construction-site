"use client";

import { useWebsiteConfig } from "@/packages/website-engine/config/WebsiteConfigProvider";
import ProjectStoryCard from "@/packages/website-engine/components/ProjectStoryCard";
import SectionHeading from "@/packages/website-engine/components/SectionHeading";

export default function ProjectGallerySection() {
  const { content } = useWebsiteConfig();
  return (
    <section id="projects" className="bg-stone-950 px-5 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          dark
          eyebrow={content.gallery.eyebrow}
          title={content.gallery.title}
          text={content.gallery.text}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          {content.gallery.items.map((project, index) => (
            <ProjectStoryCard key={project.title} featured={index === 0} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
