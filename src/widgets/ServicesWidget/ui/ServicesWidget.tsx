


import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { ServiceCard } from 'widgets/ServiceCard';
import cls from "./ServisesWidget.module.scss"
import { AppLink } from 'shared/ui/AppLink/AppLink';
import axios from 'axios'
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ServiceDetail {
    title: string,
    description: string,
    imageUrl: string
}



export const ServicesWidget = ({ className }: { className?: string }) => {
    const { serviceType } = useParams<{ serviceType?: string }>();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
    const [servicesData, setServicesData] = useState(null)

    

    
    useEffect(() => {
        fetchData().then(data => {
            setServicesData(data);
            if (serviceType && data[serviceType]) {
                setSelectedService(data[serviceType]);
            }
        });
    }, [serviceType]);

    const fetchData = async () => {
        try {
            const response = await axios.get("https://raw.githubusercontent.com/TiCh0v/photos/main/servicesData.json");
            console.log(response.data)
            return response.data;  
        } catch (error) {
            console.error("Failed to fetch services data:", error);
            return null;
        }
    }
    

    const handleCardClick = (type: string) => {
        if (servicesData && servicesData[type]) {
            if (location.pathname === '/') {
                navigate(`/services/${type}`);
            } else {
                setSelectedService(servicesData[type]);
            }
        }
    };

    const renderServiceDetail = () => {
        if (!selectedService) return null;

        return (
            <>
                <h1>{selectedService.title}</h1>
                <div className={classNames(cls.service, {}, [className])}>

                    <img  
                        src={selectedService.imageUrl} 
                        alt={selectedService.title}
                    />
                    <div className={classNames(cls.serviseInfo, {}, [className])}>
                        <p 
                            className={classNames(cls.description, {}, [className])}
                        >
                                {selectedService.description}
                        </p>
                        <Button 
                            onClick={() => setSelectedService(null)}
                            theme={ThemeButton.BLACK}
                        >
                            Back
                        </Button>
                    </div>
                </div>
            </>
        );
    };

    const renderServiceCards = () => {
        if (!servicesData) {
            // Показываем индикатор загрузки или сообщение пользователю
            return <div>Loading services data...</div>;
        }
    
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



// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import { classNames } from 'shared/lib/classNames/classNames';
// import { ServiceCard } from 'widgets/ServiceCard';
// import cls from "./ServisesWidget.module.scss"
// import { AppLink } from 'shared/ui/AppLink/AppLink';
// import axios from 'axios'


// interface ServiceDetail {
//     title: string,
//     description: string,
//     imageUrl: string
// }

// const servicesData: Record<string, ServiceDetail> = {
//     shipping: {
//         title: "Shipping",
//         description: "",
//         imageUrl: "https://raw.githubusercontent.com/TiCh0v/photos/main/track.png"
//     },
//     warranty: {
//         title: "Warranty Service",
//         description: ".",
//         imageUrl: "https://raw.githubusercontent.com/TiCh0v/photos/main/worker.png"
//     },
//     financing: {
//         title: "Financing",
//         description: "",
//         imageUrl: "https://raw.githubusercontent.com/TiCh0v/photos/main/money.png"
//     }
// };

// export const ServicesWidget = ({ className }: { className?: string }) => {
//     const { serviceType } = useParams<{ serviceType?: string }>();
//     const navigate = useNavigate();
//     const location = useLocation();
//     const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

    
//     useEffect(() => {
//         fetchData()
//         if (serviceType && servicesData[serviceType]) {
//             setSelectedService(servicesData[serviceType]);
//         }
//     }, [serviceType]);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get("https://raw.githubusercontent.com/TiCh0v/photos/main/servicesData.json");
//             console.log(response.data)
//             return response.data;  
//         } catch (error) {
//             console.error("Failed to fetch services data:", error);
//             return null;
//         }
//     }
    

//     const handleCardClick = (type: keyof typeof servicesData) => {
//         if (location.pathname === '/') {
//             navigate(`/services/${type}`);
//         } else {
//             setSelectedService(servicesData[type]);
//         }
//     };

//     const renderServiceDetail = () => {
//         if (!selectedService) return null;

//         return (
//             <>
//                 <h1>{selectedService.title}</h1>
//                 <div className={classNames(cls.service, {}, [className])}>

//                     <img src={selectedService.imageUrl} alt={selectedService.title} />
//                     <div className={classNames(cls.serviseInfo, {}, [className])}>
//                         <p>{selectedService.description}</p>
//                         <button onClick={() => setSelectedService(null)}>Back</button>
//                     </div>
//                 </div>
//             </>
//         );
//     };

//     const renderServiceCards = () => {
//         return (
//             <>
//                 <div className={classNames(cls.services, {}, [className])}>
//                     <AppLink to={'/services'}>
//                         <h1>
//                             Services
//                         </h1>
//                     </AppLink>
        
//                 </div>
//                 <div className={classNames(cls.cards, {}, [className])}>
//                     <ServiceCard
//                         description='01/SHIPPING'
//                         imagePath={servicesData.shipping.imageUrl}
//                         onClick={() => handleCardClick('shipping')}
//                     />
//                     <ServiceCard
//                         description='02/WARRANTY SERVICE'
//                         imagePath={servicesData.warranty.imageUrl}
//                         onClick={() => handleCardClick('warranty')}
//                     />
//                     <ServiceCard
//                         description='03/FINANCING'
//                         imagePath={servicesData.financing.imageUrl}
//                         onClick={() => handleCardClick('financing')}
//                     />
//                 </div>
//             </>
//         );
//     };

//     return selectedService ? renderServiceDetail() : renderServiceCards();
// };


