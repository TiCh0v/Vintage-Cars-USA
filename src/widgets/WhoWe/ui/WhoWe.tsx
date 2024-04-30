import { classNames } from 'shared/lib/classNames/classNames'
import cls from './WhoWe.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

//

interface WhoWeProps {
    className?: string,
}

export const WhoWe = ({className}: WhoWeProps) => {
  return (
    <div className={classNames(cls.whowe, {}, [className])}>
        <div className={cls.block}>
            <div className={cls.titleblock}>
                <h1>Who are we?</h1>
                <div className={cls.height}></div>
                <Button theme={ThemeButton.BLACK}>Read reviews</Button>
            </div>
            <p className={cls.whotext}>
                1966 Chevrolet Chevelle SS – STK 2801 The 1966 Chevelle SS396 captivated onlookers with its striking appearance. The revamped Fisher body ushered in a new era for the mid-size Chevy, establishing it as a performance icon. In this iteration, the SS396 evolved into a distinct model within the Chevelle lineup, showcasing numerous styling upgrades and an unwavering focus on performance. This ‘138’ code Chevelle SS396 underwent an impressive frame-off restoration in 2013, emerging as a visual masterpiece. A professional application of Bolero Red paint revitalized the exterior, complemented by a meticulous restoration of the interior in original red vinyl. Every authentic detail, including the Muncie ‘hypodermic’ shifter, was thoughtfully recreated. The cabin features a complete set of SunPro gauges alongside a column-mounted tachometer, tinted windows, and an aftermarket AM/FM/cassette stereo system. Under the hood, the original 396ci ‘Rat’ powerplant gave way to a robust 427ci big-block. This powerhouse, meticulously rebuilt, boasts an aluminum intake, dual-line Holley carburetor, and a street-savvy cam. Paired with a 4-speed manual transmission, the throaty exhaust note resonates with power. Trivia: A few years later, Don Yenko Chevrolet in Pittsburgh adopted a similar drivetrain package for their COPO Chevelles. GM Rally wheels with trim rings and centers embrace sturdy 15” BFG Radial T/A tires. Steering is managed manually, while power disc/drum brakes, a front sway bar, and HD shocks contribute to a balanced driving experience.
            </p>
        </div>
    </div>
  )
}