import React, { useState } from "react";

// Translation Dictionary
const translations = {
  en: {
    topBar: "Premium Generic Medicines - Your Trust, Our Priority",
    phone: "📞 +91-98351 23889",
    available: "🕒 24/7 Available",
    home: "Home",
    about: "About",
    services: "Services",
    genericInfo: "Generic Info",
    whyUs: "Why Us",
    visit: "Visit",
    contact: "Contact",
    callUs: "Call Us",
    trustedHealthcare: "✨ Trusted Healthcare",
    qualityMedicines: "Quality Medicines at",
    unbeatable: "Unbeatable Prices",
    heroDesc:
      "Save up to 90% on your medicines through India's official PMBJP program. Same quality, guaranteed safety, affordable for everyone.",
    callNow: "📞 Call Now",
    findUs: "📍 Find Us",
    savings: "Savings",
    savingsPct: "50-90%",
    status: "Status",
    statusOpen: "🟢 Open",
    hours: "Hours",
    hours24: "24/7",
    storeInfo: "Store Info",
    govCertified: "Government Certified Pharmacy",
    address: "Address",
    addressValue: "Gola Rd, Ramgarh Cantonment, Jharkhand 829122",
    contactLabel: "Contact",
    contactValue: "+91-98351 23889",
    email: "Email",
    emailValue: "nandlalrg1947@gmail.com",
    openNow: "Open Now",
    openTime: "8:00 AM - 10:00 PM",
    weProvide: "We Provide",
    genericMedicines: "Generic Medicines",
    otcProducts: "OTC Products",
    surgicalItems: "Surgical Items",
    wellness: "Wellness",
    aboutUs: "About Us",
    affordableHealthcare: "Affordable Healthcare for All",
    janAushadhi:
      "Jan Aushadhi Kendra is a government-supported pharmacy under the Pradhan Mantri Bhartiya Janaushadhi Pariyojana, making quality generic medicines accessible to everyone.",
    genericMedicinesDesc:
      "Generic medicines have the same quality, safety, and efficacy as branded drugs but cost 50-90% less. We ensure every family gets essential medicines without financial burden.",
    savingsCalculated: "*Savings calculated against branded MRP",
    affordable: "Affordable",
    affordableDesc: "50-90% lower prices vs branded medicines",
    qualityAssured: "Quality Assured",
    qualityAssuredDesc: "Certified by BPPI with strict standards",
    wideRange: "Wide Range",
    wideRangeDesc: "Chronic, acute, OTC & wellness products",
    forEveryone: "For Everyone",
    forEveryoneDesc: "Serving all ages with care & expertise",
    servicesLabel: "Services",
    whatWeOffer: "What We Offer",
    genericMedicinesTitle: "Generic Medicines",
    genericMedicinesSubDesc: "High-quality branded alternatives",
    otcWellness: "OTC & Wellness",
    otcWellnessDesc: "Daily healthcare essentials",
    surgicalItemsTitle: "Surgical Items",
    surgicalItemsDesc: "Medical home-care products",
    patientSupport: "Patient Support",
    patientSupportDesc: "Expert medicine guidance",
    chronicCare: "Chronic Care",
    chronicCareDesc: "Long-term patient support",
    specialOrders: "Special Orders",
    specialOrdersDesc: "Custom medicine sourcing",
    understandingMedicines: "Understanding Medicines",
    whatAreGeneric: "What are Generic Medicines?",
    genericDesc:
      "Generic medicines are affordable, high-quality alternatives to branded medicines. Learn why they're equally safe and effective.",
    definition: "Definition",
    definitionText:
      "Generic medicines are pharmaceutical drugs produced and distributed without brand names. They contain the exact same active ingredient, strength, and dosage as branded medicines but are sold at significantly lower prices.",
    sameActiveIngredient: "Same Active Ingredient",
    sameActiveIngredientDesc: "Same chemical composition as branded drugs",
    fdaApproved: "FDA & WHO Approved",
    fdaApprovedDesc: "Same quality standards as branded medicines",
    cheaper: "50-90% Cheaper",
    cheaperDesc: "No marketing or advertising costs",
    brandedVsGeneric: "Branded vs Generic",
    branded: "Branded",
    generic: "Generic",
    expensivePackaging: "✓ Expensive packaging",
    heavyAdvertising: "✓ Heavy advertising costs",
    premiumPricing: "✓ Premium pricing",
    sameIngredient: "✓ Same active ingredient",
    simplePackaging: "✓ Simple, basic packaging",
    minimalAdvertising: "✓ Minimal advertising",
    affordablePricing: "✓ Affordable pricing",
    onlyDifference: "💡 The only difference is the price, not the quality!",
    keyBenefits: "Key Benefits of Generic Medicines",
    hugeSavings: "Huge Cost Savings",
    hugeSavingsDesc:
      "Save 50-90% on your monthly medicine expenses. Your family budget benefits immediately.",
    sameEffectiveness: "Same Effectiveness",
    sameEffectivenessDesc:
      "Contains identical active ingredients. Works exactly the same way as branded medicines.",
    qualityCertified: "Quality Certified",
    qualityCertifiedDesc:
      "Approved by WHO, FDA, and BPPI. Meets highest pharmaceutical standards globally.",
    fastRelief: "Fast Relief",
    fastReliefDesc:
      "Starts working at the same speed. Same strength, same dosage as branded versions.",
    accessibleHealthcare: "Accessible Healthcare",
    accessibleHealthcareDesc:
      "Makes essential medicines affordable for all families, rich and poor alike.",
    betterCompliance: "Better Compliance",
    betterComplianceDesc:
      "Lower cost means patients can afford full treatment. Better health outcomes overall.",
    whyCheap: "Why Are Generic Medicines So Cheap?",
    noResearch: "No Research Costs",
    noResearchDesc:
      "Branded companies spend billions on research & development. Generic makers skip this, using proven formulas.",
    noAdvertising: "No Advertising",
    noAdvertisingDesc:
      "No TV ads, celebrity endorsements, or fancy packaging. Generic makers save on marketing entirely.",
    simplePackagingTitle: "Simple Packaging",
    simplePackagingDesc:
      "Basic packaging and labels. Money is saved here and passed directly to customers.",
    competition: "Competition",
    competitionDesc:
      "Multiple generic makers produce the same medicine, driving prices down through competition.",
    costBreakdown: "Cost Breakdown",
    brandedMedicine: "Branded Medicine",
    genericMedicine: "Generic Medicine",
    medicine: "Medicine",
    research: "Research",
    marketing: "Marketing",
    profit: "Profit",
    youSave: "🎉 You save ₹450 per medicine with generics!",
    commonQuestions: "Common Questions About Generic Medicines",
    q1: "Are generic medicines as effective as branded medicines?",
    a1: "Yes, absolutely! Generic medicines contain the exact same active ingredient in the same strength. They work identically to branded medicines.",
    q2: "Are generic medicines safe?",
    a2: "Yes, they are completely safe. Generic medicines are approved by WHO, FDA, and Indian pharmaceutical regulatory bodies (BPPI). They undergo the same strict quality tests.",
    q3: "Why do doctors prescribe branded medicines if generics are the same?",
    a3: "Many doctors are aware and do prescribe generics. Patients can also ask their doctor or pharmacist for the generic version of any medicine.",
    q4: "What if I'm allergic to a branded medicine - will I be allergic to the generic too?",
    a4: "If you're allergic to the active ingredient, yes. But generics use the same ingredient. The difference is only in fillers/binders, which are usually similar.",
    q5: "How much can I save by using generic medicines?",
    a5: "Savings vary, but typically 50-90% per medicine. For a family taking multiple medicines, the monthly savings can be ₹2,000 to ₹10,000+.",
    q6: "Can I switch from branded to generic medicine midway through treatment?",
    a6: "Yes, you can. Consult your doctor or pharmacist. Since the active ingredient is identical, there's no harm in switching.",
    startSaving: "Start Saving Today!",
    startSavingDesc:
      "Switch to generic medicines and save 50-90% on your monthly medicine expenses. Your health, your choice, your savings!",
    whyChooseUs: "Real Benefits for You",
    saveMoney: "💰 Save Money",
    saveMoneyDesc: "Cut medical expenses by up to 90%",
    transparent: "📋 Transparent",
    transparentDesc: "Clear billing, full medicine details",
    govBacked: "🏛️ Govt Backed",
    govBackedDesc: "Official PMBJP initiative by India",
    friendly: "😊 Friendly",
    friendlyDesc: "Warm, respectful expert service",
    visitOurStore: "Visit Our Store",
    visitLocation: "8:00 AM – 10:00 PM (All Days)",
    openMaps: "Open in Google Maps",
    getInTouch: "Get in Touch",
    questionsDesc:
      "Questions about medicines or services? We're here 24/7 to help with friendly, expert guidance.",
    quickContact: "Quick Contact",
    name: "Name",
    yourName: "Your Name",
    yourPhone: "Phone",
    yourEmail: "Email",
    message: "Message",
    yourMessage: "Your message...",
    sendMessage: "Send Message",
    respondTime: "We'll respond within 24 hours",
    footerDesc:
      "Government-certified pharmacy providing affordable quality medicines.",
    footerHours: "Mon - Sun: 8:00 AM – 10:00 PM",
    footerContact: "📞 +91-98351 23889",
    copyright: `© ${new Date().getFullYear()} Jan Aushadhi Kendra. All Rights Reserved.`,
    pmbjp: "PMBJP | Government of India Initiative",
    ans: "Ans: ",
    q: "Q.",
    cardiac: "Cardiac & Diabetic",
    antibiotics: "Antibiotics",
    painRelief: "Pain Relief",
    feverCold: "Fever & Cold",
    vitamins: "Vitamins",
    skinCare: "Skin Care",
    syringes: "Syringes",
    bandages: "Bandages",
    masks: "Masks",
    counselling: "Counselling",
    dosageHelp: "Dosage Help",
    alternatives: "Alternatives",
    monthlyRefills: "Monthly Refills",
    bulkOrders: "Bulk Orders",
    records: "Records",
    onDemand: "On-Demand",
    quickDelivery: "Quick Delivery",
    support: "Support",
  },
  hi: {
    topBar: "प्रीमियम जेनेरिक दवाएं - आपका विश्वास, हमारी प्रतिबद्धता",
    phone: "📞 +91-98351 23889",
    available: "🕒 24/7 उपलब्ध",
    home: "होम",
    about: "परिचय",
    services: "सेवाएं",
    genericInfo: "जेनेरिक जानकारी",
    whyUs: "क्यों हम",
    visit: "विज़िट करें",
    contact: "संपर्क",
    callUs: "हमें कॉल करें",
    trustedHealthcare: "✨ विश्वसनीय स्वास्थ्यसेवा",
    qualityMedicines: "गुणवत्ता वाली दवाएं",
    unbeatable: "अतुलनीय कीमतों पर",
    heroDesc:
      "भारत के आधिकारिक PMBJP प्रोग्राम के माध्यम से अपनी दवाओं पर 90% तक बचाएं। समान गुणवत्ता, गारंटीकृत सुरक्षा, सभी के लिए सस्ती।",
    callNow: "📞 अभी कॉल करें",
    findUs: "📍 हमें खोजें",
    savings: "बचत",
    savingsPct: "50-90%",
    status: "स्थिति",
    statusOpen: "🟢 खुला",
    hours: "घंटे",
    hours24: "24/7",
    storeInfo: "स्टोर जानकारी",
    govCertified: "सरकार द्वारा प्रमाणित फार्मेसी",
    address: "पता",
    addressValue: "गोला रोड, रामगढ़ छावनी, झारखंड 829122",
    contactLabel: "संपर्क",
    contactValue: "+91-98351 23889",
    email: "ईमेल",
    emailValue: "nandlalrg1947@gmail.com",
    openNow: "अभी खुला है",
    openTime: "सुबह 8:00 - रात 10:00",
    weProvide: "हम प्रदान करते हैं",
    genericMedicines: "जेनेरिक दवाएं",
    otcProducts: "OTC उत्पाद",
    surgicalItems: "सर्जिकल वस्तुएं",
    wellness: "कल्याण",
    aboutUs: "हमारे बारे में",
    affordableHealthcare: "सभी के लिए सस्ती स्वास्थ्यसेवा",
    janAushadhi:
      "जन औषधि केंद्र प्रधान मंत्री भारतीय जनऔषधि परियोजना के तहत एक सरकार द्वारा समर्थित फार्मेसी है, जो सभी के लिए गुणवत्ता वाली जेनेरिक दवाएं सुलभ बनाती है।",
    genericMedicinesDesc:
      "जेनेरिक दवाओं की गुणवत्ता, सुरक्षा और प्रभावशीलता ब्रांडेड दवाओं के समान है लेकिन कीमत 50-90% कम है। हम सुनिश्चित करते हैं कि हर परिवार को वित्तीय बोझ के बिना आवश्यक दवाएं मिलें।",
    savingsCalculated: "*बचत ब्रांडेड MRP की तुलना में की गई है",
    affordable: "सस्ता",
    affordableDesc: "ब्रांडेड दवाओं की तुलना में 50-90% कम कीमत",
    qualityAssured: "गुणवत्ता सुनिश्चित",
    qualityAssuredDesc: "BPPI द्वारा प्रमाणित कड़े मानकों के साथ",
    wideRange: "विस्तृत श्रृंखला",
    wideRangeDesc: "पुरानी, तीव्र, OTC और कल्याण उत्पाद",
    forEveryone: "सभी के लिए",
    forEveryoneDesc:
      "सभी उम्र के लोगों को देखभाल और विशेषज्ञता के साथ सेवा देना",
    servicesLabel: "सेवाएं",
    whatWeOffer: "हम क्या प्रदान करते हैं",
    genericMedicinesTitle: "जेनेरिक दवाएं",
    genericMedicinesSubDesc: "उच्च गुणवत्ता वाले ब्रांडेड विकल्प",
    otcWellness: "OTC और कल्याण",
    otcWellnessDesc: "दैनिक स्वास्थ्यसेवा आवश्यकताएं",
    surgicalItemsTitle: "सर्जिकल वस्तुएं",
    surgicalItemsDesc: "चिकित्सा गृह देखभाल उत्पाद",
    patientSupport: "रोगी सहायता",
    patientSupportDesc: "विशेषज्ञ दवा मार्गदर्शन",
    chronicCare: "पुरानी देखभाल",
    chronicCareDesc: "दीर्घकालीन रोगी सहायता",
    specialOrders: "विशेष ऑर्डर",
    specialOrdersDesc: "कस्टम दवा सोर्सिंग",
    understandingMedicines: "दवाओं को समझना",
    whatAreGeneric: "जेनेरिक दवाएं क्या हैं?",
    genericDesc:
      "जेनेरिक दवाएं ब्रांडेड दवाओं के सस्ते और उच्च गुणवत्ता वाले विकल्प हैं। जानें कि वे क्यों समान रूप से सुरक्षित और प्रभावी हैं।",
    definition: "परिभाषा",
    definitionText:
      "जेनेरिक दवाएं ब्रांड नाम के बिना उत्पादित और वितरित फार्मास्यूटिकल ड्रग हैं। उनमें ब्रांडेड दवाओं के समान सक्रिय घटक, ताकत और खुराक होती है लेकिन कीमत में काफी कम होती है।",
    sameActiveIngredient: "समान सक्रिय घटक",
    sameActiveIngredientDesc: "ब्रांडेड ड्रग्स के समान रासायनिक संरचना",
    fdaApproved: "FDA और WHO द्वारा अनुमोदित",
    fdaApprovedDesc: "ब्रांडेड दवाओं के समान गुणवत्ता मानक",
    cheaper: "50-90% सस्ता",
    cheaperDesc: "कोई विपणन या विज्ञापन लागत नहीं",
    brandedVsGeneric: "ब्रांडेड बनाम जेनेरिक",
    branded: "ब्रांडेड",
    generic: "जेनेरिक",
    expensivePackaging: "✓ महंगी पैकेजिंग",
    heavyAdvertising: "✓ भारी विज्ञापन लागत",
    premiumPricing: "✓ प्रीमियम कीमत निर्धारण",
    sameIngredient: "✓ समान सक्रिय घटक",
    simplePackaging: "✓ सरल, बुनियादी पैकेजिंग",
    minimalAdvertising: "✓ न्यूनतम विज्ञापन",
    affordablePricing: "✓ सस्ती कीमत निर्धारण",
    onlyDifference: "💡 केवल कीमत में अंतर है, गुणवत्ता में नहीं!",
    keyBenefits: "जेनेरिक दवाओं के मुख्य लाभ",
    hugeSavings: "विशाल लागत बचत",
    hugeSavingsDesc:
      "अपने मासिक दवा व्यय पर 50-90% बचाएं। आपके परिवार के बजट को तुरंत लाभ मिलता है।",
    sameEffectiveness: "समान प्रभावशीलता",
    sameEffectivenessDesc:
      "समान सक्रिय घटक हैं। ब्रांडेड दवाओं के समान तरीके से काम करता है।",
    qualityCertified: "गुणवत्ता प्रमाणित",
    qualityCertifiedDesc:
      "WHO, FDA और BPPI द्वारा अनुमोदित। विश्वव्यापी सर्वोच्च फार्मास्यूटिकल मानकों को पूरा करता है।",
    fastRelief: "तेज़ राहत",
    fastReliefDesc:
      "समान गति से काम करना शुरू करता है। समान ताकत, समान खुराक ब्रांडेड संस्करण के रूप में।",
    accessibleHealthcare: "सुलभ स्वास्थ्यसेवा",
    accessibleHealthcareDesc:
      "सभी परिवारों, अमीर और गरीब दोनों के लिए आवश्यक दवाएं सस्ती बनाता है।",
    betterCompliance: "बेहतर अनुपालन",
    betterComplianceDesc:
      "कम लागत का मतलब है कि रोगी पूरा उपचार वहन कर सकते हैं। समग्र बेहतर स्वास्थ्य परिणाम।",
    whyCheap: "जेनेरिक दवाएं इतनी सस्ती क्यों हैं?",
    noResearch: "कोई शोध लागत नहीं",
    noResearchDesc:
      "ब्रांडेड कंपनियां शोध और विकास पर अरबों खर्च करती हैं। जेनेरिक निर्माता इसे छोड़ देते हैं, सिद्ध सूत्र का उपयोग करते हैं।",
    noAdvertising: "कोई विज्ञापन नहीं",
    noAdvertisingDesc:
      "कोई टीवी विज्ञापन, सेलिब्रिटी एंडोर्समेंट या फैंसी पैकेजिंग नहीं। जेनेरिक निर्माता पूरी तरह से विपणन में बचत करते हैं।",
    simplePackagingTitle: "सरल पैकेजिंग",
    simplePackagingDesc:
      "बुनियादी पैकेजिंग और लेबल। यहां पैसा बचाया जाता है और सीधे ग्राहकों को दिया जाता है।",
    competition: "प्रतियोगिता",
    competitionDesc:
      "कई जेनेरिक निर्माता एक ही दवा का उत्पादन करते हैं, प्रतियोगिता के माध्यम से कीमतें नीचे लाते हैं।",
    costBreakdown: "लागत विभाजन",
    brandedMedicine: "ब्रांडेड दवा",
    genericMedicine: "जेनेरिक दवा",
    medicine: "दवा",
    research: "शोध",
    marketing: "विपणन",
    profit: "लाभ",
    youSave: "🎉 आप जेनेरिक के साथ प्रति दवा ₹450 बचाते हैं!",
    commonQuestions: "जेनेरिक दवाओं के बारे में आम सवाल",
    q1: "क्या जेनेरिक दवाएं ब्रांडेड दवाओं जितनी प्रभावी हैं?",
    a1: "हां, बिल्कुल! जेनेरिक दवाओं में समान ताकत में बिल्कुल समान सक्रिय घटक होता है। वे ब्रांडेड दवाओं के समान काम करते हैं।",
    q2: "क्या जेनेरिक दवाएं सुरक्षित हैं?",
    a2: "हां, वे पूरी तरह सुरक्षित हैं। जेनेरिक दवाओं को WHO, FDA और भारतीय फार्मास्यूटिकल नियामक निकायों (BPPI) द्वारा अनुमोदित किया गया है। वे समान कड़े गुणवत्ता परीक्षणों से गुजरते हैं।",
    q3: "अगर जेनेरिक समान हैं तो डॉक्टर ब्रांडेड दवाएं क्यों देते हैं?",
    a3: "कई डॉक्टर जानते हैं और जेनेरिक देते हैं। रोगी अपने डॉक्टर या फार्मासिस्ट से किसी भी दवा का जेनेरिक संस्करण मांग सकते हैं।",
    q4: "अगर मुझे ब्रांडेड दवा से एलर्जी है तो क्या मुझे जेनेरिक से भी एलर्जी होगी?",
    a4: "यदि आप सक्रिय घटक से एलर्जी हैं, हां। लेकिन जेनेरिक्स समान घटक का उपयोग करते हैं। अंतर केवल fillers/binders में है, जो आमतौर पर समान होते हैं।",
    q5: "जेनेरिक दवाओं का उपयोग करके मैं कितना बचा सकता हूं?",
    a5: "बचत अलग-अलग होती है, लेकिन आमतौर पर प्रति दवा 50-90%। परिवार के लिए कई दवाएं लेते हुए, मासिक बचत ₹2,000 से ₹10,000+ हो सकती है।",
    q6: "क्या मैं इलाज के बीच में ब्रांडेड से जेनेरिक दवा में स्विच कर सकता हूं?",
    a6: "हां, आप कर सकते हैं। अपने डॉक्टर या फार्मासिस्ट से परामर्श लें। चूंकि सक्रिय घटक समान है, स्विच करने में कोई हानि नहीं है।",
    startSaving: "आज से बचत शुरू करें!",
    startSavingDesc:
      "जेनेरिक दवाओं पर स्विच करें और अपने मासिक दवा व्यय पर 50-90% बचाएं। आपका स्वास्थ्य, आपकी पसंद, आपकी बचत!",
    whyChooseUs: "आपके लिए वास्तविक लाभ",
    saveMoney: "💰 पैसा बचाएं",
    saveMoneyDesc: "चिकित्सा व्यय को 90% तक कम करें",
    transparent: "📋 पारदर्शी",
    transparentDesc: "स्पष्ट बिलिंग, संपूर्ण दवा विवरण",
    govBacked: "🏛️ सरकार द्वारा समर्थित",
    govBackedDesc: "भारत की आधिकारिक PMBJP पहल",
    friendly: "😊 दोस्ताना",
    friendlyDesc: "गर्म, सम्मानजनक विशेषज्ञ सेवा",
    visitOurStore: "हमारे स्टोर पर जाएं",
    visitLocation: "सुबह 8:00 - रात 10:00 (सभी दिन)",
    openMaps: "गूगल मैप्स में खोलें",
    getInTouch: "संपर्क में रहें",
    questionsDesc:
      "दवाओं या सेवाओं के बारे में प्रश्न? हम दोस्ताना, विशेषज्ञ मार्गदर्शन के साथ 24/7 मदद करने के लिए यहां हैं।",
    quickContact: "त्वरित संपर्क",
    name: "नाम",
    yourName: "आपका नाम",
    yourPhone: "फोन",
    yourEmail: "ईमेल",
    message: "संदेश",
    yourMessage: "आपका संदेश...",
    sendMessage: "संदेश भेजें",
    respondTime: "हम 24 घंटे में जवाब देंगे",
    footerDesc:
      "सरकार द्वारा प्रमाणित फार्मेसी गुणवत्ता वाली सस्ती दवाएं प्रदान करती है।",
    footerHours: "सोमवार - रविवार: सुबह 8:00 - रात 10:00",
    footerContact: "📞 +91-98351 23889",
    copyright: `© ${new Date().getFullYear()} जन औषधि केंद्र। सर्वाधिकार सुरक्षित।`,
    pmbjp: "PMBJP | भारत सरकार की पहल",
    ans: "उत्तर: ",
    q: "प्रश्न.",
    cardiac: "कार्डिएक और मधुमेह",
    antibiotics: "एंटीबायोटिक्स",
    painRelief: "दर्द निवारक",
    feverCold: "बुखार और सर्दी",
    vitamins: "विटामिन",
    skinCare: "त्वचा देखभाल",
    syringes: "सीरिंज",
    bandages: "पट्टियां",
    masks: "मास्क",
    counselling: "परामर्श",
    dosageHelp: "खुराक सहायता",
    alternatives: "विकल्प",
    monthlyRefills: "मासिक रिफिल",
    bulkOrders: "बल्क ऑर्डर",
    records: "रिकॉर्ड",
    onDemand: "मांग पर",
    quickDelivery: "तेज़ डिलीवरी",
    support: "सहायता",
  },
};

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const t = (key) => translations[language][key] || key;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };

  const navItems = [
    [language === "en" ? "Home" : "होम", "hero"],
    [language === "en" ? "About" : "परिचय", "about"],
    [language === "en" ? "Services" : "सेवाएं", "medicines"],
    [language === "en" ? "Generic Info" : "जेनेरिक जानकारी", "generic-info"],
    [language === "en" ? "Why Us" : "क्यों हम", "benefits"],
    [language === "en" ? "Visit" : "विज़िट करें", "location"],
    [language === "en" ? "Contact" : "संपर्क", "contact"],
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-blue-50/30 to-white font-sans">
      {/* Top Bar */}
      <div className="w-full bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-700 text-white text-xs sm:text-sm shadow-lg">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-3 py-4">
          <p className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/30 text-[12px] font-bold backdrop-blur shadow">
              ✓
            </span>
            <span className="font-semibold tracking-wide">{t("topBar")}</span>
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="tel:+919835123889"
              className="hover:text-blue-200 transition-colors font-semibold"
            >
              {t("phone")}
            </a>
            <span className="hidden sm:inline font-semibold">
              {t("available")}
            </span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-blue-100/30 shadow-lg">
        <div className="section-container flex items-center justify-between py-5">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-indigo-700 text-white font-bold text-2xl shadow-lg group-hover:shadow-xl transition-all">
              Rx
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-extrabold text-slate-900">
                Jan Aushadhi
              </h1>
              <p className="text-[10px] text-blue-700 font-semibold">
                PMBJP Certified
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="px-4 py-2 text-base font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50/70 rounded-xl transition-all duration-200"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center gap-2 mx-4">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1.5 rounded-lg font-bold text-sm transition-all ${
                language === "en"
                  ? "bg-blue-700 text-white shadow-md"
                  : "bg-blue-100 text-blue-700 hover:bg-blue-200"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("hi")}
              className={`px-3 py-1.5 rounded-lg font-bold text-sm transition-all ${
                language === "hi"
                  ? "bg-blue-700 text-white shadow-md"
                  : "bg-blue-100 text-blue-700 hover:bg-blue-200"
              }`}
            >
              HI
            </button>
          </div>

          {/* CTA Button */}
          <a
            href="tel:+919835123889"
            className="hidden sm:inline-flex px-6 py-2 bg-gradient-to-r from-blue-700 to-indigo-700 text-white text-base font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            {t("callUs")}
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-blue-100 rounded-xl transition-colors"
          >
            <svg
              className="w-7 h-7 text-slate-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-blue-100/30 bg-white/98 backdrop-blur shadow-lg">
            <nav className="section-container py-4 space-y-2">
              {navItems.map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left px-5 py-3 text-base font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition-all"
                >
                  {label}
                </button>
              ))}
              <div className="flex gap-2 px-4 py-3 border-t border-blue-100/30 mt-2">
                <button
                  onClick={() => setLanguage("en")}
                  className={`flex-1 px-3 py-2 rounded-lg font-bold text-sm transition-all ${
                    language === "en"
                      ? "bg-blue-700 text-white"
                      : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage("hi")}
                  className={`flex-1 px-3 py-2 rounded-lg font-bold text-sm transition-all ${
                    language === "hi"
                      ? "bg-blue-700 text-white"
                      : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                  }`}
                >
                  हिंदी
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section
          id="hero"
          className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-50 pt-12 sm:pt-16 lg:pt-28 pb-16 sm:pb-24 lg:pb-32"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-200/20 to-blue-200/20 rounded-full blur-3xl -ml-48 -mb-48" />

          <div className="section-container relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-3.5 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
                  {t("trustedHealthcare")}
                </span>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
                  {t("qualityMedicines")}
                  <span className="block mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {t("unbeatable")}
                  </span>
                </h1>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed max-w-lg font-medium">
                {t("heroDesc")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="tel:+919835123889"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-center"
                >
                  {t("callNow")}
                </a>
                <button
                  onClick={() => scrollToSection("location")}
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {t("findUs")}
                </button>
              </div>

              {/* Stats */}
              <div className="grid sm:grid-cols-3 gap-4 pt-6">
                <div className="p-4 rounded-xl bg-white border border-blue-100/50 shadow-sm">
                  <p className="text-xs text-slate-600 font-semibold uppercase mb-1">
                    {t("savings")}
                  </p>
                  <p className="text-2xl font-bold text-blue-600">
                    {t("savingsPct")}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-blue-100/50 shadow-sm">
                  <p className="text-xs text-slate-600 font-semibold uppercase mb-1">
                    {t("status")}
                  </p>
                  <p className="text-2xl font-bold text-blue-600">
                    {t("statusOpen")}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-blue-100/50 shadow-sm">
                  <p className="text-xs text-slate-600 font-semibold uppercase mb-1">
                    {t("hours")}
                  </p>
                  <p className="text-2xl font-bold text-blue-600">
                    {t("hours24")}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Panel - Modern Card */}
            <div className="relative">
              <div className="absolute -right-8 -top-8 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-2xl" />
              <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-gradient-to-tr from-indigo-200/30 to-blue-200/30 rounded-full blur-2xl" />

              <div className="relative bg-white/70 backdrop-blur-xl border border-blue-100/50 rounded-2xl shadow-2xl p-8 space-y-6">
                <div className="space-y-3 pb-6 border-b border-blue-100/30">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {t("storeInfo")}
                  </h3>
                  <p className="text-sm text-slate-600">{t("govCertified")}</p>
                </div>

                <div className="space-y-5">
                  <div className="flex gap-4">
                    <span className="text-2xl flex-shrink-0">📍</span>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-500 uppercase">
                        {t("address")}
                      </p>
                      <p className="text-sm text-slate-700 font-medium mt-1">
                        {t("addressValue")}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-2xl flex-shrink-0">📞</span>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">
                        {t("contactLabel")}
                      </p>
                      <p className="text-sm text-slate-700 font-medium mt-1">
                        {t("contactValue")}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-2xl flex-shrink-0">📧</span>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">
                        {t("email")}
                      </p>
                      <p className="text-sm text-slate-700 font-medium mt-1">
                        {t("emailValue")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-4 border border-emerald-200/50">
                  <p className="text-xs font-bold text-emerald-700 mb-2">
                    {t("status")}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-slate-900">{t("openNow")}</p>
                      <p className="text-xs text-slate-600">{t("openTime")}</p>
                    </div>
                    <span className="text-lg">🟢</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <p className="text-xs font-bold text-slate-500 uppercase">
                    {t("weProvide")}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="text-xs bg-blue-50 text-blue-700 px-3 py-2 rounded-lg font-semibold">
                      {t("genericMedicines")}
                    </span>
                    <span className="text-xs bg-blue-50 text-blue-700 px-3 py-2 rounded-lg font-semibold">
                      {t("otcProducts")}
                    </span>
                    <span className="text-xs bg-blue-50 text-blue-700 px-3 py-2 rounded-lg font-semibold">
                      {t("surgicalItems")}
                    </span>
                    <span className="text-xs bg-blue-50 text-blue-700 px-3 py-2 rounded-lg font-semibold">
                      {t("wellness")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 sm:py-28 bg-white">
          <div className="section-container grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="inline-block px-3.5 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
                  {t("aboutUs")}
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                  {t("affordableHealthcare")}
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  {t("janAushadhi")}
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {t("genericMedicinesDesc")}
                </p>
              </div>

              <div className="text-sm text-slate-600 italic font-medium pt-4 border-t border-blue-100/50">
                {t("savingsCalculated")}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 hover:shadow-lg transition-all duration-300">
                <p className="text-3xl mb-3">💰</p>
                <h3 className="font-bold text-slate-900 mb-2">
                  {t("affordable")}
                </h3>
                <p className="text-sm text-slate-700">{t("affordableDesc")}</p>
              </div>
              <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 hover:shadow-lg transition-all duration-300">
                <p className="text-3xl mb-3">✅</p>
                <h3 className="font-bold text-slate-900 mb-2">
                  {t("qualityAssured")}
                </h3>
                <p className="text-sm text-slate-700">
                  {t("qualityAssuredDesc")}
                </p>
              </div>
              <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 hover:shadow-lg transition-all duration-300">
                <p className="text-3xl mb-3">📦</p>
                <h3 className="font-bold text-slate-900 mb-2">
                  {t("wideRange")}
                </h3>
                <p className="text-sm text-slate-700">{t("wideRangeDesc")}</p>
              </div>
              <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 hover:shadow-lg transition-all duration-300">
                <p className="text-3xl mb-3">❤️</p>
                <h3 className="font-bold text-slate-900 mb-2">
                  {t("forEveryone")}
                </h3>
                <p className="text-sm text-slate-700">{t("forEveryoneDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="medicines"
          className="py-20 sm:py-28 bg-gradient-to-b from-blue-50/50 to-white"
        >
          <div className="section-container space-y-16">
            <div className="space-y-4">
              <span className="inline-block px-3.5 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
                {t("servicesLabel")}
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight max-w-2xl">
                {t("whatWeOffer")}
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "💊",
                  titleKey: "genericMedicinesTitle",
                  descKey: "genericMedicinesSubDesc",
                  itemKeys: ["cardiac", "antibiotics", "painRelief"],
                },
                {
                  icon: "🛒",
                  titleKey: "otcWellness",
                  descKey: "otcWellnessDesc",
                  itemKeys: ["feverCold", "vitamins", "skinCare"],
                },
                {
                  icon: "⚕️",
                  titleKey: "surgicalItemsTitle",
                  descKey: "surgicalItemsDesc",
                  itemKeys: ["syringes", "bandages", "masks"],
                },
                {
                  icon: "👨‍⚕️",
                  titleKey: "patientSupport",
                  descKey: "patientSupportDesc",
                  itemKeys: ["counselling", "dosageHelp", "alternatives"],
                },
                {
                  icon: "📋",
                  titleKey: "chronicCare",
                  descKey: "chronicCareDesc",
                  itemKeys: ["monthlyRefills", "bulkOrders", "records"],
                },
                {
                  icon: "🚚",
                  titleKey: "specialOrders",
                  descKey: "specialOrdersDesc",
                  itemKeys: ["onDemand", "quickDelivery", "support"],
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="group p-6 rounded-xl bg-white border border-blue-100/30 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
                >
                  <p className="text-3xl mb-4">{service.icon}</p>
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">
                    {t(service.descKey)}
                  </p>
                  <ul className="space-y-2">
                    {service.itemKeys.map((itemKey, i) => (
                      <li
                        key={i}
                        className="text-xs text-slate-600 flex items-center gap-2"
                      >
                        <span className="text-blue-600 font-bold">•</span>
                        {t(itemKey)}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✨ GENERIC MEDICINES EDUCATION SECTION ✨ */}
        <section
          id="generic-info"
          className="py-20 sm:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white"
        >
          <div className="section-container space-y-16">
            {/* Header */}
            <div className="space-y-4 max-w-3xl">
              <span className="inline-block px-3.5 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
                {t("understandingMedicines")}
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                {t("whatAreGeneric")}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t("genericDesc")}
              </p>
            </div>

            {/* Main Definition Card */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {t("definition")}
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    {t("definitionText")}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4 p-5 rounded-xl bg-white border-2 border-emerald-200 shadow-md">
                    <span className="text-3xl flex-shrink-0">🎯</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">
                        {t("sameActiveIngredient")}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {t("sameActiveIngredientDesc")}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 rounded-xl bg-white border-2 border-emerald-200 shadow-md">
                    <span className="text-3xl flex-shrink-0">✅</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">
                        {t("fdaApproved")}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {t("fdaApprovedDesc")}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 rounded-xl bg-white border-2 border-emerald-200 shadow-md">
                    <span className="text-3xl flex-shrink-0">💰</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">
                        {t("cheaper")}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {t("cheaperDesc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -right-8 -top-8 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-2xl" />
                <div className="relative bg-white rounded-2xl border-2 border-blue-100 shadow-2xl p-8 space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {t("brandedVsGeneric")}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-lg">
                          🏷️
                        </div>
                        <h4 className="font-bold text-slate-900">
                          {t("branded")}
                        </h4>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-600 ml-13">
                        <li>{t("expensivePackaging")}</li>
                        <li>{t("heavyAdvertising")}</li>
                        <li>{t("premiumPricing")}</li>
                        <li>{t("sameIngredient")}</li>
                      </ul>
                    </div>

                    <div className="border-t-2 border-blue-100 pt-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-lg">
                          💚
                        </div>
                        <h4 className="font-bold text-slate-900">
                          {t("generic")}
                        </h4>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-600 ml-13">
                        <li>{t("simplePackaging")}</li>
                        <li>{t("minimalAdvertising")}</li>
                        <li>{t("affordablePricing")}</li>
                        <li>{t("sameIngredient")}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                    <p className="text-sm font-semibold text-green-800">
                      {t("onlyDifference")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="space-y-8">
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">
                {t("keyBenefits")}
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: "💸",
                    title: "Huge Cost Savings",
                    desc: "Save 50-90% on your monthly medicine expenses. Your family budget benefits immediately.",
                  },
                  {
                    icon: "🏥",
                    title: "Same Effectiveness",
                    desc: "Contains identical active ingredients. Works exactly the same way as branded medicines.",
                  },
                  {
                    icon: "✅",
                    title: "Quality Certified",
                    desc: "Approved by WHO, FDA, and BPPI. Meets highest pharmaceutical standards globally.",
                  },
                  {
                    icon: "⏱️",
                    title: "Fast Relief",
                    desc: "Starts working at the same speed. Same strength, same dosage as branded versions.",
                  },
                  {
                    icon: "🌍",
                    title: "Accessible Healthcare",
                    desc: "Makes essential medicines affordable for all families, rich and poor alike.",
                  },
                  {
                    icon: "📊",
                    title: "Better Compliance",
                    desc: "Lower cost means patients can afford full treatment. Better health outcomes overall.",
                  },
                ].map((benefit, idx) => (
                  <div
                    key={idx}
                    className="group p-6 rounded-xl bg-white border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h4 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Are They Cheaper */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-slate-900">
                  {t("whyCheap")}
                </h3>

                <div className="space-y-4">
                  <div className="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="text-xl">1️⃣</span> {t("noResearch")}
                    </h4>
                    <p className="text-sm text-slate-700">
                      {t("noResearchDesc")}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="text-xl">2️⃣</span> {t("noAdvertising")}
                    </h4>
                    <p className="text-sm text-slate-700">
                      {t("noAdvertisingDesc")}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="text-xl">3️⃣</span>{" "}
                      {t("simplePackagingTitle")}
                    </h4>
                    <p className="text-sm text-slate-700">
                      {t("simplePackagingDesc")}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="text-xl">4️⃣</span> {t("competition")}
                    </h4>
                    <p className="text-sm text-slate-700">
                      {t("competitionDesc")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-gradient-to-tr from-indigo-200/30 to-blue-200/30 rounded-full blur-2xl" />
                <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border-2 border-blue-200 p-8 shadow-lg">
                  <h4 className="text-2xl font-bold text-slate-900 mb-6">
                    {t("costBreakdown")}
                  </h4>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-slate-700">
                          {t("brandedMedicine")}
                        </span>
                        <span className="text-lg font-bold text-slate-900">
                          ₹500
                        </span>
                      </div>
                      <div className="w-full bg-slate-300 rounded-full h-3">
                        <div className="bg-red-500 h-3 rounded-full w-full flex items-center justify-end pr-2">
                          <span className="text-xs text-white font-bold">
                            100%
                          </span>
                        </div>
                      </div>
                      <div className="text-xs text-slate-600 mt-2 space-y-1">
                        <p>- {t("medicine")}: ₹50</p>
                        <p>- {t("research")}: ₹150</p>
                        <p>- {t("marketing")}: ₹200</p>
                        <p>- {t("profit")}: ₹100</p>
                      </div>
                    </div>

                    <div className="border-t-2 border-blue-200 pt-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-slate-700">
                            {t("genericMedicine")}
                          </span>
                          <span className="text-lg font-bold text-green-600">
                            ₹50
                          </span>
                        </div>
                        <div className="w-full bg-slate-300 rounded-full h-3">
                          <div className="bg-green-500 h-3 rounded-full w-[10%]" />
                        </div>
                        <div className="text-xs text-slate-600 mt-2 space-y-1">
                          <p>- {t("medicine")}: ₹40</p>
                          <p>- {t("packaging")}: ₹5</p>
                          <p>- {t("profit")}: ₹5</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-green-100 border border-green-300">
                    <p className="text-sm font-bold text-green-800">
                      {t("youSave")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-900">
                {t("commonQuestions")}
              </h3>

              <div className="grid gap-6">
                {[
                  {
                    q: "Are generic medicines as effective as branded medicines?",
                    a: "Yes, absolutely! Generic medicines contain the exact same active ingredient in the same strength. They work identically to branded medicines.",
                  },
                  {
                    q: "Are generic medicines safe?",
                    a: "Yes, they are completely safe. Generic medicines are approved by WHO, FDA, and Indian pharmaceutical regulatory bodies (BPPI). They undergo the same strict quality tests.",
                  },
                  {
                    q: "Why do doctors prescribe branded medicines if generics are the same?",
                    a: "Many doctors are aware and do prescribe generics. Patients can also ask their doctor or pharmacist for the generic version of any medicine.",
                  },
                  {
                    q: "What if I'm allergic to a branded medicine - will I be allergic to the generic too?",
                    a: "If you're allergic to the active ingredient, yes. But generics use the same ingredient. The difference is only in fillers/binders, which are usually similar.",
                  },
                  {
                    q: "How much can I save by using generic medicines?",
                    a: "Savings vary, but typically 50-90% per medicine. For a family taking multiple medicines, the monthly savings can be ₹2,000 to ₹10,000+.",
                  },
                  {
                    q: "Can I switch from branded to generic medicine midway through treatment?",
                    a: "Yes, you can. Consult your doctor or pharmacist. Since the active ingredient is identical, there's no harm in switching.",
                  },
                ].map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-white border-2 border-blue-100 hover:border-blue-300 shadow-md hover:shadow-lg transition-all"
                  >
                    <h4 className="font-bold text-slate-900 mb-3 text-lg flex items-start gap-3">
                      <span className="text-blue-600 font-bold text-xl">
                        {t("q")}
                      </span>
                      {faq.q}
                    </h4>
                    <p className="text-slate-700 leading-relaxed pl-8 text-base">
                      <span className="font-bold text-green-600">
                        {t("ans")}
                      </span>
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 p-8 sm:p-12 text-white shadow-2xl">
              <div className="text-center space-y-4 max-w-2xl mx-auto">
                <h3 className="text-3xl sm:text-4xl font-bold">
                  {t("startSaving")}
                </h3>
                <p className="text-lg opacity-90">{t("startSavingDesc")}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <a
                    href="tel:+919835123889"
                    className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    📞 {t("callUs")} {t("now")}
                  </a>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-8 py-4 bg-white/20 border-2 border-white text-white font-bold rounded-xl hover:bg-white/30 transition-all duration-300"
                  >
                    📝 {t("sendEnquiry")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 sm:py-28 bg-white">
          <div className="section-container space-y-16">
            <div className="space-y-4">
              <span className="inline-block px-3.5 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
                {t("whyChooseUs")}
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                {t("realBenefits")}
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-4 sm:grid-cols-2">
              {[
                {
                  title: "💰 Save Money",
                  desc: "Cut medical expenses by up to 90%",
                },
                {
                  title: "📋 Transparent",
                  desc: "Clear billing, full medicine details",
                },
                {
                  title: "🏛️ Govt Backed",
                  desc: "Official PMBJP initiative by India",
                },
                {
                  title: "😊 Friendly",
                  desc: "Warm, respectful expert service",
                },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
                >
                  <h3 className="font-bold text-slate-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section
          id="location"
          className="py-20 sm:py-28 bg-gradient-to-b from-blue-50/50 to-white"
        >
          <div className="section-container grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-3.5 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
                  {t("location")}
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                  {t("visitOurStore")}
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: "📍",
                    label: "Address",
                    value: "Gola Rd, Ramgarh Cantonment, Jharkhand 829122",
                  },
                  {
                    icon: "🕒",
                    label: "Hours",
                    value: "8:00 AM – 10:00 PM (All Days)",
                  },
                  { icon: "📞", label: "Phone", value: "+91-98351 23889" },
                  {
                    icon: "📧",
                    label: "Email",
                    value: "nandlalrg1947@gmail.com",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors group"
                  >
                    <span className="text-2xl group-hover:scale-125 transition-transform">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">
                        {item.label}
                      </p>
                      <p className="text-sm text-slate-700 font-medium mt-1">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="inline-flex px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                target="_blank"
                rel="noreferrer"
              >
                {t("openMaps")}
              </a>
            </div>

            <div className="h-72 lg:h-96 rounded-xl overflow-hidden border-2 border-blue-100/50 shadow-lg">
              <iframe
                title="Store Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.2724284789797!2d85.5148444!3d23.630412800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4f394ee1ba44b%3A0x9797b543219923bf!2sPradhan%20Mantri%20Jan%20Aushadhi%20Kendra!5e0!3m2!1sen!2sin!4v1764752466985!5m2!1sen!2sin"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 sm:py-28 bg-white">
          <div className="section-container grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-3.5 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
                  {t("contact")}
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                  {t("getInTouch")}
                </h2>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                {t("questionsDesc")}
              </p>

              <div className="space-y-3">
                {[
                  {
                    icon: "📞",
                    label: "Phone",
                    value: "+91-98351 23889",
                    link: "tel:+919835123889",
                  },
                  {
                    icon: "📧",
                    label: "Email",
                    value: "nandlalrg1947@gmail.com",
                    link: "mailto:nandlalrg1947@gmail.com",
                  },
                ].map((contact, idx) => (
                  <a
                    key={idx}
                    href={contact.link}
                    className="flex gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors group"
                  >
                    <span className="text-2xl">{contact.icon}</span>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">
                        {contact.label}
                      </p>
                      <p className="text-sm text-blue-600 font-semibold mt-1">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {t("quickContact")}
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    {t("name")}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-white"
                    placeholder={t("yourName")}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      {t("phone")}
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-white"
                      placeholder={t("yourPhone")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      {t("email")}
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-white"
                      placeholder={t("yourEmail")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    {t("message")}
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all bg-white resize-none"
                    rows="4"
                    placeholder={t("yourMessage")}
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  {t("sendMessage")}
                </button>

                <p className="text-xs text-slate-600 text-center">
                  {t("respondTime")}
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-blue-100/30 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="section-container py-12 grid sm:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">Jan Aushadhi Kendra</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t("footerDesc")}
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">{t("hours")}</h3>
            <p className="text-slate-400 text-sm">{t("footerHours")}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">{t("contact")}</h3>
            <p className="text-slate-400 text-sm">{t("footerContact")}</p>
          </div>
        </div>
        <div className="border-t border-slate-700 bg-slate-900/50 backdrop-blur">
          <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-sm text-slate-400">
            <p className="font-medium">{t("copyright")}</p>
            <p className="text-xs">{t("pmbjp")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
