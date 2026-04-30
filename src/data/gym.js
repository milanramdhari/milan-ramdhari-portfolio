const gym = {
  note: 'Currently running a Push / Pull / Legs split, five days a week.',
  split: [
    { day: 'Mon', type: 'Push' },
    { day: 'Tue', type: 'Pull' },
    { day: 'Wed', type: 'Legs' },
    { day: 'Thu', type: 'Rest' },
    { day: 'Fri', type: 'Push' },
    { day: 'Sat', type: 'Pull' },
    { day: 'Sun', type: 'Rest' },
  ],
  workouts: [
    {
      label: 'Push',
      muscles: 'Chest · Shoulders · Triceps',
      exercises: [
        { name: 'Flat Barbell Bench Press', sets: '4 × 6–8' },
        { name: 'Incline Dumbbell Press', sets: '3 × 10' },
        { name: 'Cable Fly', sets: '3 × 12' },
        { name: 'Overhead Press', sets: '3 × 8' },
        { name: 'Lateral Raises', sets: '4 × 15' },
        { name: 'Tricep Pushdown', sets: '3 × 12' },
      ],
    },
    {
      label: 'Pull',
      muscles: 'Back · Biceps · Rear Delts',
      exercises: [
        { name: 'Weighted Pull-Ups', sets: '4 × 6–8' },
        { name: 'Barbell Row', sets: '3 × 8' },
        { name: 'Lat Pulldown', sets: '3 × 10' },
        { name: 'Seated Cable Row', sets: '3 × 10' },
        { name: 'Face Pulls', sets: '3 × 15' },
        { name: 'Barbell Curl', sets: '3 × 10' },
      ],
    },
    {
      label: 'Legs',
      muscles: 'Quads · Hamstrings · Calves',
      exercises: [
        { name: 'Barbell Squat', sets: '4 × 6–8' },
        { name: 'Romanian Deadlift', sets: '3 × 10' },
        { name: 'Leg Press', sets: '3 × 12' },
        { name: 'Leg Curl', sets: '3 × 12' },
        { name: 'Walking Lunges', sets: '3 × 10 ea.' },
        { name: 'Calf Raises', sets: '4 × 15' },
      ],
    },
  ],
}

export default gym
