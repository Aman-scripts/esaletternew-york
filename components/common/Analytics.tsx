"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

/**
 * Dispatch a custom event to Microsoft Clarity and standard DOM custom event
 */
export function trackCustomEvent(eventName: string, metadata?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;

  // 1. Send to Microsoft Clarity
  if (typeof window.clarity === "function") {
    window.clarity("event", eventName);
  }

  // 2. Dispatch custom DOM event for Google Analytics / GTM / custom listeners
  try {
    const event = new CustomEvent("custom:analytics", {
      detail: { event: eventName, ...metadata, timestamp: new Date().toISOString() },
    });
    window.dispatchEvent(event);
  } catch {
    // Fail silently in environments where CustomEvent might be restricted
  }
}

export function Analytics() {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  useEffect(() => {
    // Global delegated click listener for any element with data-event attribute
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("[data-event]");
      if (target) {
        const eventName = target.getAttribute("data-event");
        const eventLabel = target.getAttribute("data-event-label") || target.textContent?.trim() || "";
        if (eventName) {
          trackCustomEvent(eventName, { label: eventLabel });
        }
      }
    };

    document.addEventListener("click", handleClick, { passive: true });
    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (!clarityId) {
    return null;
  }

  return (
    <Script
      id="microsoft-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${clarityId}");
        `,
      }}
    />
  );
}
