import { classNames } from 'shared/lib/classNames/classNames'
import cls from './FAQ.module.scss'

import { Flipper } from 'shared/ui/Flipper'
import { Button } from 'shared/ui/Button/Button'

//

interface FAQProps {
    className?: string,
}

export const FAQ = ({className}: FAQProps) => {
  return (
    
    <div>
        <div className={classNames(cls.services, {}, [className])}>
            <h1>Services</h1>
          
        </div>
        <div className={classNames(cls.cards, {}, [className])}>
            <div className={classNames(cls.card, {}, [className])} style={{ backgroundImage: `url(https://raw.githubusercontent.com/TiCh0v/photos/main/track.png)` }}>
                <p className={classNames(cls.card_description, {}, [className])}>01/SHIPPING</p>
            </div>
            <div className={classNames(cls.card, {}, [className])} style={{ backgroundImage: `url(https://raw.githubusercontent.com/TiCh0v/photos/main/worker.png)` }}>
                <p className={classNames(cls.card_description, {}, [className])}>02/WARRIANTY SERVICE</p>
            </div>
            <div className={classNames(cls.card, {}, [className])} style={{ backgroundImage: `url(https://raw.githubusercontent.com/TiCh0v/photos/main/money.png)` }}>
                <p className={classNames(cls.card_description, {}, [className])}>03/FINANCING</p>
            </div>
        </div>
        <div className={classNames(cls.faq_block, {}, [className])}>
            <h1>FAQ</h1>
            <div className={classNames(cls.flipper_block, {}, [className])}>
                <Flipper 
                    question={"Do you offer financing options for purchasing classic cars?"} 
                    answer={"Yes, we offer flexible financing options tailored to suit your needs. Whether you're looking for traditional financing, leasing, or other arrangements, we work with reputable lenders to help you secure the best terms for your classic car purchase."}
                />
                <Flipper 
                    question={"Are the showcased cars fully restored or in original condition?"} 
                    answer={"Our showcased cars come in a variety of conditions, from fully restored to meticulously maintained originals. Each listing provides detailed information about the vehicle's condition, restoration history, and any modifications made, ensuring transparency and helping you make an informed decision."}
                />
                <Flipper 
                    question={"Do you assist with shipping for purchased classic cars?"} 
                    answer={"Absolutely! We understand the importance of safe and hassle-free shipping for your classic car purchase. We partner with trusted shipping companies specializing in classic car transportation to ensure your vehicle arrives at its destination securely and on time, whether it's across the country or internationally."}
                />
                <Flipper 
                    question={"Are your vintage cars certified or inspected for authenticity?"} 
                    answer={"Yes, authenticity and quality are paramount to us. Our vintage cars undergo rigorous inspections by experienced professionals to verify their authenticity, originality, and overall condition. Additionally, we provide documentation and certificates of authenticity for eligible vehicles, giving you peace of mind and confidence in your purchase."}
                />
                <Flipper 
                    question={"Can I request additional photos before purchasing?"} 
                    answer={"Yes, we welcome and encourage requests for more detailed photographs or videos of any vehicle in our inventory. Contact our team, and we'll arrange the necessary details for your peace of mind."}
                />
            </div>
        </div>
        <div className={classNames(cls.map_block, {}, [className])}>
            <h1> Where to find us</h1>
            <div className={classNames(cls.map_block_contact, {}, [className])}>
                <p className='phone'>+1 (701) 581-1331</p>
                <p className='adress'>161 Trumpeter Ave, Soldotna, Alaska</p>
                
                
            </div>
        </div>
    </div>
    
  )
}