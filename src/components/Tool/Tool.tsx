import React from "react";

type Props = {
  color: string;
};

const Tool = (props: Props) => {
  const { color } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 376.846 376.846'
      width={376.846}
      height={376.846}
      fill={color}
      // style={{
      //   enableBackground: "new 0 0 376.846 376.846",
      // }}
      xmlSpace='preserve'
      {...props}>
      <path
        // style={{
        //   fill: "#010002",
        // }}
        d='M364.966 372.743c2.382-2.39 4.316-4.324 4.316-4.324l4.316-4.324c2.382-2.398-1.691-13.453-9.104-24.695l-19.013-28.865c-7.413-11.242-19.127-21.565-26.174-23.044-7.047-1.488-12.762-2.691-12.762-2.691l-57.298-57.274-20.858 20.874 57.25 57.282 2.707 12.762c1.488 7.039 11.819 18.769 23.061 26.174l28.881 19.037c11.241 7.405 22.296 11.478 24.678 9.088zM13.608 74.197l85.139 85.139 10.632 10.608c.244.26.48.398.715.642l14.062-14.071L23.728 56.086c-2.447-2.422-2.447-6.397 0-8.795 2.422-2.455 6.34-2.455 8.795 0l100.396 100.453 15.664-15.696L48.154 31.635a6.172 6.172 0 0 1 0-8.795c2.422-2.422 6.365-2.422 8.763 0l100.477 100.477 14.038-14.087c-.211-.244-.366-.504-.585-.74l-11.161-11.177-84.594-84.57c-16.972-17.005-44.52-16.981-61.485 0-16.996 16.966-16.996 44.481.001 61.454z'
      />
      <path
        // style={{
        //   fill: "#010002",
        // }}
        d='M375.728 81.651c-1.024-13.428-12.892-16.038-22.41-6.519l-33.262 33.27c-7.722 7.779-20.378 7.755-28.125 0l-21.549-21.524c-7.803-7.844-7.779-20.46-.024-28.247l34.392-34.359c9.527-9.519 7.112-21.817-6.259-23.41-25.865-3.089-52.82 5.275-72.678 25.117-15.127 15.152-23.573 34.473-25.361 54.258a89.768 89.768 0 0 0 1.097 24.004L16.965 288.84c-9.746 9.754-15.127 22.703-15.127 36.497 0 13.762 5.381 26.694 15.103 36.432 20.11 20.102 52.819 20.102 72.962 0 0 0 132.683-132.666 186.413-186.461a87.007 87.007 0 0 0 25.41-.26c17.769-2.78 34.847-10.925 48.56-24.613 18.866-18.867 27.328-44.139 25.442-68.784zM70.857 345.91c-10.551 10.494-27.523 10.494-38.042-.024-10.47-10.445-10.494-27.499.024-37.969 10.494-10.47 27.466-10.445 37.985 0 10.471 10.47 10.471 27.524.033 37.993z'
      />
    </svg>
  );
};

export default Tool;
