import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import IconButton from "@mui/material/IconButton"
import { useRouter } from "next/navigation"

const BackButton = () => {
  const router = useRouter()

  return (
    <IconButton
      color="primary"
      onClick={() => router.back()}
      sx={{
        width: 40,
        height: 40,
        borderRadius: "3px",
        border: "1px solid #A4A8AB",
        backgroundColor: "common.white",
      }}
    >
      <ArrowBackIcon sx={{ fontSize: 16, color: "#495057" }} />
    </IconButton>
  )
}

export default BackButton
