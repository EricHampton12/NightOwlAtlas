export default function PrivacyPolicy() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--midnight)',
      color: 'var(--owl-white)',
      padding: '3rem 1.5rem',
    }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
            <span style={{ fontSize: '2rem' }}>🦉</span>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.2rem',
              fontWeight: 800,
              color: 'var(--amber)',
            }}>NightOwlAtlas</span>
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Sections */}
        {[
          {
            title: '1. Overview',
            content: `NightOwlAtlas ("we", "our", or "the app") is a free academic planning tool designed to help Western Governors University (WGU) students track their degree progress and discover community resources. We are committed to being transparent about how the app works and what data, if any, is collected.`,
          },
          {
            title: '2. Data We Collect',
            content: `NightOwlAtlas does not collect, transmit, or store any personal data on external servers. All information you enter — including your name, degree program, term start date, and course progress — is stored locally on your device using your browser's localStorage. This data never leaves your device and is not accessible to us or any third party.`,
          },
          {
            title: '3. Data You Enter',
            content: `When you use NightOwlAtlas, you may voluntarily enter the following information:\n\n• Your first name (used for personalization only)\n• Your WGU degree program\n• Your term start date\n• Your course progress (not started, in progress, complete)\n\nThis information is stored only in your browser's localStorage and is automatically deleted if you clear your browser data. We strongly recommend you do not enter sensitive personal information such as your WGU student ID, password, or financial details.`,
          },
          {
            title: '4. Reddit Content',
            content: `NightOwlAtlas displays publicly available posts from the r/WGU subreddit via Reddit's public API (no authentication required). We do not store, modify, or claim ownership of any Reddit content. All Reddit content displayed in the app is the property of its respective authors and subject to Reddit's own Terms of Service and Privacy Policy. We are not affiliated with Reddit, Inc.`,
          },
          {
            title: '5. Third-Party Services',
            content: `NightOwlAtlas uses the following third-party services:\n\n• Reddit Public API — to fetch community posts from r/WGU. No personal data is sent to Reddit by our app.\n• Netlify — to host and serve the application. Netlify may collect standard server logs including IP addresses as part of their infrastructure. Please refer to Netlify's Privacy Policy for more information.\n\nWe do not use any analytics, tracking pixels, advertising networks, or cookies.`,
          },
          {
            title: '6. Cookies',
            content: `NightOwlAtlas does not use cookies. The app uses localStorage, which is a browser-based storage mechanism that is not transmitted to any server and is separate from cookies.`,
          },
          {
            title: '7. Children\'s Privacy',
            content: `NightOwlAtlas is intended for use by adults enrolled in or considering WGU degree programs. We do not knowingly collect any information from children under the age of 13. If you believe a child has entered personal information into the app, you may clear it by clearing your browser's localStorage or site data.`,
          },
          {
            title: '8. Data Security',
            content: `Since all data is stored locally on your device and never transmitted to our servers, the security of your data depends on the security of your own device and browser. We recommend keeping your browser and operating system up to date.`,
          },
          {
            title: '9. Your Rights',
            content: `Since we do not collect or store your data on any server, there is no account to delete or data to request from us. You can delete all locally stored data at any time by clearing your browser's site data for nightowlatlas.com in your browser settings.`,
          },
          {
            title: '10. Changes to This Policy',
            content: `We may update this Privacy Policy as the app evolves — particularly if we introduce user accounts, a database, or additional third-party services in the future. Any significant changes will be noted with an updated "Last updated" date at the top of this page.`,
          },
          {
            title: '11. Contact',
            content: `If you have any questions or concerns about this Privacy Policy or how NightOwlAtlas works, you can reach us at:\n\nnightowlatlas.com\n\nThis app is an independent project and is not affiliated with or endorsed by Western Governors University.`,
          },
        ].map(({ title, content }) => (
          <div key={title} style={{ marginBottom: '2rem' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.1rem',
              fontWeight: 700,
              color: 'var(--amber)',
              marginBottom: '0.75rem',
            }}>
              {title}
            </h2>
            <p style={{
              color: 'var(--muted-light)',
              fontSize: '0.9rem',
              lineHeight: '1.8',
              whiteSpace: 'pre-line',
            }}>
              {content}
            </p>
          </div>
        ))}

        {/* Footer */}
        <div style={{
          marginTop: '3rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--navy-border)',
          textAlign: 'center',
          color: 'var(--muted)',
          fontSize: '0.8rem',
        }}>
          © {new Date().getFullYear()} NightOwlAtlas. Built for WGU students, by a WGU student.
        </div>

      </div>
    </div>
  );
}