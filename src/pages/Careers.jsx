import React from "react";

export default function Careers() {

  const jobs = [
    {
      title: "Frontend Developer",
      location: "Remote",
      type: "Full Time",
    },
    {
      title: "Backend Developer",
      location: "Remote",
      type: "Full Time",
    },
    {
      title: "Digital Marketing Manager",
      location: "Delhi, India",
      type: "Full Time",
    },
    {
      title: "Customer Success Executive",
      location: "Remote",
      type: "Full Time",
    },
  ];

  const benefits = [
    {
      title: "Flexible Work",
      desc: "Work from anywhere with flexible working hours.",
    },
    {
      title: "Career Growth",
      desc: "Learn and grow with industry experts.",
    },
    {
      title: "Great Team",
      desc: "Work with passionate and talented people.",
    },
    {
      title: "Competitive Salary",
      desc: "We reward talent with great compensation.",
    },
  ];

  return (
    <div>

      {/* Hero Section */}
      <section className="bg-gray-50 py-20 text-center">

        <h1 className="text-5xl font-bold mb-6">
          Join Our Team
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Help us build the future of customer communication using WhatsApp.
          At AiSensy we empower businesses to grow through automation.
        </p>

        <button className="mt-8 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
          View Open Positions
        </button>

      </section>

      {/* Why Join Us */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-10 text-center">

          <h2 className="text-4xl font-bold mb-12">
            Why Join AiSensy?
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {benefits.map((item, index) => (
              <div
                key={index}
                className="border p-6 rounded-xl bg-white shadow-sm"
              >

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Culture Section */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="team"
            className="rounded-xl shadow-lg"
          />

          <div>

            <h2 className="text-3xl font-bold mb-4">
              Our Culture
            </h2>

            <p className="text-gray-600 mb-4">
              At AiSensy we believe in innovation, collaboration,
              and continuous learning. Our team works together to
              solve real business problems.
            </p>

            <p className="text-gray-600">
              We create an environment where creativity and ownership
              are encouraged to build impactful solutions.
            </p>

          </div>

        </div>

      </section>

      {/* Job Openings */}
      <section className="py-20">

        <div className="max-w-5xl mx-auto px-10">

          <h2 className="text-4xl font-bold text-center mb-12">
            Open Positions
          </h2>

          <div className="space-y-6">

            {jobs.map((job, index) => (
              <div
                key={index}
                className="border p-6 rounded-xl flex justify-between items-center"
              >

                <div>
                  <h3 className="text-xl font-semibold">
                    {job.title}
                  </h3>

                  <p className="text-gray-500">
                    {job.location} • {job.type}
                  </p>
                </div>

                <button className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600">
                  Apply
                </button>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-green-500 text-white py-16 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Don’t see a role for you?
        </h2>

        <p className="mb-6">
          Send us your resume and we’ll get in touch.
        </p>

        <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold">
          Contact Us
        </button>

      </section>

    </div>
  );
}