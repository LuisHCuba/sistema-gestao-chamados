import React, { useEffect, useState } from 'react';
import { RefreshCw } from 'lucide-react';

// Definindo a interface para o evento de instalação do PWA
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

// Adicionando o evento ao tipo global de eventos do Window
declare global {
  interface WindowEventMap {
    'beforeinstallprompt': BeforeInstallPromptEvent;
  }
}

export default function ReloadPrompt() {
  const [needRefresh, setNeedRefresh] = useState(false);
  const [canInstall, setCanInstall] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    // Registrar o evento de instalação do PWA
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setCanInstall(true);
      setInstallPrompt(e);
    });

    // Verificar se há atualização do service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        // Nova versão do service worker ativada
        setNeedRefresh(true);
      });
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', () => {});
    };
  }, []);

  const handleUpdate = () => {
    window.location.reload();
  };

  const handleInstall = async () => {
    if (installPrompt) {
      await installPrompt.prompt();
      const { outcome } = await installPrompt.userChoice;
      if (outcome === 'accepted') {
        setCanInstall(false);
      }
    }
  };

  if (!needRefresh && !canInstall) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {needRefresh && (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4 flex items-center space-x-4">
          <RefreshCw className="h-6 w-6 text-blue-600" />
          <div>
            <p className="text-sm text-gray-600">Nova versão disponível</p>
            <button
              onClick={handleUpdate}
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Atualizar agora
            </button>
          </div>
        </div>
      )}

      {canInstall && (
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4">
          <div>
            <p className="text-sm text-gray-600">Instalar aplicativo</p>
            <button
              onClick={handleInstall}
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Instalar
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 