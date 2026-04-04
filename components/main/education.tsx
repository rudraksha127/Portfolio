import { EDUCATION } from "@/constants";

export const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center py-20 px-6 md:px-10"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Education
      </h1>

      <div className="w-full max-w-5xl flex flex-col gap-6">
        {EDUCATION.map((item) => (
          <article
            key={`${item.institute}-${item.level}`}
            className="border border-[#2A0E61] rounded-xl bg-[#0a0616]/80 p-5 md:p-6"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              {item.institute}
            </h2>
            <p className="text-gray-300 mt-1">{item.level}</p>
            <p className="text-gray-400">{item.duration}</p>
            <p className="text-gray-300 mt-3">
              <span className="font-semibold text-white">Grade:</span>{" "}
              {item.grade}
            </p>
            <div className="mt-3">
              <p className="font-semibold text-white">Activities and societies:</p>
              <ul className="list-disc ml-5 mt-1 text-gray-300 space-y-1">
                {item.activities.map((activity) => (
                  <li key={activity}>{activity}</li>
                ))}
              </ul>
            </div>
            <p className="text-gray-300 mt-3">{item.summary}</p>
            <p className="text-gray-300 mt-3">
              <span className="font-semibold text-white">Skills:</span>{" "}
              {item.skills.join(", ")}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
