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

      {/* Portfolio / Áreas de Atuação */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl text-zentare-bordeaux mb-6">Expertise em Diversos Setores</h2>
              <p className="text-lg text-zentare-graphite/70">Nossa atuação abrange desde condomínios residenciais até grandes complexos industriais, sempre com o mesmo rigor técnico.</p>
            </div>
            
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Condomínios Residenciais", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800" },
              { title: "Complexos Industriais", img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800" },
              { title: "Edifícios Comerciais", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800" },
            ].map((p, i) => (
              <div key={i} className="relative group overflow-hidden h-96">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-zentare-bordeaux/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8">
                  <div className="text-center">
                    <h3 className="text-white font-serif text-2xl mb-4">{p.title}</h3>
                    <div className="h-0.5 w-12 bg-zentare-gold mx-auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais / Valores */}
      <section className="py-24 px-8 bg-zentare-offwhite border-t border-b border-zentare-gold/20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 text-center">
          {[
            { title: "Missão", desc: "Prover segurança jurídica e técnica através de engenharia de diagnóstico de alta precisão." },
            { title: "Visão", desc: "Ser a principal referência em perícias e laudos técnicos sofisticados no território nacional." },
            { title: "Valores", desc: "Ética inegociável, precisão técnica absoluta e compromisso com a verdade pericial." },
            { title: "Qualidade", desc: "Certificação em processos de inspeção rigorosos para resultados indiscutíveis." },
          ].map((v) => (
            <div key={v.title}>
              <h3 className="font-serif text-xl text-zentare-gold uppercase tracking-widest mb-4">{v.title}</h3>
              <p className="text-sm text-zentare-graphite/80 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ / Dúvidas Frequentes */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-zentare-bordeaux mb-16 text-center">Dúvidas Frequentes</h2>
          <div className="space-y-6">
            {[
              { q: "O que é um laudo de inspeção predial?", a: "É um documento técnico que avalia o estado geral de conservação e manutenção da edificação, identificando manifestações patológicas e riscos." },
              { q: "Por que contratar uma perícia de engenharia?", a: "Para obter um parecer técnico isento e fundamentado, essencial em processos judiciais ou resoluções de conflitos estruturais." },
              { q: "Qual a periodicidade da vistoria técnica?", a: "Depende da idade e do tipo da edificação, mas recomenda-se uma avaliação técnica profunda a cada 2 ou 5 anos." },
            ].map((item, i) => (
              <div key={i} className="border-b border-zentare-bordeaux/10 pb-6">
                <h3 className="font-bold text-zentare-bordeaux mb-3">{item.q}</h3>
                <p className="text-zentare-graphite/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-zentare-bordeaux text-zentare-offwhite px-8 text-center">
        <h2 className="font-serif text-4xl mb-8">Pronto para garantir a segurança da sua edificação?</h2>
        <button className="bg-zentare-gold text-zentare-bordeaux px-10 py-4 rounded font-bold hover:bg-zentare-gold-light transition-colors uppercase tracking-widest">SOLICITAR ORÇAMENTO AGORA</button>
      </section>

      {/* Real Footer */}
      <footer className="bg-zentare-graphite text-zentare-offwhite py-16 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <img src={zentareLogo.url} alt="Zentare Engenharia" className="h-12 w-auto mb-8 grayscale invert" />
            <p className="max-w-md text-zentare-offwhite/60 leading-relaxed">
              Zentare Engenharia: Especialistas em perícias, laudos e inspeções técnicas. Excelência técnica e compromisso com a segurança de edificações.
            </p>
          </div>
          <div>
            <h4 className="text-zentare-gold font-bold mb-6 uppercase tracking-widest text-sm">Navegação</h4>
            <ul className="space-y-4 text-zentare-offwhite/60">
              <li><a href="#" className="hover:text-zentare-gold transition-colors">Início</a></li>
              <li><a href="#" className="hover:text-zentare-gold transition-colors">Quem Somos</a></li>
              <li><a href="#" className="hover:text-zentare-gold transition-colors">Serviços</a></li>
              <li><a href="#" className="hover:text-zentare-gold transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-zentare-gold font-bold mb-6 uppercase tracking-widest text-sm">Contato</h4>
            <ul className="space-y-4 text-zentare-offwhite/60">
              <li>contato@zentare.eng.br</li>
              <li>+55 (11) 99999-9999</li>
              <li>São Paulo - SP</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-sm text-zentare-offwhite/40">
          © {new Date().getFullYear()} Zentare Engenharia. Todos os direitos reservados.
        </div>
      </footer>


    </div>
  );
}