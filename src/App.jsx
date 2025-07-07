
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const App = () => {
  const testimonials = [
    {
      name: 'John Smith',
      title: 'CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      text: 'الخدمة ممتازة والدعم الفني متاح دائماً. أنصح بشدة باستخدام هذه المنصة لأي شخص يريد بناء متجر إلكتروني احترافي.',
    },
    {
      name: 'Jane Doe',
      title: 'CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      text: 'تجربة رائعة مع فريق محترف. تم إنشاء متجري الإلكتروني بسرعة وبجودة عالية. الأسعار مناسبة والخدمة ممتازة.',
    },
    {
      name: 'Ahmed Ali',
      title: 'CEO',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      text: 'منصة سهلة الاستخدام وتوفر جميع الأدوات اللازمة لإدارة المتجر. دعم العملاء متميز ويساعدون في حل أي مشكلة بسرعة.',
    },
    {
      name: 'Sarah Johnson',
      title: 'CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      text: 'أفضل منصة للتجارة الإلكترونية جربتها. سهولة في التصميم وإدارة المنتجات. أنصح كل من يريد بدء تجارته الإلكترونية.',
    },
  ];

  return (
    <div className=" bg-gray-50 font-sans">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="bg-gray-100 rounded-lg shadow-lg p-6 sm:p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">

            <div className="order-1 lg:order-2">
              <div className="space-y-4 sm:space-y-6">
                <div className="border-r-4 border-orange-500 pr-4">
                  <h3 className="font-semibold text-gray-800 text-lg sm:text-xl mb-2">
                    هل يمكن الحصول على تطبيق خاص بمتجر الهاتف المحمول؟
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    نعم، يمكنك الحصول على تطبيق خاص بمتجر الهاتف المحمول من خلال App Store أو Google Play
                  </p>
                </div>
                <div className="border-r-4 border-orange-500 pr-4">
                  <h3 className="font-semibold text-gray-800 text-lg sm:text-xl mb-2">
                    هل يمكن ربط التطبيق المحمول بمتجر الكتروني؟
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    نعم، يمكن ربط التطبيق المحمول بمتجرك الإلكتروني بسهولة
                  </p>
                </div>
                <div className="border-r-4 border-orange-500 pr-4">
                  <h3 className="font-semibold text-gray-800 text-lg sm:text-xl mb-2">
                    كيف يمكن التواصل مع الدعم؟
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    يمكنك التواصل مع فريق الدعم من خلال البريد الإلكتروني أو الهاتف
                  </p>
                </div>
              </div>
              <div className="mt-6 sm:mt-8 bg-gray-900 text-white p-4 sm:p-6 rounded-lg w-80" dir="rtl">
                <h3 className="text-lg sm:text-xl font-bold mb-2">هل تريد مساعدة؟</h3>
                <p className="text-gray-200 text-sm sm:text-base mb-4">
                  تواصل معنا الآن للحصول على المساعدة
                </p>
                <button className="bg-yellow-600 text-black px-4 sm:px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors text-sm sm:text-base">
                  تواصل معنا
                </button>
              </div>
            </div>
            <div className="order-2 lg:order-1">
              <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 lg:mb-8" dir="rtl">
                الأسئلة الشائعة
              </h1>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Customer Support"
                className="w-full max-w-[12rem] sm:max-w-sm mx-auto rounded-lg shadow-lg min-w-[150px]"
              />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              ماذا يقول العملاء عنا
            </h2>
            <div className="flex justify-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">5</span>
              </div>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={16}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            loop
            className="swiper-container"
            dir="rtl"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center">
                  <div className="w-[80px] h-[80px] sm:w-16 sm:h-16 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">{testimonial.text}</p>
                  <h4 className="font-bold text-gray-800 text-base sm:text-lg">
                    {testimonial.name}, {testimonial.title}
                  </h4>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination mt-6 sm:mt-8"></div>
          </Swiper>
        </section>
      </main>

      <footer className="bg-yellow-100 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center space-x-2 space-x-reverse mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Q</span>
                </div>
                <span className="font-bold text-lg sm:text-xl">Quickly</span>

              </div>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                منصة شاملة للتجارة الإلكترونية
              </p>
              <form className="flex items-center space-x-2" onSubmit={(e) => {
                e.preventDefault();
                const email = e.currentTarget.email.value;
                
                console.log(`Sending email ${email} to newsletter service`);
              }}>
                <button type="submit" className="bg-black border border-gray-600 px-2 py-1 rounded-lg text-white hover:bg-gray-700">
                  إرسال 
                </button>
                <input type="email" name="email" placeholder="ادخل البريد الالكتروني" className="bg-black border border-gray-600 px-2 py-1 rounded-lg text-gray-600" />
                
              </form>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-base sm:text-lg mb-4">الخدمات</h4>
              <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                <li><a href="#" className="hover:text-orange-500">إنشاء متجر</a></li>
                <li><a href="#" className="hover:text-orange-500">تطبيق محمول</a></li>
                <li><a href="#" className="hover:text-orange-500">الدعم الفني</a></li>
                <li><a href="#" className="hover:text-orange-500">التسويق</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-base sm:text-lg mb-4">الشركة</h4>
              <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                <li><a href="#" className="hover:text-orange-500">من نحن</a></li>
                <li><a href="#" className="hover:text-orange-500">فريق العمل</a></li>
                <li><a href="#" className="hover:text-orange-500">الوظائف</a></li>
                <li><a href="#" className="hover:text-orange-500">الأخبار</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-base sm:text-lg mb-4">تواصل معنا</h4>
              <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                <li>info@quickly.com</li>
                <li>+966 123 456 789</li>
                <li>الرياض، المملكة العربية السعودية</li>

              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-600 text-sm sm:text-base">
            <p>© 2024 Quickly. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
