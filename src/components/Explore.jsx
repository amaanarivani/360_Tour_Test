import ExploreCard from "./ExploreCard";

export default function Explore() {
  const tours = [
    {
      id: 1,
      title: "City Skyline",
      image:
        "https://img.freepik.com/free-photo/observation-urban-building-business-steel_1127-2397.jpg?t=st=1743664084~exp=1743667684~hmac=49af5e7fe3415237e67d8a40778a6d44202c1b2c63f2bb0160637cab871e4a36&w=996",
      tourScene: [
        {
          id: 1,
          scene: "/city-skyline2.jpg",
        },
        {
          id: 2,
          scene: "/city-skyline1.jpg",
        },
      ],
    },
    {
      id: 2,
      title: "Beach Sunset",
      image:
        "https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg?t=st=1743664154~exp=1743667754~hmac=b7d1971152b80a5a250adeabc963eab2f40475bdc81f8388f5fe79a402f448b8&w=996",
      tourScene: [
        {
          id: 1,
          scene: "/beach-sunset2.jpg",
        },
        {
          id: 2,
          scene: "/beach-sunset1.jpg",
        },
      ],
    },
    {
      id: 3,
      title: "Mountain View",
      image:
        "https://img.freepik.com/free-photo/beautiful-shot-grassy-hills-covered-trees-near-mountains-dolomites-italy_181624-24400.jpg?t=st=1743664009~exp=1743667609~hmac=51ff78ec9b3e66cf9e7c984d659a95a43f938f33ca390f1df17c61fb82cffeb9&w=996",
      tourScene: [
        {
          id: 1,
          scene: "/mountain1.jpg",
        },
        {
          id: 2,
          scene: "/mountain2.jpg",
        },
        {
          id: 3,
          scene: "/mountain3.jpg",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <header className="text-center py-12">
        <h1 className="text-5xl font-bold">Explore 360° Virtual Tours</h1>
        <p className="text-lg text-gray-400 mt-4">
          Immerse yourself in breathtaking views from around the world.
        </p>
      </header>

      <div>
        <ExploreCard tours={tours} />
      </div>
    </div>
  );
}
