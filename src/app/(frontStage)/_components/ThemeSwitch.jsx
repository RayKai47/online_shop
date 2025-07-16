"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode, MdComputer } from 'react-icons/md'

const ThemeSwitch = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 確保組件已經掛載，避免 hydration 問題
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="theme_switch_container">
        <div className="theme_switch">
          <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="theme_switch_container">
      <div className="theme_switch">
        <MdDarkMode
          size={24}
          className={`icon ${theme === 'dark' ? 'theme_active' : ''}`}
          onClick={() => setTheme("dark")}
          title="深色模式"
        />
        <MdLightMode
          size={24}
          className={`icon ${theme === 'light' ? 'theme_active' : ''}`}
          onClick={() => setTheme("light")}
          title="淺色模式"
        />
        <MdComputer
          size={24}
          className={`icon ${theme === 'system' ? 'theme_active' : ''}`}
          onClick={() => setTheme("system")}
          title="系統模式"
        />
      </div>
      {/* 除錯資訊 - 開發時可以顯示 */}
      {process.env.NODE_ENV === 'development' && (
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          當前主題: {theme} ({resolvedTheme})
        </div>
      )}
    </div>
  )
}

export default ThemeSwitch