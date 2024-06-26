"use client";
import BehaviorPet from "../BehaviorPet/BehaviorPet";
import ButtonEmergency from "../ButtonEmergency/ButtonEmergency";
import CardUser from "../CardUser/CardUser";
import ConditionPet from "../ConditionPet/ConditionPet";
import DataPets from "../DataPets/DataPets";
import DiseasesPet from "../DiseasesPet/DiseasesPet";
import HistoryPet from "../HistoryPet/HistoryPet";
import MainImageWithCarousel from "../MainImageWithCarousel/MainImageWithCarousel";
import MainTitleCartAndButton from "../MainTitleCartAndButton/MainTitleCartAndButton";
import { useState } from "react";
import ModalDetails from "../ModalDetails/ModalDetails";

type Props = {
  namePetResponse: any;
};

export default function ContainAllDetails({ namePetResponse }: Props) {
  /* console.log(namePetResponse); */
  const [isOpen, setIsOpen] = useState<boolean>();
  const [idModal, setIdModal] = useState<string | null>(null);

  const {
    name,
    postToEnumBehavior,
    history,
    gender,
    age,
    province,
    photos,
    user,
    species,
    size,
    weight,
    postToDiseases,
    birthdate,
    postToHowDelivered,statusAdoption,activity
  } = namePetResponse;

  return (
    <div className="flex flex-col md:flex-row gap-x-8">
      <div className=" flex flex-col md:w-[40%]">
        <MainImageWithCarousel photos={photos} />
        <div className=" flex flex-col items-start w-full xl:w-[500px] mx-auto">
          <CardUser user={user} province={province.name} />
          <ButtonEmergency onClickModal={setIsOpen} setIdModal={setIdModal}>
            Denunciar caso
          </ButtonEmergency>
        </div>
      </div>
      <div className=" flex flex-col md:w-[60%]">
        <MainTitleCartAndButton
          name={name}
          province={province.name}
          location={"Argentina"}
        />
        <DataPets
          gender={gender}
          species={species.name}
          age={age}
          size={size}
          weight={weight}
          birthdate={birthdate}
          statusAdoption={statusAdoption}
          activity={activity}
        />
        <BehaviorPet postToEnumBehavior={postToEnumBehavior} />
        <DiseasesPet postToDiseases={postToDiseases} />
        <ConditionPet postToHowDelivered={postToHowDelivered} />
        <HistoryPet history={history} />
        <section className=" pt-5 w-fit mx-auto ">
          <button
            className=" w-full max-w-[620px] sm:w-fit text-violetGrow-700 text-xl font-semibold uppercase px-[15px] py-[10px] rounded-lg border-2 border-violetGrow-700 hover:transition-all hover:duration-300 hover:bg-violetGrow-700 hover:text-white"
            onClick={() => {
              setIsOpen(!isOpen), setIdModal("ModalConsulting");
            }}
          >
            Consultar adopcion
          </button>
        </section>
      </div>
      <ModalDetails
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        idModal={idModal}
        user={user}
      />
    </div>
  );
}
