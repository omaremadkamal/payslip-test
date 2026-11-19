import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
          100% Payroll Compliance <br />
          with Egyptian Tax & <br />
          Social Insurance Laws
        </h1>
        <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
          Run automated payroll in minutes. We handle the local regulations,
          taxes, and social insurance calculations so you don't have to.
        </p>
        <div>
          <Link
            href="/contact-us"
            className="inline-block bg-orange-500 text-white px-8 py-3.5 rounded-md text-lg font-medium hover:bg-orange-600 transition shadow-md"
          >
            Start Now
          </Link>
        </div>
      </div>

      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-end">
        <img
          src="/hero-illustration.png.png"
          alt="Payroll Dashboard Illustration"
          className="w-full max-w-lg object-contain"
        />
      </div>
    </section>
  );
}
