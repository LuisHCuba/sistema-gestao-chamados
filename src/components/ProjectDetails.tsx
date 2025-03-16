import React, { useState } from 'react';
import { 
  Table, 
  Clock, 
  MessageSquare, 
  CheckCircle, 
  HardDrive, 
  Wrench, 
  Tag,
  Settings,
  Calendar,
  FileText,
  ChevronRight,
  History
} from 'lucide-react';

export default function ProjectDetails() {
  const [expandedTable, setExpandedTable] = useState<string | null>(null);
  
  const toggleTable = (tableName: string) => {
    if (expandedTable === tableName) {
      setExpandedTable(null);
    } else {
      setExpandedTable(tableName);
    }
  };
  
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Sistema de Gestão de Chamados e Equipamentos</h1>
      <p className="text-gray-600 text-center mb-8">Estrutura de dados completa para gestão eficiente</p>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Table className="h-5 w-5 mr-2 text-blue-600" />
          Estrutura de Dados do Sistema
        </h2>
        
        <div className="space-y-6">
          {/* Tabela de Equipamentos */}
          <div className="border rounded-lg overflow-hidden">
            <div 
              className="bg-gray-50 p-4 border-b flex justify-between items-center cursor-pointer"
              onClick={() => toggleTable('equipamentos')}
            >
              <div>
                <h3 className="font-medium flex items-center">
                  <HardDrive className="h-4 w-4 mr-2 text-blue-600" />
                  Equipamentos
                </h3>
                <p className="text-sm text-gray-500">Cadastro de todos os equipamentos da empresa</p>
              </div>
              <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform ${expandedTable === 'equipamentos' ? 'rotate-90' : ''}`} />
            </div>
            {expandedTable === 'equipamentos' && (
              <div className="p-4 animate-fadeIn">
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>id: Identificador único</li>
                  <li>codigo: Código de patrimônio</li>
                  <li>nome: Nome do equipamento</li>
                  <li>descricao: Descrição detalhada</li>
                  <li>modelo: Modelo do equipamento</li>
                  <li>marca: Fabricante</li>
                  <li>tipo_id: Referência ao tipo de equipamento</li>
                  <li>setor_id: Localização/Departamento</li>
                  <li>status: Operacional, Em manutenção, Inativo</li>
                  <li>responsavel_id: Colaborador responsável</li>
                  <li>data_aquisicao: Data de compra</li>
                  <li>garantia_fim: Data final da garantia</li>
                  <li>valor_aquisicao: Valor de compra</li>
                  <li>especificacoes_tecnicas: JSON com configurações específicas</li>
                </ul>
              </div>
            )}
          </div>
          
          {/* Tipos de Equipamentos */}
          <div className="border rounded-lg overflow-hidden">
            <div 
              className="bg-gray-50 p-4 border-b flex justify-between items-center cursor-pointer"
              onClick={() => toggleTable('tipos_equipamentos')}
            >
              <div>
                <h3 className="font-medium flex items-center">
                  <Tag className="h-4 w-4 mr-2 text-purple-600" />
                  Tipos de Equipamentos
                </h3>
                <p className="text-sm text-gray-500">Categorização dos equipamentos por tipo</p>
              </div>
              <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform ${expandedTable === 'tipos_equipamentos' ? 'rotate-90' : ''}`} />
            </div>
            {expandedTable === 'tipos_equipamentos' && (
              <div className="p-4 animate-fadeIn">
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>id: Identificador único</li>
                  <li>nome: Nome do tipo (Computador, Impressora, etc)</li>
                  <li>descricao: Descrição detalhada</li>
                  <li>icone: Ícone para representação visual</li>
                  <li>campos_personalizados: Campos específicos para este tipo</li>
                  <li>rotina_manutencao: Frequência de manutenção recomendada</li>
                  <li>ativo: Status de atividade deste tipo</li>
                </ul>
              </div>
            )}
          </div>
          
          {/* Chamados */}
          <div className="border rounded-lg overflow-hidden">
            <div 
              className="bg-gray-50 p-4 border-b flex justify-between items-center cursor-pointer"
              onClick={() => toggleTable('chamados')}
            >
              <div>
                <h3 className="font-medium flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-green-600" />
                  Chamados
                </h3>
                <p className="text-sm text-gray-500">Registro de todos os chamados técnicos</p>
              </div>
              <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform ${expandedTable === 'chamados' ? 'rotate-90' : ''}`} />
            </div>
            {expandedTable === 'chamados' && (
              <div className="p-4 animate-fadeIn">
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>id: Identificador único</li>
                  <li>titulo: Título do chamado</li>
                  <li>descricao: Detalhamento do problema</li>
                  <li>equipamento_id: Equipamento relacionado</li>
                  <li>categoria_id: Categoria do chamado</li>
                  <li>tipo_id: Tipo do chamado</li>
                  <li>status_id: Status atual</li>
                  <li>prioridade: Baixa, Média, Alta, Crítica</li>
                  <li>solicitante_id: Usuário que abriu o chamado</li>
                  <li>tecnico_id: Técnico responsável</li>
                  <li>data_abertura: Data de criação</li>
                  <li>data_previsao: Prazo estimado para resolução</li>
                  <li>data_conclusao: Data de finalização</li>
                  <li>tempo_pausa: Tempo em que o chamado ficou pausado</li>
                  <li>custo: Valor gasto com a manutenção</li>
                </ul>
              </div>
            )}
          </div>
          
          {/* Manutenções Preventivas */}
          <div className="border rounded-lg overflow-hidden">
            <div 
              className="bg-gray-50 p-4 border-b flex justify-between items-center cursor-pointer"
              onClick={() => toggleTable('manutencoes')}
            >
              <div>
                <h3 className="font-medium flex items-center">
                  <Wrench className="h-4 w-4 mr-2 text-amber-600" />
                  Manutenções Preventivas
                </h3>
                <p className="text-sm text-gray-500">Agendamento e controle de manutenções programadas</p>
              </div>
              <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform ${expandedTable === 'manutencoes' ? 'rotate-90' : ''}`} />
            </div>
            {expandedTable === 'manutencoes' && (
              <div className="p-4 animate-fadeIn">
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>id: Identificador único</li>
                  <li>equipamento_id: Equipamento a ser mantido</li>
                  <li>tipo_manutencao: Preventiva, Corretiva, Calibração</li>
                  <li>descricao: Descrição da manutenção</li>
                  <li>checklist_id: Referência ao checklist a ser seguido</li>
                  <li>tecnico_id: Responsável pela manutenção</li>
                  <li>data_agendada: Data programada</li>
                  <li>data_realizacao: Data da execução</li>
                  <li>status: Agendada, Em andamento, Concluída, Cancelada</li>
                  <li>resultado: Aprovado, Reprovado, Observações</li>
                  <li>proxima_data: Previsão da próxima manutenção</li>
                  <li>custo: Valor gasto com a manutenção</li>
                  <li>tempo_parada: Tempo em que o equipamento ficou indisponível</li>
                </ul>
              </div>
            )}
          </div>
          
          {/* Categorias de Chamados */}
          <div className="border rounded-lg overflow-hidden">
            <div 
              className="bg-gray-50 p-4 border-b flex justify-between items-center cursor-pointer"
              onClick={() => toggleTable('categorias')}
            >
              <div>
                <h3 className="font-medium flex items-center">
                  <Tag className="h-4 w-4 mr-2 text-indigo-600" />
                  Categorias de Chamados
                </h3>
                <p className="text-sm text-gray-500">Classificação dos chamados por categoria</p>
              </div>
              <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform ${expandedTable === 'categorias' ? 'rotate-90' : ''}`} />
            </div>
            {expandedTable === 'categorias' && (
              <div className="p-4 animate-fadeIn">
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>id: Identificador único</li>
                  <li>nome: Nome da categoria (Hardware, Software, Rede)</li>
                  <li>descricao: Descrição detalhada</li>
                  <li>icone: Ícone representativo</li>
                  <li>cor: Cor para identificação visual</li>
                  <li>sla_padrao: Tempo padrão para resolução (horas)</li>
                  <li>prioridade_padrao: Prioridade sugerida</li>
                  <li>requer_aprovacao: Se necessita de aprovação</li>
                  <li>ativo: Status de atividade</li>
                  <li>departamento_responsavel_id: Setor responsável</li>
                </ul>
              </div>
            )}
          </div>
          
          {/* Status de Chamados */}
          <div className="border rounded-lg overflow-hidden">
            <div 
              className="bg-gray-50 p-4 border-b flex justify-between items-center cursor-pointer"
              onClick={() => toggleTable('status')}
            >
              <div>
                <h3 className="font-medium flex items-center">
                  <Settings className="h-4 w-4 mr-2 text-blue-600" />
                  Status de Chamados
                </h3>
                <p className="text-sm text-gray-500">Workflow e estados dos chamados</p>
              </div>
              <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform ${expandedTable === 'status' ? 'rotate-90' : ''}`} />
            </div>
            {expandedTable === 'status' && (
              <div className="p-4 animate-fadeIn">
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>id: Identificador único</li>
                  <li>nome: Nome do status (Aberto, Em análise, etc)</li>
                  <li>descricao: Descrição do status</li>
                  <li>cor: Cor para identificação visual</li>
                  <li>ordem: Sequência no workflow</li>
                  <li>pausa_sla: Se pausa a contagem de SLA</li>
                  <li>status_final: Se é um status de finalização</li>
                  <li>requer_fechamento: Se necessita informações adicionais</li>
                  <li>status_proximos: Lista de possíveis próximos status</li>
                </ul>
              </div>
            )}
          </div>
          
          {/* Comentários e Histórico */}
          <div className="border rounded-lg overflow-hidden">
            <div 
              className="bg-gray-50 p-4 border-b flex justify-between items-center cursor-pointer"
              onClick={() => toggleTable('comentarios')}
            >
              <div>
                <h3 className="font-medium flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2 text-blue-600" />
                  Comentários
                </h3>
                <p className="text-sm text-gray-500">Registro de comunicações e interações</p>
              </div>
              <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform ${expandedTable === 'comentarios' ? 'rotate-90' : ''}`} />
            </div>
            {expandedTable === 'comentarios' && (
              <div className="p-4 animate-fadeIn">
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>id: Identificador único</li>
                  <li>chamado_id: Referência ao chamado</li>
                  <li>usuario_id: Usuário que fez o comentário</li>
                  <li>texto: Conteúdo do comentário</li>
                  <li>data_criacao: Data do comentário</li>
                  <li>privado: Se é visível apenas para técnicos</li>
                  <li>anexos: Lista de arquivos anexados</li>
                  <li>tipo: Comentário, Nota técnica, Instrução</li>
                </ul>
              </div>
            )}
          </div>
          
          {/* Histórico de Alterações */}
          <div className="border rounded-lg overflow-hidden">
            <div 
              className="bg-gray-50 p-4 border-b flex justify-between items-center cursor-pointer"
              onClick={() => toggleTable('historico')}
            >
              <div>
                <h3 className="font-medium flex items-center">
                  <History className="h-4 w-4 mr-2 text-amber-600" />
                  Histórico de Alterações
                </h3>
                <p className="text-sm text-gray-500">Registro de todas as alterações feitas no sistema</p>
              </div>
              <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform ${expandedTable === 'historico' ? 'rotate-90' : ''}`} />
            </div>
            {expandedTable === 'historico' && (
              <div className="p-4 animate-fadeIn">
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>id: Identificador único</li>
                  <li>entidade_tipo: Tipo de entidade (Chamado, Equipamento, etc)</li>
                  <li>entidade_id: ID da entidade</li>
                  <li>usuario_id: Usuário que realizou a alteração</li>
                  <li>acao: Tipo de alteração (Criação, Atualização, Exclusão)</li>
                  <li>campo: Campo alterado</li>
                  <li>valor_anterior: Valor antes da alteração</li>
                  <li>valor_novo: Valor após a alteração</li>
                  <li>data_hora: Data e hora da alteração</li>
                  <li>ip: Endereço IP do usuário</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
          Funcionalidades do Sistema
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-2">Gestão de Equipamentos</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Cadastro completo com especificações técnicas</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Histórico de manutenções e chamados vinculados</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Controle de garantias e contratos de manutenção</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>QR Code para identificação rápida e acesso à informações</span>
              </li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-2">Gestão de Chamados</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Abertura de chamados vinculados a equipamentos</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Workflow customizável com SLAs por categoria</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Atribuição automática baseada em regras</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Notificações em tempo real</span>
              </li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-2">Manutenção Preventiva</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Agendamento automático baseado em regras</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Checklists personalizados por tipo de equipamento</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Calendário de visualização e planejamento</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Geração de relatórios de conformidade</span>
              </li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-2">Análise e Relatórios</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Dashboard customizável com KPIs relevantes</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Relatórios de custos e tempos de inatividade</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Análise de causas recorrentes</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Métricas de desempenho de equipes e fornecedores</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}