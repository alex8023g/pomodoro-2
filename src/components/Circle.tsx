export function Circle() {
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  // const progress = ((duration - timeLeft) / duration) * circumference;
  const progress = 740;
  const strokeDasharray = circumference - progress;
  return (
    <div className='1 absolute left-[38px] top-[27px] size-[266px]'>
      <svg className='2 /h-60 /w-60 -rotate-90 transform' viewBox='0 0 260 260'>
        {/* <circle
            cx="125"
            cy="125"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="transparent"
          /> */}
        {/* Progress circle */}
        <circle
          cx={130}
          cy={130}
          r={radius}
          // stroke='#3b82f6'
          stroke='#fff'
          strokeWidth='10'
          fill='transparent'
          strokeDasharray={circumference}
          strokeDashoffset={strokeDasharray}
          strokeLinecap='round'
          className='transition-all duration-1000 ease-linear'
        />
      </svg>
      {/* </div> */}
    </div>
  );
}
