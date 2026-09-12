import React, { useState, useMemo } from 'react';
import { LESSONS } from '../data/lessons';
import { MUST_MEMORIZE_FACTS, GLOSSARY_ITEMS } from '../data/quickFacts';
import { Search, ChevronDown, ChevronUp, Sparkles, BookMarked, BookmarkCheck, CheckCircle2 } from 'lucide-react';

interface LessonsTabProps {
  onTakeQuizForCategory?: (catKey: string) => void;
}

export const LessonsTab: React.FC<LessonsTabProps> = ({ onTakeQuizForCategory }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'facts' | 'glossary' | 'lessons'>('all');
  const [expandedLessons, setExpandedLessons] = useState<Record<string, boolean>>({
    'lesson-1': true,
  });

  const toggleLesson = (id: string) => {
    setExpandedLessons((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = (open: boolean) => {
    const next: Record<string, boolean> = {};
    LESSONS.forEach((l) => {
      next[l.id] = open;
    });
    setExpandedLessons(next);
  };

  const filteredFacts = useMemo(() => {
    if (!searchQuery.trim()) return MUST_MEMORIZE_FACTS;
    const q = searchQuery.toLowerCase();
    return MUST_MEMORIZE_FACTS.filter(
      (f) =>
        f.title.toLowerCase().includes(q) ||
        f.detail.toLowerCase().includes(q) ||
        (f.tag && f.tag.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const filteredGlossary = useMemo(() => {
    if (!searchQuery.trim()) return GLOSSARY_ITEMS;
    const q = searchQuery.toLowerCase();
    return GLOSSARY_ITEMS.filter(
      (g) =>
        g.term.toLowerCase().includes(q) ||
        g.definition.toLowerCase().includes(q) ||
        (g.category && g.category.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const filteredLessons = useMemo(() => {
    if (!searchQuery.trim()) return LESSONS;
    const q = searchQuery.toLowerCase();
    return LESSONS.filter(
      (l) =>
        l.title.toLowerCase().includes(q) ||
        l.summary.toLowerCase().includes(q) ||
        l.keyPoints.some((p) => p.toLowerCase().includes(q)) ||
        (l.importantLaws && l.importantLaws.some((law) => law.toLowerCase().includes(q)))
    );
  }, [searchQuery]);

  return (
    <div className="space-y-6">
      {/* Search & Filter Banner */}
      <div className="rounded-2xl border border-[#ddd8eb] bg-white p-4 shadow-sm sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#696579]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search across lessons, RA 12009, leave rules, Excel formulas, glossary..."
              className="w-full rounded-xl border border-[#ddd8eb] bg-[#faf9fd] py-2.5 pl-10 pr-4 text-sm text-[#29263a] placeholder-[#696579] transition focus:border-[#6d5cae] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#6d5cae]/20"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#696579] hover:text-[#29263a]"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setActiveFilter('all')}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                activeFilter === 'all'
                  ? 'bg-[#6d5cae] text-white'
                  : 'bg-[#f1effb] text-[#514487] hover:bg-[#e4dff7]'
              }`}
            >
              All Content
            </button>
            <button
              onClick={() => setActiveFilter('facts')}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                activeFilter === 'facts'
                  ? 'bg-[#6d5cae] text-white'
                  : 'bg-[#f1effb] text-[#514487] hover:bg-[#e4dff7]'
              }`}
            >
              Quick Facts ({filteredFacts.length})
            </button>
            <button
              onClick={() => setActiveFilter('glossary')}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                activeFilter === 'glossary'
                  ? 'bg-[#6d5cae] text-white'
                  : 'bg-[#f1effb] text-[#514487] hover:bg-[#e4dff7]'
              }`}
            >
              Glossary ({filteredGlossary.length})
            </button>
            <button
              onClick={() => setActiveFilter('lessons')}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                activeFilter === 'lessons'
                  ? 'bg-[#6d5cae] text-white'
                  : 'bg-[#f1effb] text-[#514487] hover:bg-[#e4dff7]'
              }`}
            >
              Lessons ({filteredLessons.length})
            </button>
          </div>
        </div>
      </div>

      {/* Must-Memorize Quick Facts Card */}
      {(activeFilter === 'all' || activeFilter === 'facts') && (
        <section className="rounded-2xl border-2 border-[#6d5cae] bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#ddd8eb] pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#6d5cae]" />
              <h2 className="text-lg font-bold text-[#514487] sm:text-xl">
                MUST-MEMORIZE &mdash; QUICK FACTS
              </h2>
            </div>
            <span className="rounded-full bg-[#f1effb] px-2.5 py-0.5 text-xs font-bold text-[#514487]">
              {filteredFacts.length} High-Yield Exam Items
            </span>
          </div>

          <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {filteredFacts.map((fact, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-xl border border-[#ddd8eb] bg-[#faf9fd] p-3 transition hover:border-[#6d5cae] hover:bg-[#faf9ff]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-extrabold text-[#514487]">{fact.title}</span>
                    {fact.tag && (
                      <span className="rounded-md bg-[#e7e3f8] px-1.5 py-0.5 text-[10px] font-bold text-[#514487]">
                        {fact.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-[#29263a]">{fact.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Glossary of Terms */}
      {(activeFilter === 'all' || activeFilter === 'glossary') && (
        <section className="rounded-2xl border border-[#ddd8eb] bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center justify-between border-b border-[#ddd8eb] pb-3">
            <div className="flex items-center gap-2">
              <BookMarked className="h-5 w-5 text-[#6d5cae]" />
              <h2 className="text-lg font-bold text-[#514487] sm:text-xl">
                GLOSSARY OF GOVERNMENT & DEPED TERMS
              </h2>
            </div>
            <span className="rounded-full bg-[#f1effb] px-2.5 py-0.5 text-xs font-bold text-[#514487]">
              {filteredGlossary.length} Essential Acronyms & Roles
            </span>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGlossary.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[#ddd8eb] bg-[#faf9fd] p-3 text-xs transition hover:border-[#b7a9e8] hover:bg-white"
              >
                <div className="flex items-center justify-between">
                  <strong className="text-sm font-bold text-[#514487]">{item.term}</strong>
                  {item.category && (
                    <span className="rounded bg-[#f1effb] px-1.5 py-0.5 text-[9px] font-semibold text-[#696579]">
                      {item.category}
                    </span>
                  )}
                </div>
                <p className="mt-1 leading-relaxed text-[#29263a]">{item.definition}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 14 In-Depth Lesson Modules */}
      {(activeFilter === 'all' || activeFilter === 'lessons') && (
        <section className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <div>
              <h2 className="text-lg font-bold text-[#514487] sm:text-xl">
                14 Comprehensive Written Exam Lessons
              </h2>
              <p className="text-xs text-[#696579]">
                Structured notes, regulatory foundations, checklists, and formula breakdowns.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => expandAll(true)}
                className="rounded-lg border border-[#ddd8eb] bg-white px-2.5 py-1 text-xs font-semibold text-[#514487] hover:bg-[#f1effb]"
              >
                Expand All
              </button>
              <button
                onClick={() => expandAll(false)}
                className="rounded-lg border border-[#ddd8eb] bg-white px-2.5 py-1 text-xs font-semibold text-[#514487] hover:bg-[#f1effb]"
              >
                Collapse
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {filteredLessons.map((lesson) => {
              const isOpen = !!expandedLessons[lesson.id];
              return (
                <div
                  key={lesson.id}
                  className="overflow-hidden rounded-2xl border border-[#ddd8eb] bg-white shadow-sm transition hover:border-[#b7a9e8]"
                >
                  <button
                    onClick={() => toggleLesson(lesson.id)}
                    className="flex w-full items-start justify-between gap-3 p-4 text-left transition hover:bg-[#faf9fd] sm:p-5"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-md bg-[#f1effb] px-2 py-0.5 text-[11px] font-bold text-[#514487]">
                          {lesson.categoryKey.toUpperCase()}
                        </span>
                        <h3 className="text-base font-bold text-[#514487] sm:text-lg">
                          {lesson.title}
                        </h3>
                      </div>
                      <p className="mt-1 text-xs text-[#696579] sm:text-sm">{lesson.summary}</p>
                    </div>
                    <div className="mt-1 flex-shrink-0 text-[#6d5cae]">
                      {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#ddd8eb] bg-[#faf9fd]/60 p-4 sm:p-6">
                      {/* Key Points */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#514487]">
                          Core Rules & Principles
                        </h4>
                        <ul className="mt-2.5 space-y-2 text-xs leading-relaxed text-[#29263a] sm:text-sm">
                          {lesson.keyPoints.map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6d5cae]" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Important Laws & Circulars */}
                      {lesson.importantLaws && lesson.importantLaws.length > 0 && (
                        <div className="mt-4 rounded-xl border border-[#ddd8eb] bg-white p-3.5">
                          <h5 className="text-xs font-bold text-[#514487]">
                            Governing Laws & References:
                          </h5>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {lesson.importantLaws.map((law, lIdx) => (
                              <span
                                key={lIdx}
                                className="rounded-md bg-[#f1effb] px-2 py-1 text-xs font-medium text-[#514487]"
                              >
                                {law}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Rules or Formulas */}
                      {lesson.rulesOrFormulas && lesson.rulesOrFormulas.length > 0 && (
                        <div className="mt-3 rounded-xl border border-[#e1b93e]/40 bg-[#fff8df] p-3.5 text-xs text-[#514487]">
                          <strong className="block font-bold">Key Formulas / Rules:</strong>
                          <ul className="mt-1 list-inside list-disc space-y-1 font-mono text-[11px] sm:text-xs">
                            {lesson.rulesOrFormulas.map((rule, rIdx) => (
                              <li key={rIdx}>{rule}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Action Button */}
                      {onTakeQuizForCategory && (
                        <div className="mt-4 flex justify-end">
                          <button
                            onClick={() => onTakeQuizForCategory(lesson.categoryKey)}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-[#6d5cae] px-3.5 py-1.5 text-xs font-bold text-white transition hover:bg-[#514487]"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            Practice {lesson.title.split(':')[0]} Questions
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};
