import React from "react"
import Image from "next/image"
import Stack from "@mui/material/Stack"

const VectorDisplay = () => {
  return (
    <Stack className="bg-deep-blue justify-center items-center w-[922px] rounded-r">
      <Image
        src={"/budget-vector.png"}
        alt="Budget Vector"
        width={750}
        height={300}
      />
    </Stack>
  )
}

export default VectorDisplay
