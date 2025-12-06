import { useState } from 'react';
import Timer from './components/Timer';

// Image assets from Figma
const img =
  'https://www.figma.com/api/mcp/asset/5172c8de-513c-4d87-aef3-8bc5bf443268';
const img1 =
  'https://www.figma.com/api/mcp/asset/fe6dc7d8-56e8-4698-82ab-6bf1c3f27729';
const img2 =
  'https://www.figma.com/api/mcp/asset/b19d1e52-293d-4619-bbd6-2762a3e3d5cd';
const img3 =
  'https://www.figma.com/api/mcp/asset/db04b346-3e57-4585-b843-a7a916bda661';
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
      className='/rounded-[32px] relative mx-auto size-full max-h-[800px] max-w-[450px] overflow-clip bg-[#50a6d9] bg-[url(/group9.png)] bg-cover bg-center'
      data-name='Mainscreen 1'
      data-node-id='2:2'
    >
      {/* Header */}
      <div
        className='absolute left-[22px] top-[100px] flex h-[46px] w-[177px] translate-y-[-50%] flex-col justify-center font-aclonica text-[24px] not-italic leading-[0] tracking-[1.2px] text-[#020f55]'
        data-node-id='4:549'
      >
        <p className='whitespace-pre-wrap leading-[normal]'>POMODORO</p>
      </div>

      {/* Refresh button */}
      <button
        className='absolute left-[calc(75%+38px)] top-[77px] size-[46px] cursor-pointer overflow-clip rounded-[40px] bg-[rgba(0,0,0,0.03)] transition-colors hover:bg-[rgba(0,0,0,0.05)]'
        data-node-id='4:550'
      >
        <div
          className='absolute inset-[22.73%]'
          data-name='Refresh 2'
          data-node-id='4:551'
        >
          <div className='absolute inset-[-2.99%]'>
            <img
              alt=''
              className='block size-full max-w-none'
              src={imgRefresh2}
            />
          </div>
        </div>
      </button>

      {/* Mode selector */}
      <div
        className='absolute left-1/2 top-[652px] h-[27px] w-[372px] translate-x-[-50%] text-center font-aclonica not-italic leading-[0]'
        data-name='switch'
        data-node-id='4:764'
      >
        <button
          onClick={() => handleModeClick('short break')}
          className={`absolute bottom-[14.81%] left-0 right-[71.15%] top-[22.22%] flex cursor-pointer flex-col justify-center transition-colors ${
            mode === 'short break'
              ? 'text-[20px] text-[#020f55]'
              : 'text-[15px] text-[rgba(0,0,0,0.3)] hover:text-[rgba(0,0,0,0.5)]'
          }`}
          data-node-id='I4:764;4:559'
        >
          <p className='whitespace-pre-wrap leading-[normal]'>
            short&nbsp;break
          </p>
        </button>
        <button
          onClick={() => handleModeClick('pomodoro')}
          className={`absolute bottom-0 left-[31.04%] right-[31.04%] top-0 flex cursor-pointer flex-col justify-center transition-colors ${
            mode === 'pomodoro'
              ? 'text-[20px] text-[#020f55]'
              : 'text-[15px] text-[rgba(0,0,0,0.3)] hover:text-[rgba(0,0,0,0.5)]'
          }`}
          data-node-id='I4:764;4:560'
        >
          <p className='whitespace-pre-wrap leading-[normal]'>pomodoro</p>
        </button>
        <button
          onClick={() => handleModeClick('long break')}
          className={`absolute bottom-[14.81%] left-[71.15%] right-0 top-[22.22%] flex cursor-pointer flex-col justify-center transition-colors ${
            mode === 'long break'
              ? 'text-[20px] text-[#020f55]'
              : 'text-[15px] text-[rgba(0,0,0,0.3)] hover:text-[rgba(0,0,0,0.5)]'
          }`}
          data-node-id='I4:764;4:561'
        >
          <p className='whitespace-pre-wrap leading-[normal]'>
            long&nbsp;break
          </p>
        </button>
      </div>

      {/* Timer component */}
      <Timer
        className='absolute left-[55px] top-[286px] size-[316px]'
        time={time}
      />

      {/* Navigation bar */}
      <div
        className='absolute bottom-[32px] left-[calc(50%+-0.5px)] h-[86px] w-[413px] translate-x-[-50%]'
        data-name='Nav bar'
        data-node-id='2:121'
      >
        <div
          className='absolute left-[21px] top-[18px] size-[56px]'
          data-name='iconamoon:home-bold'
          data-node-id='I2:121;2:24'
        >
          <img alt='' className='block size-full max-w-none' src={img} />
        </div>
        <a
          className='absolute left-[340px] top-[18px] block size-[56px] cursor-pointer transition-opacity hover:opacity-80'
          data-name='uil:setting'
          data-node-id='I2:121;2:26'
        >
          <img alt='' className='block size-full max-w-none' src={img1} />
        </a>
        <button
          className='absolute left-[172px] top-0 block size-[56px] cursor-pointer transition-opacity hover:opacity-80'
          data-name='solar:play-broken'
          data-node-id='I2:121;2:28'
        >
          <img alt='' className='block size-full max-w-none' src={img2} />
        </button>
        <div
          className='absolute left-0 top-[8.33px] h-[133.173px] w-[413px]'
          data-node-id='I2:121;2:67'
        >
          <div className='absolute inset-[-1.16%_-0.36%_-1.13%_-0.22%]'>
            <img alt='' className='block size-full max-w-none' src={img3} />
          </div>
        </div>
      </div>

      {/* Invisible clickable areas for mode selection */}
      <a
        className='absolute left-[20px] top-[653px] block h-[25px] w-[106px] cursor-pointer'
        data-node-id='4:1076'
        onClick={() => handleModeClick('short break')}
      />
      <a
        className='absolute left-[calc(50%+83px)] top-[653px] block h-[25px] w-[106px] cursor-pointer'
        data-node-id='4:1077'
        onClick={() => handleModeClick('long break')}
      />
      {/* <div className="absolute left-1/2 block h-full w-[1px] cursor-pointer border border-red-500"></div>
      <div className="absolute left-1/4 block h-full w-[1px] cursor-pointer border border-red-500"></div>
      <div className="absolute left-3/4 block h-full w-[1px] cursor-pointer border border-red-500"></div>
      <div className="z-100 flex h-5 border">
        <div className="w-1/2">1</div>
        <div className="w-1/2 border border-red-500">22222222</div>
      </div> */}
      {/* <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 border border-red-500"></div> */}
    </div>
  );
}

export default App;
