'use client';

import Link from 'next/link';

interface TrainingModeProps {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  icon: string;
  stats: Array<{ label: string; value: string }>;
  href: string;
}

function TrainingModeCard({ title, subtitle, description, color, icon, stats, href }: TrainingModeProps) {
  const colorClasses = {
    red: 'from-red-500 to-orange-500',
    purple: 'from-purple-500 to-pink-500',
    cyan: 'from-cyan-500 to-blue-500',
    orange: 'from-orange-500 to-yellow-500',
  };

  const borderClasses = {
    red: 'border-red-500/30 hover:border-red-500/60',
    purple: 'border-purple-500/30 hover:border-purple-500/60',
    cyan: 'border-cyan-500/30 hover:border-cyan-500/60',
    orange: 'border-orange-500/30 hover:border-orange-500/60',
  };

  return (
    <Link href={href}>
      <div className={`group h-full border ${borderClasses[color as keyof typeof borderClasses]} rounded-xl p-6 sm:p-8 bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur-sm hover:from-slate-900/80 hover:to-slate-900/50 transition-all cursor-pointer transform hover:scale-105 hover:-translate-y-2`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className={`text-xs sm:text-sm font-semibold uppercase tracking-widest bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} bg-clip-text text-transparent mb-2`}>
              {subtitle}
            </p>
            <h3 className="text-2xl sm:text-3xl font-black text-white">{title}</h3>
          </div>
          <div className={`text-2xl sm:text-3xl bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} bg-clip-text text-transparent`}>
            {icon}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-300 mb-6 line-clamp-2">
          {description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-slate-800/50 rounded-lg p-3 text-center">
              <p className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} bg-clip-text text-transparent`}>
                {stat.value}
              </p>
              <p className="text-xs text-slate-400 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} bg-clip-text text-transparent group-hover:gap-3 transition-all`}>
          Explore Mode <span>→</span>
        </div>
      </div>
    </Link>
  );
}

export default function TrainingModes() {
  const modes = [
    {
      title: 'ADVANCED',
      subtitle: '8 Day Specialized Split',
      description: 'Years of grinding forged this. Every variable — volume, intensity, frequency, dialed.',
      color: 'red',
      icon: '🔥',
      stats: [
        { label: 'Training Days', value: '5' },
        { label: 'Per Day', value: '42m' },
      ],
      href: '/advanced',
    },
    {
      title: 'HYPERTROPHY',
      subtitle: '3 8 Day PPL • 2 Split',
      description: 'The gold standard for aesthetic bodybuilding. Every muscle trained twice per week.',
      color: 'purple',
      icon: '💪',
      stats: [
        { label: 'Days/Week', value: '6' },
        { label: 'Sets Per', value: '42' },
      ],
      href: '/hypertrophy',
    },
    {
      title: 'ATHLETE',
      subtitle: 'Elite & Day Split',
      description: 'The apex training system. Built for those who have already conquered the basics.',
      color: 'cyan',
      icon: '⚡',
      stats: [
        { label: 'Pullday', value: '4' },
        { label: 'Push Day', value: '3' },
      ],
      href: '/athlete',
    },
    {
      title: 'INTERMEDIATE',
      subtitle: 'Sport Science Training',
      description: 'Explosive power, structural strength, and sport-transfer mobility. 4 days a week.',
      color: 'orange',
      icon: '🎯',
      stats: [
        { label: 'Days Per', value: '4' },
        { label: 'Per Session', value: '42m' },
      ],
      href: '/intermediate',
    },
  ];

  return (
    <section id="modes" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-2">
            TRAINING MODES
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Choose Your Path
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Select a training mode that matches your goals and experience level. Each program is meticulously designed for specific fitness objectives.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {modes.map((mode) => (
            <TrainingModeCard key={mode.title} {...mode} />
          ))}
        </div>
      </div>
    </section>
  );
}
