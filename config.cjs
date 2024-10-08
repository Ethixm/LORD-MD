// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0E4ODYrNjVnNHdOSFA0UkZ3SFpDNytFc1dZTlRlcHhCK3NaRWhyOFAzQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM3lVTVZhQTlnMUUxakxhS0lLdEl2bDZVNmVITmxLUGE3SFhHOGVudlVtaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQUdONFdBb1pLUUJ3MWd1STZUTU5GYmJVSlBvOUhqT0NlRHJKTlh6eEdZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUK0NTVTgwdlZCYWs4d09YWkxLUU1NZ2dlTzVyaUtweml4MlRpT3NyNVNBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNCMkxsa0JxVkRjZTJvZFNPeHlkemNDaFR5MnFkSHVHUkE4R29KN2dTMDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpheUduOFVSMmtqN2MrU2FnNDZicEZ3Z2QybDF2NlYzWWJ6RzRydDRBbWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUY2Q2wxZjlVRVBJRlpaRStERWFTa1hnK3c5RnlFaE1oNXpXaTh4MmJrRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibFFHVUFGWlltYzN2RGIwMHcwZS9xWFZOblZ6VVBiNnorczNmUDZzSU4zYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNlZWt1YjVDN3BHQTRwSS9oazV4MFltY0RVQ0Y1TDJXQ2ZaZUg3YTdFTkt6R1VoeThjeUFqcUovdzI3OXNZWDBnQVRZVW1aZUlIVkkrbW0zWmlKSGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgwLCJhZHZTZWNyZXRLZXkiOiJKaGN4MC9kT0UrNnI4WmpnUWxvQ2dabDJmbjY0Y0VVZm93OFZnbi9PbzM0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJha2RNUjlJWFNHcV83LUI2Ujh1dzlnIiwicGhvbmVJZCI6IjMxNDc0OWIzLTRmODYtNDBjYS1iZjc4LTQ0MDAwMzg3NWJmOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJad05xV0NpNnV2TWxkNStYdmRMQlFaYTlrU0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieEFycWJDK1hnRjNHcXZCUWJhaVR2VTY0VWx3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpUODNIR1pCIiwibWUiOnsiaWQiOiI5NDc1OTMyOTAyMzo0MkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFAweE1zREVLVExsTGdHR0FrZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVkxRVk1CTTlyYVZrQWhGdnlOakZjYzFqeGxYVlNWaVk0Q1ZUbENkRFJobz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTldGNGppU095OTN2RUZMT3ZRbUszVWhPem9sNU9GRmRiTmt3di94M2UxWXVBWHEwTlVZL1JMNjNXS1h2YVpHN1c2ejk3bmhST01UbjhtOWgyQWN6Qmc9PSIsImRldmljZVNpZ25hdHVyZSI6IkI3Sk9MY3NDa0JUTWNKUVVNN255NUw0dlBMMmJ2eFByMStteVo3a2VoaTFqUGdsamxLc2dkQjRzSFVaV0lmL0RTMjdZZXltZXp6QmhiUDV3M0lwTmlnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTkzMjkwMjM6NDJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVlMwRlRBVFBhMmxaQUlSYjhqWXhYSE5ZOFpWMVVsWW1PQWxVNVFuUTBZYSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODM5MDU3NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFRFkifQ==",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : true,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "✪⏤͟͞★⃝ꪶ‎𝙻𝙾𝚁𝙳 𝙼𝙰𝙻𝚅𝙸𝙽𖥘✪͜͡➺",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "263780166288",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
