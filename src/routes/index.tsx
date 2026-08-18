import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import zentareLogo from "@/assets/zentare-logo.png.asset.json";
import { ArrowRight, CheckCircle2, Building2, ShieldCheck, ClipboardCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-zentare-offwhite font-sans text-zentare-graphite">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 transition-all duration-300 bg-transparent text-zentare-offwhite">
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
        <div className="absolute inset-0 bg-zentare-bordeaux/80 mix-blend-multiply" />
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

      {/* Services Section - Placeholder structure */}
      <section className="py-24 px-8 bg-zentare-offwhite">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl text-zentare-bordeaux mb-16 text-center">Nossos Serviços</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: "Para Construtoras", icon: Building2 },
              { title: "Para Condomínios", icon: ShieldCheck }
            ].map((s) => (
              <div key={s.title} className="p-10 border border-zentare-bordeaux/10 hover:border-zentare-gold transition-colors bg-white">
                <s.icon className="w-12 h-12 text-zentare-gold mb-6" />
                <h3 className="font-serif text-2xl mb-4 text-zentare-bordeaux">{s.title}</h3>
                <p className="mb-8 text-zentare-graphite/80">Soluções técnicas especializadas para garantir a qualidade, segurança e conformidade do seu empreendimento.</p>
                <a href="#" className="flex items-center text-zentare-bordeaux font-bold hover:text-zentare-gold transition-colors">
                  Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}