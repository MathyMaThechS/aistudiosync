import React from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import {
  Smartphone,
  Download,
  ExternalLink,
  CheckCircle2,
  X,
  HelpCircle,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface AndroidInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AndroidInstallModal: React.FC<AndroidInstallModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { isInstallable, isInstalled, install, isIOS, isAndroid } = usePWAInstall();

  if (!isOpen) return null;

  // The published app URL or current location
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const pwaBuilderUrl = `https://www.pwabuilder.com?site=${encodeURIComponent(currentUrl)}`;

  const handleNativeInstall = async () => {
    if (isInstallable) {
      await install();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-[#ddd8eb] bg-white p-6 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-[#696579] hover:bg-[#f1effb] hover:text-[#29263a]"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#514487] text-white shadow-sm">
            <Smartphone className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-[#514487]">
              Install on Android &bull; App &amp; APK Guide
            </h3>
            <p className="text-xs text-[#696579]">
              How to get this reviewer on your phone or generate a standalone APK
            </p>
          </div>
        </div>

        {/* Key Info Banner */}
        <div className="mt-4 rounded-xl border border-[#b7a9e8]/50 bg-[#f1effb] p-3.5 text-xs leading-relaxed text-[#514487]">
          <strong>Notice:</strong> Cloud web environments cannot compile native binary <code>.apk</code> files on the fly. Instead, this reviewer is built as a <strong>Progressive Web App (PWA)</strong> &mdash; modern Android&rsquo;s official app standard that installs directly onto your phone screen and works <strong>100% offline</strong> without an app store!
        </div>

        {/* Option 1: Direct Install (Best & Fastest) */}
        <div className="mt-5 space-y-4">
          <div className="rounded-xl border border-[#ddd8eb] bg-[#faf9fd] p-4">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wide text-[#6d5cae]">
                <Zap className="h-3.5 w-3.5" /> Option 1: Direct Instant Install (Recommended)
              </span>
              <span className="rounded bg-[#2e8b57]/15 px-2 py-0.5 text-[10px] font-bold text-[#2e8b57]">
                Fastest &bull; 0 MB Lag
              </span>
            </div>

            <p className="mt-2 text-xs text-[#29263a]">
              Installs a real Android home-screen app icon, launches full-screen with no browser address bar, and caches all 270+ questions for offline study.
            </p>

            {isInstallable && (
              <button
                onClick={handleNativeInstall}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#6d5cae] px-4 py-2.5 text-xs font-bold text-white shadow transition hover:bg-[#514487] active:scale-95"
              >
                <Download className="h-4 w-4" /> Install AO II Reviewer to Phone Now
              </button>
            )}

            {!isInstallable && (
              <div className="mt-3 rounded-lg bg-white p-3 text-xs text-[#4a4759]">
                <strong className="block text-[#514487]">Manual 2-Step Install in Browser:</strong>
                <ol className="mt-1 list-inside list-decimal space-y-1">
                  <li>
                    Open this URL on your phone in <strong>Google Chrome</strong> or <strong>Edge</strong>.
                  </li>
                  <li>
                    Tap the <strong>three dots (⋮)</strong> menu in the upper right.
                  </li>
                  <li>
                    Tap <strong>&ldquo;Install app&rdquo;</strong> or <strong>&ldquo;Add to Home screen&rdquo;</strong>.
                  </li>
                </ol>
              </div>
            )}
          </div>

          {/* Option 2: Generate Signed APK */}
          <div className="rounded-xl border border-[#ddd8eb] bg-[#faf9fd] p-4">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wide text-[#514487]">
                <Download className="h-3.5 w-3.5 text-[#514487]" /> Option 2: Generate Signed .APK File
              </span>
              <span className="rounded bg-[#514487]/10 px-2 py-0.5 text-[10px] font-bold text-[#514487]">
                100% Free Tool
              </span>
            </div>

            <p className="mt-2 text-xs text-[#29263a]">
              If you specifically need a standalone <code>.apk</code> installer file to distribute or side-load on other Android devices, use Google and Microsoft&rsquo;s official <strong>PWABuilder</strong>:
            </p>

            <ol className="mt-2.5 list-inside list-decimal space-y-1 text-xs text-[#4a4759]">
              <li>
                Click the button below to open <strong>PWABuilder</strong>.
              </li>
              <li>
                It automatically validates the manifest and icons we configured.
              </li>
              <li>
                Click <strong>&ldquo;Package for Android&rdquo;</strong> to download the ready-to-install <code>.apk</code>.
              </li>
            </ol>

            <a
              href={pwaBuilderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#6d5cae] bg-white px-4 py-2.5 text-xs font-bold text-[#6d5cae] shadow-xs transition hover:bg-[#f1effb]"
            >
              <ExternalLink className="h-4 w-4" /> Package as .APK on PWABuilder
            </a>
          </div>

          {/* PWA Advantages vs Raw APK */}
          <div className="rounded-xl border border-[#e1b93e]/40 bg-[#fff8df] p-3 text-xs text-[#514487]">
            <strong className="block font-bold">Why PWA is better than a side-loaded APK:</strong>
            <ul className="mt-1 list-inside list-disc space-y-0.5 text-[11px] text-[#696579]">
              <li>No &ldquo;Harmful file / Unknown source&rdquo; security warnings on Android</li>
              <li>Updates automatically whenever new civil service questions are added</li>
              <li>Operates 100% offline with zero data usage once installed</li>
            </ul>
          </div>
        </div>

        {/* Close footer */}
        <div className="mt-5 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl bg-[#514487] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#3d3366]"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
