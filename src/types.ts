export type TabType = 'lessons' | 'exam' | 'interview' | 'drafting' | 'calculator';

export type CategoryKey =
  | 'admin'
  | 'civil'
  | 'leave'
  | 'grammar'
  | 'verbal'
  | 'ethics'
  | 'proc'
  | 'computer'
  | 'drrm'
  | 'eo64'
  | 'situational'
  | 'deped'
  | 'drafting'
  | 'financial';

export interface CategoryInfo {
  key: CategoryKey;
  name: string;
  count: number;
  iconName: string;
  description: string;
}

export interface Question {
  id?: string;
  q: string;
  opts: string[];
  ans: number; // 0-indexed
  exp: string;
  cat: CategoryKey;
}

export interface UserAnswerRecord {
  userChoice: number;
  correctChoice: number;
  isCorrect: boolean;
}

export interface QuickFact {
  title: string;
  detail: string;
  tag?: string;
}

export interface GlossaryItem {
  term: string;
  definition: string;
  category?: string;
}

export interface LessonSection {
  id: string;
  title: string;
  categoryKey: CategoryKey;
  summary: string;
  contentHtml?: string;
  keyPoints: string[];
  importantLaws?: string[];
  formsMentioned?: string[];
  rulesOrFormulas?: string[];
}

export interface InterviewQuestion {
  id: number;
  question: string;
  category: string;
  suggestedAnswer: string;
  starTip?: string;
}

export interface DocumentTemplate {
  id: string;
  title: string;
  docType: string;
  description: string;
  rawText: string;
}
