import skillsData from '../../../data/skills';
import Skill from './Skill';

import JavaScriptIcon from '../../../assets/skills/JavaScript-logo.png';
import ReactIcon from '../../../assets/skills/React-icon.png';
import TypeScriptIcon from '../../../assets/skills/TypeScript_round.png';
import NodeIcon from '../../../assets/skills/Node.png';
import NextIcon from '../../../assets/skills/nextjs-icon.png';
import HTMLIcon from '../../../assets/skills/html-logo.png';
import CSSIcon from '../../../assets/skills/css-logo.webp';
import WordPressIcon from '../../../assets/skills/wordpress-logo.png';
import TailwindIcon from '../../../assets/skills/tailwind-logo.png';
import SassIcon from '../../../assets/skills/sass.png';
import GitIcon from '../../../assets/skills/git-logo.png';
import JiraIcon from '../../../assets/skills/jira-logo-2.png';
import SlackIcon from '../../../assets/skills/slack-logo.png';
import RecoilIcon from '../../../assets/skills/recoil-logo.png';
import BrowserStackIcon from '../../../assets/skills/browserstack-logo.png';

const handleSkillImg = (title) => {
  const iconMap = {
    JavaScript: JavaScriptIcon,
    React: ReactIcon,
    TypeScript: TypeScriptIcon,
    Node: NodeIcon,
    'Next.js': NextIcon,
    HTML5: HTMLIcon,
    CSS3: CSSIcon,
    WordPress: WordPressIcon,
    'Tailwind CSS': TailwindIcon,
    SASS: SassIcon,
    Git: GitIcon,
    Jira: JiraIcon,
    Slack: SlackIcon,
    Recoil: RecoilIcon,
    BrowserStack: BrowserStackIcon,
  };

  return iconMap[title] || null;
};

const Skills = () => {
  return (
    <section className='px-5 py-10 md:px-20'>
      <h2 className='relative text-5xl w-full text-center font-bold margin-[0.75rem auto 2rem] md:pb-12 pt-4'>
        Skills.
      </h2>

      <div className='m-5'>
        <h3 className='text-[#6b6b6b] text-center text-2xl md:text-3xl font-semibold mb-10'>
          Languages / Frameworks
        </h3>
        <div className='flex flex-wrap justify-center items-center gap-x-10 md:gap-x-0'>
          {skillsData.skills.map((skill) => (
            <Skill
              img={handleSkillImg(skill.title)}
              title={skill.title}
              id={skill.id}
            />
          ))}
        </div>
      </div>

      <div className='mt-[5rem]'>
        <h3 className='text-[#6b6b6b] text-center text-3xl font-semibold mb-10'>
          Development Tools
        </h3>
        <div className='flex flex-wrap justify-center items-center gap-x-10 md:gap-x-0'>
          {skillsData.tools.map((tool) => (
            <Skill
              img={handleSkillImg(tool.title)}
              title={tool.title}
              id={tool.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
