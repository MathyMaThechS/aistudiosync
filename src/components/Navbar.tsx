import React from 'react';
import { TabType } from '../types';
import { BookOpen, CheckCircle2, MessageSquare, FileText, Calculator } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  examCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange, examCount = 270 }) => {
  const tabs = [
    {
      id: 'lessons' as TabType,
      label: 'Lessons & Facts',
      icon: BookOpen,
      badge: '14 Modules',
    },
    {
      id: 'exam' as TabType,
      label: 'Practice Exam',
      icon: CheckCircle2,
      badge: `${examCount} Qs`,
    },
    {
      id: 'interview' as TabType,
      label: 'STAR Interview',
      icon: MessageSquare,
      badge: '20 Q&A',
    },
    {
      id: 'drafting' as TabType,
      label: 'Document Drafting',
      icon: FileText,
      badge: '8 Templates',
    },
    {
      id: 'calculator' as TabType,
      label: 'Financial Tools',
      icon: Calculator,
      badge: 'AO II Math',
    },
  ];

  return (
    <nav className="sticky top-0 z-30 -mx-3 mb-6 bg-[#f5f3fa]/90 px-3 py-2.5 backdrop-blur-md">
      <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar sm:justify-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                onTabChange(tab.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-3.5 py-2.5 text-sm font-bold transition-all ${
                isActive
                  ? 'bg-[#6d5cae] text-white shadow-md shadow-[#6d5cae]/25 ring-2 ring-[#6d5cae]/20'
                  : 'border border-[#ddd8eb] bg-white text-[#514487] hover:border-[#b7a9e8] hover:bg-[#faf9ff]'
              }`}
            >
              <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-[#6d5cae]'}`} />
              <span>{tab.label}</span>
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-[#f1effb] text-[#514487]'
                }`}
              >
                {tab.badge}
              </span>
            </button>
          );
        })}
        <div className="flex items-center pl-1">
          <PWAInstallButton variant="compact" />
        </div>
      </div>
    </nav>
  );
};
