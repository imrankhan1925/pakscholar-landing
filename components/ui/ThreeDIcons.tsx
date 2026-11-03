import React from "react";

export const ThreeDGraduationCap: React.FC<{ className?: string }> = ({
  className = "w-20 h-20",
}) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl"
      >
        <defs>
          {/* Cap Cap Top Gradient */}
          <linearGradient id="capTopGrad" x1="20" y1="50" x2="180" y2="130" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E3E5E" />
            <stop offset="0.5" stopColor="#102A43" />
            <stop offset="1" stopColor="#0B1D2F" />
          </linearGradient>

          {/* Emerald accent */}
          <linearGradient id="emeraldGrad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#25c88c" />
            <stop offset="1" stopColor="#16865D" />
          </linearGradient>

          {/* Gold Tassel */}
          <linearGradient id="goldGrad" x1="100" y1="80" x2="170" y2="170" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDE047" />
            <stop offset="0.6" stopColor="#EAB308" />
            <stop offset="1" stopColor="#CA8A04" />
          </linearGradient>

          {/* Shadow filter */}
          <filter id="capShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#0A1827" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* Ambient Glow */}
        <circle cx="100" cy="110" r="70" fill="url(#emeraldGrad)" opacity="0.18" filter="blur(16px)" />

        {/* Cap Skull Underlayer (3D depth) */}
        <path
          d="M60 105C60 135 140 135 140 105V115C140 145 60 145 60 115V105Z"
          fill="#0B1D2F"
        />
        <path
          d="M65 110C65 136 135 136 135 110V118C135 144 65 144 65 118V110Z"
          fill="url(#emeraldGrad)"
          opacity="0.9"
        />

        {/* Cap Diamond Top (3D isometric tilt) */}
        <g filter="url(#capShadow)">
          <path
            d="M100 45L180 85L100 125L20 85L100 45Z"
            fill="url(#capTopGrad)"
          />
          {/* Top highlight facet */}
          <path
            d="M100 45L180 85L100 95L20 85L100 45Z"
            fill="#2B5278"
            opacity="0.35"
          />
        </g>

        {/* Center Button */}
        <ellipse cx="100" cy="85" rx="8" ry="5" fill="url(#goldGrad)" />
        <ellipse cx="100" cy="84" rx="5" ry="3" fill="#FEF08A" />

        {/* Golden Tassel String & Ribbon */}
        <path
          d="M100 85C125 90 145 105 150 125C152 135 150 155 148 165"
          stroke="url(#goldGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Tassel Fringe (3D pendant) */}
        <path
          d="M142 165H154L156 182L149 186L140 182L142 165Z"
          fill="url(#goldGrad)"
        />
        <circle cx="148" cy="166" r="4" fill="#CA8A04" />
      </svg>
    </div>
  );
};

export const ThreeDDiploma: React.FC<{ className?: string }> = ({
  className = "w-20 h-20",
}) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl"
      >
        <defs>
          <linearGradient id="diplomaPaper" x1="40" y1="30" x2="160" y2="170" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#F1F5F9" />
          </linearGradient>
          <linearGradient id="ribbonEmerald" x1="70" y1="70" x2="130" y2="130" gradientUnits="userSpaceOnUse">
            <stop stopColor="#25c88c" />
            <stop offset="1" stopColor="#116545" />
          </linearGradient>
          <linearGradient id="sealGold" x1="120" y1="120" x2="160" y2="160" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDE047" />
            <stop offset="1" stopColor="#B45309" />
          </linearGradient>
        </defs>

        {/* Shadow */}
        <rect x="45" y="45" width="110" height="130" rx="16" fill="#0A1827" opacity="0.15" transform="rotate(-6 100 110)" />

        {/* Main Document Body */}
        <rect
          x="45"
          y="35"
          width="110"
          height="135"
          rx="14"
          fill="url(#diplomaPaper)"
          stroke="#E2E8F0"
          strokeWidth="2"
          transform="rotate(-5 100 102)"
        />

        {/* Inner Border */}
        <rect
          x="53"
          y="43"
          width="94"
          height="119"
          rx="10"
          fill="none"
          stroke="#16865D"
          strokeWidth="1.5"
          strokeDasharray="4 2"
          opacity="0.4"
          transform="rotate(-5 100 102)"
        />

        {/* Text lines */}
        <g opacity="0.5" transform="rotate(-5 100 102)">
          <rect x="65" y="60" width="70" height="5" rx="2.5" fill="#102A43" />
          <rect x="72" y="72" width="56" height="3" rx="1.5" fill="#16865D" />
          <rect x="62" y="85" width="76" height="3" rx="1.5" fill="#94A3B8" />
          <rect x="62" y="93" width="76" height="3" rx="1.5" fill="#94A3B8" />
          <rect x="62" y="101" width="50" height="3" rx="1.5" fill="#94A3B8" />
        </g>

        {/* Golden Wax Seal with Ribbon */}
        <path d="M125 135L115 165L128 158L138 168L132 138Z" fill="url(#ribbonEmerald)" />
        <circle cx="128" cy="132" r="16" fill="url(#sealGold)" stroke="#FEF08A" strokeWidth="2" />
        <polygon points="128,122 131,129 138,130 133,135 135,142 128,138 122,142 123,135 119,130 125,129" fill="#FFFBEB" />
      </svg>
    </div>
  );
};

