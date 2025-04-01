const apiKey = "FBUVL3E5FXRVE1B6";
const itemName = "AK-47 | Redline (Field-Tested)"; // Example item
const steamMarketURL = `https://steamcommunity.com/market/priceoverview/?currency=1&appid=730&market_hash_name=${encodeURIComponent(itemName)}`;

async function fetchMarketData() {
    try {
        let response = await fetch(steamMarketURL);
        let data = await response.json();
        if (data.success) {
            document.getElementById("market-items").innerHTML = `
                <li>Item: ${itemName}</li>
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
