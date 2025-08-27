"use client";

import { useState } from "react";
import Image from "next/image";

type Skill = {
  icon: string;
  text: string;
  description: string;
};

export default function Home() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const skills: Skill[] = [
    { icon: "💻", text: "HTML, CSS, JavaScript", description: "HTML untuk struktur, CSS untuk tampilan, JavaScript untuk interaktifitas." },
    { icon: "⚛", text: "React JS", description: "Library JavaScript untuk membangun UI modern." },
    { icon: "🛢", text: "MySQL Database", description: "Sistem manajemen database berbasis tabel & relasi." },
    { icon: "🎨", text: "UI/UX Design", description: "Membuat tampilan & pengalaman pengguna lebih menarik." },
    { icon: "📱", text: "Mobile Friendly Design", description: "Website tampil baik di HP maupun laptop." },
    { icon: "🔧", text: "Problem Solving", description: "Kemampuan menyelesaikan masalah dalam coding." },
  ];

  return (
    <div
      style={{
        backgroundImage: "url('/ping.jfif')",
        backdropFilter: "blur(12px)",
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        padding: "100px 20px",
      }}
    >
      <h1
        style={{
          color: "rgb(245, 185, 215)",
          textAlign: "center",
          fontSize: "40px",
          marginBottom: "30px",
          textShadow: "2px 2px 8px rgba(0,0,0,0.2)",
        }}
      >
        🌸 Bio Data Nabila 🌸
      </h1>

      {/* Card Biodata */}
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.85)",
          borderRadius: "20px",
          padding: "30px",
          display: "flex",
          alignItems: "center",
          gap: "30px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div style={{ flex: "1", textAlign: "center" }}>
          <Image
            src="/ilaa.jpeg"
            alt="Nabila"
            width={220}
            height={220}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              border: "6px solid rgb(245, 185, 215)",
              boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
            }}
          />
        </div>

        <div style={{ flex: "2" }}>
          <ul
            style={{
              listStyle: "none",
              padding: "0",
              margin: "0",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "1.8",
              color: "#333",
            }}
          >
            <li> Nama: <b>Nabila N. J.</b></li>
            <li> Absen: 22</li>
            <li> Jenis Kelamin: Perempuan</li>
            <li> Hobby: Mendengarkan Musik</li>
            <li> Jurusan: RPL</li>
            <li> Lagu Kesukaan: Bergema</li>
            <li> Alamat: JL. LA Sucipto GG Taruna II</li>
          </ul>
        </div>
      </div>

      {/* Skills */}
      <div
        style={{
          margin: "50px auto",
          textAlign: "center",
          padding: "20px",
          maxWidth: "800px",
          background: "rgba(255,255,255,0.2)",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        }}
      >
        <h2
          style={{
            color: "rgb(245, 185, 215)",
            fontSize: "28px",
            marginBottom: "20px",
          }}
        >
          🌸 My Skills 🌸
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "20px",
          }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              onClick={() => setSelectedSkill(skill)}
              style={{
                background: "rgba(255,255,255,0.85)",
                padding: "15px",
                borderRadius: "12px",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              <span style={{ fontSize: "30px" }}>{skill.icon}</span>
              <h3 style={{ margin: "10px 0", color: "#333" }}>{skill.text}</h3>
              {selectedSkill === skill && (
                <p style={{ fontSize: "14px", color: "#555" }}>
                  {skill.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Instagram */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <a
          href="https://instagram.com/username" // ganti dengan username Instagram kamu
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#333",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          🌸 Instagram
        </a>
      </div>
    </div>
  );
}