'use client';

import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Smile,
  Star,
  Smartphone,
  Heart,
  Gift,
  Book,
  CheckCircle,
  Image as ImageIcon,
  DownloadCloud,
  MousePointerClick,
  Moon,
  Clock,
  User,
  MapPin,
  Bell,
  FileText,
  CheckSquare,
  CreditCard,
  MessageCircle,
  Mail
} from 'lucide-react';

// --- DATA FAKE ORDER & TESTIMONI ---
const fakeOrders = [
  { name: "Bunda Aisyah", location: "Jakarta Selatan", time: "2 menit yang lalu" },
  { name: "Ayah Budi", location: "Surabaya", time: "5 menit yang lalu" },
  { name: "Kak Nisa", location: "Bandung", time: "12 menit yang lalu" },
  { name: "Bunda Rara", location: "Yogyakarta", time: "15 menit yang lalu" },
  { name: "Pak Ridwan", location: "Makassar", time: "21 menit yang lalu" },
];

const testimonials = [
  { name: "Bunda Sarah", text: "Alhamdulillah, anak saya jadi lebih rajin wudhu setelah baca panduan bergambarnya. Bahasanya sangat mudah dipahami anak-anak!", rating: 5 },
  { name: "Ayah Rahman", text: "Koleksi ceritanya sangat inspiratif. Setiap malam sebelum tidur selalu baca ini. Harga seikhlasnya ini bener-bener berkah.", rating: 5 },
  { name: "Bunda Lina", text: "Ilustrasinya sangat menarik! Anak saya yang umur 4 tahun betah banget lihat gambar-gambarnya. Terima kasih MuslimKids!", rating: 5 }
];

const booksData = [
  { src: "/covers/Amal-Kecil-di-Kamar-Kecil-EBS-1779882092515_cover.png", title: "Amal Kecil di Kamar Kecil" },
  { src: "/covers/Anak-Muslim-Menjaga-Lingkungan-EBS-1779920778099_cover.png", title: "Anak Muslim Menjaga Lingkungan" },
  { src: "/covers/Berlindung-dari-Fitnah-Besar-EBS-1772675380497_cover.png", title: "Berlindung dari Fitnah Besar" },
  { src: "/covers/Bulan-Bulan-Haram-EBS-1776950110206_cover.png", title: "Bulan-Bulan Haram" },
  { src: "/covers/Busy-Book-Aku-Anak-Muslim-EBS-1777354550865_cover.png", title: "Busy Book Aku Anak Muslim" },
  { src: "/covers/Daging-dan-Ulat-di-Toples-Pak-Guru-EBS-1771735339311_cover.png", title: "Daging dan Ulat di Toples" },
  { src: "/covers/Finding-Out-a-Trees-Age-EBS-1771059103590_cover.png", title: "Finding Out a Tree's Age" },
  { src: "/covers/Hadiah-Ramadhan-EBS-1770944995320_cover.png", title: "Hadiah Ramadhan" },
  { src: "/covers/Hari-yang-Kunanti-EBS-1779241639230_cover.png", title: "Hari yang Kunanti" },
  { src: "/covers/Kubaca-Al-Quran-di-Bulan-Ramadhan-EBS-1770299536178_cover.png", title: "Kubaca Al-Qur'an di Bulan Ramadhan" },
  { src: "/covers/Kupu-Kupu-Bertamu-EBS-1770073819276_cover.png", title: "Kupu-Kupu Bertamu" },
  { src: "/covers/Malam-Lailatul-Qadar-EBS-1773052772046_cover.png", title: "Malam Lailatul Qadar" },
  { src: "/covers/Mendulang-Faidah-Doa-Lailatul-Qadar-EBS-1773152177058_cover.png", title: "Mendulang Faidah Doa Lailatul Qadar" },
  { src: "/covers/Menjaga-Bumi-Allah-EBS-1777471667834_cover.png", title: "Menjaga Bumi Allah" },
  { src: "/covers/Moms-Colorful-Chicken-Soup-EBS-1771059219850_cover.png", title: "Mom's Colorful Chicken Soup" },
  { src: "/covers/Pembatal-Pembatal-Puasa-EBS-1771210294042_cover.png", title: "Pembatal-Pembatal Puasa" },
  { src: "/covers/Petrichor-EBS-1771059300259_cover.png", title: "Petrichor" },
  { src: "/covers/Pewarna-Karmin-EBS-1776950044072_cover.png", title: "Pewarna Karmin" },
  { src: "/covers/Pintu-Surga-Terbuka-Lebar-EBS-1779241593169_cover.png", title: "Pintu Surga Terbuka Lebar" },
  { src: "/covers/Ramadan-in-the-Desert-Bilingual-EBS-1773809539361_cover.png", title: "Ramadan in the Desert" },
  { src: "/covers/Ringkasan-Hukum-Hukum-Tajwid-EBS-1780060381690_cover.png", title: "Ringkasan Hukum-Hukum Tajwid" },
  { src: "/covers/Rumah-Indah-di-Tanah-Sepi-EBS-1776870655428_cover.png", title: "Rumah Indah di Tanah Sepi" },
  { src: "/covers/Saatnya-Berpisah-dengan-Ramadhan-EBS-1773978265517_cover.png", title: "Saatnya Berpisah dengan Ramadhan" },
  { src: "/covers/Seri-Hewan-dalam-Al-Quran-Lalat-EBS-1770073757853_cover.png", title: "Seri Hewan dalam Al-Qur'an: Lalat" },
  { src: "/covers/Siapkan-Hati-untuk-Ramadhan-EBS-1770110201743_cover.png", title: "Siapkan Hati untuk Ramadhan" },
  { src: "/covers/Syarat-Puasa-EBS-1770129857781_cover.png", title: "Syarat Puasa" },
  { src: "/covers/Tak-Sabar-Menanti-Ramadan-EBS-1768910170776_cover.png", title: "Tak Sabar Menanti Ramadan" },
  { src: "/covers/Teladan-Rasulullah-Dalam-Mendidik-Anak-EBS-1779799862462_cover.png", title: "Teladan Rasulullah dalam Mendidik Anak" },
  { src: "/covers/The-Moon-Split-in-Two-EBS-1770129782997_cover.png", title: "The Moon Split in Two" },
  { src: "/covers/The-Salt-Trap-EBS-1771059158517_cover.png", title: "The Salt Trap" },
  { src: "/covers/Worksheet-Ramadhan-EBS-1771570461006_cover.png", title: "Worksheet Ramadhan" },
  { src: "/covers/Yang-Tersisa-Ketika-Ramadhan-Pergi-EBS-1774304464373_cover.png", title: "Yang Tersisa Ketika Ramadhan Pergi" }
];

