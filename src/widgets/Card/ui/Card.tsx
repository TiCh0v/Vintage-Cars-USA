import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Card.module.scss'
import { FC } from 'react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import carImage from './car1.png';  // Убедитесь, что путь точно соответствует расположению файла

//

interface CardProps {
    className?: string,
    imagePath: string,
    price: number,
    ItemName: string,
    miles: number

}

export const Card:FC<CardProps> = ({
    className,
    imagePath,
    price,
    ItemName,
    miles,
    ...otherProps
}) =>{


  return (
    <div className={classNames(cls.card, {}, [className])} style={{ backgroundImage: `url(${imagePath})` }}>
        <p className={classNames(cls.price, {}, [className])}>
            {price}$
        </p>
        
        
        <p className={classNames(cls.ItemName, {}, [className])}>
            {ItemName}
        </p>
        <div className={classNames(cls.button_container, {}, [className])}>
            <Button theme={ThemeButton.WHITE}>
                Rent
            </Button> 
            <div className={classNames(cls.miles, {}, [className])}>
                
                <Button theme={ThemeButton.MILES}>
                    {miles} miles
                </Button>
            </div>   
        </div>
    </div>
  )
}