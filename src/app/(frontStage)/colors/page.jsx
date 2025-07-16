import React from 'react'

const ColorsPage = () => {
  // 定義顏色階層
  const colorShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  
  // 顏色配置
  const colorConfigs = [
    {
      name: 'Primary',
      prefix: 'primary',
      textColor: (shade) => shade <= 500 ? 'text-black' : 'text-white'
    },
    {
      name: 'Secondary', 
      prefix: 'secondary',
      textColor: (shade) => shade <= 500 ? 'text-black' : 'text-white'
    }
  ];

  // 點綴色配置
  const accentColors = [
    {
      name: 'DJ Neon',
      color: 'dj-neon',
      textColor: 'text-white'
    },
    {
      name: 'DJ Dark',
      color: 'dj-dark',
      textColor: 'text-white'
    },
    {
      name: 'DJ Electric',
      color: 'dj-electric',
      textColor: 'text-black'
    },
    {
      name: 'DJ Pink',
      color: 'dj-pink',
      textColor: 'text-white'
    }
  ];

  return (
    <>
      <div className="mt-20">
        <h1 className="text-center text-4xl font-bold">Colors</h1>    
      </div>
      <div className="mt-10 w-full flex flex-col gap-10">
        {colorConfigs.map((config) => (
          <div key={config.prefix} className="mx-auto w-[90%] flex gap-4">
            {colorShades.map((shade) => (
              <div 
                key={`${config.prefix}-${shade}`}
                className={`h-100 w-full flex-shrink ${config.textColor(shade)} bg-${config.prefix}-${shade} relative`}
              >
                <p className="text-center left-[50%] bottom-5 translate-x-[-50%] absolute">
                  {config.name} {shade}
                </p>
              </div>
            ))}
          </div>
        ))}
        
        {/* 點綴色展示 */}
        <div className="mx-auto w-[90%] flex gap-4">
          {accentColors.map((accent) => (
            <div 
              key={accent.color}
              className={`h-100 w-full flex-shrink ${accent.textColor} bg-${accent.color} relative`}
            >
              <p className="text-center left-[50%] bottom-5 translate-x-[-50%] absolute">
                {accent.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ColorsPage