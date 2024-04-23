import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Flipper.module.scss'
import {useState, useRef} from 'react';

//

interface FlipperProps {
    className?: string,
    question: string,
    answer: string
}

export const Flipper = ({className, question, answer}: FlipperProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
      if (contentRef.current) {
        contentRef.current.style.maxHeight = isOpen ? '0' : `${contentRef.current.scrollHeight}px`;
      }
    };
    return (
        <div className={classNames(cls.container, {}, [className])}>
            <div className={classNames(cls.header, {}, [className])} onClick={toggleAccordion}>
            {question}
            <span className={classNames(cls.icon, {}, [className])}>+</span>
            </div>
            <div ref={contentRef} className={classNames(cls.content, {}, [className])}>
            <p>{answer}</p>
            </div>
        </div>
    )
}