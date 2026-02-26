import {Icon} from "@iconify/react";
import Link from 'next/link';

export default function AppHeader() {
    return (
        <>
            <header className="absolute top-0 w-full z-50">
                <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="text-xl font-semibold tracking-tighter text-slate-900">FIBRE.</div>
                    <Link href="#form-section" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
                        Tester mon éligibilité <Icon icon="solar:arrow-right-linear"></Icon>
                    </Link>
                </div>
            </header>
        </>
    );
}