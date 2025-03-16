import React, { useState } from 'react';
import { 
  Ticket, 
  BarChart3, 
  Clock, 
  MessageSquare, 
  Shield, 
  Settings2, 
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  Globe,
  FileText,
  Code,
  Database,
  Server,
  CloudCog
} from 'lucide-react';
import ProjectDetails from './components/ProjectDetails';
import ReloadPrompt from './components/ReloadPrompt';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function App() {
  const [showContact, setShowContact] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'details':
        return <ProjectDetails />;
      default:
        return renderHome();
    }
  };

  const renderHome = () => (
    <>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <img 
            src="/src/logos neovia/Logo Color.png" 
            alt="Neovia Logo" 
            className="h-24 mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Sistema de Chamados
          </h1>
          <h2 className="mt-3 text-2xl text-gray-600 sm:text-3xl">
            Proposta Exclusiva para <span className="text-blue-600 font-semibold">Neovia</span>
          </h2>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            Solução completa para gestão de chamados de equipamentos, desenvolvida para otimizar 
            seus processos e aumentar a eficiência operacional.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => setCurrentPage('details')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Detalhes do Projeto
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Ticket className="h-8 w-8 text-blue-600" />}
            title="Gestão de Chamados"
            description="Acompanhamento em tempo real do status dos chamados, com priorização automática e distribuição inteligente."
          />
          <FeatureCard
            icon={<BarChart3 className="h-8 w-8 text-blue-600" />}
            title="Relatórios Detalhados"
            description="Dashboards personalizáveis com métricas importantes e KPIs para tomada de decisão."
          />
          <FeatureCard
            icon={<Clock className="h-8 w-8 text-blue-600" />}
            title="SLA Personalizado"
            description="Definição e monitoramento de SLAs específicos para diferentes tipos de equipamentos e prioridades."
          />
          <FeatureCard
            icon={<MessageSquare className="h-8 w-8 text-blue-600" />}
            title="Comunicação Integrada"
            description="Sistema de notificações automáticas e chat integrado para melhor comunicação entre equipes."
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8 text-blue-600" />}
            title="Segurança Avançada"
            description="Controle de acesso baseado em papéis e registro completo de todas as ações realizadas."
          />
          <FeatureCard
            icon={<Settings2 className="h-8 w-8 text-blue-600" />}
            title="Manutenção Preventiva"
            description="Agendamento e controle de manutenções preventivas para reduzir tempo de inatividade."
          />
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Opções de Investimento
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Escolha o plano que melhor atende às suas necessidades, com suporte contínuo e atualizações regulares
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-600">
              <div className="flex items-center mb-4">
                <Code className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold">Desenvolvimento Customizado</h3>
              </div>
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600">R$ 8.000,00</div>
                  <div className="text-gray-600">Implementação inicial</div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-2xl font-bold text-gray-900">R$ 450,00<span className="text-lg font-normal text-gray-600">/mês</span></div>
                  <div className="text-gray-600">Sustentação e infraestrutura</div>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Sistema totalmente personalizado</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Integrações específicas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Suporte dedicado 8x5</span>
                </li>
                <li className="flex items-start">
                  <Server className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Servidor dedicado e monitoramento 24x7</span>
                </li>
                <li className="flex items-start">
                  <CloudCog className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Backup diário e manutenção preventiva</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
              <div className="flex items-center mb-4">
                <Database className="h-8 w-8 text-gray-600 mr-3" />
                <h3 className="text-2xl font-bold">Solução No-Code</h3>
              </div>
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-3xl font-bold text-gray-600">R$ 4.500,00</div>
                  <div className="text-gray-600">Implementação inicial</div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-2xl font-bold text-gray-900">R$ 250,00<span className="text-lg font-normal text-gray-600">/mês</span></div>
                  <div className="text-gray-600">Licença Glide + Suporte</div>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Implementação rápida</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Customização básica</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Suporte por email</span>
                </li>
                <li className="flex items-start">
                  <Server className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Hospedagem na plataforma Glide</span>
                </li>
                <li className="flex items-start">
                  <CloudCog className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Atualizações automáticas da plataforma</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 max-w-3xl mx-auto bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">O que está incluído na sustentação mensal?</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1" />
                <span>Monitoramento do sistema</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1" />
                <span>Atualizações de segurança</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1" />
                <span>Correções de bugs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1" />
                <span>Suporte técnico</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-1" />
                <span>Infraestrutura cloud</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Pronto para Transformar sua Gestão de Equipamentos?
          </h2>
          <div className="space-y-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              Solicitar Demonstração
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="mailto:adm@luiscuba.tech" className="text-white hover:text-gray-200 flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                adm@luiscuba.tech
              </a>
              <a href="tel:+5519981621022" className="text-white hover:text-gray-200 flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                (19) 98162-1022
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
              <Settings2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">LHCtech</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentPage('details')}
                className="text-gray-600 hover:text-blue-600"
              >
                Detalhes
              </button>
              <button 
                onClick={() => setShowContact(!showContact)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contato
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <div className="py-8">
          {renderPage()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Sobre</h3>
              <p className="text-gray-400">
                Somos uma empresa especializada no desenvolvimento de soluções tecnológicas 
                para melhorar a eficiência operacional e reduzir custos.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-gray-400" />
                  <a href="mailto:adm@luiscuba.tech" className="text-gray-400 hover:text-white">
                    adm@luiscuba.tech
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-gray-400" />
                  <a href="tel:+5519981621022" className="text-gray-400 hover:text-white">
                    (19) 98162-1022
                  </a>
                </li>
                <li className="flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-gray-400" />
                  <a href="https://luiscuba.tech" className="text-gray-400 hover:text-white">
                    www.luiscuba.tech
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setCurrentPage('home')}
                    className="text-gray-400 hover:text-white"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('details')}
                    className="text-gray-400 hover:text-white"
                  >
                    Detalhes do Projeto
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} LHCtech. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Contact Drawer */}
      {showContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Entre em contato</h2>
                <button onClick={() => setShowContact(false)} className="text-gray-500 hover:text-gray-700">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      
      {/* PWA update notification */}
      <ReloadPrompt />
    </div>
  );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;