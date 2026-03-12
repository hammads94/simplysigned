

const Privacy = () => {
  return (
    <div className="pp-page">
      <div className="pp-container">

        {/* Header */}
        <div className="pp-header">
          <h1 className="pp-main-title">Privacy Policy</h1>
          <p className="pp-last-updated">Last Updated: March 12, 2026</p>
        </div>

        {/* Intro */}
        <div className="pp-card">
          <p className="pp-intro">
            Welcome to <strong>SimplySigned</strong>. Your privacy and your child's privacy are very
            important to us. This Privacy Policy explains how we collect, use, and protect information
            when you use the SimplySigned mobile application and related services.
          </p>
          <p className="pp-intro">
            SimplySigned is designed to help children and beginners learn sign language through
            interactive lessons, stages, and visual animations.
          </p>
          <p className="pp-intro">
            By using the SimplySigned app, you agree to the practices described in this Privacy Policy.
          </p>
        </div>

        {/* Section 1 */}
        <section className="pp-section">
          <h2 className="pp-section-title">1. Information We Collect</h2>
          <p className="pp-text">
            To provide access to the learning platform, SimplySigned requires users to create an account.
            We collect only the information necessary to operate the service.
          </p>

          <div className="pp-card">
            <h3 className="pp-sub-title">Account Information</h3>
            <p className="pp-text">When creating an account, we may collect:</p>
            <ul className="pp-list">
              <li>Name or username</li>
              <li>Email address</li>
              <li>Login credentials (securely stored)</li>
            </ul>
            <p className="pp-text">This information is used to create and manage your account.</p>
          </div>

          <div className="pp-card">
            <h3 className="pp-sub-title">Learning Progress Data</h3>
            <p className="pp-text">To track progress within the app, we may store:</p>
            <ul className="pp-list">
              <li>Completed stages</li>
              <li>Learning progress</li>
              <li>Quiz results</li>
              <li>User preferences</li>
            </ul>
            <p className="pp-text">
              This allows users to continue their learning progress across devices and helps provide a
              personalized learning experience.
            </p>
          </div>

          <div className="pp-card">
            <h3 className="pp-sub-title">Server Requests</h3>
            <p className="pp-text">
              When the app loads lessons and content, our servers may receive basic technical information such as:
            </p>
            <ul className="pp-list">
              <li>Device type</li>
              <li>App version</li>
              <li>Basic usage logs</li>
            </ul>
            <p className="pp-text">
              This information is used to maintain the service, improve reliability, and ensure the app functions correctly.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="pp-section">
          <h2 className="pp-section-title">2. Children's Privacy</h2>
          <div className="pp-card pp-card--highlight">
            <p className="pp-text">
              SimplySigned is designed for children and families learning sign language. We take children's
              privacy seriously and limit the collection of personal information to only what is necessary
              for account access and learning progress.
            </p>
            <p className="pp-text">
              We encourage parents and guardians to supervise children's use of the app and assist them
              when creating accounts.
            </p>
            <p className="pp-text">
              The app is intended for educational use by children under the supervision of parents,
              guardians, or educators.
            </p>
            <p className="pp-text">
              If you believe that a child has provided personal information without parental consent,
              please contact us and we will promptly review and remove the information where appropriate.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="pp-section">
          <h2 className="pp-section-title">3. How We Use Information</h2>
          <div className="pp-card">
            <p className="pp-text">We use the collected information to:</p>
            <ul className="pp-list">
              <li>Create and manage user accounts</li>
              <li>Deliver lessons, stages, and animations</li>
              <li>Save and synchronize learning progress</li>
              <li>Improve the performance and reliability of the app</li>
              <li>Provide customer support</li>
            </ul>
            <p className="pp-text pp-text--strong">
              We do not sell or rent personal information to third parties.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="pp-section">
          <h2 className="pp-section-title">4. Data Storage and Security</h2>
          <div className="pp-card">
            <p className="pp-text">
              User data is stored securely on our servers. We implement reasonable technical and
              organizational measures designed to protect your information against unauthorized access,
              loss, or misuse.
            </p>
            <p className="pp-text">
              However, no method of electronic storage or internet transmission is completely secure.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="pp-section">
          <h2 className="pp-section-title">5. Data Retention</h2>
          <div className="pp-card">
            <p className="pp-text">
              We retain user information only for as long as necessary to provide the service and
              maintain user accounts.
            </p>
            <p className="pp-text">
              Users may request account deletion at any time. When an account is deleted, associated
              personal information will be removed from our systems within a reasonable timeframe.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="pp-section">
          <h2 className="pp-section-title">6. User Rights</h2>
          <div className="pp-card">
            <p className="pp-text">Users may request to:</p>
            <ul className="pp-list">
              <li>Access their personal information</li>
              <li>Update their account information</li>
              <li>Delete their account and associated data</li>
            </ul>
            <p className="pp-text">
              Requests can be made by contacting us using the details below.
            </p>
          </div>
        </section>

        {/* Section 7 */}
        <section className="pp-section">
          <h2 className="pp-section-title">7. Changes to This Privacy Policy</h2>
          <div className="pp-card">
            <p className="pp-text">
              We may update this Privacy Policy from time to time to reflect improvements to our services,
              operational changes, or legal requirements.
            </p>
            <p className="pp-text">
              When updates are made, the revised version will be posted with an updated "Last Updated" date.
            </p>
          </div>
        </section>

        {/* Section 8 */}
        <section className="pp-section">
          <h2 className="pp-section-title">8. Contact Us</h2>
          <div className="pp-card pp-card--contact">
            <p className="pp-text">
              If you have any questions or concerns regarding this Privacy Policy, you may contact us at:
            </p>
            <div className="pp-contact-info">
              <p className="pp-contact-row">
                <span className="pp-contact-label">Email:</span>
                <a href="mailto:support@simplysigned.com" className="pp-link">
                  support@simplysigned.com
                </a>
              </p>
              <p className="pp-contact-row">
                <span className="pp-contact-label">Website:</span>
                <a href="https://simplysigned.vercel.app/" className="pp-link" target="_blank" rel="noreferrer">
                  https://simplysigned.vercel.app/
                </a>
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Privacy;