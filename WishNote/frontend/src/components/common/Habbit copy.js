import React, { useState } from "react";
import { Radar } from "@nivo/radar";
import axios from 'axios';


const data = [
  {
    habit: "hobby",
    count: 0,
  },
  {
    habit: "relationship",
    count: 0,
  },
  {
    habit: "performance",
    count: 58,
  },
  {
    habit: "asset",
    count: 48,
  },
  {
    habit: "health",
    count: 83,
  },
];



const Habbit = () => {

  return (
    <>
    <Radar
      width={500}
      height={500}
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      data={data}
      keys={["count"]}
      indexBy="habbit"
      colors={["#ddcb38", "@2b70e2"]}
      dotSize={30}
      enableDotLabel={true}
      dotLabelYOffset={4}
      gridShape="linear"
    />
    </>
  );
};

export default Habbit;
