import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Gridbox.module.scss'
import { Card } from 'widgets/Card/ui/Card'
//

interface GridboxProps {
    className?: string,
}

export const Gridbox = ({className}: GridboxProps) => {
  return (
    <div className={classNames(cls.gridbox, {}, [className])}>
        <Card 
            imagePath='https://raw.githubusercontent.com/TiCh0v/photos/main/car2.png'
            price={12300}
            ItemName='Forg Mustang GLE'
            miles={30000}
        />
        <Card 
            imagePath='https://raw.githubusercontent.com/TiCh0v/photos/main/car2.png'
            price={12300}
            ItemName='Forg Mustang GLE'
            miles={30000}
        />
        <Card 
            imagePath='https://raw.githubusercontent.com/TiCh0v/photos/main/car2.png'
            price={12300}
            ItemName='Forg Mustang GLE'
            miles={30000}
        />
        <Card 
            imagePath='https://raw.githubusercontent.com/TiCh0v/photos/main/car2.png'
            price={12300}
            ItemName='Forg Mustang GLE'
            miles={30000}
        />
    </div>
  )
}