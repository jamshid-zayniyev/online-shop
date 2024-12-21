import { Map, Placemark, YMaps } from "react-yandex-maps";
// import icon from "../../assets/images/map/icon.svg";
import { useEffect, useRef, useState } from "react";

const locations = [
  {
    coordinates: [41.33225402588255, 69.28470819645898], // Replace with your second location coordinates
    icon: '📌', // You can use the same icon or different ones
  },
  {
    coordinates: [41.30393990849618, 69.31630001695639], // Replace with your second location coordinates
    icon: '📌', // You can change this to a different icon if needed
  },
];

const Maps = () => {
  const [defaultCenter, setDefaultCenter] = useState({ center: [41.318724478710294, 69.29710075715855], zoom: 13 });

  const mapRef = useRef(null);

//   useEffect(() => {
//     if (location !== null) {
//       setDefaultCenter({ center: locations[location].coordinates, zoom: 16 });
//       if (mapRef.current) {
//         mapRef.current.setCenter(locations[location].coordinates, 16, { duration: 750 });
//       }
//     } else {
//       setDefaultCenter({ center: [41.318724478710294, 69.29710075715855], zoom: 13 });
//       if (mapRef.current) {
//         mapRef.current.setCenter([41.318724478710294, 69.29710075715855], 13, { duration: 750 });
//       }
//     }
//   }, [location]);

  return (
    <YMaps query={{ lang: "ru_RU" }}>
      <div className="w-full  min-h-[300px] h-full">
        <Map defaultState={defaultCenter} width="99%" height="100%" instanceRef={mapRef} >
          <Placemark
            geometry={locations[0].coordinates}
            options={{
              iconLayout: "default#image",
              iconImageHref: '📌',
              iconImageSize: [48, 60],
            }}
          />
          <Placemark
            geometry={locations[1].coordinates}
            options={{
              iconLayout: "default#image",
              iconImageHref: '📌',
              iconImageSize: [48, 60],
            }}
          />
        </Map>
      </div>
    </YMaps>
  );
};

export default Maps;