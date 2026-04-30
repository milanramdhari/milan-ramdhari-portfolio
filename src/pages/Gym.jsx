import gym from '../data/gym'

const typeColor = {
  Push: 'bg-orange-50 text-orange-700',
  Pull: 'bg-blue-50 text-blue-700',
  Legs: 'bg-green-50 text-green-700',
  Rest: 'bg-gray-100 text-gray-400',
}

export default function Gym() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
      {/* Page header */}
      <header className="mb-12 md:mb-14 max-w-2xl">
        <p className="font-mono text-xs font-medium text-blue-600 tracking-widest uppercase mb-3">
          Lifting
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight leading-tight">
          Gym
        </h1>
        <p className="mt-3 text-base text-gray-500 leading-relaxed">
          How I spend time away from the keyboard. {gym.note}
        </p>
      </header>

      {/* Weekly split */}
      <section className="mb-12" aria-label="Weekly training split">
        <h2 className="text-sm font-semibold text-gray-900 tracking-tight mb-4">Weekly split</h2>
        <div className="flex gap-2 flex-wrap">
          {gym.split.map(({ day, type }) => (
            <div key={day} className="flex flex-col items-center gap-1.5">
              <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                {day}
              </span>
              <span
                className={`px-3 py-1 rounded text-xs font-medium ${typeColor[type]}`}
              >
                {type}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Workout details */}
      <section aria-label="Workout details">
        <h2 className="text-sm font-semibold text-gray-900 tracking-tight mb-6">Exercises</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {gym.workouts.map(({ label, muscles, exercises }) => (
            <article
              key={label}
              className="flex flex-col gap-4 p-6 rounded-xl border border-gray-200"
            >
              <div>
                <h3 className="font-semibold text-gray-900 text-[0.9375rem]">{label}</h3>
                <p className="text-xs text-gray-400 mt-0.5">{muscles}</p>
              </div>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {exercises.map(({ name, sets }) => (
                  <li key={name} className="flex items-baseline justify-between gap-4">
                    <span className="text-sm text-gray-600">{name}</span>
                    <span className="font-mono text-xs text-gray-400 shrink-0">{sets}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
