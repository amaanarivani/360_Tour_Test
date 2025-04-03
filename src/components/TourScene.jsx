import React from "react";
import ReactPannellum from "react-pannellum";

const TourScene = ({ tourScene, singleTour }) => {
  console.log(tourScene, "tourScene");
  console.log(singleTour, "singleTour");
  console.log(
    `${process.env.REACT_APP_BUCKET_URL}/images/tours/user-${singleTour?.user_id}/tour-${singleTour._id}/scenes/compressed/${tourScene[0]?.originalscene}`
  );

  return (
    <div style={{ width: "100%", height: "970px" }}>
      {tourScene && singleTour?.user_id && singleTour._id ? (
        <>
          <ReactPannellum
            id="pano"
            sceneId={1}
            imageSource={`${process.env.REACT_APP_BUCKET_URL}/images/tours/user-${singleTour?.user_id}/tour-${singleTour._id}/scenes/compressed/${tourScene[0]?.originalscene}`}
            // imageSource={tourScene[0]?.scene}
            // imageSource="img360.jpeg"
            style={{ width: "100%", height: "100%" }}
            config={{
              showControls: true,
              autoLoad: true,
              autoRotate: -5,
            }}
          />
        </>
      ) : (
        <>
          <div className="flex justify-center">
            <img
              src="https://cdn.pixabay.com/animation/2023/05/02/04/29/04-29-06-428_512.gif"
              alt=""
              className="w-[200px] mt-[25%]"
            />
          </div>
        </>
      )}

      {/* Navigation Buttons */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button
          // onClick={() => changeScene(sceneIndex - 1)}
          className={`px-5 py-2 bg-gray-800 text-white rounded cursor-pointer 
          `}
          // className={`px-5 py-2 bg-gray-800 text-white rounded cursor-pointer bg-slate-200
          //   ${sceneIndex === 0 ? `bg-slate-200` : ``}
          // `}
          // disabled={sceneIndex === 0}
        >
          <i className="fa-solid fa-angles-left fa-xl"></i>
        </button>
        <button
          // onClick={() => changeScene(sceneIndex + 1)}
          className={`px-5 py-2 bg-gray-800 text-white rounded cursor-pointer`}
          // className={`px-5 py-2 bg-gray-800 text-white rounded cursor-pointer ${
          //   sceneIndex === scenes.length - 1 ? `bg-slate-200` : ``
          // }`}
          // disabled={sceneIndex === scenes.length - 1}
        >
          <i className="fa-solid fa-angles-right fa-xl"></i>
        </button>
      </div>
    </div>
  );
};

export default TourScene;
