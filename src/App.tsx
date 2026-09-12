import React, { useState } from 'react';
import { TabType, CategoryKey } from './types';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { LessonsTab } from './components/LessonsTab';
import { ExamTab } from './components/ExamTab';
import { InterviewTab } from './components/InterviewTab';
import { DraftingTab } from './components/DraftingTab';
import { CalculatorTab } from './components/CalculatorTab';
import { Footer } from './components/Footer';
import { OfflineIndicator } from './components/OfflineIndicator';
import { ALL_QUESTIONS } from './data/questions';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('lessons');
  const [examCategory, setExamCategory] = useState<CategoryKey | null>(null);

  const handleTakeQuizForCategory = (catKey: string) => {
    setExamCategory(catKey as CategoryKey);
    setActiveTab('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f5f3fa] text-[#29263a]">
      <div className="mx-auto max-w-5xl px-3 py-4 sm:px-6 sm:py-6">
        {/* Main Application Header */}
        <Header
          onStartExam={() => {
            setActiveTab('exam');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onExploreLessons={() => {
            setActiveTab('lessons');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* Navigation Tabs */}
        <div className="mt-4">
          <Navbar
            activeTab={activeTab}
            onTabChange={(tab) => {
              setActiveTab(tab);
            }}
            examCount={ALL_QUESTIONS.length}
          />
        </div>

        {/* Tab Content Display */}
        <main className="mt-2 min-h-[600px]">
          {activeTab === 'lessons' && (
            <LessonsTab onTakeQuizForCategory={handleTakeQuizForCategory} />
          )}

          {activeTab === 'exam' && (
            <ExamTab
              initialCategory={examCategory}
              onClearInitialCategory={() => setExamCategory(null)}
            />
          )}

          {activeTab === 'interview' && <InterviewTab />}

          {activeTab === 'drafting' && <DraftingTab />}

          {activeTab === 'calculator' && <CalculatorTab />}
        </main>

        {/* Footer */}
        <Footer />

        {/* Offline Status Toast */}
        <OfflineIndicator />
      </div>
    </div>
  );
}
