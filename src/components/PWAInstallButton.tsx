import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Smartphone, Download, CheckCircle2 } from 'lucide-react';
import { AndroidInstallModal } from './AndroidInstallModal';

interface PWAInstallButtonProps {
  variant?: 'header' | 'navbar' | 'compact';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ variant = 'header' }) => {
  const { isInstallable, isInstalled, install } = usePWAInstall();
  const [showModal, setShowModal] = useState(false);

  const handleClick = async () => {
    if (isInstallable) {
      const outcome = await install();
      if (!outcome) {
        setShowModal(true);
      }
    } else {
      setShowModal(true);
    }
  };

  if (isInstalled) {
    return (
      <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
        <CheckCircle2 className="h-3.5 w-3.5 text-[#b7a9e8]" />
        <span>Installed on Device</span>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <>
        <button
          onClick={handleClick}
          className="inline-flex items-center gap-1.5 rounded-lg border border-[#ddd8eb] bg-[#f1effb] px-2.5 py-1 text-xs font-bold text-[#514487] hover:bg-[#e4dff7]"
          title="Install as Android App or get APK"
        >
          <Smartphone className="h-3.5 w-3.5 text-[#6d5cae]" />
          <span>Install App / APK</span>
        </button>
        <AndroidInstallModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </>
    );
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/15 px-3.5 py-2 text-xs font-bold text-white shadow-xs backdrop-blur-sm transition hover:bg-white/25 active:scale-95"
      >
        <Smartphone className="h-4 w-4 text-[#b7a9e8]" />
        <span>Install App / Get APK</span>
      </button>
      <AndroidInstallModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};
