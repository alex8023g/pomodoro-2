import { useState } from 'react';
import Timer from './components/Timer';

// Image assets from Figma
const img = 'https://www.figma.com/api/mcp/asset/5172c8de-513c-4d87-aef3-8bc5bf443268';
const img1 = 'https://www.figma.com/api/mcp/asset/fe6dc7d8-56e8-4698-82ab-6bf1c3f27729';
const img2 = 'https://www.figma.com/api/mcp/asset/b19d1e52-293d-4619-bbd6-2762a3e3d5cd';
const img3 = 'https://www.figma.com/api/mcp/asset/db04b346-3e57-4585-b843-a7a916bda661';
const imgRefresh2 =
  'https://www.figma.com/api/mcp/asset/cc707553-a0f2-4157-9624-2c495a981f3e';

type TimerMode = 'pomodoro' | 'short break' | 'long break';

function App() {
  const [mode, setMode] = useState<TimerMode>('pomodoro');
  const [time, setTime] = useState('25:00');

  const handleModeClick = (newMode: TimerMode) => {
    setMode(newMode);
    // Update time based on mode
    if (newMode === 'pomodoro') {
      setTime('25:00');
    } else if (newMode === 'short break') {
      setTime('05:00');
    } else {
      setTime('15:00');
    }
  };

  return (
    <div
      className='bg-[#50a6d9] overflow-clip relative rounded-[32px] size-full max-w-[450px] max-h-[800px] mx-auto bg-[url(/group9.png)] bg-cover bg-center'
      data-name='Mainscreen 1'
      data-node-id='2:2'
    >
      {/* Header */}
      <div
        className='absolute flex flex-col font-aclonica h-[46px] justify-center leading-[0] left-[22px] not-italic text-[#020f55] text-[24px] top-[100px] tracking-[1.2px] translate-y-[-50%] w-[177px]'
        data-node-id='4:549'
      >
        <p className='leading-[normal] whitespace-pre-wrap'>POMODORO</p>
      </div>

      {/* Refresh button */}
      <button
        className='absolute bg-[rgba(0,0,0,0.03)] left-[calc(75%+38px)] overflow-clip rounded-[40px] size-[46px] top-[77px] cursor-pointer hover:bg-[rgba(0,0,0,0.05)] transition-colors'
        data-node-id='4:550'
      >
        <div
          className='absolute inset-[22.73%]'
          data-name='Refresh 2'
          data-node-id='4:551'
        >
          <div className='absolute inset-[-2.99%]'>
            <img alt='' className='block max-w-none size-full' src={imgRefresh2} />
          </div>
        </div>
      </button>

      {/* Mode selector */}
      <div
        className='absolute font-aclonica h-[27px] leading-[0] left-1/2 not-italic text-center top-[652px] translate-x-[-50%] w-[372px]'
        data-name='switch'
        data-node-id='4:764'
      >
        <button
          onClick={() => handleModeClick('short break')}
          className={`absolute bottom-[14.81%] flex flex-col justify-center left-0 right-[71.15%] top-[22.22%] cursor-pointer transition-colors ${
            mode === 'short break'
              ? 'text-[#020f55] text-[20px]'
              : 'text-[15px] text-[rgba(0,0,0,0.3)] hover:text-[rgba(0,0,0,0.5)]'
          }`}
          data-node-id='I4:764;4:559'
        >
          <p className='leading-[normal] whitespace-pre-wrap'>short&nbsp;break</p>
        </button>
        <button
          onClick={() => handleModeClick('pomodoro')}
          className={`absolute bottom-0 flex flex-col justify-center left-[31.04%] right-[31.04%] top-0 cursor-pointer transition-colors ${
            mode === 'pomodoro'
              ? 'text-[#020f55] text-[20px]'
              : 'text-[15px] text-[rgba(0,0,0,0.3)] hover:text-[rgba(0,0,0,0.5)]'
          }`}
          data-node-id='I4:764;4:560'
        >
          <p className='leading-[normal] whitespace-pre-wrap'>pomodoro</p>
        </button>
        <button
          onClick={() => handleModeClick('long break')}
          className={`absolute bottom-[14.81%] flex flex-col justify-center left-[71.15%] right-0 top-[22.22%] cursor-pointer transition-colors ${
            mode === 'long break'
              ? 'text-[#020f55] text-[20px]'
              : 'text-[15px] text-[rgba(0,0,0,0.3)] hover:text-[rgba(0,0,0,0.5)]'
          }`}
          data-node-id='I4:764;4:561'
        >
          <p className='leading-[normal] whitespace-pre-wrap'>long&nbsp;break</p>
        </button>
      </div>

      {/* Timer component */}
      <Timer className='absolute left-[55px] size-[316px] top-[286px]' time={time} />

      {/* Navigation bar */}
      <div
        className='absolute bottom-[32px] h-[86px] left-[calc(50%+-0.5px)] translate-x-[-50%] w-[413px]'
        data-name='Nav bar'
        data-node-id='2:121'
      >
        <div
          className='absolute left-[21px] size-[56px] top-[18px]'
          data-name='iconamoon:home-bold'
          data-node-id='I2:121;2:24'
        >
          <img alt='' className='block max-w-none size-full' src={img} />
        </div>
        <a
          className='absolute block cursor-pointer left-[340px] size-[56px] top-[18px] hover:opacity-80 transition-opacity'
          data-name='uil:setting'
          data-node-id='I2:121;2:26'
        >
          <img alt='' className='block max-w-none size-full' src={img1} />
        </a>
        <button
          className='absolute block cursor-pointer left-[172px] size-[56px] top-0 hover:opacity-80 transition-opacity'
          data-name='solar:play-broken'
          data-node-id='I2:121;2:28'
        >
          <img alt='' className='block max-w-none size-full' src={img2} />
        </button>
        <div
          className='absolute h-[133.173px] left-0 top-[8.33px] w-[413px]'
          data-node-id='I2:121;2:67'
        >
          <div className='absolute inset-[-1.16%_-0.36%_-1.13%_-0.22%]'>
            <img alt='' className='block max-w-none size-full' src={img3} />
          </div>
        </div>
      </div>

      {/* Invisible clickable areas for mode selection */}
      <a
        className='absolute block cursor-pointer h-[25px] left-[20px] top-[653px] w-[106px]'
        data-node-id='4:1076'
        onClick={() => handleModeClick('short break')}
      />
      <a
        className='absolute block cursor-pointer h-[25px] left-[calc(50%+83px)] top-[653px] w-[106px]'
        data-node-id='4:1077'
        onClick={() => handleModeClick('long break')}
      />
    </div>
  );
}

export default App;
