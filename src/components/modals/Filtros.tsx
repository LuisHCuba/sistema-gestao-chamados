import React from 'react';
import { X } from 'lucide-react';

interface FiltrosProps {
  isOpen: boolean;
  onClose: () => void;
  filtros: {
    status: string[];
    categoria: string[];
    tipo: string[];
    responsavel: string[];
    pesquisa: string;
  };
  onFiltrosChange: (filtros: {
    status: string[];
    categoria: string[];
    tipo: string[];
    responsavel: string[];
    pesquisa: string;
  }) => void;
  status: Array<{
    id: string;
    nome: string;
    cor: string;
  }>;
  categorias: Array<{
    id: string;
    nome: string;
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

export default function Filtros({
  isOpen,
  onClose,
  filtros,
  onFiltrosChange,
  status,
  categorias,
  tipos,
  usuarios
}: FiltrosProps) {
  const handleCheckboxChange = (
    grupo: 'status' | 'categoria' | 'tipo' | 'responsavel',
    id: string,
    checked: boolean
  ) => {
    const novosFiltros = { ...filtros };
    if (checked) {
      novosFiltros[grupo] = [...novosFiltros[grupo], id];
    } else {
      novosFiltros[grupo] = novosFiltros[grupo].filter(item => item !== id);
    }
    onFiltrosChange(novosFiltros);
  };

  const limparFiltros = () => {
    onFiltrosChange({
      status: [],
      categoria: [],
      tipo: [],
      responsavel: [],
      pesquisa: filtros.pesquisa
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Filtros</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Status */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Status</h3>
            <div className="grid grid-cols-2 gap-3">
              {status.map(item => (
                <label
                  key={item.id}
                  className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={filtros.status.includes(item.id)}
                    onChange={(e) => handleCheckboxChange('status', item.id, e.target.checked)}
                  />
                  <span className="flex items-center">
                    <span
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: item.cor }}
                    />
                    {item.nome}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Categorias</h3>
            <div className="grid grid-cols-2 gap-3">
              {categorias.map(item => (
                <label
                  key={item.id}
                  className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={filtros.categoria.includes(item.id)}
                    onChange={(e) => handleCheckboxChange('categoria', item.id, e.target.checked)}
                  />
                  <span>{item.nome}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Tipos */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Tipos</h3>
            <div className="grid grid-cols-2 gap-3">
              {tipos.map(item => (
                <label
                  key={item.id}
                  className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    checked={filtros.tipo.includes(item.id)}
                    onChange={(e) => handleCheckboxChange('tipo', item.id, e.target.checked)}
                  />
                  <span>{item.nome}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Responsáveis */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Responsáveis</h3>
            <div className="grid grid-cols-2 gap-3">
              {usuarios
                .filter(usuario => usuario.tipo === 'Técnico' || usuario.tipo === 'Administrador')
                .map(item => (
                  <label
                    key={item.id}
                    className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50"
                  >
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={filtros.responsavel.includes(item.id)}
                      onChange={(e) => handleCheckboxChange('responsavel', item.id, e.target.checked)}
                    />
                    <span>{item.nome}</span>
                  </label>
                ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-3 p-6 border-t">
          <button
            type="button"
            onClick={limparFiltros}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Limpar Filtros
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Aplicar
          </button>
        </div>
      </div>
    </div>
  );
} 