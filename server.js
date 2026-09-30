import { createServer } from 'node:http';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';

const root = dirname(fileURLToPath(import.meta.url));
const storePath = join(root, 'data', 'store.json');
const uploadsPath = join(root, 'data', 'uploads');
const port = Number(process.env.API_PORT || 3001);
const maxUploadBytes = 25 * 1024 * 1024;
const mimeTypes = { '.pdf':'application/pdf', '.doc':'application/msword', '.docx':'application/vnd.openxmlformats-officedocument.wordprocessingml.document', '.xls':'application/vnd.ms-excel', '.xlsx':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.png':'image/png' };

const initialState = {
  visits: [
    { id: 'v1', school: 'โรงเรียนบ้านแม่ขะจาน', project: 'พัฒนาการอ่านออกเขียนได้', visitDate: '2026-09-18', quarter: 'ไตรมาส 3/2569', inspector: 'ศน. พิมพ์ชนก', status: 'เสร็จสิ้น', result: 'ดำเนินงานได้ตามแผน', note: 'นักเรียนชั้น ป.2 อ่านคำพื้นฐานได้เพิ่มขึ้น มีการใช้แบบฝึกอ่านทุกวัน' },
    { id: 'v2', school: 'โรงเรียนวัดดอนแก้ว', project: 'ห้องเรียนคุณภาพ', visitDate: '2026-09-12', quarter: 'ไตรมาส 3/2569', inspector: 'ศน. ธนกร', status: 'เสร็จสิ้น', result: 'ควรติดตามต่อเนื่อง', note: 'ครูจัดมุมการเรียนรู้ครบทุกห้อง ควรเพิ่มกิจกรรมสะท้อนผลหลังเรียน' },
    { id: 'v3', school: 'โรงเรียนบ้านป่าตึง', project: 'พัฒนาการอ่านออกเขียนได้', visitDate: '2026-08-29', quarter: 'ไตรมาส 3/2569', inspector: 'ศน. พิมพ์ชนก', status: 'เสร็จสิ้น', result: 'ดำเนินงานได้ตามแผน', note: 'มีชุมชนการเรียนรู้ทางวิชาชีพและติดตามนักเรียนกลุ่มเสี่ยง' },
    { id: 'v4', school: 'โรงเรียนชุมชนสันกำแพง', project: 'ยกระดับผลสัมฤทธิ์ทางการเรียน', visitDate: '2026-07-21', quarter: 'ไตรมาส 3/2569', inspector: 'ศน. ธนกร', status: 'รอติดตาม', result: 'อยู่ระหว่างพัฒนา', note: 'อยู่ระหว่างจัดทำแผนพัฒนารายบุคคลสำหรับนักเรียนที่ต้องการความช่วยเหลือ' },
    { id: 'v5', school: 'โรงเรียนบ้านแม่ขะจาน', project: 'ห้องเรียนคุณภาพ', visitDate: '2026-06-17', quarter: 'ไตรมาส 2/2569', inspector: 'ศน. พิมพ์ชนก', status: 'เสร็จสิ้น', result: 'ดำเนินงานได้ตามแผน', note: 'จัดการเรียนรู้เชิงรุกและมีสื่อการเรียนรู้พร้อมใช้งาน' }
  ],
  documents: [
    { id: 'd1', name: 'แผนการนิเทศภาคเรียนที่ 1', category: 'แผนการนิเทศ', school: 'ทุกสถานศึกษา', updated: '18 ก.ย. 2569', type: 'PDF', size: '2.4 MB' },
    { id: 'd2', name: 'แบบบันทึกผลการนิเทศ', category: 'แบบฟอร์ม', school: 'ทุกสถานศึกษา', updated: '16 ก.ย. 2569', type: 'DOCX', size: '180 KB' },
    { id: 'd3', name: 'แนวทางพัฒนาการอ่านออกเขียนได้', category: 'เอกสารอ้างอิง', school: 'โรงเรียนบ้านแม่ขะจาน', updated: '14 ก.ย. 2569', type: 'PDF', size: '1.8 MB' },
    { id: 'd4', name: 'ภาพกิจกรรม PLC เดือนสิงหาคม', category: 'หลักฐานประกอบ', school: 'โรงเรียนบ้านป่าตึง', updated: '29 ส.ค. 2569', type: 'JPG', size: '3.1 MB' },
    { id: 'd5', name: 'สรุปผลการประเมินห้องเรียน', category: 'ผลการประเมิน', school: 'โรงเรียนวัดดอนแก้ว', updated: '25 ส.ค. 2569', type: 'XLSX', size: '640 KB' },
    { id: 'd6', name: 'คู่มือการจัดการเรียนรู้เชิงรุก', category: 'เอกสารอ้างอิง', school: 'ทุกสถานศึกษา', updated: '21 ส.ค. 2569', type: 'PDF', size: '4.2 MB' }
  ],
  reports: [
    { id: 'r1', title: 'รายงานผลการนิเทศ ไตรมาส 3/2569', quarter: 'ไตรมาส 3/2569', updated: '20 ก.ย. 2569', status: 'ฉบับร่าง', content: 'ภาพรวมการนิเทศไตรมาส 3/2569\n\nจากการนิเทศสถานศึกษา พบความก้าวหน้าด้านการพัฒนาการอ่านออกเขียนได้ และการจัดห้องเรียนคุณภาพ\n\nข้อเสนอแนะ\n1. ติดตามผลการดำเนินงานของโรงเรียนที่อยู่ระหว่างพัฒนา\n2. แลกเปลี่ยนแนวปฏิบัติที่ได้ผลระหว่างสถานศึกษา' }
  ],
  templates: [{ id: 't1', name: 'แม่แบบรายงานนิเทศมาตรฐาน', header: 'รายงานผลการนิเทศการศึกษา', organization: 'สำนักงานเขตพื้นที่การศึกษา', sections: 'บทสรุปผู้บริหาร, วัตถุประสงค์, ผลการนิเทศ, ข้อเสนอแนะ', updated: '10 ก.ย. 2569' }],
  users: [
    { id: 'u1', name: 'พิมพ์ชนก ใจดี', email: 'pimchanok@edu.local', role: 'ศึกษานิเทศก์', school: 'สำนักงานเขตพื้นที่ฯ', status: 'ใช้งาน', initials: 'พจ' },
    { id: 'u2', name: 'ธนกร วัฒนชัย', email: 'thanakorn@edu.local', role: 'ศึกษานิเทศก์', school: 'สำนักงานเขตพื้นที่ฯ', status: 'ใช้งาน', initials: 'ธว' },
    { id: 'u3', name: 'อรทัย แสงทอง', email: 'orathai@edu.local', role: 'ผู้ดูแลระบบ', school: 'สำนักงานเขตพื้นที่ฯ', status: 'ใช้งาน', initials: 'อส' },
    { id: 'u4', name: 'กิตติพงษ์ พูนผล', email: 'kittipong@edu.local', role: 'ศึกษานิเทศก์', school: 'สำนักงานเขตพื้นที่ฯ', status: 'ระงับ', initials: 'กพ' }
  ],
  schools: [
    { id: 's1', name: 'โรงเรียนบ้านแม่ขะจาน', district: 'อำเภอเวียงป่าเป้า', level: 'ประถมศึกษา', director: 'นายสมชาย วงศ์ดี', phone: '053-782-410', status: 'เปิดใช้งาน' },
    { id: 's2', name: 'โรงเรียนวัดดอนแก้ว', district: 'อำเภอเมือง', level: 'อนุบาล–ประถมศึกษา', director: 'นางสาวมาลี คำแก้ว', phone: '053-711-206', status: 'เปิดใช้งาน' },
    { id: 's3', name: 'โรงเรียนบ้านป่าตึง', district: 'อำเภอแม่สรวย', level: 'ประถมศึกษา', director: 'นายประจักษ์ อินทร์ใจ', phone: '053-786-519', status: 'เปิดใช้งาน' },
    { id: 's4', name: 'โรงเรียนชุมชนสันกำแพง', district: 'อำเภอสันกำแพง', level: 'ขยายโอกาส', director: 'นางจันทร์เพ็ญ ใจคำ', phone: '053-332-061', status: 'เปิดใช้งาน' },
    { id: 's5', name: 'โรงเรียนบ้านห้วยไคร้', district: 'อำเภอแม่สาย', level: 'ประถมศึกษา', director: 'นายสุรศักดิ์ ทองดี', phone: '053-733-209', status: 'เปิดใช้งาน' }
  ],
  projects: [
    { id: 'p1', name: 'พัฒนาการอ่านออกเขียนได้', owner: 'พิมพ์ชนก ใจดี', schools: 8, period: 'พ.ค.–ก.ย. 2569', status: 'กำลังดำเนินงาน' },
    { id: 'p2', name: 'ห้องเรียนคุณภาพ', owner: 'ธนกร วัฒนชัย', schools: 12, period: 'มิ.ย.–ต.ค. 2569', status: 'กำลังดำเนินงาน' },
    { id: 'p3', name: 'ยกระดับผลสัมฤทธิ์ทางการเรียน', owner: 'พิมพ์ชนก ใจดี', schools: 6, period: 'ก.ค.–พ.ย. 2569', status: 'กำลังดำเนินงาน' },
    { id: 'p4', name: 'ส่งเสริมการจัดการเรียนรู้เชิงรุก', owner: 'ยังไม่มอบหมาย', schools: 5, period: 'ส.ค.–ธ.ค. 2569', status: 'รอมอบหมาย' }
  ],
  references: [
    { id: 'ref1', name: 'คู่มือการนิเทศเพื่อพัฒนาคุณภาพการศึกษา', category: 'คู่มือ', year: '2569', source: 'กลุ่มนิเทศฯ', files: 1 },
    { id: 'ref2', name: 'มาตรฐานการศึกษาระดับการศึกษาขั้นพื้นฐาน', category: 'มาตรฐาน', year: '2568', source: 'สพฐ.', files: 1 },
    { id: 'ref3', name: 'แนวทางจัดการเรียนรู้เชิงรุก (Active Learning)', category: 'แนวทาง', year: '2569', source: 'กลุ่มนิเทศฯ', files: 2 },
    { id: 'ref4', name: 'แบบติดตามและประเมินผลโครงการ', category: 'แบบฟอร์ม', year: '2569', source: 'สำนักงานเขตพื้นที่ฯ', files: 1 }
  ],
  audit: [
    { id: 'a1', actor: 'อรทัย แสงทอง', action: 'ปรับปรุงข้อมูลสถานศึกษา', target: 'โรงเรียนบ้านห้วยไคร้', time: 'วันนี้ 09:42', result: 'สำเร็จ' },
    { id: 'a2', actor: 'พิมพ์ชนก ใจดี', action: 'บันทึกการนิเทศ', target: 'โรงเรียนบ้านแม่ขะจาน', time: 'วันนี้ 09:18', result: 'สำเร็จ' },
    { id: 'a3', actor: 'ธนกร วัฒนชัย', action: 'นำเข้าเอกสาร', target: 'ภาพกิจกรรม PLC เดือนสิงหาคม', time: 'เมื่อวาน 16:30', result: 'สำเร็จ' },
    { id: 'a4', actor: 'อรทัย แสงทอง', action: 'มอบหมายเจ้าของโครงการ', target: 'ห้องเรียนคุณภาพ', time: 'เมื่อวาน 14:05', result: 'สำเร็จ' },
    { id: 'a5', actor: 'กิตติพงษ์ พูนผล', action: 'เข้าสู่ระบบ', target: '—', time: '25 ก.ย. 2569 08:51', result: 'ปฏิเสธ' }
  ]
};

async function readState() {
  try {
    return { ...initialState, ...JSON.parse(await readFile(storePath, 'utf8')) };
  } catch {
    return structuredClone(initialState);
  }
}

async function writeState(state) {
  await mkdir(dirname(storePath), { recursive: true });
  await writeFile(storePath, JSON.stringify(state, null, 2), 'utf8');
}

function send(response, status, data) {
  response.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'access-control-allow-origin': '*' });
  response.end(JSON.stringify(data));
}

