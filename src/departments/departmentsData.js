const departmentsData = [
  {
    slug: "anaesthesiology",
    name: "Anaesthesiology",
    image: "/images/departments/anaesthesia.jpg",
    description:
      "The Anaesthesiology department provides safe anaesthesia care using modern monitoring, sedation and pain-relief techniques for all surgical procedures.",
    services: [
      "General Anaesthesia",
      "Spinal & Epidural Anaesthesia",
      "Painless Labour (Epidural)",
      "Critical Care Anaesthesia",
      "Post-operative Pain Management"
    ]
  },
  {
    slug: "cardiology",
    name: "Cardiology",
    image: "/images/departments/cardiology.jpg",
    description:
      "Comprehensive cardiac care with advanced diagnostic, interventional and surgical services for all heart-related conditions.",
    services: [
      "Angiogram & Angioplasty",
      "ECG, ECHO & Stress Test",
      "Heart Failure Management",
      "Pacemaker & Device Therapy",
      "Cardiac ICU"
    ]
  },
  {
    slug: "dermatology",
    name: "Dermatology",
    image: "/images/departments/dermatology.jpg",
    description:
      "Expert treatment for all skin, hair and nail disorders with advanced cosmetic dermatology solutions.",
    services: [
      "Skin Allergy Care",
      "Acne & Scar Treatment",
      "Psoriasis Management",
      "Laser Hair Removal",
      "Cosmetic Dermatology"
    ]
  },
  {
    slug: "dentistry",
    name: "Dentistry",
    image: "/images/departments/dentistry.jpg",
    description:
      "Complete dental care under one roof with painless procedures and modern dental technology.",
    services: [
      "Root Canal Treatment",
      "Cosmetic Dentistry",
      "Dental Implants",
      "Teeth Whitening",
      "Pediatric Dentistry"
    ]
  },
  {
    slug: "diabetology",
    name: "Diabetology",
    image: "/images/departments/diabetology.jpg",
    description:
      "Dedicated diabetic care with lifestyle management, insulin therapy and prevention of complications.",
    services: [
      "Blood Sugar Monitoring",
      "Diabetic Foot Care",
      "Insulin Therapy",
      "Diet & Lifestyle Guidance",
      "Complication Screening"
    ]
  },
  {
    slug: "emergency-care",
    name: "Emergency Care",
    image: "/images/departments/emergency.jpg",
    description:
      "24x7 emergency services with rapid response teams, trauma care, cardiac support and critical care.",
    services: [
      "24x7 Trauma Care",
      "Cardiac Emergencies",
      "Stroke Management",
      "Accident & Injury Treatment",
      "Ambulance Services"
    ]
  },
  {
    slug: "ent",
    name: "ENT",
    image: "/images/departments/ent.jpg",
    description:
      "Advanced ENT care offering medical and surgical treatment for ear, nose and throat conditions.",
    services: [
      "Hearing Loss Treatment",
      "Sinus Surgery",
      "Tonsil & Adenoid Surgery",
      "Voice Disorder Treatment",
      "Endoscopy"
    ]
  },
  {
    slug: "general-medicine",
    name: "General Medicine",
    image: "/images/departments/generalmedicine.jpg",
    description:
      "Comprehensive diagnosis and management of everyday health concerns and chronic medical conditions.",
    services: [
      "Fever & Infection Care",
      "Hypertension",
      "Thyroid Disorders",
      "Lifestyle Diseases",
      "Preventive Checkups"
    ]
  },
  {
    slug: "general-surgery",
    name: "General Surgery",
    image: "/images/departments/generalsurgery.jpg",
    description:
      "Expert surgical care offering minimally invasive and open surgical procedures.",
    services: [
      "Laparoscopic Surgeries",
      "Appendix Removal",
      "Hernia Repair",
      "Gallbladder Surgery",
      "Thyroid Surgery"
    ]
  },
  {
    slug: "gastroenterology",
    name: "Gastroenterology",
    image: "/images/departments/gastro.jpg",
    description:
      "Advanced diagnosis and treatment of stomach, liver and digestive system diseases.",
    services: [
      "Endoscopy & Colonoscopy",
      "Liver Disease Treatment",
      "IBS & Gastritis Care",
      "Pancreatic Disorders",
      "ERCP"
    ]
  },
  {
    slug: "internal-medicine",
    name: "Internal Medicine",
    image: "/images/departments/internalmedicine.jpg",
    description:
      "Holistic medical care for adult health conditions, chronic diseases and preventive medicine.",
    services: [
      "Diabetes & BP Management",
      "Thyroid & Hormone Disorders",
      "Infection Care",
      "Preventive Screening",
      "Lifestyle Guidance"
    ]
  },
  {
    slug: "icu",
    name: "ICU",
    image: "/images/departments/icu.jpg",
    description:
      "State-of-the-art Intensive Care Unit equipped for critical monitoring and emergency intervention.",
    services: [
      "Ventilator Support",
      "Cardiac Monitoring",
      "Emergency Resuscitation",
      "Sepsis Management",
      "Post-operative Critical Care"
    ]
  },
  {
    slug: "neonatology",
    name: "Neonatology",
    image: "/images/departments/neonatology.jpg",
    description:
      "Specialized newborn care for premature and high-risk infants with NICU facilities.",
    services: [
      "NICU Level-III Care",
      "Premature Baby Care",
      "Newborn Screening",
      "Ventilation Support",
      "Neonatal Jaundice Treatment"
    ]
  },
  {
    slug: "neurovascular-surgery",
    name: "Neuro & Endovascular Surgery",
    image: "/images/departments/neuro.jpg",
    description:
      "Advanced brain and spine care with minimally invasive endovascular surgical techniques.",
    services: [
      "Brain Tumor Surgery",
      "Stroke Treatment",
      "Spine Surgery",
      "Aneurysm Repair",
      "Endovascular Procedures"
    ]
  },
  {
    slug: "nephrology",
    name: "Nephrology",
    image: "/images/departments/nephrology.jpg",
    description:
      "Expert kidney care with dialysis support, renal transplant evaluation and chronic kidney disease treatment.",
    services: [
      "Dialysis",
      "Kidney Stone Care",
      "CKD Management",
      "Hypertension Related to Kidneys",
      "Renal Biopsy"
    ]
  },
  {
    slug: "obgyn",
    name: "Obstetrics & Gynaecology",
    image: "/images/departments/obgyn.jpg",
    description:
      "Comprehensive women’s health services including pregnancy care, fertility support and gynecological surgeries.",
    services: [
      "Pregnancy Care",
      "High-risk Pregnancy",
      "Fertility Evaluation",
      "Laparoscopic Gynecology",
      "Menopause Care"
    ]
  },
  {
    slug: "orthopaedics",
    name: "Orthopaedics & Joint Replacement",
    image: "/images/departments/ortho.jpg",
    description:
      "Complete bone, joint and spine care with advanced arthroscopy and joint replacement surgery.",
    services: [
      "Knee & Hip Replacement",
      "Sports Injury Care",
      "Fracture Treatment",
      "Arthroscopy",
      "Spine Surgery"
    ]
  },
  {
    slug: "paediatrics",
    name: "Paediatrics",
    image: "/images/departments/pediatrics.jpg",
    description:
      "Child-focused medical care with vaccination, growth monitoring and pediatric emergency services.",
    services: [
      "Vaccination",
      "Infection Care",
      "Growth & Nutrition",
      "Pediatric Emergency",
      "Asthma & Allergy"
    ]
  },
  {
    slug: "paediatric-surgery",
    name: "Paediatric Surgery",
    image: "/images/departments/pedsurgery.jpg",
    description:
      "Specialized surgical care for infants, children and adolescents.",
    services: [
      "Neonatal Surgery",
      "Hernia & Hydrocele",
      "Pediatric Tumor Surgery",
      "Minimally Invasive Surgery",
      "Emergency Pediatric Operations"
    ]
  },
  {
    slug: "psychiatry",
    name: "Psychiatry",
    image: "/images/departments/psychiatry.jpg",
    description:
      "Comprehensive mental health support with therapy, counseling and medication management.",
    services: [
      "Anxiety & Depression Care",
      "Counseling",
      "De-addiction Treatment",
      "Child Psychiatry",
      "Behavioral Therapy"
    ]
  },
  {
    slug: "plastic-surgery",
    name: "Plastic & Reconstructive Surgery",
    image: "/images/departments/plasticsurgery.jpg",
    description:
      "Cosmetic and reconstructive surgeries with precision and aesthetic excellence.",
    services: [
      "Cosmetic Surgery",
      "Reconstructive Procedures",
      "Burn Treatment",
      "Scar Revision",
      "Hand Surgery"
    ]
  },
  {
    slug: "pulmonology",
    name: "Pulmonology",
    image: "/images/departments/pulmonology.jpg",
    description:
      "Expert lung care with advanced diagnosis and treatment for respiratory conditions.",
    services: [
      "Asthma Management",
      "COPD Treatment",
      "Bronchoscopy",
      "Sleep Disorder Evaluation",
      "Pulmonary Rehabilitation"
    ]
  },
  {
    slug: "radiology",
    name: "Radiology",
    image: "/images/departments/radiology.jpg",
    description:
      "High-precision imaging and diagnostic services using advanced radiology technology.",
    services: [
      "X-Ray",
      "Ultrasound",
      "CT Scan",
      "MRI Scan",
      "Interventional Radiology"
    ]
  },
  {
    slug: "rehab",
    name: "Physical Medicine & Rehabilitation",
    image: "/images/departments/rehab.jpg",
    description:
      "Specialized rehabilitation care to restore mobility, function and overall quality of life.",
    services: [
      "Physiotherapy",
      "Stroke Rehab",
      "Sports Injury Rehab",
      "Back Pain Therapy",
      "Occupational Therapy"
    ]
  },
  {
    slug: "surgical-oncology",
    name: "Surgical Oncology",
    image: "/images/departments/onco.jpg",
    description:
      "Advanced cancer surgery with precision and multidisciplinary care for comprehensive treatment.",
    services: [
      "Tumor Removal",
      "Breast Cancer Surgery",
      "Head & Neck Oncology",
      "GI Cancer Surgery",
      "Reconstructive Oncology"
    ]
  },
  {
    slug: "urology",
    name: "Urology",
    image: "/images/departments/urology.jpg",
    description:
      "Complete urinary and male reproductive system care with modern diagnostics and surgical treatment.",
    services: [
      "Kidney Stone Removal",
      "Prostate Care",
      "Male Fertility Treatment",
      "Uro-Oncology",
      "Laser Surgery"
    ]
  }
];

export default departmentsData;
