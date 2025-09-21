import { useEffect } from 'react';

const ClickFraudProtection = () => {
  useEffect(() => {
    // Bot detection patterns
    const detectBot = () => {
      const botPatterns = [
        /bot/i,
        /crawler/i,
        /spider/i,
        /scraper/i,
        /headless/i,
        /phantom/i,
        /puppeteer/i,
        /selenium/i
      ];

      const userAgent = navigator.userAgent;
      const isBot = botPatterns.some(pattern => pattern.test(userAgent));

      // Additional bot detection checks
      const suspiciousSignals = {
        // Check for headless browsers
        isHeadless: navigator.webdriver === true,
        // Check for missing plugins (bots often have none)
        noPlugins: navigator.plugins && navigator.plugins.length === 0,
        // Check for unusual screen dimensions
        oddScreen: window.outerWidth === 0 || window.outerHeight === 0,
        // Check for missing languages
        noLanguages: !navigator.languages || navigator.languages.length === 0,
        // Check for automation tools
        hasAutomation: window.document.documentElement.getAttribute('webdriver') !== null,
        // Check for missing touch support on mobile UA
        fakeMobile: /mobile/i.test(userAgent) && !('ontouchstart' in window)
      };

      const suspiciousCount = Object.values(suspiciousSignals).filter(v => v === true).length;

      return isBot || suspiciousCount >= 2;
    };

    // Click tracking for fraud detection
    const trackClick = (event) => {
      // Only track clicks on external links and ads
      const target = event.target.closest('a');
      if (!target || !target.href) return;

      // Check if it's an external link or ad
      const isExternal = !target.href.includes(window.location.hostname);
      const isAd = target.classList.contains('sponsored') ||
                   target.dataset.ad === 'true' ||
                   target.href.includes('utm_source') ||
                   target.href.includes('affiliate');

      if (isExternal || isAd) {
        const clickData = {
          timestamp: Date.now(),
          url: target.href,
          isBot: detectBot(),
          userAgent: navigator.userAgent,
          screenResolution: `${window.screen.width}x${window.screen.height}`,
          mousePosition: { x: event.clientX, y: event.clientY },
          clickType: event.isTrusted ? 'trusted' : 'untrusted'
        };

        // Block suspicious clicks
        if (clickData.isBot || !event.isTrusted) {
          event.preventDefault();
          console.warn('Suspicious click blocked:', clickData);

          // Send to analytics for monitoring
          if (window.gtag) {
            window.gtag('event', 'click_fraud_blocked', {
              event_category: 'security',
              event_label: target.href,
              value: 1
            });
          }
          return false;
        }

        // Log legitimate clicks
        if (window.gtag) {
          window.gtag('event', 'legitimate_click', {
            event_category: 'engagement',
            event_label: target.href
          });
        }
      }
    };

    // Rate limiting for rapid clicks
    let clickTimestamps = [];
    const checkRateLimit = (event) => {
      const now = Date.now();
      clickTimestamps = clickTimestamps.filter(t => now - t < 1000); // Keep last second

      if (clickTimestamps.length >= 5) { // More than 5 clicks per second
        event.preventDefault();
        console.warn('Rate limit exceeded - possible click fraud');
        return false;
      }

      clickTimestamps.push(now);
      return true;
    };

    // Combined click handler
    const handleClick = (event) => {
      if (!checkRateLimit(event)) return;
      trackClick(event);
    };

    // Mouse movement tracking for bot detection
    let mouseMovements = 0;
    const handleMouseMove = () => {
      mouseMovements++;
    };

    // Check for human-like behavior after page load
    setTimeout(() => {
      if (mouseMovements === 0 && !('ontouchstart' in window)) {
        console.warn('No mouse movement detected - possible bot');
        if (window.gtag) {
          window.gtag('event', 'bot_suspected', {
            event_category: 'security',
            event_label: 'no_mouse_movement'
          });
        }
      }
    }, 10000); // Check after 10 seconds

    // Add event listeners
    document.addEventListener('click', handleClick, true);
    document.addEventListener('mousemove', handleMouseMove, { once: true });

    // Tag bot traffic in Google Analytics
    if (detectBot() && window.gtag) {
      window.gtag('set', { 'custom_map.dimension1': 'bot_traffic' });
      window.gtag('event', 'page_view', {
        'bot_traffic': 'true'
      });
    }

    // Cleanup
    return () => {
      document.removeEventListener('click', handleClick, true);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ClickFraudProtection;