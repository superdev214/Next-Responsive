import React, { useState } from "react";
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { height } from "@mui/system";

// import Modal from "./Modal";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      border: "2px solid #f0eff1",
      boxShadow: "unset",
      width: "auto",
      margin: "30px 15px"
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {

      background: "#d9d9d9",
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center'
    },
    staffCard: {
      display: "flex"
    }
  }),
);

type Staff = {
  id: string;
  staffName: string;
  jobtitle: string;
  email: string;
};

type StaffProps = {
  Staff: StaffProps[];
};

export default function Staff({ }: StaffProps) {
  const classes = useStyles();
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const staff: Staff[] = [
    {
      id: "1",
      staffName: "Jhon Doe",
      jobtitle: "job Title",
      email: "johndoe@gmail.com",
    },
    {
      id: "2",
      staffName: "Jhon Doe",
      jobtitle: "job Title",
      email: "johndoe@gmail.com",
    },
  ];


  return (
    <>
      <div className="mb-20" style={{ color: 'black' }}>
        <div className="items-center justify-between pb-5 sm:flex">
          <div>
            <span className="pt-10">View staff members here</span>
          </div>
        </div>
        <hr />
        <div className={clsx("flex-col container mx-auto sm:flex-row" , classes.staffCard)}>
          {staff.map((staff) => (
            <Card className={clsx("flex-col w-full sm:flex-row",classes.root)} key={staff.id}>
              <CardMedia
                className={clsx("w-full h-[128px] sm:w-[128px] ",classes.cover)}
                title="Live from space album cover"
              >
                <ContactMailIcon style={{width:"100%"}}/>
              </CardMedia>
              <div className={clsx("text-center sm:text-left",classes.details) }>
                <CardContent className={classes.content}>
                  <Typography component="h6" variant="h6">
                    {staff.staffName}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {staff.jobtitle}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {staff.email}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </>
  );
}
