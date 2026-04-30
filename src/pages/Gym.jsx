import gym from '../data/gym'

export default function Gym() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-20">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Gym</h1>
        <p className="text-gray-500 mt-2">My current gym routine.</p>
      </header>
      <div className="flex flex-col gap-10">
        {gym.map(({ category, items }) => (
          <div key={category}>
            <h2 className="text-base font-semibold text-gray-900 mb-4">{category}</h2>
            <ul className="flex flex-col gap-4 list-none p-0 m-0">
              {items.map(({ name, description }) => (
                <li key={name} className="flex flex-col gap-0.5">
                  <span className="font-medium text-gray-800 text-sm">{name}</span>
                  <span className="text-gray-500 text-sm">{description}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
