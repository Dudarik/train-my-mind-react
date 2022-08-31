import React from "react";

type TProps = {
  points: number;
};

const CardPoints: React.FC<TProps> = (props: TProps) => {
  const { points } = props;

  return <div className='card_points'>{points}</div>;
};

export default CardPoints;
