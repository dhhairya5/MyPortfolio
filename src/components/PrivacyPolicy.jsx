import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-white text-gray-800 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-indigo-600">Privacy Policy</h1>
          <p className="mt-2 text-gray-600">How I collect and use information on this portfolio site.</p>
        </header>

        <section className="prose prose-lg">
          <p>Last updated: <strong>August 2025</strong></p>

          <h2>Information I collect</h2>
          <p>I only collect the data you voluntarily provide via the contact form (name, email, message).</p>

          <h2>How I use data</h2>
          <p>Data is used to reply to messages and to evaluate inquiries. I don’t sell or share your personal data.</p>

          <h2>Third-party services</h2>
          <p>I use EmailJS to deliver contact messages. Please review their policies if you have concerns.</p>

          <h2>Retention</h2>
          <p>I retain messages for as long as necessary to respond and for record-keeping.</p>

          <h2>Your rights</h2>
          <p>You can request deletion of your data by emailing me at <a href="mailto:dhhairyashukla5@gmail.com">dhhairyashukla5@gmail.com</a>.</p>

          <hr />
          <p className="mt-6">
            <Link to="/" className="text-indigo-600 hover:underline">← Back to home</Link>
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;