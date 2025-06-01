import React from "react";

const FourStepSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-title mt-5">
          The Four Steps to Insurance <br /> Claims
        </h3>
        {/* contents  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          {/* card 1  */}
          <div>
            <div className="text-2xl font-bold text-red-primary border border-red-primary w-12 h-12 inline-block px-4 py-2 rounded-full">
              1
            </div>
            <h2 className="text-lg lg:text-xl font-semibold text-title mt-4">
              Property Inspection
            </h2>
            <p className="mt-4">
              Before starting the insurance claims process, it’s important to
              have your property inspected for storm damage. Storm damage refers
              to harm caused by high winds, hail, and flying debris (like
              branches), which can affect the exterior and even interior of your
              home. The extent of damage is determined by the condition of the
              roof, siding, and gutters after the storm. We look for dented,
              cracked, or missing shingles or siding, poorly draining gutters,
              and interior signs like water leaks or stains. Even if you don’t
              notice damage, that doesn’t mean it’s not there. To protect your
              home from worsening damage, moisture, or mold, contact ARC for a
              free professional inspection after any significant storm.
            </p>
          </div>
          {/* card 2  */}
          <div>
            <div className="text-2xl font-bold text-red-primary border border-red-primary w-12 h-12 inline-block px-4 py-2 rounded-full">
              2
            </div>
            <h2 className="text-lg lg:text-xl font-semibold text-title mt-4">
              Submit a Claim
            </h2>
            <p className="mt-4">
              Once storm damage is confirmed, the next step is to file a claim
              with your insurance company. This starts by identifying the Date
              of Loss (DOL)—the date the storm occurred. Insurance companies
              require a claim to be submitted within a certain time window from
              that DOL. Because storm damage often goes unnoticed until it
              worsens, many homeowners miss that window. At ARC, our experienced
              team is trained to identify storm dates in your area and document
              the damage properly, helping you file your claim with confidence
              and minimize your out-of-pocket costs.
            </p>
          </div>
          {/* card 3  */}
          <div>
            <div className="text-2xl font-bold text-red-primary border border-red-primary w-12 h-12 inline-block px-4 py-2 rounded-full">
              3
            </div>
            <h2 className="text-lg lg:text-xl font-semibold text-title mt-4">
              Adjuster Appointment
            </h2>
            <p className="mt-4">
              When your insurance adjuster is scheduled to inspect your
              property, an ARC Project Advisor will meet them onsite. Our job is
              to walk the property with the adjuster to ensure all storm-related
              damage is identified and properly documented. Having a
              knowledgeable contractor present significantly increases the
              chances of a fair and approved claim. At ARC, we advocate for the
              homeowner—not the insurance company.
            </p>
          </div>
          {/* card 4  */}
          <div>
            <div className="text-2xl font-bold text-red-primary border border-red-primary w-12 h-12 inline-block px-4 py-2 rounded-full">
              3
            </div>
            <h2 className="text-lg lg:text-xl font-semibold text-title mt-4">
              Schedule & Build
            </h2>
            <p className="mt-4">
              After the claim is approved, your ARC representative will review
              your insurance estimate with you and explain every detail. The
              insurance company provides a Replacement Cost Value (RCV)—the full
              amount it would cost to restore the damage. You’ll typically
              receive this in two payments: the Actual Cash Value (ACV) up
              front, and the depreciation payment after the work is complete and
              invoiced. Once we’ve reviewed everything together, we’ll help you
              choose materials and colors, then schedule your project. From
              start to finish, ARC makes the process smooth, clear, and
              stress-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourStepSection;
