import React, { useState } from 'react';
import {
  Mail, Phone, MapPin, Calendar, User, Globe, MessageCircle, ChevronDown, ChevronLeft, ChevronRight,
  Car, GraduationCap, Briefcase, DollarSign, Info, MessageSquare, Send
} from 'lucide-react';

// Define props interface for RecruitingForm
interface RecruitingFormProps {
  language?: string;
}

interface FormData {
  salutation: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
  addressStreet: string;
  addressCity: string;
  addressCountry: string;
  addressPostalCode: string;
  email: string;
  phone: string;
  messenger: string;
  messengerContact: string;
  countryOfResidence: string;
  timeZone: string;
  openToRemote: string;
  willingToRelocate: string;
  earliestStartDate: string;
  hasDriversLicense: string;
  ownsCar: string;
  highestDegree: string;
  fieldOfStudy: string;
  additionalCertifications: string;
  currentPosition: string;
  currentCompany: string;
  previousExperience: string;
  yearsOfExperience: string;
  lastCompanyStartDate: string;
  lastCompanyEndDate: string;
  applyingForPosition: string;
  expertiseRating: string;
  expectedSalary: string;
  salaryCurrency: string;
  paymentMethod: string;
  paymentSystem: string;
  bankIBAN: string;
  bankBIC: string;
  bankAccountNumber: string;
  bankRoutingNumber: string;
  bankSortCode: string;
  cryptoAddress: string;
  willingToTrain: string;
  trainingHours: string;
  selfImprovement: string;
  colleagueDescription: string;
  stressHandling: string;
  criticismResponse: string;
  motivation: string;
  mistakeHandling: string;
  certifications?: FileList | null;
  cv?: File | null;
  freelancerConsent: boolean;
  privacyConsent: boolean;
  accuracyConsent: boolean;
}

