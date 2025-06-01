"use client";

import { useState } from "react";

export default function CareerDetails() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    startDate: "",
    position: "Outside Sales Rep",
    coverLetter: null,
    resume: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (e.target instanceof HTMLInputElement && e.target.type === "file") {
      const input = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: input.files ? input.files[0] : null,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Replace with API submission logic
  };

  return (
    <div className="bg-white max-w-7xl mx-auto px-6 my-20 md:flex md:gap-12 relative">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-black">
            Project Advisor – Exterior Restoration Outside Sales
          </h1>
          <div className="mt-4 text-gray-600 space-y-1">
            <p>
              <strong>Location:</strong> Greater Chicago or Cincinnati / Dayton
            </p>
            <p>
              <strong>Compensation:</strong> 100% Commission
            </p>
            <p>
              <strong>Type:</strong> Full-Time or Part Time
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-black mb-2">
            About the Role
          </h2>
          <p className="text-gray-700">
            As a Project Advisor at ARC, you&apos;ll be the face of our
            company—building relationships with homeowners, identifying
            storm-related damage, and guiding customers through the insurance
            restoration process...
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-black mb-2">
            What You’ll Do
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Generate leads through door-to-door canvassing</li>
            <li>Educate homeowners on insurance restoration</li>
            <li>
              Conduct property inspections (roof, siding, gutters, windows)
            </li>
            <li>Assist with filing insurance claims</li>
            <li>Advocate with insurance adjusters</li>
            <li>Provide estimates and close deals</li>
            <li>Be the main point of contact</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-black mb-2">
            Who We’re Looking For
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>A self-motivated go-getter</li>
            <li>Strong communicator</li>
            <li>Comfortable working outdoors</li>
            <li>Sales experience is a plus</li>
            <li>Valid driver’s license and reliable transportation</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-black mb-2">Who You Get</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Uncapped commissions with performance bonuses</li>
            <li> Paid training and support from experienced leaders</li>
            <li> High-quality marketing materials and branded gear</li>
            <li> Opportunity for growth within a values-driven company</li>
            <li>
              {" "}
              The satisfaction of helping homeowners when they need it most
            </li>
            <li>
              {" "}
              Full-Time W-2 Employees are eligible for health insurance, 401k
              matching, and vehicle reimbursement
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-black mb-2">
            Think you’re a fit?
          </h2>
          <p>
            Join the ARC team and help us restore homes with integrity and
            purpose. Apply today and start making a difference—one roof at a
            time.
          </p>
        </div>
      </div>

      {/* Right Form Section */}
      <form
        onSubmit={handleSubmit}
        className="mt-12 md:mt-0 md:w-1/2 bg-gray-50 h-fit p-8 rounded-lg shadow space-y-6"
      >
        <h2 className="text-2xl font-semibold text-black">Apply Today</h2>

        <div>
          <label className="block text-black font-semibold">Name*</label>
          <input
            type="text"
            name="name"
            required
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label className="block text-black font-semibold">Email*</label>
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label className="block text-black font-semibold">Phone*</label>
          <input
            type="tel"
            name="phone"
            required
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label className="block text-black font-semibold">Start Date</label>
          <input
            type="date"
            name="startDate"
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label className="block text-black font-semibold">
            Desired Position
          </label>
          <select
            name="position"
            defaultValue="Outside Sales Rep"
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded p-2"
          >
            <option>Outside Sales Rep</option>
            <option>Inside Sales Rep</option>
            <option>Project Manager</option>
          </select>
        </div>

        <div className="flex gap-4">
          <div>
            <label className="block text-gray-700">Upload Cover Letter</label>
            <input
              type="file"
              name="coverLetter"
              onChange={handleChange}
              className="mt-1 block w-full text-sm text-gray-600"
            />
          </div>
          <div>
            <label className="block text-gray-700">Upload Resume</label>
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              className="mt-1 block w-full text-sm text-gray-600"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
