import { useLocation } from "react-router-dom";
import TourScene from "./TourScene";
import { useEffect, useState } from "react";
// import { Pannellum } from "react-pannellum";
import axios from "axios";

const SingleTour = () => {
  //   const [searchParams] = useSearchParams();
  //   const tour_id = searchParams.get("tour_id");
  const [singleTour, setSingleTour] = useState({ name: "" });
  const [singleScene, setSingleScene] = useState([]);

  // console.log(tour_id, "tour_id");

  useEffect(() => {
    getSingleTour();
  }, []);

  const getSingleTour = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/get-single-tour`,
        {
          tour_id: "67ca00be697c3259ab96d3f9",
          //   tour_id: tour_id,
        }
      );
      setSingleTour(res?.data?.data?.tourData);
      setSingleScene(res?.data?.data?.tourSceneData);
    } catch (error) {}
  };
  console.log(singleScene, "==-------single ssce");

  //   const location = useLocation();
  //   const singleTour = location.state; // Get data from state

  //   console.log(singleTour, "singleTour");

  return (
    <div>
      {singleScene && singleTour ? (
        <>
          <TourScene
            //   tourScene={singleTour?.tourScene}
            tourScene={singleScene}
            singleTour={singleTour}
          />
        </>
      ) : (
        <>Please wait...</>
      )}
    </div>
  );
};

export default SingleTour;
