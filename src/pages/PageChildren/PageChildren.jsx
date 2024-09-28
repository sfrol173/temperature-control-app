import React, {useState} from "react";
import Temperature from "../../components/Temperature/Temperature";
import Controlers from "../../components/Controlers/Controlers";
import Weather from "../../compositions/Weather/Weather";
import ModalBase from "../../components/ModalBase/ModalBase";
import ModalTemperature from "../../compositions/ModalTemperature/ModalTemperature";
import Button from "../../components/Button/Button";
import WidgetWrapper from "../../compositions/WidgetWrapper/WidgetWrapper";



const PageChildren = () => {
    const [temperature, setTemperature] = useState(23);
    const [isModal, setIsModal] = useState(false);
    const [isModalTemperature, setIsModalTemperature] = useState(false);


    const hendleCloseModal = ()=> setIsModal(!isModal);
    const hendleCloseModalTemperature = () => setIsModalTemperature(!isModalTemperature);

    const handleTemperatureIncrease = () => {
        setTemperature((prevState) => {
            if(prevState < 25){
               return prevState + 1;
            }

            return prevState
        })
    }

    const handleTemperatureDecrease = () => {
        setTemperature((prevState) => {
            if(prevState > 16){
               return prevState - 1;
            }

            return prevState
        })
    }

    return (
        <>
            <Controlers 
                onModal={hendleCloseModal}
                onModalTemperature={hendleCloseModalTemperature}
                onHot={handleTemperatureIncrease}
                onCold={handleTemperatureDecrease}
            />

            <Temperature temperature={temperature}/>
            <Weather />
            <ModalBase 
                isOpen={isModal} 
                onClose={hendleCloseModal}
            />
            <ModalTemperature  
                isOpen={isModalTemperature} 
                onClose={hendleCloseModalTemperature} 
                temperature={temperature}
            >
                <Button onClick={hendleCloseModalTemperature}>close</Button>
            </ModalTemperature>
        </>
    )
}

export default PageChildren