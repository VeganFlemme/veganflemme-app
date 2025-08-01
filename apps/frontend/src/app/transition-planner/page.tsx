'use client';

import TransitionPlanner from '../../components/TransitionPlanner/TransitionPlanner';

export default function TransitionPlannerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Transition Planner</h1>
        <TransitionPlanner />
      </div>
    </div>
  );
}