import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const tools = [
  {
    icon: "🧩",
    title: "JSON Formatter",
    link:'/json/',
    description: "فرمت و خوانایی JSON",
  },
  {
    icon: "🔤",
    title: "Base64 Encoder",
    link:'/',
    description: "کدگذاری و رمزگشایی متن",
  },
  {
    icon: "🎯",
    title: "Regex Tester",
    link:'/',
    description: "تست الگوهای عبارات منظم",
  },
  {
    icon: "🎨",
    title: "Color Picker",
    link:'/',
    description: "انتخاب رنگ و کپی آسان",
  },
  {
    icon: "📎",
    title: "URL Encoder",
    link:'/',
    description: "رمزگذاری لینک‌ها",
  },
  {
    icon: "🔐",
    title: "Password Generator",
    link:'/',
    description: "ساخت رمز عبور امن",
  },
  {
    icon: "⏱",
    title: "تایمر آنلاین",
    link:'/',
    description: "شمارش معکوس ساده",
  },
  {
    icon: "📐",
    title: "Pixel Ruler",
    link:'/',
    description: "خط‌کش برای طراحی وب",
  },
];


  return (
    <>
      <section className="text-center py-16 px-4 bg-gradient-to-r from-indigo-100 to-purple-100">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-900">جعبه ابزار ZebraCode</h2>
        <p className="text-lg text-slate-600 mb-6">ابزارهای ضروری برای توسعه‌دهندگان، طراحان و کاربران روزمره</p>
        <a href="#tools" className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition">🔧 مشاهده ابزارها</a>
      </section>
      <section id="tools" className="py-16 px-6 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-10 text-center">دسته‌بندی ابزارها</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <Link href={tool.link} key={index}>
              <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
                <h4 className="text-xl font-semibold mb-2">
                  {tool.icon} {tool.title}
                </h4>
                <p className="text-slate-600 text-sm">{tool.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
