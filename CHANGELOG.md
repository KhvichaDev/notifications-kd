# Changelog

## v1.2.1 (17/03/2026) - Package Metadata & Supply Chain Improvements

- Added author email and website to package metadata.
- Changed homepage to point to the live demo page.
- Added README.md and CHANGELOG.md to NPM package.

## v1.2.0 (04/03/2026) - Major Optimization & Accessibility Update

### Architecture & Performance

- Reflow Optimization: The legacy DOM hack (void overlay.offsetWidth) used to trigger animations was replaced with a modern, smooth requestAnimationFrame cycle.
- Race Condition Prevention: Added an isClosing lock, eliminating duplicate dismiss function calls and unnecessary DOM manipulations.
- Smart CSS Time Parsing: The --kd-toast-anim-duration variable is now accurately parsed for both seconds (s) and milliseconds (ms) using parseFloat.
- Offset Validation: Added a strict RegEx validator for offsetX and offsetY parameters to protect the layout from invalid CSS units.

### Security & Accessibility (a11y)

- Enhanced XSS Protection: The sanitizer now blocks <math> and <svg> tags. It also filters out control characters (Null byte, Tab) using a strict regular expression to prevent javascript: and vbscript: injections.
- Safe Data URIs: Blocked dangerous data: links, but explicitly allowed safe data:image/* formats.
- Comprehensive Focus Trap: During keyboard navigation, focus is now trapped not only on buttons but on any focusable element within the notification (e.g., links, inputs).
- Focus Restoration: Upon closing the notification, keyboard focus automatically returns to the element that triggered it (WCAG standard). A safeguard was also added to prevent TypeErrors in rare edge cases.
- Esc Key Fix: The keyboard event listener is now attached globally, ensuring buttonless modals can be closed with the Esc key.
- Prefers-Reduced-Motion: Added support for the OS-level reduced motion standard, though the loader spinner animation was retained to comply with accessibility (UX) standards.

### UI/UX & Mobile Compatibility

- Non-blocking Interaction (Critical Bug Fix): Displaying a standard Toast notification no longer blocks interactions on the underlying webpage. Click blocking now only applies in isModal: true mode.
- Glassmorphism Modal: Added a modern backdrop-filter: blur(4px) to the Modal mode's background and adjusted its opacity.
- Smart Auto-Theming: The color detection algorithm now reads modern CSS space-separated syntax. Added a fallback to check the <html> tag's background when <body> is transparent.
- Mobile Safe Area: Implemented env(safe-area-inset-*) variables to ensure notifications aren't hidden behind system notches or the Home Indicator on mobile devices.
- Long Text Control: Added word-break: break-word and min-width: 0 to prevent long, continuous links from breaking the Flex container.
- HTML Support in Buttons: Allowed safe HTML usage within button texts, enabling the addition of icons inside buttons.
- Zombie Modal Fix: Fixed a bug where passing an empty buttons: [] array prevented the modal from disappearing.
- SVG Standards: Added the required xmlns attribute to all default SVG icons for safe rendering in strict XML environments.
- Mobile Layout Optimization: Removed the unnecessary min-height: 160px constraint on mobile screens in Landscape mode, and added flex-wrap: wrap to the buttons container.
- Processing Styling: Restored missing colors and styles for processing type notifications when used in the Rich (title) format.

## v1.1.0 (01/03/2026) - Responsive & Mobile Support

- Full responsive & mobile-friendly layout (≤600px breakpoint).
- Toast automatically adapts width, padding, and font sizes for smaller screens.
- Corner positions (top-left, top-right, bottom-left, bottom-right) center horizontally on mobile for optimal readability.
- Action buttons stack vertically with full-width touch targets on mobile.
- Rich toast icons and custom icons scale up slightly for better mobile tap accessibility.
- New CSS custom properties for mobile layout control:
  --kd-mobile-offset-x — horizontal edge spacing on mobile (default: 12px)
  --kd-mobile-offset-y — vertical edge spacing on mobile (default: 16px)
  --kd-mobile-max-width — maximum toast width on mobile (default: 420px)
- Updated package description and documentation to reflect mobile support.

## v1.0.0 (27/02/2026) - Initial Release

- First published version of KD Notifications.
