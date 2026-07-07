import ContractorAboutPage from "./pages/AboutPage";
import ContractorContactPage from "./pages/ContactPage";
import ContractorHomePage from "./pages/HomePage";
import ContractorProjectsPage from "./pages/ProjectsPage";
import ContractorReviewsPage from "./pages/ReviewsPage";
import ContractorServicesPage from "./pages/ServicesPage";

export const contractorIndustryAdapter = {
  id: "contractor",
  pages: {
    home: ContractorHomePage,
    about: ContractorAboutPage,
    services: ContractorServicesPage,
    projects: ContractorProjectsPage,
    reviews: ContractorReviewsPage,
    contact: ContractorContactPage,
  },
};

