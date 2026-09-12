function SkillList({ items }) {
    return (
        <ul>
            {items.map((skill) => (
                <li key={skill.name}>
                    {skill.icon && <img className="icons" src={skill.icon} alt={skill.name} />}
                    {skill.name}
                </li>
            ))}
        </ul>
    );
}

export default SkillList;
