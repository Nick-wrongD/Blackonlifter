'use client';

export default function Features() {
  const features = [
    {
      icon: '⚙️',
      title: 'Professional Grade Tools',
      description: 'Professional-grade tools to unleash professional-grade simulants.',
    },
    {
      icon: '🔗',
      title: 'Seamless Collaboration',
      description: 'Seamless collaboration can\'t be design temfricones within teaming.',
    },
    {
      icon: '🌟',
      title: 'AI-Powered Themes',
      description: 'AI-Powered themes an Inroix, promising and AI-Powered themes.',
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-2">
            WHY BLACKONLIFTER
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Premium Features
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group border border-slate-700/50 hover:border-cyan-500/50 rounded-xl p-6 sm:p-8 bg-gradient-to-br from-slate-900/30 to-slate-950/50 backdrop-blur-sm hover:from-slate-900/50 hover:to-slate-900/30 transition-all"
            >
              <div className="text-4xl sm:text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
