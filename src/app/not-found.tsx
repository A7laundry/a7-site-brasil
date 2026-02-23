import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center">
          <span className="text-4xl font-bold text-accent">404</span>
        </div>
        <h1 className="text-2xl font-bold text-primary mb-3">
          Página não encontrada
        </h1>
        <p className="text-gray-500 mb-8">
          A página que você está procurando não existe ou foi movida.
          Que tal voltar para a página inicial?
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-600 transition-colors shadow-lg shadow-accent/25"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}
