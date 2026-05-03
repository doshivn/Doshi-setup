import { CheckCircle2, Phone, Globe, MapPin, Shield, Clock, Package, Wrench, ChevronRight, Check, MessageCircle, Megaphone } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

import ds01Image from './assets/images/regenerated_image_1777781515441.jpg';
import dg01Image from './assets/images/regenerated_image_1777781513550.jpg';
import mayEpImage from './assets/images/regenerated_image_1777781517141.jpg';
import tuUvImage from './assets/images/regenerated_image_1777781520210.jpg';
import mayMaiImage from './assets/images/regenerated_image_1777781521222.jpg';
import mayVatImage from './assets/images/regenerated_image_1777781522227.jpg';
import sungKhoImage from './assets/images/regenerated_image_1777781523361.jpg';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-red-600 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <a href="#home" className="bg-red-600 text-white font-bold text-3xl tracking-tighter px-3 py-1 rounded-sm">
                DOSHI
              </a>
            </div>
            
            <nav className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-wider text-neutral-600">
              <a href="#equipment" className="hover:text-red-600 transition-colors">Thiết bị chính</a>
              <a href="#other-equipment" className="hover:text-red-600 transition-colors">Thiết bị phụ trợ</a>
              <a href="#course" className="hover:text-red-600 transition-colors">Khóa học</a>
              <a href="#rules" className="hover:text-red-600 transition-colors">Điều khoản</a>
            </nav>

            <div className="flex items-center gap-6">
              <a href="tel:0903427743" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-colors cursor-pointer shadow-sm hover:shadow-red-600/30">
                Nhận Báo Giá
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden bg-neutral-950">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2000&auto=format&fit=crop" 
              alt="Doshi Shoe Spa Banner" 
              className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 via-transparent to-neutral-900/80" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 text-red-400 font-bold tracking-wide text-sm mb-6 border border-red-500/30 uppercase shadow-lg shadow-red-900/20">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Giải pháp toàn diện cho Spa Giày
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 uppercase leading-tight">
                Khởi Đầu Thành Công <br/>Cùng <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">DOSHI</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
                Chúng tôi cung cấp thiết bị và khóa học chuyên nghiệp, đồng hành cùng bạn trên con đường xây dựng sự nghiệp Vệ sinh, Spa và Chăm sóc giày cao cấp.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#course" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-xl hover:shadow-red-600/30 hover:-translate-y-1">
                  Đăng Ký Khóa Học
                </a>
                <a href="#equipment" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-md border border-white/10 hover:border-white/30 hover:-translate-y-1">
                  Xem Báo Giá Thiết Bị
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Combo Banner Section */}
        <section id="equipment" className="bg-neutral-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-600/20 via-neutral-900 to-neutral-900"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-6 text-white uppercase"
              >
                Báo Giá Thiết Bị <span className="text-red-500">Spa Giày</span>
              </motion.h2>
              <p className="text-lg text-neutral-400">Combo hoàn hảo cho tiệm Spa Giày chuyên nghiệp của bạn.</p>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-8 inline-block bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-1"
              >
                <div className="bg-neutral-900 rounded-xl px-8 py-4 flex items-center gap-4">
                  <span className="uppercase font-semibold tracking-wider text-sm text-neutral-400">Tổng Giá Combo</span>
                  <span className="text-4xl font-bold text-red-500">31,600,000 VNĐ</span>
                </div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Product 1 */}
              <div className="bg-neutral-800/50 backdrop-blur rounded-3xl border border-neutral-700 overflow-hidden flex flex-col">
                <div className="bg-red-600 p-4 shrink-0 text-center">
                  <h3 className="text-xl font-bold uppercase text-white">MÁY GIẶT GIÀY DG01 5 BÀN CHẢI</h3>
                </div>
                <div className="aspect-[4/3] w-full bg-neutral-200 overflow-hidden relative">
                   <img 
                      src={dg01Image} 
                      alt="Máy giặt giày DG01" 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      referrerPolicy="no-referrer"
                   />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="space-y-3">
                    <FeatureRow label="Nhãn hiệu" value="Doshi" />
                    <FeatureRow label="Model" value="DG01" />
                    <FeatureRow label="Kích thước (mm)" value="1200x550x1200" />
                    <FeatureRow label="Độ sâu của bồn (mm)" value="280" />
                    <FeatureRow label="Chất liệu" value="Inox 201" />
                    <FeatureRow label="Công suất" value="2 Kw" />
                    <FeatureRow label="Điện áp" value="220V" />
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="bg-neutral-800/50 backdrop-blur rounded-3xl border border-neutral-700 overflow-hidden flex flex-col">
                <div className="bg-red-600 p-4 shrink-0 text-center">
                  <h3 className="text-xl font-bold uppercase text-white">TỦ SẤY GIÀY DS01 12 ĐÔI - UV</h3>
                </div>
                <div className="aspect-[4/3] w-full bg-neutral-200 overflow-hidden relative">
                   <img 
                      src={ds01Image} 
                      alt="Tủ sấy giày DS01" 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      referrerPolicy="no-referrer"
                   />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="space-y-3">
                    <FeatureRow label="Nhãn hiệu" value="Doshi" />
                    <FeatureRow label="Model" value="DS01" />
                    <FeatureRow label="Kích thước (mm)" value="600x520x1450" />
                    <FeatureRow label="Dải nhiệt" value="Max 50°C" />
                    <FeatureRow label="Dải thời gian" value="70 - 90 phút" />
                    <FeatureRow label="Công suất" value="Max 1500W" />
                    <FeatureRow label="Điện áp" value="220V-50HZ" />
                    <FeatureRow label="Đặc điểm" value="Phun sơn tĩnh điện" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 md:gap-8 text-neutral-400 text-sm font-medium uppercase tracking-wider">
               <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-red-500"/> Bảo hành 12 tháng</span>
               <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-red-500"/> Sản phẩm mới 100%</span>
               <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-red-500"/> Xuất xứ Việt Nam</span>
            </div>
          </div>
        </section>

        {/* Other Equipments Section */}
        <section id="other-equipment" className="py-24 bg-white border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-2 uppercase">Các Thiết Bị Khác</h2>
                <p className="text-neutral-500 text-lg">Những thiết bị chuyên dụng phục vụ quy trình Spa Giày chuyên nghiệp.</p>
              </div>
              <div className="bg-red-50 border border-red-100 px-6 py-3 rounded-xl mt-6 md:mt-0 shadow-sm transition hover:shadow-md">
                 <span className="text-red-900 font-medium">Tổng giá trị thiết bị phụ trợ: <span className="text-2xl font-bold ml-2 text-red-600 block sm:inline text-center mt-1 sm:mt-0">17,900,000 VNĐ</span></span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <EquipmentCard 
                title="MÁY ÉP ĐẾ LỒNG SÂU"
                desc="Ép chặt phần đế giày và thân giày sau khi đã dán keo, giúp keo bám chắc và đều."
                image={mayEpImage}
              />
              <EquipmentCard 
                title="TỦ UV TẨY Ố"
                desc="2 đèn UV công suất 100W, dùng tẩy ố giày cực kì hiệu quả."
                image={tuUvImage}
              />
              <EquipmentCard 
                title="MÁY MÀI 1 ĐẦU"
                desc="Mài và đánh bóng đế giày, khuôn giày làm sạch mép keo, loại bỏ gai nhựa/thừa sau khi đúc."
                image={mayMaiImage}
              />
              <EquipmentCard 
                title="MÁY VẮT GIÀY TỰ ĐỘNG"
                desc="Sử dụng vắt giày trước khi đem đi sấy, tối ưu hóa công đoạn làm khô giày."
                image={mayVatImage}
              />
              <EquipmentCard 
                title="SÚNG KHÒ KEO VÀ BÚT MÀI HƠI"
                desc="Các vật tư phụ trợ quan trọng khác phục vụ quá trình thay đế được chuẩn chỉ nhất."
                image={sungKhoImage}
              />
            </div>
          </div>
        </section>

        {/* Course Section */}
        <section id="course" className="py-24 bg-neutral-900 text-white border-y border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-tight text-white leading-tight">
                Khóa học <span className="text-red-500">Vệ Sinh Giày, Spa Giày, Thay Đế</span><br className="hidden md:block"/> Chuyên Nghiệp
              </h2>
              <div className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-red-600/10 text-red-400 font-bold border border-red-500/20 shadow-sm shadow-red-500/10 tracking-wide text-sm sm:text-base">
                KỸ THUẬT - VẬN HÀNH - MARKETING - QUẢN LÝ
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 bg-neutral-800/80 rounded-[2.5rem] p-8 md:p-12 border border-neutral-700/80 backdrop-blur shadow-2xl">
                <h3 className="text-2xl font-bold mb-10 text-white flex items-center gap-4 border-b border-neutral-700/50 pb-6 uppercase">
                  <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/30">
                    <Check className="w-6 h-6 text-white" strokeWidth={3} />
                  </div>
                  Nội dung khóa học (Thực hành)
                </h3>
                
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                  <CourseSection title="1. Giới thiệu về nghề Spa giày">
                    <CourseItem text="Lịch sử và xu hướng vệ sinh – chăm sóc giày" />
                    <CourseItem text="Cơ hội nghề nghiệp: freelancer, mở tiệm, làm việc tại hệ thống" />
                    <CourseItem text="Các loại giày thường gặp: sneaker, da, vải, nubuck, suede..." />
                  </CourseSection>
                  
                  <CourseSection title="2. Kiến thức chuyên môn cơ bản">
                    <CourseItem text="Phân biệt chất liệu giày và phương pháp vệ sinh phù hợp" />
                    <CourseItem text="Dụng cụ và hóa chất chuyên dụng" />
                    <CourseItem text="Nguyên tắc an toàn khi làm việc với giày hiệu / hàng cao cấp" />
                    <CourseItem text="Phân biệt cấp độ hư hại của giày" />
                  </CourseSection>

                  <CourseSection title="3. Kỹ năng vệ sinh – phục hồi – chăm sóc">
                    <CourseItem text="Vệ sinh cơ bản: sole, upper, dây giày" />
                    <CourseItem text="Vệ sinh sâu (deep clean)" />
                    <CourseItem text="Xử lý ố vàng, khử mùi, chống ẩm" />
                    <CourseItem text="Bảo quản giày sau vệ sinh (chống ẩm, form giữ dáng)" />
                  </CourseSection>

                  <CourseSection title="4. Dán keo">
                    <CourseItem text="Cách dán bong hở mép giày" />
                    <CourseItem text="Cách dán giày cũ của khách hàng gửi vệ sinh" />
                    <CourseItem text="Cách kiểm tra keo, sử dụng keo dung môi" />
                  </CourseSection>

                  <CourseSection title="5. Thay đế giày">
                    <CourseItem text="Cách phân biệt các loại đế giày" />
                    <CourseItem text="Cách bóc đế" />
                    <CourseItem text="Cách dán đế giày, sử dụng keo, các thiết bị" />
                  </CourseSection>

                  <CourseSection title="6. Thực hành & mô phỏng thực tế">
                    <CourseItem text="Làm việc trên nhiều dòng giày khác nhau" />
                    <CourseItem text="Thực hành vệ sinh từ A-Z theo quy trình chuẩn" />
                    <CourseItem text="Giải quyết tình huống: giày ố cứng đầu, da nứt, vải phai màu..." />
                  </CourseSection>
                </div>
              </div>

              <div className="space-y-6 lg:sticky lg:top-28">
                <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-8 text-center relative overflow-hidden shadow-xl shadow-red-900/20">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                   <h3 className="text-xl font-bold mb-4 relative z-10 text-white uppercase tracking-wide">ĐĂNG KÝ THAM GIA KHÓA HỌC NGAY TẠI ĐÂY!</h3>
                   <div className="my-8 relative z-10">
                     <p className="text-lg text-red-300 line-through mb-2 opacity-80 decoration-red-400">20,000,000 vnđ</p>
                     <p className="text-5xl font-extrabold text-white tracking-tight drop-shadow-md">15,000,000<span className="text-2xl opacity-80 ml-1">đ</span></p>
                   </div>
                   
                   <a href="tel:0903427743" className="block w-full py-4 bg-white text-red-700 font-bold text-lg rounded-xl shadow-xl shadow-black/10 relative z-10 transition-all hover:-translate-y-1 hover:shadow-2xl hover:bg-neutral-50 active:translate-y-0">
                     Quét QR Zalo / Gọi Ngay
                     <span className="block text-sm font-normal text-neutral-500 mt-0.5">Hotline: 090 342 77 43</span>
                   </a>
                </div>

                <div className="bg-neutral-800 rounded-3xl p-8 border border-neutral-700 shadow-lg">
                  <h4 className="font-bold text-xl mb-6 text-white uppercase tracking-wide border-b border-neutral-700 pb-4">Chi tiết khóa học</h4>
                  <ul className="space-y-4">
                    <DetailItem text="Giới thiệu các loại thiết bị cần có trong 1 cửa hàng" />
                    <DetailItem text="Phân loại các loại giày thể thao, giày da, giày hàng hiệu, cao cấp" />
                    <DetailItem text="Thực hành vệ sinh, dán keo, tẩy ố, thay đế, spa giày" />
                    <DetailItem text="Marketing truyền thông, thu hút khách hàng" />
                    <DetailItem text="Trải nghiệm thực tế tại cửa hàng mẫu, giày của khách" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Policies Section */}
        <section id="rules" className="py-24 bg-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 inline-block px-8 py-3 bg-white rounded-2xl shadow-sm border border-neutral-200 uppercase tracking-tight">Các Điều Khoản Báo Giá</h2>
             </div>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <PolicyCard icon={<Shield className="w-6 h-6" />} title="Chính sách bảo hành">
                  <PolicyItem text="Bảo hành 1 năm sản phẩm" />
                  <PolicyItem text="Hỗ trợ bảo trì trọn đời" />
                  <PolicyItem text="Cung cấp linh kiện chính hãng" />
                </PolicyCard>
                
                <PolicyCard icon={<Wrench className="w-6 h-6" />} title="Hỗ trợ vận hành">
                  <PolicyItem text="Bàn giao thiết bị và hướng dẫn sử dụng" />
                  <PolicyItem text="Hướng dẫn trực tiếp hoặc qua video" />
                </PolicyCard>
                
                <PolicyCard icon={<Package className="w-6 h-6" />} title="Tiến độ giao hàng">
                  <PolicyItem text="5-7 ngày với hàng hóa có sẵn" />
                  <PolicyItem text="7-10 ngày với hàng nhập khẩu" />
                </PolicyCard>
                
                <PolicyCard icon={<Megaphone className="w-6 h-6" />} title="Hỗ trợ kinh doanh">
                  <PolicyItem text="Lên thiết kế biển bảng" />
                  <PolicyItem text="Lên thiết kế 3D cửa hàng" />
                  <PolicyItem text="Hỗ trợ truyền thông, Marketing" />
                </PolicyCard>
             </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-950 text-neutral-400 py-16 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-600 text-white font-bold text-3xl tracking-tighter px-3 py-1 rounded">
                  DOSHI
                </div>
                <h3 className="font-bold text-white text-lg max-w-sm uppercase leading-tight">CÔNG TY TNHH SẢN XUẤT VÀ THƯƠNG MẠI DOSHI VIỆT NAM</h3>
              </div>
              <div className="space-y-4 text-sm">
                <p className="flex items-start gap-3 text-neutral-300">
                  <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span><strong className="text-white font-medium">VPGD:</strong> Tầng 4 N06LK30 Khu đất dịch vụ Vạn Phúc, P. Hà Đông, Hà Nội</span>
                </p>
                <p className="flex items-start gap-3 text-neutral-300">
                  <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span><strong className="text-white font-medium">Cơ sở học:</strong> No7C - LK19, Khu đất dịch vụ, Vạn Phúc, Hà Đông, Hà Nội</span>
                </p>
              </div>
            </div>
            
            <div className="md:text-right space-y-4">
              <p className="flex items-center md:justify-end gap-3 text-white font-medium text-xl">
                <Phone className="w-6 h-6 text-red-500" />
                Hotline: <a href="tel:0974607719" className="hover:text-red-400 transition-colors">0974.607.719</a> - <a href="tel:0903427743" className="hover:text-red-400 transition-colors">0903.427.743</a>
              </p>
              <p className="flex items-center md:justify-end gap-3 text-white text-lg">
                <Globe className="w-6 h-6 text-red-500" />
                Website: <a href="https://doshivn.com" target="_blank" rel="noreferrer" className="hover:text-red-400 transition-colors underline decoration-red-500/50 underline-offset-4">doshivn.com</a>
              </p>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-neutral-800 text-center text-sm text-neutral-600">
             © {new Date().getFullYear()} Doshi Việt Nam. Báo giá này có hiệu lực 30 ngày.
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 lg:bottom-8 lg:right-8">
        <a 
          href="https://zalo.me/0903427743" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#0068FF] text-white rounded-full shadow-lg hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0068FF]/30 transition-all duration-300 relative group"
        >
           <MessageCircle className="w-7 h-7" />
           <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-neutral-900 text-sm font-bold px-3 py-2 rounded-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg origin-right scale-95 group-hover:scale-100">Chat Zalo</span>
        </a>
        
        <a 
          href="tel:0903427743" 
          className="flex items-center justify-center w-14 h-14 bg-red-600 text-white rounded-full shadow-lg hover:-translate-y-1 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 relative group"
        >
           <span className="absolute inset-0 rounded-full border-2 border-red-500 animate-ping opacity-75 pointer-events-none"></span>
           <span className="absolute inset-[-4px] rounded-full border border-red-500/50 animate-ping opacity-50 pointer-events-none" style={{ animationDelay: '0.2s' }}></span>
           <Phone className="w-6 h-6 animate-ring relative z-10" />
           <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-neutral-900 text-sm font-bold px-3 py-2 rounded-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg origin-right scale-95 group-hover:scale-100">0903.427.743</span>
        </a>
      </div>
    </div>
  );
}

function FeatureRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-2.5 border-b border-neutral-700/50 hover:bg-white/5 px-3 rounded -mx-3 transition-colors">
      <span className="text-neutral-400 text-sm">{label}</span>
      <span className="font-medium text-white text-sm text-right max-w-[55%]">{value}</span>
    </div>
  );
}

function EquipmentCard({ title, desc, image }: { title: string; desc: string; image: string }) {
  return (
    <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full hover:-translate-y-1 overflow-hidden">
      <div className="aspect-[4/3] w-full bg-neutral-100 overflow-hidden relative border-b border-neutral-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <h3 className="font-bold text-lg text-neutral-900 uppercase pr-8 relative leading-snug mb-4">{title}
          <ChevronRight className="w-5 h-5 text-neutral-300 absolute right-0 top-0 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
        </h3>
        <p className="text-neutral-500 text-sm leading-relaxed mt-auto pt-4 border-t border-neutral-100">{desc}</p>
      </div>
    </div>
  );
}

function CourseSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-bold text-lg text-red-400 mb-5 pb-2 border-b border-neutral-700">{title}</h4>
      <ul className="space-y-3 text-sm text-neutral-300 list-none">
        {children}
      </ul>
    </div>
  );
}

function CourseItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5">
      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-600 shrink-0" />
      <span className="leading-snug">{text}</span>
    </li>
  );
}

function DetailItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 p-3 rounded-xl hover:bg-neutral-700/50 transition-colors border border-transparent hover:border-neutral-600/50">
      <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
      <span className="text-sm md:text-base text-neutral-200 leading-snug">{text}</span>
    </li>
  );
}

function PolicyCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
      <div className="w-14 h-14 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="font-bold text-xl text-neutral-900 mb-5">{title}</h3>
      <ul className="space-y-3 text-sm text-neutral-600 list-none">
        {children}
      </ul>
    </div>
  );
}

function PolicyItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2">
      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
      <span className="leading-relaxed">{text}</span>
    </li>
  );
}
