const backendURL = "https://malex1234-github-io.onrender.com/steam-market";

async function fetchMarketData(itemName) {
    try {
        const response = await fetch(`${backendURL}?item=${encodeURIComponent(itemName)}`);
        if (!response.ok) {
            throw new Error("Failed to fetch data from backend");
        }
        const data = await response.json();
        console.log("✅ Received data:", data); // Debugging log

        const lowestPriceElement = document.getElementById("market-lowest");
        const highestBuyElement = document.getElementById("market-highest-buy");
        const priceElement = document.getElementById("market-price");
        const volumeElement = document.getElementById("market-volume");

        if (lowestPriceElement && highestBuyElement && priceElement && volumeElement) {
            lowestPriceElement.innerText = `Lowest Price: ${data.lowest_price || "N/A"}`;
            highestBuyElement.innerText = `Highest Buy Order: ${data.highest_buy_order || "N/A"}`;
            priceElement.innerText = `Median Price: ${data.median_price || "N/A"}`;
            volumeElement.innerText = `Volume Sold: ${data.volume || "N/A"}`;
        } else {
            console.error("❌ Missing HTML elements for displaying data.");
        }
    } catch (error) {
        console.error("❌ Error fetching market data:", error);
    }
}

// Example usage
fetchMarketData("AK-47 | Redline (Field-Tested)");
