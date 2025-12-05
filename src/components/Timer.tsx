// Image assets from Figma
const imgFrame3 =
  'https://www.figma.com/api/mcp/asset/1f3ac54b-05a5-4537-8107-bbf2b0dd6c10';
const imgEllipse4 =
  'https://www.figma.com/api/mcp/asset/a3a3f2e3-c5a6-4088-ae16-4d7741fc4cd3';

type TimerProps = {
  className?: string;
  time: string;
};

function Timer({ className, time }: TimerProps) {
  return (
    <div
      className={className || 'relative size-full'}
      data-name='Property 1=pomo'
      data-node-id='4:771'
    >
      <div className='absolute left-0 size-[316px] top-0' data-node-id='4:571'>
        <div className='absolute inset-[-17.41%]'>
          <img alt='' className='block max-w-none size-full' src={imgFrame3} />
        </div>
      </div>
      <div className='absolute left-[25px] size-[266px] top-[25px]' data-node-id='4:568'>
        <div className='absolute bottom-0 left-[0.04%] right-0 top-[0.04%]'>
          <img alt='' className='block max-w-none size-full' src={imgEllipse4} />
        </div>
      </div>
      <div
        className='absolute flex flex-col font-poppins h-[66px] justify-center leading-[0] left-[158px] not-italic text-[64px] text-center text-white top-[158px] translate-x-[-50%] translate-y-[-50%] w-[180px]'
        data-node-id='4:569'
      >
        <p className='leading-[normal] whitespace-pre-wrap'>{time}</p>
      </div>
    </div>
  );
}

export default Timer;
