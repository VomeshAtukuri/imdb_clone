"use client";

import { fetchData } from "@/utils/fetchcalls";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Tv() {
  const { tv } = useParams(); // Get the 'tv' parameter from the route
  const showName = decodeURIComponent(tv); // Decode the 'tv' parameter
  const [particularshow, setParticularshow] = useState(null);
  const [isloading, setLoading] = useState(true);

  async function fetchDetails() {
    try {
      setLoading(true);
      const data = await fetchData({ type: "search", query: showName });
      console.log("Fetched Data:", data); // Debugging log
      if (data.results && data.results.length > 0) {
        setParticularshow(data.results[0]);
      } else {
        setParticularshow(null);
      }
    } catch (err) {
      console.error("Error fetching TV show details:", err);
      setParticularshow(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDetails();
  }, [showName]);

  if (isloading) {
    return <div>Loading...</div>;
  }

  if (!particularshow) {
    return <div>No TV show found for "{showName}".</div>;
  }

  return (
    <div>
      <h1>{particularshow?.name || "Unnamed Show"}</h1>
      <p>{particularshow?.overview || "No overview available."}</p>
    </div>
  );
}
