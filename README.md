# นิเทศดี — ระบบศึกษานิเทศก์

เว็บ Vite พร้อม API บน Node.js สำหรับขอบเขตใน `tor.md` ใช้ข้อมูลตัวอย่างเพื่อสาธิตหน้าจอและการทำงาน

## เริ่มใช้งาน

1. ติดตั้ง Node.js 20.19+ หรือ 22.12+ และ dependencies ด้วย `npm.cmd install`
2. เปิด API ด้วย `npm.cmd run api` (พอร์ต 3001)
3. เปิดอีก terminal แล้วรัน `npm.cmd run dev` (เว็บพอร์ต 5173)
4. เข้า `http://localhost:5173` แล้วเลือกบทบาทเพื่อเริ่มใช้งาน

API เก็บข้อมูลที่แก้ไขไว้ใน `data/store.json` และไฟล์ที่นำเข้าไว้ใน `data/uploads/` (สูงสุด 25 MB ต่อไฟล์) หน้าเว็บเก็บสำเนารายการข้อมูลในเบราว์เซอร์ การสร้างรายงานเป็นการสังเคราะห์ตัวอย่างจากบันทึกการนิเทศในระบบ การเชื่อมต่อโมเดล AI จริงต้องมีผู้ให้บริการและ API key ซึ่ง TOR ยังไม่ได้ระบุ

## API ที่มี

- `GET /api/health` และ `GET/PUT /api/state`
- `GET/POST /api/:collection`
- `PATCH/DELETE /api/:collection/:id`
- `POST /api/reports/synthesize`
