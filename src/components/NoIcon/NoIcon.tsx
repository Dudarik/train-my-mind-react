type Props = {
  color: string;
};

const NoIcon = (props: Props) => {
  const { color } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 300 300'
      width={300}
      height={300}
      xmlSpace='preserve'
      fill={color}
      {...props}>
      <path d='M150 0C67.29 0 0 67.29 0 150s67.29 150 150 150 150-67.29 150-150S232.71 0 150 0zm0 270c-66.169 0-120-53.832-120-120S83.831 30 150 30s120 53.832 120 120-53.831 120-120 120z' />
      <path d='M215.606 84.394c-5.857-5.857-15.355-5.857-21.213 0L150 128.787l-44.394-44.393c-5.857-5.857-15.355-5.857-21.213 0-5.858 5.857-5.858 15.355 0 21.213L128.787 150l-44.393 44.394c-5.858 5.857-5.858 15.355 0 21.213C87.322 218.535 91.161 220 95 220s7.678-1.465 10.606-4.394L150 171.213l44.394 44.393C197.322 218.535 201.161 220 205 220s7.678-1.465 10.606-4.394c5.858-5.857 5.858-15.355 0-21.213L171.213 150l44.393-44.394c5.858-5.857 5.858-15.355 0-21.212z' />
    </svg>
  );
};

export default NoIcon;
