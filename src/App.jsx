import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, GraduationCap, ArrowRight, Mail, Database, Code, 
  TrendingUp, Home, CheckCircle, Smartphone, Users, Phone, MapPin 
} from 'lucide-react';
// QUAN TRỌNG: Import ảnh của bạn. Đảm bảo tên file là 'avatar.jpg' trong thư mục src/assets/
import avatarImg from './assets/avatar.jpg';
import bconsCityImg from './assets/bcons-city-image.jpg';
import bconsNewSkyImg from './assets/bcons-new-sky-image.jpg';
import bconsCenterCityImg from './assets/bcons-center-city-image.jpg';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Component con cho Project Card (Đổi thành Case Study)
const CaseStudyCard = ({ title, category, description, tags, icon: Icon, image }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="card-style rounded-xl hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
  >
    {/* Ảnh */}
    <div className="w-full h-48 overflow-hidden bg-gray-200">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        onError={(e) => e.target.src = "https://placehold.co/400x200/FBBF24/1F2937?text=" + title}
      />
    </div>
    
    {/* Content */}
    <div className="p-6">
      <div className={`p-3 w-max rounded-lg mb-4 text-white bg-secondary-gold shadow-md shadow-primary-gold/50`}>
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold mb-2 text-text-dark">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200">
        {tags.map(tag => (
          <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">{tag}</span>
        ))}
      </div>
    </div>
  </motion.div>
);


