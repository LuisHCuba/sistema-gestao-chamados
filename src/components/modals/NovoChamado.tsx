import React, { useState } from 'react';
import { X } from 'lucide-react';

interface NovoChamadoProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (chamado: {
    titulo: string;
    descricao: string;
    categoria_id: string;
    tipo_id: string;
    solicitante_id: string;
    status_id: string;
    responsavel_id: string;
    sla_personalizado?: number;
  }) => void;
  categorias: Array<{
    id: string;
    nome: string;
    sla_padrao: number;
  }>;
  tipos: Array<{
    id: string;
    nome: string;
  }>;
  usuarios: Array<{
    id: string;
    nome: string;
    tipo: string;
  }>;
}

export default function NovoChamado({
  isOpen,
  onClose,
  onSubmit,
  categorias,
  tipos,
  usuarios
}: NovoChamadoProps) {
  const [form, setForm] = useState({
    titulo: '',
    descricao: '',
    categoria_id: '',
    tipo_id: '',
    solicitante_id: '',
    status_id: '1', // Status inicial (Aberto)
    responsavel_id: '', // Sem responsável inicial
    sla_personalizado: undefined as number | undefined
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Novo Chamado</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Título
            </label>
            <input
              type="text"
              required
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={form.titulo}
              onChange={(e) => setForm({ ...form, titulo: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descrição
            </label>
            <textarea
              required
              rows={4}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={form.descricao}
              onChange={(e) => setForm({ ...form, descricao: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoria
              </label>
              <select
                required
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={form.categoria_id}
                onChange={(e) => {
                  const categoria = categorias.find(c => c.id === e.target.value);
                  setForm({
                    ...form,
                    categoria_id: e.target.value,
                    sla_personalizado: categoria?.sla_padrao
                  });
                }}
              >
                <option value="">Selecione...</option>
                {categorias.map(categoria => (
                  <option key={categoria.id} value={categoria.id}>
                    {categoria.nome}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo
              </label>
              <select
                required
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={form.tipo_id}
                onChange={(e) => setForm({ ...form, tipo_id: e.target.value })}
              >
                <option value="">Selecione...</option>
                {tipos.map(tipo => (
                  <option key={tipo.id} value={tipo.id}>
                    {tipo.nome}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Solicitante
              </label>
              <select
                required
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={form.solicitante_id}
                onChange={(e) => setForm({ ...form, solicitante_id: e.target.value })}
              >
                <option value="">Selecione...</option>
                {usuarios
                  .filter(usuario => usuario.tipo === 'Solicitante' || usuario.tipo === 'Administrador')
                  .map(usuario => (
                    <option key={usuario.id} value={usuario.id}>
                      {usuario.nome}
                    </option>
                  ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                SLA (horas)
              </label>
              <input
                type="number"
                min="1"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={form.sla_personalizado || ''}
                onChange={(e) => setForm({
                  ...form,
                  sla_personalizado: e.target.value ? parseInt(e.target.value) : undefined
                })}
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-6 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Criar Chamado
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 