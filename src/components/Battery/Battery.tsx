import React from "react";

type Props = {
  color: string;
};

const Battery = (props: Props) => {
  const { color } = props;
  return (
    <svg
      width={512}
      height={512}
      viewBox='0 0 512 512'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <title>{"ionicons-v5-d"}</title>
      <path d='M48 322.3V189.7A29.74 29.74 0 0 1 77.7 160h137.44l24.4-32H77.7A61.77 61.77 0 0 0 16 189.7v132.6A61.77 61.77 0 0 0 77.7 384h96.85a22.57 22.57 0 0 1 .26-7.32l.15-.75.21-.73 6.5-23.2H77.7A29.74 29.74 0 0 1 48 322.3ZM386.3 128h-98.64a22.69 22.69 0 0 1-.27 7.2l-.15.74-.21.73-6.54 23.33H386.3a29.74 29.74 0 0 1 29.7 29.7v132.6a29.74 29.74 0 0 1-29.7 29.7H247l-24.42 32H386.3a61.77 61.77 0 0 0 61.7-61.7V189.7a61.77 61.77 0 0 0-61.7-61.7Z' />
      <path d='M162.65 294.16a24.37 24.37 0 0 1-21.56-13 25 25 0 0 1 1.42-25.83l.31-.46.33-.44L197.62 183H89.69a20 20 0 0 0-20 20v106a20 20 0 0 0 20 20h98.42l9.78-34.86Z' />
      <path d='m276.07 280.89 27.07-35.49a5.2 5.2 0 0 0 .77-1.91 5 5 0 0 0 .08-.66 5 5 0 0 0-.08-1.29 5.11 5.11 0 0 0-.68-1.75 4.76 4.76 0 0 0-.78-.95 3.48 3.48 0 0 0-.48-.38 4 4 0 0 0-1.11-.55 4.28 4.28 0 0 0-1.31-.2h-61.62l12.12-43.21 3.23-11.5 6.21-22.16.51-1.84 7.79-27.76a3.51 3.51 0 0 0 .05-.55v-.16c0-.05 0-.26-.05-.38s0-.09 0-.14a2.2 2.2 0 0 0-.17-.45 3.77 3.77 0 0 0-.26-.39l-.09-.1a2.73 2.73 0 0 0-.25-.23l-.1-.08a3.14 3.14 0 0 0-.39-.24 2 2 0 0 0-.41-.14H265.53a2.3 2.3 0 0 0-.45 0 1.9 1.9 0 0 0-.42.15l-.13.07-.3.21-.11.1a2.4 2.4 0 0 0-.36.41l-18 23.63-13.14 17.22-9.85 12.83-63.71 83.55a5.72 5.72 0 0 0-.44.8 4.78 4.78 0 0 0-.35 1.09 4.7 4.7 0 0 0-.08 1.29 4.86 4.86 0 0 0 2 3.71 4.74 4.74 0 0 0 .54.31 4.31 4.31 0 0 0 1.89.43h61.62L194.42 380.6a3.64 3.64 0 0 0 0 .56v.15a2.32 2.32 0 0 0 .06.38.58.58 0 0 0 0 .14 2.2 2.2 0 0 0 .17.45 3.62 3.62 0 0 0 .26.38l.09.1.25.24a.39.39 0 0 1 .1.08 2.22 2.22 0 0 0 .39.23 2.83 2.83 0 0 0 .41.14h.13a1.86 1.86 0 0 0 .33 0h.13a2.32 2.32 0 0 0 .45-.06 2.05 2.05 0 0 0 .41-.16l.13-.07.3-.21.11-.09a2.4 2.4 0 0 0 .36-.41L221.82 352l17.53-23Z' />
      <path d='m319.5 256.93-.46.6L264.51 329h109.8a20 20 0 0 0 20-20V203a20 20 0 0 0-20-20H274.05l-9.74 34.73h35.24A24.35 24.35 0 0 1 321 230.5a25.21 25.21 0 0 1-1 25.79ZM480 202.67a16 16 0 0 0-16 16v74.66a16 16 0 0 0 32 0v-74.66a16 16 0 0 0-16-16Z' />
    </svg>
  );
};

export default Battery;
