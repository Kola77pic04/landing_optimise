export interface QuizData {
  provider: string;
  eligible: string;
  budget: string;
  address: string;
  firstname: string;
  lastname: string;
  phone: string;
  selectedOffer?: string; // <-- nouvelle propriété
}