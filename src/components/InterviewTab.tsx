import React, { useState, useMemo } from 'react';
import { INTERVIEW_QUESTIONS } from '../data/interviewQuestions';
import { MessageSquare, Sparkles, ChevronDown, ChevronUp, Edit3, CheckCircle, Search } from 'lucide-react';

export const InterviewTab: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openAnswerIds, setOpenAnswerIds] = useState<Record<number, boolean>>({
    1: true,
  });
  const [userNotes, setUserNotes] = useState<Record<number, string>>({});
  const [activeNoteEditor, setActiveNoteEditor] = useState<number | null>(null);

  const toggleAnswer = (id: number) => {
    setOpenAnswerIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleAll = (open: boolean) => {
    const next: Record<number, boolean> = {};
    INTERVIEW_QUESTIONS.forEach((q) => {
      next[q.id] = open;
    });
    setOpenAnswerIds(next);
  };

  const filteredQuestions = useMemo(() => {
    if (!searchQuery.trim()) return INTERVIEW_QUESTIONS;
    const q = searchQuery.toLowerCase();
    return INTERVIEW_QUESTIONS.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.suggestedAnswer.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="space-y-6">
      {/* S-T-A-R Framework Banner */}
      <div className="rounded-2xl border border-[#e1b93e]/40 bg-[#fff8df] p-5 shadow-sm sm:p-6">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-[#d97706]" />
          <h2 className="text-base font-bold text-[#514487] sm:text-lg">
            AO II Panel Interview Master Strategy: The S-T-A-R Framework
          </h2>
        </div>
        <p className="mt-1.5 text-xs text-[#696579] sm:text-sm">
          DepEd panel interviewers assess administrative competence, ethical firmness, emotional maturity, and service mindset. When answering behavioral questions, ground your response in the 4-part structure:
        </p>

        <div className="mt-3.5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-[#ddd8eb] bg-white p-3 text-xs">
            <span className="font-extrabold text-[#6d5cae]">S &mdash; Situation</span>
            <p className="mt-0.5 text-[#696579]">
              Briefly describe the specific context or background of the event.
            </p>
          </div>
          <div className="rounded-xl border border-[#ddd8eb] bg-white p-3 text-xs">
            <span className="font-extrabold text-[#6d5cae]">T &mdash; Task</span>
            <p className="mt-0.5 text-[#696579]">
              State your exact duty, goal, or the challenge that had to be resolved.
            </p>
          </div>
          <div className="rounded-xl border border-[#ddd8eb] bg-white p-3 text-xs">
            <span className="font-extrabold text-[#6d5cae]">A &mdash; Action</span>
            <p className="mt-0.5 text-[#696579]">
              Explain the specific lawful, ethical, and practical steps you executed.
            </p>
          </div>
          <div className="rounded-xl border border-[#ddd8eb] bg-white p-3 text-xs">
            <span className="font-extrabold text-[#6d5cae]">R &mdash; Result</span>
            <p className="mt-0.5 text-[#696579]">
              Highlight the successful outcome, zero audit deficit, or systemic improvement.
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Global Controls */}
      <div className="flex flex-col gap-3 rounded-2xl border border-[#ddd8eb] bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#696579]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search interview questions by keyword, topic, or ethical scenario..."
            className="w-full rounded-xl border border-[#ddd8eb] bg-[#faf9fd] py-2 pl-9 pr-3 text-xs text-[#29263a] placeholder-[#696579] focus:border-[#6d5cae] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#6d5cae]"
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => toggleAll(true)}
            className="rounded-lg border border-[#ddd8eb] bg-[#faf9fd] px-3 py-1.5 text-xs font-semibold text-[#514487] hover:bg-[#f1effb]"
          >
            Show All Answers
          </button>
          <button
            onClick={() => toggleAll(false)}
            className="rounded-lg border border-[#ddd8eb] bg-[#faf9fd] px-3 py-1.5 text-xs font-semibold text-[#514487] hover:bg-[#f1effb]"
          >
            Hide All
          </button>
        </div>
      </div>

      {/* 20 Questions List */}
      <div className="space-y-4">
        {filteredQuestions.map((q) => {
          const isOpen = !!openAnswerIds[q.id];
          const hasUserNote = !!userNotes[q.id];
          const isEditingNote = activeNoteEditor === q.id;

          return (
            <div
              key={q.id}
              className="overflow-hidden rounded-2xl border border-[#ddd8eb] bg-white shadow-sm transition hover:border-[#b7a9e8]"
            >
              {/* Question Header */}
              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-[#f1effb] px-2.5 py-0.5 text-[11px] font-bold text-[#6d5cae]">
                    Question #{q.id} &bull; {q.category}
                  </span>
                  <span className="text-[11px] font-medium text-[#696579]">
                    Civil Service &bull; DepEd Panel
                  </span>
                </div>

                <h3 className="mt-2.5 text-sm font-bold text-[#29263a] sm:text-base md:text-lg">
                  {q.question}
                </h3>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => toggleAnswer(q.id)}
                    className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-1.5 text-xs font-bold transition ${
                      isOpen
                        ? 'border-[#6d5cae] bg-[#6d5cae] text-white'
                        : 'border-[#ddd8eb] bg-white text-[#514487] hover:bg-[#faf9fd]'
                    }`}
                  >
                    {isOpen ? (
                      <>
                        Hide Suggested Answer <ChevronUp className="h-3.5 w-3.5" />
                      </>
                    ) : (
                      <>
                        Show Suggested Answer <ChevronDown className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveNoteEditor(isEditingNote ? null : q.id)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#6d5cae] hover:underline"
                  >
                    <Edit3 className="h-3.5 w-3.5" />
                    {hasUserNote ? 'Edit My Personal Answer' : 'Draft My Personal Answer'}
                  </button>
                </div>
              </div>

              {/* Personal Answer Scratchpad */}
              {isEditingNote && (
                <div className="border-t border-[#ddd8eb] bg-[#faf9fd] p-4 text-xs">
                  <label className="font-bold text-[#514487]">
                    My Personal Draft / Talking Points:
                  </label>
                  <textarea
                    value={userNotes[q.id] || ''}
                    onChange={(e) =>
                      setUserNotes((prev) => ({ ...prev, [q.id]: e.target.value }))
                    }
                    placeholder="Type your own story or customized talking points here..."
                    rows={3}
                    className="mt-1.5 w-full rounded-lg border border-[#ddd8eb] bg-white p-2.5 text-xs text-[#29263a] focus:border-[#6d5cae] focus:outline-none"
                  />
                  <div className="mt-2 flex justify-end gap-2">
                    <button
                      onClick={() => setActiveNoteEditor(null)}
                      className="rounded-lg bg-[#6d5cae] px-3 py-1 font-bold text-white"
                    >
                      Save Draft
                    </button>
                  </div>
                </div>
              )}

              {/* Model Answer Drawer */}
              {isOpen && (
                <div className="border-t border-[#ddd8eb] bg-[#f8f6fc] p-4 sm:p-6">
                  <div className="rounded-xl border border-[#ddd8eb] bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#514487]">
                      <CheckCircle className="h-4 w-4 text-[#2e8b57]" />
                      SUGGESTED MODEL ANSWER:
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-[#29263a] sm:text-sm">
                      {q.suggestedAnswer}
                    </p>
                  </div>

                  {q.starTip && (
                    <div className="mt-3 rounded-xl border border-[#e1b93e]/50 bg-[#fff8df] p-3 text-xs text-[#514487]">
                      <strong className="font-bold">Interviewer Tip:</strong> {q.starTip}
                    </div>
                  )}

                  {userNotes[q.id] && !isEditingNote && (
                    <div className="mt-3 rounded-xl border border-[#6d5cae]/30 bg-white p-3 text-xs">
                      <strong className="text-[#514487]">Your Saved Talking Points:</strong>
                      <p className="mt-1 text-[#29263a] whitespace-pre-wrap">{userNotes[q.id]}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
