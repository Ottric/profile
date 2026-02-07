import { createPartFromUri, GoogleGenAI } from "@google/genai";

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY! });
const sea_spreadsheetId = "1R3wdeEYZJc9VTkJhHPmbwucHLt3fjPGc-NoY8Vpw2Vc";
const keen_spreadsheetId = "1iBdJDTugA0QKXSSVCxJvEgqaGal-vHWenu8HhUFdUbk";

export async function GET(request: NextRequest) {
  const sea_uri = `https://docs.google.com/spreadsheets/d/${sea_spreadsheetId}/export?format=csv`;
  const keen_uri = `https://docs.google.com/spreadsheets/d/${keen_spreadsheetId}/export?format=pdf`;
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [
      createPartFromUri(sea_uri, "text/csv"),
      createPartFromUri(keen_uri, "application/pdf"),
      `คุณคือระบบสำหรับสรุปตารางงานของนักแสดง (schedule summarizer)

  อินพุต:
  - schedule 1: ตารางงานรูปแบบอีเวนต์ (มีข้อมูล DATE, TIME, SEA, NONGNOOONG, Open/Close, Type, EVENT, สถานที่, Hashtag, Gifts, Assembly Point, Summary Trend, Link)
  - schedule 2: ตารางกิจกรรม (มีข้อมูล Date, Time, Event, ARTIST, CATEGORY, Hashtag, Note, Link details)

  โจทย์:
  จงรวม (combine) ข้อมูลจาก schedule 1 และ schedule 2 ที่เป็นอีเวนต์เดียวกัน
  โดยพิจารณาจาก วันที่ + เวลา + ชื่อกิจกรรม เป็นหลัก
  และสรุปผลลัพธ์ออกมาเป็น JSON เท่านั้น

  เงื่อนไข:
  - ใช้โครงสร้าง JSON ตาม format ที่กำหนดด้านล่างเท่านั้น
  - ใช้ key เป็นภาษาอังกฤษแบบ camelCase
  - วันที่ใช้รูปแบบ YYYY-MM-DD
  - เวลาใช้รูปแบบ HH:MM (24 hours)
  - หากไม่มีข้อมูล ให้ใส่เป็น "" หรือ [] ตามประเภทข้อมูล
  - eventId สร้างเป็นรหัสไม่ซ้ำกัน
  - hashtag ต้องเป็น array ของ string โดยต้องไม่ตัดเครื่องหมาย # นำหน้า ถ้ามี
  - participants ระบุรายชื่อนักแสดงที่เข้าร่วมอีเวนต์นั้น
  - นักแสดงที่รองรับมี 2 คนเท่านั้น: SEA, KEEN
  - participants ต้องอ้างอิง artistId จาก artists
  - participants จะมี SEA เมื่อ SEA ในตาราง เป็น true
  - participants จะมี KEEN เมื่อ KEEN ใน ARTIST เช่น KEEN-NONG, KEENKENO
  - ห้ามมีข้อความอธิบายใด ๆ นอกเหนือจาก JSON

  รูปแบบคำตอบที่ต้องใช้:
  {
    "artists": [
      {
        "id": "sea",
        "name": "SEA"
      },
      {
        "id": "keen",
        "name": "KEEN"
      }
    ],
    "events": [
      {
        "eventId": "",
        "date": "",
        "time": {
          "start": "",
          "end": ""
        },
        "eventName": "",
        "category": "",
        "type": "",
        "openClose": "",
        "location": {
          "venue": "",
          "avenue": "",
          "assemblyPoint": ""
        },
        "activity": "",
        "giftsPolicy": "",
        "hashtag": [],
        "summaryTrend": "",
        "note": "",
        "links": {
          "main": "",
          "details": ""
        },
        "participants": []
      }
    ]
  }
  `,
    ],
  });

  if (!response.text) {
    return NextResponse.json({ error: "No response from AI model" }, { status: 500 });
  }

  const parse = JSON.parse(response.text.replace(/```json|```/g, "").trim());
  return NextResponse.json(parse);
}
