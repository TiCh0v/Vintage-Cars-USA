import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ServiceCard.module.scss'

//

interface ServiceCardProps {
    className?: string,
    description: string,
    imagePath: string,
    onClick?: () => void
}

export const ServiceCard = ({className, description, imagePath, onClick}: ServiceCardProps) => {
  return (
    <div 
        className={classNames(cls.card, {}, [className])}
        onClick={onClick}
        style={{ backgroundImage: `url(${imagePath})`}}
    >
        <p className={classNames(cls.card_description, {}, [className])}>{description}</p>
    </div>
  )
}