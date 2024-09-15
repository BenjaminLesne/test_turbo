"use server";

export default async function getInfo() {
    const res = await fetch('http://localhost:3001')

    const json = await res.json()

    return json
   
  }