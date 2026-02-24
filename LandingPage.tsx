import { Check, Zap, Users, BarChart3 } from 'lucide-react';

function LandingPage({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-teal-50">
      <nav className="border-b border-teal-100 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="text-teal-600" size={28} />
            <span className="text-2xl font-semibold text-gray-900">CreatorOS</span>
          </div>
          <button
            onClick={onGetStarted}
            className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium"
          >
            Get Started
          </button>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Your AI Manager for<br />Content Creation
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Streamline your creative workflow with AI-powered campaign planning,
          smart freelancer matching, and automated budget tracking.
        </p>
        <button
          onClick={onGetStarted}
          className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors text-lg font-medium shadow-lg shadow-teal-600/30"
        >
          Start Creating Smarter
        </button>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Problem</h2>
            <p className="text-gray-600 text-lg mb-6">
              Content creators waste hours on admin tasks: juggling multiple campaigns,
              hunting for reliable freelancers, and tracking expenses across spreadsheets.
              Managing a creative business shouldn't be this chaotic.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Solution</h2>
            <p className="text-gray-600 text-lg mb-6">
              CreatorOS acts as your AI-powered business manager. It plans your campaigns,
              matches you with perfect freelancers, and keeps your budget on track—so you
              can focus on what matters: creating amazing content.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="text-teal-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Plan Your Campaign</h3>
              <p className="text-gray-600">
                Tell CreatorOS about your project. Our AI analyzes your needs and creates
                a detailed campaign plan with timelines and deliverables.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-teal-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Get Matched with Talent</h3>
              <p className="text-gray-600">
                AI matches you with vetted freelancers who fit your style, budget, and
                deadline. Review profiles and hire in one click.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="text-teal-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Track & Execute</h3>
              <p className="text-gray-600">
                Monitor progress in real-time, manage budgets automatically, and get
                AI insights to keep your campaigns on track.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Choose the plan that fits your creator journey
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-teal-300 transition-colors">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">$29</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">Up to 3 active campaigns</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">AI campaign planning</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">Basic freelancer matching</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">Budget tracking</span>
              </li>
            </ul>
            <button
              onClick={onGetStarted}
              className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              Get Started
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 border-2 border-teal-600 hover:border-teal-700 transition-colors relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium">
              Popular
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">$79</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">Unlimited campaigns</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">Advanced AI insights</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">Premium freelancer network</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">Advanced analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">Priority support</span>
              </li>
            </ul>
            <button
              onClick={onGetStarted}
              className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium"
            >
              Get Started
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-teal-300 transition-colors">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">Custom</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">Everything in Professional</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">Team collaboration tools</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">Custom integrations</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">Dedicated account manager</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600">White-label options</span>
              </li>
            </ul>
            <button
              onClick={onGetStarted}
              className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="text-teal-600" size={24} />
            <span className="text-xl font-semibold text-gray-900">CreatorOS</span>
          </div>
          <p>Your AI Manager for Content Creation</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
