/**
 * 3: Party time
 *
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 *
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */
import fetch from "node-fetch";

async function makeReservation() {
  const url = "https://reservation100-sandbox.mxapps.io/api/reservations";

  const body = {
    name: "Said",
    numberOfPeople: "3",
  };

  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();

  console.log(data.message);
}

makeReservation();