const App = () => {
  // --- STATE UNTUK COUNTDOWN & NOTIFIKASI ---
  const [timeLeft, setTimeLeft] = useState(3600 * 5 + 1800 + 45); // 5 Jam 30 Menit 45 Detik
  const [notifIndex, setNotifIndex] = useState(0);
  const [showNotif, setShowNotif] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [booksPerSlide, setBooksPerSlide] = useState(10);

  // Handle responsive books per slide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBooksPerSlide(4);
      } else {
        setBooksPerSlide(10);
      }
      setCurrentSlide(0); // Reset to first slide on resize
    };

    handleResize(); // Call on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Timer Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fake Order Notification Effect
  useEffect(() => {
    const notifInterval = setInterval(() => {
      setShowNotif(true);
      setTimeout(() => {
        setShowNotif(false);
        setNotifIndex((prev) => (prev + 1) % fakeOrders.length);
      }, 5000); // Tampil selama 5 detik
    }, 15000); // Muncul setiap 15 detik

    return () => clearInterval(notifInterval);
  }, []);

  // Format Time
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return { h: h < 10 ? `0${h}` : h, m: m < 10 ? `0${m}` : m, s: s < 10 ? `0${s}` : s };
  };

  const { h, m, s } = formatTime(timeLeft);

  return (
    <div className="min-h-screen bg-[#FDF9F1] font-sans text-gray-800 overflow-x-hidden relative pb-24">

      {/* --- INJECT CUSTOM CSS UNTUK MARQUEE & ANIMASI --- */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        @keyframes slideUp {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-floatUp {
          animation: floatUp 3s ease-in-out infinite;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        @keyframes slideIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}} />

      {/* --- 7. ORDER RUNNING TEXT (TOP BAR) --- */}
      <div className="bg-[#E65100] text-white py-2 overflow-hidden whitespace-nowrap relative z-50 shadow-md border-b-2 border-orange-400">
        <div className="inline-block animate-scroll text-sm md:text-base font-semibold tracking-wide">
          🔥 PROMO SPESIAL: BAYAR SEIKHLASNYA! | 🎉 Bunda Aisyah (Jakarta) baru saja mengamankan paketnya! | 🎉 Ayah Budi (Surabaya) baru saja membeli paket! | ⏰ WAKTU TERBATAS, AMANKAN SEKARANG! | 🎉 Kak Nisa (Bandung) baru saja membeli paket!
        </div>
      </div>

      {/* Decorative Background Elements - Islamic Theme for Children */}
      <div className="absolute top-20 left-10 text-yellow-300 opacity-40 hidden md:block animate-pulse">
        <Moon size={64} fill="currentColor" strokeWidth={0} />
      </div>
      <div className="absolute top-40 right-10 text-yellow-300 opacity-40 hidden md:block animate-bounce" style={{ animationDelay: '0.5s' }}>
        <Star size={48} fill="currentColor" strokeWidth={0} />
      </div>
      <div className="absolute top-60 left-1/4 text-yellow-300 opacity-30 hidden lg:block animate-pulse" style={{ animationDelay: '1s' }}>
        <Star size={36} fill="currentColor" strokeWidth={0} />
      </div>
      <div className="absolute bottom-1/3 right-1/4 text-yellow-300 opacity-35 hidden lg:block animate-bounce" style={{ animationDelay: '1.5s' }}>
        <Moon size={48} fill="currentColor" strokeWidth={0} />
      </div>
      <div className="absolute top-1/2 right-20 text-green-300 opacity-25 hidden lg:block animate-pulse" style={{ animationDelay: '0.7s' }}>
        <Star size={32} fill="currentColor" strokeWidth={0} />
      </div>
      <div className="absolute bottom-1/4 left-20 text-blue-300 opacity-30 hidden lg:block animate-bounce" style={{ animationDelay: '0.3s' }}>
        <Star size={40} fill="currentColor" strokeWidth={0} />
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-linear-to-b from-yellow-300 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-linear-to-b from-blue-300 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* --- 1. SECTION (HERO) --- */}
      <header className="pt-12 pb-16 px-4 max-w-6xl mx-auto relative z-10">
        {/* Floating Islamic theme elements around hero */}
        <div className="absolute top-0 left-1/4 text-yellow-300 opacity-30 hidden md:block animate-floatUp" style={{ animationDelay: '0s' }}>
          <Star size={56} fill="currentColor" strokeWidth={0} />
        </div>
        <div className="absolute top-10 right-1/4 text-blue-300 opacity-25 hidden md:block animate-floatUp" style={{ animationDelay: '1s' }}>
          <Moon size={48} fill="currentColor" strokeWidth={0} />
        </div>
        <div className="absolute -top-4 right-0 text-green-300 opacity-20 hidden lg:block animate-floatUp" style={{ animationDelay: '0.5s' }}>
          <Star size={40} fill="currentColor" strokeWidth={0} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-block bg-[#6D4C41] text-white px-6 py-2 rounded-full font-bold text-sm md:text-lg mb-2 shadow-md uppercase tracking-wide border-2 border-white">
              Perpustakaan Digital Anak Islam Terlengkap
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-sm uppercase">
              <span className="text-[#E65100]">Belajar Seru </span><br className="hidden lg:block" />
              <span className="text-[#2E7D32]">Setiap Hari!</span>
            </h1>
            <p className="text-lg md:text-xl font-bold text-[#3E2723] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Koleksi Ebook Spesial & Menarik untuk Membantu Buah Hati Mengenal Islam Lebih Dalam dengan Cara yang Menyenangkan.
            </p>

            <div className="pt-2 flex justify-center lg:justify-start">
              {/* Quick CTA */}
              <button onClick={() => window.location.href = 'http://lynk.id/wira_arfi/4ox99vo1n8vm/checkout'} className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg md:text-xl shadow-lg border-2 border-green-400 hover:bg-green-700 transition animate-bounce flex items-center justify-center gap-2">
                Ambil Promo Sekarang <MousePointerClick size={24} />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Background decorative glow behind image */}
            <div className="absolute inset-0 bg-[#FFD54F]/20 rounded-full blur-3xl w-72 h-72 mx-auto my-auto animate-pulse"></div>

            <div className="relative animate-floatUp max-w-sm md:max-w-md w-full border-4 border-white bg-white/50 backdrop-blur-md rounded-[2.5rem] p-4 shadow-2xl hover:scale-102 transition duration-300">
              <img
                src="/hero-kids.png"
                alt="Muslim kids reading books illustration"
                className="rounded-[2rem] w-full h-auto object-cover shadow-inner"
              />
              {/* Small floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white font-extrabold text-xs md:text-sm px-4 py-2.5 rounded-2xl shadow-lg border-2 border-white transform rotate-6 animate-pulse">
                100+ Ebook Spesial! ✨
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 relative z-10 space-y-20">

        {/* --- 2. KENAPA HARUS MEMBELI (FEATURES) --- */}
        <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border-2 border-orange-100 shadow-xl relative">
          {/* Decorative elements */}
          <div className="absolute -top-12 right-8 text-yellow-300 opacity-25 hidden lg:block animate-floatUp" style={{ animationDelay: '0.2s' }}>
            <Star size={44} fill="currentColor" strokeWidth={0} />
          </div>
          <div className="absolute -bottom-8 left-8 text-blue-300 opacity-20 hidden lg:block animate-floatUp" style={{ animationDelay: '1.2s' }}>
            <Moon size={40} fill="currentColor" strokeWidth={0} />
          </div>

          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#FFCC80] text-[#E65100] font-black px-4 md:px-8 py-2 rounded-full shadow-md text-xs sm:text-sm md:text-lg uppercase tracking-wider md:tracking-widest border-4 border-white whitespace-nowrap">
            Mengapa Bunda Harus Punya Ini?
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <FeatureItem
              icon={<BookOpen className="text-[#E65100] w-12 h-12" />}
              title="Konten Berkualitas & Terpercaya"
              desc="Disusun oleh tim berpengalaman dibidangnya, memastikan cerita sesuai dengan nilai-nilai Islam."
            />
            <FeatureItem
              icon={<Smile className="text-[#E65100] w-12 h-12" />}
              title="Bahasa Mudah Dipahami"
              desc="Menggunakan gaya bahasa yang ramah anak, interaktif, dan cocok untuk semua usia."
            />
            <FeatureItem
              icon={<Star className="text-[#E65100] w-12 h-12" fill="#FFE082" />}
              title="Edukasi Harian Menyenangkan"
              desc="Dilengkapi ilustrasi berwarna yang membuat belajar agama Islam jadi tidak membosankan."
            />
            <FeatureItem
              icon={<Smartphone className="text-[#E65100] w-12 h-12" />}
              title="Akses Fleksibel Kapan Saja"
              desc="Format digital (PDF) yang bisa dibaca di HP, Tablet, atau Laptop. Bahkan bisa dicetak sendiri!"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-10 pt-8 border-t border-gray-100">
            <BenefitIcon icon={<Book className="w-6 h-6 text-[#2E7D32]" />} text="Ratusan Ebook" />
            <BenefitIcon icon={<CheckCircle className="w-6 h-6 text-[#2E7D32]" />} text="Materi Lengkap" />
            <BenefitIcon icon={<ImageIcon className="w-6 h-6 text-[#E65100]" />} text="Full Color" />
            <BenefitIcon icon={<DownloadCloud className="w-6 h-6 text-blue-600" />} text="Via Google Drive" />
          </div>
        </section>

        {/* --- 4. SALES (BOOK SHOWCASE) --- */}


        {/* --- 3. TESTIMONI --- */}
        <section id="testimoni" className="bg-[#FFF8E1] -mx-4 md:mx-0 px-4 py-12 md:rounded-[3rem] shadow-inner border-y border-yellow-200 relative">
          {/* Decorative Islamic theme elements */}
          <div className="absolute top-8 left-8 text-yellow-300 opacity-30 hidden lg:block animate-floatUp" style={{ animationDelay: '0.7s' }}>
            <Moon size={48} fill="currentColor" strokeWidth={0} />
          </div>
          <div className="absolute bottom-12 right-8 text-green-300 opacity-25 hidden lg:block animate-floatUp" style={{ animationDelay: '0.2s' }}>
            <Star size={40} fill="currentColor" strokeWidth={0} />
          </div>
          <div className="absolute top-1/2 right-1/4 text-blue-300 opacity-20 hidden lg:block animate-floatUp" style={{ animationDelay: '1.1s' }}>
            <Star size={32} fill="currentColor" strokeWidth={0} />
          </div>

          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-[#F57F17] uppercase">Apa Kata Bunda?</h2>
            <p className="text-gray-700 font-medium mt-2">Mereka yang sudah merasakan manfaat perpustakaan digital ini.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testi, idx) => (
              <TestimonialCard key={idx} {...testi} />
            ))}
          </div>
        </section>

        {/* --- BOOK GALLERY SECTION --- */}
        <section id="koleksi" className="py-16 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-8 text-yellow-300 opacity-25 hidden lg:block animate-floatUp" style={{ animationDelay: '0.6s' }}>
            <Star size={48} fill="currentColor" strokeWidth={0} />
          </div>
          <div className="absolute bottom-1/2 right-8 text-blue-300 opacity-20 hidden lg:block animate-floatUp" style={{ animationDelay: '1.4s' }}>
            <Moon size={40} fill="currentColor" strokeWidth={0} />
          </div>

          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-[#2E7D32] uppercase drop-shadow-sm mb-3">Galeri Buku <span className="text-[#E65100]">Lengkap</span></h2>
            <p className="text-gray-600 font-medium text-lg">Lihat 100+ Koleksi Buku Islam Berkualitas untuk Anak-Anak Tercinta</p>
          </div>

          <div className="relative max-w-7xl mx-auto">
            {/* Slider Container */}
            <div className="overflow-hidden bg-white rounded-3xl p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 md:gap-6 animate-slideIn">
                {booksData.slice(currentSlide * booksPerSlide, currentSlide * booksPerSlide + booksPerSlide).map((book, idx) => (
                  <BookGalleryItem key={idx} src={book.src} title={book.title} />
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + Math.ceil(booksData.length / booksPerSlide)) % Math.ceil(booksData.length / booksPerSlide))}
              className="absolute left-2 md:-left-6 lg:-left-12 top-1/2 -translate-y-1/2 bg-[#E65100] text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-[#FF7043] transition transform hover:scale-110 z-20"
            >
              ❮
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % Math.ceil(booksData.length / booksPerSlide))}
              className="absolute right-2 md:-right-6 lg:-right-12 top-1/2 -translate-y-1/2 bg-[#E65100] text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-[#FF7043] transition transform hover:scale-110 z-20"
            >
              ❯
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(booksData.length / booksPerSlide) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-[#E65100] w-8' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <button onClick={() => window.location.href = 'http://lynk.id/wira_arfi/4ox99vo1n8vm/checkout'} className="bg-linear-to-r from-[#E65100] to-[#FF7043] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg border-2 border-orange-400 hover:shadow-xl transition transform hover:scale-105">
              Dapatkan Semua Koleksi Ini Sekarang!
            </button>
          </div>
        </section>

        {/* MID CTA BANNER */}
        <div className="bg-white border-2 border-[#81C784] border-dashed rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-center gap-4 max-w-4xl mx-auto shadow-sm text-center md:text-left">
          <Heart className="text-red-500 w-12 h-12 shrink-0 animate-pulse" fill="#EF4444" />
          <p className="text-lg md:text-xl font-bold text-[#1B5E20] leading-snug">
            Dukung tumbuh kembang anak Anda dengan bacaan islami yang bermanfaat HARI INI JUGA!
          </p>
        </div>

        {/* --- 5. COUNTDOWN PROMO SEIKHLASNYA --- */}
        <section className="max-w-4xl mx-auto relative mt-8">

          {/* Countdown Header */}
          <div className="bg-[#B71C1C] text-white text-center py-4 px-6 rounded-t-3xl border-4 border-b-0 border-[#D32F2F] flex flex-col md:flex-row items-center justify-center gap-4 relative z-10 -mb-4 shadow-lg">
            <div className="flex items-center gap-2">
              <Clock className="animate-spin-slow w-6 h-6" />
              <span className="font-bold text-lg uppercase tracking-wider">Promo Berakhir Dalam:</span>
            </div>
            <div className="flex gap-2 text-2xl font-black">
              <div className="bg-white text-[#B71C1C] px-3 py-1 rounded-lg">{h}</div> :
              <div className="bg-white text-[#B71C1C] px-3 py-1 rounded-lg">{m}</div> :
              <div className="bg-white text-[#B71C1C] px-3 py-1 rounded-lg">{s}</div>
            </div>
          </div>

          <div className="bg-[#2E7D32] rounded-b-3xl md:rounded-b-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border-4 border-green-800/30">
            {/* Decorative Islamic theme elements for promo section */}
            <div className="absolute top-8 right-16 text-green-200 opacity-15 hidden lg:block animate-floatUp" style={{ animationDelay: '0.4s' }}>
              <Star size={56} fill="currentColor" strokeWidth={0} />
            </div>
            <div className="absolute bottom-20 left-12 text-yellow-200 opacity-12 hidden lg:block animate-floatUp" style={{ animationDelay: '0.8s' }}>
              <Moon size={52} fill="currentColor" strokeWidth={0} />
            </div>
            <div className="absolute top-1/3 right-1/3 text-blue-200 opacity-10 hidden lg:block animate-floatUp" style={{ animationDelay: '1.3s' }}>
              <Star size={44} fill="currentColor" strokeWidth={0} />
            </div>

            <div className="absolute -left-12 -bottom-12 opacity-10 transform -rotate-12">
              <Gift className="w-64 h-64" />
            </div>
            <div className="absolute -right-8 top-0 opacity-10">
              <Star className="w-48 h-48" fill="white" />
            </div>

            <div className="relative z-10 flex flex-col items-center pt-4">
              <h2 className="text-2xl sm:text-4xl md:text-6xl font-black mb-8 text-center drop-shadow-lg tracking-wider text-[#FFEB3B]">
                DAPATKAN PAKET BUKU
              </h2>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full mb-10">
                <div className="flex flex-col items-center justify-center relative">
                  <span className="text-white text-xl font-bold uppercase tracking-widest mb-1">Harga Normal</span>
                  <div className="relative">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white opacity-80">Rp 1.999.000</span>
                    <div className="absolute top-1/2 left-0 w-full h-2 bg-red-600 transform -rotate-3 rounded-full"></div>
                  </div>
                </div>

                <div className="bg-[#FF9800] text-white px-6 md:px-12 py-4 md:py-6 rounded-3xl md:rounded-4xl font-black text-center shadow-[0_8px_0_#E65100] md:shadow-[0_10px_0_#E65100] border-4 border-white transform transition hover:-translate-y-1 hover:shadow-[0_12px_0_#E65100] md:hover:shadow-[0_15px_0_#E65100] cursor-default mt-4 md:mt-0">
                  <span className="text-2xl sm:text-3xl md:text-5xl drop-shadow-md leading-tight text-white">CUKUP BAYAR<br /><span className="text-[#FFFDE7]">SEIKHLASNYA!</span></span>
                </div>
              </div>

              {/* FINAL CTA BUTTON */}
              <button onClick={() => window.location.href = 'http://lynk.id/wira_arfi/4ox99vo1n8vm/checkout'} className="group relative bg-linear-to-b from-white to-gray-100 hover:from-green-50 hover:to-white text-[#2E7D32] rounded-full px-6 md:px-16 py-4 md:py-6 shadow-2xl transform transition hover:scale-105 active:scale-95 w-full md:w-auto flex flex-col items-center justify-center gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-xl sm:text-2xl md:text-4xl font-black drop-shadow-sm">DAPATKAN SEKARANG!</span>
                  <MousePointerClick className="w-8 h-8 hidden md:block text-[#E65100] animate-bounce" />
                </div>
                <span className="text-xs sm:text-sm md:text-base font-bold opacity-80 uppercase tracking-widest">
                  Akses Selamanya via Google Drive
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* --- 4. TUTORIAL CARA BAYAR (INFOGRAFIS BARU) --- */}
        <section id="cara-order" className="py-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#E65100] uppercase drop-shadow-sm">Cara Order Sangat Mudah!</h2>
            <p className="text-gray-600 font-medium mt-2">Ikuti 5 langkah simpel di halaman checkout nanti</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 max-w-5xl mx-auto relative">
            {/* Garis Penghubung (Hanya Desktop) */}
            <div className="hidden md:block absolute top-10 left-10 right-10 h-1 bg-orange-200 -z-10"></div>

            <InfographicStep
              num="1"
              icon={<Heart className="w-8 h-8" />}
              title="Isi Nominal"
              desc="Ketik harga seikhlasnya di kolom yang tersedia."
            />
            <InfographicStep
              num="2"
              icon={<FileText className="w-8 h-8" />}
              title="Isi Data Diri"
              desc="Lengkapi Email, Nama & Nomor WhatsApp."
            />
            <InfographicStep
              num="3"
              icon={<CreditCard className="w-8 h-8" />}
              title="Pilih Metode & Bayar"
              desc="Pilih QRIS/E-Wallet/Transfer, dan Konfirmasi!"
            />
            <InfographicStep
              num="4"
              icon={<CheckSquare className="w-8 h-8" />}
              title="Centang S&K"
              desc="Centang kotak persetujuan 'Terms of Use'."
            />
            <InfographicStep
              num="5"
              icon={<MousePointerClick className="w-8 h-8" />}
              title="Klik Buy Now"
              desc="Tekan tombol 'Buy Now' berwarna hijau."
            />
          </div>
        </section>
      </main>

      {/* --- 6. FAKE ORDER NOTIFICATION (FLOATING BOTTOM LEFT) --- */}
      {showNotif && (
        <div className="fixed bottom-4 left-4 right-4 md:right-auto md:w-80 bg-white p-4 rounded-2xl shadow-2xl border-l-4 border-green-500 z-50 flex items-start gap-3 animate-slideUp">
          <div className="bg-green-100 p-2 rounded-full shrink-0">
            <Bell className="w-6 h-6 text-green-600 animate-pulse" />
          </div>
          <div>
            <p className="text-sm text-gray-800">
              <span className="font-bold text-green-700">{fakeOrders[notifIndex].name}</span> dari <span className="font-semibold">{fakeOrders[notifIndex].location}</span> baru saja membeli Paket Ebook!
            </p>
            <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
              <Clock className="w-3 h-3" /> {fakeOrders[notifIndex].time}
            </p>
          </div>
        </div>
      )}

      {/* --- FOOTER SECTION --- */}
      <footer className="bg-[#3E2723] text-stone-200 pt-16 pb-8 px-4 mt-24 relative overflow-hidden border-t-8 border-[#E65100]">
        {/* Decorative clouds/mosque/stars patterns inside footer */}
        <div className="absolute top-10 right-10 text-yellow-500 opacity-10 pointer-events-none animate-pulse">
          <Star size={40} fill="currentColor" strokeWidth={0} />
        </div>
        <div className="absolute bottom-10 left-10 text-yellow-500 opacity-10 pointer-events-none animate-bounce" style={{ animationDelay: '1s' }}>
          <Moon size={48} fill="currentColor" strokeWidth={0} />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-[#E65100] p-2.5 rounded-2xl text-white shadow-md border border-white/20">
                <BookOpen size={28} />
              </div>
              <span className="font-extrabold text-2xl tracking-wider text-white">MuslimKids</span>
            </div>
            <p className="text-sm text-stone-300 leading-relaxed font-medium">
              Membantu Ayah dan Bunda mengenalkan nilai-nilai Islam dengan cara yang menyenangkan, interaktif, dan penuh warna sejak usia dini.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" aria-label="Instagram" className="bg-[#4E342E] hover:bg-[#E65100] text-white p-2.5 rounded-xl transition shadow-sm hover:scale-110 flex items-center justify-center">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="mailto:info@muslimkids.com" aria-label="Email Support" className="bg-[#4E342E] hover:bg-[#E65100] text-white p-2.5 rounded-xl transition shadow-sm hover:scale-110">
                <Mail size={20} />
              </a>
              <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Support" className="bg-[#4E342E] hover:bg-green-600 text-white p-2.5 rounded-xl transition shadow-sm hover:scale-110">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white border-b-2 border-[#E65100]/30 pb-2 inline-block">Menu Navigasi</h4>
            <ul className="space-y-2.5 text-sm font-medium text-stone-300">
              <li>
                <a href="#" className="hover:text-[#FF9800] transition flex items-center gap-1.5 hover:translate-x-1 duration-200">
                  <span className="text-[#FF9800]">❯</span> Home
                </a>
              </li>
              <li>
                <a href="#koleksi" className="hover:text-[#FF9800] transition flex items-center gap-1.5 hover:translate-x-1 duration-200">
                  <span className="text-[#FF9800]">❯</span> Galeri Buku
                </a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-[#FF9800] transition flex items-center gap-1.5 hover:translate-x-1 duration-200">
                  <span className="text-[#FF9800]">❯</span> Testimoni
                </a>
              </li>
              <li>
                <a href="#cara-order" className="hover:text-[#FF9800] transition flex items-center gap-1.5 hover:translate-x-1 duration-200">
                  <span className="text-[#FF9800]">❯</span> Cara Order
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white border-b-2 border-[#E65100]/30 pb-2 inline-block">Hukum & Kebijakan</h4>
            <ul className="space-y-2.5 text-sm font-medium text-stone-300">
              <li>
                <a href="#" className="hover:text-[#FF9800] transition flex items-center gap-1.5 hover:translate-x-1 duration-200">
                  <span className="text-[#FF9800]">❯</span> Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF9800] transition flex items-center gap-1.5 hover:translate-x-1 duration-200">
                  <span className="text-[#FF9800]">❯</span> Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF9800] transition flex items-center gap-1.5 hover:translate-x-1 duration-200">
                  <span className="text-[#FF9800]">❯</span> Disclaimers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Action */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white border-b-2 border-[#E65100]/30 pb-2 inline-block">Butuh Bantuan?</h4>
            <p className="text-sm text-stone-300 leading-relaxed font-medium">
              Jika Ayah & Bunda mengalami kendala saat download atau pembayaran, jangan ragu untuk menghubungi layanan pelanggan kami.
            </p>
            <div className="pt-2">
              <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-2.5 rounded-full text-sm shadow-md transition transform hover:scale-105 active:scale-95">
                <MessageCircle size={18} /> Chat WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-stone-800 text-center relative z-10">
          <p className="text-xs text-stone-400 font-medium">
            © {new Date().getFullYear()} MuslimKids. Hak Cipta Dilindungi. Dibuat dengan <Heart size={10} className="inline text-red-500 animate-pulse fill-red-500" /> untuk Anak Muslim Indonesia.
          </p>
        </div>
      </footer>

    </div>
  );
};

/* --- SUBCOMPONENTS --- */

const BookCover = ({ title, subtitle, bg, borderColor, isDark = false }: { title: string; subtitle?: string; bg: string; borderColor: string; isDark?: boolean }) => (
  <div className={`relative ${bg} rounded-2xl p-4 flex flex-col items-center justify-center aspect-3/4 text-center border-2 ${borderColor} hover:scale-105 transition-transform duration-300 shadow-md group cursor-pointer overflow-hidden`}>
    <div className="absolute left-0 top-0 bottom-0 w-4 bg-black/10 rounded-l-2xl"></div>
    <div className="relative z-10 pl-2 flex flex-col items-center justify-center h-full w-full">
      <h4 className={`font-black text-sm md:text-lg leading-tight mb-2 ${isDark ? 'text-white' : 'text-gray-900'} px-1`}>
        {title}
      </h4>
      {subtitle && (
        <p className={`text-[10px] md:text-xs font-semibold leading-tight ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
  </div>
);

const FeatureItem = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="flex items-start space-x-5 group hover:bg-orange-50 p-4 rounded-2xl transition-colors border border-transparent hover:border-orange-100">
    <div className="shrink-0 mt-1 bg-orange-100/50 p-4 rounded-2xl group-hover:bg-orange-200 transition-colors shadow-sm">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-xl md:text-2xl text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 font-medium leading-relaxed">{desc}</p>
    </div>
  </div>
);

const BenefitIcon = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center space-x-3 bg-[#FDF9F1] px-5 py-3 rounded-xl shadow-sm border border-gray-200">
    <div className="shrink-0 bg-white p-1.5 rounded-full shadow-sm">{icon}</div>
    <p className="text-sm font-bold text-gray-800 leading-tight">{text}</p>
  </div>
);

const TestimonialCard = ({ name, text, rating }: { name: string; text: string; rating: number }) => (
  <div className="bg-white p-6 rounded-3xl shadow-md border border-yellow-100 relative pt-10 mt-6">
    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-yellow-100 p-3 rounded-full border-4 border-white shadow-sm">
      <User className="w-8 h-8 text-yellow-600" />
    </div>
    <div className="flex justify-center mb-3">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-500" fill="#EAB308" />
      ))}
    </div>
    <p className="text-gray-600 text-center italic text-sm md:text-base leading-relaxed mb-4">"{text}"</p>
    <div className="text-center font-bold text-gray-900 border-t border-gray-100 pt-3">
      - {name} -
    </div>
  </div>
);

const InfographicStep = ({ num, icon, title, desc }: { num: string; icon: React.ReactNode; title: string; desc: string }) => (
  <div className="flex flex-col items-center text-center relative w-full">
    <div className="bg-linear-to-br from-[#E65100] to-[#FF7043] text-white rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center font-black text-xl md:text-2xl shadow-lg mb-3 md:mb-4 relative z-10 border-4 border-white shrink-0">
      {num}
    </div>
    <div className="bg-white p-5 rounded-2xl shadow-md border border-orange-100 h-full w-full flex flex-col items-center">
      <div className="text-[#E65100] mb-2 md:mb-3">
        {icon}
      </div>
      <h3 className="font-bold text-base md:text-lg text-gray-900 mb-1 md:mb-2">{title}</h3>
      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const BookGalleryItem = ({ src, title }: { src: string; title: string }) => (
  <div className="group relative bg-white rounded-2xl shadow-md border border-orange-100 overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300">
    <div className="relative w-full h-64 md:h-72 overflow-hidden bg-gray-100">
      <img
        src={src}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="p-3 bg-white">
      <h3 className="text-xs md:text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-[#E65100] transition-colors">{title}</h3>
    </div>
  </div>
);

export default App;