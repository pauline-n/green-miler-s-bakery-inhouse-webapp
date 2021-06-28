import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// other components
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px",
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function Orders() {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader color="success">
        <h4 className={classes.cardTitleWhite}>Orders Page</h4>
        <p className={classes.cardCategoryWhite}>
          This page displays all the activities that the employees carried out.
        </p>
      </CardHeader>
      <CardBody>
        <Table
          tableHeaderColor="primary"
          tableHead={[
            "Customer ID",
            "Customer Name",
            "Item ordered",
            "Type",
            "Price",
            "Date of Order",
            "Number of orders",
            "Contact",
            "status",
          ]}
          tableData={[
            [
              "001",
              "Sharon",
              "Cake",
              "Birthday cake",
              "50,000/=",
              "02-12-2020",
              "5",
              "0783222555",
              "Pending",
            ],
            [
              "002",
              "Ron",
              "Cup Cakes",
              "A dozen cupcakes",
              "20,000/=",
              "12-12-2020",
              "2",
              "0787888555",
              "Delivered",
            ],
            [
              "003",
              "Mrs. Bosco",
              "Cookies",
              "Chocolate chip cookies",
              "30,000/=",
              "22-01-2021",
              "20",
              "0702322555",
              "Delivered",
            ],
            [
              "004",
              "Matovu Brian",
              "Cake -kids",
              "Birthday cake",
              "250,000/=",
              "05-02-2020",
              "50",
              "0757899555",
              "Partly paid",
            ],
            [
              "005",
              "Sharon",
              "Cake",
              "Wedding cake",
              "5,000,000/=",
              "17-12-2020",
              "1",
              "0783222555",
              "Paid but not delivered",
            ],
            [
              "006",
              "Rebebcca",
              "Cake",
              "Bridal Shower",
              "180,000/=",
              "14-10-2020",
              "7",
              "0702885555",
              "Delivered",
            ],
            [
              "007",
              "Samuel",
              "Cake",
              "Slices",
              "30,000/=",
              "04-04-2021",
              "56",
              "0797722555",
              "Pending",
            ],
          ]}
        />
      </CardBody>
    </Card>
  );
}