// Define translations for 12 languages
const TRANSLATIONS: Record<string, {
  headerTitle: string;
  headerSubtitle: string;
  steps: string[];
  personalSection: string;
  salutationLabel: string;
  salutationPlaceholder: string;
  salutationOptions: string[];
  firstNameLabel: string;
  firstNamePlaceholder: string;
  lastNameLabel: string;
  lastNamePlaceholder: string;
  dateOfBirthLabel: string;
  nationalityLabel: string;
  nationalityPlaceholder: string;
  addressStreetLabel: string;
  addressStreetPlaceholder: string;
  addressCityLabel: string;
  addressCityPlaceholder: string;
  addressCountryLabel: string;
  addressCountryPlaceholder: string;
  addressPostalCodeLabel: string;
  addressPostalCodePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  messengerLabel: string;
  messengerPlaceholder: string;
  messengers: string[];
  messengerContactLabel: string;
  messengerContactPlaceholders: Record<string, string>;
  availabilitySection: string;
  countryOfResidenceLabel: string;
  countryOfResidencePlaceholder: string;
  timeZoneLabel: string;
  timeZonePlaceholder: string;
  timeZoneTooltip: string;
  openToRemoteLabel: string;
  willingToRelocateLabel: string;
  earliestStartDateLabel: string;
  mobilitySection: string;
  hasDriversLicenseLabel: string;
  ownsCarLabel: string;
  qualificationsSection: string;
  certificationsSection: string;
  uploadCertificationsLabel: string;
  uploadCVLabel: string;
  highestDegreeLabel: string;
  highestDegreePlaceholder: string;
  degrees: string[];
  fieldOfStudyLabel: string;
  fieldOfStudyPlaceholder: string;
  additionalCertificationsLabel: string;
  additionalCertificationsPlaceholder: string;
  workExperienceSection: string;
  currentPositionLabel: string;
  currentPositionPlaceholder: string;
  currentCompanyLabel: string;
  currentCompanyPlaceholder: string;
  previousExperienceLabel: string;
  previousExperiencePlaceholder: string;
  yearsOfExperienceLabel: string;
  yearsOfExperiencePlaceholder: string;
  yearsOptions: string[];
  lastCompanyStartDateLabel: string;
  lastCompanyEndDateLabel: string;
  applyingForPositionLabel: string;
  applyingForPositionPlaceholder: string;
  positions: string[];
  expertiseRatingLabel: string;
  expertiseRatingPlaceholder: string;
  expertiseOptions: string[];
  preferencesSection: string;
  expectedSalaryLabel: string;
  expectedSalaryPlaceholder: string;
  salaryCurrencyLabel: string;
  salaryCurrencyPlaceholder: string;
  currencies: string[];
  paymentMethodLabel: string;
  paymentMethodPlaceholder: string;
  paymentMethods: string[];
  paymentSystemLabel: string;
  paymentSystemPlaceholder: string;
  paymentSystems: string[];
  bankIBANLabel: string;
  bankIBANPlaceholder: string;
  bankIBANTooltip: string;
  bankBICLabel: string;
  bankBICPlaceholder: string;
  bankBICTooltip: string;
  bankAccountNumberLabel: string;
  bankAccountNumberPlaceholder: string;
  bankRoutingNumberLabel: string;
  bankRoutingNumberPlaceholder: string;
  bankSortCodeLabel: string;
  bankSortCodePlaceholder: string;
  cryptoAddressLabel: string;
  cryptoAddressPlaceholder: string;
  selfDevelopmentSection: string;
  willingToTrainLabel: string;
  trainingHoursLabel: string;
  trainingHoursPlaceholder: string;
  trainingHoursOptions: string[];
  selfImprovementLabel: string;
  selfImprovementPlaceholder: string;
  characterSection: string;
  colleagueDescriptionLabel: string;
  colleagueDescriptionPlaceholder: string;
  stressHandlingLabel: string;
  stressHandlingPlaceholder: string;
  criticismResponseLabel: string;
  criticismResponsePlaceholder: string;
  motivationLabel: string;
  motivationPlaceholder: string;
  motivations: string[];
  mistakeHandlingLabel: string;
  mistakeHandlingPlaceholder: string;
  legalSection: string;
  freelancerConsentLabel: string;
  privacyConsentLabel: string;
  privacyPolicyLink: string;
  accuracyConsentLabel: string;
  previousButton: string;
  nextButton: string;
  submitButton: string;
  yesNoOptions: string[];
}> = {
  en: {
    headerTitle: "Join Our Team",
    headerSubtitle: "Take your time to apply – we’re excited to learn about you!",
    steps: ["Personal & Contact Details", "Qualifications & Experience", "Preferences, Insights & Legal"],
    personalSection: "Tell Us About Yourself",
    salutationLabel: "Salutation",
    salutationPlaceholder: "Select",
    salutationOptions: ["Mr.", "Ms.", "Other"],
    firstNameLabel: "First Name",
    firstNamePlaceholder: "e.g., John",
    lastNameLabel: "Last Name",
    lastNamePlaceholder: "e.g., Doe",
    dateOfBirthLabel: "Date of Birth",
    nationalityLabel: "Nationality",
    nationalityPlaceholder: "e.g., American",
    addressStreetLabel: "Street Address",
    addressStreetPlaceholder: "e.g., 123 Main St",
    addressCityLabel: "City",
    addressCityPlaceholder: "e.g., New York",
    addressCountryLabel: "Country",
    addressCountryPlaceholder: "e.g., United States",
    addressPostalCodeLabel: "Postal Code",
    addressPostalCodePlaceholder: "e.g., 10001",
    emailLabel: "Email Address",
    emailPlaceholder: "e.g., john.doe@example.com",
    phoneLabel: "Phone Number",
    phonePlaceholder: "e.g., +1 (555) 123-4567",
    messengerLabel: "Preferred Messenger",
    messengerPlaceholder: "Select messenger",
    messengers: [
      "WhatsApp", "Telegram", "Signal", "WeChat", "Skype", "LinkedIn", "Facebook Messenger",
      "Viber", "Line", "Discord", "Slack", "Microsoft Teams", "Other"
    ],
    messengerContactLabel: "Messenger Contact",
    messengerContactPlaceholders: {
      WhatsApp: "e.g., +1 555 123 4567",
      Telegram: "e.g., @username",
      Signal: "e.g., +1 555 123 4567",
      WeChat: "e.g., WeChat ID",
      Skype: "e.g., live:username",
      LinkedIn: "e.g., linkedin.com/in/username",
      "Facebook Messenger": "e.g., facebook.com/username",
      Viber: "e.g., +1 555 123 4567",
      Line: "e.g., Line ID",
      Discord: "e.g., username#1234",
      Slack: "e.g., email or workspace URL",
      "Microsoft Teams": "e.g., email",
      Other: "e.g., ID or number",
      "": "Enter your messenger ID/number"
    },
    availabilitySection: "Your Availability",
    countryOfResidenceLabel: "Country of Residence",
    countryOfResidencePlaceholder: "e.g., Canada",
    timeZoneLabel: "Time Zone",
    timeZonePlaceholder: "e.g., EST (UTC-5)",
    timeZoneTooltip: "Your local time zone helps us coordinate with you.",
    openToRemoteLabel: "Are you open to working remotely?",
    willingToRelocateLabel: "Are you willing to relocate?",
    earliestStartDateLabel: "Earliest Possible Start Date",
    mobilitySection: "Mobility",
    hasDriversLicenseLabel: "Do you have a driver’s license?",
    ownsCarLabel: "Do you own a car?",
    qualificationsSection: "Your Qualifications",
    certificationsSection: "Your Certifications",
    uploadCertificationsLabel: "Upload Certifications (optional/Multifiles)",
    uploadCVLabel: "Upload CV/Resume",
    highestDegreeLabel: "Highest Degree Earned",
    highestDegreePlaceholder: "Select your highest degree",
    degrees: ["High School", "Associate", "Bachelor", "Master", "Doctorate", "Other"],
    fieldOfStudyLabel: "Field of Study",
    fieldOfStudyPlaceholder: "e.g., Computer Science",
    additionalCertificationsLabel: "Additional Certifications/Qualifications",
    additionalCertificationsPlaceholder: "e.g., AWS Certified, PMP",
    workExperienceSection: "Your Work Experience",
    currentPositionLabel: "Current/Last Job Position",
    currentPositionPlaceholder: "e.g., Software Engineer",
    currentCompanyLabel: "Current/Last Company",
    currentCompanyPlaceholder: "e.g., TechCorp",
    previousExperienceLabel: "Previous Employers & Work Experience",
    previousExperiencePlaceholder: "List your past roles and key responsibilities",
    yearsOfExperienceLabel: "Years of Work Experience",
    yearsOfExperiencePlaceholder: "Select your experience range",
    yearsOptions: ["0-1", "1-3", "3-5", "5-10", "10+"],
    lastCompanyStartDateLabel: "Last Company Start Date",
    lastCompanyEndDateLabel: "Last Company End Date",
    applyingForPositionLabel: "Which position are you applying for?",
    applyingForPositionPlaceholder: "Select a position",
    positions: [
      "Software Engineer",
      "Sales Assistant",
      "Telecommunications Specialist",
      "Social Marketing Professionals",
      "Search-Engine Marketing",
      "Business Analyst",
      "Front-End Developer",
      "Back-End Developer",
      "IT Project Manager",
      "System Administrator",
      "Other"
    ],
    expertiseRatingLabel: "How would you rate your expertise in this domain?",
    expertiseRatingPlaceholder: "Select your expertise level",
    expertiseOptions: [
      "1-3 (Entry-Level/Fresher)",
      "4-6 (Intermediate)",
      "7-9 (Professional)",
      "10 (Expert/100% Professional)"
    ],
    preferencesSection: "Your Preferences",
    expectedSalaryLabel: "Expected Salary",
    expectedSalaryPlaceholder: "e.g., 50000",
    salaryCurrencyLabel: "Currency",
    salaryCurrencyPlaceholder: "Select your currency",
    currencies: ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "INR", "Other"],
    paymentMethodLabel: "Preferred Payment Method",
    paymentMethodPlaceholder: "Select payment method",
    paymentMethods: ["Bank Transfer", "Cryptocurrency"],
    paymentSystemLabel: "Payment System",
    paymentSystemPlaceholder: "Select payment system",
    paymentSystems: ["SEPA", "ACH", "Faster Payments", "SWIFT", "NACH", "BACS", "BECS"],
    bankIBANLabel: "IBAN",
    bankIBANPlaceholder: "e.g., DE89370400440532013000",
    bankIBANTooltip: "Required for SEPA and SWIFT payments.",
    bankBICLabel: "BIC/SWIFT Code",
    bankBICPlaceholder: "e.g., DEUTDEFF",
    bankBICTooltip: "Required for SWIFT payments, optional for SEPA.",
    bankAccountNumberLabel: "Bank Account Number",
    bankAccountNumberPlaceholder: "e.g., 1234567890",
    bankRoutingNumberLabel: "Routing Number",
    bankRoutingNumberPlaceholder: "e.g., 021000021",
    bankSortCodeLabel: "Sort Code",
    bankSortCodePlaceholder: "e.g., 12-34-56",
    cryptoAddressLabel: "Cryptocurrency Address",
    cryptoAddressPlaceholder: "e.g., 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa (Bitcoin)",
    selfDevelopmentSection: "Your Growth Mindset",
    willingToTrainLabel: "Willing to invest time in training?",
    trainingHoursLabel: "How many hours per week can you dedicate to professional development and learning new skills?",
    trainingHoursPlaceholder: "Select hours per week",
    trainingHoursOptions: ["0-5", "5-10", "10-15", "15-20", "20+"],
    selfImprovementLabel: "How do you stay updated in your field?",
    selfImprovementPlaceholder: "e.g., Online courses, reading journals",
    characterSection: "About Your Work Style",
    colleagueDescriptionLabel: "How would colleagues describe you in three words?",
    colleagueDescriptionPlaceholder: "e.g., Reliable, Creative, Team-player",
    stressHandlingLabel: "How do you handle stress?",
    stressHandlingPlaceholder: "e.g., I prioritize tasks and take breaks",
    criticismResponseLabel: "How do you respond to criticism?",
    criticismResponsePlaceholder: "e.g., I listen and improve",
    motivationLabel: "What motivates you the most?",
    motivationPlaceholder: "Choose an option",
    motivations: ["Growth", "Impact", "Teamwork", "Compensation", "Innovation", "Other"],
    mistakeHandlingLabel: "How do you deal with mistakes in a team?",
    mistakeHandlingPlaceholder: "e.g., I own up and collaborate on solutions",
    legalSection: "Final Agreements",
    freelancerConsentLabel: "I confirm that I will work as an independent freelancer and take full responsibility for managing my own taxes, legal obligations, and compliance with all applicable regulations. I acknowledge that no employment relationship is created, and I am solely accountable for fulfilling any financial or contractual duties related to my freelance work.",
    privacyConsentLabel: "I have read and fully understood the Privacy Policy (Check our DATA PROTECTION). I provide my explicit consent for the collection, processing, and storage of my personal data in compliance with relevant data protection laws. I understand that my data may be used for verification purposes, security checks, and professional communications, and I retain the right to access, modify, or request deletion of my data as outlined in the policy.",
    privacyPolicyLink: "Privacy Policy",
    accuracyConsentLabel: "I certify that all the information provided is accurate, complete, and truthful to the best of my knowledge. I understand that providing false or misleading information may result in disqualification, termination of any agreements, or legal consequences. I accept full responsibility for keeping my details up to date and ensuring their validity.",
    previousButton: "Go Back",
    nextButton: "Continue",
    submitButton: "Submit Application",
    yesNoOptions: ["Yes", "No"]
  },
  de: {
    headerTitle: "Werden Sie Teil Unseres Teams",
    headerSubtitle: "Nehmen Sie sich Zeit für Ihre Bewerbung – wir freuen uns darauf, mehr über Sie zu erfahren!",
    steps: ["Persönliche & Kontaktinformationen", "Qualifikationen & Erfahrung", "Präferenzen, Einblicke & Rechtliches"],
    personalSection: "Erzählen Sie uns von sich",
    salutationLabel: "Anrede",
    salutationPlaceholder: "Auswählen",
    salutationOptions: ["Herr", "Frau", "Andere"],
    firstNameLabel: "Vorname",
    firstNamePlaceholder: "z.B., John",
    lastNameLabel: "Nachname",
    lastNamePlaceholder: "z.B., Doe",
    dateOfBirthLabel: "Geburtsdatum",
    nationalityLabel: "Nationalität",
    nationalityPlaceholder: "z.B., Deutsch",
    addressStreetLabel: "Straßenadresse",
    addressStreetPlaceholder: "z.B., Hauptstraße 123",
    addressCityLabel: "Stadt",
    addressCityPlaceholder: "z.B., Berlin",
    addressCountryLabel: "Land",
    addressCountryPlaceholder: "z.B., Deutschland",
    addressPostalCodeLabel: "Postleitzahl",
    addressPostalCodePlaceholder: "z.B., 10115",
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "z.B., john.doe@example.com",
    phoneLabel: "Telefonnummer",
    phonePlaceholder: "z.B., +49 30 12345678",
    messengerLabel: "Bevorzugter Messenger",
    messengerPlaceholder: "Messenger auswählen",
    messengers: [
      "WhatsApp", "Telegram", "Signal", "WeChat", "Skype", "LinkedIn", "Facebook Messenger",
      "Viber", "Line", "Discord", "Slack", "Microsoft Teams", "Andere"
    ],
    messengerContactLabel: "Messenger-Kontakt",
    messengerContactPlaceholders: {
      WhatsApp: "z.B., +49 30 12345678",
      Telegram: "z.B., @username",
      Signal: "z.B., +49 30 12345678",
      WeChat: "z.B., WeChat-ID",
      Skype: "z.B., live:username",
      LinkedIn: "z.B., linkedin.com/in/username",
      "Facebook Messenger": "z.B., facebook.com/username",
      Viber: "z.B., +49 30 12345678",
      Line: "z.B., Line-ID",
      Discord: "z.B., username#1234",
      Slack: "z.B., E-Mail oder Workspace-URL",
      "Microsoft Teams": "z.B., E-Mail",
      Other: "z.B., ID oder Nummer",
      "": "Geben Sie Ihre Messenger-ID/Nummer ein"
    },
    availabilitySection: "Ihre Verfügbarkeit",
    countryOfResidenceLabel: "Wohnsitzland",
    countryOfResidencePlaceholder: "z.B., Deutschland",
    timeZoneLabel: "Zeitzone",
    timeZonePlaceholder: "z.B., CET (UTC+1)",
    timeZoneTooltip: "Ihre lokale Zeitzone hilft uns, mit Ihnen zu koordinieren.",
    openToRemoteLabel: "Sind Sie offen für Remote-Arbeit?",
    willingToRelocateLabel: "Sind Sie bereit umzuziehen?",
    earliestStartDateLabel: "Frühestes mögliches Startdatum",
    mobilitySection: "Mobilität",
    hasDriversLicenseLabel: "Haben Sie einen Führerschein?",
    ownsCarLabel: "Besitzen Sie ein Auto?",
    qualificationsSection: "Ihre Qualifikationen",
    certificationsSection: "Ihre Zertifikate",
    uploadCertificationsLabel: "Zertifikate hochladen (optional/Mehrere Dateien)",
    uploadCVLabel: "Lebenslauf hochladen",
    highestDegreeLabel: "Höchster Abschluss",
    highestDegreePlaceholder: "Wählen Sie Ihren höchsten Abschluss",
    degrees: ["Abitur", "Berufsausbildung", "Bachelor", "Master", "Doktor", "Andere"],
    fieldOfStudyLabel: "Studienrichtung",
    fieldOfStudyPlaceholder: "z.B., Informatik",
    additionalCertificationsLabel: "Zusätzliche Zertifikate/Qualifikationen",
    additionalCertificationsPlaceholder: "z.B., AWS-Zertifiziert, PMP",
    workExperienceSection: "Ihre Berufserfahrung",
    currentPositionLabel: "Aktuelle/Letzte Position",
    currentPositionPlaceholder: "z.B., Software-Ingenieur",
    currentCompanyLabel: "Aktuelles/Letztes Unternehmen",
    currentCompanyPlaceholder: "z.B., TechCorp",
    previousExperienceLabel: "Frühere Arbeitgeber & Berufserfahrung",
    previousExperiencePlaceholder: "Listen Sie Ihre früheren Rollen und Hauptverantwortlichkeiten auf",
    yearsOfExperienceLabel: "Jahre Berufserfahrung",
    yearsOfExperiencePlaceholder: "Wählen Sie Ihren Erfahrungsbereich",
    yearsOptions: ["0-1", "1-3", "3-5", "5-10", "10+"],
    lastCompanyStartDateLabel: "Startdatum letztes Unternehmen",
    lastCompanyEndDateLabel: "Enddatum letztes Unternehmen",
    applyingForPositionLabel: "Für welche Position bewerben Sie sich?",
    applyingForPositionPlaceholder: "Position auswählen",
    positions: [
      "Software-Ingenieur",
      "Verkaufsassistent",
      "Telekommunikationsspezialist",
      "Social-Media-Marketing-Profis",
      "Suchmaschinen-Marketing",
      "Business-Analyst",
      "Front-End-Entwickler",
      "Back-End-Entwickler",
      "IT-Projektmanager",
      "Systemadministrator",
      "Andere"
    ],
    expertiseRatingLabel: "Wie bewerten Sie Ihre Expertise in diesem Bereich?",
    expertiseRatingPlaceholder: "Wählen Sie Ihr Expertise-Level",
    expertiseOptions: [
      "1-3 (Einstiegslevel/Neuling)",
      "4-6 (Fortgeschritten)",
      "7-9 (Professionell)",
      "10 (Experte/100% Professionell)"
    ],
    preferencesSection: "Ihre Präferenzen",
    expectedSalaryLabel: "Gewünschtes Gehalt",
    expectedSalaryPlaceholder: "z.B., 50000",
    salaryCurrencyLabel: "Währung",
    salaryCurrencyPlaceholder: "Wählen Sie Ihre Währung",
    currencies: ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "INR", "Andere"],
    paymentMethodLabel: "Bevorzugte Zahlungsmethode",
    paymentMethodPlaceholder: "Zahlungsmethode auswählen",
    paymentMethods: ["Banküberweisung", "Kryptowährung"],
    paymentSystemLabel: "Zahlungssystem",
    paymentSystemPlaceholder: "Zahlungssystem auswählen",
    paymentSystems: ["SEPA", "ACH", "Faster Payments", "SWIFT", "NACH", "BACS", "BECS"],
    bankIBANLabel: "IBAN",
    bankIBANPlaceholder: "z.B., DE89370400440532013000",
    bankIBANTooltip: "Erforderlich für SEPA- und SWIFT-Zahlungen.",
    bankBICLabel: "BIC/SWIFT-Code",
    bankBICPlaceholder: "z.B., DEUTDEFF",
    bankBICTooltip: "Erforderlich für SWIFT-Zahlungen, optional für SEPA.",
    bankAccountNumberLabel: "Kontonummer",
    bankAccountNumberPlaceholder: "z.B., 1234567890",
    bankRoutingNumberLabel: "Routing-Nummer",
    bankRoutingNumberPlaceholder: "z.B., 021000021",
    bankSortCodeLabel: "Sortiercode",
    bankSortCodePlaceholder: "z.B., 12-34-56",
    cryptoAddressLabel: "Kryptowährungsadresse",
    cryptoAddressPlaceholder: "z.B., 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa (Bitcoin)",
    selfDevelopmentSection: "Ihr Wachstumsdenken",
    willingToTrainLabel: "Bereit, Zeit in Schulungen zu investieren?",
    trainingHoursLabel: "Wie viele Stunden pro Woche können Sie für berufliche Weiterentwicklung und das Erlernen neuer Fähigkeiten aufwenden?",
    trainingHoursPlaceholder: "Stunden pro Woche auswählen",
    trainingHoursOptions: ["0-5", "5-10", "10-15", "15-20", "20+"],
    selfImprovementLabel: "Wie halten Sie sich in Ihrem Bereich auf dem Laufenden?",
    selfImprovementPlaceholder: "z.B., Online-Kurse, Fachzeitschriften lesen",
    characterSection: "Über Ihren Arbeitsstil",
    colleagueDescriptionLabel: "Wie würden Kollegen Sie in drei Worten beschreiben?",
    colleagueDescriptionPlaceholder: "z.B., Zuverlässig, Kreativ, Teamspieler",
    stressHandlingLabel: "Wie gehen Sie mit Stress um?",
    stressHandlingPlaceholder: "z.B., Ich priorisiere Aufgaben und mache Pausen",
    criticismResponseLabel: "Wie reagieren Sie auf Kritik?",
    criticismResponsePlaceholder: "z.B., Ich höre zu und verbessere mich",
    motivationLabel: "Was motiviert Sie am meisten?",
    motivationPlaceholder: "Wählen Sie eine Option",
    motivations: ["Wachstum", "Einfluss", "Teamarbeit", "Vergütung", "Innovation", "Andere"],
    mistakeHandlingLabel: "Wie gehen Sie mit Fehlern im Team um?",
    mistakeHandlingPlaceholder: "z.B., Ich stehe dazu und arbeite an Lösungen",
    legalSection: "Abschließende Vereinbarungen",
    freelancerConsentLabel: "Ich bestätige, dass ich als unabhängiger Freelancer arbeite und die volle Verantwortung für die Verwaltung meiner Steuern, rechtlichen Verpflichtungen und die Einhaltung aller geltenden Vorschriften übernehme. Ich erkenne an, dass kein Arbeitsverhältnis entsteht und ich allein für die Erfüllung finanzieller oder vertraglicher Pflichten im Zusammenhang mit meiner freiberuflichen Tätigkeit verantwortlich bin.",
    privacyConsentLabel: "Ich habe die Datenschutzrichtlinie (siehe DATENSCHUTZ) gelesen und vollständig verstanden. Ich gebe meine ausdrückliche Zustimmung zur Erhebung, Verarbeitung und Speicherung meiner persönlichen Daten in Übereinstimmung mit den geltenden Datenschutzgesetzen. Ich verstehe, dass meine Daten für Verifizierungszwecke, Sicherheitsprüfungen und berufliche Kommunikation verwendet werden können und ich das Recht behalte, meine Daten wie in der Richtlinie beschrieben einzusehen, zu ändern oder deren Löschung zu verlangen.",
    privacyPolicyLink: "Datenschutzrichtlinie",
    accuracyConsentLabel: "Ich bestätige, dass alle bereitgestellten Informationen nach bestem Wissen und Gewissen korrekt, vollständig und wahrheitsgemäß sind. Ich verstehe, dass die Angabe falscher oder irreführender Informationen zur Disqualifikation, Kündigung von Vereinbarungen oder rechtlichen Konsequenzen führen kann. Ich übernehme die volle Verantwortung dafür, meine Angaben aktuell zu halten und deren Gültigkeit sicherzustellen.",
    previousButton: "Zurück",
    nextButton: "Fortfahren",
    submitButton: "Bewerbung Absenden",
    yesNoOptions: ["Ja", "Nein"]
  },
  es: {
    headerTitle: "Únete a Nuestro Equipo",
    headerSubtitle: "Tómate tu tiempo para solicitar – ¡estamos emocionados de conocerte!",
    steps: ["Detalles Personales y de Contacto", "Cualificaciones y Experiencia", "Preferencias, Perspectivas y Legal"],
    personalSection: "Cuéntanos Sobre Ti",
    salutationLabel: "Saludo",
    salutationPlaceholder: "Seleccionar",
    salutationOptions: ["Sr.", "Sra.", "Otro"],
    firstNameLabel: "Nombre",
    firstNamePlaceholder: "p.ej., Juan",
    lastNameLabel: "Apellido",
    lastNamePlaceholder: "p.ej., Pérez",
    dateOfBirthLabel: "Fecha de Nacimiento",
    nationalityLabel: "Nacionalidad",
    nationalityPlaceholder: "p.ej., Española",
    addressStreetLabel: "Dirección de la Calle",
    addressStreetPlaceholder: "p.ej., Calle Mayor 123",
    addressCityLabel: "Ciudad",
    addressCityPlaceholder: "p.ej., Madrid",
    addressCountryLabel: "País",
    addressCountryPlaceholder: "p.ej., España",
    addressPostalCodeLabel: "Código Postal",
    addressPostalCodePlaceholder: "p.ej., 28001",
    emailLabel: "Dirección de Correo Electrónico",
    emailPlaceholder: "p.ej., juan.perez@example.com",
    phoneLabel: "Número de Teléfono",
    phonePlaceholder: "p.ej., +34 912 345 678",
    messengerLabel: "Mensajero Preferido",
    messengerPlaceholder: "Seleccionar mensajero",
    messengers: [
      "WhatsApp", "Telegram", "Signal", "WeChat", "Skype", "LinkedIn", "Facebook Messenger",
      "Viber", "Line", "Discord", "Slack", "Microsoft Teams", "Otro"
    ],
    messengerContactLabel: "Contacto de Mensajero",
    messengerContactPlaceholders: {
      WhatsApp: "p.ej., +34 912 345 678",
      Telegram: "p.ej., @username",
      Signal: "p.ej., +34 912 345 678",
      WeChat: "p.ej., ID de WeChat",
      Skype: "p.ej., live:username",
      LinkedIn: "p.ej., linkedin.com/in/username",
      "Facebook Messenger": "p.ej., facebook.com/username",
      Viber: "p.ej., +34 912 345 678",
      Line: "p.ej., ID de Line",
      Discord: "p.ej., username#1234",
      Slack: "p.ej., correo o URL del espacio de trabajo",
      "Microsoft Teams": "p.ej., correo",
      Other: "p.ej., ID o número",
      "": "Ingresa tu ID/número de mensajero"
    },
    availabilitySection: "Tu Disponibilidad",
    countryOfResidenceLabel: "País de Residencia",
    countryOfResidencePlaceholder: "p.ej., España",
    timeZoneLabel: "Zona Horaria",
    timeZonePlaceholder: "p.ej., CET (UTC+1)",
    timeZoneTooltip: "Tu zona horaria local nos ayuda a coordinar contigo.",
    openToRemoteLabel: "¿Estás abierto a trabajar remotamente?",
    willingToRelocateLabel: "¿Estás dispuesto a reubicarte?",
    earliestStartDateLabel: "Fecha de Inicio Más Temprana Posible",
    mobilitySection: "Movilidad",
    hasDriversLicenseLabel: "¿Tienes licencia de conducir?",
    ownsCarLabel: "¿Posees un coche?",
    qualificationsSection: "Tus Cualificaciones",
    certificationsSection: "Tus Certificados",
    uploadCertificationsLabel: "Subir Certificados (opcional/Múltiples archivos)",
    uploadCVLabel: "Subir CV/Currículum",
    highestDegreeLabel: "Grado Más Alto Obtenido",
    highestDegreePlaceholder: "Selecciona tu grado más alto",
    degrees: ["Bachillerato", "Técnico", "Licenciatura", "Máster", "Doctorado", "Otro"],
    fieldOfStudyLabel: "Campo de Estudio",
    fieldOfStudyPlaceholder: "p.ej., Informática",
    additionalCertificationsLabel: "Certificaciones/Qualificaciones Adicionales",
    additionalCertificationsPlaceholder: "p.ej., Certificado AWS, PMP",
    workExperienceSection: "Tu Experiencia Laboral",
    currentPositionLabel: "Puesto Actual/Último",
    currentPositionPlaceholder: "p.ej., Ingeniero de Software",
    currentCompanyLabel: "Empresa Actual/Última",
    currentCompanyPlaceholder: "p.ej., TechCorp",
    previousExperienceLabel: "Empleadores Anteriores y Experiencia Laboral",
    previousExperiencePlaceholder: "Lista tus roles anteriores y responsabilidades clave",
    yearsOfExperienceLabel: "Años de Experiencia Laboral",
    yearsOfExperiencePlaceholder: "Selecciona tu rango de experiencia",
    yearsOptions: ["0-1", "1-3", "3-5", "5-10", "10+"],
    lastCompanyStartDateLabel: "Fecha de Inicio en la Última Empresa",
    lastCompanyEndDateLabel: "Fecha de Fin en la Última Empresa",
    applyingForPositionLabel: "¿Para qué posición estás solicitando?",
    applyingForPositionPlaceholder: "Selecciona una posición",
    positions: [
      "Ingeniero de Software",
      "Asistente de Ventas",
      "Especialista en Telecomunicaciones",
      "Profesionales de Marketing Social",
      "Marketing en Motores de Búsqueda",
      "Analista de Negocios",
      "Desarrollador Front-End",
      "Desarrollador Back-End",
      "Gestor de Proyectos de TI",
      "Administrador de Sistemas",
      "Otro"
    ],
    expertiseRatingLabel: "¿Cómo calificarías tu experiencia en este dominio?",
    expertiseRatingPlaceholder: "Selecciona tu nivel de experiencia",
    expertiseOptions: [
      "1-3 (Nivel Inicial/Principiante)",
      "4-6 (Intermedio)",
      "7-9 (Profesional)",
      "10 (Experto/100% Profesional)"
    ],
    preferencesSection: "Tus Preferencias",
    expectedSalaryLabel: "Salario Esperado",
    expectedSalaryPlaceholder: "p.ej., 50000",
    salaryCurrencyLabel: "Moneda",
    salaryCurrencyPlaceholder: "Selecciona tu moneda",
    currencies: ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "INR", "Otro"],
    paymentMethodLabel: "Método de Pago Preferido",
    paymentMethodPlaceholder: "Selecciona método de pago",
    paymentMethods: ["Transferencia Bancaria", "Criptomoneda"],
    paymentSystemLabel: "Sistema de Pago",
    paymentSystemPlaceholder: "Selecciona sistema de pago",
    paymentSystems: ["SEPA", "ACH", "Faster Payments", "SWIFT", "NACH", "BACS", "BECS"],
    bankIBANLabel: "IBAN",
    bankIBANPlaceholder: "p.ej., ES9121000418450200051332",
    bankIBANTooltip: "Requerido para pagos SEPA y SWIFT.",
    bankBICLabel: "Código BIC/SWIFT",
    bankBICPlaceholder: "p.ej., CAIXESBBXXX",
    bankBICTooltip: "Requerido para pagos SWIFT, opcional para SEPA.",
    bankAccountNumberLabel: "Número de Cuenta Bancaria",
    bankAccountNumberPlaceholder: "p.ej., 1234567890",
    bankRoutingNumberLabel: "Número de Ruta",
    bankRoutingNumberPlaceholder: "p.ej., 021000021",
    bankSortCodeLabel: "Código de Clasificación",
    bankSortCodePlaceholder: "p.ej., 12-34-56",
    cryptoAddressLabel: "Dirección de Criptomoneda",
    cryptoAddressPlaceholder: "p.ej., 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa (Bitcoin)",
    selfDevelopmentSection: "Tu Mentalidad de Crecimiento",
    willingToTrainLabel: "¿Estás dispuesto a invertir tiempo en formación?",
    trainingHoursLabel: "¿Cuántas horas por semana puedes dedicar al desarrollo profesional y aprendizaje de nuevas habilidades?",
    trainingHoursPlaceholder: "Selecciona horas por semana",
    trainingHoursOptions: ["0-5", "5-10", "10-15", "15-20", "20+"],
    selfImprovementLabel: "¿Cómo te mantienes actualizado en tu campo?",
    selfImprovementPlaceholder: "p.ej., Cursos en línea, lectura de revistas",
    characterSection: "Sobre Tu Estilo de Trabajo",
    colleagueDescriptionLabel: "¿Cómo te describirían tus colegas en tres palabras?",
    colleagueDescriptionPlaceholder: "p.ej., Confiable, Creativo, Compañero",
    stressHandlingLabel: "¿Cómo manejas el estrés?",
    stressHandlingPlaceholder: "p.ej., Priorizo tareas y tomo descansos",
    criticismResponseLabel: "¿Cómo respondes a las críticas?",
    criticismResponsePlaceholder: "p.ej., Escucho y mejoro",
    motivationLabel: "¿Qué te motiva más?",
    motivationPlaceholder: "Elige una opción",
    motivations: ["Crecimiento", "Impacto", "Trabajo en Equipo", "Compensación", "Innovación", "Otro"],
    mistakeHandlingLabel: "¿Cómo manejas los errores en un equipo?",
    mistakeHandlingPlaceholder: "p.ej., Asumo responsabilidad y colaboro en soluciones",
    legalSection: "Acuerdos Finales",
    freelancerConsentLabel: "Confirmo que trabajaré como freelancer independiente y asumo toda la responsabilidad de gestionar mis propios impuestos, obligaciones legales y el cumplimiento de todas las regulaciones aplicables. Reconozco que no se crea ninguna relación laboral y soy el único responsable de cumplir con cualquier deber financiero o contractual relacionado con mi trabajo freelance.",
    privacyConsentLabel: "He leído y entendido completamente la Política de Privacidad (Consulta nuestra PROTECCIÓN DE DATOS). Doy mi consentimiento explícito para la recolección, procesamiento y almacenamiento de mis datos personales de acuerdo con las leyes de protección de datos aplicables. Entiendo que mis datos pueden usarse para fines de verificación, controles de seguridad y comunicaciones profesionales, y conservo el derecho de acceder, modificar o solicitar la eliminación de mis datos como se describe en la política.",
    privacyPolicyLink: "Política de Privacidad",
    accuracyConsentLabel: "Certifico que toda la información proporcionada es precisa, completa y veraz según mi mejor conocimiento. Entiendo que proporcionar información falsa o engañosa puede resultar en descalificación, terminación de cualquier acuerdo o consecuencias legales. Acepto toda la responsabilidad de mantener mis datos actualizados y garantizar su validez.",
    previousButton: "Volver",
    nextButton: "Continuar",
    submitButton: "Enviar Solicitud",
    yesNoOptions: ["Sí", "No"]
  },
  fr: {
    headerTitle: "Rejoignez Notre Équipe",
    headerSubtitle: "Prenez votre temps pour postuler – nous sommes impatients d’en savoir plus sur vous !",
    steps: ["Détails Personnels et de Contact", "Qualifications et Expérience", "Préférences, Perspectives et Légal"],
    personalSection: "Parlez-nous de Vous",
    salutationLabel: "Salutation",
    salutationPlaceholder: "Sélectionner",
    salutationOptions: ["M.", "Mme", "Autre"],
    firstNameLabel: "Prénom",
    firstNamePlaceholder: "ex., Jean",
    lastNameLabel: "Nom de Famille",
    lastNamePlaceholder: "ex., Dupont",
    dateOfBirthLabel: "Date de Naissance",
    nationalityLabel: "Nationalité",
    nationalityPlaceholder: "ex., Française",
    addressStreetLabel: "Adresse de la Rue",
    addressStreetPlaceholder: "ex., 123 Rue Principale",
    addressCityLabel: "Ville",
    addressCityPlaceholder: "ex., Paris",
    addressCountryLabel: "Pays",
    addressCountryPlaceholder: "ex., France",
    addressPostalCodeLabel: "Code Postal",
    addressPostalCodePlaceholder: "ex., 75001",
    emailLabel: "Adresse Email",
    emailPlaceholder: "ex., jean.dupont@example.com",
    phoneLabel: "Numéro de Téléphone",
    phonePlaceholder: "ex., +33 1 23 45 67 89",
    messengerLabel: "Messagerie Préférée",
    messengerPlaceholder: "Sélectionner la messagerie",
    messengers: [
      "WhatsApp", "Telegram", "Signal", "WeChat", "Skype", "LinkedIn", "Facebook Messenger",
      "Viber", "Line", "Discord", "Slack", "Microsoft Teams", "Autre"
    ],
    messengerContactLabel: "Contact de Messagerie",
    messengerContactPlaceholders: {
      WhatsApp: "ex., +33 1 23 45 67 89",
      Telegram: "ex., @username",
      Signal: "ex., +33 1 23 45 67 89",
      WeChat: "ex., ID WeChat",
      Skype: "ex., live:username",
      LinkedIn: "ex., linkedin.com/in/username",
      "Facebook Messenger": "ex., facebook.com/username",
      Viber: "ex., +33 1 23 45 67 89",
      Line: "ex., ID Line",
      Discord: "ex., username#1234",
      Slack: "ex., email ou URL de l’espace de travail",
      "Microsoft Teams": "ex., email",
      Other: "ex., ID ou numéro",
      "": "Entrez votre ID/numéro de messagerie"
    },
    availabilitySection: "Votre Disponibilité",
    countryOfResidenceLabel: "Pays de Résidence",
    countryOfResidencePlaceholder: "ex., France",
    timeZoneLabel: "Fuseau Horaire",
    timeZonePlaceholder: "ex., CET (UTC+1)",
    timeZoneTooltip: "Votre fuseau horaire local nous aide à coordonner avec vous.",
    openToRemoteLabel: "Êtes-vous ouvert au travail à distance ?",
    willingToRelocateLabel: "Êtes-vous prêt à déménager ?",
    earliestStartDateLabel: "Date de Début la Plus Précoce Possible",
    mobilitySection: "Mobilité",
    hasDriversLicenseLabel: "Avez-vous un permis de conduire ?",
    ownsCarLabel: "Possédez-vous une voiture ?",
    qualificationsSection: "Vos Qualifications",
    certificationsSection: "Vos Certificats",
    uploadCertificationsLabel: "Télécharger des Certificats (optionnel/Plusieurs fichiers)",
    uploadCVLabel: "Télécharger CV",
    highestDegreeLabel: "Diplôme le Plus Élevé Obtenu",
    highestDegreePlaceholder: "Sélectionnez votre diplôme le plus élevé",
    degrees: ["Baccalauréat", "BTS/DUT", "Licence", "Master", "Doctorat", "Autre"],
    fieldOfStudyLabel: "Domaine d’Études",
    fieldOfStudyPlaceholder: "ex., Informatique",
    additionalCertificationsLabel: "Certifications/Qualifications Supplémentaires",
    additionalCertificationsPlaceholder: "ex., Certifié AWS, PMP",
    workExperienceSection: "Votre Expérience Professionnelle",
    currentPositionLabel: "Poste Actuel/Dernier",
    currentPositionPlaceholder: "ex., Ingénieur Logiciel",
    currentCompanyLabel: "Entreprise Actuelle/Dernière",
    currentCompanyPlaceholder: "ex., TechCorp",
    previousExperienceLabel: "Employeurs Précédents & Expérience Professionnelle",
    previousExperiencePlaceholder: "Listez vos rôles précédents et responsabilités clés",
    yearsOfExperienceLabel: "Années d’Expérience Professionnelle",
    yearsOfExperiencePlaceholder: "Sélectionnez votre plage d’expérience",
    yearsOptions: ["0-1", "1-3", "3-5", "5-10", "10+"],
    lastCompanyStartDateLabel: "Date de Début Dernière Entreprise",
    lastCompanyEndDateLabel: "Date de Fin Dernière Entreprise",
    applyingForPositionLabel: "Pour quel poste postulez-vous ?",
    applyingForPositionPlaceholder: "Sélectionnez un poste",
    positions: [
      "Ingénieur Logiciel",
      "Assistant Commercial",
      "Spécialiste en Télécommunications",
      "Professionnels du Marketing Social",
      "Marketing sur Moteurs de Recherche",
      "Analyste d’Affaires",
      "Développeur Front-End",
      "Développeur Back-End",
      "Gestionnaire de Projets IT",
      "Administrateur Système",
      "Autre"
    ],
    expertiseRatingLabel: "Comment évaluez-vous votre expertise dans ce domaine ?",
    expertiseRatingPlaceholder: "Sélectionnez votre niveau d’expertise",
    expertiseOptions: [
      "1-3 (Débutant/Nouveau)",
      "4-6 (Intermédiaire)",
      "7-9 (Professionnel)",
      "10 (Expert/100% Professionnel)"
    ],
    preferencesSection: "Vos Préférences",
    expectedSalaryLabel: "Salaire Attendu",
    expectedSalaryPlaceholder: "ex., 50000",
    salaryCurrencyLabel: "Devise",
    salaryCurrencyPlaceholder: "Sélectionnez votre devise",
    currencies: ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "INR", "Autre"],
    paymentMethodLabel: "Méthode de Paiement Préférée",
    paymentMethodPlaceholder: "Sélectionnez une méthode de paiement",
    paymentMethods: ["Virement Bancaire", "Cryptomonnaie"],
    paymentSystemLabel: "Système de Paiement",
    paymentSystemPlaceholder: "Sélectionnez un système de paiement",
    paymentSystems: ["SEPA", "ACH", "Faster Payments", "SWIFT", "NACH", "BACS", "BECS"],
    bankIBANLabel: "IBAN",
    bankIBANPlaceholder: "ex., FR7612345987654321098765432",
    bankIBANTooltip: "Requis pour les paiements SEPA et SWIFT.",
    bankBICLabel: "Code BIC/SWIFT",
    bankBICPlaceholder: "ex., BNPAFRPP",
    bankBICTooltip: "Requis pour les paiements SWIFT, facultatif pour SEPA.",
    bankAccountNumberLabel: "Numéro de Compte Bancaire",
    bankAccountNumberPlaceholder: "ex., 1234567890",
    bankRoutingNumberLabel: "Numéro de Routage",
    bankRoutingNumberPlaceholder: "ex., 021000021",
    bankSortCodeLabel: "Code de Tri",
    bankSortCodePlaceholder: "ex., 12-34-56",
    cryptoAddressLabel: "Adresse de Cryptomonnaie",
    cryptoAddressPlaceholder: "ex., 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa (Bitcoin)",
    selfDevelopmentSection: "Votre Esprit de Croissance",
    willingToTrainLabel: "Êtes-vous prêt à investir du temps dans la formation ?",
    trainingHoursLabel: "Combien d’heures par semaine pouvez-vous consacrer au développement professionnel et à l’apprentissage de nouvelles compétences ?",
    trainingHoursPlaceholder: "Sélectionnez les heures par semaine",
    trainingHoursOptions: ["0-5", "5-10", "10-15", "15-20", "20+"],
    selfImprovementLabel: "Comment restez-vous à jour dans votre domaine ?",
    selfImprovementPlaceholder: "ex., Cours en ligne, lecture de revues",
    characterSection: "À Propos de Votre Style de Travail",
    colleagueDescriptionLabel: "Comment vos collègues vous décriraient-ils en trois mots ?",
    colleagueDescriptionPlaceholder: "ex., Fiable, Créatif, Équipier",
    stressHandlingLabel: "Comment gérez-vous le stress ?",
    stressHandlingPlaceholder: "ex., Je priorise les tâches et prends des pauses",
    criticismResponseLabel: "Comment répondez-vous aux critiques ?",
    criticismResponsePlaceholder: "ex., J’écoute et m’améliore",
    motivationLabel: "Qu’est-ce qui vous motive le plus ?",
    motivationPlaceholder: "Choisissez une option",
    motivations: ["Croissance", "Impact", "Travail d’Équipe", "Rémunération", "Innovation", "Autre"],
    mistakeHandlingLabel: "Comment gérez-vous les erreurs dans une équipe ?",
    mistakeHandlingPlaceholder: "ex., Je les assume et collabore sur des solutions",
    legalSection: "Accords Finaux",
    freelancerConsentLabel: "Je confirme que je travaillerai en tant que travailleur indépendant et assume l’entière responsabilité de gérer mes propres impôts, obligations légales et le respect de toutes les réglementations applicables. Je reconnais qu’aucune relation d’emploi n’est créée et que je suis seul responsable de l’exécution de toutes les obligations financières ou contractuelles liées à mon travail freelance.",
    privacyConsentLabel: "J’ai lu et compris pleinement la Politique de Confidentialité (Consultez notre PROTECTION DES DONNÉES). Je donne mon consentement explicite à la collecte, au traitement et au stockage de mes données personnelles conformément aux lois applicables en matière de protection des données. Je comprends que mes données peuvent être utilisées à des fins de vérification, de contrôles de sécurité et de communications professionnelles, et je conserve le droit d’accéder, de modifier ou de demander la suppression de mes données comme décrit dans la politique.",
    privacyPolicyLink: "Politique de Confidentialité",
    accuracyConsentLabel: "Je certifie que toutes les informations fournies sont exactes, complètes et véridiques au meilleur de ma connaissance. Je comprends que fournir des informations fausses ou trompeuses peut entraîner une disqualification, la résiliation de tout accord ou des conséquences juridiques. J’accepte l’entière responsabilité de maintenir mes informations à jour et d’en garantir la validité.",
    previousButton: "Retour",
    nextButton: "Continuer",
    submitButton: "Soumettre la Candidature",
    yesNoOptions: ["Oui", "Non"]
  },
  it: {
    headerTitle: "Unisciti al Nostro Team",
    headerSubtitle: "Prenditi il tuo tempo per candidarti – siamo entusiasti di conoscerti!",
    steps: ["Dettagli Personali e di Contatto", "Qualifiche ed Esperienza", "Preferenze, Approfondimenti e Legale"],
    personalSection: "Parlaci di Te",
    salutationLabel: "Saluto",
    salutationPlaceholder: "Seleziona",
    salutationOptions: ["Sig.", "Sig.ra", "Altro"],
    firstNameLabel: "Nome",
    firstNamePlaceholder: "es., Giovanni",
    lastNameLabel: "Cognome",
    lastNamePlaceholder: "es., Rossi",
    dateOfBirthLabel: "Data di Nascita",
    nationalityLabel: "Nazionalità",
    nationalityPlaceholder: "es., Italiana",
    addressStreetLabel: "Indirizzo Stradale",
    addressStreetPlaceholder: "es., Via Roma 123",
    addressCityLabel: "Città",
    addressCityPlaceholder: "es., Milano",
    addressCountryLabel: "Paese",
    addressCountryPlaceholder: "es., Italia",
    addressPostalCodeLabel: "Codice Postale",
    addressPostalCodePlaceholder: "es., 20121",
    emailLabel: "Indirizzo Email",
    emailPlaceholder: "es., giovanni.rossi@example.com",
    phoneLabel: "Numero di Telefono",
    phonePlaceholder: "es., +39 02 1234 5678",
    messengerLabel: "Messaggero Preferito",
    messengerPlaceholder: "Seleziona il messaggero",
    messengers: [
      "WhatsApp", "Telegram", "Signal", "WeChat", "Skype", "LinkedIn", "Facebook Messenger",
      "Viber", "Line", "Discord", "Slack", "Microsoft Teams", "Altro"
    ],
    messengerContactLabel: "Contatto Messaggero",
    messengerContactPlaceholders: {
      WhatsApp: "es., +39 02 1234 5678",
      Telegram: "es., @username",
      Signal: "es., +39 02 1234 5678",
      WeChat: "es., ID WeChat",
      Skype: "es., live:username",
      LinkedIn: "es., linkedin.com/in/username",
      "Facebook Messenger": "es., facebook.com/username",
      Viber: "es., +39 02 1234 5678",
      Line: "es., ID Line",
      Discord: "es., username#1234",
      Slack: "es., email o URL dello spazio di lavoro",
      "Microsoft Teams": "es., email",
      Other: "es., ID o numero",
      "": "Inserisci il tuo ID/numero di messaggero"
    },
    availabilitySection: "La Tua Disponibilità",
    countryOfResidenceLabel: "Paese di Residenza",
    countryOfResidencePlaceholder: "es., Italia",
    timeZoneLabel: "Fuso Orario",
    timeZonePlaceholder: "es., CET (UTC+1)",
    timeZoneTooltip: "Il tuo fuso orario locale ci aiuta a coordinarci con te.",
    openToRemoteLabel: "Sei aperto al lavoro remoto?",
    willingToRelocateLabel: "Sei disposto a trasferirti?",
    earliestStartDateLabel: "Data di Inizio Più Precoce Possibile",
    mobilitySection: "Mobilità",
    hasDriversLicenseLabel: "Hai la patente di guida?",
    ownsCarLabel: "Possiedi un’auto?",
    qualificationsSection: "Le Tue Qualifiche",
    certificationsSection: "I Tuoi Certificati",
    uploadCertificationsLabel: "Carica Certificati (opzionale/File multipli)",
    uploadCVLabel: "Carica CV",
    highestDegreeLabel: "Titolo di Studio Più Alto",
    highestDegreePlaceholder: "Seleziona il tuo titolo di studio più alto",
    degrees: ["Diploma", "Laurea Triennale", "Laurea Magistrale", "Dottorato", "Altro"],
    fieldOfStudyLabel: "Campo di Studio",
    fieldOfStudyPlaceholder: "es., Informatica",
    additionalCertificationsLabel: "Certificazioni/Qualifiche Aggiuntive",
    additionalCertificationsPlaceholder: "es., Certificato AWS, PMP",
    workExperienceSection: "La Tua Esperienza Lavorativa",
    currentPositionLabel: "Posizione Attuale/Ultima",
    currentPositionPlaceholder: "es., Ingegnere del Software",
    currentCompanyLabel: "Azienda Attuale/Ultima",
    currentCompanyPlaceholder: "es., TechCorp",
    previousExperienceLabel: "Datori di Lavoro Precedenti ed Esperienza Lavorativa",
    previousExperiencePlaceholder: "Elenca i tuoi ruoli precedenti e le responsabilità chiave",
    yearsOfExperienceLabel: "Anni di Esperienza Lavorativa",
    yearsOfExperiencePlaceholder: "Seleziona la tua fascia di esperienza",
    yearsOptions: ["0-1", "1-3", "3-5", "5-10", "10+"],
    lastCompanyStartDateLabel: "Data di Inizio Ultima Azienda",
    lastCompanyEndDateLabel: "Data di Fine Ultima Azienda",
    applyingForPositionLabel: "Per quale posizione ti stai candidando?",
    applyingForPositionPlaceholder: "Seleziona una posizione",
    positions: [
      "Ingegnere del Software",
      "Assistente Vendite",
      "Specialista in Telecomunicazioni",
      "Professionisti del Marketing Sociale",
      "Marketing sui Motori di Ricerca",
      "Analista Aziendale",
      "Sviluppatore Front-End",
      "Sviluppatore Back-End",
      "Gestore Progetti IT",
      "Amministratore di Sistema",
      "Altro"
    ],
    expertiseRatingLabel: "Come valuti la tua competenza in questo ambito?",
    expertiseRatingPlaceholder: "Seleziona il tuo livello di competenza",
    expertiseOptions: [
      "1-3 (Livello Base/Principiante)",
      "4-6 (Intermedio)",
      "7-9 (Professionista)",
      "10 (Esperto/100% Professionista)"
    ],
    preferencesSection: "Le Tue Preferenze",
    expectedSalaryLabel: "Salario Atteso",
    expectedSalaryPlaceholder: "es., 50000",
    salaryCurrencyLabel: "Valuta",
    salaryCurrencyPlaceholder: "Seleziona la tua valuta",
    currencies: ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "INR", "Altro"],
    paymentMethodLabel: "Metodo di Pagamento Preferito",
    paymentMethodPlaceholder: "Seleziona il metodo di pagamento",
    paymentMethods: ["Bonifico Bancario", "Criptovaluta"],
    paymentSystemLabel: "Sistema di Pagamento",
    paymentSystemPlaceholder: "Seleziona il sistema di pagamento",
    paymentSystems: ["SEPA", "ACH", "Faster Payments", "SWIFT", "NACH", "BACS", "BECS"],
    bankIBANLabel: "IBAN",
    bankIBANPlaceholder: "es., IT60X0542811101000000123456",
    bankIBANTooltip: "Richiesto per pagamenti SEPA e SWIFT.",
    bankBICLabel: "Codice BIC/SWIFT",
    bankBICPlaceholder: "es., UNCRITMM",
    bankBICTooltip: "Richiesto per pagamenti SWIFT, opzionale per SEPA.",
    bankAccountNumberLabel: "Numero di Conto Bancario",
    bankAccountNumberPlaceholder: "es., 1234567890",
    bankRoutingNumberLabel: "Numero di Instradamento",
    bankRoutingNumberPlaceholder: "es., 021000021",
    bankSortCodeLabel: "Codice di Ordinamento",
    bankSortCodePlaceholder: "es., 12-34-56",
    cryptoAddressLabel: "Indirizzo Criptovaluta",
    cryptoAddressPlaceholder: "es., 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa (Bitcoin)",
    selfDevelopmentSection: "La Tua Mentalità di Crescita",
    willingToTrainLabel: "Sei disposto a investire tempo nella formazione?",
    trainingHoursLabel: "Quante ore a settimana puoi dedicare allo sviluppo professionale e all’apprendimento di nuove competenze?",
    trainingHoursPlaceholder: "Seleziona ore a settimana",
    trainingHoursOptions: ["0-5", "5-10", "10-15", "15-20", "20+"],
    selfImprovementLabel: "Come ti tieni aggiornato nel tuo campo?",
    selfImprovementPlaceholder: "es., Corsi online, lettura di riviste",
    characterSection: "Sul Tuo Stile di Lavoro",
    colleagueDescriptionLabel: "Come ti descriverebbero i tuoi colleghi in tre parole?",
    colleagueDescriptionPlaceholder: "es., Affidabile, Creativo, Collaborativo",
    stressHandlingLabel: "Come gestisci lo stress?",
    stressHandlingPlaceholder: "es., Prioritizzo i compiti e faccio pause",
    criticismResponseLabel: "Come rispondi alle critiche?",
    criticismResponsePlaceholder: "es., Ascolto e miglioro",
    motivationLabel: "Cosa ti motiva di più?",
    motivationPlaceholder: "Scegli un’opzione",
    motivations: ["Crescita", "Impatto", "Lavoro di Squadra", "Compensazione", "Innovazione", "Altro"],
    mistakeHandlingLabel: "Come gestisci gli errori in un team?",
    mistakeHandlingPlaceholder: "es., Mi assumo la responsabilità e collaboro a soluzioni",
    legalSection: "Accordi Finali",
    freelancerConsentLabel: "Confermo che lavorerò come freelancer indipendente e assumo la piena responsabilità di gestire le mie tasse, obblighi legali e il rispetto di tutte le normative applicabili. Riconosco che non viene creata alcuna relazione di lavoro e sono l’unico responsabile dell’adempimento di eventuali obblighi finanziari o contrattuali relativi al mio lavoro freelance.",
    privacyConsentLabel: "Ho letto e compreso pienamente la Politica sulla Privacy (Consulta la nostra PROTEZIONE DEI DATI). Fornisco il mio consenso esplicito alla raccolta, al trattamento e alla conservazione dei miei dati personali in conformità con le leggi sulla protezione dei dati applicabili. Comprendo che i miei dati possono essere utilizzati per scopi di verifica, controlli di sicurezza e comunicazioni professionali, e mantengo il diritto di accedere, modificare o richiedere la cancellazione dei miei dati come descritto nella politica.",
    privacyPolicyLink: "Politica sulla Privacy",
    accuracyConsentLabel: "Certifico che tutte le informazioni fornite sono accurate, complete e veritiere al meglio della mia conoscenza. Comprendo che fornire informazioni false o fuorvianti può comportare la squalifica, la risoluzione di eventuali accordi o conseguenze legali. Accetto la piena responsabilità di mantenere aggiornati i miei dati e garantirne la validità.",
    previousButton: "Indietro",
    nextButton: "Continua",
    submitButton: "Invia Candidatura",
    yesNoOptions: ["Sì", "No"]
  },
  nl: {
    headerTitle: "Sluit je aan bij Ons Team",
    headerSubtitle: "Neem de tijd om te solliciteren – we kijken ernaar uit om meer over je te weten te komen!",
    steps: ["Persoonlijke & Contactgegevens", "Kwalificaties & Ervaring", "Voorkeuren, Inzichten & Juridisch"],
    personalSection: "Vertel Ons Over Jezelf",
    salutationLabel: "Aanhef",
    salutationPlaceholder: "Selecteer",
    salutationOptions: ["Dhr.", "Mevr.", "Anders"],
    firstNameLabel: "Voornaam",
    firstNamePlaceholder: "bijv., Jan",
    lastNameLabel: "Achternaam",
    lastNamePlaceholder: "bijv., de Vries",
    dateOfBirthLabel: "Geboortedatum",
    nationalityLabel: "Nationaliteit",
    nationalityPlaceholder: "bijv., Nederlands",
    addressStreetLabel: "Straatadres",
    addressStreetPlaceholder: "bijv., Hoofdstraat 123",
    addressCityLabel: "Stad",
    addressCityPlaceholder: "bijv., Amsterdam",
    addressCountryLabel: "Land",
    addressCountryPlaceholder: "bijv., Nederland",
    addressPostalCodeLabel: "Postcode",
    addressPostalCodePlaceholder: "bijv., 1012 AB",
    emailLabel: "E-mailadres",
    emailPlaceholder: "bijv., jan.devries@example.com",
    phoneLabel: "Telefoonnummer",
    phonePlaceholder: "bijv., +31 6 12345678",
    messengerLabel: "Voorkeur Messenger",
    messengerPlaceholder: "Selecteer messenger",
    messengers: [
      "WhatsApp", "Telegram", "Signal", "WeChat", "Skype", "LinkedIn", "Facebook Messenger",
      "Viber", "Line", "Discord", "Slack", "Microsoft Teams", "Anders"
    ],
    messengerContactLabel: "Messenger Contact",
    messengerContactPlaceholders: {
      WhatsApp: "bijv., +31 6 12345678",
      Telegram: "bijv., @username",
      Signal: "bijv., +31 6 12345678",
      WeChat: "bijv., WeChat-ID",
      Skype: "bijv., live:username",
      LinkedIn: "bijv., linkedin.com/in/username",
      "Facebook Messenger": "bijv., facebook.com/username",
      Viber: "bijv., +31 6 12345678",
      Line: "bijv., Line-ID",
      Discord: "bijv., username#1234",
      Slack: "bijv., e-mail of workspace-URL",
      "Microsoft Teams": "bijv., e-mail",
      Other: "bijv., ID of nummer",
      "": "Voer je messenger-ID/nummer in"
    },
    availabilitySection: "Jouw Beschikbaarheid",
    countryOfResidenceLabel: "Land van Verblijf",
    countryOfResidencePlaceholder: "bijv., Nederland",
    timeZoneLabel: "Tijdzone",
    timeZonePlaceholder: "bijv., CET (UTC+1)",
    timeZoneTooltip: "Jouw lokale tijdzone helpt ons om met je te coördineren.",
    openToRemoteLabel: "Sta je open voor werken op afstand?",
    willingToRelocateLabel: "Ben je bereid te verhuizen?",
    earliestStartDateLabel: "Vroegst Mogelijke Startdatum",
    mobilitySection: "Mobiliteit",
    hasDriversLicenseLabel: "Heb je een rijbewijs?",
    ownsCarLabel: "Heb je een auto?",
    qualificationsSection: "Jouw Kwalificaties",
    certificationsSection: "Jouw Certificaten",
    uploadCertificationsLabel: "Certificaten Uploaden (optioneel/Meerdere bestanden)",
    uploadCVLabel: "CV Uploaden",
    highestDegreeLabel: "Hoogste Diploma",
    highestDegreePlaceholder: "Selecteer je hoogste diploma",
    degrees: ["Middelbare School", "MBO", "Bachelor", "Master", "Doctoraat", "Anders"],
    fieldOfStudyLabel: "Studierichting",
    fieldOfStudyPlaceholder: "bijv., Informatica",
    additionalCertificationsLabel: "Aanvullende Certificaten/Kwalificaties",
    additionalCertificationsPlaceholder: "bijv., AWS Gecertificeerd, PMP",
    workExperienceSection: "Jouw Werkervaring",
    currentPositionLabel: "Huidige/Laatste Functie",
    currentPositionPlaceholder: "bijv., Software Engineer",
    currentCompanyLabel: "Huidig/Laatste Bedrijf",
    currentCompanyPlaceholder: "bijv., TechCorp",
    previousExperienceLabel: "Vorige Werkgevers & Werkervaring",
    previousExperiencePlaceholder: "Noem je vorige rollen en belangrijke verantwoordelijkheden",
    yearsOfExperienceLabel: "Jaren Werkervaring",
    yearsOfExperiencePlaceholder: "Selecteer je ervaringsbereik",
    yearsOptions: ["0-1", "1-3", "3-5", "5-10", "10+"],
    lastCompanyStartDateLabel: "Startdatum Laatste Bedrijf",
    lastCompanyEndDateLabel: "Einddatum Laatste Bedrijf",
    applyingForPositionLabel: "Voor welke functie solliciteer je?",
    applyingForPositionPlaceholder: "Selecteer een functie",
    positions: [
      "Software Engineer",
      "Verkoopassistent",
      "Telecommunicatiespecialist",
      "Sociale Marketing Professionals",
      "Zoekmachine Marketing",
      "Bedrijfsanalist",
      "Front-End Ontwikkelaar",
      "Back-End Ontwikkelaar",
      "IT Projectmanager",
      "Systeembeheerder",
      "Anders"
    ],
    expertiseRatingLabel: "Hoe beoordeel je jouw expertise in dit domein?",
    expertiseRatingPlaceholder: "Selecteer je expertiseniveau",
    expertiseOptions: [
      "1-3 (Instapniveau/Beginner)",
      "4-6 (Gemiddeld)",
      "7-9 (Professioneel)",
      "10 (Expert/100% Professioneel)"
    ],
    preferencesSection: "Jouw Voorkeuren",
    expectedSalaryLabel: "Verwacht Salaris",
    expectedSalaryPlaceholder: "bijv., 50000",
    salaryCurrencyLabel: "Valuta",
    salaryCurrencyPlaceholder: "Selecteer je valuta",
    currencies: ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "INR", "Anders"],
    paymentMethodLabel: "Voorkeur Betalingsmethode",
    paymentMethodPlaceholder: "Selecteer betalingsmethode",
    paymentMethods: ["Bankoverschrijving", "Cryptocurrency"],
    paymentSystemLabel: "Betaalsysteem",
    paymentSystemPlaceholder: "Selecteer betaalsysteem",
    paymentSystems: ["SEPA", "ACH", "Faster Payments", "SWIFT", "NACH", "BACS", "BECS"],
    bankIBANLabel: "IBAN",
    bankIBANPlaceholder: "bijv., NL91ABNA0417164300",
    bankIBANTooltip: "Vereist voor SEPA- en SWIFT-betalingen.",
    bankBICLabel: "BIC/SWIFT Code",
    bankBICPlaceholder: "bijv., ABNANL2A",
    bankBICTooltip: "Vereist voor SWIFT-betalingen, optioneel voor SEPA.",
    bankAccountNumberLabel: "Rekeningnummer",
    bankAccountNumberPlaceholder: "bijv., 1234567890",
    bankRoutingNumberLabel: "Routingsnummer",
    bankRoutingNumberPlaceholder: "bijv., 021000021",
    bankSortCodeLabel: "Sorteercode",
    bankSortCodePlaceholder: "bijv., 12-34-56",
    cryptoAddressLabel: "Cryptocurrency Adres",
    cryptoAddressPlaceholder: "bijv., 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa (Bitcoin)",
    selfDevelopmentSection: "Jouw Groeimindset",
    willingToTrainLabel: "Bereid om tijd te investeren in training?",
    trainingHoursLabel: "Hoeveel uur per week kun je besteden aan professionele ontwikkeling en het leren van nieuwe vaardigheden?",
    trainingHoursPlaceholder: "Selecteer uren per week",
    trainingHoursOptions: ["0-5", "5-10", "10-15", "15-20", "20+"],
    selfImprovementLabel: "Hoe blijf je up-to-date in jouw vakgebied?",
    selfImprovementPlaceholder: "bijv., Online cursussen, vakbladen lezen",
    characterSection: "Over Jouw Werkstijl",
    colleagueDescriptionLabel: "Hoe zouden collega’s jou in drie woorden beschrijven?",
    colleagueDescriptionPlaceholder: "bijv., Betrouwbaar, Creatief, Teamspeler",
    stressHandlingLabel: "Hoe ga je om met stress?",
    stressHandlingPlaceholder: "bijv., Ik stel prioriteiten en neem pauzes",
    criticismResponseLabel: "Hoe reageer je op kritiek?",
    criticismResponsePlaceholder: "bijv., Ik luister en verbeter",
    motivationLabel: "Wat motiveert jou het meest?",
    motivationPlaceholder: "Kies een optie",
    motivations: ["Groei", "Impact", "Teamwerk", "Beloning", "Innovatie", "Anders"],
    mistakeHandlingLabel: "Hoe ga je om met fouten in een team?",
    mistakeHandlingPlaceholder: "bijv., Ik erken ze en werk aan oplossingen",
    legalSection: "Definitieve Overeenkomsten",
    freelancerConsentLabel: "Ik bevestig dat ik als zelfstandige freelancer zal werken en de volledige verantwoordelijkheid neem voor het beheren van mijn eigen belastingen, wettelijke verplichtingen en naleving van alle toepasselijke regelgeving. Ik erken dat er geen arbeidsrelatie ontstaat en dat ik alleen verantwoordelijk ben voor het nakomen van eventuele financiële of contractuele verplichtingen met betrekking tot mijn freelance werk.",
    privacyConsentLabel: "Ik heb het Privacybeleid (zie onze GEGEVENSBESCHERMING) gelezen en volledig begrepen. Ik geef mijn uitdrukkelijke toestemming voor het verzamelen, verwerken en opslaan van mijn persoonlijke gegevens in overeenstemming met de toepasselijke wetten inzake gegevensbescherming. Ik begrijp dat mijn gegevens kunnen worden gebruikt voor verificatiedoeleinden, veiligheidscontroles en professionele communicatie, en ik behoud het recht om mijn gegevens in te zien, te wijzigen of te laten verwijderen zoals beschreven in het beleid.",
    privacyPolicyLink: "Privacybeleid",
    accuracyConsentLabel: "Ik verklaar dat alle verstrekte informatie naar mijn beste weten accuraat, volledig en waarheidsgetrouw is. Ik begrijp dat het verstrekken van valse of misleidende informatie kan leiden tot diskwalificatie, beëindiging van overeenkomsten of juridische gevolgen. Ik accepteer de volledige verantwoordelijkheid om mijn gegevens up-to-date te houden en hun geldigheid te waarborgen.",
    previousButton: "Terug",
    nextButton: "Doorgaan",
    submitButton: "Sollicitatie Indienen",
    yesNoOptions: ["Ja", "Nee"]
  },
