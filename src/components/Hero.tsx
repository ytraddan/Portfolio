import Contacts from "./Contacts";

export default function Hero() {
  return (
    <section className="space-y-6" id="about">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="brutalist-title">Mark Polegoshko</h1>
            <h2 className="text-xl md:text-2xl text-blue-500 font-semibold">
              Frontend Developer
            </h2>
          </div>
          <p className="brutalist-text text-lg md:text-xl max-w-2xl">
            Hey! I&apos;m a frontend developer who loves creating delightful web
            experiences. I enjoy working with React and Next.js to build
            intuitive interfaces that people would love to use. Always excited
            to turn creative ideas into smooth, responsive applications.
          </p>
        </div>
        <Contacts />
      </div>
    </section>
  );
}
