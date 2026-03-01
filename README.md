# KD Notifications (notifications-kd)

A highly optimized, ultra-lightweight toast notification system with a modern, elegant UI, fully responsive mobile support, and zero dependencies.

[![Live Demo](https://img.shields.io/badge/Live_Demo-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)](https://KhvichaDev.github.io/notifications-kd/) [![Changelog](https://img.shields.io/badge/Changelog-34A853?style=for-the-badge&logo=keepachangelog&logoColor=white)](https://github.com/KhvichaDev/notifications-kd/releases) [![Support](https://img.shields.io/badge/Support-EA4335?style=for-the-badge&logo=github&logoColor=white)](https://github.com/KhvichaDev/notifications-kd/issues)

## Installation

**Via NPM (Bundlers):**

```bash
npm install notifications-kd
```

**Via CDN (Direct Browser Usage):**

```html
<script src="https://cdn.jsdelivr.net/npm/notifications-kd"></script>

<script src="https://unpkg.com/notifications-kd"></script>
```

## Features

- ✨ **Elegant & Modern UI**: Beautifully crafted default themes that instantly upgrade your application's look and feel.
- 🚀 **Zero Dependencies**: Pure Vanilla JS. No jQuery, no external CSS.
- 🛡️ **Secure**: Built-in DOM-based XSS protection (strict whitelisting & sanitization).
- 🎨 **Auto-Theming**: Automatically detects host environment (Light/Dark mode) and adapts seamlessly.
- 📍 **Smart Positioning**: Place toasts anywhere (center, top-left, bottom-right, etc.) with custom offsets.
- ♿ **Accessible**: Full keyboard navigation (Tab-trapping) for modal states.
- 📱 **Responsive & Mobile-Ready**: Fully adaptive layout that works flawlessly on phones, tablets, and desktops.
- ⚡ **High Performance**: Optimized DOM manipulation, `O(1)` lookups, and strict memory management.

## Usage

Include the library in your project:

```javascript
import KDNotification from "notifications-kd";
```

_(Or simply load the `notifications-kd.js` file via a `<script>` tag in browser environments)._

### Basic Info Toast

```javascript
KDNotification.show({
  type: "info",
  message: "Operation completed successfully.",
  position: "top-right",
});
```

### Rich Toast with Title & Auto-dismiss

```javascript
KDNotification.show({
  type: "success",
  title: "Profile Updated",
  message: "Your changes have been saved.",
  duration: 4000,
  position: "bottom-left",
});
```

### Interactive Modal (Promises)

```javascript
KDNotification.show({
  type: "warning",
  title: "Delete File?",
  message: "Are you sure you want to permanently delete this file?",
  isModal: true, // Blocks background clicks and escapes
  position: "center",
  buttons: [
    { text: "Yes, Delete", className: "kd-btn-danger", value: "deleted" },
    { text: "Cancel", value: "cancelled" },
  ],
}).then((res) => {
  if (res === "deleted") {
    console.log("File deleted!");
  }
});
```

## API Options

| Parameter   | Type          | Default    | Description                                                                |
| ----------- | ------------- | ---------- | -------------------------------------------------------------------------- |
| `type`      | String        | `'info'`   | `'info'`, `'success'`, `'error'`, `'warning'`, `'processing'`              |
| `title`     | String        | `''`       | Optional title for a rich UI layout                                        |
| `message`   | String        | `''`       | The main content of the notification (Safe HTML supported)                 |
| `duration`  | Number        | `3000`     | Auto-dismiss time in ms (`0` disables auto-dismiss)                        |
| `position`  | String        | `'center'` | `'center'`, `'top-left'`, `'top-right'`, `'bottom-left'`, `'bottom-right'` |
| `theme`     | String        | `'auto'`   | `'auto'` (detects background), `'light'`, or `'dark'`                      |
| `isModal`   | Boolean       | `false`    | If true, forces user interaction (disables outside click/Esc)              |
| `buttons`   | Array         | `null`     | Array of button objects `{ text, value, className, onClick }`              |
| `icon`      | String        | `null`     | Custom SVG string to override the default icon                             |
| `style`     | Object        | `{}`       | Custom inline CSS properties or CSS variables                              |
| `offsetX/Y` | String/Number | `'50px'`   | Custom distance from screen edges for corner positions                     |

## Methods

- **`KDNotification.show(options)`**: Displays the notification and returns a `Promise`. Resolves with the clicked button's `value`, or `null`/`true` on auto-dismiss or overlay click.
- **`KDNotification.close()`**: Programmatically dismisses the currently active notification. Ideal for hiding `processing` toasts after a background task (like an API call) finishes.

## Customization & CSS

You can globally override default styles via the `:root` pseudo-class, or locally per toast using the `style` option API:

- `--kd-toast-anim-duration`: Controls the enter/leave animation speed (Default: `250ms`).
- `--kd-z-toast`: Controls the z-index of the toast overlay (Default: `2147483647`).
- `--kd-mobile-offset-x`: Controls the horizontal distance from screen edges on mobile devices (Default: `12px`).
- `--kd-mobile-offset-y`: Controls the vertical distance from screen edges on mobile devices (Default: `16px`).
- `--kd-mobile-max-width`: Controls the maximum width of the toast on mobile devices (Default: `420px`).

> 💡 **Best Practice:** It is strongly recommended to use the `style` API or CSS variables for customization. Please avoid targeting internal CSS classes directly in your stylesheet, as the internal HTML structure may evolve in future minor updates and could break your custom overrides.

## Contact & Support

If you have any questions, bug reports, or feature requests, please [open an issue](https://github.com/KhvichaDev/notifications-kd/issues) on the GitHub repository.

## License

MIT License © KhvichaDev
