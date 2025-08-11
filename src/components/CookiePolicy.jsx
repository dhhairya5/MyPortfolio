import { Link } from "react-router-dom";

const CookiePolicy = () => {
  return (
    <main className="min-h-screen bg-violet-900 text-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-white">Cookie Policy</h1>
          <p className="mt-2 text-violet-200">What cookies this site uses and why.</p>
        </header>

        <section className="prose prose-lg prose-invert">
          <h2>Essential cookies</h2>
          <p>Essential cookies are used to enable core site functionality (if used). This site uses minimal/none by default.</p>

          <h2>Analytics</h2>
          <p>If analytics are enabled in the future, only aggregated, non-personal data will be collected to improve the site.</p>

          <h2>How to opt-out</h2>
          <p>You can disable cookies in your browser settings. This site aims to work well even when cookies are blocked.</p>

          <hr />
          <p className="mt-6">
            <Link to="/" className="text-white underline">← Back to home</Link>
          </p>
        </section>
      </div>
    </main>
  );
};

export default CookiePolicy;