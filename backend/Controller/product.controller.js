export const product = (req, res)=>{
    res.json({
        message: "Product Get Successfully",
        status:200,
        products:[
            {
                id: 1,
                name: "laptop",
                price:5000,
            },
            {
                id: 2,
                name: "mobile",
                price: 20000,
            },
        ],
    })
};

