import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Map.module.scss'

//

interface MapProps {
    className?: string,
}

export const Map = ({className}: MapProps) => {
  return (
    <div className={classNames(cls.map_block, {}, [className])}>
        <h1> Where to find us</h1>
        <div className={cls.map_block_contact}>
            <p className='phone'>+1 (701) 581-1331</p>
            <p className='adress'>161 Trumpeter Ave, Soldotna, Alaska</p>
        </div>
    </div>
  )
}