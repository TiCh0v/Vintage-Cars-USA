import { classNames } from 'shared/lib/classNames/classNames'
import cls from './About.module.scss'

//

interface AboutProps {
    className?: string,
}

export const About = ({className}: AboutProps) => {
  return (
    <>
        <div className={classNames(cls.about_header, {}, [className])}>
            <p className={classNames(cls.about_title, {}, [className])}> About us in numbers</p>
            <p className={classNames(cls.about_text, {}, [className])}>From acquisition to restoration, we specialize in iconic automobiles, ensuring each drive is a celebration of timeless style. Elevate your journey with our passion for preserving automotive heritage.</p>
        </div>
        <div className={classNames(cls.circle_container, {}, [className])}>
            <div className={classNames(cls.circle, {}, [className])}>
                <p className={classNames(cls.main_number, {}, [className])}>
                    32
                </p>
                <p className={classNames(cls.secondary_text, {}, [className])}>
                    Retro car
                </p>
            </div>
            <div className={classNames(cls.circle, {}, [className])}>
                <p className={classNames(cls.main_number, {}, [className])}>
                    400
                </p>
                <p className={classNames(cls.secondary_text, {}, [className])}>
                    Satisfied clients
                </p>
            </div>
            <div className={classNames(cls.circle, {}, [className])}>
                <p className={classNames(cls.main_number, {}, [className])}>
                    5
                </p>
                <p className={classNames(cls.secondary_text, {}, [className])}>
                    Years in buisness
                </p>
            </div>
        </div>
        <div className={classNames(cls.black_car, {}, [className])}>
            <img src="https://raw.githubusercontent.com/TiCh0v/photos/main/retro-car.png" alt="car" />
        </div>

    </>
  )
}