const backendURL = "https://malex1234-github-io.onrender.com/steam-market";

async function fetchMarketData(itemName) {
    try {
        const response = await fetch(`${backendURL}?item=${encodeURIComponent(itemName)}`);
        if (!response.ok) {
            throw new Error("Failed to fetch data from backend");
        }
        const data = await response.json();
        console.log("✅ Received data:", data); // Debugging log

        // Display data on the webpage
        document.getElementById("market-price").innerText = `Median Price: ${data.median_price}`;
        document.getElementById("market-volume").innerText = `Volume: ${data.volume}`;
    } catch (error) {
        console.error("❌ Error fetching market data:", error);
        document.getElementById("market-price").innerText = "Error fetching price.";
        document.getElementById("market-volume").innerText = "";
    }
}

// Example usage
fetchMarketData("AK-47 | Redline (Field-Tested)");


