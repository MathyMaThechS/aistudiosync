import React from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { WifiOff, CheckCircle } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2.5 rounded-xl border border-[#e1b93e]/50 bg-[#fff8df] px-3.5 py-2 text-xs font-semibold text-[#514487] shadow-lg backdrop-blur-sm">
      <WifiOff className="h-4 w-4 text-[#d97706]" />
      <span>
        <strong>Offline Mode:</strong> Full reviewer, 270+ questions &amp; lessons are cached and ready to study without internet!
      </span>
    </div>
  );
};
