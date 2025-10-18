import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      works: 'Our Works',
      articles: 'Articles',
      contact: 'Contact Us',
      form: 'Request Project',
      brand: 'MountByte',
      language: 'English',
      openMenu: 'Open main menu'
    },
    formView: {
      title: 'Request Your Project Now',
      subtitle: 'Fill out the form below and we will contact you as soon as possible.',
      fullName: 'Full Name',
      phoneNumber: 'Phone Number',
      proposedSiteName: 'Proposed Site Name',
      email: 'Email',
      notes: 'Notes about the site you want...',
      submitButton: 'Send Request',
      submittingButton: 'Sending...',
      successMessage: '✅ Your request has been received successfully! We will contact you soon.',
      errorMessage: '❌ An error occurred while sending the request. Please try again.',
      validationError: 'Please fill in all required fields.',
      connectionError: '⚠️ Failed to connect to the server. Please check your internet connection.'
    },
    home: {
      welcome: 'Welcome to our company!',
      description: 'We are a company that does things.'
    },
    whoWeAre: {
      whatWeOffer: 'What We Offer',
      professionalSolutions: 'Professional Solutions for Your Business'
    },
    statsCounter: {
      title: 'Our Impact in Numbers',
      subtitle: 'These numbers represent our commitment to excellence and our clients\' success.',
      happyClients: 'Happy Clients',
      projectsDone: 'Projects Done',
      yearsExperience: 'Years Experience',
      teamMembers: 'Team Members'
    },
    blogSection: {
      latestInsights: 'Latest Insights',
      subtitle: 'Stay updated with the latest trends and insights in technology and design.'
    },
    testimonials: {
      whatClientsSay: 'What Our Clients Say',
      successStories: 'Success Stories & Testimonials',
      subtitle: 'Don\'t just take our word for it. Here\'s what our satisfied clients have to say about our work.',
      sarahJohnson: 'Sarah Johnson',
      sarahTitle: 'CEO, TechStart Inc.',
      sarahQuote: 'MountByte transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations. The website they built for us increased our conversion rate by 150%.',
      mikeChen: 'Mike Chen',
      mikeTitle: 'Founder, InnovateLab',
      mikeQuote: 'Professional, reliable, and incredibly talented team. They delivered our e-commerce platform ahead of schedule and within budget. The performance improvements speak for themselves.',
      lisaRodriguez: 'Lisa Rodriguez',
      lisaTitle: 'Director, Creative Agency',
      lisaQuote: 'The team\'s creativity and technical expertise are unmatched. They brought our vision to life with stunning animations and perfect functionality. Highly recommended!',
      trustedBy: 'Trusted by 500+ Companies Worldwide'
    },
    callToAction: {
      titlePart1: 'Ready to Transform Your',
      titlePart2: 'Digital Presence?',
      description: 'Let\'s work together to create something extraordinary. Our team is ready to bring your vision to life with cutting-edge technology and stunning design.',
      startProject: 'Start Your Project',
      scheduleCall: 'Schedule a Call',
      secure: '100% Secure',
      support: '24/7 Support',
      awardWinning: 'Award Winning'
    },
    hero: {
      title1: 'We create digital solutions',
      title2: 'innovative for your business future',
      description: 'Transform your digital presence with cutting-edge technology, stunning design, and exceptional user experiences.',
      feature1: 'Modern designs and advanced technologies',
      feature2: 'Custom solutions that meet your ambitions',
      feature3: 'Support and maintenance to ensure optimal performance',
      contactUs: 'Contact Us',
      viewWorks: 'View Our Works',
      imageAlt: 'Website Development Vector Illustration'
    },
    "about": {
      "hero": {
        "title": "Innovating for a Brighter Future",
        "subtitle": "We are a team of passionate creators dedicated to building exceptional digital experiences."
      },
      "story": {
        "title": "Our Story",
        "paragraph1": "Founded in 2020, our journey began with a simple yet powerful vision: to empower businesses with cutting-edge technology and design. From humble beginnings, we've grown into a dynamic agency, driven by a commitment to excellence and a passion for innovation.",
        "paragraph2": "Over the years, we've collaborated with diverse clients, transforming ideas into impactful digital solutions. Our success is built on a foundation of strong relationships, continuous learning, and a relentless pursuit of perfection."
      },
      "imageAlt": "Our Story",
      "mission": {
        "title": "Our Mission & Values",
        "innovation": {
          "title": "Innovation",
          "description": "We constantly explore new technologies and creative approaches to deliver groundbreaking solutions."
        },
        "community": {
          "title": "Collaboration",
          "description": "We believe in working closely with our clients, fostering a partnership that drives mutual success."
        },
        "integrity": {
          "title": "Integrity",
          "description": "We uphold the highest standards of honesty and transparency in all our interactions."
        }
      }
    },
    whyus: {
      title: 'Why Us',
      subtitle: 'We deliver exceptional results through innovation, expertise, and dedication to your success.',
      card1: {
        title: 'Unique Design',
        description: 'We create stunning, modern designs that capture your brand essence and engage your audience effectively.'
      },
      card2: {
        title: 'High Performance',
        description: 'Our solutions are optimized for speed and performance, ensuring the best user experience across all devices.'
      },
      card3: {
        title: 'Continuous Support',
        description: 'Round-the-clock technical support and maintenance to keep your digital presence running smoothly.'
      },
      stats: {
        projectsCompleted: 'Projects Completed',
        clientSatisfaction: 'Client Satisfaction',
        teamMembers: 'Team Members',
        supportAvailable: 'Support Available'
      }
    },
    services: {
      title: 'Our Services',
      card1: {
        title: 'Website Development',
        desc: 'We build modern, fast, and responsive websites and web applications that meet your business needs.'
      },
      card2: {
        title: 'Technical Solutions',
        desc: 'We provide innovative solutions to complex technical problems and improve the performance of your existing systems.'
      },
      card3: {
        title: 'Technical Support',
        desc: 'Continuous technical support to ensure the continuity of your site and solve any emerging problems.'
      },
      card4: {
        title: 'Optimization and SEO',
        desc: 'We optimize your site for search engines to increase visibility and reach a wider audience.'
      }
    },
    blog: {
      title: 'Technical Articles',
      card1: {
        title: 'Latest Web Development Trends for 2024',
        description: 'An in-depth look at the new technologies and frameworks shaping the future of web development.',
        author: 'Ahmed Ali',
        date: 'June 15, 2024'
      },
      card2: {
        title: 'A Beginner\'s Guide to Artificial Intelligence',
        description: 'A simplified explanation of AI concepts and their practical applications in our daily lives.',
        author: 'Fatima Mohammed',
        date: 'May 28, 2024'
      }
    },
    "articles": {
      "article1": {
        "title": "Tiny Screens, Big Impact: The Forgotten Art Of Developing Web Apps For Feature Phones",
        "description": "Learn why flip phones still matter in 2025, and how you can design and build apps for these tiny devices.",
        "author": "Tom Barrasso",
        "fullContent": {
          "paragraph1": "In a world dominated by smartphones, it’s easy to forget that a significant portion of the global population still relies on feature phones. These devices, with their small screens and limited capabilities, present a unique set of challenges for web developers. However, they also offer a tremendous opportunity to reach a wider audience and make a real impact on people’s lives.",
          "paragraph2": "In this article, we’ll explore the world of feature phone development, from understanding the constraints of these devices to building and testing web apps that work seamlessly on them. We’ll also look at some of the tools and techniques you can use to create engaging and user-friendly experiences for feature phone users.",
          "heading1": "Why Feature Phones Still Matter",
          "paragraph3": "While smartphone adoption is on the rise, feature phones are still the primary means of accessing the internet for millions of people around the world. In many developing countries, they are the only affordable option for getting online. By developing for feature phones, you can reach a massive, untapped audience and provide them with access to essential services and information.",
          "heading2": "The Challenges of Feature Phone Development",
          "paragraph4": "Developing for feature phones is not without its challenges. You’ll need to contend with:",
          "list1": {
            "item1": "Small screen sizes",
            "item2": "Limited processing power and memory",
            "item3": "Slow network speeds",
            "item4": "Lack of support for modern web technologies"
          },
          "paragraph5": "However, with the right approach, you can overcome these challenges and create web apps that are both functional and enjoyable to use.",
          "heading3": "Tools and Techniques for Feature Phone Development",
          "paragraph6": "There are a number of tools and techniques you can use to make feature phone development easier. These include:",
          "list2": {
            "item1": "Using a lightweight CSS framework like Skeleton or Pure.css",
            "item2": "Optimizing images and other assets for small screens and slow networks",
            "item3": "Using a tool like a polyfill to add support for modern web technologies",
            "item4": "Testing your app on a real feature phone or an emulator"
          },
          "paragraph7": "By following these tips, you can create web apps that will work great on any device, no matter how small or limited."
        }
      }
    },
    "works": {
      "hero": {
        "title": "Our Creative Portfolio",
        "subtitle": "Explore a selection of our best work, showcasing our expertise in web development and design."
      },
      "filters": {
        "all": "All",
        "websites": "Websites",
        "designs": "Designs"
      },
      "no_projects": "No projects found for this category.",
      "projects": {
        "project1": {
          "name": "Personal Website for University Professor",
          "description": "Personal website for a university professor specializing in cybersecurity, showcasing academic achievements, research, and publications."
        },
        "project2": {
          "name": "Financial & Administrative Services Office",
          "description": "Professional office providing comprehensive financial and administrative services to help your business thrive and succeed."
        },
        "project3": {
          "name": "International School Website",
          "description": "Professional website for an international school showcasing their educational services, programs, and institutional information."
        },
        "project4": {
          "name": "International School with 3 Branches",
          "description": "Comprehensive website for an international school network with three branches, currently under development."
        },
        "project5": {
          "name": "Portfolio Website",
          "description": "Personal portfolio website for a creative professional, showcasing their best work."
        },
        "project6": {
          "name": "Dashboard UI Design",
          "description": "Clean and functional dashboard interface for a data analytics platform."
        }
      }
    },
    "articles": {
      "hero": {
        "title": "Our Articles",
        "subtitle": "Explore a selection of our best articles, showcasing our expertise in programming, design, and technical support."
      },
      "filters": {
        "all": "All",
        "programming": "Programming",
        "design": "Design",
        "technical-support": "Technical Support"
      },
      "no_articles": "No articles found for this category."
    },
    "contact": {
      "hero": {
        "title": "Get in Touch",
        "subtitle": "We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions."
      },
      "info": {
        "title": "Contact Information",
        "address": {
          "title": "Address",
          "value": "Tripoli, Libya"
        },
        "email": {
          "title": "Email Service",
          "value": "info@mountbyte.ly"
        },
        "phone": {
          "title": "Phone",
          "value": "+218 910079478"
        }
      },
      "form": {
        "title": "Send us a Message",
        "name": "Your Name",
        "email": "Your Email",
        "message": "Your Message",
        "submit": "Send Message",
        "success": "Thank you for your message! We will get back to you soon."
      }
    },
    footer: {
      description: 'We create digital solutions innovative for your business future.',
      links: 'Quick Links',
      newsletter: 'Newsletter',
      newsletter_prompt: 'Subscribe to our newsletter to get the latest updates.',
      email_placeholder: 'Your email',
      subscribe: 'Subscribe',
      rights: 'All rights reserved.'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عن الشركة',
      works: 'أعمالنا',
      articles: 'مقالات',
      contact: 'اتصل بنا',
      form: 'اطلب مشروع',
      brand: 'MountByte',
      language: 'العربية',
      openMenu: 'فتح القائمة الرئيسية'
    },
    formView: {
      title: 'اطلب مشروعك الآن',
      subtitle: 'املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن.',
      fullName: 'الاسم الكامل',
      phoneNumber: 'رقم الهاتف',
      proposedSiteName: 'اسم الموقع المقترح',
      email: 'البريد الإلكتروني',
      notes: 'ملاحظات عن الموقع الذي تريده...',
      submitButton: 'إرسال الطلب',
      submittingButton: 'جاري الإرسال...',
      successMessage: '✅ تم استلام طلبك بنجاح! سنتواصل معك قريباً.',
      errorMessage: '❌ حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.',
      validationError: 'يرجى ملء جميع الحقول المطلوبة.',
      connectionError: '⚠️ فشل الاتصال بالخادم. يرجى التحقق من اتصالك بالإنترنت.'
    },
    home: {
      welcome: 'مرحبا بكم في شركتنا!',
      description: 'نحن شركة تقوم بأشياء.'
    },
    whoWeAre: {
      whatWeOffer: 'ماذا نقدم',
      professionalSolutions: 'حلول احترافية لعملك'
    },
    statsCounter: {
      title: 'تأثيرنا بالأرقام',
      subtitle: 'تمثل هذه الأرقام التزامنا بالتميز ونجاح عملائنا.',
      happyClients: 'عملاء سعداء',
      projectsDone: 'مشاريع منجزة',
      yearsExperience: 'سنوات خبرة',
      teamMembers: 'أعضاء الفريق'
    },
    blogSection: {
      latestInsights: 'آخر المقالات',
      subtitle: 'ابق على اطلاع بأحدث الاتجاهات والرؤى في التكنولوجيا والتصميم.'
    },
    testimonials: {
      whatClientsSay: 'ماذا يقول عملاؤنا',
      successStories: 'قصص نجاح وشهادات',
      subtitle: 'لا تأخذ كلامنا فقط. إليك ما يقوله عملاؤنا الراضون عن عملنا.',
      sarahJohnson: 'سارة جونسون',
      sarahTitle: 'الرئيس التنفيذي، TechStart Inc.',
      sarahQuote: 'لقد غيرت MountByte حضورنا الرقمي بالكامل. لقد تجاوز اهتمامهم بالتفاصيل ونهجهم المبتكر توقعاتنا. زاد الموقع الذي بنوه لنا معدل التحويل لدينا بنسبة 150٪.',
      mikeChen: 'مايك تشن',
      mikeTitle: 'المؤسس، InnovateLab',
      mikeQuote: 'فريق محترف وموثوق وموهوب بشكل لا يصدق. لقد سلموا منصة التجارة الإلكترونية الخاصة بنا قبل الموعد المحدد وفي حدود الميزانية. تحسينات الأداء تتحدث عن نفسها.',
      lisaRodriguez: 'ليزا رودريجيز',
      lisaTitle: 'مدير، وكالة إبداعية',
      lisaQuote: 'إبداع الفريق وخبرته التقنية لا مثيل لهما. لقد حولوا رؤيتنا إلى حقيقة برسوم متحركة مذهلة ووظائف مثالية. نوصي بهم بشدة!',
      trustedBy: 'موثوق به من قبل أكثر من 500 شركة حول العالم'
    },
    callToAction: {
      titlePart1: 'هل أنت مستعد لتحويل',
      titlePart2: 'حضورك الرقمي؟',
      description: 'دعنا نعمل معًا لإنشاء شيء غير عادي. فريقنا مستعد لتحويل رؤيتك إلى حقيقة باستخدام أحدث التقنيات والتصميم المذهل.',
      startProject: 'ابدأ مشروعك',
      scheduleCall: 'حدد موعد مكالمة',
      secure: 'آمن 100٪',
      support: 'دعم 24/7',
      awardWinning: 'حائز على جوائز'
    },
    hero: {
      title1: 'نصنع لك حلولاً رقمية',
      title2: 'مبتكرة لمستقبل أعمالك',
      description: 'حوّل حضورك الرقمي بتقنيات متطورة، تصميم مذهل، وتجارب مستخدم استثنائية.',
      feature1: 'تصاميم عصرية وتقنيات متطورة',
      feature2: 'حلول مخصصة تلبي طموحاتك',
      feature3: 'دعم وصيانة لضمان الأداء الأمثل',
      contactUs: 'تواصل معنا',
      viewWorks: 'عرض أعمالنا',
      projects: 'مشاريع',
      satisfaction: 'رضا العملاء',
      years: 'سنوات',
      scrollToExplore: 'مرر للاستكشاف',
      imageAlt: 'توضيح متجه لتطوير المواقع'
    },
    "about": {
      "hero": {
        "title": "الابتكار لمستقبل أكثر إشراقًا",
        "subtitle": "نحن فريق من المبدعين المتحمسين المكرسين لبناء تجارب رقمية استثنائية."
      },
      "story": {
        "title": "قصتنا",
        "paragraph1": "تأسست في عام 2020، بدأت رحلتنا برؤية بسيطة ولكنها قوية: تمكين الشركات بأحدث التقنيات والتصاميم. من بدايات متواضعة، نمونا إلى وكالة ديناميكية، مدفوعة بالالتزام بالتميز والشغف بالابتكار.",
        "paragraph2": "على مر السنين، تعاونا مع عملاء متنوعين، محولين الأفكار إلى حلول رقمية مؤثرة. يعتمد نجاحنا على أساس من العلاقات القوية، والتعلم المستمر، والسعي الدؤوب نحو الكمال."
      },
      "imageAlt": "قصتنا",
      "mission": {
        "title": "مهمتنا وقيمنا",
        "innovation": {
          "title": "الابتكار",
          "description": "نستكشف باستمرار التقنيات الجديدة والأساليب الإبداعية لتقديم حلول رائدة."
        },
        "community": {
          "title": "التعاون",
          "description": "نؤمن بالعمل عن كثب مع عملائنا، وتعزيز الشراكة التي تدفع النجاح المتبادل."
        },
        "integrity": {
          "title": "النزاهة",
          "description": "نلتزم بأعلى معايير الصدق والشفافية في جميع تعاملاتنا."
        }
      }
    },
    whyus: {
      title: 'لماذا نحن',
      subtitle: 'نقدم نتائج استثنائية من خلال الابتكار والخبرة والتفاني في نجاحك.',
      card1: {
        title: 'تصميم فريد',
        description: 'نصمم تصاميم عصرية ومذهلة تجسد جوهر علامتك التجارية وتجذب جمهورك بفعالية.'
      },
      card2: {
        title: 'أداء عالي',
        description: 'حلولنا محسّنة للسرعة والأداء، مما يضمن أفضل تجربة للمستخدم عبر جميع الأجهزة.'
      },
      card3: {
        title: 'دعم متواصل',
        description: 'دعم فني وصيانة على مدار الساعة للحفاظ على حضورك الرقمي يعمل بسلاسة.'
      },
      stats: {
        projectsCompleted: 'مشاريع مكتملة',
        clientSatisfaction: 'رضا العملاء',
        teamMembers: 'أعضاء الفريق',
        supportAvailable: 'دعم متاح'
      }
    },
    services: {
      title: 'خدماتنا',
      card1: {
        title: 'تطوير المواقع',
        desc: 'نقوم ببناء مواقع وتطبيقات ويب حديثة وسريعة الاستجابة تلبي احتياجات عملك.'
      },
      card2: {
        title: 'حلول تقنية',
        desc: 'نقدم حلولاً مبتكرة للمشاكل التقنية المعقدة ونحسن أداء أنظمتك الحالية.'
      },
      card3: {
        title: 'دعم فني',
        desc: 'دعم فني متواصل لضمان استمرارية عمل موقعك وحل أي مشاكل طارئة.'
      },
      card4: {
        title: 'تحسين وأرشفة',
        desc: 'نحسن موقعك لمحركات البحث لزيادة الظهور والوصول إلى جمهور أوسع.'
      }
    },
    blog: {
      title: 'مقالات تقنية',
      card1: {
        title: 'أحدث اتجاهات تطوير الويب لعام 2024',
        description: 'نظرة متعمقة على التقنيات والأطر الجديدة التي تشكل مستقبل تطوير الويب.',
        author: 'أحمد علي',
        date: '15 يونيو 2024'
      },
      card2: {
        title: 'دليل المبتدئين إلى الذكاء الاصطناعي',
        description: 'شرح مبسط لمفاهيم الذكاء الاصطناعي وتطبيقاته العملية في حياتنا اليومية.',
        author: 'فاطمة محمد',
        date: '28 مايو 2024'
      }
    },
    "articles": {
      "article1": {
        "title": "شاشات صغيرة، تأثير كبير: فن تطوير تطبيقات الويب للهواتف المميزة المنسي",
        "description": "تعرف على سبب أهمية الهواتف القابلة للطي في عام 2025، وكيف يمكنك تصميم وبناء تطبيقات لهذه الأجهزة الصغيرة.",
        "author": "توم باراسو",
        "fullContent": {
          "paragraph1": "في عالم تهيمن عليه الهواتف الذكية، من السهل أن ننسى أن جزءًا كبيرًا من سكان العالم لا يزال يعتمد على الهواتف المميزة. هذه الأجهزة، بشاشاتها الصغيرة وقدراتها المحدودة، تمثل مجموعة فريدة من التحديات لمطوري الويب. ومع ذلك، فإنها توفر أيضًا فرصة هائلة للوصول إلى جمهور أوسع وإحداث تأثير حقيقي في حياة الناس.",
          "paragraph2": "في هذه المقالة، سنستكشف عالم تطوير الهواتف المميزة، بدءًا من فهم قيود هذه الأجهزة وصولاً إلى بناء واختبار تطبيقات الويب التي تعمل بسلاسة عليها. وسننظر أيضًا في بعض الأدوات والتقنيات التي يمكنك استخدامها لإنشاء تجارب جذابة وسهلة الاستخدام لمستخدمي الهواتف المميزة.",
          "heading1": "لماذا لا تزال الهواتف المميزة مهمة",
          "paragraph3": "بينما يتزايد اعتماد الهواتف الذكية، لا تزال الهواتف المميزة هي الوسيلة الأساسية للوصول إلى الإنترنت لملايين الأشخاص حول العالم. في العديد من البلدان النامية، هي الخيار الوحيد الميسور التكلفة للاتصال بالإنترنت. من خلال التطوير للهواتف المميزة، يمكنك الوصول إلى جمهور ضخم وغير مستغل وتزويدهم بالوصول إلى الخدمات والمعلومات الأساسية.",
          "heading2": "تحديات تطوير الهواتف المميزة",
          "paragraph4": "تطوير الهواتف المميزة لا يخلو من التحديات. ستحتاج إلى التعامل مع:",
          "list1": {
            "item1": "أحجام الشاشات الصغيرة",
            "item2": "قوة المعالجة والذاكرة المحدودة",
            "item3": "سرعات الشبكة البطيئة",
            "item4": "نقص الدعم لتقنيات الويب الحديثة"
          },
          "paragraph5": "ومع ذلك، بالنهج الصحيح، يمكنك التغلب على هذه التحديات وإنشاء تطبيقات ويب وظيفية وممتعة للاستخدام.",
          "heading3": "أدوات وتقنيات تطوير الهواتف المميزة",
          "paragraph6": "هناك عدد من الأدوات والتقنيات التي يمكنك استخدامها لتسهيل تطوير الهواتف المميزة. وتشمل هذه:",
          "list2": {
            "item1": "استخدام إطار عمل CSS خفيف الوزن مثل Skeleton أو Pure.css",
            "item2": "تحسين الصور والأصول الأخرى للشاشات الصغيرة والشبكات البطيئة",
            "item3": "استخدام أداة مثل polyfill لإضافة دعم لتقنيات الويب الحديثة",
            "item4": "اختبار تطبيقك على هاتف مميز حقيقي أو محاكي"
          },
          "paragraph7": "باتباع هذه النصائح، يمكنك إنشاء تطبيقات ويب ستعمل بشكل رائع على أي جهاز، بغض النظر عن صغره أو محدوديته."
        }
      }
    },
    "contact": {
      "hero": {
        "title": "تواصل معنا",
        "subtitle": "يسعدنا أن نسمع منك! سواء كان لديك سؤال حول خدماتنا، أسعارنا، أو أي شيء آخر، فريقنا جاهز للإجابة على جميع أسئلتك."
      },
      "info": {
        "title": "معلومات الاتصال",
        "address": {
          "title": "العنوان",
          "value": "طرابلس , ليبيا"
        },
        "email": {
          "title": "البريد الإلكتروني",
          "value": "info@mountbyte.ly"
        },
        "phone": {
          "title": "الهاتف",
          "value": "+218 910079478"
        }
      },
      "form": {
        "title": "أرسل لنا رسالة",
        "name": "اسمك",
        "email": "بريدك الإلكتروني",
        "message": "رسالتك",
        "submit": "إرسال الرسالة",
        "success": "شكرًا لرسالتك! سنعود إليك قريبًا."
      }
    },
    "works": {
      "hero": {
        "title": "مجموعة أعمالنا الإبداعية",
        "subtitle": "استكشف مجموعة من أفضل أعمالنا التي تعرض خبرتنا في تطوير وتصميم الويب."
      },
      "filters": {
        "all": "الكل",
        "websites": "مواقع ويب",
        "designs": "تصاميم"
      },
      "no_projects": "لم يتم العثور على مشاريع لهذه الفئة.",
      "projects": {
        "project1": {
          "name": "موقع شخصي لدكتورة جامعية",
          "description": "موقع شخصي لدكتورة جامعية متخصصة في الأمن السيبراني، يعرض إنجازاتها الأكاديمية وأبحاثها ومنشوراتها."
        },
        "project2": {
          "name": "مكتب للخدمات المالية والإدارية",
          "description": "مكتب احترافي يقدم خدمات مالية وإدارية شاملة لمساعدة عملك على الازدهار والنجاح."
        },
        "project3": {
          "name": "موقع مدرسة دولية",
          "description": "موقع احترافي لمدرسة دولية يعرض خدماتها التعليمية وبرامجها وبياناتها المؤسسية."
        },
        "project4": {
          "name": "مدرسة دولية بثلاثة فروع",
          "description": "موقع شامل لمدرسة دولية تتكون من ثلاثة فروع، لازال تحت البناء."
        },
        "project5": {
          "name": "موقع محفظة أعمال",
          "description": "موقع محفظة أعمال شخصي لمحترف مبدع، يعرض أفضل أعماله."
        },
        "project6": {
          "name": "تصميم واجهة مستخدم للوحة التحكم",
          "description": "واجهة لوحة تحكم نظيفة وعملية لمنصة تحليلات البيانات."
        }
      }
    },
    footer: {
      description: 'نصنع لك حلولاً رقمية مبتكرة لمستقبل أعمالك.',
      links: 'روابط سريعة',
      newsletter: 'النشرة البريدية',
      newsletter_prompt: 'اشترك في نشرتنا البريدية للحصول على آخر التحديثات.',
      email_placeholder: 'بريدك الإلكتروني',
      subscribe: 'اشتراك',
      rights: 'جميع الحقوق محفوظة.'
    }
  }
};

const i18n = createI18n({
  legacy: false, 
  locale: 'ar', 
  fallbackLocale: 'en', 
  messages,
});

export default i18n;
