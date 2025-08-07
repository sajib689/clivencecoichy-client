import Testimonials from "@/components/Home/Testimonials";
import CommitmentToExcellence from "@/components/pages/CommitmentToExcellence";
import TaxPreparation from "@/components/pages/TaxPreparation";
import TaxServiceSpecialties from "@/components/pages/TaxServiceSpecialties";
import WhatDocuments from "@/components/pages/WhatDocuments";

export default function page() {
  return (
    <div>
      <TaxPreparation />
      <WhatDocuments />
      <TaxServiceSpecialties />
      <CommitmentToExcellence />
      <Testimonials />
    </div>
  );
}
