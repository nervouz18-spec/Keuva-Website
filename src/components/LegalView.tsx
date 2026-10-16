import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import { LEGAL_PATHS, TAB_PATHS, type LegalKind } from '../routes';

interface LegalSection {
  heading: string;
  body: string[];
}

interface LegalContent {
  badge: string;
  title: string;
  intro: string;
  sections: LegalSection[];
}

const CONTACT_EMAIL = 'taufiqrahmanprasetyo@gmail.com';

const CONTENT: Record<LegalKind, LegalContent> = {
  privacy: {
    badge: 'Legal',
    title: 'Kebijakan Privasi',
    intro:
      'KeuvaWeb berkomitmen melindungi privasi dan data pribadi Anda. Kebijakan ini menjelaskan data apa yang kami kumpulkan, bagaimana kami menggunakannya, dan hak yang Anda miliki.',
    sections: [
      {
        heading: '1. Data yang Kami Kumpulkan',
        body: [
          'Data yang Anda kirimkan secara sukarela melalui formulir konsultasi, halaman kontak, atau kanal WhatsApp — seperti nama, nama perusahaan, nomor WhatsApp, alamat email, dan deskripsi kebutuhan proyek.',
          'Data teknis anonim seperti jenis perangkat dan halaman yang dikunjungi, apabila fitur analitik diaktifkan.',
        ],
      },
      {
        heading: '2. Tujuan Penggunaan Data',
        body: [
          'Menindaklanjuti permintaan konsultasi, menyusun penawaran/proposal, serta mengomunikasikan progres proyek yang sedang berjalan.',
          'Kami tidak menjual, menyewakan, atau memperdagangkan data pribadi Anda kepada pihak ketiga.',
        ],
      },
      {
        heading: '3. Penyimpanan & Pengiriman Data',
        body: [
          'Data formulir dikirim ke kanal resmi kami (endpoint webhook, email, atau WhatsApp) dan disimpan hanya selama diperlukan untuk keperluan komunikasi bisnis.',
        ],
      },
      {
        heading: '4. Cookie & Analitik',
        body: [
          'Situs dapat menggunakan cookie/analitik (misalnya Google Analytics atau Plausible) untuk mengukur statistik kunjungan secara agregat. Anda dapat menonaktifkan cookie melalui pengaturan peramban.',
        ],
      },
      {
        heading: '5. Hak Anda',
        body: [
          `Anda berhak meminta akses, koreksi, atau penghapusan data pribadi Anda. Ajukan permintaan melalui email ${CONTACT_EMAIL}.`,
        ],
      },
      {
        heading: '6. Perubahan Kebijakan',
        body: [
          'Kebijakan ini dapat diperbarui sewaktu-waktu. Versi terbaru akan selalu ditampilkan pada halaman ini.',
        ],
      },
    ],
  },
  terms: {
    badge: 'Legal',
    title: 'Ketentuan Layanan',
    intro:
      'Ketentuan ini mengatur hubungan kerja sama antara Anda (klien) dan KeuvaWeb dalam penyediaan jasa rekayasa website. Dengan memesan layanan kami, Anda dianggap menyetujui ketentuan berikut.',
    sections: [
      {
        heading: '1. Ruang Lingkup Layanan',
        body: [
          'Lingkup pekerjaan, fitur, jumlah halaman, serta estimasi waktu pengerjaan disepakati bersama pada penawaran/proposal resmi sebelum proyek dimulai.',
          'Permintaan di luar lingkup yang disepakati akan dikenakan penyesuaian biaya dan/atau waktu pengerjaan.',
        ],
      },
      {
        heading: '2. Pembayaran',
        body: [
          'Proyek umumnya dimulai setelah pembayaran uang muka (DP) sebesar 50%, dengan pelunasan dilakukan sebelum serah terima akhir.',
          'Rincian harga, termin pembayaran, dan paket dukungan tercantum pada halaman Paket Harga dan/atau penawaran khusus.',
        ],
      },
      {
        heading: '3. Revisi & Perubahan',
        body: [
          'Jumlah revisi mengikuti paket yang dipilih. Revisi mayor yang mengubah arah desain/arsitektur secara signifikan dapat memengaruhi biaya dan jadwal.',
        ],
      },
      {
        heading: '4. Hak Kekayaan Intelektual',
        body: [
          'Setelah pelunasan, hak atas source code, aset desain, domain, dan server diserahkan sepenuhnya kepada klien. Kami tidak menerapkan lock-in atau ketergantungan sewa kode.',
        ],
      },
      {
        heading: '5. Garansi & Dukungan',
        body: [
          'Kami memberikan garansi perbaikan bug/fungsi yang tidak sesuai spesifikasi pada periode yang disepakati. Garansi tidak mencakup kerusakan akibat perubahan oleh pihak ketiga di luar sepengetahuan kami.',
        ],
      },
      {
        heading: '6. Batasan Tanggung Jawab',
        body: [
          'KeuvaWeb tidak bertanggung jawab atas kerugian tidak langsung, kehilangan keuntungan, atau gangguan layanan yang disebabkan oleh pihak ketiga (penyedia hosting, layanan pihak ketiga, atau force majeure).',
        ],
      },
      {
        heading: '7. Pembatalan & Pengembalian Dana',
        body: [
          'Pembatalan proyek yang sedang berjalan mengikuti kesepakatan tertulis. Uang muka yang telah dibayarkan untuk pekerjaan yang sudah dimulai umumnya tidak dapat dikembalikan.',
        ],
      },
      {
        heading: '8. Hukum yang Berlaku',
        body: [
          'Ketentuan ini tunduk pada hukum yang berlaku di Republik Indonesia.',
        ],
      },
    ],
  },
  security: {
    badge: 'Legal',
    title: 'Keamanan Sistem',
    intro:
      'Keamanan adalah bagian inti dari layanan kami. Berikut praktik yang kami terapkan untuk menjaga kerahasiaan dan integritas data Anda maupun infrastruktur digital Anda.',
    sections: [
      {
        heading: '1. Enkripsi & Transportasi Data',
        body: [
          'Seluruh situs yang kami bangun menggunakan HTTPS/SSL dengan praktik TLS terkini agar data yang berpindah antara peramban dan server tetap terenkripsi.',
        ],
      },
      {
        heading: '2. Pengembangan yang Aman',
        body: [
          'Kami mengikuti praktik pengembangan aman: sanitasi input, validasi di sisi server, perlindungan terhadap injeksi (SQL/XSS), serta pengelolaan rahasia (secret) melalui variabel lingkungan — bukan di dalam kode.',
        ],
      },
      {
        heading: '3. Pengelolaan Akses',
        body: [
          'Akses ke sistem dan infrastruktur dibatasi sesuai kebutuhan (principle of least privilege) dan menggunakan kredensial yang kuat serta autentikasi berlapis bila tersedia.',
        ],
      },
      {
        heading: '4. Backup & Pemantauan',
        body: [
          'Situs produksi dapat dilengkapi pencadangan berkala dan pemantauan uptime/error agar gangguan dapat terdeteksi dan ditangani lebih cepat.',
        ],
      },
      {
        heading: '5. Pelaporan Kerentanan',
        body: [
          `Jika Anda menemukan celah keamanan pada produk atau situs kami, mohon laporkan secara bertanggung jawab ke ${CONTACT_EMAIL} agar dapat kami tindak lanjuti.`,
        ],
      },
    ],
  },
};

