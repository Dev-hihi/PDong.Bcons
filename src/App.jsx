import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, GraduationCap, ArrowRight, Mail, Database, Code, 
  TrendingUp, Home, CheckCircle, Smartphone, Users
} from 'lucide-react';
// QUAN TRỌNG: Import ảnh của bạn. Đảm bảo tên file là 'avatar.jpg' trong thư mục src/assets/
import avatarImg from './assets/avatar.jpg'; 

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Component con cho Project Card (Đổi thành Case Study)
const CaseStudyCard = ({ title, category, description, tags, icon: Icon, color }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-card p-6 rounded-xl hover:border-bcons-gold/50 transition-all duration-300 cursor-pointer border border-gray-800"
  >
    <div className={`p-3 w-max rounded-lg mb-4 ${color}/10 ${color}`}>
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
      {description}
    </p>
    <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-800">
      {tags.map(tag => (
        <span key={tag} className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300">{tag}</span>
      ))}
    </div>
  </motion.div>
);


const App = () => {
  return (
    <div className="min-h-screen bg-bcons-dark text-white font-sans selection:bg-bcons-gold selection:text-black overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 glass-card border-b border-white/5 backdrop-blur-md bg-bcons-dark/70">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-bcons-gold to-orange-600 rounded-lg flex items-center justify-center text-black font-black shadow-lg shadow-orange-500/20">P</div>
            <span>P.DONG<span className="text-bcons-gold">.DEV</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#about" className="hover:text-bcons-gold transition-colors">Về tôi</a>
            <a href="#skills" className="hover:text-bcons-gold transition-colors">Kỹ năng</a>
            <a href="#projects" className="hover:text-bcons-gold transition-colors">Dự án/Case Study</a>
          </div>
          <button className="bg-bcons-red hover:bg-red-700 text-white px-5 py-2 rounded-full font-bold text-sm transition-all shadow-lg shadow-red-500/20">
            Liên Hệ
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION (AVT NỔI BẬT) --- */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center min-h-[90vh]">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bcons-gold/10 border border-bcons-gold/20 text-bcons-gold text-xs font-bold mb-6">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bcons-gold opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-bcons-gold"></span></span>
            Kinh nghiệm thực chiến BCONS Group
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
            Nguyễn Phương Đông: <br/>
            Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-bcons-gold to-yellow-200">Business</span> & <span className="text-white decoration-bcons-red decoration-4 underline underline-offset-4">Real Estate</span> Tech.
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-xl leading-relaxed">
            Sinh viên <span className="text-orange-500 font-bold">FPT University</span> (Kinh doanh Quốc tế). Tôi sử dụng tư duy phân tích và kỹ năng công nghệ để tối ưu hóa quy trình bán hàng và quản lý dữ liệu tại <span className="text-bcons-gold font-bold">Tập Đoàn Bcons</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button whileHover={{ scale: 1.05 }} className="bg-gradient-to-r from-bcons-red to-pink-600 text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-red-500/30">
              Xem Case Studies <ArrowRight size={20} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-3 rounded-lg font-bold border border-gray-700 hover:border-bcons-gold hover:text-bcons-gold transition-all flex items-center gap-2">
              <Mail size={20} /> Gửi email
            </motion.button>
          </div>
        </motion.div>

        {/* --- KHỐI ẢNH ĐẠI DIỆN MỚI (New AVT Block) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          className="relative flex justify-center items-center h-full"
        >
          {/* Vòng Glow mờ (Bóng mờ) */}
          <div className="absolute w-80 h-80 bg-bcons-gold/30 rounded-full blur-[100px] opacity-50 animate-pulse"></div>
          
          <div className="relative transform rotate-3 hover:rotate-0 transition-all duration-700">
            <div className="w-80 h-80 overflow-hidden rounded-2xl border-4 border-bcons-gold shadow-2xl shadow-bcons-gold/40">
              <img 
                src={avatarImg} 
                alt="Nguyen Phuong Dong Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
        {/* --- KẾT THÚC KHỐI ẢNH ĐẠI DIỆN --- */}

      </section>
      
      {/* --- SKILLS SECTION (The Hybrid Mindset) --- */}
      <section id="skills" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Kỹ Năng <span className="text-bcons-gold">Độc Đáo</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Sự kết hợp giữa tư duy kinh doanh và công nghệ.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Business Mindset */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-8 rounded-2xl hover:border-bcons-gold/50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-500/10 text-bcons-red rounded-lg"><TrendingUp size={24}/></div>
                <h3 className="text-2xl font-bold">Kinh Doanh & Phân Tích</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['Financial Modeling', 'Real Estate Valuation', 'Market Research (IB)', 'Lead Generation (Bcons)', 'CRM Management', 'Business Strategy'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle size={16} className="text-bcons-red"/> {skill}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-8 rounded-2xl hover:border-bcons-gold/50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg"><Code size={24}/></div>
                <h3 className="text-2xl font-bold">Công Cụ & Công Nghệ</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['Data Analysis (SQL/Excel)', 'Web Development (React)', 'Python Scripting', 'Git/Version Control', 'Vite/Tailwind CSS', 'Digital Automation'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle size={16} className="text-bcons-gold"/> {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS / CASE STUDIES SECTION --- */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold mb-16 text-center">
            Case Studies tại <span className="text-transparent bg-clip-text bg-gradient-to-r from-bcons-gold to-orange-500">Bcons Group</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <CaseStudyCard 
              title="Phân Tích Dữ Liệu Bcons City"
              category="Data Analytics"
              description="Sử dụng SQL và Excel để phân tích hiệu suất bán hàng của các Block, xác định các phân khúc khách hàng mục tiêu để điều chỉnh chiến lược marketing."
              tags={['Data Mining', 'SQL', 'Pivot Table']}
              icon={Database}
              color="text-bcons-gold"
            />
            <CaseStudyCard 
              title="Tối Ưu Landing Page Dự Án"
              category="Web Development"
              description="Thiết kế lại Landing Page cho dự án Bcons Polaris/Bcons Polygon theo tiêu chuẩn UX/UI hiện đại, giúp tăng tỷ lệ chuyển đổi (Conversion Rate) Leads lên 15%."
              tags={['ReactJS', 'Tailwind', 'CRO']}
              icon={Smartphone}
              color="text-blue-400"
            />
            <CaseStudyCard 
              title="Quản Lý Leads Tự Động"
              category="CRM & Automation"
              description="Xây dựng quy trình tự động hóa để phân loại và chuyển giao Leads từ kênh Digital vào hệ thống CRM nội bộ, tiết kiệm 2 giờ làm việc/ngày cho Sales Team."
              tags={['Automation', 'CRM', 'Process Optimization']}
              icon={Users}
              color="text-green-400"
            />
          </div>
        </div>
      </section>

      {/* --- FOOTER & CONTACT --- */}
      <footer id="contact" className="py-12 border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <h3 className="text-2xl font-bold text-bcons-gold mb-4">Tìm kiếm một chuyên gia lai?</h3>
           <p className="text-gray-400">Tôi sẵn sàng áp dụng tư duy Kinh doanh Quốc tế và công nghệ vào dự án tiếp theo của bạn.</p>
           <motion.button whileHover={{ scale: 1.05 }} className="mt-6 bg-bcons-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-red-500/30">
              GỬI YÊU CẦU HỢP TÁC
           </motion.button>
        </div>
      </footer>

    </div>
  );
}

export default App;