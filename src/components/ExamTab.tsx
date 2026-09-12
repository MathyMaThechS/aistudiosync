import React, { useState, useMemo } from 'react';
import { CATEGORIES_LIST, CATEGORIES_MAP } from '../data/categories';
import { ALL_QUESTIONS } from '../data/questions';
import { CategoryKey, Question, UserAnswerRecord } from '../types';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowRight,
  ListFilter,
  Check,
  Award,
  BookOpen,
  Filter,
  Bookmark,
  Sparkles
} from 'lucide-react';

interface ExamTabProps {
  initialCategory?: CategoryKey | null;
  onClearInitialCategory?: () => void;
}

export const ExamTab: React.FC<ExamTabProps> = ({
  initialCategory,
  onClearInitialCategory,
}) => {
  // Setup state
  const [selectedCategories, setSelectedCategories] = useState<Set<CategoryKey>>(() => {
    if (initialCategory) {
      return new Set([initialCategory]);
    }
    return new Set(CATEGORIES_LIST.map((c) => c.key));
  });
  const [examMode, setExamMode] = useState<number | 'all'>(10);
  const [isExamRunning, setIsExamRunning] = useState(false);
  const [isExamFinished, setIsExamFinished] = useState(false);

  // Active exam state
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, UserAnswerRecord>>({});
  const [bookmarkedIndices, setBookmarkedIndices] = useState<Set<number>>(new Set());
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong' | 'bookmarked'>('all');

  // Available question count for currently selected categories
  const availableQuestionCount = useMemo(() => {
    return ALL_QUESTIONS.filter((q) => selectedCategories.has(q.cat)).length;
  }, [selectedCategories]);

  // Handle category toggle
  const toggleCategory = (key: CategoryKey) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const selectAll = (select: boolean) => {
    if (select) {
      setSelectedCategories(new Set(CATEGORIES_LIST.map((c) => c.key)));
    } else {
      setSelectedCategories(new Set());
    }
  };

  // Start Exam
  const startExam = (customQuestions?: Question[]) => {
    if (customQuestions && customQuestions.length > 0) {
      setCurrentQuestions(customQuestions);
    } else {
      if (selectedCategories.size === 0) {
        alert('Please select at least one category to begin.');
        return;
      }

      const pool = ALL_QUESTIONS.filter((q) => selectedCategories.has(q.cat));
      // Shuffle
      const shuffled = [...pool].sort(() => Math.random() - 0.5);
      const totalToTake = examMode === 'all' ? shuffled.length : Math.min(examMode, shuffled.length);
      setCurrentQuestions(shuffled.slice(0, totalToTake));
    }

    setCurrentIndex(0);
    setUserAnswers({});
    setBookmarkedIndices(new Set());
    setIsExamRunning(true);
    setIsExamFinished(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Answer handler
  const handleSelectChoice = (choiceIndex: number) => {
    if (userAnswers[currentIndex]) return; // Already answered

    const currentQ = currentQuestions[currentIndex];
    const isCorrect = choiceIndex === currentQ.ans;

    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: {
        userChoice: choiceIndex,
        correctChoice: currentQ.ans,
        isCorrect,
      },
    }));
  };

  const nextQuestion = () => {
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      finishExam();
    }
  };

  const finishExam = () => {
    setIsExamRunning(false);
    setIsExamFinished(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleBookmark = (idx: number) => {
    setBookmarkedIndices((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  // Retake missed questions
  const retakeMissedQuestions = () => {
    const missed = currentQuestions.filter((_, idx) => {
      const rec = userAnswers[idx];
      return !rec || !rec.isCorrect;
    });
    if (missed.length === 0) {
      alert('Congratulations! You did not miss any questions in this session.');
      return;
    }
    startExam(missed);
  };

  // Stats calculation
  const totalScore = (Object.values(userAnswers) as UserAnswerRecord[]).filter((a) => a.isCorrect).length;
  const scorePercent = currentQuestions.length > 0 ? Math.round((totalScore / currentQuestions.length) * 100) : 0;

  let ratingMessage = '';
  let ratingColor = '';
  if (scorePercent >= 90) {
    ratingMessage = 'Outstanding! Excellent mastery of civil service & DepEd rules!';
    ratingColor = 'text-[#2e8b57]';
  } else if (scorePercent >= 80) {
    ratingMessage = 'Very Good! Strong readiness for the AO II written examination.';
    ratingColor = 'text-[#514487]';
  } else if (scorePercent >= 70) {
    ratingMessage = 'Good job! Passing standard achieved. Review explanations for weak spots.';
    ratingColor = 'text-[#6d5cae]';
  } else if (scorePercent >= 60) {
    ratingMessage = 'Fair. More practice recommended on procurement, leave rules & financial computations.';
    ratingColor = 'text-[#d97706]';
  } else {
    ratingMessage = 'Needs improvement. Read the 14 lesson modules and retry.';
    ratingColor = 'text-[#c94c4c]';
  }

  return (
    <div className="space-y-6">
      {/* 1. SETUP VIEW */}
      {!isExamRunning && !isExamFinished && (
        <div className="rounded-2xl border border-[#ddd8eb] bg-white p-5 shadow-sm sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#ddd8eb] pb-4">
            <div>
              <h2 className="text-xl font-extrabold text-[#514487] sm:text-2xl">
                Practice Examination Simulator
              </h2>
              <p className="mt-1 text-xs text-[#696579] sm:text-sm">
                Customizable test mode with immediate feedback, detailed rationales, and comprehensive score breakdown.
              </p>
            </div>
            <div className="rounded-full bg-[#f1effb] px-3 py-1 text-xs font-bold text-[#514487]">
              {availableQuestionCount} Questions Available
            </div>
          </div>

          {/* Exam Length Mode */}
          <div className="mt-5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#514487]">
              Select Number of Questions:
            </label>
            <div className="mt-2.5 flex flex-wrap gap-2.5">
              {[
                { value: 10, label: 'Quick Sprint (10 Qs)' },
                { value: 25, label: 'Standard Review (25 Qs)' },
                { value: 50, label: 'Mock Examination (50 Qs)' },
                { value: 'all' as const, label: `Full Question Bank (${availableQuestionCount} Qs)` },
              ].map((mode) => (
                <button
                  key={mode.value}
                  type="button"
                  onClick={() => setExamMode(mode.value)}
                  className={`rounded-xl px-4 py-2 text-xs font-bold transition sm:text-sm ${
                    examMode === mode.value
                      ? 'bg-[#6d5cae] text-white shadow-md shadow-[#6d5cae]/20 ring-2 ring-[#6d5cae]/20'
                      : 'border border-[#ddd8eb] bg-[#faf9fd] text-[#514487] hover:border-[#b7a9e8] hover:bg-white'
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>
          </div>

          {/* Categories Selector */}
          <div className="mt-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#514487]">
                Select Exam Topics ({selectedCategories.size} of {CATEGORIES_LIST.length} selected):
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => selectAll(true)}
                  className="rounded-lg border border-[#ddd8eb] bg-[#f1effb] px-2.5 py-1 text-xs font-bold text-[#514487] hover:bg-[#e4dff7]"
                >
                  Select All
                </button>
                <button
                  type="button"
                  onClick={() => selectAll(false)}
                  className="rounded-lg border border-[#ddd8eb] bg-white px-2.5 py-1 text-xs font-bold text-[#696579] hover:bg-[#faf9fd]"
                >
                  Clear All
                </button>
              </div>
            </div>

            <div className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {CATEGORIES_LIST.map((cat) => {
                const isSelected = selectedCategories.has(cat.key);
                return (
                  <label
                    key={cat.key}
                    onClick={() => toggleCategory(cat.key)}
                    className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 transition ${
                      isSelected
                        ? 'border-[#6d5cae] bg-[#f8f6fc]'
                        : 'border-[#ddd8eb] bg-white opacity-70 hover:opacity-100'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => {}} // Handled by parent label click
                      className="mt-0.5 h-4 w-4 rounded accent-[#6d5cae]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#514487] sm:text-sm">
                          {cat.name}
                        </span>
                        <span className="rounded bg-[#f1effb] px-1.5 py-0.5 text-[10px] font-bold text-[#6d5cae]">
                          {cat.count}
                        </span>
                      </div>
                      <p className="mt-0.5 text-[11px] text-[#696579] line-clamp-1">
                        {cat.description}
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Action Bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[#ddd8eb] pt-5 sm:flex-row">
            <div className="text-xs text-[#696579]">
              Ready to take: <strong className="text-[#514487]">{examMode === 'all' ? availableQuestionCount : Math.min(examMode, availableQuestionCount)} questions</strong> across {selectedCategories.size} categories.
            </div>
            <button
              onClick={() => startExam()}
              disabled={selectedCategories.size === 0 || availableQuestionCount === 0}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#6d5cae] px-6 py-3 text-sm font-bold text-white shadow-md shadow-[#6d5cae]/25 transition hover:bg-[#514487] active:scale-95 disabled:opacity-50"
            >
              <CheckCircle2 className="h-4 w-4" />
              START EXAMINATION NOW
            </button>
          </div>
        </div>
      )}

      {/* 2. ACTIVE EXAM RUNNER */}
      {isExamRunning && currentQuestions.length > 0 && (
        <div className="space-y-4">
          {/* Header Card with Progress */}
          <div className="rounded-2xl border border-[#ddd8eb] bg-white p-4 shadow-sm sm:p-5">
            <div className="flex items-center justify-between text-xs text-[#696579] sm:text-sm">
              <span className="font-bold text-[#514487]">
                Question {currentIndex + 1} of {currentQuestions.length}
              </span>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#f1effb] px-2.5 py-0.5 text-xs font-bold text-[#6d5cae]">
                  {CATEGORIES_MAP[currentQuestions[currentIndex].cat] || currentQuestions[currentIndex].cat}
                </span>
                <button
                  type="button"
                  onClick={() => toggleBookmark(currentIndex)}
                  title="Bookmark question for review"
                  className={`rounded-lg p-1.5 transition ${
                    bookmarkedIndices.has(currentIndex)
                      ? 'bg-[#fff8df] text-[#e1b93e]'
                      : 'text-[#696579] hover:bg-[#f1effb]'
                  }`}
                >
                  <Bookmark className="h-4 w-4 fill-current" />
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-[#e5e1ee]">
              <div
                className="h-full bg-gradient-to-r from-[#6d5cae] to-[#b7a9e8] transition-all duration-300"
                style={{
                  width: `${((currentIndex + 1) / currentQuestions.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="rounded-2xl border border-[#ddd8eb] bg-white p-5 shadow-sm sm:p-7">
            <h3 className="text-base font-bold leading-relaxed text-[#29263a] sm:text-lg md:text-xl">
              {currentQuestions[currentIndex].q}
            </h3>

            {/* Choices */}
            <div className="mt-5 space-y-2.5">
              {currentQuestions[currentIndex].opts.map((opt, optIdx) => {
                const letter = String.fromCharCode(65 + optIdx);
                const answerRecord = userAnswers[currentIndex];
                const isSelected = answerRecord && answerRecord.userChoice === optIdx;
                const isCorrectAnswer = optIdx === currentQuestions[currentIndex].ans;

                let optionClass =
                  'border-[#ddd8eb] bg-white text-[#29263a] hover:border-[#6d5cae] hover:bg-[#faf9ff]';

                if (answerRecord) {
                  if (isCorrectAnswer) {
                    optionClass = 'border-[#2e8b57] bg-[#eaf7ef] text-[#2e8b57] font-semibold';
                  } else if (isSelected && !answerRecord.isCorrect) {
                    optionClass = 'border-[#c94c4c] bg-[#fcecec] text-[#c94c4c]';
                  } else {
                    optionClass = 'border-[#ddd8eb] bg-[#faf9fd] text-[#696579] opacity-60';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    type="button"
                    disabled={!!answerRecord}
                    onClick={() => handleSelectChoice(optIdx)}
                    className={`flex w-full items-center gap-3.5 rounded-xl border p-3.5 text-left text-sm transition sm:text-base ${optionClass}`}
                  >
                    <span
                      className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                        answerRecord && isCorrectAnswer
                          ? 'bg-[#2e8b57] text-white'
                          : answerRecord && isSelected
                          ? 'bg-[#c94c4c] text-white'
                          : 'bg-[#f1effb] text-[#514487]'
                      }`}
                    >
                      {letter}
                    </span>
                    <span className="flex-1">{opt}</span>
                    {answerRecord && isCorrectAnswer && (
                      <CheckCircle2 className="h-5 w-5 text-[#2e8b57]" />
                    )}
                    {answerRecord && isSelected && !answerRecord.isCorrect && (
                      <XCircle className="h-5 w-5 text-[#c94c4c]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation & Next Action Box */}
            {userAnswers[currentIndex] && (
              <div
                className={`mt-6 rounded-xl border p-4 sm:p-5 ${
                  userAnswers[currentIndex].isCorrect
                    ? 'border-[#b9dfc9] bg-[#eaf7ef]/70 text-[#1e5837]'
                    : 'border-[#edbcbc] bg-[#fcecec]/70 text-[#732b2b]'
                }`}
              >
                <div className="flex items-center gap-2">
                  {userAnswers[currentIndex].isCorrect ? (
                    <>
                      <CheckCircle2 className="h-5 w-5 text-[#2e8b57]" />
                      <strong className="text-sm font-bold text-[#2e8b57] sm:text-base">
                        CORRECT! Excellent work!
                      </strong>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-5 w-5 text-[#c94c4c]" />
                      <strong className="text-sm font-bold text-[#c94c4c] sm:text-base">
                        WRONG. Learn and remember for the exam!
                      </strong>
                    </>
                  )}
                </div>

                <div className="mt-2 text-xs leading-relaxed sm:text-sm">
                  <div className="font-semibold text-[#29263a]">
                    Correct Answer: Option {String.fromCharCode(65 + currentQuestions[currentIndex].ans)} &mdash;{' '}
                    {currentQuestions[currentIndex].opts[currentQuestions[currentIndex].ans]}
                  </div>
                  <p className="mt-1 text-[#4a4759]">
                    <strong>Explanation:</strong> {currentQuestions[currentIndex].exp}
                  </p>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={nextQuestion}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#6d5cae] px-5 py-2.5 text-xs font-bold text-white shadow transition hover:bg-[#514487] active:scale-95 sm:text-sm"
                  >
                    {currentIndex < currentQuestions.length - 1 ? (
                      <>
                        Next Question <ArrowRight className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        See Exam Results <Award className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. EXAM FINISHED / RESULTS SUMMARY */}
      {isExamFinished && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-[#ddd8eb] bg-white p-6 text-center shadow-sm sm:p-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f1effb] text-[#6d5cae]">
              <Award className="h-8 w-8" />
            </div>

            <h2 className="mt-3 text-2xl font-extrabold text-[#514487] sm:text-3xl">
              Examination Completed!
            </h2>

            <div className="mt-3">
              <span className="text-4xl font-extrabold text-[#514487] sm:text-5xl">
                {totalScore}
              </span>
              <span className="text-lg font-bold text-[#696579]"> / {currentQuestions.length}</span>
              <div className="mt-1 text-sm font-bold text-[#6d5cae]">
                Score: {scorePercent}%
              </div>
            </div>

            <p className={`mt-3 text-sm font-bold ${ratingColor} sm:text-base`}>
              {ratingMessage}
            </p>

            {/* Quick Actions */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => {
                  setIsExamFinished(false);
                  setIsExamRunning(false);
                }}
                className="inline-flex items-center gap-2 rounded-xl border border-[#ddd8eb] bg-white px-4 py-2.5 text-xs font-bold text-[#514487] hover:bg-[#faf9fd] sm:text-sm"
              >
                <RotateCcw className="h-4 w-4" /> Change Topics / New Exam
              </button>

              {totalScore < currentQuestions.length && (
                <button
                  onClick={retakeMissedQuestions}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#6d5cae] px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#514487] active:scale-95 sm:text-sm"
                >
                  <Sparkles className="h-4 w-4" /> Retake {currentQuestions.length - totalScore} Missed Question(s)
                </button>
              )}
            </div>
          </div>

          {/* Review Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#ddd8eb] bg-white p-3.5">
            <div className="flex items-center gap-2 text-xs font-bold text-[#514487]">
              <ListFilter className="h-4 w-4 text-[#6d5cae]" />
              Filter Detailed Review:
            </div>
            <div className="flex gap-1.5">
              <button
                onClick={() => setReviewFilter('all')}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold ${
                  reviewFilter === 'all'
                    ? 'bg-[#6d5cae] text-white'
                    : 'bg-[#f1effb] text-[#514487] hover:bg-[#e4dff7]'
                }`}
              >
                All ({currentQuestions.length})
              </button>
              <button
                onClick={() => setReviewFilter('wrong')}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold ${
                  reviewFilter === 'wrong'
                    ? 'bg-[#c94c4c] text-white'
                    : 'bg-[#fcecec] text-[#c94c4c] hover:bg-[#fad4d4]'
                }`}
              >
                Incorrect ({currentQuestions.length - totalScore})
              </button>
              <button
                onClick={() => setReviewFilter('bookmarked')}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold ${
                  reviewFilter === 'bookmarked'
                    ? 'bg-[#d97706] text-white'
                    : 'bg-[#fff8df] text-[#d97706] hover:bg-[#fae8b2]'
                }`}
              >
                Bookmarked ({bookmarkedIndices.size})
              </button>
            </div>
          </div>

          {/* Itemized Answer Review */}
          <div className="space-y-3">
            {currentQuestions.map((q, idx) => {
              const answerRec = userAnswers[idx];
              const isCorrect = answerRec?.isCorrect;

              if (reviewFilter === 'wrong' && isCorrect) return null;
              if (reviewFilter === 'bookmarked' && !bookmarkedIndices.has(idx)) return null;

              return (
                <div
                  key={idx}
                  className={`rounded-xl border p-4 sm:p-5 ${
                    isCorrect
                      ? 'border-l-4 border-l-[#2e8b57] border-[#ddd8eb] bg-white'
                      : 'border-l-4 border-l-[#c94c4c] border-[#ddd8eb] bg-[#faf9fd]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="text-xs font-bold text-[#696579]">
                      Question {idx + 1} &bull;{' '}
                      <span className="text-[#514487]">{CATEGORIES_MAP[q.cat] || q.cat}</span>
                    </div>
                    {isCorrect ? (
                      <span className="inline-flex items-center gap-1 rounded-md bg-[#eaf7ef] px-2 py-0.5 text-[11px] font-bold text-[#2e8b57]">
                        <Check className="h-3 w-3" /> Correct
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-md bg-[#fcecec] px-2 py-0.5 text-[11px] font-bold text-[#c94c4c]">
                        <XCircle className="h-3 w-3" /> Incorrect
                      </span>
                    )}
                  </div>

                  <p className="mt-2 font-bold text-[#29263a] text-sm sm:text-base">{q.q}</p>

                  <div className="mt-3 space-y-1 text-xs sm:text-sm">
                    {answerRec && !isCorrect && (
                      <div className="text-[#c94c4c]">
                        Your Answer: <strong>{String.fromCharCode(65 + answerRec.userChoice)}. {q.opts[answerRec.userChoice]}</strong>
                      </div>
                    )}
                    <div className="text-[#2e8b57]">
                      Correct Answer: <strong>{String.fromCharCode(65 + q.ans)}. {q.opts[q.ans]}</strong>
                    </div>
                  </div>

                  <div className="mt-2.5 rounded-lg bg-[#f1effb]/60 p-2.5 text-xs text-[#29263a]">
                    <strong>Explanation:</strong> {q.exp}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
