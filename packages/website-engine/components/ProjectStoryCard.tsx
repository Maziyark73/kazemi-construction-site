import { MapPin } from "lucide-react";
import type { Project } from "@/packages/website-engine/config/types";

const fallbackImage = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1300&q=85";

export default function ProjectStoryCard({ featured = false, project }: { featured?: boolean; project: Project }) {
  return (
    <article className={`overflow-hidden rounded-lg border border-white/12 bg-white/8 shadow-xl shadow-black/20 ${featured ? "lg:row-span-2" : ""}`}>
      <div className={`relative ${featured ? "h-80 lg:h-[28rem]" : "h-60"}`}>
        <img src={project.image || fallbackImage} alt={project.title} className="h-full w-full object-cover" />
        <div className="absolute left-4 top-4 rounded-full bg-stone-950/82 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-[var(--brand-gold)] backdrop-blur">
          {project.serviceType}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-black uppercase leading-tight tracking-wide">{project.title}</h3>
        <p className="mt-3 flex items-center gap-2 text-sm font-bold text-white/70">
          <MapPin className="h-4 w-4 text-[var(--brand-gold)]" />
          {project.city}
        </p>
        <p className="mt-4 text-sm leading-7 text-white/68">{project.description}</p>
      </div>
    </article>
  );
}

