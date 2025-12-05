import React from "react";
import { PiClipboard } from "react-icons/pi";

const About = () => {
  return (
    <div className="mt-10 bg-white rounded-2xl">
      <div className="p-10">
        <h2 className="text-4xl font-bold mb-3">About Us</h2>
        <p className="text-gray-500">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal <br /> packages to business shipments — we
          deliver on time, every time.
        </p>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Story"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <p className="text-gray-500 mb-3">
            Kamran always loved tinkering with things—old radios, broken toys,
            even his school calculator. But the day he opened his browser’s
            “Inspect Element” for the first time, everything changed. He
            realized that the entire web—millions of sites—was just code someone
            wrote. And maybe, he thought, he could write it too.
          </p>
          <p className="text-gray-500 mb-3">
            One evening, he sat down at his desk, opened YouTube, and searched
            “How to build a website with HTML and CSS.” The tutorial introduced
            three strange words: HTML, CSS, and JavaScript. They felt
            complicated, but they also felt powerful. He wrote his first line of
            code:
          </p>
          <p className="text-gray-500 mb-3">
            Over the next weeks, he built small projects—a colorful button, a
            simple to-do app, and a landing page that looked almost like the
            tutorials he watched. Each mistake taught him something new: a
            missing semicolon, a broken layout, a div that refused to center no
            matter how many times he tried. But every problem solved made him a
            little better than yesterday
          </p>
          <p className="text-gray-500 mb-3">
            One day, he decided to create something meaningful—a website for a
            local bookstore that had no online presence. He designed the layout,
            added book categories, and wrote clean, readable code. When he
            finally showed it to the shop owner, their face lit up. “This is
            exactly what we needed,” they said.
          </p>
          <p className="text-gray-500 mb-3">
            That night, Kamran realized something important: web development
            wasn’t just about code. It was about solving real problems and
            helping real people. With every project, he grew more confident. He
            wasn’t just learning to build websites—he was building a future for
            himself. And this was only the beginning.
          </p>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Mission"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <p className="text-gray-500 mb-3">
            A mission is a clear and meaningful purpose that guides a person,
            team, or organization. It describes why something exists and what it
            aims to achieve. A good mission gives direction, motivation, and a
            sense of responsibility. It helps people stay focused, make
            decisions, and work toward a common goal.
          </p>
          <p className="text-gray-500 mb-3">
            For organizations, a mission is usually written in a short
            statement. This mission statement explains what the organization
            does, who it serves, and what value it provides. For example, a
            charity’s mission might be “to provide free education to children in
            need.” This tells everyone what their focus is and why their work
            matters. Companies also use missions to show their values and
            long-term goals. A tech company might say its mission is “to create
            tools that make communication faster and easier.” This helps workers
            understand the company’s priorities and guides their future
            projects.
          </p>
          <p className="text-gray-500 mb-3">
            A mission can also be personal. People often set missions for their
            own lives, based on their dreams and beliefs. A student’s personal
            mission might be “to learn new skills and help my family improve our
            future.” A teacher’s mission could be “to inspire students to think
            creatively and believe in themselves.” These personal missions help
            individuals stay motivated, especially during challenges.
          </p>
          <p className="text-gray-500 mb-3">
            A mission is not just a sentence—it’s a commitment. When someone or
            an organization has a mission, it influences daily choices,
            long-term plans, and behavior. It reminds people of what truly
            matters and helps them avoid distractions. Missions can change over
            time, especially as people grow or situations shift, but the purpose
            behind them remains important. In short, a mission is a guiding
            light. It explains the purpose behind actions and helps people stay
            focused on achieving something meaningful and impactful.
          </p>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Success"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <p className="text-gray-500 mb-3">
            Success means something different to everyone. For some, it might be
            good grades, a stable career, or learning a new skill. For others,
            success could mean becoming confident, helping people, or living a
            balanced life. Even though everyone’s goal is different, the path to
            success often follows a few important principles.
          </p>
          <p className="text-gray-500 mb-3">
            The first key to success is setting clear goals. When you know what
            you want, it becomes easier to plan your steps. Your goals don’t
            need to be huge; even small goals can lead to big achievements over
            time. Write them down, break them into smaller tasks, and focus on
            one step at a time.
          </p>
          <p className="text-gray-500 mb-3">
            Next comes consistency. Success doesn’t usually happen overnight. It
            comes from small, repeated actions—studying a little every day,
            practicing a skill regularly, or improving your habits slowly.
            Consistency matters more than perfection. Even if progress feels
            slow, it still counts.
          </p>
          <p className="text-gray-500 mb-3">
            Another important part of success is learning from mistakes.
            Everyone fails sometimes, and that’s completely normal. What matters
            is how you respond. Instead of getting discouraged, try to
            understand what went wrong and how you can improve next time.
            Mistakes teach lessons that winning never can.
          </p>
          <p className="text-gray-500 mb-3">
            Success also requires a positive mindset. Believing in yourself
            doesn’t mean you’ll always feel confident, but it means you keep
            trying even when things are difficult. Surround yourself with
            supportive people—friends, family, teachers—who encourage your
            growth.
          </p>
        </div>
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Team & Others"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <p className="text-gray-500 mb-3">
            A team is a group of people who come together to work toward a
            common goal. Each person brings unique skills, strengths, and ideas.
            When people work as a team, they can accomplish tasks faster, solve
            problems more creatively, and support each other through challenges.
            Teamwork teaches communication, cooperation, leadership, and trust.
          </p>
          <p className="text-gray-500 mb-3">
            In a team: Everyone has a role Ideas are shared Responsibilities are
            divided Success and mistakes are managed together A strong team
            doesn't mean everyone is the same. In fact, differences make a team
            stronger. One person might be great at planning, another at
            technical work, and another at communication. When these talents
            combine, the results are usually better than what one person could
            do alone.
          </p>
          <p className="text-gray-500 mb-3">
            Next comes consistency. Success doesn’t usually happen overnight. It
            comes from small, repeated actions—studying a little every day,
            practicing a skill regularly, or improving your habits slowly.
            Consistency matters more than perfection. Even if progress feels
            slow, it still counts.
          </p>
          <p className="text-gray-500 mb-3">
            The best results usually come from balancing both. Even in a team,
            each person must complete their own tasks. And even when working
            alone, people often need feedback, guidance, or collaboration with
            others. In school, sports, workplaces, and even family life, success
            often requires a mix of teamwork and individual effort. Knowing when
            to work together and when to work alone is a powerful skill.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
