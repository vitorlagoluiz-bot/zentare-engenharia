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
          <div className="space-y-6">
            <div className="h-1 w-16 bg-zentare-gold" />
            <h2 className="font-serif text-4xl text-zentare-bordeaux">Experiência, precisão e confiança em cada laudo.</h2>
            <p className="text-lg text-zentare-graphite/80 leading-relaxed">
              A Zentare Engenharia destaca-se pela excelência técnica em perícias, inspeções e laudos. Nossa metodologia combina rigor científico e vasta experiência de mercado para oferecer soluções seguras e precisas para cada edificação.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-4 border-zentare-gold pl-4">
                <p className="text-3xl font-serif text-zentare-bordeaux font-bold">10+</p>
                <p className="text-sm uppercase tracking-wider text-zentare-graphite">Anos de atuação</p>
              </div>
              <div className="border-l-4 border-zentare-gold pl-4">
                <p className="text-3xl font-serif text-zentare-bordeaux font-bold">500+</p>
                <p className="text-sm uppercase tracking-wider text-zentare-graphite">Laudos emitidos</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1503387762-592bae58abda?q=80&w=800" alt="Engenharia" className="w-full h-64 object-cover" />
            <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800" alt="Perícia" className="w-full h-64 object-cover mt-8" />
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-24 px-8 bg-zentare-offwhite">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl text-zentare-bordeaux mb-16 text-center">Nossos Serviços Especializados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Perícias Judiciais", desc: "Suporte técnico completo para disputas e processos judiciais.", icon: Building2 },
              { title: "Inspeção Predial", desc: "Avaliação preventiva para garantir a integridade de edificações.", icon: ShieldCheck },
              { title: "Vistorias de Entrega", desc: "Garantia de que a obra entregue atende a todas as normas.", icon: FileCheck },
              { title: "Laudos de Reforma", desc: "Documentação técnica para reformas seguras e legais.", icon: ClipboardList },
              { title: "Consultoria Técnica", desc: "Assessoria especializada em engenharia para condomínios.", icon: HardHat },
              { title: "Manutenção Preventiva", desc: "Planejamento e gestão de manutenção técnica.", icon: Building2 },
            ].map((s) => (
              <div key={s.title} className="p-8 bg-white border border-zentare-bordeaux/10 hover:shadow-xl transition-all duration-300 group">
                <s.icon className="w-12 h-12 text-zentare-gold mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-serif text-xl text-zentare-bordeaux mb-4">{s.title}</h3>
                <p className="text-zentare-graphite/70 mb-6">{s.desc}</p>
                <a href="#" className="inline-flex items-center text-zentare-bordeaux font-bold border-b border-zentare-gold hover:text-zentare-gold transition-colors">
                  SAIBA MAIS <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-zentare-bordeaux text-zentare-offwhite px-8 text-center">
        <h2 className="font-serif text-4xl mb-8">Pronto para garantir a segurança da sua edificação?</h2>
        <button className="bg-zentare-gold text-zentare-bordeaux px-10 py-4 rounded font-bold hover:bg-zentare-gold-light transition-colors">SOLICITAR ORÇAMENTO AGORA</button>
      </section>

    </div>
  );
}