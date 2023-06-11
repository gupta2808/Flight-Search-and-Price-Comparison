const express = require("express")
const router = express.Router();
var FlightDetails=[
    {
        Date : "10 june 2023",
        Source:"dubai",
        Destination:"india",
        price : {
            vistara : "₹10083",
            indogo : "₹8492", 
            AirAsia : "₹10202"
        }
    },
    {
        Date : "09 june 2023",
        Source:"goa",
        Destination:"mumbai",
        price : {
            vistara : "₹5083",
            indogo : "₹3492", 
            AirAsia : "₹8202"
        }
    },
    {
        Date : "15 june 2023",
        Source:"delhi",
        Destination:"newyork",
        price : {
            vistara : "₹90083",
            indogo : "₹58492", 
            AirAsia : "₹110202"
        }
    },
    {
        Date : "13 june 2023",
        Source:"delhi",
        Destination:"mumbai",
        price : {
            vistara : "₹6083",
            indogo : "₹4292", 
            AirAsia : "₹8202"
        }
    },
    {
        Date : "14 june 2023",
        Source:"delhi",
        Destination:"goa",
        price : {
            vistara : "₹6483",
            indogo : "₹4492", 
            AirAsia : "₹10202"
        }
    }
]
router.post('/getFlights',(req,res)=>{
var searchedFlight=[]
FlightDetails.forEach(element=>{
        if((element.Source == req.query.Source && element.Destination==req.query.Destination) && (element.Date == req.query.Date )){
            searchedFlight.push(element.price)
        }
    })  
    res.status(200).json(searchedFlight)
})
module.exports = router;