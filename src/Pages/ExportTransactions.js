import React, { useState } from "react";

const ExportTransactions = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");

  const handleExportClick = async () => {
    // Construct the export URL with query parameters
    const exportURL = `http://localhost:3000/transactions/export?startDate=${startDate}&endDate=${endDate}&category=${category}&tags=${tags}`;

    try {
      // Make a GET request to fetch the CSV data from the backend
      const response = await fetch(exportURL);
      console.log(response);
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      // Read the CSV data from the response
      const blob = await response.blob();

      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create a temporary link element to trigger the download
      const a = document.createElement("a");
      a.href = url;
      a.download = "transactions.csv";

      // Trigger the click event on the link to initiate the download
      a.click();

      // Clean up by revoking the URL
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      // Handle any errors that occur during the fetch or download process
    }
  };

  return (
    <div>
      <h2>Export Transactions</h2>
      <label>
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <label>
        Tags (comma-separated):
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </label>
      <button onClick={handleExportClick}>Export Transactions</button>
    </div>
  );
};

export default ExportTransactions;
