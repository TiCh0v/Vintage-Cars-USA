import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Promo.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

//

interface PromoProps {
    className?: string,
}

export const Promo = ({className}: PromoProps) => {
  return (
    <div className={classNames(cls.promo, {}, [className])}>
        <div className={classNames(cls.header, {}, [className])}>
            Retro cars 1960-1970
        </div>
        <div className={classNames(cls.offer, {}, [className])}>
            <p className={classNames(cls.description, {}, [className])}>
                Vintage retro cars in USA
            </p>
            <Button
                className={classNames(cls.button, {}, [className])}
                theme={ThemeButton.WHITE}
            >
                find a car
            </Button>
        </div>
    </div>
  )
}