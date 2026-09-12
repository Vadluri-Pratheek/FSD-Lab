import SkillList from './SkillList';

function Skills({ languages, tools }) {
    return (
        <section id="Skills">
            <h2>SKILLS</h2>
            <h3>Languages</h3>
            <SkillList items={languages} />
            <h3>Technologies &amp; Tools</h3>
            <SkillList items={tools} />
        </section>
    );
}

export default Skills;
