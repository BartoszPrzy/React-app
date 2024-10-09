import { type FC, type ReactNode } from "react";

type CourseGoalProps = {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
};

const CourseGoal: FC<CourseGoalProps> = ({title, children, onDelete, id}) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(id)}>DELETE</button>
    </article>
  );
};

export default CourseGoal;
// export default function CourseGoal({title, children}:CourseGoalProps) {
//     return (
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 <p>{children}</p>
//             </div>
//                 <button>DELETE</button>
//         </article>
//     )
// }
