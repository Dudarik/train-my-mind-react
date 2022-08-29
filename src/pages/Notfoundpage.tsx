import { Link } from "react-router-dom";

export const Notfoundpage: React.FC = () => {
  return (
    <div>
      <p>
        Такой страницы не существует, но вы всегда можете сыграть на{" "}
        <Link to='/'>Главной</Link>
      </p>
    </div>
  );
};
