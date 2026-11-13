import { useState, type ReactNode } from 'react';
import { GraduationCap } from 'lucide-react';

export function CfpapecLogo({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M46 13.5C41.8 9.9 36.4 8 30.5 8C17.5 8 7 18.5 7 31.5C7 44.5 17.5 55 30.5 55C37.2 55 43.3 52.1 47.6 47.5"
        stroke="#0B2559"
        strokeWidth="6.5"
        strokeLinecap="round"
      />
      <path
        d="M44 15.5C39.8 11.8 34.5 10 29 10.5C18.5 11.5 11 20.5 11 31.5C11 42.5 19.5 51.2 30.5 51.2C36 51.2 41 49.1 44.8 45.7"
        stroke="#EAB308"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M21 37.5C24.5 34.5 28.5 34.5 32 37.5V26.5C28.5 23.5 24.5 23.5 21 26.5V37.5Z"
        fill="#0B2559"
        fillOpacity="0.12"
        stroke="#0B2559"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M43 37.5C39.5 34.5 35.5 34.5 32 37.5V26.5C35.5 23.5 39.5 23.5 43 26.5V37.5Z"
        fill="#EAB308"
        fillOpacity="0.22"
        stroke="#0B2559"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M32 22L36 16.5M32 22L28 16.5"
        stroke="#EAB308"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle: string;
  fallbackSubtitle?: string;
  icon?: ReactNode;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  fallbackSubtitle,
  icon,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0B2559] via-[#13357A] to-[#061638] p-6 text-center text-white ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#FACC15]">
          {icon ?? <GraduationCap className="h-6 w-6" />}
        </div>
        <p className="font-display text-base font-semibold tracking-tight">{fallbackTitle}</p>
        {fallbackSubtitle ? (
          <p className="mt-1 text-xs text-slate-300">{fallbackSubtitle}</p>
        ) : null}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
