import React from 'react'
import { motion } from 'framer-motion';
import injazLogo from '../assets/injaz.png'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import secondLogo from '../assets/injaz-03.png'

const About = () => {
    const sections = [
        {
          id: 'about',
          title: `من <span class='text-[#0383af]' >نحن</span>:`,
          description: `نادي انجاز هو نادي ذو طابع تكنولوجي علمي
          لا يتعامل مع أي جهات سياسية أو نقابية في
          جامعة زيان عاشور الجلفة مكرس لتعزيز بيئة
          ديناميكية و تعاونية حيث يشارك الطلاب و
          أعضاء هيئة التدريس في الاستكشاف العلمي
         و الابتكار و تطوير المهارات الحيوية الضرورية
          للنجاح في المسارين الأكاديمي و المهني.</br></br>
          رسالتنا هي ان نلهم شغفاً بالعلوم و زيادة 
        الاعمال و روح التعلم المستدام.
          `
        },
        {
            id: 'whyinjaz',
            title: `لماذا <span class='text-[#0383af]' >انجــاز</span> ؟`,   
            description: `نعزز الروح العلمية والبحثية بين الأعضاء ونوفر بيئة مشجعة لتبادل الأفكار وتطوير المشاريع العلمية. نسعى إلى تطوير المهارات الشخصية والمهنية من خلال ورش عمل مخصصة، كما نوفر بيئة تحفيزية تشجع الأفراد على تحقيق أقصى إمكانياتهم وأهدافهم العلمية. توفر "<span class='text-[#0383af]' >إنجاز</span>" فرصًا فريدة للتعلم من خلال ورش العمل والفعاليات المنظمة، مما يشجع الأفراد على الاستفادة من هذه الفرص المميزة للتعلم والتعاون والنمو معًا، بهدف تشكيل مستقبل العلوم والابتكار.`,
        },
        {
          id: 'events',
          title: 'الأنشطة الخاصة بالنادي:',
          description: `نقوم بتنظيم مجموعة متنوعة من الأنشطة التي تشمل تعزيز المهارات الريادية من خلال ورش عمل وفعاليات تهدف إلى تطوير الروح الريادية وتنمية القدرات على ابتكار الأفكار. كذلك، يركز النادي على التفوق الأكاديمي بتقديم ورش عمل أكاديمية ومحاضرات من أساتذة محترفين لتحسين مهارات البحث والكتابة والعرض لدى الأعضاء. بالإضافة إلى ذلك، يسعى النادي إلى تطوير مهارات الاتصال والعمل الجماعي عبر تقديم تدريبات على مهارات القيادة والتواصل وإدارة الوقت. يساهم النادي أيضًا في تطوير أفراد متكاملين من خلال تجهيز الأعضاء بالمعرفة العلمية والمهارات الشخصية الضرورية للنجاح الشخصي والمهني، علاوة على مشاركتهم في مشاريع خدمة المجتمع لتعزيز دورهم الاجتماعي. وأخيرًا، يوفر النادي منصات للتواصل بين الطلاب والأخصائيين في الصناعة والخبراء الأكاديميين، مما يعزز بناء شبكات علاقات مفيدة للأعضاء.`,
        },
        
        {
          id: 'secondLogo',
        },
      ];
    
  return (
     <div className="min-h-screen flex flex-col items-center p-6 bg-gray-200 text-gray-800 rounded-lg m-4">
      {/* Header Section */}
      <div className="flex items-center space-x-4 mb-8">
        <motion.img
          src={injazLogo}
          alt="Club Logo"
          className="w-20 h-20 rounded-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h1>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8" dir="rtl">
        {sections.map(({ id, title, description }) => (
          <motion.div
            key={id}
            className="flex flex-col bg-white shadow-md p-6 rounded-lg transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Conditional rendering for secondLogo */}
            {id === 'secondLogo' && (
              <motion.img
                src={secondLogo} 
                alt="Second Logo"
                className="w-70 h-70" 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            )}
            <h2 className="text-xl font-bold mb-2" dangerouslySetInnerHTML={{ __html: title }} ></h2>
            <p className="text-md leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: description }} ></p>
          </motion.div>
        ))}
      </div>

      {/* Contact Us Section */}
      <motion.div
        className="w-full max-w-5xl bg-white shadow-md p-6 rounded-lg mt-8 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xl font-bold mb-4">اتصل بنـــا</h2>
        <div className="w-full flex flex-col items-center sm:flex-row sm:justify-around">
          <div className="flex items-center mb-4 sm:mb-0">
            <FaPhoneAlt className="text-blue-600 text-2xl ml-2 mr-2" />
            <span className="text-md">0667 06 84 01</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-red-600 text-2xl ml-2 mr-2" />
            <span className="text-md">injaz.club1@gmail.com</span>
          </div>
        </div>
      </motion.div>

      {/* Back to Home */}
      <motion.a
        href="/"
        className="mt-8 bg-[#0383af] text-white py-3 text-lg px-6 rounded-lg hover:bg-[#09a2cc] transition-colors"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        العودة الى الصفحة الرئيسية
      </motion.a>
    </div>
  )
}

export default About