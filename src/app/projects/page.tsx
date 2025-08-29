import Image from "next/image";
import styles from "./projects.module.css";

export default function Projects() {
  const pmrPhotos = [
    {
      img: "/pmr1.jpeg",
      title: "Pelatihan Pertolongan Pertama",
      desc: "Kegiatan rutin PMR: simulasi balut luka, CPR dasar, dan evakuasi ringan.",
    },
    {
      img: "/pmr2.jpeg",
      title: "Open Recruitment PMR",
      desc: "Kegiatan penerimaan anggota baru PMR dengan seleksi & pembekalan dasar.",
    },
  ];

  return (
    <div className={styles.projects}>
      <h2 className={styles.title}>🌸 Ekstrakurikuler PMR 🌸</h2>
      <p className={styles.subtitle}>
        Dokumentasi kegiatan Palang Merah Remaja di sekolah.
      </p>

      <div className={styles.projectsGrid}>
        {pmrPhotos.map((p, i) => (
          <div key={i} className={styles.projectCard}>
            <Image
              src={p.img}
              alt={p.title}
              width={400}  
              height={250} 
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

