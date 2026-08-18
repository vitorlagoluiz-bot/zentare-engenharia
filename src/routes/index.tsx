import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import zentareLogo from "@/assets/zentare-logo.png.asset.json";
import { ArrowRight, Building2, ShieldCheck, FileCheck, ClipboardList, HardHat } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-zentare-offwhite font-sans text-zentare-graphite">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 transition-all duration-300 bg-zentare-bordeaux/90 text-zentare-offwhite">
        <img src={zentareLogo.url} alt="Zentare Engenharia" className="h-12 w-auto" />
        <nav className="flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
          {["Início", "Quem Somos", "Serviços", "Contato"].map((item) => (
            <a key={item} href="#" className="hover:text-zentare-gold transition-colors">{item}</a>
          ))}
          <button className="bg-zentare-gold text-zentare-bordeaux px-6 py-3 rounded font-bold hover:bg-zentare-gold-light transition-colors">
            SOLICITAR ORÇAMENTO
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-zentare-bordeaux/85 mix-blend-multiply" />
        <div className="relative z-10 text-center px-4 max-w-4xl text-zentare-offwhite">
          <p className="tracking-[0.2em] uppercase text-sm mb-4 text-zentare-gold">ENGENHARIA • PRECISÃO • CONFIANÇA</p>
          <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">Engenharia técnica que transforma conhecimento em segurança.</h1>
          <p className="text-xl mb-10 text-zentare-offwhite/90">Soluções especializadas em perícias, laudos, vistorias e inspeções técnicas para obras, edificações e condomínios.</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-zentare-gold text-zentare-bordeaux px-8 py-4 rounded font-bold hover:bg-zentare-gold-light transition-colors">SOLICITAR ORÇAMENTO</button>
            <button className="border border-zentare-offwhite px-8 py-4 rounded font-bold hover:bg-zentare-offwhite hover:text-zentare-bordeaux transition-colors">CONHEÇA A ZENTARE</button>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="h-1 w-16 bg-zentare-gold mb-6" />
            <h2 className="font-serif text-4xl text-zentare-bordeaux mb-6">Engenharia baseada em experiência, precisão e confiança.</h2>
            <p className="text-lg text-zentare-graphite/80 leading-relaxed mb-8">
              A Zentare Engenharia atua na elaboração de soluções técnicas para os mais diversos desafios da construção civil, oferecendo perícias, laudos, vistorias e inspeções com rigor técnico, responsabilidade e atenção a cada detalhe.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zentare-bordeaux text-zentare-offwhite p-8">
              <h3 className="font-serif text-3xl text-zentare-gold mb-2">EXPERIÊNCIA</h3>
            </div>
            <div className="bg-zentare-gold text-zentare-bordeaux p-8">
              <h3 className="font-serif text-3xl mb-2">PRECISÃO</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 px-8 bg-zentare-offwhite">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl text-zentare-bordeaux mb-4 text-center">Por que escolher a Zentare Engenharia?</h2>
          <p className="text-center text-zentare-graphite/70 mb-16">Conhecimento técnico para decisões mais seguras.</p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Precisão Técnica", icon: FileCheck },
              { title: "Conformidade", icon: ShieldCheck },
              { title: "Gestão de Riscos", icon: ClipboardList },
              { title: "Segurança", icon: HardHat },
            ].map((d) => (
              <div key={d.title} className="p-8 bg-white border border-zentare-bordeaux/10 text-center">
                <d.icon className="w-12 h-12 text-zentare-gold mx-auto mb-6" />
                <h3 className="font-serif text-xl text-zentare-bordeaux mb-4">{d.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}