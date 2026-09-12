import React from 'react';
import { ShieldCheck, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 border-t border-[#ddd8eb] py-8 text-center text-xs text-[#696579]">
      <div className="mx-auto max-w-3xl space-y-3 px-4">
        <div className="flex items-center justify-center gap-1.5 font-bold text-[#514487]">
          <ShieldCheck className="h-4 w-4 text-[#6d5cae]" />
          Administrative Officer II (AO II) Written Exam Reviewer &bull; Version 2.0
        </div>

        <p className="leading-relaxed">
          This reviewer is an independent educational study aid designed for examinees preparing for the Administrative Officer II position in the Department of Education and Civil Service examinations. Not an official CSC or DepEd publication.
        </p>

        <p className="text-[11px] text-[#868297]">
          Always cross-verify with official issuances from the <strong>Civil Service Commission (CSC)</strong>, <strong>Department of Education (DepEd)</strong>, <strong>Government Procurement Policy Board (GPPB)</strong>, <strong>Department of Budget and Management (DBM)</strong>, and <strong>Commission on Audit (COA)</strong>.
        </p>

        <div className="pt-2 text-[11px] text-[#a4a0b3]">
          &copy; {new Date().getFullYear()} Administrative Officer II Reviewer &bull; All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
