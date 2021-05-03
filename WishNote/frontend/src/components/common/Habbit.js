import React from "react";
import { Radar } from "@nivo/radar";

const data = [
  {
    taste: "fruity",
    chardonay: 102,
    carmenere: 70,
    syrah: 38,
  },
  {
    taste: "bitter",
    chardonay: 58,
    carmenere: 111,
    syrah: 22,
  },
  {
    taste: "heavy",
    chardonay: 70,
    carmenere: 66,
    syrah: 45,
  },
  {
    taste: "sunny",
    chardonay: 48,
    carmenere: 59,
    syrah: 93,
  },
  {
    taste: "sweety",
    chardonay: 83,
    carmenere: 41,
    syrah: 37,
  },
];

const Habbit = () => {
  return (
    <Radar
      width={500}
      height={500}
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      data={data}
      //keys={["chardonay", "carmenere", "syrah"]}
      keys={["chardonay"]}
      indexBy="taste"
      //keys={["chardonay", "carmenere"]}
      colors={["#ddcb38", "@2b70e2"]}
      dotSize={30}
      enableDotLabel={true}
      dotLabelYOffset={4}
      gridShape="linear"
      // maxValue="auto"
      // curve="linearClosed"
      // borderWidth={2}
      // borderColor={{ from: "color" }}
      // gridLevel={5}
      // gridShape="circular"
      // gridLabelOffset={36}
      // enableDots={true}
      // dotSize={10}
      // dotColor={{ theme: "background" }}
      // dotBorderWidth={2}
      // dotBorderColor={{ from: "color" }}
      // enableDotLabel={true}
      // dotLabel="value"
      // dotLabelYOffset={-12}
      // colors={{ scheme: "nivo" }}
      // fillOpacity={0.25}
      // blendMode="multiply"
      // animate={true}
      // motionConfig="wobbly"
      // isInteractive={true}
      // legends={[
      //   {
      //     anchor: "top-left",
      //     direction: "column",
      //     translateX: -50,
      //     translateY: -40,
      //     itemWidth: 80,
      //     itemHeight: 20,
      //     itemTextColor: "#999",
      //     symbolSize: 12,
      //     symbolShape: "circle",
      //     effects: [
      //       {
      //         on: "hover",
      //         style: {
      //           itemTextColor: "#000",
      //         },
      //       },
      //     ],
      //   },
      // ]}
    />
  );
};

export default Habbit;
