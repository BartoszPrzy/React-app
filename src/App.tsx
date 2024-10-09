import goalsImg from "./assets/pugface.jpg";
import Header from "./components/Header.tsx";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoalType = {
  title: string;
  description: string;
  id: number;
}


export default function App() {
  const [goals, setGoals] = useState<CourseGoalType[]>([])
  function handleAddGoal (goal: string, summary: string) {
    setGoals(prevGoals => {
      const newGoal: CourseGoalType = {
        title: goal,
        description: summary,
        id: Math.random()
      }

      return [...prevGoals, newGoal]
    });
  }

  function handleDeleteGoals (id: number) {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id))
  }

  return (
    <main>
      <Header image={{src:goalsImg, alt: 'App logo'}}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
      <CourseGoalList onDeleteGoal={handleDeleteGoals} goals={goals} />
    </main>
  )
}
