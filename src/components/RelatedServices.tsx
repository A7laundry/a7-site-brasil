import Link from "next/link";
import { getRelatedLPs, getClusterForSlug } from "@/data/lp-clusters";

interface Props {
  currentSlug: string;
}

export default function RelatedServices({ currentSlug }: Props) {
  const related = getRelatedLPs(currentSlug, 3);
  const cluster = getClusterForSlug(currentSlug);

  return (
    <section className="bg-gray-950 border-t border-white/[0.06] py-12">
      <div className="max-w-5xl mx-auto px-5">
        <p className="text-[11px] font-bold text-gray-600 uppercase tracking-widest mb-6">
          {cluster ? `Mais em ${cluster.label}` : "Outros serviços"}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {related.map((lp) => (
            <Link
              key={lp.slug}
              href={`/${lp.slug}`}
              className="group flex items-start gap-3 bg-white/[0.03] border border-white/[0.07] rounded-xl p-4 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-150"
            >
              <span className="text-2xl shrink-0">{lp.icon}</span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors leading-tight">
                  {lp.title}
                </p>
                <p className="text-xs text-gray-600 mt-0.5 leading-snug">{lp.desc}</p>
              </div>
              <span className="ml-auto text-gray-700 group-hover:text-gray-400 transition-colors text-sm shrink-0">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
