type AnalyticsParams = Record<string, string | number | boolean | null | undefined>;

type GtagFn = (command: 'event', eventName: string, params?: AnalyticsParams) => void;

function getGtag(): GtagFn | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const candidate = (window as unknown as { gtag?: GtagFn }).gtag;
  return typeof candidate === 'function' ? candidate : null;
}

export function trackEvent(eventName: string, params?: AnalyticsParams): void {
  const gtag = getGtag();
  if (!gtag) {
    return;
  }

  gtag('event', eventName, params);
}
