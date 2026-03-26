/**
 * Reads the version from package.json, runs Terser to minify the source,
 * then prepends a license banner that always stays in sync with the current version.
 */
const { execSync } = require('child_process');
const fs = require('fs');

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const banner = `/*! Notifications-KD v${pkg.version} | (c) 2026 KhvichaDev | MIT License */\n`;

execSync('npx terser notifications-kd.js -o notifications-kd.min.js -c -m', { stdio: 'inherit' });

/** Terser preserves string contents verbatim, so the CSS template literal
 * retains its original indentation. This collapses those '\n' + spaces
 * sequences into a single space, cutting file size without affecting CSS validity.
 */
let minified = fs.readFileSync('./notifications-kd.min.js', 'utf8');
minified = minified.replace(/\\n\s+/g, ' ');
fs.writeFileSync('./notifications-kd.min.js', banner + minified);

// ---------------------------------------------------------------------------------
// Automatically update version numbers in index.html to match the new package.json
// This ensures GitHub Actions release workflow always pushes correct HTML version
// ---------------------------------------------------------------------------------
const htmlPath = './index.html';
if (fs.existsSync(htmlPath)) {
    let htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    // Update Schema JSON-LD version -> "softwareVersion": "1.2.1"
    htmlContent = htmlContent.replace(
        /"softwareVersion":\s*"[^"]+"/, 
        `"softwareVersion": "${pkg.version}"`
    );
    
    // Update unpkg CDN load link in footer -> src="https://unpkg.com/notifications-kd@1.2.1"
    htmlContent = htmlContent.replace(
        /unpkg\.com\/notifications-kd@[0-9]+\.[0-9]+\.[0-9]+(-[a-z0-9.]+)?/g, 
        `unpkg.com/notifications-kd@${pkg.version}`
    );
    
    fs.writeFileSync(htmlPath, htmlContent);
}

console.log(`\n✓ Build & Version sync complete — v${pkg.version}`);
