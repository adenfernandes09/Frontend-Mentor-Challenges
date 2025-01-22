import Button from "@mui/material/Button";

interface Props {
  label: number;
  selectRating:number,
  setSelectRating: (arg: number) => void 
}

const RatingsButton = ({ label, selectRating, setSelectRating }: Props) => {
  return (
    <Button
    onClick={() => {setSelectRating(label)}}
      sx={{
        backgroundColor: selectRating === label? '#fff': "#262E38",
        color: selectRating === label? "#262E38": '#969FAD',
        width: "3.1875rem",
        height: "3.1875rem",
        borderRadius: "50px",

        '&:hover': {
            backgroundColor: '#FC7614', color: '#262E38',
        }
      }}
    >
      {label}
    </Button>
  );
};

export default RatingsButton;
