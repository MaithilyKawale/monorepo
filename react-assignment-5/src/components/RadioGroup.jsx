function RadioGroup({ label, options, value, onChange }) {
    return (
        <div className="input-field">
            <label>{label}</label>
            <div className="radio-group">
                {options.map(option => (
                    <label key={option}>
                        <input
                            type="radio"
                            value={option}
                            checked={value === option}
                            onChange={e => onChange(e.target.value)}
                        />
                        {option}
                    </label>
                ))}
            </div>
        </div>
    );
}

export default RadioGroup;
