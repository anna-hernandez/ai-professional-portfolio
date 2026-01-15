
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-24 px-4 bg-[#f8f8f8]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl font-black mb-8">A bit about me.</h2>
          
          <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
            <p>
              I've now worked in Data Science for over 10 years. They've gone fast. You can read about my journey here.
            </p>
            <div className="neo-border bg-white p-2 neo-shadow transform rotate-2 space-y-2 ">
            <h3 className="font-bold text-xl mb-4">Stepping.</h3>
            <p>
              I started in academia, through my PhD in Computational
              Biology. Then, I used graph and clustering algorithms to understand the physical and functional relationships
              formed between viral and host proteins during infection, and physics-guided methods to model the three-dimensional structure of viral entry
              proteins. That led to 5 papers and 1 patent application (which was
              got paused due to the difficulty of generating the mutant protein
              at the industrial scale necessary for a profitable
              commercialisation).
            </p>
            </div>

            <div className="neo-border bg-white p-2 neo-shadow transform rotate-7 space-y-2 ">
            <h3 className="font-bold text-xl mb-4">Jumping.</h3>
            <p>
              After two short postdocs where I mostly worked on software to
              distribute the data of my research (designing databases and
              divulgation websites), I stepped into the data science world
              through an internship with Faculty AI (now part of Accenture).
              That opened my mind to industry, to the translation of research
              and theory into products and solutions. That internship was
              followed by a couple of years at Faculty where I learned from
              great colleagues and mentors in a fast-paced and dynamic
              environment. There I worked in projects in the legal, education,
              biosciences, government security and marketing domains. Many of my
              projects were NLP-focused, at the time its potential was to be
              fully unleashed. I worked on projects that required more simple
              techniques, such as document classification with algorithms as
              “simple” as logistic regression and having to handcraft the
              features yourself, to much more advanced approaches such as
              customising the architecture and fine-tuning a generative model
              (at a time when generative models were a dream rather than a
              reality). I also worked on computer vision and geo-special data
              science projects, and for a while I joined the R+D department and
              collaborated in ML-guided marketing attribution research using
              causal inference techniques.
            </p>
            </div>
            
            <div className="neo-border bg-white p-2 neo-shadow transform rotate-4 space-y-2 ">
            <h3 className="font-bold text-xl mb-4">Scaling.</h3>
            <p>
              My next career step took me to WildBrain, a production and
                    distribution company of cartoons and other live action shows for
                    young audiences. Not only I had to learn about a new domain,
                    entertainment, but also adjust to a very different company
                    structure: from a mid-sized company with a relatively large DS
                    team (~50% of the company employees) to a very large,
                    multi-national company, with thousands of employees, with a very
                    small data science team. Moreover, soon after joining, the data
                    science team became only me. From there, I progressively
                    transitioned from “plain” data scientist to senior data scientist,
                    and finally team lead. 
              </p>
              <p>
              At WildBrain, I worked in all sorts of
                projects. As a digital entertainment company, we had access to
                large volumes of all sorts of data: audio, text, video, image.
                Structured, unstructured, semi-structured data. You name it.
                Recommendation systems, audience demographics estimators,
                characters and emotion recognisers, performance predictors, are
                just some examples. All the stakeholders were internal but that
                didn’t reduce the variety of our challenges. As “plain” data
                scientist, I worked on maintaining the existing codebases and
                projects, and adding new features to them. I collaborated with
                stakeholders to understand their feature requirements and
                priorities. In parallel, I worked on growing the team,
                interviewing external candidates and mentoring colleagues from
                other WildBrain departments interested in moving to Data Science
                world. As senior data scientist I took responsibility for
                end-to-end works streams and honed my skills as mentor. It trained
                me to delegate, got me hands on designing and implementing the
                MLOps strategy of team, and drove me closer to decision-makers to
                align the data team roadmap to the company strategy. I then
                finally moved onto be tech lead. In this phase, I remained an
                individual contributor, writing code and shipping features, for
                high priority or (my) legacy projects, but combined this work with
                business strategy, team development activities (1-on-1s, project
                retrospectives, providing access to learning resources), and
                coordination with stakeholders and business owners to help define
                strategy and meet milestones, whilst protecting the sanity of my
                tech team. A particular project I am proud of during this stage,
                is devising and rolling out the Generative AI adoption framework
                for the company, coinciding with the explosion of generative
                machine-learning models.
            </p>
            </div>

            <div className="neo-border bg-white p-2 neo-shadow transform rotate-4 space-y-2 ">
            <h3 className="font-bold text-xl mb-4">Spreading.</h3>
              <p>
              Currently, I'm deep into AI consultancy and industrial automation
              at INSUS, AG., a Swiss start-up consultancy dedicated to providing
              AI-led services to companies within the energy-intensive industry
              sector. Here, I work as AI Ambassador and Senior Data Scientist
              within the R+I team. Part of my work is still technical; I develop
              software prototypes to show clients the value that the ideated
              solution can bring to them and how it tangibly does so. In our
              current solutions, there is a strong Generative AI component. The
              other part of my work is a mixture of strategic guidance
              activities: from helping companies navigate the AI landscape
              through AI literacy workshops, to guide their AI adoption in a
              structured, and goals-aligned way, taking each company’s very
              specific context into consideration, to representing the company
              at community events (conferences, webinars, public engagements).
              In parallel, I work hand-to-hand with the sales team to engage
              with new clients, generate and convert leads, and ideate new
              products and solutions specific that help organisations face their
              challenges in a more efficient and sustainability-aware manner. My
              journey so far has allowed me to complement my highly technical
              background, with strategic thinking and product design skills,
              across different organisation sizes and structures, industry
              sectors, and with members from very diverse professional and
              personal backgrounds.
            </p>
            </div>
            <p>
              When I'm not looking at a terminal, I'm usually teaching. Making AI accessible to non-technical stakeholders is my favorite part of the job. I truly believe that an AI-literate workforce is our best shot at solving the sustainability challenges of the next fifty years.
            </p>
          </div>
        </div>
        
        {/* <div className="flex flex-col gap-8"> */}
          
          <div className="neo-border bg-[#bef264] p-8 neo-shadow -rotate-1">
            <h3 className="font-bold text-xl mb-4">Core Focus Areas</h3>
            <ul className="space-y-2 font-medium">
              <li>→ Sustainability & Circular Economy</li>
              <li>→ Industrial AI / Predictive Maintenance</li>
              <li>→ Generative AI Governance & Ethics</li>
              <li>→ Technical Strategy for Product Teams</li>
              <li>→ Human-AI Collaboration Frameworks</li>
            </ul>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default About;