interface LegalViewProps {
  kind: LegalKind;
}

export const LegalView: React.FC<LegalViewProps> = ({ kind }) => {
  const content = CONTENT[kind];
  const lastUpdated = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="w-full max-w-[820px] mx-auto px-5 md:px-12 py-16">
      <Link
        to={TAB_PATHS.beranda}
        className="inline-flex items-center gap-2 text-xs font-medium text-[#8c909f] hover:text-[#dfe2f1] transition-colors mb-8"
      >
        <Icon name="arrow_back" className=" text-sm" />
        Kembali ke Beranda
      </Link>

      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4d8eff]/15 text-[#adc6ff] text-[11px] font-bold uppercase tracking-wider">
        {content.badge}
      </span>

      <h1 className="font-display text-3xl md:text-4xl font-bold text-white mt-4 mb-3">
        {content.title}
      </h1>
      <p className="text-sm text-[#8c909f] mb-2">
        Terakhir diperbarui: {lastUpdated}
      </p>
      <p className="text-[15px] text-[#c2c6d6] leading-relaxed mb-10">
        {content.intro}
      </p>

      <div className="flex flex-col gap-8">
        {content.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-lg font-bold text-[#dfe2f1] mb-3">
              {section.heading}
            </h2>
            <div className="flex flex-col gap-3">
              {section.body.map((paragraph, index) => (
                <p key={index} className="text-sm text-[#8c909f] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-2xl bg-[#171b26] border border-white/5">
        <h3 className="font-display text-base font-bold text-[#dfe2f1] mb-2">
          Ada pertanyaan?
        </h3>
        <p className="text-sm text-[#8c909f] mb-4">
          Hubungi kami untuk klarifikasi terkait {content.title.toLowerCase()}.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to={TAB_PATHS.kontak}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#4d8eff] text-[#00285d] text-sm font-semibold hover:bg-[#6aa3ff] transition-colors"
          >
            <Icon name="chat" className=" text-base" />
            Hubungi Kami
          </Link>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#262a35] text-[#dfe2f1] text-sm font-semibold hover:bg-[#313540] transition-colors border border-white/5"
          >
            <Icon name="mail" className=" text-base text-[#4cd7f6]" />
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#8c909f]">
        {(Object.keys(LEGAL_PATHS) as LegalKind[])
          .filter((key) => key !== kind)
          .map((key) => (
            <Link
              key={key}
              to={LEGAL_PATHS[key]}
              className="hover:text-[#dfe2f1] transition-colors"
            >
              {CONTENT[key].title}
            </Link>
          ))}
      </div>
    </div>
  );
};