const App = () => {
  return (
    <div className="min-h-screen bg-bg-light text-text-dark font-sans overflow-x-hidden">
      
      {/* --- NAVBAR --- (Chỉ còn Trang chủ, Dự án, Liên hệ) */}
      <nav className="fixed w-full z-50 card-style border-b border-gray-200 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-gold rounded-lg flex items-center justify-center text-text-dark font-black shadow-md">P</div>
            <span>P.DONG<span className="text-primary-gold">.BCONS</span></span>
          </div>
          <div className="hidden md:flex gap-10 text-base font-medium text-gray-700">
            <a href="#home" className="hover:text-primary-gold transition-colors font-bold">Trang chủ</a>
            <a href="#projects" className="hover:text-primary-gold transition-colors">Dự án</a>
            <a href="#contact" className="hover:text-primary-gold transition-colors">Liên Hệ</a>
          </div>
          <button className="bg-cta-red hover:bg-red-700 text-white px-5 py-2 rounded-full font-bold text-sm transition-all shadow-md shadow-cta-red/30">
            Hợp tác
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION (TRANG CHỦ) --- */}
      <section id="home" className="pt-40 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center min-h-[90vh]">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-300 text-gray-600 text-xs font-bold mb-6">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-gold opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-primary-gold"></span></span>
            Chuyên gia giải pháp BCONS
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 text-text-dark">
            <span className="text-3xl md:text-5xl text-gray-500 font-semibold block mb-2">Welcome To Portfolio:</span>
            <span className="text-2xl md:text-4xl">Nguyễn Phương Đông:</span> <br/>
            <span className="text-2xl md:text-4xl">Khác Biệt Ở <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-gold to-secondary-gold">Chữ Tín</span>.</span>
          </h1>

          <p className="text-gray-600 text-lg mb-8 max-w-xl leading-relaxed">
            <span className="text-orange-600 font-bold">Chuyên Viên</span> Kinh doanh <span className="text-primary-gold font-bold">Tập đoàn Bcons City</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button whileHover={{ scale: 1.05 }} className="bg-primary-gold hover:bg-secondary-gold text-text-dark px-8 py-3 rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-primary-gold/30">
              Xem Dự Án <ArrowRight size={20} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-3 rounded-lg font-bold border border-gray-400 hover:border-cta-red hover:text-cta-red transition-all flex items-center gap-2 text-gray-700">
              <Mail size={20} /> Gửi mail
            </motion.button>
          </div>
        </motion.div>

        {/* --- KHỐI ẢNH ĐẠI DIỆN --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          className="relative flex justify-center items-center h-full"
        >
          {/* Vòng Glow/Shadow nhẹ Vàng */}
          <div className="absolute w-80 h-80 bg-primary-gold/30 rounded-full blur-[100px] opacity-70 animate-pulse gold-glow"></div>
          
          <div className="relative transform rotate-3 hover:rotate-0 transition-all duration-700">
            <div className="w-80 h-80 overflow-hidden rounded-2xl border-4 border-primary-gold shadow-2xl gold-glow">
              <img 
                src={avatarImg} 
                alt="Nguyen Phuong Dong Avatar" 
                className="w-full h-full object-cover"
                onError={(e) => { 
                  e.target.onerror = null; 
                  e.target.src = "https://placehold.co/320x320/FBBF24/1F2937?text=AVT+MISSING";
                  e.target.className = "w-full h-full object-contain p-10 bg-primary-gold/20"
                }}
              />
            </div>
          </div>
        </motion.div>
        {/* --- KẾT THÚC KHỐI ẢNH ĐẠI DIỆN --- */}

      </section>
      
      {/* --- SKILLS SECTION (Giữ lại style Light Mode) --- */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Kỹ Năng <span className="text-primary-gold">Độc Đáo</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sự kết hợp giữa tư duy kinh doanh và công nghệ.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Business Mindset */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card-style p-8 rounded-xl hover:shadow-xl transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cta-red/10 text-cta-red rounded-lg"><TrendingUp size={24}/></div>
                <h3 className="text-2xl font-bold text-gray-900">Kinh Doanh & Phân Tích</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['Financial Modeling', 'Real Estate Valuation', 'Market Research (IB)', 'Lead Generation (Bcons)', 'CRM Management', 'Business Strategy'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={16} className="text-cta-red"/> {skill}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card-style p-8 rounded-xl hover:shadow-xl transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary-gold/10 text-primary-gold rounded-lg"><Code size={24}/></div>
                <h3 className="text-2xl font-bold text-gray-900">Công Cụ & Công Nghệ</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['Data Analysis (SQL/Excel)', 'Web Development (React)', 'Python Scripting', 'Git/Version Control', 'Vite/Tailwind CSS', 'Digital Automation'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={16} className="text-primary-gold"/> {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* --- PROJECTS / CASE STUDIES SECTION --- */}
      <section id="projects" className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold mb-16 text-center text-text-dark">
            Case Studies tại <span className="text-primary-gold">Bcons Group</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <CaseStudyCard 
              title="Bcons CITY"
              category="Dự án Tiêu điểm"
              description="Khu Đô Thị Xanh Hiện Đại tại cửa ngõ TP.HCM. Cung cấp không gian sống tiện nghi, tích hợp chuỗi tiện ích nội khu đẳng cấp"
              tags={['Khu Đô Thị', 'Cao Cấp', 'Tiện Nghi']}
              icon={Home}
              image={bconsCityImg}
            />
            <CaseStudyCard 
              title="Bcons NEW SKY"
              category="Tối ưu Leads"
              description="Căn Hộ Thông Minh liền kề Tuyến Metro số 2 (Đường Quốc lộ 13). Kết nối nhanh chóng đến trung tâm thành phố và các khu công nghiệp trọng điểm."
              tags={['CRM', 'Automation', 'Digital MKT']}
              icon={Smartphone}
              image={bconsNewSkyImg}
            />
            <CaseStudyCard 
              title="Bcons CENTER CITY"
              category="Tư vấn Chiến lược"
              description="Tổ hợp Thương Mại & Căn Hộ biểu tượng mới của khu vực. Thiết kế kiến trúc độc đáo, nổi bật với hệ thống Sky Bar và khu vui chơi giải trí. Mang đến Trải nghiệm sống đỉnh cao và tiềm năng tăng giá mạnh mẽ."
              tags={['Strategy', 'Data Modeling', 'Valuation']}
              icon={Briefcase}
              image={bconsCenterCityImg}
            />
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION (LIÊN HỆ) --- */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold mb-12 text-center text-text-dark">
            <span className="text-primary-gold">Liên Hệ</span> & Hợp Tác
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Details Card */}
            <div className="card-style p-8 rounded-xl flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-text-dark">Thông Tin Liên Hệ</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4">
                    <Phone size={24} className="text-cta-red"/>
                    <span className="text-xl font-bold text-text-dark">0347898773</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail size={24} className="text-primary-gold"/>
                    <a href="mailto:nguyenphuongdongpp03@gmail.com" className="text-lg text-gray-700 hover:text-primary-gold transition-colors">nguyenphuongdongpp03@gmail.com</a>
                  </div>

                  {/* --- Updated address + social icons --- */}
                  <div className="flex items-start gap-4">
                    <MapPin size={24} className="text-gray-500"/>
                    <div>
                      <span className="text-lg text-gray-700 block">
                        40 Đ. Thống Nhất, Đông Hoà, Dĩ An, Bình Dương, Việt Nam
                      </span>

                      <div className="mt-3 flex items-center gap-3">
                        <a
                          href="https://www.facebook.com/profile.php?id=61583010687791"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Facebook"
                          className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                            <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5 3.66 9.14 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.92 8.44-9.93z"/>
                          </svg>
                        </a>

                        <a
                          href="https://zalo.me/0347898773"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Zalo"
                          title="Zalo: 0347898773"
                          className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-[#07A9FF] text-white hover:opacity-90 font-bold"
                        >
                          <span className="text-sm leading-none">Z</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.button whileHover={{ scale: 1.02 }} className="w-full bg-cta-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-md shadow-cta-red/30">
                  GỬI YÊU CẦU NGAY
              </motion.button>
            </div>

            {/* Google Map Card */}
            <div className="card-style p-3 rounded-xl overflow-hidden">
              <div className="w-full h-96 rounded-lg overflow-hidden border-2 border-gray-200 shadow-sm">
                <iframe
                  title="Bcons City - 40 Đ. Thống Nhất, Đông Hoà, Dĩ An, Bình Dương, Việt Nam"
                  src="https://www.google.com/maps?q=40%20%C4%90.%20Th%E1%BB%91ng%20Nh%E1%BA%AT,%20%C4%90%C3%B4ng%20Ho%C3%A0,%20D%C4%A9%20An,%20B%C3%ACnh%20D%C6%B0%C6%A1ng,%20Vi%E1%BB%87t%20Nam&z=16&output=embed"
                  width="100%"
                  height="100%"
                  className="border-0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Link mở trực tiếp bằng Google Maps app/share link */}
              <div className="mt-3 text-center">
                <a
                  href="https://maps.app.goo.gl/Vqsc49A7L768JvuBA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary-gold hover:bg-secondary-gold text-text-dark px-4 py-2 rounded-md font-medium shadow-sm"
                >
                  Mở trên Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* --- COPYRIGHT FOOTER --- */}
      <footer className="py-6 bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
          © 2025 Nguyen Phuong Dong. All rights reserved. | Build with React & Tailwind.
        </div>
      </footer>

    </div>
  );
}

export default App;