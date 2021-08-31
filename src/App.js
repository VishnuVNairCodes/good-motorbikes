import { useState } from "react";
import "./styles.css";

const dbMotorbikes = {
  touring: [
    {
      name: "Mahindra Mojo 300",
      description:
        "Perhaps the most underrated bike in India. With almost no vibrations, good low-end torque, decent top-speed, very good build-quality and an astonishing tank range of 600+ km, Mahindra Mojo can be considered the best all-round touring bike available in India right now. It is still a mystery why Mahindra doesn't market it enough! That also means number of service centers are less.",
      rating: "4.8 / 5"
    },
    {
      name: "RE Himalayan",
      description:
        "Despite every manufacturer trying to get hold of the Adventure Tourer market in India, the Royal Enfield Himalayan is still the only serious Adventure Tourer available under 4 lakh rupees. With every other manufacturer taking up an engine from their already available street bike, RE upped the game by building a long stroke engine solely for Adventure Touring. This also means that the sweet spot you can cruise in the Himalayan is lower at 80-90 kmph, but that doesn't seem to be a deal breaker since Indian roads are anyway not good enough for the 100+ kmph range. If Ladakh is your dream, the Himalayan is the one to go for. The brakes are little spongy though!",
      rating: "4.6 / 5"
    },
    {
      name: "Bajaj Dominar 400",
      description:
        "The Bajaj Dominar is the epitome of 'value for money'. This power cruiser offers a lot of features that even many costlier bikes don't offer. It has a better cruising speed than both the bikes above. The brakes are also great. It's a very refined bike, but not as refined as the Mojo or the Himalayan. Bajaj has ensured a very good service network and parts availability but the build quality is comparitively lower.",
      rating: "4.4 / 5"
    }
  ],
  street: [
    {
      name: "KTM Duke 390",
      description:
        "KTM disrupted the Indian market when it introduced the Duke series. The Duke 390 takes it to the next level. It is hands down the best street bike you can get in India under 4 lakhs and the competition isn't even close. KTM's collaboration with Bajaj means service network and parts availability are top notch.",
      rating: "5 / 5"
    },
    {
      name: "KTM Duke 250",
      description:
        "Another one from the KTM stable. I cannot help, but the Duke series is so good. If you want a street bike, but can't afford a 390, go for this one. Apart from the loss in engine displacement, you will miss out on some fancy features of the 390. But you will still have a pocket rocket in your garage if you opt to buy this one.",
      rating: "4.6 / 5"
    },
    {
      name: "BMW G310 R",
      description:
        "If the BMW badge lures you, the G310 R could be a tempting option. It's the cheapest BMW you could buy. But be prepared for the high priced spare parts if you break something. The seat of the G310 R is a special highlight. You will never get a more comfortable seat in a single cylinder bike.",
      rating: "4 / 5"
    }
  ],
  caferacer: [
    {
      name: "RE GT 650",
      description:
        "Before 2017, no Indian would have expected they could one day be able to afford a twin cylinder bike just for 3 lakhs. RE made that possible for us. The GT650 is such a fun bike to ride. And if you are going for a caferacer, the GT650 is the best you can get.",
      rating: "4.9 / 5"
    },
    {
      name: "Husqvarna Vitpilen 250",
      description:
        "Husqvarna is making interesting waves in the market. If you are after a caferacer and can't afford the GT650, consider buying the Vitpilen 250.",
      rating: "4.8 / 5"
    },
    {
      name: "Triumph Thruxton 1200 R",
      description: "If you want to splash the cash, go for the Thruxton",
      rating: "4.5 / 5"
    }
  ],
  commuter: [
    {
      name: "Hero Splendor",
      description:
        "The legendary Hero Splendor is the epitome of reliability. It's also a mileage king. Parts are readily available and are cheap.",
      rating: "5 / 5"
    },
    {
      name: "Honda Shine",
      description: "High reliability, very good mileage.",
      rating: "4.8 / 5"
    },
    {
      name: "Bajaj Platina",
      description: "Excellent mileage.",
      rating: "4.4 / 5"
    }
  ]
};

export default function App() {
  const [useCase, setUseCase] = useState("touring");
  function buttonClickHandler(useCase) {
    setUseCase(useCase);
  }
  const goodMotorbikes = Object.keys(dbMotorbikes);

  function getButtonBackground(bikeType) {
    if (bikeType === useCase) {
      return "#34D399";
    }
    return "white";
  }
  function getButtonTextColor(bikeType) {
    if (bikeType === useCase) {
      return "white";
    }
    return "#34D399";
  }

  return (
    <div className="App">
      <h1 style={{ margin: "3rem auto 1rem auto" }}> 🏍️ good motorbikes </h1>
      <p style={{ fontSize: "smaller", marginBottom: "2rem" }}>
        Check out my bike recommendations. Select your use case from the
        following :
      </p>

      <div style={{ marginBottom: "1rem" }}>
        {goodMotorbikes.map(function (bikeType) {
          return (
            <button
              style={{
                cursor: "pointer",
                color: getButtonTextColor(bikeType),
                background: getButtonBackground(bikeType),
                borderRadius: "0.5rem",
                padding: "0.5rem  1rem",
                border: "1px solid",
                borderColor: "#34D399",
                marginBottom: "0.5rem",
                marginRight: "0.5rem",
                fontSize: "1.1rem"
              }}
              onClick={() => buttonClickHandler(bikeType)}
            >
              {bikeType}
            </button>
          );
        })}
      </div>

      <hr />

      <div style={{ textAlign: "left", marginTop: "1rem" }}>
        <ul style={{ listStyle: "none" }}>
          {dbMotorbikes[useCase].map((bike) => (
            <li
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #34D399",
                width: "100%",
                borderRadius: "0.5rem",
                marginBottom: "0.5rem"
              }}
            >
              <div style={{ fontSize: "1.5rem" }}>{bike.name}</div>
              <div style={{ marginTop: "0.5rem" }}>{bike.description}</div>
              <div style={{ fontSize: "1.2rem", marginTop: "0.5rem" }}>
                {bike.rating}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