async function bodyJson(request) {
  let raw = '';
  for await (const chunk of request) raw += chunk;
  return raw ? JSON.parse(raw) : {};
}

async function uploadBuffer(request) {
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > maxUploadBytes) throw new RangeError('ไฟล์มีขนาดใหญ่เกินไป');
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}

const server = createServer(async (request, response) => {
  if (request.method === 'OPTIONS') {
    response.writeHead(204, { 'access-control-allow-origin': '*', 'access-control-allow-methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS', 'access-control-allow-headers': 'content-type' });
    return response.end();
  }

  const url = new URL(request.url, `http://${request.headers.host || 'localhost'}`);
  const parts = url.pathname.split('/').filter(Boolean);
  try {
    if (url.pathname === '/api/health') return send(response, 200, { status: 'ok', service: 'supervision-api' });
    if (url.pathname === '/api/uploads' && request.method === 'POST') {
      const originalName = decodeURIComponent(request.headers['x-file-name'] || 'document');
      const extension = extname(originalName).toLowerCase();
      if (!Object.hasOwn(mimeTypes, extension)) return send(response, 415, { error: 'ชนิดไฟล์นี้ยังไม่รองรับ' });
      const buffer = await uploadBuffer(request);
      if (!buffer.length) return send(response, 400, { error: 'ไม่พบข้อมูลไฟล์' });
      const fileName = `${randomUUID()}${extension}`;
      await mkdir(uploadsPath, { recursive: true });
      await writeFile(join(uploadsPath, fileName), buffer, { flag: 'wx' });
      return send(response, 201, { fileName, fileUrl: `/files/${fileName}`, size: buffer.length, type: extension.slice(1).toUpperCase() });
    }
    if (parts[0] === 'files' && parts.length === 2 && request.method === 'GET') {
      const fileName = parts[1];
      if (!/^[a-f0-9-]{36}\.(pdf|doc|docx|xls|xlsx|jpg|jpeg|png)$/i.test(fileName)) return send(response, 404, { error: 'ไม่พบไฟล์' });
      try {
        const contents = await readFile(join(uploadsPath, fileName));
        response.writeHead(200, { 'content-type': mimeTypes[extname(fileName).toLowerCase()], 'content-length': contents.length, 'content-disposition': `attachment; filename="${fileName}"`, 'x-content-type-options': 'nosniff' });
        return response.end(contents);
      } catch {
        return send(response, 404, { error: 'ไม่พบไฟล์' });
      }
    }
    if (url.pathname === '/api/state' && request.method === 'GET') return send(response, 200, await readState());
    if (url.pathname === '/api/state' && request.method === 'PUT') {
      const incoming = await bodyJson(request);
      const state = { ...initialState, ...incoming };
      await writeState(state);
      return send(response, 200, { saved: true });
    }

    if (url.pathname === '/api/reports/synthesize' && request.method === 'POST') {
      const state = await readState();
      const input = await bodyJson(request);
      const quarter = String(input.quarter || 'ไตรมาส 3/2569');
      const visits = state.visits.filter((visit) => visit.quarter === quarter);
      const schools = [...new Set(visits.map((visit) => visit.school))];
      const outcomes = [...new Set(visits.map((visit) => visit.result).filter(Boolean))];
      const content = `รายงานผลการนิเทศ ${quarter}\n\nภาพรวมการดำเนินงาน\nดำเนินการนิเทศจำนวน ${visits.length} ครั้ง ครอบคลุม ${schools.length} สถานศึกษา ได้แก่ ${schools.join('、') || 'ยังไม่มีข้อมูลสถานศึกษา'}\n\nผลการนิเทศ\n${outcomes.map((item, index) => `${index + 1}. ${item}`).join('\n') || 'ยังไม่มีผลการนิเทศในช่วงเวลานี้'}\n\nข้อเสนอแนะ\n1. ติดตามสถานศึกษาที่อยู่ระหว่างพัฒนาและสนับสนุนตามบริบท\n2. แลกเปลี่ยนแนวปฏิบัติที่ได้ผลระหว่างสถานศึกษา\n\nหมายเหตุ: ร่างตัวอย่างจากข้อมูลบันทึกในโหมดสาธิต`;
      const report = { id: `r${Date.now()}`, title: `รายงานผลการนิเทศ ${quarter}`, quarter, updated: new Date().toLocaleDateString('th-TH'), status: 'ฉบับร่าง', content };
      state.reports = [report, ...(state.reports || [])];
      await writeState(state);
      return send(response, 200, { report, mode: 'demo' });
    }

    if (parts[0] === 'api' && parts[1]) {
      const collection = parts[1];
      const allowed = Object.hasOwn(initialState, collection);
      if (!allowed) return send(response, 404, { error: 'ไม่พบรายการข้อมูล' });
      const state = await readState();
      if (parts.length === 2 && request.method === 'GET') return send(response, 200, state[collection]);
      if (parts.length === 2 && request.method === 'POST') {
        const item = { id: `${collection.slice(0, 1)}${Date.now()}`, ...await bodyJson(request) };
        state[collection] = [item, ...state[collection]];
        await writeState(state);
        return send(response, 201, item);
      }
      if (parts.length === 3 && request.method === 'PATCH') {
        const id = decodeURIComponent(parts[2]);
        const patch = await bodyJson(request);
        const index = state[collection].findIndex((item) => item.id === id);
        if (index < 0) return send(response, 404, { error: 'ไม่พบรายการข้อมูล' });
        state[collection][index] = { ...state[collection][index], ...patch };
        await writeState(state);
        return send(response, 200, state[collection][index]);
      }
      if (parts.length === 3 && request.method === 'DELETE') {
        const id = decodeURIComponent(parts[2]);
        state[collection] = state[collection].filter((item) => item.id !== id);
        await writeState(state);
        return send(response, 200, { deleted: true });
      }
    }
    return send(response, 404, { error: 'ไม่พบ API' });
  } catch (error) {
    const status = error instanceof SyntaxError ? 400 : error instanceof RangeError ? 413 : 500;
    const message = status === 400 ? 'ข้อมูล JSON ไม่ถูกต้อง' : status === 413 ? 'ไฟล์ต้องมีขนาดไม่เกิน 25 MB' : 'เกิดข้อผิดพลาดใน API';
    return send(response, status, { error: message });
  }
});

server.listen(port, '0.0.0.0', () => console.log(`Supervision API running at http://localhost:${port}`));