export const ThreeDMedal: React.FC<{ className?: string }> = ({
  className = "w-20 h-20",
}) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl"
      >
        <defs>
          <linearGradient id="ribbonLeft" x1="60" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#16865D" />
            <stop offset="1" stopColor="#0B402B" />
          </linearGradient>
          <linearGradient id="ribbonRight" x1="140" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#25c88c" />
            <stop offset="1" stopColor="#116545" />
          </linearGradient>
          <linearGradient id="medalFace" x1="70" y1="80" x2="130" y2="160" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDE047" />
            <stop offset="0.4" stopColor="#EAB308" />
            <stop offset="1" stopColor="#A16207" />
          </linearGradient>
        </defs>

        {/* Ribbon Left */}
        <polygon points="65,25 98,95 80,95 45,25" fill="url(#ribbonLeft)" />
        {/* Ribbon Right */}
        <polygon points="135,25 102,95 120,95 155,25" fill="url(#ribbonRight)" />

        {/* Medal Rim 3D Shadow */}
        <circle cx="100" cy="125" r="44" fill="#78350F" />
        {/* Outer Ring */}
        <circle cx="100" cy="123" r="42" fill="url(#medalFace)" stroke="#FEF08A" strokeWidth="2.5" />
        {/* Inner Ring */}
        <circle cx="100" cy="123" r="32" fill="#CA8A04" stroke="#FDE047" strokeWidth="1.5" />
        {/* Star */}
        <polygon
          points="100,105 105,118 119,119 108,128 112,141 100,134 88,141 92,128 81,119 95,118"
          fill="#FFFBEB"
        />
      </svg>
    </div>
  );
};

export const ThreeDPortalBadge: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div
      className={`relative rounded-3xl bg-white/95 backdrop-blur-md p-5 border border-slate-200/90 shadow-2xl card-3d-shadow transform-style-3d ${className}`}
    >
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#102A43] flex items-center justify-center text-white font-bold text-xs shadow-xs">
            PS
          </div>
          <div>
            <p className="text-xs font-bold text-[#102A43] leading-none">PakScholar Portal</p>
            <p className="text-[10px] text-[#16865D] font-semibold mt-0.5">Verified Student SIS</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#effbf4] text-[#16865D] text-[10px] font-bold border border-[#16865D]/30">
          <span className="w-1.5 h-1.5 rounded-full bg-[#16865D] animate-ping" />
          Active Portal
        </span>
      </div>

      <div className="mt-3.5 space-y-2.5">
        <div className="p-3 rounded-2xl bg-gradient-to-r from-[#effbf4] to-[#f0f5fa] border border-[#16865D]/15">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-[#102A43]">Merit Scholarship #2026</span>
            <span className="text-[11px] font-bold text-[#16865D] bg-white px-2 py-0.5 rounded-md shadow-2xs">
              100% Tuition
            </span>
          </div>
          <div className="mt-2.5 w-full bg-slate-200 h-2 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-[#16865D] to-[#25c88c] h-full w-[85%] rounded-full animate-pulse-soft" />
          </div>
          <div className="mt-1.5 flex justify-between text-[10px] text-slate-500">
            <span>Eligibility Verified</span>
            <span className="font-bold text-[#102A43]">Phase 2: Exam Ready</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] pt-1">
          <span className="text-slate-500">Target: HEC Accredited</span>
          <span className="font-bold text-[#16865D]">Direct SIS Integration</span>
        </div>
      </div>
    </div>
  );
};
