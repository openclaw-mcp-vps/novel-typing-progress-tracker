export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Classic Literature × Typing Practice
        </div>
        <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
          Type Your Way Through
          <span className="text-[#58a6ff]"> Great Novels</span>
        </h1>
        <p className="text-xl text-[#8b949e] mb-10 max-w-2xl mx-auto">
          Build typing speed and literary knowledge simultaneously. Practice on Dickens, Austen, and Tolstoy while tracking your WPM, saving chapter progress, and acing comprehension quizzes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Typing — $5/mo
          </a>
          <a
            href="#features"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-4 rounded-lg text-lg transition-colors"
          >
            See How It Works
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto text-center">
          <div>
            <div className="text-3xl font-bold text-[#58a6ff]">50+</div>
            <div className="text-sm text-[#8b949e] mt-1">Classic Novels</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#58a6ff]">Real-time</div>
            <div className="text-sm text-[#8b949e] mt-1">WPM Tracking</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#58a6ff]">500+</div>
            <div className="text-sm text-[#8b949e] mt-1">Quiz Questions</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "⌨️", title: "Real-Time WPM", desc: "Live words-per-minute counter with accuracy tracking as you type through each passage." },
            { icon: "📖", title: "Chapter Progress", desc: "Your place is saved automatically. Resume any novel exactly where you left off." },
            { icon: "🧠", title: "Comprehension Quizzes", desc: "Short quizzes after each chapter reinforce what you read and earn you achievement badges." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-md mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Full access. Cancel anytime.</p>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$5</div>
          <div className="text-[#8b949e] mb-8">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Access to all 50+ classic novels",
              "Real-time WPM & accuracy stats",
              "Chapter progress auto-saved",
              "Comprehension quizzes & badges",
              "Personal typing speed history",
              "Cancel anytime"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started — $5/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which novels are available?",
              a: "We include 50+ public domain classics — Pride and Prejudice, Great Expectations, War and Peace, Moby Dick, and many more. New titles are added monthly."
            },
            {
              q: "How does progress saving work?",
              a: "Your position in every novel is saved automatically after each paragraph. Log in from any device and pick up exactly where you stopped."
            },
            {
              q: "Can I cancel my subscription?",
              a: "Yes, cancel anytime from your account dashboard. You keep access until the end of your billing period with no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-8 text-center text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} TypeNovel. All rights reserved.</p>
      </footer>
    </main>
  );
}
