import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { ServiceCard } from 'widgets/ServiceCard';
import cls from "./ServisesWidget.module.scss"
import { AppLink } from 'shared/ui/AppLink/AppLink';



interface ServiceDetail {
    title: string,
    description: string,
    imageUrl: string
}

const servicesData: Record<string, ServiceDetail> = {
    shipping: {
        title: "Shipping",
        description: "Information about our shipping services. Information about our shipping services. Information about our shipping services. Information about our shipping services. Information about our shipping services.Information about our shipping services.Information about our shipping services. Information about our shipping services. Information about our shipping services.",
        imageUrl: "https://raw.githubusercontent.com/TiCh0v/photos/main/track.png"
    },
    warranty: {
        title: "Warranty Service",
        description: "Details on our warranty service offerings.",
        imageUrl: "https://raw.githubusercontent.com/TiCh0v/photos/main/worker.png"
    },
    financing: {
        title: "Financing",
        description: "Financing options available for our customers.",
        imageUrl: "https://raw.githubusercontent.com/TiCh0v/photos/main/money.png"
    }
};

export const ServicesWidget = ({ className }: { className?: string }) => {
    const { serviceType } = useParams<{ serviceType?: string }>();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

    
    useEffect(() => {
        if (serviceType && servicesData[serviceType]) {
            setSelectedService(servicesData[serviceType]);
        }
    }, [serviceType]);

    const handleCardClick = (type: keyof typeof servicesData) => {
        if (location.pathname === '/') {
            navigate(`/services/${type}`);
        } else {
            setSelectedService(servicesData[type]);
        }
    };

    const renderServiceDetail = () => {
        if (!selectedService) return null;

        return (
            <>
                <h1>{selectedService.title}</h1>
                <div className={classNames(cls.service, {}, [className])}>

                    <img src={selectedService.imageUrl} alt={selectedService.title} />
                    <div className={classNames(cls.serviseInfo, {}, [className])}>
                        <p>{selectedService.description}</p>
                        <button onClick={() => setSelectedService(null)}>Back</button>
                    </div>
                </div>
            </>
        );
    };

    const renderServiceCards = () => {
        return (
            <>
                <div className={classNames(cls.services, {}, [className])}>
                    <AppLink to={'/services'}>
                        <h1>
                            Services
                        </h1>
                    </AppLink>
        
                </div>
                <div className={classNames(cls.cards, {}, [className])}>
                    <ServiceCard
                        description='01/SHIPPING'
                        imagePath={servicesData.shipping.imageUrl}
                        onClick={() => handleCardClick('shipping')}
                    />
                    <ServiceCard
                        description='02/WARRANTY SERVICE'
                        imagePath={servicesData.warranty.imageUrl}
                        onClick={() => handleCardClick('warranty')}
                    />
                    <ServiceCard
                        description='03/FINANCING'
                        imagePath={servicesData.financing.imageUrl}
                        onClick={() => handleCardClick('financing')}
                    />
                </div>
            </>
        );
    };

    return selectedService ? renderServiceDetail() : renderServiceCards();
};



// import { classNames } from 'shared/lib/classNames/classNames'
// import cls from './ServisesWidget.module.scss'
// import { ServiceCard } from 'widgets/ServiceCard'
// import { AppLink } from 'shared/ui/AppLink/AppLink'

// import { useState, useEffect } from 'react'
// import { useLocation, useHistory, useParams } from 'react-router-dom';

// //

// interface ServicesWidgetProps {
//     className?: string,
// }

// interface ServiceDetail {
//     title: string,
//     description: string,
//     imageUrl: string
// }

// export const ServicesWidget = ({className}: ServicesWidgetProps) => {
//   return (
//     <>
//         <div className={classNames(cls.services, {}, [className])}>
//             <AppLink to={'/services'}>
//                 <h1>
//                     Services
//                 </h1>
//             </AppLink>
        
//         </div>
//         <div className={classNames(cls.cards, {}, [className])}>

//             <ServiceCard 
//                 description='01/SHIPPING'
//                 imagePath='https://raw.githubusercontent.com/TiCh0v/photos/main/track.png'
//             />
//             <ServiceCard 
//                 description='02/WARRIANTY SERVICE'
//                 imagePath='https://raw.githubusercontent.com/TiCh0v/photos/main/worker.png'
//             />
//             <ServiceCard 
//                 description='03/FINANCING'
//                 imagePath='https://raw.githubusercontent.com/TiCh0v/photos/main/money.png'
//             />  

//         </div>
//     </>
//   )
// }