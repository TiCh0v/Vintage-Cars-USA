import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import React, {useState} from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
//
import { LangSwitcher } from 'shared/ui/LangSwitcher'

interface SidebarProps {
    className?: string,
}

export const Sidebar = ({className}: SidebarProps) => {

  const [colapsed, setColapsed] = useState(false);
  const onToggle = () =>{
    setColapsed(!colapsed)
  }
  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: colapsed}, [className])}>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
      <button onClick={onToggle}>toggle</button>
    </div>
  )
}