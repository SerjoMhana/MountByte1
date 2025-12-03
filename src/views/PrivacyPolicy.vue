<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
    <section class="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-black opacity-20"></div>
      </div>
      <div class="container mx-auto px-6 relative z-10 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">{{ $t('privacyPolicy.title') }}</h1>
        <p class="text-xl max-w-3xl mx-auto">{{ $t('privacyPolicy.effectiveDate') }}: {{ getCurrentDate() }}</p>
      </div>
    </section>

    <section class="py-16 px-6">
      <div class="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <!-- Language Toggle -->
        <div class="flex justify-end mb-6">
          <button 
            @click="toggleLanguage" 
            class="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {{ $t('privacyPolicy.switchLanguage') }}
          </button>
        </div>

        <!-- Privacy Policy Content -->
        <div v-if="locale === 'ar'" class="text-right leading-relaxed space-y-6">
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <h2 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">1. التزامنا بالخصوصية والمقدمة</h2>
            <p>
              تولي Mount Byte (المشار إليها بـ "الشركة"، "نحن"، أو "لنا")، وهي شركة متخصصة في تصميم وتطوير المواقع الإلكترونية والحلول الرقمية، أهمية قصوى لخصوصية عملائها وزوار موقعها الإلكتروني. تهدف هذه السياسة إلى شرح كيفية جمعنا، استخدامنا، معالجتنا، وكشفنا عن معلوماتك الشخصية التي تُجمع عبر موقعنا الإلكتروني والخدمات المقدمة (بما في ذلك خدمات تطوير وتصميم الويب، والاستضافة، والدعم الفني).
            </p>
            <p>
              باستخدامك لموقعنا أو خدماتنا، فإنك توافق على ممارسات جمع واستخدام المعلومات الموضحة في هذه السياسة.
            </p>

            <h2 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-8">2. أنواع المعلومات التي نجمعها</h2>
            <p>نحن نجمع نوعين رئيسيين من المعلومات: معلومات شخصية ومعلومات غير شخصية.</p>
            
            <h3 class="text-xl font-semibold mt-4">أ. المعلومات الشخصية التي تقدمها لنا (Data Provided by You):</h3>
            <p>نقوم بجمع هذه المعلومات عندما تتصل بنا، تطلب عرض سعر، تملأ نموذج مشروع، أو تتعاقد معنا:</p>
            <table class="min-w-full mt-4 border border-gray-300 dark:border-gray-600">
              <thead>
                <tr class="bg-gray-100 dark:bg-gray-700">
                  <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-right">فئة المعلومات</th>
                  <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-right">أمثلة على البيانات المجمعة</th>
                  <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-right">الغرض من الجمع</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">معلومات الاتصال</td>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">الاسم الكامل، البريد الإلكتروني، رقم الهاتف، اسم الشركة.</td>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">لإنشاء حساب، التواصل بخصوص المشروع، وإرسال الفواتير.</td>
                </tr>
                <tr class="bg-gray-50 dark:bg-gray-700">
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">معلومات المشروع</td>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">متطلبات الموقع، الجمهور المستهدف، المحتوى المقدم إلينا (صور، نصوص)، بيانات الوصول المؤقتة (عند الضرورة لتنفيذ العمل).</td>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">لتنفيذ الخدمات المتفق عليها وصيانة الحلول الرقمية.</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">معلومات الدفع</td>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">تفاصيل بطاقة الائتمان أو الحساب البنكي.</td>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">لمعالجة رسوم الخدمات. تتم المعالجة عبر بوابات دفع آمنة ولا يتم تخزين البيانات الحساسة على خوادمنا.</td>
                </tr>
                <tr class="bg-gray-50 dark:bg-gray-700">
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">المراسلات</td>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">سجلات الاتصالات عبر البريد الإلكتروني أو الهاتف أو نماذج الدعم.</td>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">للرد على الاستفسارات، وتوفير خدمة عملاء فعالة، وتحسين الجودة.</td>
                </tr>
              </tbody>
            </table>

            <h3 class="text-xl font-semibold mt-6">ب. معلومات يتم جمعها تلقائيًا (Automated Data Collection):</h3>
            <p>نستخدم أدوات وتقنيات تحليلية لجمع بيانات تتعلق بتفاعلك مع موقعنا:</p>
            <ul class="list-disc pr-6 mt-2 space-y-2">
              <li><strong>بيانات الاستخدام:</strong> عنوان IP، نوع نظام التشغيل والمتصفح، الصفحات التي زرتها، مدة الزيارة، ومسارات النقر.</li>
              <li><strong>ملفات تعريف الارتباط (Cookies):</strong> ملفات نصية صغيرة تُخزّن على جهازك. نستخدمها لأغراض التحليل وتحسين تجربة المستخدم. (انظر القسم 5).</li>
            </ul>

            <h2 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-8">3. الأساس القانوني واستخدام المعلومات</h2>
            <p>نحن نعتمد على الأسس القانونية التالية لمعالجة معلوماتك الشخصية:</p>
            <ul class="list-disc pr-6 mt-2 space-y-2">
              <li><strong>تنفيذ العقد:</strong> معالجة البيانات ضرورية لتنفيذ التزاماتنا التعاقدية معك (مثل تصميم موقعك).</li>
              <li><strong>المصالح المشروعة:</strong> استخدام بياناتك لتحسين خدماتنا، اكتشاف الاحتيال، وتأمين أنظمتنا.</li>
              <li><strong>الموافقة:</strong> حيثما يكون ذلك مطلوبًا، سنطلب موافقتك الصريحة على معالجة البيانات (مثل إرسال النشرات الإخبارية).</li>
            </ul>
            
            <h3 class="text-xl font-semibold mt-4">أغراض الاستخدام:</h3>
            <ul class="list-disc pr-6 mt-2 space-y-2">
              <li>إدارة المشروع: بدء وتخطيط وتنفيذ وإكمال مشاريع تطوير الويب.</li>
              <li>الدعم والعمليات: تقديم الدعم الفني، وصيانة البنية التحتية للموقع.</li>
              <li>التسويق والتطوير: تحليل الاتجاهات لتقديم محتوى إعلاني وعروض ذات صلة باحتياجاتك (مع خيار إلغاء الاشتراك دائمًا).</li>
              <li>الامتثال القانوني: الامتثال للقوانين واللوائح المعمول بها.</li>
            </ul>

            <h2 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-8">4. مشاركة والكشف عن المعلومات</h2>
            <p>تلتزم Mount Byte بالحفاظ على سرية بياناتك. لا نبيع، نؤجر، أو نتاجر ببياناتك الشخصية. قد يتم الكشف عن معلوماتك في الحالات المحددة التالية:</p>
            <ul class="list-disc pr-6 mt-2 space-y-2">
              <li><strong>مقاولون من الباطن (Subcontractors) ومقدمو الخدمات:</strong> قد نشارك البيانات مع شركاء موثوقين (مثل خدمات الاستضافة السحابية، أدوات إدارة المشاريع) الذين يعملون نيابةً عنا ويخضعون لاتفاقيات سرية صارمة.</li>
              <li><strong>التحويلات الدولية للبيانات:</strong> في حال تم تخزين بياناتك أو معالجتها خارج بلد إقامتك، سنتخذ التدابير اللازمة لضمان حماية بياناتك وفقًا لهذه السياسة والمعايير القانونية المعمول بها.</li>
              <li><strong>الامتثال والجهات التنظيمية:</strong> عندما يقتضي القانون أو بأمر من سلطة قضائية أو حكومية مختصة.</li>
            </ul>

            <h2 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-8">5. ملفات تعريف الارتباط (Cookies) والتقنيات المماثلة</h2>
            <p>نستخدم ملفات تعريف الارتباط لتحديد المستخدمين المتكررين، تذكر تفضيلاتهم، وتحليل سلوك الزوار لتحسين موقعنا.</p>
            <h3 class="text-xl font-semibold mt-4">أنواع ملفات تعريف الارتباط التي نستخدمها:</h3>
            <ul class="list-disc pr-6 mt-2 space-y-2">
              <li><strong>ضرورية (Necessary):</strong> لا غنى عنها لعمل الموقع بشكل صحيح (مثل تذكر حالة تسجيل الدخول).</li>
              <li><strong>تحليلية/الأداء (Analytical/Performance):</strong> تساعدنا على فهم كيفية استخدام الزوار للموقع وتحديد المشكلات.</li>
              <li><strong>وظيفية (Functional):</strong> تسمح بتخصيص الموقع بناءً على اختياراتك (مثل اللغة).</li>
            </ul>
            <p class="mt-4">يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال إعدادات متصفح الويب الخاص بك.</p>

            <h2 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-8">6. أمن البيانات وحماية المعلومات</h2>
            <p>تستخدم Mount Byte تدابير أمنية تقنية وتنظيمية متقدمة لحماية معلوماتك من الوصول غير المصرح به، التعديل، الإفصاح، أو الإتلاف. تشمل هذه التدابير ما يلي:</p>
            <ul class="list-disc pr-6 mt-2 space-y-2">
              <li><strong>التشفير (Encryption):</strong> استخدام بروتوكولات التشفير القياسية (SSL/TLS) لحماية البيانات أثناء النقل.</li>
              <li><strong>التحكم بالوصول:</strong> تقييد الوصول إلى البيانات الشخصية للموظفين والمقاولين الذين يحتاجون إليها بشدة لأداء مهامهم.</li>
              <li><strong>المراجعة المنتظمة:</strong> إجراء عمليات تدقيق أمني منتظمة لأنظمتنا.</li>
            </ul>

            <h2 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-8">7. حقوقك في حماية البيانات</h2>
            <p>وفقاً للقوانين المعمول بها، قد يكون لديك الحقوق التالية فيما يتعلق ببياناتك الشخصية:</p>
            <table class="min-w-full mt-4 border border-gray-300 dark:border-gray-600">
              <thead>
                <tr class="bg-gray-100 dark:bg-gray-700">
                  <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-right">الحق</th>
                  <th class="border border-gray-300 dark:border-gray-600 px-4 py-2 text-right">الوصف</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">الحق في الوصول</td>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">طلب الحصول على نسخة من البيانات الشخصية التي نحتفظ بها عنك.</td>
                </tr>
                <tr class="bg-gray-50 dark:bg-gray-700">
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">الحق في التصحيح</td>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">طلب تصحيح أي بيانات غير دقيقة أو غير كاملة.</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">الحق في المسح (الحق في النسيان)</td>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">طلب حذف بياناتك الشخصية في ظروف معينة.</td>
                </tr>
                <tr class="bg-gray-50 dark:bg-gray-700">
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">الحق في الاعتراض</td>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">الاعتراض على معالجتنا لبياناتك لأغراض التسويق المباشر.</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">الحق في سحب الموافقة</td>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">سحب موافقتك على المعالجة متى كان الأساس القانوني لها هو الموافقة.</td>
                </tr>
              </tbody>
            </table>
            <p class="mt-4">لممارسة أي من هذه الحقوق، يرجى التواصل معنا باستخدام تفاصيل الاتصال الواردة في القسم 9.</p>

            <h2 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-8">8. التغييرات على سياسة الخصوصية هذه</h2>
            <p>نحتفظ بالحق في تحديث سياسة الخصوصية هذه أو تعديلها في أي وقت. سيتم نشر النسخة المحدثة على هذه الصفحة، وسيصبح ساري المفعول فور نشرها. نشجعك على مراجعة هذه السياسة بشكل دوري للاطلاع على أي تغييرات.</p>

            <h2 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-8">9. الاتصال بنا</h2>
            <p>إذا كان لديك أي أسئلة، استفسارات، أو طلبات تتعلق بسياسة الخصوصية هذه أو كيفية معالجتنا لبياناتك الشخصية، يرجى التواصل مع مسؤول حماية البيانات لدينا على:</p>
            <div class="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p><strong>اسم الشركة:</strong> Mount Byte</p>
              <p><strong>البريد الإلكتروني المخصص للخصوصية:</strong> <a href="mailto:privacy@mountbyte.ly" class="text-indigo-600 dark:text-indigo-400 hover:underline">privacy@mountbyte.ly</a></p>
            </div>
          </div>
        </div>

        <div v-else class="leading-relaxed space-y-6">
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <h2 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400">1. Commitment to Privacy and Introduction</h2>
            <p>
              Mount Byte ("Company," "we," or "us"), a company specializing in website design and digital solutions, places utmost importance on the privacy of its customers and website visitors. This policy aims to explain how we collect, use, process, and disclose your personal information gathered through our website and provided services (including web design and development services, hosting, and technical support).
            </p>
            <p>
              By using our website or services, you agree to the data collection and usage practices outlined in this policy.
            </p>

            <h2 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-8">2. Types of Information We Collect</h2>
            <p>We collect two main types of information: personal information and non-personal information.</p>
            
            <h3 class="text-xl font-semibold mt-4">A. Personal Information You Provide to Us (Data Provided by You):</h3>
            <p>We collect this information when you contact us, request a quote, fill out a project form, or contract with us:</p>
            <table class="min-w-full mt-4 border border-gray-300 dark:border-gray-600">
              <thead>
                <tr class="bg-gray-100 dark:bg-gray-700">
                  <th class="border border-gray-300 dark:border-gray-600 px-4 py-2">Information Category</th>
                  <th class="border border-gray-300 dark:border-gray-600 px-4 py-2">Examples of Collected Data</th>
                  <th class="border border-gray-300 dark:border-gray-600 px-4 py-2">Purpose of Collection</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">Contact Information</td>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">Full name, email address, phone number, company name.</td>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">To create accounts, communicate about projects, and send invoices.</td>
                </tr>
                <tr class="bg-gray-50 dark:bg-gray-700">
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">Project Information</td>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">Website requirements, target audience, content provided to us (images, texts), temporary access credentials (when necessary to perform work).</td>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">To execute agreed-upon services and maintain digital solutions.</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">Payment Information</td>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">Credit card or bank account details.</td>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">To process service fees. Processing is done through secure payment gateways, and sensitive data is not stored on our servers.</td>
                </tr>
                <tr class="bg-gray-50 dark:bg-gray-700">
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">Communications</td>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">Records of communications via email, phone, or support forms.</td>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">To respond to inquiries, provide effective customer service, and improve quality.</td>
                </tr>
              </tbody>
            </table>

            <h3 class="text-xl font-semibold mt-6">B. Automatically Collected Information (Automated Data Collection):</h3>
            <p>We use analytical tools and techniques to collect data related to your interaction with our website:</p>
            <ul class="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Usage Data:</strong> IP address, operating system and browser type, pages visited, visit duration, and click paths.</li>
              <li><strong>Cookies:</strong> Small text files stored on your device. We use them for analysis and to improve user experience. (See Section 5).</li>
            </ul>

            <h2 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-8">3. Legal Basis and Use of Information</h2>
            <p>We rely on the following legal bases for processing your personal information:</p>
            <ul class="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Contract Performance:</strong> Data processing is necessary to fulfill our contractual obligations to you (such as designing your website).</li>
              <li><strong>Legitimate Interests:</strong> Using your data to improve our services, detect fraud, and secure our systems.</li>
              <li><strong>Consent:</strong> Where required, we will request your explicit consent for data processing (such as sending newsletters).</li>
            </ul>
            
            <h3 class="text-xl font-semibold mt-4">Purposes of Use:</h3>
            <ul class="list-disc pl-6 mt-2 space-y-2">
              <li>Project Management: Initiating, planning, executing, and completing web development projects.</li>
              <li>Support and Operations: Providing technical support and maintaining website infrastructure.</li>
              <li>Marketing and Development: Analyzing trends to provide advertising content and offers relevant to your needs (with an option to unsubscribe at any time).</li>
              <li>Legal Compliance: Complying with applicable laws and regulations.</li>
            </ul>

            <h2 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-8">4. Sharing and Disclosure of Information</h2>
            <p>Mount Byte is committed to maintaining the confidentiality of your data. We do not sell, rent, or trade your personal data. Your information may be disclosed in the following specific cases:</p>
            <ul class="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Subcontractors and Service Providers:</strong> We may share data with trusted partners (such as cloud hosting services, project management tools) who work on our behalf and are subject to strict confidentiality agreements.</li>
              <li><strong>International Data Transfers:</strong> If your data is stored or processed outside your country of residence, we will take necessary measures to ensure your data is protected according to this policy and applicable legal standards.</li>
              <li><strong>Compliance and Regulatory Authorities:</strong> When required by law or by order of a competent judicial or government authority.</li>
            </ul>

            <h2 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-8">5. Cookies and Similar Technologies</h2>
            <p>We use cookies to identify returning users, remember their preferences, and analyze visitor behavior to improve our website.</p>
            <h3 class="text-xl font-semibold mt-4">Types of Cookies We Use:</h3>
            <ul class="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Necessary:</strong> Essential for the website to function properly (such as remembering login status).</li>
              <li><strong>Analytical/Performance:</strong> Help us understand how visitors use the website and identify issues.</li>
              <li><strong>Functional:</strong> Allow customization of the website based on your choices (such as language).</li>
            </ul>
            <p class="mt-4">You can control cookie settings through your web browser settings.</p>

            <h2 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-8">6. Data Security and Information Protection</h2>
            <p>Mount Byte employs advanced technical and organizational security measures to protect your information from unauthorized access, modification, disclosure, or destruction. These measures include:</p>
            <ul class="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Encryption:</strong> Using standard encryption protocols (SSL/TLS) to protect data during transmission.</li>
              <li><strong>Access Control:</strong> Restricting access to personal data to employees and contractors who need it strictly for performing their duties.</li>
              <li><strong>Regular Review:</strong> Conducting regular security audits of our systems.</li>
            </ul>

            <h2 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-8">7. Your Data Protection Rights</h2>
            <p>Under applicable laws, you may have the following rights regarding your personal data:</p>
            <table class="min-w-full mt-4 border border-gray-300 dark:border-gray-600">
              <thead>
                <tr class="bg-gray-100 dark:bg-gray-700">
                  <th class="border border-gray-300 dark:border-gray-600 px-4 py-2">Right</th>
                  <th class="border border-gray-300 dark:border-gray-600 px-4 py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Right of Access</td>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">Request a copy of the personal data we hold about you.</td>
                </tr>
                <tr class="bg-gray-50 dark:bg-gray-700">
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Right to Rectification</td>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">Request correction of any inaccurate or incomplete data.</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Right to Erasure (Right to be Forgotten)</td>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">Request deletion of your personal data under certain circumstances.</td>
                </tr>
                <tr class="bg-gray-50 dark:bg-gray-700">
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Right to Object</td>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">Object to our processing of your data for direct marketing purposes.</td>
                </tr>
                <tr>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2 font-semibold">Right to Withdraw Consent</td>
                  <td class="border border-gray-300 dark:border-gray-600 px-4 py-2">Withdraw your consent to processing whenever the legal basis is consent.</td>
                </tr>
              </tbody>
            </table>
            <p class="mt-4">To exercise any of these rights, please contact us using the contact details provided in Section 9.</p>

            <h2 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-8">8. Changes to This Privacy Policy</h2>
            <p>We reserve the right to update or modify this privacy policy at any time. The updated version will be posted on this page and will become effective immediately upon posting. We encourage you to review this policy periodically to stay informed of any changes.</p>

            <h2 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-8">9. Contact Us</h2>
            <p>If you have any questions, inquiries, or requests regarding this privacy policy or how we process your personal data, please contact our Data Protection Officer at:</p>
            <div class="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p><strong>Company Name:</strong> Mount Byte</p>
              <p><strong>Privacy Email:</strong> <a href="mailto:privacy@mountbyte.ly" class="text-indigo-600 dark:text-indigo-400 hover:underline">privacy@mountbyte.ly</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const toggleLanguage = () => {
  locale.value = locale.value === 'ar' ? 'en' : 'ar';
};

const getCurrentDate = () => {
  const today = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return today.toLocaleDateString(locale.value === 'ar' ? 'ar-EG' : 'en-US', options);
};
</script>

<style scoped>
/* RTL support for Arabic content */
[dir="rtl"] table th,
[dir="rtl"] table td {
  text-align: right;
}

/* Responsive table adjustments */
@media (max-width: 768px) {
  table {
    font-size: 0.875rem;
  }
  
  table th,
  table td {
    padding: 0.5rem;
  }
}
</style>