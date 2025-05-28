import { useState, useEffect } from "react";
import { View } from "react-native";
import { ModalPlantIdentification } from "../../../components/Modals/ModalPlantIdentification";
import { usePlantInfo } from "../../../context/PlantInfoContext";
import { ModalPlantPlaceholder } from "../../../components/Splash/ModalPlantSplash";

export const GaleryScreen = () => {
    const { modalData, setModalData } = usePlantInfo();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (modalData) {
            setLoading(false);
            console.log('Modal data: ', modalData)
        }
    }, [modalData]);

    return(
        <>
            <View style={{padding: 10, top: 50, height: '80%'}}>
                {
                    loading ? (
                        
                        <ModalPlantPlaceholder />
                    ) : (

                        modalData && (
                            <ModalPlantIdentification modalData={modalData} setModalData={setModalData} />
                        )
                    )
                }
            </View>
        </>
    )
}