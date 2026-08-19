import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Building2, ShieldCheck, FileCheck, ClipboardList, HardHat, Award, MessageCircle, CheckCircle2 } from "lucide-react";
import zentareLogo from "@/assets/zentare-logo.png.asset.json";
import engJaqueline from "@/assets/eng-jaqueline.png.asset.json";
import engWork from "@/assets/eng-work.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const WHATSAPP_LINK = "https://wa.me/5511918579184";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Início", "Sobre", "Serviços", "Pacotes", "Contato"];

  return (
    <div className="min-h-screen bg-[#F5F2EC] font-sans text-[#151515]">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 h-[52px] sm:h-[60px] md:h-[72px] transition-all duration-300 ${
          scrolled ? "bg-white shadow-xl" : "bg-black/40 backdrop-blur-[2px]"
        } border-b ${scrolled ? "border-[#3B0B12]/10" : "border-white/10"} ${
          scrolled ? "text-[#151515]" : "text-white"
        }`}
      >
        <img src={zentareLogo.url} alt="Zentare Engenharia" className="h-6 sm:h-7 md:h-10 w-auto object-contain shrink-0 transition-all" />
        
        <nav className="hidden lg:flex items-center gap-6 md:gap-8 text-xs md:text-sm font-medium tracking-wide uppercase">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} 
              className="hover:text-[#C9A24A] transition-colors relative group whitespace-nowrap"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C9A24A] transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#C9A24A] text-[#3B0B12] px-4 md:px-6 py-2 md:py-2.5 rounded font-bold hover:bg-[#E4C878] transition-colors text-xs md:text-sm whitespace-nowrap shadow-lg hover:shadow-xl"
          >
            SOLICITAR ORÇAMENTO
          </a>
        </nav>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-[#3B0B12]/5 transition-colors"
          aria-label="Menu"
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-all bg-current ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 mb-1.5 transition-all bg-current ${isMenuOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 transition-all bg-current ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-[52px] sm:top-[60px] md:top-[72px] left-0 right-0 bg-white shadow-2xl border-t border-[#3B0B12]/10 p-6 flex flex-col gap-4 lg:hidden max-h-[calc(100vh-72px)] overflow-y-auto"
            >
              {navItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-serif text-[#3B0B12] py-2 border-b border-[#3B0B12]/5"
                >
                  {item}
                </a>
              ))}
              <a 
                href={WHATSAPP_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#C9A24A] text-[#3B0B12] py-4 rounded font-bold text-center mt-4"
              >
                SOLICITAR ORÇAMENTO
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#151515] via-[#151515]/80 to-transparent z-0" />
        <div className="absolute inset-0 bg-[#3B0B12]/20 z-0 mix-blend-multiply" />
        
        <div className="relative z-10 text-left px-6 md:px-12 w-full max-w-6xl mx-auto text-[#F5F2EC] pt-32 pb-12 md:py-32">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 leading-tight max-w-4xl break-words drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            Engenharia que transforma análise técnica em segurança para o seu patrimônio.
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-10 text-white font-medium max-w-2xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Vistorias, laudos, inspeções, acompanhamento de obras e soluções técnicas com responsabilidade profissional.
          </p>
          <div className="flex gap-4 justify-start flex-col sm:flex-row">
            <a href={WHATSAPP_LINK} className="bg-[#C9A24A] text-[#3B0B12] px-6 md:px-10 py-3 md:py-4 rounded font-bold hover:bg-[#E4C878] transition-all hover:scale-105 text-sm md:text-lg uppercase tracking-wider text-center whitespace-nowrap shadow-lg">
              Solicitar orçamento
            </a>
            <a href="#servicos" className="bg-white/10 backdrop-blur-md border border-white/30 px-6 md:px-10 py-3 md:py-4 rounded font-bold hover:bg-white hover:text-[#3B0B12] transition-all hover:scale-105 text-sm md:text-lg uppercase tracking-wider text-center whitespace-nowrap shadow-lg">
              Conheça nossos serviços
            </a>
          </div>
        </div>
      </section>

      {/* Authority Bar */}
      <section className="py-16 bg-[#151515] text-[#F5F2EC]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { n: "+8 anos", t: "de experiência" },
            { n: "+500", t: "vistorias concluídas" },
            { n: "+200", t: "projetos em andamento" },
          ].map((item, i) => (
            <div key={i}>
              <p className="text-5xl font-serif text-[#C9A24A] font-bold mb-2">{item.n}</p>
              <p className="uppercase tracking-widest text-sm text-[#F5F2EC]/70">{item.t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="py-24 px-8 bg-[#F5F2EC]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="font-serif text-3xl md:text-4xl text-[#3B0B12]">Por que escolher a Zentare Engenharia?</h2>
            <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
              A Zentare Engenharia é uma marca de atuação profissional fundada pela <strong>Eng.ª Civil Jaqueline Santos</strong>, dedicada à prestação de serviços de engenharia com responsabilidade técnica, ética e qualidade.
            </p>
            <p className="text-base md:text-lg text-[#151515]/80 leading-relaxed">
              Especializada em vistorias técnicas, laudos de engenharia, inspeções prediais, acompanhamento de obras, emissão de ART e regularização de imóveis, oferece soluções seguras e personalizadas para construtoras, condomínios, empresas e clientes particulares.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4 h-full relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl relative z-10 border border-white/10">
                <img src={engJaqueline.url} alt="Eng.ª Civil Jaqueline Santos" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl relative z-0 mt-12 md:mt-20 border border-white/10">
                <img src={engWork.url} alt="Eng.ª Civil Jaqueline Santos em campo" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl text-[#3B0B12] mb-16 text-center">Engenharia baseada em confiança, precisão e responsabilidade.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              { 
                title: "Excelência Técnica", 
                desc: "Realizamos inspeções detalhadas com critérios técnicos e responsabilidade profissional, oferecendo diagnósticos confiáveis para proteger o seu patrimônio.",
                icon: ShieldCheck
              },
              { 
                title: "Confiabilidade", 
                desc: "Atuamos com transparência, precisão e responsabilidade em cada etapa do serviço, entregando informações técnicas claras para apoiar decisões importantes.",
                icon: CheckCircle2
              },
              { 
                title: "Compromisso", 
                desc: "Nosso compromisso é com a qualidade e a satisfação de nossos clientes. Na Zentare Engenharia, estamos sempre prontos para enfrentar novos desafios e buscar as melhores soluções para cada caso.",
                icon: Award
              },
            ].map((d, i) => (
              <div key={i} className="text-center group p-6 rounded-xl hover:bg-[#3B0B12]/5 transition-colors">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#3B0B12]/5 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:bg-[#C9A24A]/10 transition-colors">
                  <d.icon className="w-8 h-8 md:w-10 md:h-10 text-[#C9A24A]" />
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-[#3B0B12] mb-4">{d.title}</h3>
                <p className="text-[#151515]/70 leading-relaxed text-sm md:text-base">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24 px-8 bg-[#F5F2EC]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl text-[#3B0B12] mb-6 text-center">Soluções técnicas para cada necessidade</h2>
          <p className="text-center text-lg mb-16 max-w-2xl mx-auto text-[#151515]/70">Conte com a Zentare Engenharia para avaliações, vistorias, laudos e acompanhamento técnico com segurança e responsabilidade profissional.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Laudo para Perícias Judiciais", desc: "Perícias com imparcialidade, para resolução de litígios de forma justa, técnica e clara.", icon: FileCheck },
              { title: "Vistoria Técnica de Imóveis", desc: "Identificação de condições, falhas e não conformidades para segurança e preservação.", icon: Building2 },
              { title: "Laudo para Avaliações", desc: "Avaliações patrimoniais precisas para decisões financeiras e administrativas.", icon: ClipboardList },
              { title: "Inspeção e manutenção predial", desc: "Segurança, conservação e valorização para síndicos e proprietários.", icon: ShieldCheck },
              { title: "ART", desc: "Emissão de documentação para formalizar a responsabilidade profissional.", icon: Award },
              { title: "Acompanhamento de Obras", desc: "Verificação de execução, qualidade e conformidade com normas.", icon: HardHat },
              { title: "Regularização de Imóveis", desc: "Assessoria técnica para regularização documental e conformidade legal de edificações.", icon: CheckCircle2 },
            ].map((s) => (
              <div key={s.title} className="p-6 md:p-8 border border-[#3B0B12]/10 hover:shadow-xl transition-all duration-300 group bg-white flex flex-col h-full">
                <s.icon className="w-10 h-10 md:w-12 md:h-12 text-[#C9A24A] mb-6" />
                <h3 className="font-serif text-lg md:text-xl text-[#3B0B12] mb-4">{s.title}</h3>
                <p className="text-sm md:text-base text-[#151515]/70 mb-6 flex-grow">{s.desc}</p>
                <a href={WHATSAPP_LINK} className="inline-flex items-center text-[#3B0B12] font-bold border-b border-[#C9A24A] hover:text-[#C9A24A] w-max text-sm md:text-base">
                  Solicitar orçamento <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="pacotes" className="py-24 px-8 bg-[#3B0B12]/5">
        <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl text-[#3B0B12] mb-2 text-center">Pacotes de Vistorias</h2>
            <p className="text-center text-lg mb-16 text-[#151515]/70">Atendimento para apartamentos de até 50 m². Para maiores áreas, solicite orçamento personalizado.</p>
            <div className="grid md:grid-cols-3 gap-8 items-end">
                {[
                    { 
                        title: "PACOTE BÁSICO", 
                        price: "320", 
                        desc: "Verificação detalhada do escopo geral",
                        items: [
                            "Verificação completa e detalhada do escopo geral",
                            "Relatório técnico completo",
                            "Não inclui emissão de ART/RRT"
                        ]
                    },
                    { 
                        title: "PACOTE PREMIUM", 
                        price: "420", 
                        desc: "Verificação técnica detalhada de patologias e condições gerais",
                        popular: true,
                        items: [
                            "Vistoria técnica completa da unidade",
                            "Relatório técnico detalhado com registro fotográfico",
                            "Laudo técnico completo",
                            "Apontamento das não conformidades identificadas",
                            "Emissão de ART / responsabilidade técnica"
                        ]
                    },
                    { 
                        title: "PACOTE PREMIUM PLUS", 
                        price: "500", 
                        desc: "Verificação técnica completa, com análise adicional e revisita",
                        items: [
                            "Avaliação do memorial descritivo da construtora",
                            "Vistoria técnica completa da unidade",
                            "Relatório técnico detalhado com registro fotográfico",
                            "Laudo técnico completo",
                            "Apontamento das não conformidades identificadas",
                            "Emissão de ART / responsabilidade técnica",
                            "Em caso de reprovação da unidade, 1 revisita técnica incluída"
                        ]
                    },
                ].map((p, i) => (
                    <div key={i} className={`p-6 md:p-8 rounded-lg border bg-white flex flex-col h-full transition-all duration-300 ${p.popular ? "border-[#C9A24A] shadow-2xl lg:scale-105 z-10" : "border-[#3B0B12]/10"}`}>
                        {p.popular && <span className="bg-[#C9A24A] text-[#3B0B12] px-3 py-1 rounded text-[10px] md:text-xs font-bold uppercase mb-4 block w-max mx-auto lg:mx-0">MAIS CONTRATADO</span>}
                        <h3 className="text-lg md:text-xl font-bold text-[#3B0B12] mb-2">{p.title}</h3>
                        <p className="text-[#151515]/70 text-xs md:text-sm mb-6 min-h-[40px]">{p.desc}</p>
                        <p className="text-3xl md:text-4xl font-serif text-[#3B0B12] font-bold mb-6">R$ {p.price}</p>
                        <ul className="space-y-3 mb-8 flex-grow">
                            {p.items.map((item, idx) => (
                                <li key={idx} className="flex gap-2 text-xs md:text-sm text-[#151515]/80">
                                    <CheckCircle2 className="w-4 h-4 text-[#C9A24A] shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <a href={WHATSAPP_LINK} className={`block text-center py-3 md:py-4 rounded font-bold transition-all text-sm md:text-base ${p.popular ? "bg-[#C9A24A] text-[#3B0B12] hover:bg-[#E4C878] hover:scale-[1.02]" : "border border-[#3B0B12] text-[#3B0B12] hover:bg-[#3B0B12] hover:text-white hover:scale-[1.02]"}`}>Solicitar orçamento</a>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white border-t border-[#3B0B12]/5 text-[#151515] px-8 text-center">
        <h2 className="font-serif text-4xl mb-6 text-[#3B0B12]">Precisa de uma avaliação técnica para o seu imóvel ou obra?</h2>
        <p className="text-xl mb-10 text-[#151515]/70">Fale com a Zentare Engenharia e encontre a solução técnica adequada para o seu caso.</p>
        <a href={WHATSAPP_LINK} className="inline-flex items-center gap-3 bg-[#C9A24A] text-[#3B0B12] px-10 py-4 rounded font-bold text-lg hover:bg-[#E4C878]">
          <MessageCircle className="w-5 h-5" /> SOLICITAR ORÇAMENTO PELO WHATSAPP
        </a>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-[#151515] text-[#F5F2EC] py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="sm:col-span-2">
                <h3 className="font-serif text-2xl text-[#C9A24A] mb-4 uppercase tracking-wider">ZENTARE ENGENHARIA</h3>
                <p className="text-[#F5F2EC]/90 mb-2 font-bold text-lg">Eng.ª Civil Jaqueline Santos</p>
                <p className="text-[#F5F2EC]/60 max-w-sm text-sm leading-relaxed">Soluções em engenharia com responsabilidade técnica, precisão e compromisso.</p>
            </div>
            <div>
                <h4 className="text-[#C9A24A] font-bold mb-6 uppercase tracking-widest text-xs">Navegação</h4>
                <ul className="space-y-3 text-[#F5F2EC]/60 text-sm">
                    {navItems.map(i => <li key={i}><a href={`#${i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="hover:text-[#C9A24A] transition-colors">{i}</a></li>)}
                </ul>
            </div>
            <div>
                <h4 className="text-[#C9A24A] font-bold mb-6 uppercase tracking-widest text-xs">Contato</h4>
                <div className="space-y-4">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#C9A24A] font-bold hover:underline">
                      <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                  <p className="text-xs text-[#F5F2EC]/40 leading-relaxed">
                    Atendimento especializado em São Paulo e região.
                  </p>
                </div>
            </div>
        </div>
        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-[#F5F2EC]/30 text-[10px] uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Zentare Engenharia. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* WhatsApp Floating */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-[#151515] px-3 py-1.5 rounded shadow-xl text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Solicitar Orçamento
        </span>
      </a>
    </div>
  );
}