sa: {
  headerTitle: "انضم إلى فريقنا",
  headerSubtitle: "خذ وقتك للتقديم – نحن متحمسون للتعرف عليك!",
  steps: ["التفاصيل الشخصية ومعلومات الاتصال", "المؤهلات والخبرة", "التفضيلات والرؤى والقانونية"],
  personalSection: "أخبرنا عن نفسك",
  salutationLabel: "التحية",
  salutationPlaceholder: "اختر",
  salutationOptions: ["السيد", "السيدة", "أخرى"],
  firstNameLabel: "الاسم الأول",
  firstNamePlaceholder: "مثال، محمد",
  lastNameLabel: "اسم العائلة",
  lastNamePlaceholder: "مثال، العتيبي",
  dateOfBirthLabel: "تاريخ الميلاد",
  nationalityLabel: "الجنسية",
  nationalityPlaceholder: "مثال، سعودي",
  addressStreetLabel: "عنوان الشارع",
  addressStreetPlaceholder: "مثال، شارع الملك عبدالعزيز 123",
  addressCityLabel: "المدينة",
  addressCityPlaceholder: "مثال، الرياض",
  addressCountryLabel: "الدولة",
  addressCountryPlaceholder: "مثال، المملكة العربية السعودية",
  addressPostalCodeLabel: "الرمز البريدي",
  addressPostalCodePlaceholder: "مثال، 12211",
  emailLabel: "عنوان البريد الإلكتروني",
  emailPlaceholder: "مثال، mohammed@example.com",
  phoneLabel: "رقم الهاتف",
  phonePlaceholder: "مثال، +966 50 123 4567",
  messengerLabel: "التطبيق المفضل للتواصل",
  messengerPlaceholder: "اختر تطبيق التواصل",
  messengers: [
    "واتساب", "تليجرام", "سيجنال", "وي تشات", "سكايب", "لينكدإن", "فيسبوك ماسنجر",
    "فايبر", "لاين", "ديسكورد", "سلاك", "مايكروسوفت تيمز", "أخرى"
  ],
  messengerContactLabel: "معلومات التواصل عبر التطبيق",
  messengerContactPlaceholders: {
    "واتساب": "مثال، +966 50 123 4567",
    "تليجرام": "مثال، @username",
    "سيجنال": "مثال، +966 50 123 4567",
    "وي تشات": "مثال، معرف وي تشات",
    "سكايب": "مثال، live:username",
    "لينكدإن": "مثال، linkedin.com/in/username",
    "فيسبوك ماسنجر": "مثال، facebook.com/username",
    "فايبر": "مثال، +966 50 123 4567",
    "لاين": "مثال، معرف لاين",
    "ديسكورد": "مثال، username#1234",
    "سلاك": "مثال، بريد إلكتروني أو رابط مساحة العمل",
    "مايكروسوفت تيمز": "مثال، بريد إلكتروني",
    "أخرى": "مثال، معرف أو رقم",
    "": "أدخل معرف/رقم التطبيق الخاص بك"
  },
  availabilitySection: "توافرك",
  countryOfResidenceLabel: "دولة الإقامة",
  countryOfResidencePlaceholder: "مثال، المملكة العربية السعودية",
  timeZoneLabel: "المنطقة الزمنية",
  timeZonePlaceholder: "مثال، AST (UTC+3)",
  timeZoneTooltip: "منطقتك الزمنية المحلية تساعدنا في التنسيق معك.",
  openToRemoteLabel: "هل أنت منفتح للعمل عن بُعد؟",
  willingToRelocateLabel: "هل أنت مستعد للانتقال؟",
  earliestStartDateLabel: "أقرب تاريخ ممكن للبدء",
  mobilitySection: "التنقل",
  hasDriversLicenseLabel: "هل لديك رخصة قيادة؟",
  ownsCarLabel: "هل تمتلك سيارة؟",
  qualificationsSection: "مؤهلاتك",
  certificationsSection: "شهاداتك",
  uploadCertificationsLabel: "رفع الشهادات (اختياري/ملفات متعددة)",
  uploadCVLabel: "رفع السيرة الذاتية",
  highestDegreeLabel: "أعلى درجة علمية حصلت عليها",
  highestDegreePlaceholder: "اختر أعلى درجة علمية لك",
  degrees: ["ثانوية عامة", "دبلوم", "بكالوريوس", "ماجستير", "دكتوراه", "أخرى"],
  fieldOfStudyLabel: "مجال الدراسة",
  fieldOfStudyPlaceholder: "مثال، علوم الحاسوب",
  additionalCertificationsLabel: "شهادات/مؤهلات إضافية",
  additionalCertificationsPlaceholder: "مثال، شهادة AWS، PMP",
  workExperienceSection: "خبرتك العملية",
  currentPositionLabel: "الوظيفة الحالية/الأخيرة",
  currentPositionPlaceholder: "مثال، مهندس برمجيات",
  currentCompanyLabel: "الشركة الحالية/الأخيرة",
  currentCompanyPlaceholder: "مثال، تك كورب",
  previousExperienceLabel: "أرباب العمل السابقون والخبرة العملية",
  previousExperiencePlaceholder: "اذكر أدوارك السابقة ومسؤولياتك الرئيسية",
  yearsOfExperienceLabel: "سنوات الخبرة العملية",
  yearsOfExperiencePlaceholder: "اختر نطاق خبرتك",
  yearsOptions: ["0-1", "1-3", "3-5", "5-10", "10+"],
  lastCompanyStartDateLabel: "تاريخ بدء العمل في الشركة الأخيرة",
  lastCompanyEndDateLabel: "تاريخ انتهاء العمل في الشركة الأخيرة",
  applyingForPositionLabel: "ما الوظيفة التي تتقدم لها؟",
  applyingForPositionPlaceholder: "اختر وظيفة",
  positions: [
    "مهندس برمجيات",
    "مساعد مبيعات",
    "أخصائي اتصالات",
    "محترفو التسويق الاجتماعي",
    "تسويق محركات البحث",
    "محلل أعمال",
    "مطور واجهة أمامية",
    "مطور خلفية",
    "مدير مشاريع تكنولوجيا المعلومات",
    "مدير نظام",
    "أخرى"
  ],
  expertiseRatingLabel: "كيف تقيم خبرتك في هذا المجال؟",
  expertiseRatingPlaceholder: "اختر مستوى خبرتك",
  expertiseOptions: [
    "1-3 (مبتدئ/جديد)",
    "4-6 (متوسط)",
    "7-9 (محترف)",
    "10 (خبير/محترف 100%)"
  ],
  preferencesSection: "تفضيلاتك",
  expectedSalaryLabel: "الراتب المتوقع",
  expectedSalaryPlaceholder: "مثال، 50000",
  salaryCurrencyLabel: "العملة",
  salaryCurrencyPlaceholder: "اختر عملتك",
  currencies: ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "INR", "أخرى"],
  paymentMethodLabel: "طريقة الدفع المفضلة",
  paymentMethodPlaceholder: "اختر طريقة الدفع",
  paymentMethods: ["تحويل بنكي", "عملة مشفرة"],
  paymentSystemLabel: "نظام الدفع",
  paymentSystemPlaceholder: "اختر نظام الدفع",
  paymentSystems: ["SEPA", "ACH", "Faster Payments", "SWIFT", "NACH", "BACS", "BECS"],
  bankIBANLabel: "IBAN",
  bankIBANPlaceholder: "مثال، SA0380000000608010167519",
  bankIBANTooltip: "مطلوب للمدفوعات عبر SEPA وSWIFT.",
  bankBICLabel: "رمز BIC/SWIFT",
  bankBICPlaceholder: "مثال، RJHISARI",
  bankBICTooltip: "مطلوب للمدفوعات عبر SWIFT، اختياري لـ SEPA.",
  bankAccountNumberLabel: "رقم الحساب البنكي",
  bankAccountNumberPlaceholder: "مثال، 1234567890",
  bankRoutingNumberLabel: "رقم التوجيه",
  bankRoutingNumberPlaceholder: "مثال، 021000021",
  bankSortCodeLabel: "رمز الفرز",
  bankSortCodePlaceholder: "مثال، 12-34-56",
  cryptoAddressLabel: "عنوان العملة المشفرة",
  cryptoAddressPlaceholder: "مثال، 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa (بيتكوين)",
  selfDevelopmentSection: "عقليتك للتطور",
  willingToTrainLabel: "هل أنت مستعد لاستثمار الوقت في التدريب؟",
  trainingHoursLabel: "كم ساعة في الأسبوع يمكنك تخصيصها للتطوير المهني وتعلم مهارات جديدة؟",
  trainingHoursPlaceholder: "اختر ساعات في الأسبوع",
  trainingHoursOptions: ["0-5", "5-10", "10-15", "15-20", "20+"],
  selfImprovementLabel: "كيف تبقى محدثًا في مجالك؟",
  selfImprovementPlaceholder: "مثال، دورات عبر الإنترنت، قراءة مجلات",
  characterSection: "عن أسلوب عملك",
  colleagueDescriptionLabel: "كيف يصفك زملاؤك بثلاث كلمات؟",
  colleagueDescriptionPlaceholder: "مثال، موثوق، مبدع، لاعب جماعي",
  stressHandlingLabel: "كيف تتعامل مع التوتر؟",
  stressHandlingPlaceholder: "مثال، أحدد الأولويات وأخذ استراحات",
  criticismResponseLabel: "كيف تستجيب للنقد؟",
  criticismResponsePlaceholder: "مثال، أستمع وأتحسن",
  motivationLabel: "ما الذي يحفزك أكثر؟",
  motivationPlaceholder: "اختر خيارًا",
  motivations: ["النمو", "التأثير", "العمل الجماعي", "التعويض", "الابتكار", "أخرى"],
  mistakeHandlingLabel: "كيف تتعامل مع الأخطاء في فريق؟",
  mistakeHandlingPlaceholder: "مثال، أتحمل المسؤولية وأتعاون على حلول",
  legalSection: "الاتفاقيات النهائية",
  freelancerConsentLabel: "أؤكد أنني سأعمل كمستقل وأتحمل المسؤولية الكاملة عن إدارة ضرائبي والتزاماتي القانونية والامتثال لجميع اللوائح المعمول بها. أقر بأنه لا يتم إنشاء علاقة توظيف وأنني المسؤول الوحيد عن الوفاء بأي واجبات مالية أو تعاقدية تتعلق بعملي المستقل.",
  privacyConsentLabel: "لقد قرأت وفهمت سياسة الخصوصية بالكامل (تحقق من حماية بياناتنا). أمنح موافقتي الصريحة لجمع ومعالجة وتخزين بياناتي الشخصية وفقًا لقوانين حماية البيانات ذات الصلة. أفهم أن بياناتي قد تُستخدم لأغراض التحقق والفحوصات الأمنية والاتصالات المهنية، وأحتفظ بالحق في الوصول إلى بياناتي أو تعديلها أو طلب حذفها كما هو موضح في السياسة.",
  privacyPolicyLink: "سياسة الخصوصية",
  accuracyConsentLabel: "أشهد أن جميع المعلومات المقدمة دقيقة وكاملة وصحيحة حسب علمي. أفهم أن تقديم معلومات خاطئة أو مضللة قد يؤدي إلى الاستبعاد أو إنهاء أي اتفاقيات أو عواقب قانونية. أقبل المسؤولية الكاملة عن الحفاظ على تحديث تفاصيلي وضمان صحتها.",
  previousButton: "رجوع",
  nextButton: "متابعة",
  submitButton: "إرسال الطلب",
  yesNoOptions: ["نعم", "لا"]
},
hk: {
  headerTitle: "加入我哋嘅團隊",
  headerSubtitle: "慢慢申請 – 我哋好期待了解你更多！",
  steps: ["個人及聯繫資料", "資格同經驗", "偏好、洞察同法律"],
  personalSection: "講講你自己",
  salutationLabel: "稱呼",
  salutationPlaceholder: "選擇",
  salutationOptions: ["先生", "女士", "其他"],
  firstNameLabel: "名",
  firstNamePlaceholder: "例如，偉文",
  lastNameLabel: "姓",
  lastNamePlaceholder: "例如，陳",
  dateOfBirthLabel: "出生日期",
  nationalityLabel: "國籍",
  nationalityPlaceholder: "例如，香港",
  addressStreetLabel: "街道地址",
  addressStreetPlaceholder: "例如，銅鑼灣大馬路123號",
  addressCityLabel: "城市",
  addressCityPlaceholder: "例如，香港",
  addressCountryLabel: "國家/地區",
  addressCountryPlaceholder: "例如，中華人民共和國香港特別行政區",
  addressPostalCodeLabel: "郵政編碼",
  addressPostalCodePlaceholder: "例如，999077",
  emailLabel: "電郵地址",
  emailPlaceholder: "例如，waiman.chan@example.com",
  phoneLabel: "電話號碼",
  phonePlaceholder: "例如，+852 9123 4567",
  messengerLabel: "首選通訊應用",
  messengerPlaceholder: "選擇通訊應用",
  messengers: [
    "WhatsApp", "Telegram", "Signal", "WeChat", "Skype", "LinkedIn", "Facebook Messenger",
    "Viber", "Line", "Discord", "Slack", "Microsoft Teams", "其他"
  ],
  messengerContactLabel: "通訊聯繫方式",
  messengerContactPlaceholders: {
    WhatsApp: "例如，+852 9123 4567",
    Telegram: "例如，@username",
    Signal: "例如，+852 9123 4567",
    WeChat: "例如，微信ID",
    Skype: "例如，live:username",
    LinkedIn: "例如，linkedin.com/in/username",
    "Facebook Messenger": "例如，facebook.com/username",
    Viber: "例如，+852 9123 4567",
    Line: "例如，Line ID",
    Discord: "例如，username#1234",
    Slack: "例如，電郵或工作空間URL",
    "Microsoft Teams": "例如，電郵",
    其他: "例如，ID或號碼",
    "": "輸入你嘅通訊ID/號碼"
  },
  availabilitySection: "你嘅可用時間",
  countryOfResidenceLabel: "居住國家/地區",
  countryOfResidencePlaceholder: "例如，中華人民共和國香港特別行政區",
  timeZoneLabel: "時區",
  timeZonePlaceholder: "例如，HKT (UTC+8)",
  timeZoneTooltip: "你嘅本地時區幫我哋同你協調。",
  openToRemoteLabel: "你願唔願意接受遠程工作？",
  willingToRelocateLabel: "你願唔願意搬遷？",
  earliestStartDateLabel: "最早可能開始日期",
  mobilitySection: "流動性",
  hasDriversLicenseLabel: "你有冇駕駛執照？",
  ownsCarLabel: "你有冇車？",
  qualificationsSection: "你嘅資格",
  certificationsSection: "你嘅證書",
  uploadCertificationsLabel: "上載證書（可選/多個文件）",
  uploadCVLabel: "上載履歷表",
  highestDegreeLabel: "最高學歷",
  highestDegreePlaceholder: "選擇你嘅最高學歷",
  degrees: ["中學", "副學士", "學士", "碩士", "博士", "其他"],
  fieldOfStudyLabel: "研究領域",
  fieldOfStudyPlaceholder: "例如，電腦科學",
  additionalCertificationsLabel: "額外證書/資格",
  additionalCertificationsPlaceholder: "例如，AWS認證，PMP",
  workExperienceSection: "你嘅工作經驗",
  currentPositionLabel: "現職/前職位",
  currentPositionPlaceholder: "例如，軟件工程師",
  currentCompanyLabel: "現職/前公司",
  currentCompanyPlaceholder: "例如，TechCorp",
  previousExperienceLabel: "之前嘅僱主同工作經驗",
  previousExperiencePlaceholder: "列出你之前嘅角色同主要職責",
  yearsOfExperienceLabel: "工作經驗年數",
  yearsOfExperiencePlaceholder: "選擇你嘅經驗範圍",
  yearsOptions: ["0-1", "1-3", "3-5", "5-10", "10+"],
  lastCompanyStartDateLabel: "前公司開始日期",
  lastCompanyEndDateLabel: "前公司結束日期",
  applyingForPositionLabel: "你申請邊個職位？",
  applyingForPositionPlaceholder: "選擇一個職位",
  positions: [
    "軟件工程師",
    "銷售助理",
    "電訊專家",
    "社交營銷專業人士",
    "搜索引擎營銷",
    "商業分析師",
    "前端開發者",
    "後端開發者",
    "資訊技術項目經理",
    "系統管理員",
    "其他"
  ],
  expertiseRatingLabel: "你點樣評估你喺呢個領域嘅專業知識？",
  expertiseRatingPlaceholder: "選擇你嘅專業水平",
  expertiseOptions: [
    "1-3 (入門/新手)",
    "4-6 (中級)",
    "7-9 (專業)",
    "10 (專家/100%專業)"
  ],
  preferencesSection: "你嘅偏好",
  expectedSalaryLabel: "期望薪金",
  expectedSalaryPlaceholder: "例如，50000",
  salaryCurrencyLabel: "貨幣",
  salaryCurrencyPlaceholder: "選擇你嘅貨幣",
  currencies: ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "HKD", "其他"],
  paymentMethodLabel: "首選付款方式",
  paymentMethodPlaceholder: "選擇付款方式",
  paymentMethods: ["銀行轉賬", "加密貨幣"],
  paymentSystemLabel: "付款系統",
  paymentSystemPlaceholder: "選擇付款系統",
  paymentSystems: ["SEPA", "ACH", "Faster Payments", "SWIFT", "NACH", "BACS", "BECS"],
  bankIBANLabel: "IBAN",
  bankIBANPlaceholder: "例如，HK12345678901234567890",
  bankIBANTooltip: "SEPA同SWIFT付款需要。",
  bankBICLabel: "BIC/SWIFT碼",
  bankBICPlaceholder: "例如，HSBCHKHHHKH",
  bankBICTooltip: "SWIFT付款需要，SEPA可選。",
  bankAccountNumberLabel: "銀行帳戶號碼",
  bankAccountNumberPlaceholder: "例如，1234567890",
  bankRoutingNumberLabel: "路由號碼",
  bankRoutingNumberPlaceholder: "例如，021000021",
  bankSortCodeLabel: "分類碼",
  bankSortCodePlaceholder: "例如，12-34-56",
  cryptoAddressLabel: "加密貨幣地址",
  cryptoAddressPlaceholder: "例如，1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa (比特幣)",
  selfDevelopmentSection: "你嘅成長思維",
  willingToTrainLabel: "你願唔願意花時間喺培訓上？",
  trainingHoursLabel: "你每週可以花幾多小時喺專業發展同學習新技能上？",
  trainingHoursPlaceholder: "選擇每週小時數",
  trainingHoursOptions: ["0-5", "5-10", "10-15", "15-20", "20+"],
  selfImprovementLabel: "你點樣喺你嘅領域保持更新？",
  selfImprovementPlaceholder: "例如，網上課程，閱讀期刊",
  characterSection: "關於你嘅工作風格",
  colleagueDescriptionLabel: "同事會點樣用三個詞形容你？",
  colleagueDescriptionPlaceholder: "例如，可靠，創意，團隊合作",
  stressHandlingLabel: "你點樣處理壓力？",
  stressHandlingPlaceholder: "例如，我會優先處理任務同休息",
  criticismResponseLabel: "你點樣回應批評？",
  criticismResponsePlaceholder: "例如，我會聆聽同改善",
  motivationLabel: "乜嘢最激勵你？",
  motivationPlaceholder: "選擇一個選項",
  motivations: ["成長", "影響", "團隊合作", "報酬", "創新", "其他"],
  mistakeHandlingLabel: "你點樣喺團隊中處理錯誤？",
  mistakeHandlingPlaceholder: "例如，我會承認錯誤同合作解決",
  legalSection: "最終協議",
  freelancerConsentLabel: "我確認我會以獨立自由工作者身份工作，並全權負責管理我嘅稅務、法律義務同所有適用規定的合規性。我承認唔會建立僱傭關係，我係唯一負責履行與我自由工作相關嘅任何財務或合同義務嘅人。",
  privacyConsentLabel: "我已閱讀並完全理解私隱政策（請查看我哋嘅數據保護）。我明確同意根據相關數據保護法收集、處理同儲存我嘅個人數據。我明白我嘅數據可能會用於驗證、安全檢查同專業溝通，我保留喺政策中概述嘅權利去訪問、修改或要求刪除我嘅數據。",
  privacyPolicyLink: "私隱政策",
  accuracyConsentLabel: "我證明所有提供嘅信息喺我所知範圍內係準確、完整同真實嘅。我明白提供虛假或誤導性信息可能會導致取消資格、終止任何協議或法律後果。我接受全權負責保持我嘅資料更新同確保其有效性。",
  previousButton: "返回",
  nextButton: "繼續",
  submitButton: "提交申請",
  yesNoOptions: ["是", "否"]
},
sg: {
  headerTitle: "加入我们的团队",
  headerSubtitle: "慢慢申请 – 我们很期待了解你更多！",
  steps: ["个人及联系资料", "资格与经验", "偏好、洞察与法律"],
  personalSection: "告诉我们关于你",
  salutationLabel: "称呼",
  salutationPlaceholder: "选择",
  salutationOptions: ["先生", "女士", "其他"],
  firstNameLabel: "名字",
  firstNamePlaceholder: "例如，伟明",
  lastNameLabel: "姓氏",
  lastNamePlaceholder: "例如，陈",
  dateOfBirthLabel: "出生日期",
  nationalityLabel: "国籍",
  nationalityPlaceholder: "例如，新加坡",
  addressStreetLabel: "街道地址",
  addressStreetPlaceholder: "例如，乌节路123号",
  addressCityLabel: "城市",
  addressCityPlaceholder: "例如，新加坡",
  addressCountryLabel: "国家",
  addressCountryPlaceholder: "例如，新加坡",
  addressPostalCodeLabel: "邮政编码",
  addressPostalCodePlaceholder: "例如，238877",
  emailLabel: "电子邮件地址",
  emailPlaceholder: "例如，weiming.chen@example.com",
  phoneLabel: "电话号码",
  phonePlaceholder: "例如，+65 9123 4567",
  messengerLabel: "首选通讯应用",
  messengerPlaceholder: "选择通讯应用",
  messengers: [
    "WhatsApp", "Telegram", "Signal", "WeChat", "Skype", "LinkedIn", "Facebook Messenger",
    "Viber", "Line", "Discord", "Slack", "Microsoft Teams", "其他"
  ],
  messengerContactLabel: "通讯联系方式",
  messengerContactPlaceholders: {
    WhatsApp: "例如，+65 9123 4567",
    Telegram: "例如，@username",
    Signal: "例如，+65 9123 4567",
    WeChat: "例如，微信ID",
    Skype: "例如，live:username",
    LinkedIn: "例如，linkedin.com/in/username",
    "Facebook Messenger": "例如，facebook.com/username",
    Viber: "例如，+65 9123 4567",
    Line: "例如，Line ID",
    Discord: "例如，username#1234",
    Slack: "例如，电子邮件或工作空间URL",
    "Microsoft Teams": "例如，电子邮件",
    其他: "例如，ID或号码",
    "": "输入你的通讯ID/号码"
  },
  availabilitySection: "你的可用时间",
  countryOfResidenceLabel: "居住国家",
  countryOfResidencePlaceholder: "例如，新加坡",
  timeZoneLabel: "时区",
  timeZonePlaceholder: "例如，SGT (UTC+8)",
  timeZoneTooltip: "你的本地时区帮助我们与你协调。",
  openToRemoteLabel: "你愿意接受远程工作吗？",
  willingToRelocateLabel: "你愿意搬迁吗？",
  earliestStartDateLabel: "最早可能的开始日期",
  mobilitySection: "流动性",
  hasDriversLicenseLabel: "你有驾驶执照吗？",
  ownsCarLabel: "你有车吗？",
  qualificationsSection: "你的资格",
  certificationsSection: "你的证书",
  uploadCertificationsLabel: "上传证书（可选/多个文件）",
  uploadCVLabel: "上传简历",
  highestDegreeLabel: "最高学历",
  highestDegreePlaceholder: "选择你的最高学历",
  degrees: ["中学", "大专", "学士", "硕士", "博士", "其他"],
  fieldOfStudyLabel: "研究领域",
  fieldOfStudyPlaceholder: "例如，计算机科学",
  additionalCertificationsLabel: "额外证书/资格",
  additionalCertificationsPlaceholder: "例如，AWS认证，PMP",
  workExperienceSection: "你的工作经验",
  currentPositionLabel: "现职/前职位",
  currentPositionPlaceholder: "例如，软件工程师",
  currentCompanyLabel: "现职/前公司",
  currentCompanyPlaceholder: "例如，TechCorp",
  previousExperienceLabel: "之前的雇主和工作经验",
  previousExperiencePlaceholder: "列出你之前的角色和主要职责",
  yearsOfExperienceLabel: "工作经验年数",
  yearsOfExperiencePlaceholder: "选择你的经验范围",
  yearsOptions: ["0-1", "1-3", "3-5", "5-10", "10+"],
  lastCompanyStartDateLabel: "前公司开始日期",
  lastCompanyEndDateLabel: "前公司结束日期",
  applyingForPositionLabel: "你申请哪个职位？",
  applyingForPositionPlaceholder: "选择一个职位",
  positions: [
    "软件工程师",
    "销售助理",
    "电信专家",
    "社交营销专业人士",
    "搜索引擎营销",
    "商业分析师",
    "前端开发者",
    "后端开发者",
    "信息技术项目经理",
    "系统管理员",
    "其他"
  ],
  expertiseRatingLabel: "你如何评估你在这个领域的专业知识？",
  expertiseRatingPlaceholder: "选择你的专业水平",
  expertiseOptions: [
    "1-3 (入门/新手)",
    "4-6 (中级)",
    "7-9 (专业)",
    "10 (专家/100%专业)"
  ],
  preferencesSection: "你的偏好",
  expectedSalaryLabel: "期望薪资",
  expectedSalaryPlaceholder: "例如，50000",
  salaryCurrencyLabel: "货币",
  salaryCurrencyPlaceholder: "选择你的货币",
  currencies: ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "SGD", "其他"],
  paymentMethodLabel: "首选付款方式",
  paymentMethodPlaceholder: "选择付款方式",
  paymentMethods: ["银行转账", "加密货币"],
  paymentSystemLabel: "付款系统",
  paymentSystemPlaceholder: "选择付款系统",
  paymentSystems: ["SEPA", "ACH", "Faster Payments", "SWIFT", "NACH", "BACS", "BECS"],
  bankIBANLabel: "IBAN",
  bankIBANPlaceholder: "例如，SG12345678901234567890",
  bankIBANTooltip: "SEPA和SWIFT付款需要。",
  bankBICLabel: "BIC/SWIFT码",
  bankBICPlaceholder: "例如，DBSBSGSG",
  bankBICTooltip: "SWIFT付款需要，SEPA可选。",
  bankAccountNumberLabel: "银行账户号码",
  bankAccountNumberPlaceholder: "例如，1234567890",
  bankRoutingNumberLabel: "路由号码",
  bankRoutingNumberPlaceholder: "例如，021000021",
  bankSortCodeLabel: "分类码",
  bankSortCodePlaceholder: "例如，12-34-56",
  cryptoAddressLabel: "加密货币地址",
  cryptoAddressPlaceholder: "例如，1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa (比特币)",
  selfDevelopmentSection: "你的成长思维",
  willingToTrainLabel: "你愿意花时间在培训上吗？",
  trainingHoursLabel: "你每周可以花多少小时在专业发展和学习新技能上？",
  trainingHoursPlaceholder: "选择每周小时数",
  trainingHoursOptions: ["0-5", "5-10", "10-15", "15-20", "20+"],
  selfImprovementLabel: "你如何在你的领域保持更新？",
  selfImprovementPlaceholder: "例如，在线课程，阅读期刊",
  characterSection: "关于你的工作风格",
  colleagueDescriptionLabel: "同事会如何用三个词形容你？",
  colleagueDescriptionPlaceholder: "例如，可靠，创意，团队合作",
  stressHandlingLabel: "你如何处理压力？",
  stressHandlingPlaceholder: "例如，我会优先处理任务并休息",
  criticismResponseLabel: "你如何回应批评？",
  criticismResponsePlaceholder: "例如，我会倾听并改进",
  motivationLabel: "什么最激励你？",
  motivationPlaceholder: "选择一个选项",
  motivations: ["成长", "影响", "团队合作", "报酬", "创新", "其他"],
  mistakeHandlingLabel: "你如何在团队中处理错误？",
  mistakeHandlingPlaceholder: "例如，我会承认错误并合作解决",
  legalSection: "最终协议",
  freelancerConsentLabel: "我确认我将以独立自由工作者身份工作，并全权负责管理我自己的税务、法律义务和所有适用规定的合规性。我承认不会建立雇佣关系，我是唯一负责履行与我自由工作相关的任何财务或合同义务的人。",
  privacyConsentLabel: "我已阅读并完全理解隐私政策（请查看我们的数据保护）。我明确同意根据相关数据保护法收集、处理和存储我的个人数据。我明白我的数据可能用于验证、安全检查和专业沟通，我保留在政策中概述的权利去访问、修改或要求删除我的数据。",
  privacyPolicyLink: "隐私政策",
  accuracyConsentLabel: "我证明所有提供的信息在我的知识范围内是准确、完整和真实的。我明白提供虚假或误导性信息可能导致取消资格、终止任何协议或法律后果。我接受全权负责保持我的资料更新并确保其有效性。",
  previousButton: "返回",
  nextButton: "继续",
  submitButton: "提交申请",
  yesNoOptions: ["是", "否"]
},
za: {
  headerTitle: "Sluit aan by Ons Span",
  headerSubtitle: "Neem jou tyd om aansoek te doen – ons is opgewonde om meer oor jou te leer!",
  steps: ["Persoonlike & Kontakbesonderhede", "Kwalifikasies & Ervaring", "Voorkeure, Insigte & Wetlik"],
  personalSection: "Vertel Ons Oor Jouself",
  salutationLabel: "Aanspreekvorm",
  salutationPlaceholder: "Kies",
  salutationOptions: ["Mnr.", "Mev.", "Ander"],
  firstNameLabel: "Voornaam",
  firstNamePlaceholder: "bv., Johan",
  lastNameLabel: "Van",
  lastNamePlaceholder: "bv., Botha",
  dateOfBirthLabel: "Geboortedatum",
  nationalityLabel: "Nasionaliteit",
  nationalityPlaceholder: "bv., Suid-Afrikaans",
  addressStreetLabel: "Straatadres",
  addressStreetPlaceholder: "bv., Hoofstraat 123",
  addressCityLabel: "Stad",
  addressCityPlaceholder: "bv., Kaapstad",
  addressCountryLabel: "Land",
  addressCountryPlaceholder: "bv., Suid-Afrika",
  addressPostalCodeLabel: "Poskode",
  addressPostalCodePlaceholder: "bv., 8001",
  emailLabel: "E-posadres",
  emailPlaceholder: "bv., johan.botha@example.com",
  phoneLabel: "Telefoonnummer",
  phonePlaceholder: "bv., +27 21 123 4567",
  messengerLabel: "Voorkeur Boodskapper",
  messengerPlaceholder: "Kies boodskapper",
  messengers: [
    "WhatsApp", "Telegram", "Signal", "WeChat", "Skype", "LinkedIn", "Facebook Messenger",
    "Viber", "Line", "Discord", "Slack", "Microsoft Teams", "Ander"
  ],
  messengerContactLabel: "Boodskapper Kontak",
  messengerContactPlaceholders: {
    WhatsApp: "bv., +27 21 123 4567",
    Telegram: "bv., @username",
    Signal: "bv., +27 21 123 4567",
    WeChat: "bv., WeChat ID",
    Skype: "bv., live:username",
    LinkedIn: "bv., linkedin.com/in/username",
    "Facebook Messenger": "bv., facebook.com/username",
    Viber: "bv., +27 21 123 4567",
    Line: "bv., Line ID",
    Discord: "bv., username#1234",
    Slack: "bv., e-pos of werkspasie-URL",
    "Microsoft Teams": "bv., e-pos",
    Ander: "bv., ID of nommer",
    "": "Voer jou boodskapper-ID/nommer in"
  },
  availabilitySection: "Jou Beskikbaarheid",
  countryOfResidenceLabel: "Land van Verblyf",
  countryOfResidencePlaceholder: "bv., Suid-Afrika",
  timeZoneLabel: "Tydsone",
  timeZonePlaceholder: "bv., SAST (UTC+2)",
  timeZoneTooltip: "Jou plaaslike tydsone help ons om met jou te koördineer.",
  openToRemoteLabel: "Is jy oop vir afgeleë werk?",
  willingToRelocateLabel: "Is jy bereid om te verhuis?",
  earliestStartDateLabel: "Vroegste Moontlike Begindatum",
  mobilitySection: "Mobiliteit",
  hasDriversLicenseLabel: "Het jy ’n bestuurderslisensie?",
  ownsCarLabel: "Besit jy ’n motor?",
  qualificationsSection: "Jou Kwalifikasies",
  certificationsSection: "Jou Sertifikate",
  uploadCertificationsLabel: "Laai Sertifikate Op (opsioneel/meervoudige lêers)",
  uploadCVLabel: "Laai CV Op",
  highestDegreeLabel: "Hoogste Graad Behaal",
  highestDegreePlaceholder: "Kies jou hoogste graad",
  degrees: ["Hoërskool", "Diploma", "Baccalaureus", "Meesters", "Doktorsgraad", "Ander"],
  fieldOfStudyLabel: "Studierigting",
  fieldOfStudyPlaceholder: "bv., Rekenaarwetenskap",
  additionalCertificationsLabel: "Bykomende Sertifikate/Kwalifikasies",
  additionalCertificationsPlaceholder: "bv., AWS Gesertifiseer, PMP",
  workExperienceSection: "Jou Werkservaring",
  currentPositionLabel: "Huidige/Laaste Posisie",
  currentPositionPlaceholder: "bv., Sagteware-ingenieur",
  currentCompanyLabel: "Huidige/Laaste Maatskappy",
  currentCompanyPlaceholder: "bv., TechCorp",
  previousExperienceLabel: "Vorige Werkgewers & Werkservaring",
  previousExperiencePlaceholder: "Lys jou vorige rolle en sleutelverantwoordelikhede",
  yearsOfExperienceLabel: "Jare Werkservaring",
  yearsOfExperiencePlaceholder: "Kies jou ervaringreeks",
  yearsOptions: ["0-1", "1-3", "3-5", "5-10", "10+"],
  lastCompanyStartDateLabel: "Laaste Maatskappy Begindatum",
  lastCompanyEndDateLabel: "Laaste Maatskappy Einddatum",
  applyingForPositionLabel: "Vir watter posisie doen jy aansoek?",
  applyingForPositionPlaceholder: "Kies ’n posisie",
  positions: [
    "Sagteware-ingenieur",
    "Verkoopsassistent",
    "Telekommunikasie Spesialis",
    "Sosiale Bemarkingsprofessionele",
    "Soekenjin Bemarking",
    "Besigheidsanalis",
    "Voor-end Ontwikkelaar",
    "Agter-end Ontwikkelaar",
    "IT Projekbestuurder",
    "Stelseladministrateur",
    "Ander"
  ],
  expertiseRatingLabel: "Hoe beoordeel jy jou kundigheid in hierdie domein?",
  expertiseRatingPlaceholder: "Kies jou kundigheidsvlak",
  expertiseOptions: [
    "1-3 (Toegangsvlak/Nuuskierig)",
    "4-6 (Intermediêr)",
    "7-9 (Professioneel)",
    "10 (Kundige/100% Professioneel)"
  ],
  preferencesSection: "Jou Voorkeure",
  expectedSalaryLabel: "Verwagte Salaris",
  expectedSalaryPlaceholder: "bv., 50000",
  salaryCurrencyLabel: "Geldeenheid",
  salaryCurrencyPlaceholder: "Kies jou geldeenheid",
  currencies: ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "ZAR", "Ander"],
  paymentMethodLabel: "Voorkeur Betalingsmetode",
  paymentMethodPlaceholder: "Kies betalingsmetode",
  paymentMethods: ["Bankoorplasing", "Kriptogeldeenheid"],
  paymentSystemLabel: "Betalingsstelsel",
  paymentSystemPlaceholder: "Kies betalingsstelsel",
  paymentSystems: ["SEPA", "ACH", "Faster Payments", "SWIFT", "NACH", "BACS", "BECS"],
  bankIBANLabel: "IBAN",
  bankIBANPlaceholder: "bv., ZA12345678901234567890",
  bankIBANTooltip: "Vereis vir SEPA en SWIFT betalings.",
  bankBICLabel: "BIC/SWIFT Kode",
  bankBICPlaceholder: "bv., SBZAZAJJ",
  bankBICTooltip: "Vereis vir SWIFT betalings, opsioneel vir SEPA.",
  bankAccountNumberLabel: "Bankrekeningnommer",
  bankAccountNumberPlaceholder: "bv., 1234567890",
  bankRoutingNumberLabel: "Roetenommer",
  bankRoutingNumberPlaceholder: "bv., 021000021",
  bankSortCodeLabel: "Sorteerkode",
  bankSortCodePlaceholder: "bv., 12-34-56",
  cryptoAddressLabel: "Kriptogeldeenheid Adres",
  cryptoAddressPlaceholder: "bv., 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa (Bitcoin)",
  selfDevelopmentSection: "Jou Groeimentaliteit",
  willingToTrainLabel: "Is jy bereid om tyd in opleiding te belê?",
  trainingHoursLabel: "Hoeveel ure per week kan jy aan professionele ontwikkeling en die leer van nuwe vaardighede bestee?",
  trainingHoursPlaceholder: "Kies ure per week",
  trainingHoursOptions: ["0-5", "5-10", "10-15", "15-20", "20+"],
  selfImprovementLabel: "Hoe bly jy op datum in jou veld?",
  selfImprovementPlaceholder: "bv., Aanlyn kursusse, lees van tydskrifte",
  characterSection: "Oor Jou Werkstyl",
  colleagueDescriptionLabel: "Hoe sou kollegas jou in drie woorde beskryf?",
  colleagueDescriptionPlaceholder: "bv., Betroubaar, Kreatief, Spanlid",
  stressHandlingLabel: "Hoe hanteer jy stres?",
  stressHandlingPlaceholder: "bv., Ek prioritiseer take en neem pouses",
  criticismResponseLabel: "Hoe reageer jy op kritiek?",
  criticismResponsePlaceholder: "bv., Ek luister en verbeter",
  motivationLabel: "Wat motiveer jou die meeste?",
  motivationPlaceholder: "Kies ’n opsie",
  motivations: ["Groei", "Impak", "Spanwerk", "Vergoeding", "Innovasie", "Ander"],
  mistakeHandlingLabel: "Hoe hanteer jy foute in ’n span?",
  mistakeHandlingPlaceholder: "bv., Ek erken dit en werk saam aan oplossings",
  legalSection: "Finale Ooreenkomste",
  freelancerConsentLabel: "Ek bevestig dat ek as ’n onafhanklike vryskut sal werk en die volle verantwoordelikheid neem vir die bestuur van my eie belasting, wetlike verpligtinge en nakoming van alle toepaslike regulasies. Ek erken dat geen diensverhouding geskep word nie en dat ek alleen verantwoordelik is vir die nakoming van enige finansiële of kontrakverpligtinge wat verband hou met my vryskutwerk.",
  privacyConsentLabel: "Ek het die Privaatheidsbeleid (Kyk na ons DATA BESKERMING) gelees en ten volle verstaan. Ek gee my uitdruklike toestemming vir die insameling, verwerking en berging van my persoonlike data in ooreenstemming met toepaslike databeskermingswette. Ek verstaan dat my data gebruik kan word vir verifikasie-doeleindes, sekuriteitskontroles en professionele kommunikasie, en ek behou die reg om my data te toegang, te wysig of te versoek om dit te verwyder soos uiteengesit in die beleid.",
  privacyPolicyLink: "Privaatheidsbeleid",
  accuracyConsentLabel: "Ek sertifiseer dat alle inligting wat verskaf is akkuraat, volledig en waarheidsgetrou is na die beste van my wete. Ek verstaan dat die verskaffing van valse of misleidende inligting kan lei tot diskwalifikasie, beëindiging van enige ooreenkomste of wetlike gevolge. Ek aanvaar volle verantwoordelikheid om my besonderhede op datum te hou en hul geldigheid te verseker.",
  previousButton: "Terug",
  nextButton: "Gaan Voort",
  submitButton: "Dien Aansoek In",
  yesNoOptions: ["Ja", "Nee"]
},
kr: {
  headerTitle: "우리 팀에 합류하세요",
  headerSubtitle: "시간을 들여 지원하세요 – 당신에 대해 더 알고 싶습니다!",
  steps: ["개인 및 연락처 세부 정보", "자격 및 경험", "선호도, 통찰력 및 법적 사항"],
  personalSection: "당신에 대해 알려주세요",
  salutationLabel: "인사",
  salutationPlaceholder: "선택",
  salutationOptions: ["Mr.", "Ms.", "기타"],
  firstNameLabel: "이름",
  firstNamePlaceholder: "예: 민수",
  lastNameLabel: "성",
  lastNamePlaceholder: "예: 김",
  dateOfBirthLabel: "생년월일",
  nationalityLabel: "국적",
  nationalityPlaceholder: "예: 대한민국",
  addressStreetLabel: "도로명 주소",
  addressStreetPlaceholder: "예: 강남대로 123",
  addressCityLabel: "도시",
  addressCityPlaceholder: "예: 서울",
  addressCountryLabel: "국가",
  addressCountryPlaceholder: "예: 대한민국",
  addressPostalCodeLabel: "우편번호",
  addressPostalCodePlaceholder: "예: 06123",
  emailLabel: "이메일 주소",
  emailPlaceholder: "예: minsoo.kim@example.com",
  phoneLabel: "전화번호",
  phonePlaceholder: "예: +82 10-1234-5678",
  messengerLabel: "선호 메신저",
  messengerPlaceholder: "메신저 선택",
  messengers: [
    "WhatsApp", "Telegram", "Signal", "WeChat", "Skype", "LinkedIn", "Facebook Messenger",
    "Viber", "Line", "Discord", "Slack", "Microsoft Teams", "기타"
  ],
  messengerContactLabel: "메신저 연락처",
  messengerContactPlaceholders: {
    WhatsApp: "예: +82 10-1234-5678",
    Telegram: "예: @username",
    Signal: "예: +82 10-1234-5678",
    WeChat: "예: WeChat ID",
    Skype: "예: live:username",
    LinkedIn: "예: linkedin.com/in/username",
    "Facebook Messenger": "예: facebook.com/username",
    Viber: "예: +82 10-1234-5678",
    Line: "예: Line ID",
    Discord: "예: username#1234",
    Slack: "예: 이메일 또는 워크스페이스 URL",
    "Microsoft Teams": "예: 이메일",
    기타: "예: ID 또는 번호",
    "": "메신저 ID/번호를 입력하세요"
  },
  availabilitySection: "당신의 가용성",
  countryOfResidenceLabel: "거주 국가",
  countryOfResidencePlaceholder: "예: 대한민국",
  timeZoneLabel: "시간대",
  timeZonePlaceholder: "예: KST (UTC+9)",
  timeZoneTooltip: "당신의 현지 시간대는 우리와의 조정을 돕습니다.",
  openToRemoteLabel: "원격 근무에 열려 있나요?",
  willingToRelocateLabel: "이주할 의향이 있나요?",
  earliestStartDateLabel: "가장 빠른 시작 가능 날짜",
  mobilitySection: "이동성",
  hasDriversLicenseLabel: "운전면허증이 있나요?",
  ownsCarLabel: "차량을 소유하고 있나요?",
  qualificationsSection: "당신의 자격",
  certificationsSection: "당신의 인증서",
  uploadCertificationsLabel: "인증서 업로드 (선택 사항/다중 파일)",
  uploadCVLabel: "이력서 업로드",
  highestDegreeLabel: "최고 학위",
  highestDegreePlaceholder: "최고 학위를 선택하세요",
  degrees: ["고등학교", "전문학사", "학사", "석사", "박사", "기타"],
  fieldOfStudyLabel: "전공 분야",
  fieldOfStudyPlaceholder: "예: 컴퓨터 과학",
  additionalCertificationsLabel: "추가 인증서/자격",
  additionalCertificationsPlaceholder: "예: AWS 인증, PMP",
  workExperienceSection: "당신의 업무 경험",
  currentPositionLabel: "현재/마지막 직책",
  currentPositionPlaceholder: "예: 소프트웨어 엔지니어",
  currentCompanyLabel: "현재/마지막 회사",
  currentCompanyPlaceholder: "예: TechCorp",
  previousExperienceLabel: "이전 고용주 및 업무 경험",
  previousExperiencePlaceholder: "이전 역할과 주요 책임을 나열하세요",
  yearsOfExperienceLabel: "업무 경험 연수",
  yearsOfExperiencePlaceholder: "경험 범위를 선택하세요",
  yearsOptions: ["0-1", "1-3", "3-5", "5-10", "10+"],
  lastCompanyStartDateLabel: "마지막 회사 시작 날짜",
  lastCompanyEndDateLabel: "마지막 회사 종료 날짜",
  applyingForPositionLabel: "어떤 직책에 지원하시겠습니까?",
  applyingForPositionPlaceholder: "직책을 선택하세요",
  positions: [
    "소프트웨어 엔지니어",
    "판매 보조",
    "통신 전문가",
    "소셜 마케팅 전문가",
    "검색 엔진 마케팅",
    "비즈니스 분석가",
    "프론트엔드 개발자",
    "백엔드 개발자",
    "IT 프로젝트 매니저",
    "시스템 관리자",
    "기타"
  ],
  expertiseRatingLabel: "이 분야에서 당신의 전문성을 어떻게 평가하시겠습니까?",
  expertiseRatingPlaceholder: "전문성 수준을 선택하세요",
  expertiseOptions: [
    "1-3 (입문/신입)",
    "4-6 (중급)",
    "7-9 (전문가)",
    "10 (전문가/100% 전문가)"
  ],
  preferencesSection: "당신의 선호도",
  expectedSalaryLabel: "희망 연봉",
  expectedSalaryPlaceholder: "예: 50000",
  salaryCurrencyLabel: "통화",
  salaryCurrencyPlaceholder: "통화를 선택하세요",
  currencies: ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "KRW", "기타"],
  paymentMethodLabel: "선호 결제 방법",
  paymentMethodPlaceholder: "결제 방법을 선택하세요",
  paymentMethods: ["은행 송금", "암호화폐"],
  paymentSystemLabel: "결제 시스템",
  paymentSystemPlaceholder: "결제 시스템을 선택하세요",
  paymentSystems: ["SEPA", "ACH", "Faster Payments", "SWIFT", "NACH", "BACS", "BECS"],
  bankIBANLabel: "IBAN",
  bankIBANPlaceholder: "예: KR12345678901234567890",
  bankIBANTooltip: "SEPA 및 SWIFT 결제에 필요합니다.",
  bankBICLabel: "BIC/SWIFT 코드",
  bankBICPlaceholder: "예: HVBKKRSE",
  bankBICTooltip: "SWIFT 결제에 필요하며, SEPA는 선택 사항입니다.",
  bankAccountNumberLabel: "은행 계좌 번호",
  bankAccountNumberPlaceholder: "예: 1234567890",
  bankRoutingNumberLabel: "라우팅 번호",
  bankRoutingNumberPlaceholder: "예: 021000021",
  bankSortCodeLabel: "정렬 코드",
  bankSortCodePlaceholder: "예: 12-34-56",
  cryptoAddressLabel: "암호화폐 주소",
  cryptoAddressPlaceholder: "예: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa (비트코인)",
  selfDevelopmentSection: "당신의 성장 마인드셋",
  willingToTrainLabel: "훈련에 시간을 투자할 의향이 있나요?",
  trainingHoursLabel: "주당 몇 시간을 전문성 개발과 새로운 기술 학습에 할애할 수 있나요?",
  trainingHoursPlaceholder: "주당 시간을 선택하세요",
  trainingHoursOptions: ["0-5", "5-10", "10-15", "15-20", "20+"],
  selfImprovementLabel: "당신의 분야에서 어떻게 최신 정보를 유지하나요?",
  selfImprovementPlaceholder: "예: 온라인 강의, 저널 읽기",
  characterSection: "당신의 업무 스타일에 대해",
  colleagueDescriptionLabel: "동료들이 당신을 세 단어로 어떻게 묘사할까요?",
  colleagueDescriptionPlaceholder: "예: 신뢰할 수 있는, 창의적인, 팀 플레이어",
  stressHandlingLabel: "스트레스를 어떻게 다루나요?",
  stressHandlingPlaceholder: "예: 업무 우선순위를 정하고 휴식을 취합니다",
  criticismResponseLabel: "비판에 어떻게 반응하나요?",
  criticismResponsePlaceholder: "예: 경청하고 개선합니다",
  motivationLabel: "당신을 가장 동기부여하는 것은 무엇인가요?",
  motivationPlaceholder: "옵션을 선택하세요",
  motivations: ["성장", "영향", "팀워크", "보상", "혁신", "기타"],
  mistakeHandlingLabel: "팀에서 실수를 어떻게 처리하나요?",
  mistakeHandlingPlaceholder: "예: 실수를 인정하고 해결책을 협력합니다",
  legalSection: "최종 동의",
  freelancerConsentLabel: "저는 독립 프리랜서로 일할 것이며, 제 세금, 법적 의무 및 모든 적용 가능한 규정을 준수할 전적인 책임을 질 것을 확인합니다. 고용 관계가 생성되지 않음을 인정하며, 제 프리랜서 작업과 관련된 재정적 또는 계약적 의무를 이행할 유일한 책임은 저에게 있음을 인정합니다.",
  privacyConsentLabel: "저는 개인정보 보호정책(데이터 보호 확인)을 읽고 완전히 이해했습니다. 관련 데이터 보호법에 따라 제 개인 데이터의 수집, 처리 및 저장에 명시적으로 동의합니다. 제 데이터가 인증, 보안 점검 및 전문적인 소통을 위해 사용될 수 있음을 이해하며, 정책에 명시된 대로 제 데이터에 접근, 수정 또는 삭제를 요청할 권리를 보유합니다.",
  privacyPolicyLink: "개인정보 보호정책",
  accuracyConsentLabel: "저는 제공된 모든 정보가 제 지식 내에서 정확하고 완전하며 사실임을 증명합니다. 거짓 또는 오해의 소지가 있는 정보를 제공하면 자격 박탈, 계약 종료 또는 법적 결과로 이어질 수 있음을 이해합니다. 제 세부 정보를 최신 상태로 유지하고 그 유효성을 보장할 전적인 책임을 수락합니다.",
  previousButton: "뒤로",
  nextButton: "계속",
  submitButton: "지원서 제출",
  yesNoOptions: ["예", "아니오"]
},
jp: {
  headerTitle: "私たちのチームに参加する",
  headerSubtitle: "時間をかけて応募してください – あなたについてもっと知りたいです！",
  steps: ["個人および連絡先詳細", "資格と経験", "好み、洞察、法的事項"],
  personalSection: "あなたについて教えてください",
  salutationLabel: "敬称",
  salutationPlaceholder: "選択",
  salutationOptions: ["様", "さん", "その他"],
  firstNameLabel: "名前",
  firstNamePlaceholder: "例: 太郎",
  lastNameLabel: "姓",
  lastNamePlaceholder: "例: 山田",
  dateOfBirthLabel: "生年月日",
  nationalityLabel: "国籍",
  nationalityPlaceholder: "例: 日本",
  addressStreetLabel: "住所",
  addressStreetPlaceholder: "例: 新宿区新宿1-2-3",
  addressCityLabel: "都市",
  addressCityPlaceholder: "例: 東京",
  addressCountryLabel: "国",
  addressCountryPlaceholder: "例: 日本",
  addressPostalCodeLabel: "郵便番号",
  addressPostalCodePlaceholder: "例: 160-0022",
  emailLabel: "メールアドレス",
  emailPlaceholder: "例: taro.yamada@example.com",
  phoneLabel: "電話番号",
  phonePlaceholder: "例: +81 3-1234-5678",
  messengerLabel: "優先メッセンジャー",
  messengerPlaceholder: "メッセンジャーを選択",
  messengers: [
    "WhatsApp", "Telegram", "Signal", "WeChat", "Skype", "LinkedIn", "Facebook Messenger",
    "Viber", "Line", "Discord", "Slack", "Microsoft Teams", "その他"
  ],
  messengerContactLabel: "メッセンジャー連絡先",
  messengerContactPlaceholders: {
    WhatsApp: "例: +81 3-1234-5678",
    Telegram: "例: @username",
    Signal: "例: +81 3-1234-5678",
    WeChat: "例: WeChat ID",
    Skype: "例: live:username",
    LinkedIn: "例: linkedin.com/in/username",
    "Facebook Messenger": "例: facebook.com/username",
    Viber: "例: +81 3-1234-5678",
    Line: "例: Line ID",
    Discord: "例: username#1234",
    Slack: "例: メールまたはワークスペースURL",
    "Microsoft Teams": "例: メール",
    その他: "例: IDまたは番号",
    "": "メッセンジャーID/番号を入力してください"
  },
  availabilitySection: "あなたの利用可能性",
  countryOfResidenceLabel: "居住国",
  countryOfResidencePlaceholder: "例: 日本",
  timeZoneLabel: "タイムゾーン",
  timeZonePlaceholder: "例: JST (UTC+9)",
  timeZoneTooltip: "あなたの現地タイムゾーンは私たちと調整するのに役立ちます。",
  openToRemoteLabel: "リモートワークにオープンですか？",
  willingToRelocateLabel: "引っ越しする意思はありますか？",
  earliestStartDateLabel: "最も早い開始可能日",
  mobilitySection: "移動性",
  hasDriversLicenseLabel: "運転免許証を持っていますか？",
  ownsCarLabel: "車を所有していますか？",
  qualificationsSection: "あなたの資格",
  certificationsSection: "あなたの証明書",
  uploadCertificationsLabel: "証明書をアップロード（任意/複数ファイル）",
  uploadCVLabel: "履歴書をアップロード",
  highestDegreeLabel: "最高学位",
  highestDegreePlaceholder: "あなたの最高学位を選択してください",
  degrees: ["高校", "短期大学", "学士", "修士", "博士", "その他"],
  fieldOfStudyLabel: "研究分野",
  fieldOfStudyPlaceholder: "例: コンピュータ科学",
  additionalCertificationsLabel: "追加の証明書/資格",
  additionalCertificationsPlaceholder: "例: AWS認定、PMP",
  workExperienceSection: "あなたの職務経験",
  currentPositionLabel: "現在の/最後の職位",
  currentPositionPlaceholder: "例: ソフトウェアエンジニア",
  currentCompanyLabel: "現在の/最後の会社",
  currentCompanyPlaceholder: "例: TechCorp",
  previousExperienceLabel: "以前の雇用主と職務経験",
  previousExperiencePlaceholder: "以前の役割と主要な責任を列挙してください",
  yearsOfExperienceLabel: "職務経験年数",
  yearsOfExperiencePlaceholder: "あなたの経験範囲を選択してください",
  yearsOptions: ["0-1", "1-3", "3-5", "5-10", "10+"],
  lastCompanyStartDateLabel: "最後の会社開始日",
  lastCompanyEndDateLabel: "最後の会社終了日",
  applyingForPositionLabel: "どのポジションに応募しますか？",
  applyingForPositionPlaceholder: "ポジションを選択してください",
  positions: [
    "ソフトウェアエンジニア",
    "営業アシスタント",
    "通信専門家",
    "ソーシャルマーケティング専門家",
    "検索エンジンマーケティング",
    "ビジネスアナリスト",
    "フロントエンド開発者",
    "バックエンド開発者",
    "ITプロジェクトマネージャー",
    "システム管理者",
    "その他"
  ],
  expertiseRatingLabel: "この分野でのあなたの専門性をどのように評価しますか？",
  expertiseRatingPlaceholder: "あなたの専門レベルを選択してください",
  expertiseOptions: [
    "1-3 (初心者/新入)",
    "4-6 (中級)",
    "7-9 (プロフェッショナル)",
    "10 (エキスパート/100%プロフェッショナル)"
  ],
  preferencesSection: "あなたの好み",
  expectedSalaryLabel: "希望給与",
  expectedSalaryPlaceholder: "例: 50000",
  salaryCurrencyLabel: "通貨",
  salaryCurrencyPlaceholder: "あなたの通貨を選択してください",
  currencies: ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "CNY", "INR", "その他"],
  paymentMethodLabel: "優先支払方法",
  paymentMethodPlaceholder: "支払方法を選択してください",
  paymentMethods: ["銀行振込", "暗号通貨"],
  paymentSystemLabel: "支払システム",
  paymentSystemPlaceholder: "支払システムを選択してください",
  paymentSystems: ["SEPA", "ACH", "Faster Payments", "SWIFT", "NACH", "BACS", "BECS"],
  bankIBANLabel: "IBAN",
  bankIBANPlaceholder: "例: JP12345678901234567890",
  bankIBANTooltip: "SEPAおよびSWIFT支払いに必要です。",
  bankBICLabel: "BIC/SWIFTコード",
  bankBICPlaceholder: "例: SMBCJPJT",
  bankBICTooltip: "SWIFT支払いに必要で、SEPAは任意です。",
  bankAccountNumberLabel: "銀行口座番号",
  bankAccountNumberPlaceholder: "例: 1234567890",
  bankRoutingNumberLabel: "ルーティング番号",
  bankRoutingNumberPlaceholder: "例: 021000021",
  bankSortCodeLabel: "ソートコード",
  bankSortCodePlaceholder: "例: 12-34-56",
  cryptoAddressLabel: "暗号通貨アドレス",
  cryptoAddressPlaceholder: "例: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa (ビットコイン)",
  selfDevelopmentSection: "あなたの成長マインドセット",
  willingToTrainLabel: "トレーニングに時間を投資する意思がありますか？",
  trainingHoursLabel: "週に何時間、専門性の開発や新しいスキルの学習に費やせますか？",
  trainingHoursPlaceholder: "週の時間を選択してください",
  trainingHoursOptions: ["0-5", "5-10", "10-15", "15-20", "20+"],
  selfImprovementLabel: "あなたの分野でどのように最新情報を保ちますか？",
  selfImprovementPlaceholder: "例: オンラインコース、ジャーナル読書",
  characterSection: "あなたの仕事スタイルについて",
  colleagueDescriptionLabel: "同僚があなたを3つの言葉でどう表現しますか？",
  colleagueDescriptionPlaceholder: "例: 信頼できる、創造的、チームプレーヤー",
  stressHandlingLabel: "ストレスをどう扱いますか？",
  stressHandlingPlaceholder: "例: タスクを優先し、休憩を取ります",
  criticismResponseLabel: "批判にどう対応しますか？",
  criticismResponsePlaceholder: "例: 聞き、改善します",
  motivationLabel: "あなたを最も動機づけるものは何ですか？",
  motivationPlaceholder: "オプションを選択してください",
  motivations: ["成長", "影響", "チームワーク", "報酬", "革新", "その他"],
  mistakeHandlingLabel: "チームでのミスをどう扱いますか？",
  mistakeHandlingPlaceholder: "例: ミスを認め、解決策を協力します",
  legalSection: "最終合意",
  freelancerConsentLabel: "私は独立したフリーランサーとして働くことを確認し、自身の税金、法的義務、および適用されるすべての規制の遵守について全責任を負います。私は雇用関係が作成されないことを認め、私のフリーランス業務に関連するあらゆる財務的または契約上の義務を果たす唯一の責任者であることを認めます。",
  privacyConsentLabel: "私はプライバシーポリシー（データ保護を確認してください）を読み、完全に理解しました。関連するデータ保護法に従って、私の個人データの収集、処理、保存に明示的に同意します。私のデータが検証目的、セキュリティチェック、専門的コミュニケーションに使用される可能性があることを理解し、ポリシーに記載されている通り、私のデータにアクセス、修正、または削除を要求する権利を保持します。",
  privacyPolicyLink: "プライバシーポリシー",
  accuracyConsentLabel: "私は提供されたすべての情報が私の知る限り正確で完全かつ真実であることを証明します。虚偽または誤解を招く情報を提供することが、資格剥奪、契約の終了、または法的結果につながる可能性があることを理解します。私は詳細を最新に保ち、その有効性を確保する全責任を受け入れます。",
  previousButton: "戻る",
  nextButton: "続ける",
  submitButton: "応募書類を提出",
  yesNoOptions: ["はい", "いいえ"]
}
};
const RecruitingForm: React.FC<RecruitingFormProps> = ({ language = 'en' }) => {
  const [formData, setFormData] = useState<FormData>({
    salutation: '', firstName: '', lastName: '', dateOfBirth: '', nationality: '',
    addressStreet: '', addressCity: '', addressCountry: '', addressPostalCode: '',
    email: '', phone: '', messenger: '', messengerContact: '',
    countryOfResidence: '', timeZone: '', openToRemote: '', willingToRelocate: '', earliestStartDate: '',
    hasDriversLicense: '', ownsCar: '',
    highestDegree: '', fieldOfStudy: '', additionalCertifications: '',
    currentPosition: '', currentCompany: '', previousExperience: '', yearsOfExperience: '',
    lastCompanyStartDate: '', lastCompanyEndDate: '',
    applyingForPosition: '',
    expertiseRating: '',
    expectedSalary: '', salaryCurrency: '',
    paymentMethod: '',
    paymentSystem: '',
    bankIBAN: '', bankBIC: '',
    bankAccountNumber: '', bankRoutingNumber: '', bankSortCode: '',
    cryptoAddress: '',
    willingToTrain: '', trainingHours: '',
    selfImprovement: '',
    colleagueDescription: '', stressHandling: '', criticismResponse: '', motivation: '', mistakeHandling: '',
    certifications: null,
    cv: null,
    freelancerConsent: false, privacyConsent: false, accuracyConsent: false,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const translations = TRANSLATIONS[language] || TRANSLATIONS['en'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files) {
      setFormData(prev => ({
        ...prev,
        [name]: name === 'certifications' ? files : files[0],
      }));
    }
  };

  const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const handlePrevious = () => setCurrentStep(prev => Math.max(prev - 1, 1));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  const StepIndicator = () => (
    <div className="mb-8">
      <div className="flex justify-between">
        {translations.steps.map((step, index) => (
          <div key={index} className="flex-1 text-center">
            <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${currentStep === index + 1 ? 'bg-[#FFFFFF] text-gray-900' : 'bg-gray-700 text-gray-300'} ${index + 1 < currentStep ? 'bg-[#0B111F]/50' : ''}`}>
              {index + 1}
            </div>
            <p className={`mt-2 text-sm ${currentStep === index + 1 ? 'text-[#FFFFFF]' : 'text-gray-400'}`}>{step}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 h-2 bg-white rounded-full">
        <div className="h-full bg-[#DD0000] rounded-full transition-all duration-300" style={{ width: `${(currentStep / 3) * 100}%` }}></div>
      </div>
    </div>
  );
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto mt-10 mb-10">
        <form onSubmit={handleSubmit} className="space-y-8 bg-[#0B111F] p-8 rounded-2xl backdrop-blur-sm border border-[#0B111F]/10">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-[#FFFFFF] mb-4">{translations.headerTitle}</h2>
            <p className="text-gray-400">{translations.headerSubtitle}</p>
          </div>

          {/* Step Indicator */}
          <StepIndicator />

          {/* Step 1: Personal & Contact Details */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-[#FFFFFF] text-xl font-semibold border-b border-[#0B111F]/20 pb-2">{translations.personalSection}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{translations.salutationLabel} <span className="text-[#FFFFFF]">*</span></label>
                  <select
                    name="salutation"
                    value={formData.salutation}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 px-4 text-gray-200 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                  >
                    <option value="">{translations.salutationPlaceholder}</option>
                    {translations.salutationOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{translations.firstNameLabel} <span className="text-[#FFFFFF]">*</span></label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      placeholder={translations.firstNamePlaceholder}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{translations.lastNameLabel} <span className="text-[#FFFFFF]">*</span></label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      placeholder={translations.lastNamePlaceholder}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{translations.nationalityLabel} <span className="text-[#FFFFFF]">*</span></label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    <input
                      type="text"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      placeholder={translations.nationalityPlaceholder}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{translations.dateOfBirthLabel} <span className="text-[#FFFFFF]">*</span></label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{translations.countryOfResidenceLabel} <span className="text-[#FFFFFF]">*</span></label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    <input
                      type="text"
                      name="countryOfResidence"
                      value={formData.countryOfResidence}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      placeholder={translations.countryOfResidencePlaceholder}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{translations.timeZoneLabel} <span className="text-[#FFFFFF]">*</span></label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    <input
                      type="text"
                      name="timeZone"
                      value={formData.timeZone}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      placeholder={translations.timeZonePlaceholder}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{translations.addressStreetLabel} <span className="text-[#FFFFFF]">*</span></label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    <input
                      type="text"
                      name="addressStreet"
                      value={formData.addressStreet}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      placeholder={translations.addressStreetPlaceholder}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{translations.addressPostalCodeLabel} <span className="text-[#FFFFFF]">*</span></label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    <input
                      type="text"
                      name="addressPostalCode"
                      value={formData.addressPostalCode}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      placeholder={translations.addressPostalCodePlaceholder}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{translations.addressCityLabel} <span className="text-[#FFFFFF]">*</span></label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    <input
                      type="text"
                      name="addressCity"
                      value={formData.addressCity}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      placeholder={translations.addressCityPlaceholder}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{translations.phoneLabel} <span className="text-[#FFFFFF]">*</span></label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      placeholder={translations.phonePlaceholder}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{translations.emailLabel} <span className="text-[#FFFFFF]">*</span></label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      placeholder={translations.emailPlaceholder}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{translations.messengerLabel}</label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    <select
                      name="messenger"
                      value={formData.messenger}
                      onChange={handleChange}
                      className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-10 text-gray-200 appearance-none focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                    >
                      <option value="">{translations.messengerPlaceholder}</option>
                      {translations.messengers.map(messenger => (
                        <option key={messenger} value={messenger}>{messenger}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{translations.messengerContactLabel}</label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    <input
                      type="text"
                      name="messengerContact"
                      value={formData.messengerContact}
                      onChange={handleChange}
                      className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      placeholder={translations.messengerContactPlaceholders[formData.messenger] || translations.messengerContactPlaceholders[""]}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{translations.openToRemoteLabel} <span className="text-[#FFFFFF]">*</span></label>
                  <div className="relative">
                    <select
                      name="openToRemote"
                      value={formData.openToRemote}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-4 pr-10 text-gray-200 appearance-none focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                    >
                      <option value="">{translations.yesNoOptions[0] + " or " + translations.yesNoOptions[1]}</option>
                      {translations.yesNoOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{translations.earliestStartDateLabel} <span className="text-[#FFFFFF]">*</span></label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    <input
                      type="date"
                      name="earliestStartDate"
                      value={formData.earliestStartDate}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Qualifications & Experience */}
          {currentStep === 2 && (
            <>
              <div className="space-y-6">
                <h3 className="text-[#FFFFFF] text-xl font-semibold border-b border-[#0B111F]/20 pb-2">{translations.qualificationsSection}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{translations.applyingForPositionLabel} <span className="text-[#FFFFFF]">*</span></label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                      <select
                        name="applyingForPosition"
                        value={formData.applyingForPosition}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-10 text-gray-200 appearance-none focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      >
                        <option value="">{translations.applyingForPositionPlaceholder}</option>
                        {translations.positions.map(position => (
                          <option key={position} value={position}>{position}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{translations.expertiseRatingLabel} <span className="text-[#FFFFFF]">*</span></label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                      <select
                        name="expertiseRating"
                        value={formData.expertiseRating}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-10 text-gray-200 appearance-none focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      >
                        <option value="">{translations.expertiseRatingPlaceholder}</option>
                        {translations.expertiseOptions.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{translations.highestDegreeLabel} <span className="text-[#FFFFFF]">*</span></label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                      <select
                        name="highestDegree"
                        value={formData.highestDegree}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-10 text-gray-200 appearance-none focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      >
                        <option value="">{translations.highestDegreePlaceholder}</option>
                        {translations.degrees.map(degree => (
                          <option key={degree} value={degree}>{degree}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{translations.fieldOfStudyLabel}</label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                      <input
                        type="text"
                        name="fieldOfStudy"
                        value={formData.fieldOfStudy}
                        onChange={handleChange}
                        className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                        placeholder={translations.fieldOfStudyPlaceholder}
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">{translations.additionalCertificationsLabel}</label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-3 h-5 w-5 text-[#FFFFFF]" />
                      <textarea
                        name="additionalCertifications"
                        value={formData.additionalCertifications}
                        onChange={handleChange}
                        rows={3}
                        className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none resize-y"
                        placeholder={translations.additionalCertificationsPlaceholder}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-[#FFFFFF] text-xl font-semibold border-b border-[#0B111F]/20 pb-2">{translations.workExperienceSection}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{translations.currentPositionLabel} <span className="text-[#FFFFFF]">*</span></label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                      <input
                        type="text"
                        name="currentPosition"
                        value={formData.currentPosition}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                        placeholder={translations.currentPositionPlaceholder}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{translations.currentCompanyLabel} <span className="text-[#FFFFFF]">*</span></label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                      <input
                        type="text"
                        name="currentCompany"
                        value={formData.currentCompany}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                        placeholder={translations.currentCompanyPlaceholder}
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">{translations.previousExperienceLabel} <span className="text-[#FFFFFF]">*</span></label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-3 h-5 w-5 text-[#FFFFFF]" />
                      <textarea
                        name="previousExperience"
                        value={formData.previousExperience}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none resize-y"
                        placeholder={translations.previousExperiencePlaceholder}
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-300 mb-2">{translations.yearsOfExperienceLabel} <span className="text-[#FFFFFF]">*</span></label>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                          <select
                            name="yearsOfExperience"
                            value={formData.yearsOfExperience}
                            onChange={handleChange}
                            required
                            className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-10 text-gray-200 appearance-none focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                          >
                            <option value="">{translations.yearsOfExperiencePlaceholder}</option>
                            {translations.yearsOptions.map(year => (
                              <option key={year} value={year}>{year}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-300 mb-2">{translations.lastCompanyStartDateLabel}</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                          <input
                            type="date"
                            name="lastCompanyStartDate"
                            value={formData.lastCompanyStartDate}
                            onChange={handleChange}
                            className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-300 mb-2">{translations.lastCompanyEndDateLabel}</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                          <input
                            type="date"
                            name="lastCompanyEndDate"
                            value={formData.lastCompanyEndDate}
                            onChange={handleChange}
                            className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-[#FFFFFF] text-xl font-semibold border-b border-[#0B111F]/20 pb-2">{translations.certificationsSection}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{translations.uploadCertificationsLabel}</label>
                    <input
                      type="file"
                      name="certifications"
                      onChange={handleFileChange}
                      className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 px-4 text-gray-200 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      multiple
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{translations.uploadCVLabel} <span className="text-[#FFFFFF]">*</span></label>
                    <input
                      type="file"
                      name="cv"
                      onChange={handleFileChange}
                      required
                      className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 px-4 text-gray-200 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      accept=".pdf,.doc,.docx"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Step 3: Preferences, Insights & Legal */}
          {currentStep === 3 && (
            <>
              <div className="space-y-6">
                <h3 className="text-[#FFFFFF] text-xl font-semibold border-b border-[#0B111F]/20 pb-2">{translations.preferencesSection}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{translations.expectedSalaryLabel} <span className="text-[#FFFFFF]">*</span></label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                      <input
                        type="number"
                        name="expectedSalary"
                        value={formData.expectedSalary}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                        placeholder={translations.expectedSalaryPlaceholder}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{translations.salaryCurrencyLabel} <span className="text-[#FFFFFF]">*</span></label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                      <select
                        name="salaryCurrency"
                        value={formData.salaryCurrency}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-10 text-gray-200 appearance-none focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      >
                        <option value="">{translations.salaryCurrencyPlaceholder}</option>
                        {translations.currencies.map(currency => (
                          <option key={currency} value={currency}>{currency}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">{translations.paymentMethodLabel} <span className="text-[#FFFFFF]">*</span></label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                      <select
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-10 text-gray-200 appearance-none focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      >
                        <option value="">{translations.paymentMethodPlaceholder}</option>
                        {translations.paymentMethods.map(method => (
                          <option key={method} value={method}>{method}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    </div>
                  </div>
                  {formData.paymentMethod === translations.paymentMethods[0] && ( // "Bank Transfer" equivalent
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-300 mb-2">{translations.paymentSystemLabel} <span className="text-[#FFFFFF]">*</span></label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                        <select
                          name="paymentSystem"
                          value={formData.paymentSystem}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-10 text-gray-200 appearance-none focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                        >
                          <option value="">{translations.paymentSystemPlaceholder}</option>
                          {translations.paymentSystems.map(system => (
                            <option key={system} value={system}>{system}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                      </div>
                    </div>
                  )}
                  {formData.paymentMethod === translations.paymentMethods[0] && formData.paymentSystem && (
                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* SEPA: IBAN, optional BIC */}
                      {formData.paymentSystem === "SEPA" && (
                        <>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">{translations.bankIBANLabel} <span className="text-[#FFFFFF]">*</span></label>
                            <div className="relative">
                              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                              <input
                                type="text"
                                name="bankIBAN"
                                value={formData.bankIBAN}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                                placeholder={translations.bankIBANPlaceholder}
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">{translations.bankBICLabel}</label>
                            <div className="relative">
                              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                              <input
                                type="text"
                                name="bankBIC"
                                value={formData.bankBIC}
                                onChange={handleChange}
                                className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                                placeholder={translations.bankBICPlaceholder}
                              />
                            </div>
                          </div>
                        </>
                      )}
                      {/* ACH: Account Number, Routing Number */}
                      {formData.paymentSystem === "ACH" && (
                        <>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">{translations.bankAccountNumberLabel} <span className="text-[#FFFFFF]">*</span></label>
                            <div className="relative">
                              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                              <input
                                type="text"
                                name="bankAccountNumber"
                                value={formData.bankAccountNumber}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                                placeholder={translations.bankAccountNumberPlaceholder}
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">{translations.bankRoutingNumberLabel} <span className="text-[#FFFFFF]">*</span></label>
                            <div className="relative">
                              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                              <input
                                type="text"
                                name="bankRoutingNumber"
                                value={formData.bankRoutingNumber}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                                placeholder={translations.bankRoutingNumberPlaceholder}
                              />
                            </div>
                          </div>
                        </>
                      )}
                      {/* Faster Payments: Account Number, Sort Code */}
                      {formData.paymentSystem === "Faster Payments" && (
                        <>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">{translations.bankAccountNumberLabel} <span className="text-[#FFFFFF]">*</span></label>
                            <div className="relative">
                              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                              <input
                                type="text"
                                name="bankAccountNumber"
                                value={formData.bankAccountNumber}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                                placeholder={translations.bankAccountNumberPlaceholder}
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">{translations.bankSortCodeLabel} <span className="text-[#FFFFFF]">*</span></label>
                            <div className="relative">
                              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                              <input
                                type="text"
                                name="bankSortCode"
                                value={formData.bankSortCode}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                                placeholder={translations.bankSortCodePlaceholder}
                              />
                            </div>
                          </div>
                        </>
                      )}
                      {/* SWIFT: IBAN, BIC */}
                      {formData.paymentSystem === "SWIFT" && (
                        <>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">{translations.bankIBANLabel} <span className="text-[#FFFFFF]">*</span></label>
                            <div className="relative">
                              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                              <input
                                type="text"
                                name="bankIBAN"
                                value={formData.bankIBAN}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                                placeholder={translations.bankIBANPlaceholder}
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">{translations.bankBICLabel} <span className="text-[#FFFFFF]">*</span></label>
                            <div className="relative">
                              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                              <input
                                type="text"
                                name="bankBIC"
                                value={formData.bankBIC}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                                placeholder={translations.bankBICPlaceholder}
                              />
                            </div>
                          </div>
                        </>
                      )}
                      {/* NACH: Account Number */}
                      {formData.paymentSystem === "NACH" && (
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">{translations.bankAccountNumberLabel} <span className="text-[#FFFFFF]">*</span></label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                            <input
                              type="text"
                              name="bankAccountNumber"
                              value={formData.bankAccountNumber}
                              onChange={handleChange}
                              required
                              className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                              placeholder={translations.bankAccountNumberPlaceholder}
                            />
                          </div>
                        </div>
                      )}
                      {/* BACS: Account Number, Sort Code */}
                      {formData.paymentSystem === "BACS" && (
                        <>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">{translations.bankAccountNumberLabel} <span className="text-[#FFFFFF]">*</span></label>
                            <div className="relative">
                              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                              <input
                                type="text"
                                name="bankAccountNumber"
                                value={formData.bankAccountNumber}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                                placeholder={translations.bankAccountNumberPlaceholder}
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">{translations.bankSortCodeLabel} <span className="text-[#FFFFFF]">*</span></label>
                            <div className="relative">
                              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                              <input
                                type="text"
                                name="bankSortCode"
                                value={formData.bankSortCode}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                                placeholder={translations.bankSortCodePlaceholder}
                              />
                            </div>
                          </div>
                        </>
                      )}
                      {/* BECS: Account Number */}
                      {formData.paymentSystem === "BECS" && (
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">{translations.bankAccountNumberLabel} <span className="text-[#FFFFFF]">*</span></label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                            <input
                              type="text"
                              name="bankAccountNumber"
                              value={formData.bankAccountNumber}
                              onChange={handleChange}
                              required
                              className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                              placeholder={translations.bankAccountNumberPlaceholder}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  {formData.paymentMethod === translations.paymentMethods[1] && ( // "Cryptocurrency" equivalent
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-300 mb-2">{translations.cryptoAddressLabel} <span className="text-[#FFFFFF]">*</span></label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                        <input
                          type="text"
                          name="cryptoAddress"
                          value={formData.cryptoAddress}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                          placeholder={translations.cryptoAddressPlaceholder}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-[#FFFFFF] text-xl font-semibold border-b border-[#0B111F]/20 pb-2">{translations.selfDevelopmentSection}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{translations.willingToTrainLabel} <span className="text-[#FFFFFF]">*</span></label>
                    <div className="relative">
                      <select
                        name="willingToTrain"
                        value={formData.willingToTrain}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-4 pr-10 text-gray-200 appearance-none focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      >
                        <option value="">{translations.yesNoOptions[0] + " or " + translations.yesNoOptions[1]}</option>
                        {translations.yesNoOptions.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{translations.trainingHoursLabel} <span className="text-[#FFFFFF]">*</span></label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                      <select
                        name="trainingHours"
                        value={formData.trainingHours}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-10 text-gray-200 appearance-none focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      >
                        <option value="">{translations.trainingHoursPlaceholder}</option>
                        {translations.trainingHoursOptions.map(hours => (
                          <option key={hours} value={hours}>{hours}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">{translations.selfImprovementLabel}</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-[#FFFFFF]" />
                      <textarea
                        name="selfImprovement"
                        value={formData.selfImprovement}
                        onChange={handleChange}
                        rows={3}
                        className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none resize-y"
                        placeholder={translations.selfImprovementPlaceholder}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-[#FFFFFF] text-xl font-semibold border-b border-[#0B111F]/20 pb-2">{translations.characterSection}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{translations.colleagueDescriptionLabel} <span className="text-[#FFFFFF]">*</span></label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                      <input
                        type="text"
                        name="colleagueDescription"
                        value={formData.colleagueDescription}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                        placeholder={translations.colleagueDescriptionPlaceholder}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{translations.stressHandlingLabel} <span className="text-[#FFFFFF]">*</span></label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                      <input
                        type="text"
                        name="stressHandling"
                        value={formData.stressHandling}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                        placeholder={translations.stressHandlingPlaceholder}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{translations.criticismResponseLabel} <span className="text-[#FFFFFF]">*</span></label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                      <input
                        type="text"
                        name="criticismResponse"
                        value={formData.criticismResponse}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                        placeholder={translations.criticismResponsePlaceholder}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{translations.motivationLabel} <span className="text-[#FFFFFF]">*</span></label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                      <select
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-10 text-gray-200 appearance-none focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                      >
                        <option value="">{translations.motivationPlaceholder}</option>
                        {translations.motivations.map(motivation => (
                          <option key={motivation} value={motivation}>{motivation}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFFFFF]" />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">{translations.mistakeHandlingLabel} <span className="text-[#FFFFFF]">*</span></label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-[#FFFFFF]" />
                      <textarea
                        name="mistakeHandling"
                        value={formData.mistakeHandling}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full bg-[#121A2A] border border-gray-700 rounded-lg py-2.5 pl-12 pr-4 text-gray-200 placeholder-gray-500 focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none resize-y"
                        placeholder={translations.mistakeHandlingPlaceholder}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-[#FFFFFF] text-xl font-semibold border-b border-[#0B111F]/20 pb-2">{translations.legalSection}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="freelancerConsent"
                      checked={formData.freelancerConsent}
                      onChange={handleChange}
                      required
                      className="mt-1 h-4 w-4 rounded border-gray-700 bg-[#121A2A] text-[#FFFFFF] focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                    />
                    <label className="text-sm text-gray-300">{translations.freelancerConsentLabel}</label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="privacyConsent"
                      checked={formData.privacyConsent}
                      onChange={handleChange}
                      required
                      className="mt-1 h-4 w-4 rounded border-gray-700 bg-[#121A2A] text-[#FFFFFF] focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                    />
                    <label className="text-sm text-gray-300">
                      {translations.privacyConsentLabel.split(translations.privacyPolicyLink)[0]}
                      <span className="text-[#fffff]">{translations.privacyPolicyLink}</span>
                      {translations.privacyConsentLabel.split(translations.privacyPolicyLink)[1]}
                    </label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="accuracyConsent"
                      checked={formData.accuracyConsent}
                      onChange={handleChange}
                      required
                      className="mt-1 h-4 w-4 rounded border-gray-700 bg-[#121A2A] text-[#FFFFFF] focus:border-[#0B111F] focus:ring-2 focus:ring-[#0B111F] outline-none"
                    />
                    <label className="text-sm text-gray-300">{translations.accuracyConsentLabel}</label>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="inline-flex items-center px-6 py-3 border border-[#0B111F]/50 rounded-lg text-base font-medium text-[#FFFFFF] hover:bg-[#0B111F]/10 focus:outline-none focus:ring-1 focus:ring-[#0B111F]/50 transition-all duration-200 hover:scale-105"
              >
                <ChevronLeft className="mr-2 h-5 w-5" /> {translations.previousButton}
              </button>
            )}
            {currentStep < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-gray-900 bg-[#FFFFFF] hover:bg-[#0B111F]/90 focus:outline-none focus:ring-1 focus:ring-[#0B111F]/50 transition-all duration-200 px-6 py-2 w-50 md:w-50 rounded-[5px] bg-[#FFFFFF] text-[#0B111F] font-medium transition-all duration-200 hover:bg-[#0B111F] hover:text-white hover:shadow-[0px_0px_15px_5px_#FFFFFF]"
              >
                {translations.nextButton} <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            ) : (
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-gray-900 bg-[#FFFFFF] hover:bg-[#0B111F]/90 focus:outline-none focus:ring-1 focus:ring-[#0B111F]/50 transition-all duration-200px-6 py-2 w-50 md:w-50 rounded-[5px] bg-[#FFFFFF] text-[#0B111F] font-medium transition-all duration-200 hover:bg-[#0B111F] hover:text-white hover:shadow-[0px_0px_15px_5px_#FFFFFF]"
              >
                <Send className="mr-2 h-5 w-5" /> {translations.submitButton}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecruitingForm;