import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-amber-600">Terms of Service</h1>
          <p className="mt-2 text-gray-600">The rules for using this portfolio site.</p>
        </header>

        <section >
          <h2>Acceptance</h2>
          <p>By using this site you agree to the terms below. This site is provided for informational and portfolio purposes.</p>

          <h2>Use license</h2>
          <p>You may view and share content, but you may not redistribute or republish it commercially without permission.</p>

          <h2>Intellectual property</h2>
          <p>All content, design and code are © Dhhairya Shukla unless otherwise noted.</p>

          <h2>Limitation of liability</h2>
          <p>I provide the site "as is" and am not responsible for indirect damages arising from use of the content.</p>

          <hr />
          <p className="mt-6">
            <Link to="/" className="text-amber-600 hover:underline">← Back to home</Link>
          </p>
        </section>
      </div>
    </main>
  );
};

export default TermsOfService;