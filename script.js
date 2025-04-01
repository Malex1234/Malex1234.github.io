const backendURL = "https://malex1234-github-io.onrender.com/steam-market?item=AK-47 | Redline (Field-Tested)";

async function fetchMarketData() {
    try {
        let response = await fetch(backendURL);
        let data = await response.json();
        if (data.success) {
            document.getElementById("market-items").innerHTML = `
                <li>Item: AK-47 | Redline (Field-Tested)</li>
                <li>Lowest Price: ${data.lowest_price}</li>
                <li>Median Price: ${data.median_price}</li>
            `;
        } else {
            console.error("Failed to fetch data");
        }
    } catch (error) {
        console.error("Error fetching Steam Market data:", error);
    }
}

fetchMarketData();

