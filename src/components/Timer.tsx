// Image assets from Figma
import { Circle } from './Circle';
const imgFrame3 =
  'https://www.figma.com/api/mcp/asset/1f3ac54b-05a5-4537-8107-bbf2b0dd6c10';
const imgEllipse4 =
  'https://www.figma.com/api/mcp/asset/a3a3f2e3-c5a6-4088-ae16-4d7741fc4cd3';

type TimerProps = {
  className?: string;
  time: string;
};

function Timer({ className, time }: TimerProps) {
  const radius = 110;
  const circumference = 2 * Math.PI * radius;
  // const progress = ((duration - timeLeft) / duration) * circumference;
  const progress = 740;
  const strokeDasharray = circumference - progress;
  return (
    <div
      // className={className || "relative size-full"}
      className='absolute left-[55px] top-[240px] size-[316px]'
      data-name='Property 1=pomo'
      data-node-id='4:771'
    >
      <div className='absolute left-3 top-0 size-[316px]' data-node-id='4:571'>
        <div className='absolute inset-[-17.41%]'>
          <img alt='' className='block size-full max-w-none' src={imgFrame3} />
        </div>
      </div>
      <Circle />
      <div
        className='absolute left-[172px] top-[158px] flex h-[66px] w-[180px] translate-x-[-50%] translate-y-[-50%] flex-col justify-center text-center font-poppins text-[64px] not-italic leading-[0] text-white'
        data-node-id='4:569'
      >
        <p className='whitespace-pre-wrap leading-[normal]'>{time}</p>
      </div>
    </div>
  );
}

export default Timer;
