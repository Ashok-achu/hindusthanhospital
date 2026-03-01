import cardiologyImg from "../assets/hospital/1920_1080 Green removed.jpg";
const departmentsData = [

/* =======================
   ANAESTHESIOLOGY
======================= */
{
  slug: "anaesthesiology",
  name: "Anaesthesiology",
image: cardiologyImg,  
description: `
General Anesthesia: We offer general anesthesia services for a wide range of surgical procedures, ensuring patients are comfortably sedated and pain-free throughout the duration of their surgery.

Regional Anesthesia: Our specialists are proficient in administering regional anesthesia techniques such as epidurals, nerve blocks, and spinal anesthesia to manage pain and enhance recovery for various surgeries.

Monitored Anesthesia Care (MAC): For procedures that do not require full sedation, we provide MAC services, offering sedation and pain management while allowing patients to remain conscious and responsive.

Preoperative Evaluation. Our team conducts thorough preoperative evaluations to assess patients' medical history, current health status, and anesthesia needs, ensuring optimal safety and efficacy during procedures.

Acute Pain Management: We offer comprehensive acute pain management services post surgery to minimize discomfort and facilitate faster recovery, utilizing advanced techniques and personalized treatment plans

Obstetric Anesthesia: Our specialists provide specialized anesthesia care for labor and delivery, ensuring the safety and comfort of both mother and baby during childbirth

Pediatric Anesthesia: We are experienced in providing anesthesia services tailored to the unique needs of pediatric patients, ensuring their safety, comfort, and well-being during surgical procedures.

Critical Care: Our anesthesiologists are integral members of the critical care team, providing expert management of patients in intensive care units, including mechanical ventilation, hemodynamic support, and pain management

Cardiovascular Anesthesia: Cardiovascular anesthesia involves administering anesthesia during cardiac surgeries and procedures, ensuring hemodynamic stability and managing the complexities of cardiovascular physiology to optimize patient outcomes. We provide CABG & Valve Procedures, Stenting, PPI, ICD.

Onco Anesthesia: Specializes in providing anesthesia for cancer surgeries, focusing on perioperative care tailored to cancer patients' unique needs, including managing comorbidities, pain, and potential interactions with cancer treatments.

Neuroanesthesia: It involves administering anesthesia for neurosurgical procedures, emphasizing precise control of cerebral hemodynamics and neuro protective strategies to ensure optimal neurological outcomes for patients.

Day Care Anesthesia/ Procedure: Day care anesthesia involves delivering anesthesia for procedures that allow patients to return home on the same day, focusing on rapid recovery, minimal side effects, and ensuring safe discharge criteria are met.We provide Thoracoscopy, Bronchoscopy, Endoscopy,Colonoscopy with a well equipped scopy suite tailored for Day Care Procedure.

Patient-Centered Care. At the Anesthesiology Department, patient safety and satisfaction are our top priorities. We strive to create a supportive and reassuring environment for our patients and their families, offering clear communication, personalized care plans, and compassionate support throughout their journey. Our team is committed to addressing any concerns or questions patients may have and ensuring a positive anesthesia experience

Education and Research. In addition to providing exceptional clinical care, our department is actively engaged in education and research to advance the field of anesthesiology. We are dedicated to training the next generation of anesthesia providers through residency programs, continuing education courses, and research opportunities. Our faculty and staff are involved in innovative research initiatives aimed at improving anesthesia techniques, patient outcomes, and safety standards.`,
  services: [
    "General Anaesthesia",
    "Regional Anaesthesia",
    "Monitored Anaesthesia Care (MAC)",
    "Pre-operative Evaluation",
    "Post-operative Pain Management",
    "Obstetric Anaesthesia",
    "Paediatric Anaesthesia",
    "Cardiac Anaesthesia",
    "Neuro & Onco Anaesthesia",
    "Day Care Anaesthesia"
  ]
},

/* =======================
   CARDIOLOGY
======================= */
{
  slug: "cardiology",
  name: "Cardiology",
  image: "../assets/hospital/1920_1080 Green removed.jpg",
  description: `
The Department of Cardiology provides comprehensive and advanced care for disorders of the heart and blood vessels. Hindusthan Hospital is a 200-bedded multi-speciality hospital equipped with 24-hour emergency services and a fully functional Cath Lab.

Our cardiology team focuses on preventive, diagnostic, interventional, and rehabilitative cardiac care. Using modern diagnostic tools and minimally invasive techniques, the department manages both acute and chronic cardiac conditions.

Services include ECG, echocardiography, stress testing, Holter monitoring, ambulatory blood pressure monitoring, coronary angiography, angioplasty, pacemaker implantation, ICD implantation, and heart failure management. Emphasis is placed on early diagnosis, lifestyle modification, and long-term cardiac rehabilitation.
`,
  services: [
    "12 Lead ECG",
    "2D Echocardiography",
    "Stress Test / TMT",
    "Stress ECHO",
    "TEE",
    "Holter Monitoring",
    "ABPM",
    "Coronary Angiography",
    "Coronary Angioplasty",
    "Pacemaker Implantation",
    "ICD Implantation",
    "EPS & RFA",
    "Heart Failure Management",
    "Cardiac Rehabilitation"
  ]
},

/* =======================
   DERMATOLOGY
======================= */
{
  slug: "dermatology",
  name: "Dermatology",
  image: "/images/departments/dermatology.jpg",
  description: `
The Department of Dermatology offers expert diagnosis and treatment for a wide range of skin, hair, and nail disorders. The department combines medical expertise with advanced technology to deliver safe and effective dermatological care.

Both medical and cosmetic dermatology services are provided with personalized treatment plans. Special attention is given to chronic skin conditions, allergic disorders, and aesthetic concerns to improve patient confidence and quality of life.
`,
  services: [
    "Skin Allergy Treatment",
    "Acne & Scar Management",
    "Psoriasis & Eczema Treatment",
    "Hair Loss Treatment",
    "Pigmentation Disorders",
    "Laser Dermatology",
    "Cosmetic Dermatology"
  ]
},

/* =======================
   DENTISTRY
======================= */
{
  slug: "dentistry",
  name: "Dentistry",
  image: "/images/departments/dentistry.jpg",
  description: `
The Department of Dentistry provides comprehensive oral healthcare for patients of all age groups. Using modern dental equipment and patient-friendly techniques, the department ensures painless and comfortable dental treatments.

Preventive, restorative, cosmetic, and surgical dental procedures are offered under one roof. Emphasis is placed on oral hygiene education and long-term dental health maintenance.
`,
  services: [
    "Dental Check-ups",
    "Scaling & Polishing",
    "Root Canal Treatment",
    "Dental Fillings",
    "Extractions",
    "Dental Implants",
    "Teeth Whitening",
    "Cosmetic Dentistry",
    "Paediatric Dentistry"
  ]
},

/* =======================
   DIABETOLOGY
======================= */
{
  slug: "diabetology",
  name: "Diabetology",
  image: "/images/departments/diabetology.jpg",
  description: `
The Department of Diabetology provides dedicated and holistic care for patients with diabetes mellitus. The department focuses on prevention, early diagnosis, and effective management of diabetes and its complications.

Comprehensive care includes blood sugar monitoring, insulin therapy, lifestyle modification, dietary counselling, and regular screening for diabetic complications. Patient education plays a key role in achieving long-term glycaemic control.
`,
  services: [
    "Blood Sugar Monitoring",
    "Type 1 & Type 2 Diabetes Care",
    "Gestational Diabetes",
    "Insulin Therapy",
    "Diet & Lifestyle Counselling",
    "Diabetic Foot Care",
    "Complication Screening"
  ]
},

/* =======================
   EMERGENCY CARE
======================= */
{
  slug: "emergency-care",
  name: "Emergency Care",
  image: "/images/departments/emergency.jpg",
  description: `
The Emergency Care Department provides immediate and life-saving medical care for critical and urgent conditions. Emergency services operate 24x7 with rapid response teams trained to handle trauma, cardiac emergencies, stroke, and accidents.

The department is supported by advanced resuscitation units, intensive care facilities, modern diagnostic services, operation theatres, blood bank, and fully equipped ambulances to ensure timely and effective treatment.
`,
  services: [
    "24x7 Emergency Services",
    "Trauma Care",
    "Cardiac Emergencies",
    "Stroke Management",
    "Emergency Resuscitation",
    "Ambulance Services"
  ]
},

/* =======================
   ENT
======================= */
{
  slug: "ent",
  name: "ENT & Head and Neck Surgery",
  image: "/images/departments/ent.jpg",
  description: `
The department is headed by Dr. V. Venkatraman, HOD and Chief Endoscopic ENT surgeon who has been practising in Coimbatore for more than a decade. He completed his MS from the prestigious institute JIPMER, Pondicherry. The department provide all services forwards diagnosis and treatment of ENT disorders including cancers of the head and neck region.

Sub-specialties:

•	Paediatric ENT
•	Neuro ENT
•	Head & Neck surgery 
•	Laryngology	
•	Endocrine surgery
•	Skull based surgery
`,
  services: [
    "ENT OPD & Endoscopy",
    "Sinus Surgery",
    "Microscopic Ear Surgery",
    "Voice Disorder Treatment",
    "Snoring & Sleep Surgery",
    "Head & Neck Cancer Surgery"
  ]
},

{
  slug: "neuro",
  name: "NEUROSCIENCE",
  image: "/images/departments/ent.jpg",
  description: `
The management of Neurological diseases like head injury, stroke and other neurological illnesses are unique, which needs Meticulous, Dedicated work and a Comprehensive team.
We a group of Neurosurgeon, Neurologist, Psychiatrist along with paramedical team of Neuro ICU staff, Neurophysiotherapy, Neurorehabilitative therapy  are giving Comprehensive Neuro care. 

Our team members are
Dr.G.Murugesan
Dr.Selvakumar
Dr.Vinodh Balaji
 services in Neurosurgery
1. Intensive Head injury Care
2. Head injury Craniotomy and Hematoma (EDH,SDH,ICH) evacuation.
3. Spine injury Care
4. Traumatic   Spine surgery with implants.
5. Cervical disc disease Surgery
6. Lumbar disc Disease Surgery.
7. Spine ,Spinal cord tumour Surgery.
8. Spinal dysraphysim Surgery
9. Paediatric  Brain Surgery.
10. Skull base Surgery.
11. Endoscopic Brain Surgery.
12. Micro Neurosurgery
13. Neurovascular Surgery
14. Neuro Endovascular Surgery.
15. Neuro Critical care post operative care.
16. Neuro and poly trauma care
  Services in Neurology
1. Intensive stroke care
2. Headache clinic
3.Diabetic Neuropathy 
4. Muscle diseases
5. Sleep problems 
6. Lumbar and cervical spondylosis 
7. Post stroke rehabilitation 
8. Vertigo clinic
9. Treatment of Neuro infections
Psychiatric services
1. Mental health
2. Depresion
3. Panic attack
4. Schizophernia
5. Bipolar disorder
6.  Obsessive  compulsive disorder
7. Somatic,Stress disorder
8. Sleep,Eating disorder
9. Child psychiatry
10. Anxiety, Panic, Mania
11. Dementia, Delirium
12. Sexual dysfunction.
13. Deaddiction
Neurophysiotherapy
All kinds preventive, promotive, curative, rehabilitative services and  intervention in the field of Neurosurgery, Neurology, Psychiatry, Neuro critical care, Neurorehabilitation.
OUR SERVICES
1.Out Patient service
2.In Patient Service
3.Neuro ICU Service
4.Neurosurgical service
5.Neuro rehabilitation service
6.Neuro related investigations
7.Neuro and spine day care procedures





`,
  services: [
    "ENT OPD & Endoscopy",
    "Sinus Surgery",
    "Microscopic Ear Surgery",
    "Voice Disorder Treatment",
    "Snoring & Sleep Surgery",
    "Head & Neck Cancer Surgery"
  ]
},
/* =======================
   GENERAL MEDICINE
======================= */
{
  slug: "general-medicine",
  name: "General Medicine",
  image: "/images/departments/generalmedicine.jpg",
  description: `
1. DISEASE PREVENTION

•	Adult Vaccinations
•	Lifestyle Preventive Measures
•	Educating Importance of Exercise and Nutrition
•	Assessment of Risk for Metabolic and Chronic diseases (Hypertension ,CAD,Hypothyroidism,Diabetes Mellitus and Dyslipidemia,Bronchial Ashtma)
•	Preventive and pre-employment Master Health Check ups

II. DIAGNOSIS AND TREATMENT:

•	State of art facilities for quick diagnosis
•	Managing Acute and Chronic Medical conditions

Acute:  AFI, Infections, Auto immune Disease, Deficiency related Disorders.

Chronic: (Hypertension ,CAD,Hypothyroidism,Diabetes Mellitus and Dyslipidemia,Bronchial Ashtma)

III. SPECIAL INTEREST IN DIABETES MANAGEMENT AND GERIATRIC CARE
 	
•	Management of Type I , Type II and Gestational Diabetes
•	Preventing Micro and Macro Vascular Complications of Diabetes.
•	Managing Diabetic Medical Emergencies.
•	Prevention of Diabetic Foot Ulcer and Amputation
•	Comprehensive Diabetic Care under one roof.

IV. SPECIALIZED CARE

•	Educating patients about their Health conditions ,Daily Diet, Medications and Lifestyle Measures.
`,
  services: [
    "Fever & Infection Care",
    "Hypertension & Thyroid Disorders",
    "Diabetes Management",
    "Geriatric Medicine",
    "Adult Vaccinations",
    "Preventive Health Checkups"
  ]
},

/* =======================
   GENERAL SURGERY
======================= */
{
  slug: "general-surgery",
  name: "General & Laparoscopic Surgery",
  image: "/images/departments/generalsurgery.jpg",
  description: `
Department of General Surgery and Laparoscopic Surgery offers a wide range of comprehensive and high quality surgical procedures. The Department is well equipped with the latest and advanced Technology and with the state of the art modern operation theaters.

Laparoscopic Surgery or Keyhole Surgery plays a great role in abdominal surgeries. Laparoscopic Procedures such as Hernioplasty ( Inguinal, Umbilical, Ventral ), Cholecystectomy, Appendicectomy and Diagnostic Laparoscopy are routinely done ensuring minimal pain and swift recovery. Robotic Surgery with the three dimensional vision and excellent high definition are offered for the appropriate patients.

General Surgery focuses on surgeries of piles ( Hemorrhoids ), Fissures, Fistula in ano, Pilonidal Sinus, Hydrocele, Diabetic Foot, Ulcer, Varicose Veins, Breast Lump and Thyroid swelling. Acute Abdomen cases are managed efficiently.

`,
  services: [
    "Laparoscopic Hernia Repair",
    "Laparoscopic Cholecystectomy",
    "Appendicectomy",
    "Piles, Fissure & Fistula Surgery",
    "Breast & Thyroid Surgery"
  ]
},

/* =======================
   GASTROENTEROLOGY
======================= */
{
  slug: "gastroenterology",
  name: "Gastroenterology",
  image: "/images/departments/gastro.jpg",
  description: `
The Department of Gastroenterology provides specialized care for diseases of the digestive system, liver, pancreas, and biliary tract.

Advanced diagnostic and therapeutic endoscopy services are offered along with long-term medical management for chronic gastrointestinal disorders.
`,
  services: [
    "Upper GI Endoscopy",
    "Colonoscopy",
    "ERCP",
    "Liver Disease Management",
    "Pancreatic Disorders Care"
  ]
},

/* =======================
   INTERNAL MEDICINE
======================= */
{
  slug: "internal-medicine",
  name: "Internal Medicine",
  image: "/images/departments/internalmedicine.jpg",
  description: `
The Department of Internal Medicine provides holistic adult healthcare with emphasis on chronic disease management and preventive care.

Patients benefit from coordinated treatment plans that focus on long-term health maintenance and quality of life.
`,
  services: [
    "Diabetes & BP Management",
    "Thyroid Disorders",
    "Infectious Diseases Care",
    "Preventive Health Screening",
    "Chronic Disease Management"
  ]
},

/* =======================
   ICU
======================= */
{
  slug: "icu",
  name: "Intensive Care Unit",
  image: "/images/departments/icu.jpg",
  description: `
The Intensive Care Unit provides round-the-clock critical care for severely ill patients using advanced life-support systems.

Highly trained critical care specialists ensure continuous monitoring and timely intervention for complex medical and surgical cases.
`,
  services: [
    "Ventilator Support",
    "Sepsis Management",
    "Post-operative ICU Care",
    "Multi-organ Support"
  ]
},

/* =======================
   NEONATOLOGY
======================= */
{
  slug: "neonatology",
  name: "Neonatology",
  image: "/images/departments/neonatology.jpg",
  description: `
STATE OF ART NEONATAL INTENSIVE CARE UNIT HINDUSTHAN HOSPITAL
                     Our NICU has 20 beds out of which 10 beds are equipped for level 3 Intensive care,for managing very preterm and sick babies.The management staffs, neonatal and perinatal staffs of HINDUSTHAN are committed to deliver high quality neonatal care.

SALIENT FEATURES
24/7  availability of  affordable , ethical and hassle free intensive care .
•	Provides NICU  care for babies as early as 24 weeks of gestation .
•	Managing birth weight as low as 500 grams.
•	Over 500 NICU admissions annually.
•	Equipped with advanced Neonatal facilities.
•	Multidisciplinary team approach providing excellent Neonatal outcome.


PROCEDURE DONE IN NICU AT HINDUSTHAN HOSPITAL
NICU at HINDUSTHAN  provides excellent care in management of all premature and sick neonates.
 All essential and advanced procedures in managing neonates are carried out in Hindusthan NICU with high expertise.                   
•	Resuscitation 
•	Surfactant therapy
•	Non – invasive ventilation including HFNC
•	CPAP ventilation
•	HFOV ventilation both Non-invasive and Invasive
•	Invasive ventilation with pulmonary graphic display
•	Blood and Blood product transfusion
•	Therapeutic hypothermia (whole body cooling )
•	Exchange transfusion
•	Umbilical venous and arterial line catheterisation
•	Percutaneous central venous line insertion
•	Peripheral arterial line catheterisation 
•	Intercostal chest drain insertion
•	Suprapubic Bladder catheterisation
•	Bone marrow aspiration 
•	Lumbar puncture 
•	Bedside Neonatal Ultrasound imaging
•	Bedside Echocardiography
•	ROP screening
•	OAE screening
•	Peritoneal dialysis 
•	Liver / Renal Biopsy 
•	Extra Ventricular Drain 

VARIOUS CONDITIONS IN NEONATAL PERIOD LIKE
•	Respiratory Distress Syndromes (RDS,TTN,MAS,Pneumonia)
•	Prematurity related conditions
•	Infant of Diabetic mother 
•	Perinatal asphyxia
•	Neonatal jaundice
•	Congenital Heart Diseases
•	Sepsis / Meningitis / DIVC
•	TORCH Infection
•	Acute Renal Failure / RTA
•	Necrotizing Enterocolitis
•	Neonatal seizures
•	Bleeding disorders
were managed successfully in our NICU
COMMON NEONATAL GENETIC CONDITIONS
Our neonatal services include early recognition , initial management and counselling for babies with suspected or confirmed genetic and chromosomal disorders.
Common conditions encountered in our NICU include
•	Chromosomal abnormalities (Downe’s syndrome , Edward syndrome)
•	Congenital hypothyroidism
•	Congenital Adrenal Hyperplasia (CAH )
•	Cystic fibrosis , Bartter syndrome 
•	OHVIRA  syndrome   
•	VACTERL anomaly
•	Inborn Errors of Metabolism like Urea Cycle Defects , Organic Acidemia , Fatty Acid Oxidation Disorders,Mitochondrial disorders
•	Rare neuromuscular and skeletal disorders like SMA ( Spinal Muscular Atrophy ) and Congenital myopathies
`,
  services: [
    "NICU Level III Care",
    "Neonatal Ventilation",
    "Premature Baby Care",
    "Neonatal Emergency Care",
    "Newborn Screening"
  ]
},

/* =======================
   NEPHROLOGY
======================= */
{
  slug: "nephrology",
  name: "Nephrology",
  image: "/images/departments/nephrology.jpg",
  description: `
The Department of Nephrology offers comprehensive care for kidney-related diseases including acute and chronic kidney disorders.

Dialysis services and long-term renal care are provided with a focus on improving patient quality of life.
`,
  services: [
    "Hemodialysis",
    "CKD Management",
    "Kidney Stone Evaluation",
    "Renal Biopsy"
  ]
},

/* =======================
   OBGYN
======================= */
{
  slug: "obgyn",
  name: "Obstetrics & Gynaecology",
  image: "/images/departments/obgyn.jpg",
  description: `
The Department of Obstetrics & Gynaecology provides comprehensive healthcare for women at all stages of life.

Services include antenatal care, safe deliveries, fertility management, and minimally invasive gynecological surgeries.
`,
  services: [
    "Antenatal Care",
    "High-risk Pregnancy",
    "Normal & Caesarean Delivery",
    "Laparoscopic Gynecology",
    "Menopause Care"
  ]
},

/* =======================
   ORTHOPAEDICS
======================= */
{
  slug: "orthopaedics",
  name: "Orthopaedics & Joint Replacement",
  image: "/images/departments/ortho.jpg",
  description: `
Our department of orthopaedics and joint replacement surgery provides a range of musculoskeletal services from orthopaedic medicine to complex surgery.
SCOPE OF SERVICES
JOINT REPLACEMENT SURGERIES
•	Total knee replacement surgery.
•	Unicondylar knee replacement.
•	Total hip replacement surgery.
•	Total shoulder replacement surgery.
•	Total elbow replacement surgery.
•	Revision hip and knee replacement surgery.
TRAUMA
•	Treatment of fractures including complications of fractures.
•	Treatment of ligament injuries.
ARTHROSCOPIC SURGERIES OF KNEE AND SHOULDER
PAEDIATRIC ORTHOPAEDIC SURGERY
•	Treatment of congenital and developmental conditions.
•	Treatment of cerebral palsy.
•	Treatment of paediatric bone and joint infections.
•	Treatment of limb length discrepancy.
SPINE SURGERY
ORTHOPAEDICS AND JOINT REPLACEMENT
The department of Orthopedics& Trauma is known for advanced joint replacement surgery,major complex trauma including pelvic-acetabular fracture management, arthroscopic kneesurgeries, paediatricorthopaedic surgeries, spine surgeries, deformity correction and bonetumor management.

`,
  services: [
    "Joint Replacement Surgery",
    "Fracture Management",
    "Arthroscopy",
    "Spine Surgery"
  ]
},

/* =======================
   PAEDIATRICS
======================= */
{
  slug: "paediatrics",
  name: "Paediatrics",
  image: "/images/departments/pediatrics.jpg",
  description: `
HINDUSTHAN HOSPITAL is proudly recognized as the best child care hospital in Coimbatore offering a comprehensive range of services for children.Our paediatric department provides outpatient care for immunizations and routine check-ups ,while our emergency services cater to all acute and chronic illnesses . Our well-equipped paediatric ward and PICU are staffed with highly trained professionals who ensure round-the-clock medical care in a child-friendly environment.
         
COMMON PAEDIATRIC CONDITIONS TREATED
               We diagnose and manage a wide range of childhood illnesses affecting infant , children and adolescents
•	Respiratory Infections (Pneumonia,Asthma,Pleural effusion,TB)
•	Gastrointestinal Disorders ( Vomiting , Diarrhea)
•	Febrile illnesses like Dengue, Typhoid, Scrub typhus,Leptospirosis etc…
•	Nutritional Deficiencies and anemia
•	Urinary Tract Infections / Voiding dysfunction 
•	Seizure disorders 
•	Rheumatological – JIA / SLE
•	Inborn errors of metabolism
•	Accidental poisoning / Dry toxicity
•	Failure to thrive
•	Type I  Diabetes
•	Developmental Delays / Cerebral palsy
We assess and manage growth and developmental delays , speech and hearing difficulties and behavioural concerns such as ADHD and autism spectrum disorders , with timely referrals when required.
                   Preventive and promotive care forms a core part of our practice , include routine immunization , growth monitoring, nutrition counselling and  adolescent health care.We emphasize family – centred and evidence based care to ensure the best outcomes for every child.
`,
  services: [
    "Immunization",
    "Pediatric Emergency",
    "Growth Monitoring",
    "Chronic Pediatric Care"
  ]
},

/* =======================
   PAEDIATRIC SURGERY
======================= */
{
  slug: "paediatric-surgery",
  name: "Paediatric Surgery",
  image: "/images/departments/pedsurgery.jpg",
  description: `
CONSULTANT
Dr. Dharmendra . R  M.S., M.ch
Senior Consultant surgeon and Paediatric surgeon 

                            Paediatric surgery encompasses care of children before birth through adolescence and deals with various conditions including correction of congenital malformation , injuries and other emergency surgical conditions .
The procedures performed include
DAYCARE SURGERIES
•	Herniotomies
•	Hydrocele repair
•	Circumcision
•	Excision of external angular dermoid 

CONGENITAL CONDITIONS
•	Repair of Oesophageal atresias , TEF
•	Repair of congenital diaphragmatic hernias
•	Intestinal atresias
•	Complicated Necrotizing Enterocolitis (NNEC)
•	Hydrocephalus
•	Surgery for Anorectal malformations (alias imperforate anus)
•	Surgery for Hirschsprung’s disease
•	Surgeries of paediatric hydronephrosis eg: pyeloplasties,ureteric reimplantaion
•	Operations for vesicoureteric reflux
•	Operations for hypospadias
•	Undescended testis
MINIMALLY INVASIVE SURGERIES
•	Laparoscopic Appendicectomy 
•	Thoracoscopic repair of eventration of diaphragm
•	Inguinal hernia
EMERGENCY  SURGERIES
Non-operative management of intussusceptions (successful in 97%) . 
Operations for Meckel’s diverticulam,rectal prolapse etc.
Drainage of  various abscesses in childhood.
`,
  services: [
    "Newborn Surgery",
    "Hernia & Hydrocele Repair",
    "Hypospadias Surgery",
    "Paediatric Laparoscopy"
  ]
},

/* =======================
   PSYCHIATRY
======================= */
{
  slug: "psychiatry",
  name: "Psychiatry",
  image: "/images/departments/psychiatry.jpg",
  description: `
The Department of Psychiatry promotes mental health and emotional well-being through compassionate and confidential care.

Evidence-based treatments are provided for a wide range of psychiatric and behavioural disorders.
`,
  services: [
    "Depression & Anxiety",
    "Bipolar Disorder",
    "Schizophrenia",
    "De-addiction",
    "Child Psychiatry"
  ]
},

/* =======================
   PLASTIC SURGERY
======================= */
{
  slug: "plastic-surgery",
  name: "Plastic & Reconstructive Surgery",
  image: "/images/departments/plasticsurgery.jpg",
  description: `
The Department of Plastic & Reconstructive Surgery offers reconstructive and cosmetic procedures aimed at restoring form and function.

Individualized treatment plans ensure optimal aesthetic and functional outcomes.
`,
  services: [
    "Cosmetic Surgery",
    "Reconstructive Surgery",
    "Burn Care",
    "Scar Revision"
  ]
},

/* =======================
   PULMONOLOGY
======================= */
{
  slug: "pulmonology",
  name: "Pulmonology",
  image: "/images/departments/pulmonology.jpg",
  description: `
ILCR is the most prominent department of Hindusthan Hospital and is its first department that that started its operations on 30th September 2019 immediately after Hindusthan hospital as an institution was conceived. Today it stands out as one of the most sought after pulmonology services in the city. The department was the first to use Oscillometry in lung function test first time in Coimbatore. It is run by four eminent pulmonologists of the city with vast experience in the field of respiratory medicine.
Dr. Jayamohan Unnithan is the most senior qualified Pulmonologist in Coimbatore with an Experience of 42 years in the field of respirstory medicine. He is involved in treating patients with obstructive airways disease and general pulmonology with special interest in pulmonary rehabilitation, bronchoscopy and thoracoscopy. He had been instrumental in organizing many academic programmes both for medical as well as paramedics. He has been involved in many philanthropic activities as well.
Dr.K.Srikanth formerly was professor and head of the department of pulmonary medicine in the prestigious PSG Institute of Medical Sciences and Research at Coimbatore. He carries with him the tag of one of the most sought after clinical research scientist in the country and is an expert in the management of obstructive  airways disease and other pulmonary diseases. He has been a celebrity teacher for both undergraduates and postgraduates. He heads the research team and has an experience of 28 years in pulmonology.
Dr.V.Nandagopal is a dynamic leader with lot of analytical skills and he was the prime person involved in organizing COVID services in the hospital during the pandemic. This act was appreciated by the citizens of Coimbatore 
and won him and the department many laurels. He practices respiratory medicine with certain amount of perfection. He uses digital and technological tools in his practice and hasbeen instrumental in promoting them in medical practice. This was recognized by the TamilNadu government in the year 2022. He is an expert in obstructive airways disease andinterventions in pulmonology like bronchoscopy and thoracoscopy with special interest insleep medicine. He has been practicing pulmonary medicine for the last 21 years.
Dr.S.Nagarajan is a senior consultant in respiratory medicine and has behind him manyyears of teaching experience. He has been a teacher, a researcher in clinical trials and aclinician par excellence. He practices general pulmonology and heads the services of allergytesting and desensitization and is an expert in smoking cessation. His patients will vouch forhis dedication and skills in treating the sick. He has been in practice of pulmonary medicinefor 27 years.
Services offered
1. Asthma and COPD clinics
2. Interstitial lung disease clinics
3. Smoking cessation clinics
4. Allergy testing and desensitization clinics
5. Tuberculosis clinics
6. Advanced pulmonary function testing
(Includes spirometry, oscillometry, plethysmography, diffusion studies, 6minute walk test etc.
Soon to be added is cardiopulmonary exercise testing)
7. Pulmonary rehabilitation lab. (In house as well as tele services)
8. Adult vaccination clinic
9. Department of research. (Clinical as well as Academic research)
10. The department is proud to have two postgraduate seats (DNB) each year awarded bythe National Board.
11. ILCR boasts of having special focus on patient education and programmes for publicwithout charging any remuneration.
12. Many other charity activities happen which have to be experi
`,
  services: [
    "Asthma & COPD Clinics",
    "Pulmonary Function Testing",
    "Bronchoscopy",
    "Pulmonary Rehabilitation"
  ]
},

/* =======================
   RADIOLOGY
======================= */
{
  slug: "radiology",
  name: "Radiology",
  image: "/images/departments/radiology.jpg",
  description: `
The Department of Radiology provides comprehensive diagnostic imaging services essential for accurate diagnosis and treatment planning.

Modern imaging equipment and experienced radiologists ensure high-quality and timely reporting.
`,
  services: [
    "X-Ray",
    "Ultrasound",
    "CT Scan",
    "MRI Scan",
    "Interventional Radiology"
  ]
},

/* =======================
   REHABILITATION
======================= */
{
  slug: "rehab",
  name: "Physical Medicine & Rehabilitation",
  image: "/images/departments/rehab.jpg",
  description: `
Hindusthan Hospital’s physiotherapy department is dedicated to aiding individuals in regaining mobility and function after injury or  surgery, ultimately accelerating recovery and enhancing overall quality of life. Moreover, it plays a crucial role in minimizing the risk of future injuries. This type of therapy offers significant advantages to individuals of all ages and health conditions, from older individuals recuperating from joint replacement to young athletes dealing with injuries. The Department of Physiotherapy at Hindusthan Hospital is staffed with top-notch Physiotherapists in Coimbatore who have successfully treated a diverse range of patients. Every aspect of the department, from advanced rehabilitation tools to large therapy areas, is crafted to cater to the varied requirements of patients as they work towards better health.

Scope Of Service:
Interferential Therapy
Intermittent Pelvic Traction
Intermittent Cervical Traction
Ultrasound Therapy
Trans-cutaneous Nerve Stimulation
Electrical Stimulation
Infra Red Ray Therapy

In Patient Services:
Neurological Rehabilitation (stroke, Head Injury etc.)
Orthopedic Post OP. Surgical Treatment
Post OP Surgeries
ICU care Provided
Obstetrics & Gynecology
Pulmonary Rehabilitation
General Medicine

Exercise Therapy:
Stretching Exercise
Strengthening Exercise
Mobilization Exercise 
Spinal Mobility Training
Mat & Swiss Ball Training
Hand Rehabilitation
Co-ordination Training
Balance Training 
Pediatric Services Provided
`,
  services: [
    "Physiotherapy",
    "Stroke Rehabilitation",
    "Post-operative Rehab",
    "Occupational Therapy"
  ]
},

/* =======================
   SURGICAL ONCOLOGY
======================= */
{
  slug: "surgical-oncology",
  name: "Surgical Oncology",
  image: "/images/departments/onco.jpg",
  description: `
The Department of Surgical Oncology provides comprehensive cancer surgery with a patient-centred and multidisciplinary approach.

Advanced surgical techniques and compassionate care aim to improve survival and quality of life.
`,
  services: [
    "Tumor Removal",
    "Breast Cancer Surgery",
    "Head & Neck Oncology",
    "GI Cancer Surgery",
    "Palliative Care"
  ]
},

/* =======================
   UROLOGY
======================= */
{
  slug: "urology",
  name: "Urology",
  image: "/images/departments/urology.jpg",
  description: `
Urology Clinic Coimbatore was established in 1992 as a one stop solution to all urological diseases. At this well equipped Urology centre all the needed Urological Investigations are available. A stand alone day care surgery centre with laser, ESWL, Laser for urinary stones, operating microscope Andrology equipments (Viberect, Electroejaculator) are attached to this clinic wherein all the ambulatory surgical procedures can be performed for the convenience of the patient. Centrally located in Coimbatore, Urology Clinic caters to both walk-in patients and and those with a prior appointment.

	Ultra Sound Scan Diagnosis
	Prostatic Enlargement
	Bladder Cancer
	Infertility
	Birth Defects of Urinary Tract in Children
	Laparoscopic Pyeloplasty
	Kidney stone
	Urinary Tract infection 
	Penile Cancer
	Erectile Dysfunction
	Neurogenic Bladder
	Blood in the Urine
	Kidney cancer
	Testicular Pain and Swellings
	Urinary Problems in Women
	Ejaculatory Dysfunction
`,
  services: [
    
  ]
}

];

export default departmentsData;
