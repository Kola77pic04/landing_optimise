import Link from 'next/link';

export default function AppFooter() {
    return (
        <>
            <div>
                <footer className="border-t border-slate-200 py-8 text-center bg-white">
                    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="font-medium tracking-tighter text-slate-400 text-sm">FIBRE.</div>
                        <div className="flex gap-6 text-xs text-slate-400 font-light">
                            <Link href="#" className="hover:text-slate-600 transition-colors">Mentions légales</Link>
                            <Link href="#" className="hover:text-slate-600 transition-colors">Politique de confidentialité</Link>
                        </div>
                    </div>
                </footer>

                {/* Mobile Sticky CTA (Light & Unobtrusive) */}
                <div className="fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-md border-t border-slate-200/50 md:hidden z-50">
                    <Link href="#form-section" className="flex items-center justify-center w-full bg-slate-900 text-white font-medium rounded-xl py-3.5 shadow-lg text-sm">
                        Tester mon éligibilité
                    </Link>
                </div>
            </div>

        </>
    );
}