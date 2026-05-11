export interface Exercise {
  id: number;
  name: string;
  description: string;
  sets?: string;
  reps?: string;
  duration?: string;
  type: string;
  tags: string[];
}

export interface Day {
  id: number;
  name: string;
  title: string;
  focus: string;
  exercises: Exercise[];
}

export interface TrainingMode {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  color: 'red' | 'cyan' | 'yellow' | 'purple';
  stats: {
    label: string;
    value: string;
  }[];
  days: Day[];
  sections: {
    title: string;
    content: string;
  }[];
}

export const trainingModes: TrainingMode[] = [
  {
    id: 'beginner',
    name: 'Beginner Mode',
    title: 'BEGINNER',
    subtitle: 'Start Your Strength Journey',
    description: 'Perfect for newcomers to strength training. Build solid fundamentals with progressive training.',
    color: 'cyan',
    stats: [
      { label: 'Training Days', value: '3' },
      { label: 'Minutes per Session', value: '45-60' },
      { label: 'Sets per Exercise', value: '3-4' },
      { label: 'Rest Days', value: '2-3' },
    ],
    days: [
      {
        id: 1,
        name: 'DAY 1',
        title: 'LOWER BODY',
        focus: 'Squats, Deadlifts, Leg Press',
        exercises: [
          { id: 1, name: 'Warm-Up', description: '5-10 min Light Cardio & Dynamic Stretching', type: 'WARM-UP', tags: [] },
          { id: 2, name: 'Back Squats', description: '3 sets x 6-8 reps - Barbell', sets: '3', reps: '6-8', type: 'STRENGTH', tags: ['Compound'] },
          { id: 3, name: 'Romanian Deadlifts', description: '3 sets x 8-10 reps - Barbell', sets: '3', reps: '8-10', type: 'STRENGTH', tags: ['Compound'] },
          { id: 4, name: 'Leg Press', description: '3 sets x 10-12 reps - Machine', sets: '3', reps: '10-12', type: 'ISOLATION', tags: [] },
          { id: 5, name: 'Leg Curls', description: '2 sets x 12-15 reps - Machine', sets: '2', reps: '12-15', type: 'ISOLATION', tags: [] },
        ],
      },
      {
        id: 2,
        name: 'DAY 2',
        title: 'UPPER BODY PUSH',
        focus: 'Bench Press, Shoulder Press, Triceps',
        exercises: [
          { id: 6, name: 'Warm-Up', description: '5-10 min Light Cardio & Dynamic Stretching', type: 'WARM-UP', tags: [] },
          { id: 7, name: 'Barbell Bench Press', description: '3 sets x 6-8 reps - Barbell', sets: '3', reps: '6-8', type: 'STRENGTH', tags: ['Compound'] },
          { id: 8, name: 'Overhead Press', description: '3 sets x 6-8 reps - Barbell', sets: '3', reps: '6-8', type: 'STRENGTH', tags: ['Compound'] },
          { id: 9, name: 'Incline Dumbbell Press', description: '3 sets x 8-10 reps - Dumbbells', sets: '3', reps: '8-10', type: 'STRENGTH', tags: [] },
          { id: 10, name: 'Tricep Dips', description: '3 sets x 8-10 reps - Bodyweight/Assisted', sets: '3', reps: '8-10', type: 'ISOLATION', tags: [] },
        ],
      },
      {
        id: 3,
        name: 'DAY 3',
        title: 'UPPER BODY PULL',
        focus: 'Pull-ups, Rows, Biceps',
        exercises: [
          { id: 11, name: 'Warm-Up', description: '5-10 min Light Cardio & Dynamic Stretching', type: 'WARM-UP', tags: [] },
          { id: 12, name: 'Pull-ups', description: '3 sets x 6-8 reps - Bodyweight/Assisted', sets: '3', reps: '6-8', type: 'STRENGTH', tags: ['Compound'] },
          { id: 13, name: 'Barbell Rows', description: '3 sets x 6-8 reps - Barbell', sets: '3', reps: '6-8', type: 'STRENGTH', tags: ['Compound'] },
          { id: 14, name: 'Lat Pulldowns', description: '3 sets x 8-10 reps - Machine', sets: '3', reps: '8-10', type: 'ISOLATION', tags: [] },
          { id: 15, name: 'Barbell Curls', description: '3 sets x 8-10 reps - Barbell', sets: '3', reps: '8-10', type: 'ISOLATION', tags: [] },
        ],
      },
    ],
    sections: [
      {
        title: 'BEGINNER PRINCIPLES',
        content: 'Focus on learning proper form and building a solid foundation. Consistency is more important than intensity at this stage.',
      },
    ],
  },
  {
    id: 'intermediate',
    name: 'Intermediate Mode',
    title: 'INTERMEDIATE',
    subtitle: 'Sport-Science Training',
    description: 'Sport science training built on explosive power, structural strength, and sport-transfer mobility. 4 days program.',
    color: 'cyan',
    stats: [
      { label: 'Training Days', value: '4' },
      { label: 'Minutes per Session', value: '75-150' },
      { label: 'Week Progression Cycle', value: '8-12' },
      { label: 'Sets per Exercise', value: '3-5' },
    ],
    days: [
      {
        id: 1,
        name: 'LOWER',
        title: 'LOWER BODY POWER',
        focus: 'Explosive Hip Hinges, Leg Drive',
        exercises: [
          { id: 1, name: 'Hip Circles • Lug Swings', description: '', type: 'MOBILITY', tags: [] },
          { id: 2, name: 'Cube Bridges', description: '', type: 'ACTIVATION', tags: [] },
          { id: 3, name: 'Dom Jumps', description: 'Jump RE Vertical PEDS GS MCp', type: 'EXPLOSIVE', tags: [] },
          { id: 4, name: 'Broad Jumps', description: 'Jump ME Vertical PEDS GS MCp', type: 'EXPLOSIVE', tags: [] },
        ],
      },
      {
        id: 2,
        name: 'UPPER',
        title: 'UPPER BODY POWER',
        focus: 'Explosive Pressing, Pulling',
        exercises: [
          { id: 5, name: 'Medicine Ball Slams', description: '', type: 'EXPLOSIVE', tags: [] },
          { id: 6, name: 'Plyometric Push-ups', description: '', type: 'EXPLOSIVE', tags: [] },
        ],
      },
      {
        id: 3,
        name: 'FULL',
        title: 'FULL BODY',
        focus: 'Compound Movements',
        exercises: [
          { id: 7, name: 'Full Body Complex', description: '', type: 'COMPOUND', tags: [] },
        ],
      },
      {
        id: 4,
        name: 'RATE',
        title: 'RATE & TECHNIQUE',
        focus: 'Movement Quality',
        exercises: [
          { id: 8, name: 'Technique Work', description: '', type: 'TECHNIQUE', tags: [] },
        ],
      },
    ],
    sections: [
      {
        title: 'PROGRAM OVERVIEW',
        content: 'Built on 3 pillars: explosive power, structural strength and sport-transfer mobility.',
      },
    ],
  },
  {
    id: 'athlete',
    name: 'Athlete Mode',
    title: 'ATHLETE',
    subtitle: 'Elite & Day Split',
    description: 'The apex training system. Built for those who have already conquered the basics and ready to train like predators.',
    color: 'yellow',
    stats: [
      { label: 'Pullday', value: '4' },
      { label: 'Legs', value: '3' },
      { label: 'Push day', value: '90 mg' },
      { label: 'Rest', value: 'FULL BODY' },
    ],
    days: [
      {
        id: 1,
        name: 'PULL DAY',
        title: 'PULL DAY',
        focus: 'Back, Biceps, Abs',
        exercises: [
          { id: 1, name: 'Pull-ups', description: 'Pull-ups - Forces - Sigmoid Latissification', type: 'COMPOUND', tags: [] },
          { id: 2, name: 'Shoulder Press', description: 'Stoutfor Press - Rippts - TireuDumbell', type: 'COMPOUND', tags: [] },
        ],
      },
      {
        id: 2,
        name: 'LEG DAY',
        title: 'LEG DAY',
        focus: 'Legs, Quads, Hamstrings',
        exercises: [
          { id: 3, name: 'Squats', description: 'Squats', type: 'COMPOUND', tags: [] },
        ],
      },
      {
        id: 3,
        name: 'PUSH DAY',
        title: 'PUSH DAY',
        focus: 'Chest, Shoulders, Triceps',
        exercises: [
          { id: 4, name: 'Bench Press', description: 'Bench Press', type: 'COMPOUND', tags: [] },
        ],
      },
    ],
    sections: [
      {
        title: 'ATHLETE PRINCIPLES',
        content: 'Elite training for competitive athletes. Maximum intensity and volume optimization.',
      },
    ],
  },
  {
    id: 'hypertrophy',
    name: 'Hypertrophy Mode',
    title: 'HYPERTROPHY',
    subtitle: '3 8 DAY PPL • 2 SPLIT',
    description: 'The gold standard for aesthetic bodybuilding. Every muscle trained twice per week. Built for maximum size, symmetry, and the classic physique.',
    color: 'purple',
    stats: [
      { label: 'Days per Week', value: '6' },
      { label: 'Training Sets', value: '42' },
      { label: 'Muscle Frequency', value: '2x' },
      { label: 'Usge Range', value: '8-15' },
    ],
    days: [
      {
        id: 1,
        name: 'PUSH A',
        title: 'PUSH A',
        focus: 'Chest, Shoulders, Triceps',
        exercises: [
          { id: 1, name: 'Warm-up', description: '5-10 min: light cardio/mobility', type: 'WARM-UP', tags: [] },
          { id: 2, name: 'Incline Barbell Press', description: 'Multi 5 sets: 8 mtho p o', type: 'STRENGTH', tags: [] },
          { id: 3, name: 'Flat Dumbbell Press', description: '2lBS JE 0 ms', type: 'STRENGTH', tags: [] },
        ],
      },
      {
        id: 2,
        name: 'PULL A',
        title: 'PULL A',
        focus: 'Back, Biceps, Rear Delts',
        exercises: [
          { id: 4, name: 'Barbell Rows', description: '', type: 'COMPOUND', tags: [] },
        ],
      },
      {
        id: 3,
        name: 'LEGS A',
        title: 'LEGS A',
        focus: 'Quads, Hamstrings, Glutes',
        exercises: [
          { id: 5, name: 'Squats', description: '', type: 'COMPOUND', tags: [] },
        ],
      },
      {
        id: 4,
        name: 'PUSH B',
        title: 'PUSH B',
        focus: 'Secondary Pressing',
        exercises: [
          { id: 6, name: 'Secondary Press', description: '', type: 'STRENGTH', tags: [] },
        ],
      },
      {
        id: 5,
        name: 'PULL B',
        title: 'PULL B',
        focus: 'Secondary Pulling',
        exercises: [
          { id: 7, name: 'Secondary Pull', description: '', type: 'COMPOUND', tags: [] },
        ],
      },
      {
        id: 6,
        name: 'LEGS B',
        title: 'LEGS B',
        focus: 'Secondary Leg Work',
        exercises: [
          { id: 8, name: 'Secondary Legs', description: '', type: 'COMPOUND', tags: [] },
        ],
      },
    ],
    sections: [
      {
        title: 'HYPERTROPHY PRINCIPLES',
        content: 'Primarily increases faster turning muscle noobudding or D creato new muscle simmet wast ums aneon tured pur a fovction. Built for mair ithemeses, symetry, and the class e phisique. aesthetetical matimun size, symmetry, and the classic physique.',
      },
    ],
  },
];
