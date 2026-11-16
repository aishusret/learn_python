// ============================================================
//  GAS CONFIG — paste your GAS Web App URL here after Step 11
//  Never paste this URL anywhere else in the project
// ============================================================

const GAS_URL = "https://script.google.com/macros/s/AKfycbyiJVOUBH29Pw6EBVo-s_MKu0TaXHVFiLEAn8Ku9UNFu0bIxMP4yUUgflvZHYGsHxg/exec";

// Local testing only: `VITE_GAS_URL=http://localhost:8787 npx vite` points the
// app at a stand-in backend instead. Builds for GitHub Pages never set it.
export default import.meta.env.VITE_GAS_URL || GAS_URL;
