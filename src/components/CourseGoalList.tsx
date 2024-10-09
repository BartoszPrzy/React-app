import { type FC } from "react";
import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoalType } from "../App.tsx";

type CourseGoalListProps = {
    goals: CourseGoalType[];
    onDeleteGoal: (id: number) => void;
    }


const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDeleteGoal}) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal 
          id={goal.id}
          onDelete={onDeleteGoal}
          title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};
export default CourseGoalList;
