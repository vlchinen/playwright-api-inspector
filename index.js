const { chromium } = require("playwright");
const fs = require("fs");


(async () => {

    const browser = await chromium.launch({
        headless: false
    });


    const page = await browser.newPage();


    const networkLogs = [];


    // Capture REQUEST
    page.on("request", request => {

        const data = {
            type: "request",
            url: request.url(),
            method: request.method(),
            headers: request.headers()
        };


        networkLogs.push(data);


        console.log("REQUEST:");
        console.log({
            url: request.url(),
            method: request.method()
        });

    });



    // Capture RESPONSE
    page.on("response", async response => {


        const request = response.request();


        const contentType = response.headers()["content-type"] || "";


        const log = {

            type: "response",

            url: response.url(),

            status: response.status(),

            method: request.method(),

            contentType

        };



        // chỉ lấy JSON API
        if(contentType.includes("application/json")){


            try {

                const body = await response.json();


                log.body = body;


                console.log("JSON RESPONSE:");

                console.log({

                    url: response.url(),

                    status: response.status(),

                    method: request.method()

                });


            }

            catch(error){

                log.body = "Unable to parse JSON";

            }


        }



        networkLogs.push(log);



        // Status check

        if(response.status() >= 400){

            console.log("FAILED RESPONSE:");

            console.log({

                url: response.url(),

                status: response.status()

            });

        }


    });



    // Open target website

    await page.goto(
        "https://dummyjson.com/products",
        {
            waitUntil: "networkidle"
        }
    );



    // wait for extra requests

    await page.waitForTimeout(5000);



    // create logs folder

    if(!fs.existsSync("./logs")){

        fs.mkdirSync("./logs");

    }



    // save result

    fs.writeFileSync(

        "./logs/network.json",

        JSON.stringify(
            networkLogs,
            null,
            2
        )

    );



    console.log(
        "Saved logs/network.json"
    );



    await browser.close();


})();